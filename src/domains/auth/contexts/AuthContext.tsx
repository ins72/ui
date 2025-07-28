/**
 * Authentication Context
 * 
 * This context provides authentication state management throughout the application.
 * It handles user authentication, session management, and provides authentication
 * methods to all child components.
 */

'use client';

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { authService } from '../services/authService';
import { 
  AuthState, 
  AuthActions, 
  AuthContextType, 
  LoginRequest, 
  RegisterRequest,
  UpdateProfileRequest,
  UpdatePasswordRequest,
  ResetPasswordRequest,
  AuthStatus,
  User
} from '../types';

// Initial state
const initialState: AuthState = {
  user: null,
  status: AuthStatus.IDLE,
  error: null,
  sessionExpiry: null,
  isAuthenticated: false,
  isLoading: true
};

// Action types
type AuthAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_ERROR'; payload: { code: string; message: string; field?: string; details?: Record<string, any> } | null }
  | { type: 'SET_SESSION_EXPIRY'; payload: Date | null }
  | { type: 'CLEAR_ERROR' }
  | { type: 'LOGOUT' };

// Reducer function
function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      };
    
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
        status: action.payload ? AuthStatus.AUTHENTICATED : AuthStatus.UNAUTHENTICATED,
        isLoading: false
      };
    
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        status: AuthStatus.ERROR,
        isLoading: false
      };
    
    case 'SET_SESSION_EXPIRY':
      return {
        ...state,
        sessionExpiry: action.payload
      };
    
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
        status: state.user ? AuthStatus.AUTHENTICATED : AuthStatus.UNAUTHENTICATED
      };
    
    case 'LOGOUT':
      return {
        ...initialState,
        isLoading: false
      };
    
    default:
      return state;
  }
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Initialize authentication on mount
  useEffect(() => {
    initializeAuth();
  }, []);

  // Check session expiry periodically
  useEffect(() => {
    if (state.sessionExpiry) {
      const checkSessionExpiry = () => {
        if (state.sessionExpiry && new Date() >= state.sessionExpiry) {
          handleLogout();
        }
      };

      const interval = setInterval(checkSessionExpiry, 60000); // Check every minute
      return () => clearInterval(interval);
    }
  }, [state.sessionExpiry]);

  // Auto-refresh token before expiry
  useEffect(() => {
    if (state.sessionExpiry) {
      const refreshBeforeExpiry = () => {
        const now = new Date();
        const timeUntilExpiry = state.sessionExpiry!.getTime() - now.getTime();
        const fiveMinutes = 5 * 60 * 1000;

        if (timeUntilExpiry <= fiveMinutes && timeUntilExpiry > 0) {
          handleRefreshToken();
        }
      };

      const interval = setInterval(refreshBeforeExpiry, 30000); // Check every 30 seconds
      return () => clearInterval(interval);
    }
  }, [state.sessionExpiry]);

  /**
   * Initialize authentication state
   */
  const initializeAuth = async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });

      // Check if user is authenticated
      if (authService.isAuthenticated()) {
        const user = authService.getCurrentUser();
        const sessionExpiry = authService.getSessionExpiry();

        if (user && sessionExpiry) {
          dispatch({ type: 'SET_USER', payload: user });
          dispatch({ type: 'SET_SESSION_EXPIRY', payload: sessionExpiry });
        } else {
          // Try to refresh token
          await handleRefreshToken();
        }
      } else {
        dispatch({ type: 'SET_USER', payload: null });
      }
    } catch (error) {
      console.error('Auth initialization error:', error);
      dispatch({ type: 'SET_USER', payload: null });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  /**
   * Handle login
   */
  const handleLogin = async (credentials: LoginRequest): Promise<void> => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'CLEAR_ERROR' });

      const response = await authService.login(credentials);
      
      dispatch({ type: 'SET_USER', payload: response.user });
      dispatch({ type: 'SET_SESSION_EXPIRY', payload: new Date(Date.now() + response.expiresIn * 1000) });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Login failed';
      dispatch({ 
        type: 'SET_ERROR', 
        payload: { 
          code: 'LOGIN_FAILED', 
          message: errorMessage 
        } 
      });
      throw error;
    }
  };

  /**
   * Handle registration
   */
  const handleRegister = async (userData: RegisterRequest): Promise<void> => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'CLEAR_ERROR' });

      const response = await authService.register(userData);
      
      dispatch({ type: 'SET_USER', payload: response.user });
      dispatch({ type: 'SET_SESSION_EXPIRY', payload: new Date(Date.now() + response.expiresIn * 1000) });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Registration failed';
      dispatch({ 
        type: 'SET_ERROR', 
        payload: { 
          code: 'REGISTRATION_FAILED', 
          message: errorMessage 
        } 
      });
      throw error;
    }
  };

  /**
   * Handle logout
   */
  const handleLogout = async (): Promise<void> => {
    try {
      await authService.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      dispatch({ type: 'LOGOUT' });
    }
  };

  /**
   * Handle token refresh
   */
  const handleRefreshToken = async (): Promise<void> => {
    try {
      const response = await authService.refreshToken();
      
      dispatch({ type: 'SET_USER', payload: response.user });
      dispatch({ type: 'SET_SESSION_EXPIRY', payload: new Date(Date.now() + response.expiresIn * 1000) });
    } catch (error) {
      console.error('Token refresh failed:', error);
      await handleLogout();
    }
  };

  /**
   * Handle profile update
   */
  const handleUpdateProfile = async (data: UpdateProfileRequest): Promise<void> => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'CLEAR_ERROR' });

      const updatedUser = await authService.updateProfile(data);
      dispatch({ type: 'SET_USER', payload: updatedUser });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Profile update failed';
      dispatch({ 
        type: 'SET_ERROR', 
        payload: { 
          code: 'PROFILE_UPDATE_FAILED', 
          message: errorMessage 
        } 
      });
      throw error;
    }
  };

  /**
   * Handle password update
   */
  const handleUpdatePassword = async (data: UpdatePasswordRequest): Promise<void> => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'CLEAR_ERROR' });

      await authService.updatePassword(data);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Password update failed';
      dispatch({ 
        type: 'SET_ERROR', 
        payload: { 
          code: 'PASSWORD_UPDATE_FAILED', 
          message: errorMessage 
        } 
      });
      throw error;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  /**
   * Handle forgot password
   */
  const handleForgotPassword = async (email: string): Promise<void> => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'CLEAR_ERROR' });

      await authService.forgotPassword({ email });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Forgot password failed';
      dispatch({ 
        type: 'SET_ERROR', 
        payload: { 
          code: 'FORGOT_PASSWORD_FAILED', 
          message: errorMessage 
        } 
      });
      throw error;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  /**
   * Handle password reset
   */
  const handleResetPassword = async (data: ResetPasswordRequest): Promise<void> => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'CLEAR_ERROR' });

      await authService.resetPassword(data);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Password reset failed';
      dispatch({ 
        type: 'SET_ERROR', 
        payload: { 
          code: 'PASSWORD_RESET_FAILED', 
          message: errorMessage 
        } 
      });
      throw error;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  /**
   * Handle email verification
   */
  const handleVerifyEmail = async (token: string): Promise<void> => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'CLEAR_ERROR' });

      await authService.verifyEmail(token);
      
      // Refresh user data to get updated verification status
      if (state.user) {
        const updatedUser = await authService.getProfile();
        dispatch({ type: 'SET_USER', payload: updatedUser });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Email verification failed';
      dispatch({ 
        type: 'SET_ERROR', 
        payload: { 
          code: 'EMAIL_VERIFICATION_FAILED', 
          message: errorMessage 
        } 
      });
      throw error;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  /**
   * Handle resend verification
   */
  const handleResendVerification = async (email: string): Promise<void> => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'CLEAR_ERROR' });

      await authService.resendVerification(email);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Resend verification failed';
      dispatch({ 
        type: 'SET_ERROR', 
        payload: { 
          code: 'RESEND_VERIFICATION_FAILED', 
          message: errorMessage 
        } 
      });
      throw error;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  /**
   * Clear error
   */
  const handleClearError = (): void => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  // Context value
  const contextValue: AuthContextType = {
    ...state,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
    refreshToken: handleRefreshToken,
    updateProfile: handleUpdateProfile,
    updatePassword: handleUpdatePassword,
    forgotPassword: handleForgotPassword,
    resetPassword: handleResetPassword,
    verifyEmail: handleVerifyEmail,
    resendVerification: handleResendVerification,
    clearError: handleClearError
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
} 