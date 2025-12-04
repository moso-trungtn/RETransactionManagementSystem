import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';

export interface SelectableTableColumn<T = Record<string, unknown>> {
  key: string;
  label: string;
  render?: (value: unknown, row: T) => React.ReactNode;
}

interface SelectableTableProps<T = Record<string, unknown>> {
  columns: SelectableTableColumn<T>[];
  data: T[];
  selectedRows: string[];
  onSelectionChange: (selectedIds: string[]) => void;
  rowIdKey?: string;
  showClearButton?: boolean;
  className?: string;
}

export function SelectableTable<T extends Record<string, unknown> = Record<string, unknown>>({
  columns,
  data,
  selectedRows,
  onSelectionChange,
  rowIdKey = 'id',
  showClearButton = true,
  className = ''
}: SelectableTableProps<T>) {
  const toggleRow = (id: string) => {
    const newSelection = selectedRows.includes(id)
      ? selectedRows.filter(rowId => rowId !== id)
      : [...selectedRows, id];
    onSelectionChange(newSelection);
  };

  const toggleAll = () => {
    if (selectedRows.length === data.length) {
      onSelectionChange([]);
    } else {
      onSelectionChange(data.map(row => String(row[rowIdKey])));
    }
  };

  const clearSelection = () => {
    onSelectionChange([]);
    toast.success('Selection cleared');
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedRows.length === data.length && data.length > 0}
                  onCheckedChange={toggleAll}
                />
              </TableHead>
              {columns.map((column) => (
                <TableHead key={column.key}>{column.label}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => {
              const rowId = String(row[rowIdKey]);
              return (
                <TableRow key={rowId}>
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.includes(rowId)}
                      onCheckedChange={() => toggleRow(rowId)}
                    />
                  </TableCell>
                {columns.map((column) => (
                  <TableCell key={column.key}>
                    {column.render
                      ? column.render(row[column.key], row)
                      : (row[column.key] as React.ReactNode)}
                  </TableCell>
                ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      {selectedRows.length > 0 && showClearButton && (
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{selectedRows.length} row(s) selected</Badge>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={clearSelection}
          >
            Clear Selection
          </Button>
        </div>
      )}
    </div>
  );
}
