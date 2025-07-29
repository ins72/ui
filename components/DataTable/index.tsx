import React from 'react';
import Table from '../Table';
import TableRow from '../TableRow';
import Button from '../Button';
import Icon from '../Icon';
import Search from '../Search';

type DataTableColumn = {
  key: string;
  title: string;
  sortable?: boolean;
  filterable?: boolean;
  render?: (value: any, record: any) => React.ReactNode;
};

type DataTableProps = {
  className?: string;
  title?: string;
  columns: DataTableColumn[];
  data: any[];
  loading?: boolean;
  pagination?: {
    current: number;
    pageSize: number;
    total: number;
    onChange: (page: number, pageSize: number) => void;
  };
  selection?: {
    selectedRows: any[];
    onRowSelect: (id: any) => void;
    onSelectAll: () => void;
  };
  actions?: {
    onCreate?: () => void;
    onEdit?: (record: any) => void;
    onDelete?: (record: any) => void;
    onExport?: () => void;
  };
  search?: {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
  };
  showSearch?: boolean;
  showActions?: boolean;
};

const DataTable: React.FC<DataTableProps> = ({
  className = '',
  title,
  columns,
  data,
  loading = false,
  pagination,
  selection,
  actions,
  search,
  showSearch = false,
  showActions = false
}) => {
  const handleRowSelect = (id: any) => {
    if (selection?.onRowSelect) {
      selection.onRowSelect(id);
    }
  };

  const handleSelectAll = () => {
    if (selection?.onSelectAll) {
      selection.onSelectAll();
    }
  };

  const isSelected = (id: any) => {
    return selection?.selectedRows.includes(id) || false;
  };

  const allSelected = selection ? selection.selectedRows.length === data.length : false;

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Header Section */}
      {(title || showSearch || showActions) && (
        <div className="flex items-center justify-between">
          <div>
            {title && (
              <h2 className="text-h6 font-semibold text-t-primary">{title}</h2>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            {/* Search */}
            {showSearch && search && (
              <Search
                className="w-64"
                value={search.value}
                onChange={(e) => search.onChange(e.target.value)}
                placeholder={search.placeholder || 'Search...'}
              />
            )}
            
            {/* Actions */}
            {showActions && actions && (
              <div className="flex items-center gap-2">
                {actions.onCreate && (
                  <Button
                    className="bg-primary-01 text-white"
                    onClick={actions.onCreate}
                  >
                    <Icon name="plus" className="w-4 h-4 mr-2" />
                    Create
                  </Button>
                )}
                
                {actions.onExport && (
                  <Button
                    className="border border-s-stroke2 bg-b-surface2 text-t-primary"
                    onClick={actions.onExport}
                  >
                    <Icon name="download" className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                )}
                
                {selection && selection.selectedRows.length > 0 && actions.onDelete && (
                  <Button
                    className="bg-primary-03 text-white"
                    onClick={() => actions.onDelete?.(selection.selectedRows)}
                  >
                    <Icon name="trash" className="w-4 h-4 mr-2" />
                    Delete ({selection.selectedRows.length})
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Table */}
      <Table
        selectAll={selection ? allSelected : undefined}
        onSelectAll={selection ? handleSelectAll : undefined}
        cellsThead={
          <>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-4 py-3 text-left text-button font-medium text-t-secondary bg-b-surface1"
              >
                <div className="flex items-center gap-2">
                  {column.title}
                  {column.sortable && (
                    <Icon name="chevron-up-down" className="w-4 h-4 text-t-tertiary" />
                  )}
                </div>
              </th>
            ))}
            {(actions?.onEdit || actions?.onDelete) && (
              <th className="px-4 py-3 text-left text-button font-medium text-t-secondary bg-b-surface1">
                Actions
              </th>
            )}
          </>
        }
      >
        {loading ? (
          <TableRow>
            <td colSpan={columns.length + (actions ? 1 : 0)} className="px-4 py-8 text-center">
              <div className="flex items-center justify-center gap-2">
                <Icon name="loader" className="w-5 h-5 animate-spin text-primary-01" />
                <span className="text-t-secondary">Loading...</span>
              </div>
            </td>
          </TableRow>
        ) : data.length === 0 ? (
          <TableRow>
            <td colSpan={columns.length + (actions ? 1 : 0)} className="px-4 py-8 text-center">
              <div className="text-t-secondary">No data available</div>
            </td>
          </TableRow>
        ) : (
          data.map((record, index) => (
            <TableRow
              key={record.id || index}
              selectedRows={selection ? isSelected(record.id) : undefined}
              onRowSelect={selection ? () => handleRowSelect(record.id) : undefined}
            >
              {columns.map((column) => (
                <td key={column.key} className="px-4 py-3 text-body-2 text-t-primary">
                  {column.render 
                    ? column.render(record[column.key], record)
                    : record[column.key]
                  }
                </td>
              ))}
              
              {(actions?.onEdit || actions?.onDelete) && (
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    {actions.onEdit && (
                      <Button
                        className="p-2 border border-s-stroke2 bg-b-surface2 text-t-primary"
                        onClick={() => actions.onEdit?.(record)}
                        isCircle
                      >
                        <Icon name="edit" className="w-4 h-4" />
                      </Button>
                    )}
                    
                    {actions.onDelete && (
                      <Button
                        className="p-2 bg-primary-03 text-white"
                        onClick={() => actions.onDelete?.(record)}
                        isCircle
                      >
                        <Icon name="trash" className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </td>
              )}
            </TableRow>
          ))
        )}
      </Table>

      {/* Pagination */}
      {pagination && (
        <div className="flex items-center justify-between">
          <div className="text-caption text-t-secondary">
            Showing {((pagination.current - 1) * pagination.pageSize) + 1} to{' '}
            {Math.min(pagination.current * pagination.pageSize, pagination.total)} of{' '}
            {pagination.total} results
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              className="border border-s-stroke2 bg-b-surface2 text-t-primary"
              onClick={() => pagination.onChange(pagination.current - 1, pagination.pageSize)}
              disabled={pagination.current <= 1}
            >
              <Icon name="chevron-left" className="w-4 h-4" />
              Previous
            </Button>
            
            <span className="px-3 py-1 text-button font-medium">
              Page {pagination.current} of {Math.ceil(pagination.total / pagination.pageSize)}
            </span>
            
            <Button
              className="border border-s-stroke2 bg-b-surface2 text-t-primary"
              onClick={() => pagination.onChange(pagination.current + 1, pagination.pageSize)}
              disabled={pagination.current >= Math.ceil(pagination.total / pagination.pageSize)}
            >
              Next
              <Icon name="chevron-right" className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable; 