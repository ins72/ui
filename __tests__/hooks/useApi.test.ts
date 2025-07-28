import { renderHook, act } from '@testing-library/react';
import { useApi, useCrud } from '@/hooks/useApi';

// Mock axios
jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
    interceptors: {
      request: { use: jest.fn() },
      response: { use: jest.fn() },
    },
  })),
}));

// Mock apiService
jest.mock('@/lib/api', () => ({
  customers: {
    getAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
  products: {
    getAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
}));

describe('useApi Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with default state', () => {
    const { result } = renderHook(() => useApi());
    
    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.lastUpdated).toBeNull();
  });

  it('should execute API call successfully', async () => {
    const mockData = { id: 1, name: 'Test' };
    const mockApiCall = jest.fn().mockResolvedValue(mockData);
    
    const { result } = renderHook(() => useApi());
    
    await act(async () => {
      const response = await result.current.execute(mockApiCall, 'test-cache');
      expect(response).toEqual(mockData);
    });
    
    expect(result.current.data).toEqual(mockData);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.lastUpdated).toBeInstanceOf(Date);
  });

  it('should handle API errors', async () => {
    const mockError = new Error('API Error');
    const mockApiCall = jest.fn().mockRejectedValue(mockError);
    
    const { result } = renderHook(() => useApi());
    
    await act(async () => {
      try {
        await result.current.execute(mockApiCall);
      } catch (error) {
        expect(error).toEqual(mockError);
      }
    });
    
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toEqual(mockError);
  });

  it('should cache data correctly', async () => {
    const mockData = { id: 1, name: 'Test' };
    const mockApiCall = jest.fn().mockResolvedValue(mockData);
    
    const { result } = renderHook(() => useApi({ cacheTime: 5000 }));
    
    // First call
    await act(async () => {
      await result.current.execute(mockApiCall, 'test-cache');
    });
    
    // Second call should use cache
    await act(async () => {
      await result.current.execute(mockApiCall, 'test-cache');
    });
    
    // API should only be called once due to caching
    expect(mockApiCall).toHaveBeenCalledTimes(1);
  });

  it('should clear cache', () => {
    const { result } = renderHook(() => useApi());
    
    act(() => {
      result.current.clearCache();
    });
    
    // Cache should be cleared
    expect(result.current.invalidateCache).toBeDefined();
  });
});

describe('useCrud Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should provide CRUD operations', () => {
    const { result } = renderHook(() => useCrud('customers'));
    
    expect(result.current.get).toBeDefined();
    expect(result.current.create).toBeDefined();
    expect(result.current.update).toBeDefined();
    expect(result.current.remove).toBeDefined();
    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
  });

  it('should handle get operation', async () => {
    const mockData = [{ id: 1, name: 'Customer 1' }];
    const mockGet = jest.fn().mockResolvedValue(mockData);
    
    const { result } = renderHook(() => useCrud('customers'));
    
    // Mock the get function
    result.current.get = mockGet;
    
    await act(async () => {
      await result.current.get();
    });
    
    expect(mockGet).toHaveBeenCalled();
  });

  it('should handle create operation', async () => {
    const mockData = { id: 1, name: 'New Customer' };
    const mockCreate = jest.fn().mockResolvedValue(mockData);
    
    const { result } = renderHook(() => useCrud('customers'));
    
    // Mock the create function
    result.current.create = mockCreate;
    
    await act(async () => {
      await result.current.create({ name: 'New Customer' });
    });
    
    expect(mockCreate).toHaveBeenCalledWith({ name: 'New Customer' });
  });

  it('should handle update operation', async () => {
    const mockData = { id: 1, name: 'Updated Customer' };
    const mockUpdate = jest.fn().mockResolvedValue(mockData);
    
    const { result } = renderHook(() => useCrud('customers'));
    
    // Mock the update function
    result.current.update = mockUpdate;
    
    await act(async () => {
      await result.current.update('1', { name: 'Updated Customer' });
    });
    
    expect(mockUpdate).toHaveBeenCalledWith('1', { name: 'Updated Customer' });
  });

  it('should handle delete operation', async () => {
    const mockRemove = jest.fn().mockResolvedValue(undefined);
    
    const { result } = renderHook(() => useCrud('customers'));
    
    // Mock the remove function
    result.current.remove = mockRemove;
    
    await act(async () => {
      await result.current.remove('1');
    });
    
    expect(mockRemove).toHaveBeenCalledWith('1');
  });
}); 