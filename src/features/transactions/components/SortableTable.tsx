import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/table";
import { Button } from "@/components/button";
import { ArrowUpDown } from 'lucide-react';

export interface SortableTableColumn<T = Record<string, unknown>> {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (value: unknown, row: T) => React.ReactNode;
}

interface SortableTableProps<T = Record<string, unknown>> {
  columns: SortableTableColumn<T>[];
  data: T[];
  defaultSortColumn?: string;
  defaultSortDirection?: 'asc' | 'desc';
  className?: string;
}

export function SortableTable<T extends Record<string, unknown> = Record<string, unknown>>({
  columns,
  data,
  defaultSortColumn,
  defaultSortDirection = 'asc',
  className = ''
}: SortableTableProps<T>) {
  const [sortColumn, setSortColumn] = useState<string | null>(defaultSortColumn || null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>(defaultSortDirection);

  const handleSort = (columnKey: string) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnKey);
      setSortDirection('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortColumn) return 0;

    const aValue = a[sortColumn];
    const bValue = b[sortColumn];

    if (aValue === bValue) return 0;

    // Convert to comparable values
    const aComp = aValue === null || aValue === undefined ? '' : String(aValue);
    const bComp = bValue === null || bValue === undefined ? '' : String(bValue);

    const comparison = aComp > bComp ? 1 : -1;
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.key}>
                  {column.sortable !== false ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2"
                      onClick={() => handleSort(column.key)}
                    >
                      {column.label}
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    column.label
                  )}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell key={column.key}>
                    {column.render
                      ? column.render(row[column.key], row)
                      : (row[column.key] as React.ReactNode)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {sortColumn && (
        <p className="text-sm text-gray-500">
          Sorted by: <span className="font-medium">{sortColumn}</span> ({sortDirection})
        </p>
      )}
    </div>
  );
}
