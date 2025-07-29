"use client";

import { Search } from "lucide-react";
import {  useState , useEffect } from "react";
import { useState, useEffect, useCallback } from 'react';
import { apiService, ApiResponse, PaginatedResponse, User } from '@/lib/api';

// Generic hook for data fetching
export function useApi<T>(
  apiCall: () => Promise<ApiResponse<T>>,
  dependencies: any[] = []
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiCall();
      if (response.success) {
        setData(response.data!);
      } else {
        setError(response.message || 'Failed to fetch data');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, dependencies);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = () => {
    fetchData();
  };

  return { data, loading, error, refetch };
}

// Hook for paginated data
export function usePaginatedApi<T>(
  apiCall: (params?: any) => Promise<PaginatedResponse<T>>,
  initialParams: any = {}
) {
  const [data, setData] = useState<T[]>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    total: 0,
    pages: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [params, setParams] = useState(initialParams);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiCall(params);
      if (response.success) {
        setData(response.data!);
        setPagination(response.pagination || {
          page: 1,
          limit: 20,
          total: 0,
          pages: 0,
        });
      } else {
        setError(response.message || 'Failed to fetch data');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [apiCall, params]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const updateParams = (newParams: any) => {
    setParams((prev: any) => ({ ...prev, ...newParams }));
  };

  const goToPage = (page: number) => {
    updateParams({ page });
  };

  const setLimit = (limit: number) => {
    updateParams({ limit, page: 1 });
  };

  const refetch = () => {
    fetchData();
  };

  return {
    data,
    pagination,
    loading,
    error,
    updateParams,
    goToPage,
    setLimit,
    refetch,
  };
}

// Hook for mutations (create, update, delete)
export function useMutation<T, R = any>(
  mutationFn: (data: T) => Promise<ApiResponse<R>>
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<R | null>(null);

  const mutate = useCallback(async (mutationData: T) => {
    try {
      setLoading(true);
      setError(null);
      const response = await mutationFn(mutationData);
      if (response.success) {
        setData(response.data!);
        return response;
      } else {
        setError(response.message || 'Operation failed');
        throw new Error(response.message || 'Operation failed');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [mutationFn]);

  const reset = () => {
    setLoading(false);
    setError(null);
    setData(null);
  };

  return { mutate, loading, error, data, reset };
}

// Specific hooks for admin dashboard
export function useDashboardStats() {
  return useApi(() => apiService.getDashboardStats());
}

export function useSystemHealth() {
  return useApi(() => apiService.getSystemHealth());
}

export function useRecentActivity(limit?: number) {
  return useApi(() => apiService.getRecentActivity(limit), [limit]);
}

export function useSystemAlerts() {
  return useApi(() => apiService.getSystemAlerts());
}

// User management hooks
export function useUsers(params?: any) {
  return usePaginatedApi(apiService.getAllUsers, params);
}

export function useUser(id: string) {
  return useApi(() => apiService.getUserById(id), [id]);
}

export function useCreateUser() {
  return useMutation(apiService.createUser);
}

export function useUpdateUser() {
  return useMutation<{ id: string; userData: Partial<User> }, User>(({ id, userData }) => 
    apiService.updateUser(id, userData)
  );
}

export function useDeleteUser() {
  return useMutation<string, void>((id) => apiService.deleteUser(id));
}

export function useUpdateUserStatus() {
  return useMutation<{ id: string; status: string }, User>(({ id, status }) => 
    apiService.updateUserStatus(id, status)
  );
}

export function useUpdateUserRole() {
  return useMutation<{ id: string; role: string }, User>(({ id, role }) => 
    apiService.updateUserRole(id, role)
  );
}

// System settings hooks
export function useSystemSettings() {
  return useApi(() => apiService.getSystemSettings());
}

export function useUpdateSystemSettings() {
  return useMutation(apiService.updateSystemSettings);
}

// Security hooks
export function useSecurityEvents(limit?: number) {
  return useApi(() => apiService.getSecurityEvents(limit), [limit]);
}

export function useBlockIP() {
  return useMutation(apiService.blockIP);
}

export function useUnblockIP() {
  return useMutation(apiService.unblockIP);
}

// Analytics hooks
export function useAnalyticsOverview() {
  return useApi(() => apiService.getAnalyticsOverview());
}

// Database hooks
export function useDatabaseStats() {
  return useApi(() => apiService.getDatabaseStats());
}

// Content hooks
export function useContentOverview() {
  return useApi(() => apiService.getContentOverview());
}

// Generic entity hooks
export function useEntities<T>(entity: string, params?: any) {
  return usePaginatedApi<T>((p) => apiService.getEntities<T>(entity, p), params);
}

export function useEntity<T>(entity: string, id: string) {
  return useApi<T>(() => apiService.getEntity<T>(entity, id), [entity, id]);
}

export function useCreateEntity<T>(entity: string) {
  return useMutation<any, T>((data) => apiService.createEntity<T>(entity, data));
}

export function useUpdateEntity<T>(entity: string) {
  return useMutation<{ id: string; data: any }, T>(({ id, data }) => 
    apiService.updateEntity<T>(entity, id, data)
  );
}

export function useDeleteEntity<T>(entity: string) {
  return useMutation<string, T>((id) => apiService.deleteEntity<T>(entity, id));
}

export function useSearchEntities<T>(entity: string) {
  return useMutation<string, T[]>((query) => apiService.searchEntities<T>(entity, query));
}

export function useFilterEntities<T>(entity: string) {
  return useMutation<any, T[]>((filter) => apiService.filterEntities<T>(entity, filter));
}

export function useEntitySummary<T>(entity: string) {
  return useApi<T>(() => apiService.getEntitySummary<T>(entity), [entity]);
}

// Authentication hooks
export function useLogin() {
  return useMutation<{ email: string; password: string }, { token: string; user: User }>((credentials) => 
    apiService.login(credentials.email, credentials.password)
  );
}

export function useRegister() {
  return useMutation<{ name: string; email: string; password: string }, { token: string; user: User }>((userData) => 
    apiService.register(userData)
  );
}

export function useLogout() {
  return useMutation<void, void>(async () => {
    await apiService.logout();
    return { success: true, data: undefined };
  });
} 