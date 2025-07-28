import React from "react";

interface TableColumn {
    key: string;
    label: string;
    render?: (item: any) => React.ReactNode;
    sortable?: boolean;
    width?: string;
}

interface TableProps {
    data: any[];
    columns: TableColumn[];
    className?: string;
    onSort?: (key: string, direction: 'asc' | 'desc') => void;
    sortKey?: string;
    sortDirection?: 'asc' | 'desc';
    loading?: boolean;
    emptyMessage?: string;
    onRowClick?: (item: any) => void;
    selectable?: boolean;
    selectedItems?: string[];
    onSelectionChange?: (selectedIds: string[]) => void;
    idField?: string;
}

const Table: React.FC<TableProps> = ({
    data,
    columns,
    className = "",
    onSort,
    sortKey,
    sortDirection,
    loading = false,
    emptyMessage = "No data available",
    onRowClick,
    selectable = false,
    selectedItems = [],
    onSelectionChange,
    idField = "id"
}) => {
    const handleSort = (key: string) => {
        if (!onSort) return;
        
        const newDirection = sortKey === key && sortDirection === 'asc' ? 'desc' : 'asc';
        onSort(key, newDirection);
    };

    const handleRowClick = (item: any) => {
        if (onRowClick) {
            onRowClick(item);
        }
    };

    const handleSelectAll = (checked: boolean) => {
        if (!onSelectionChange) return;
        
        if (checked) {
            const allIds = data.map(item => item[idField]);
            onSelectionChange(allIds);
        } else {
            onSelectionChange([]);
        }
    };

    const handleSelectItem = (itemId: string, checked: boolean) => {
        if (!onSelectionChange) return;
        
        if (checked) {
            onSelectionChange([...selectedItems, itemId]);
        } else {
            onSelectionChange(selectedItems.filter(id => id !== itemId));
        }
    };

    const isAllSelected = data.length > 0 && selectedItems.length === data.length;
    const isIndeterminate = selectedItems.length > 0 && selectedItems.length < data.length;

    if (loading) {
        return (
            <div className={`table-container ${className}`}>
                <div className="table-loading">
                    <div className="loading-spinner"></div>
                    <p>Loading...</p>
                </div>
            </div>
        );
    }

    if (data.length === 0) {
        return (
            <div className={`table-container ${className}`}>
                <div className="table-empty">
                    <p>{emptyMessage}</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`table-container ${className}`}>
            <table className="table">
                <thead className="table-header">
                    <tr>
                        {selectable && (
                            <th className="table-cell table-cell-checkbox">
                                <input
                                    type="checkbox"
                                    checked={isAllSelected}
                                    ref={(input) => {
                                        if (input) {
                                            input.indeterminate = isIndeterminate;
                                        }
                                    }}
                                    onChange={(e) => handleSelectAll(e.target.checked)}
                                    className="table-checkbox"
                                />
                            </th>
                        )}
                        {columns.map((column) => (
                            <th
                                key={column.key}
                                className={`table-cell ${column.sortable ? 'table-cell-sortable' : ''}`}
                                style={{ width: column.width }}
                                onClick={() => column.sortable && handleSort(column.key)}
                            >
                                <div className="table-cell-content">
                                    {column.label}
                                    {column.sortable && (
                                        <span className="table-sort-icon">
                                            {sortKey === column.key ? (
                                                sortDirection === 'asc' ? '↑' : '↓'
                                            ) : (
                                                '↕'
                                            )}
                                        </span>
                                    )}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="table-body">
                    {data.map((item, index) => (
                        <tr
                            key={item[idField] || index}
                            className={`table-row ${onRowClick ? 'table-row-clickable' : ''} ${
                                selectedItems.includes(item[idField]) ? 'table-row-selected' : ''
                            }`}
                            onClick={() => handleRowClick(item)}
                        >
                            {selectable && (
                                <td className="table-cell table-cell-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={selectedItems.includes(item[idField])}
                                        onChange={(e) => handleSelectItem(item[idField], e.target.checked)}
                                        onClick={(e) => e.stopPropagation()}
                                        className="table-checkbox"
                                    />
                                </td>
                            )}
                            {columns.map((column) => (
                                <td key={column.key} className="table-cell">
                                    {column.render ? column.render(item) : item[column.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
