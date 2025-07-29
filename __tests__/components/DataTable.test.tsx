import Icon from "@/style-reference/components/Icon";
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { DataTable } from '@/components/DataTable/DataTable';

// Mock the hooks
jest.mock('@/hooks/useApi', () => ({
  useCrud: () => ({
    data: [
      { _id: '1', name: 'John Doe', email: 'john@example.com', status: 'active' },
      { _id: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'inactive' },
    ],
    loading: false,
    error: null,
    get: jest.fn(),
    remove: jest.fn(),
    refetch: jest.fn(),
  }),
}));

jest.mock('@/contexts/AppContext', () => ({
  useNotifications: () => ({
    showNotification: jest.fn(),
  }),
}));

describe('DataTable Component', () => {
  const mockColumns = [
    {
      key: 'name',
      label: 'Name',
      sortable: true,
      filterable: true,
    },
    {
      key: 'email',
      label: 'Email',
      sortable: true,
      filterable: true,
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      filterable: true,
    },
  ];

  const defaultProps = {
    endpoint: 'users',
    columns: mockColumns,
    title: 'Icon name="users"',
  };

  it('renders the table with correct title', () => {
    render(<DataTable {...defaultProps} />);
    expect(screen.getByText('Icon name="users"')).toBeInTheDocument();
  });

  it('renders table headers', () => {
    render(<DataTable {...defaultProps} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });

  it('renders data rows', () => {
    render(<DataTable {...defaultProps} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('jane@example.com')).toBeInTheDocument();
  });

  it('shows search input when showSearch is true', () => {
    render(<DataTable {...defaultProps} showSearch={true} />);
    expect(screen.getByPlaceholderText('Icon name="search"...')).toBeInTheDocument();
  });

  it('shows action buttons when showActions is true', () => {
    render(<DataTable {...defaultProps} showActions={true} />);
    expect(screen.getByText('Add New')).toBeInTheDocument();
  });

  it('handles row selection', () => {
    render(<DataTable {...defaultProps} showActions={true} />);
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[1]); // Select first row
    expect(checkboxes[1]).toBeChecked();
  });

  it('handles search input', async () => {
    render(<DataTable {...defaultProps} showSearch={true} />);
    const searchInput = screen.getByPlaceholderText('Icon name="search"...');
    fireEvent.change(searchInput, { target: { value: 'John' } });
    
    await waitFor(() => {
      expect(searchInput).toHaveValue('John');
    });
  });

  it('displays loading state', () => {
    // Mock loading state
    jest.doMock('@/hooks/useApi', () => ({
      useCrud: () => ({
        data: null,
        loading: true,
        error: null,
        get: jest.fn(),
        remove: jest.fn(),
        refetch: jest.fn(),
      }),
    }));

    render(<DataTable {...defaultProps} />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('displays error state', () => {
    // Mock error state
    jest.doMock('@/hooks/useApi', () => ({
      useCrud: () => ({
        data: null,
        loading: false,
        error: { message: 'Failed to load data' },
        get: jest.fn(),
        remove: jest.fn(),
        refetch: jest.fn(),
      }),
    }));

    render(<DataTable {...defaultProps} />);
    expect(screen.getByText(/error loading data/i)).toBeInTheDocument();
  });

  it('handles empty data state', () => {
    // Mock empty data
    jest.doMock('@/hooks/useApi', () => ({
      useCrud: () => ({
        data: [],
        loading: false,
        error: null,
        get: jest.fn(),
        remove: jest.fn(),
        refetch: jest.fn(),
      }),
    }));

    render(<DataTable {...defaultProps} />);
    expect(screen.getByText(/no data available/i)).toBeInTheDocument();
  });
}); 