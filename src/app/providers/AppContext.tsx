"use client";

import { useEffect } from "react";
import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { apiClient } from '@/lib/api-client';

// Types
interface User {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'creator';
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  notifications: Notification[];
  theme: 'light' | 'dark';
  sidebarCollapsed: boolean;
  currentPage: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
}

type AppAction =
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'ADD_NOTIFICATION'; payload: Notification }
  | { type: 'REMOVE_NOTIFICATION'; payload: string }
  | { type: 'CLEAR_NOTIFICATIONS' }
  | { type: 'SET_THEME'; payload: 'light' | 'dark' }
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'SET_CURRENT_PAGE'; payload: string }
  | { type: 'SET_BREADCRUMBS'; payload: Array<{ label: string; href?: string }> }
  | { type: 'LOGOUT' };

// Initial state
const initialState: AppState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  notifications: [],
  theme: 'light',
  sidebarCollapsed: false,
  currentPage: '',
  breadcrumbs: [],
};

// Reducer
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
        isLoading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(n => n.id !== action.payload),
      };
    case 'CLEAR_NOTIFICATIONS':
      return {
        ...state,
        notifications: [],
      };
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload,
      };
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        sidebarCollapsed: !state.sidebarCollapsed,
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
    case 'SET_BREADCRUMBS':
      return {
        ...state,
        breadcrumbs: action.payload,
      };
    case 'LOGOUT':
      return {
        ...initialState,
        isLoading: false,
        theme: state.theme,
      };
    default:
      return state;
  }
}

// Context
interface AppContextType extends AppState {
  dispatch: React.Dispatch<AppAction>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  showNotification: (notification: Omit<Notification, 'id'>) => void;
  hideNotification: (id: string) => void;
  clearNotifications: () => void;
  toggleSidebar: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
  setCurrentPage: (page: string) => void;
  setBreadcrumbs: (breadcrumbs: Array<{ label: string; href?: string }>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Initialize app
  useEffect(() => {
    initializeApp();
  }, []);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      dispatch({ type: 'SET_THEME', payload: savedTheme });
    }
  }, []);

  // Save theme to localStorage
  useEffect(() => {
    localStorage.setItem('theme', state.theme);
    document.documentElement.classList.toggle('dark', state.theme === 'dark');
  }, [state.theme]);

  const initializeApp = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const user = await apiService.auth.getProfile();
        dispatch({ type: 'SET_USER', payload: user });
      } else {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    } catch (error) {
      console.error('Failed to initialize app:', error);
      localStorage.removeItem('token');
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const login = async (email: string, password: string) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await apiService.auth.login(email, password);
      localStorage.setItem('token', response.token);
      dispatch({ type: 'SET_USER', payload: response.user });
      showNotification({
        type: 'success',
        title: 'Welcome back!',
        message: 'You have been successfully logged in.',
      });
    } catch (error: any) {
      showNotification({
        type: 'error',
        title: 'Login failed',
        message: error.response?.data?.message || 'Invalid credentials',
      });
      throw error;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const logout = async () => {
    try {
      await apiService.auth.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('token');
      dispatch({ type: 'LOGOUT' });
      showNotification({
        type: 'info',
        title: 'Logged out',
        message: 'You have been successfully logged out.',
      });
    }
  };

  const showNotification = (notification: Omit<Notification, 'id'>) => {
    const id = `notification_${Date.now()}_${crypto.randomUUID().slice(0, 8)}`;
    const newNotification = { ...notification, id };
    
    dispatch({ type: 'ADD_NOTIFICATION', payload: newNotification });

    // Auto-remove notification after duration
    const duration = notification.duration || 5000;
    setTimeout(() => {
      hideNotification(id);
    }, duration);
  };

  const hideNotification = (id: string) => {
    dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
  };

  const clearNotifications = () => {
    dispatch({ type: 'CLEAR_NOTIFICATIONS' });
  };

  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' });
  };

  const setTheme = (theme: 'light' | 'dark') => {
    dispatch({ type: 'SET_THEME', payload: theme });
  };

  const setCurrentPage = (page: string) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: page });
  };

  const setBreadcrumbs = (breadcrumbs: Array<{ label: string; href?: string }>) => {
    dispatch({ type: 'SET_BREADCRUMBS', payload: breadcrumbs });
  };

  const value: AppContextType = {
    ...state,
    dispatch,
    login,
    logout,
    showNotification,
    hideNotification,
    clearNotifications,
    toggleSidebar,
    setTheme,
    setCurrentPage,
    setBreadcrumbs,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

// Hook to use the context
export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

// Hook for notifications
export function useNotifications() {
  const { notifications, showNotification, hideNotification, clearNotifications } = useApp();
  
  return {
    notifications,
    showNotification,
    hideNotification,
    clearNotifications,
  };
}

// Hook for authentication
export function useAuth() {
  const { user, isAuthenticated, isLoading, login, logout } = useApp();
  
  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
  };
}

// Hook for theme
export function useTheme() {
  const { theme, setTheme } = useApp();
  
  return {
    theme,
    setTheme,
    isDark: theme === 'dark',
  };
} 