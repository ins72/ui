import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { apiClient } from '@/infrastructure/api/apiClient';

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    plan: string;
    status: string;
    profile: any;
    preferences: any;
    createdAt?: string;
}

interface AuthState {
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null;
}

type AuthAction =
    | { type: 'AUTH_START' }
    | { type: 'AUTH_SUCCESS'; payload: User }
    | { type: 'AUTH_ERROR'; payload: string }
    | { type: 'AUTH_LOGOUT' }
    | { type: 'UPDATE_PROFILE'; payload: User };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'AUTH_START':
            return { ...state, loading: true, error: null };
        case 'AUTH_SUCCESS':
            return { ...state, user: action.payload, loading: false, error: null };
        case 'AUTH_ERROR':
            return { ...state, loading: false, error: action.payload };
        case 'AUTH_LOGOUT':
            return { ...state, user: null, token: null, loading: false, error: null };
        case 'UPDATE_PROFILE':
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

const initialState: AuthState = {
    user: null,
    token: null,
    loading: true,
    error: null,
};

interface AuthContextType extends AuthState {
    login: (credentials: { email: string; password: string }) => Promise<void>;
    register: (userData: { name: string; email: string; password: string; plan?: string }) => Promise<void>;
    logout: () => void;
    updateProfile: (profileData: any) => Promise<void>;
    clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        // Check for existing token on app load
        const token = localStorage.getItem('token');
        if (token) {
            apiClient.setToken(token);
            // Verify token and get user profile
            apiClient.getProfile()
                .then((response) => {
                    dispatch({ type: 'AUTH_SUCCESS', payload: response.data });
                })
                .catch(() => {
                    localStorage.removeItem('token');
                    dispatch({ type: 'AUTH_LOGOUT' });
                });
        } else {
            dispatch({ type: 'AUTH_LOGOUT' });
        }
    }, []);

    const login = async (credentials: { email: string; password: string }) => {
        try {
            dispatch({ type: 'AUTH_START' });
            const response = await apiClient.login(credentials);
            apiClient.setToken(response.token);
            localStorage.setItem('token', response.token);
            dispatch({ type: 'AUTH_SUCCESS', payload: response.data.user });
        } catch (error: any) {
            dispatch({ type: 'AUTH_ERROR', payload: error.message });
        }
    };

    const register = async (userData: { name: string; email: string; password: string; plan?: string }) => {
        try {
            dispatch({ type: 'AUTH_START' });
            const response = await apiClient.register(userData);
            apiClient.setToken(response.token);
            localStorage.setItem('token', response.token);
            dispatch({ type: 'AUTH_SUCCESS', payload: response.data.user });
        } catch (error: any) {
            dispatch({ type: 'AUTH_ERROR', payload: error.message });
        }
    };

    const logout = () => {
        apiClient.setToken(null);
        localStorage.removeItem('token');
        dispatch({ type: 'AUTH_LOGOUT' });
    };

    const updateProfile = async (profileData: any) => {
        try {
            const response = await apiClient.updateProfile(profileData);
            dispatch({ type: 'UPDATE_PROFILE', payload: response.data });
        } catch (error: any) {
            dispatch({ type: 'AUTH_ERROR', payload: error.message });
        }
    };

    const clearError = () => {
        dispatch({ type: 'AUTH_ERROR', payload: '' });
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            login,
            register,
            logout,
            updateProfile,
            clearError,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}; 