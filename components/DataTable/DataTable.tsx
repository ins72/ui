'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useCrud } from '@/hooks/useApi';
import { useNotifications } from '@/contexts/AppContext';
import CRUDForm from '../CRUDForm/CRUDForm';

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
  render?: (value: any, row: any) => React.ReactNode;
  width?: string;
}

interface Filter {
  key: string;
  value: string;
  operator: 'equals' | 'contains' | 'startsWith' | 'endsWith' | 'greaterThan' | 'lessThan';
}

interface Sort {
  key: string;
  direction: 'asc' | 'desc';
}

interface DataTableProps {
  endpoint: string;
  columns: Column[];
  title: string;
  pageSize?: number;
  showSearch?: boolean;
  showFilters?: boolean;
  showPagination?: boolean;
  showActions?: boolean;
  allowCreate?: boolean;
  allowEdit?: boolean;
  allowDelete?: boolean;
  allowView?: boolean;
  filters?: Filter[];
  onRowClick?: (row: any) => void;
  onSelectionChange?: (selectedRows: any[]) => void;
  className?: string;
}

export const DataTable: React.FC<DataTableProps> = ({
  endpoint,
  columns,
  title,
  pageSize = 10,
  showSearch = true,
  showFilters = true,
  showPagination = true,
  showActions = true,
  allowCreate = true,
  allowEdit = true,
  allowDelete = true,
  allowView = true,
  filters = [],
  onRowClick,
  onSelectionChange,
  className = '',
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState<Filter[]>(filters);
  const [sort, setSort] = useState<Sort | null>(null);
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState<'create' | 'edit' | 'view'>('create');
  const [selectedRow, setSelectedRow] = useState<any>(null);

  const { data, loading, error, get, remove, refetch } = useCrud(endpoint);
  const { showNotification } = useNotifications();

  // Fetch data
  useEffect(() => {
    const params = {
      page: currentPage,
      limit: pageSize,
      search: searchTerm,
      filters: activeFilters,
      sort: sort,
    };
    get(params);
  }, [currentPage, pageSize, searchTerm, activeFilters, sort]);

  // Handle selection change
  useEffect(() => {
    onSelectionChange?.(selectedRows);
  }, [selectedRows, onSelectionChange]);

  const handleSort = (key: string) => {
    setSort(prev => {
      if (prev?.key === key) {
        return prev.direction === 'asc' ? { key, direction: 'desc' } : null;
      }
      return { key, direction: 'asc' };
    });
  };

  const handleFilter = (key: string, value: string, operator: Filter['operator']) => {
    setActiveFilters(prev => {
      const existing = prev.find(f => f.key === key);
      if (existing) {
        return prev.map(f => f.key === key ? { key, value, operator } : f);
      }
      return [...prev, { key, value, operator }];
    });
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleRowSelect = (row: any, checked: boolean) => {
    setSelectedRows(prev => {
      if (checked) {
        return [...prev, row];
      }
      return prev.filter(r => r._id !== row._id);
    });
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(data || []);
    } else {
      setSelectedRows([]);
    }
  };

  const handleDelete = async (row?: any) => {
    const rowsToDelete = row ? [row] : selectedRows;
    
    if (rowsToDelete.length === 0) {
      showNotification({
        type: 'warning',
        title: 'No Selection',
        message: 'Please select items to delete.',
      });
      return;
    }

    if (!window.confirm(`Are you sure you want to delete ${rowsToDelete.length} item(s)?`)) {
      return;
    }

    try {
      await Promise.all(rowsToDelete.map(r => remove(r._id)));
      showNotification({
        type: 'success',
        title: 'Success',
        message: `${rowsToDelete.length} item(s) deleted successfully!`,
      });
      setSelectedRows([]);
      refetch();
    } catch (error: any) {
      showNotification({
        type: 'error',
        title: 'Error',
        message: error.response?.data?.message || 'Failed to delete items',
      });
    }
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    setSelectedRow(null);
    refetch();
  };

  const openForm = (mode: 'create' | 'edit' | 'view', row?: any) => {
    setFormMode(mode);
    setSelectedRow(row || null);
    setShowForm(true);
  };

  const renderCell = (column: Column, row: any) => {
    const value = row[column.key];
    
    if (column.render) {
      return column.render(value, row);
    }

    if (typeof value === 'boolean') {
      return (
        <span className={`px-2 py-1 rounded-full text-xs ${
          value ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {value ? 'Yes' : 'No'}
        </span>
      );
    }

    if (typeof value === 'number') {
      return value.toLocaleString();
    }

    if (typeof value === 'string' && value.length > 50) {
      return `${value.substring(0, 50)}...`;
    }

    return value || '-';
  };

  const totalPages = Math.ceil((data?.length || 0) / pageSize);

  if (loading && !data) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Error loading data: {error.message}</p>
        <button
          onClick={() => refetch()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg ${className}`}>
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h2>
          <div className="flex items-center space-x-2">
            {allowCreate && (
              <button
                onClick={() => openForm('create')}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Add New
              </button>
            )}
            {selectedRows.length > 0 && allowDelete && (
              <button
                onClick={() => handleDelete()}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete Selected ({selectedRows.length})
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      {(showSearch || showFilters) && (
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-4">
            {showSearch && (
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
            )}
            {showFilters && (
              <div className="flex items-center space-x-2">
                {columns.filter(c => c.filterable).map(column => (
                  <select
                    key={column.key}
                    onChange={(e) => handleFilter(column.key, e.target.value, 'contains')}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">Filter {column.label}</option>
                    <option value="contains">Contains</option>
                    <option value="equals">Equals</option>
                    <option value="startsWith">Starts with</option>
                  </select>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              {showActions && (
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedRows.length === (data?.length || 0)}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </th>
              )}
              {columns.map(column => (
                <th
                  key={column.key}
                  className={`px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider ${
                    column.sortable ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600' : ''
                  }`}
                  onClick={() => column.sortable && handleSort(column.key)}
                  style={{ width: column.width }}
                >
                  <div className="flex items-center space-x-1">
                    <span>{column.label}</span>
                    {column.sortable && sort?.key === column.key && (
                      <span>{sort.direction === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
              ))}
              {showActions && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {data?.map((row, index) => (
              <motion.tr
                key={row._id || index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className={`hover:bg-gray-50 dark:hover:bg-gray-700 ${
                  onRowClick ? 'cursor-pointer' : ''
                }`}
                onClick={() => onRowClick?.(row)}
              >
                {showActions && (
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={selectedRows.some(r => r._id === row._id)}
                      onChange={(e) => handleRowSelect(row, e.target.checked)}
                      onClick={(e) => e.stopPropagation()}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </td>
                )}
                {columns.map(column => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                    {renderCell(column, row)}
                  </td>
                ))}
                {showActions && (
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      {allowView && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openForm('view', row);
                          }}
                          className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          View
                        </button>
                      )}
                      {allowEdit && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openForm('edit', row);
                          }}
                          className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
                        >
                          Edit
                        </button>
                      )}
                      {allowDelete && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(row);
                          }}
                          className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </td>
                )}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {showPagination && totalPages > 1 && (
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700 dark:text-gray-300">
              Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, data?.length || 0)} of {data?.length || 0} results
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <span className="px-3 py-1 text-sm">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <CRUDForm
              endpoint={endpoint}
              fields={columns.map(col => ({
                name: col.key,
                label: col.label,
                type: 'text',
                required: false,
              }))}
              title={`${formMode === 'create' ? 'Create' : formMode === 'edit' ? 'Edit' : 'View'} ${title}`}
              mode={formMode}
              initialData={selectedRow || {}}
              onSuccess={handleFormSuccess}
              onCancel={() => setShowForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable; 