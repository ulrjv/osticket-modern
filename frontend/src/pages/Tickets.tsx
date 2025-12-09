import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Layout from '../components/Layout';
import TicketsTable from '../components/TicketsTable';
import SearchBar from '../components/SearchBar';
import AdvancedSearch from '../components/AdvancedSearch';
import BulkActions from '../components/BulkActions';
import Pagination from '../components/Pagination';
import { ticketsService } from '../services/ticketsService';
import type { TicketFilters } from '../types';

const Tickets: React.FC = () => {
  const queryClient = useQueryClient();
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [filters, setFilters] = useState<TicketFilters>({
    page: 1,
    pageSize: 20,
    sortBy: 'createdAt',
    sortDir: 'desc',
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ['tickets', filters],
    queryFn: () => ticketsService.getTickets(filters),
  });

  const bulkUpdateMutation = useMutation({
    mutationFn: ticketsService.bulkUpdate,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tickets'] });
      setSelectedIds([]);
      toast.success('Tickets actualizados exitosamente');
    },
    onError: () => {
      toast.error('Error al actualizar tickets');
    },
  });

  const handleBulkAction = (status: 'open' | 'answered' | 'closed') => {
    if (selectedIds.length === 0) {
      toast.error('Por favor seleccione al menos un ticket');
      return;
    }
    bulkUpdateMutation.mutate({ ticketIds: selectedIds, status });
  };

  const handleExport = async () => {
    try {
      const blob = await ticketsService.exportTickets(filters);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `tickets_${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      toast.success('Tickets exportados exitosamente');
    } catch (error) {
      toast.error('Error al exportar tickets');
    }
  };

  const handleSearch = (search: string) => {
    setFilters({ ...filters, search, page: 1 });
  };

  const handleAdvancedSearch = (newFilters: Partial<TicketFilters>) => {
    setFilters({ ...filters, ...newFilters, page: 1 });
    setShowAdvancedSearch(false);
  };

  const handleSort = (sortBy: string) => {
    const sortDir =
      filters.sortBy === sortBy && filters.sortDir === 'asc' ? 'desc' : 'asc';
    setFilters({ ...filters, sortBy, sortDir });
  };

  const handlePageChange = (page: number) => {
    setFilters({ ...filters, page });
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Tickets
          </h1>
          <button
            onClick={handleExport}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            Exportar CSV
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex gap-4 items-center">
              <SearchBar onSearch={handleSearch} />
              <button
                onClick={() => setShowAdvancedSearch(true)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
              >
                Búsqueda Avanzada
              </button>
            </div>
          </div>

          {selectedIds.length > 0 && (
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border-b border-gray-200 dark:border-gray-700">
              <BulkActions
                selectedCount={selectedIds.length}
                onAction={handleBulkAction}
                isLoading={bulkUpdateMutation.isPending}
              />
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400">
              Error al cargar los tickets
            </div>
          )}

          {isLoading ? (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
              Cargando tickets...
            </div>
          ) : data && data.data.length > 0 ? (
            <>
              <TicketsTable
                tickets={data.data}
                selectedIds={selectedIds}
                onSelectIds={setSelectedIds}
                onSort={handleSort}
                currentSort={{ by: filters.sortBy || 'createdAt', dir: filters.sortDir || 'desc' }}
              />
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <Pagination
                  currentPage={data.pagination.page}
                  totalPages={data.pagination.totalPages}
                  total={data.pagination.total}
                  pageSize={data.pagination.pageSize}
                  onPageChange={handlePageChange}
                />
              </div>
            </>
          ) : (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
              No se encontraron tickets
            </div>
          )}
        </div>
      </div>

      {showAdvancedSearch && (
        <AdvancedSearch
          onClose={() => setShowAdvancedSearch(false)}
          onSearch={handleAdvancedSearch}
          currentFilters={filters}
        />
      )}
    </Layout>
  );
};

export default Tickets;
