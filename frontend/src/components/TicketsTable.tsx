import React from 'react';
import {
  ChevronUpDownIcon,
  PaperClipIcon,
  ChatBubbleLeftIcon,
} from '@heroicons/react/24/outline';
import type { Ticket } from '../types';

interface TicketsTableProps {
  tickets: Ticket[];
  selectedIds: number[];
  onSelectIds: (ids: number[]) => void;
  onSort: (sortBy: string) => void;
  currentSort: { by: string; dir: 'asc' | 'desc' };
}

const TicketsTable: React.FC<TicketsTableProps> = ({
  tickets,
  selectedIds,
  onSelectIds,
  onSort,
}) => {
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      onSelectIds(tickets.map((t) => t.id));
    } else {
      onSelectIds([]);
    }
  };

  const handleSelectOne = (id: number, checked: boolean) => {
    if (checked) {
      onSelectIds([...selectedIds, id]);
    } else {
      onSelectIds(selectedIds.filter((sid) => sid !== id));
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Urgente':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      case 'Alta':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400';
      case 'Normal':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Baja':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'answered':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'closed':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'open':
        return 'Abierto';
      case 'answered':
        return 'Contestado';
      case 'closed':
        return 'Cerrado';
      default:
        return status;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-900">
          <tr>
            <th className="px-6 py-3 text-left">
              <input
                type="checkbox"
                checked={selectedIds.length === tickets.length && tickets.length > 0}
                onChange={(e) => handleSelectAll(e.target.checked)}
                className="rounded border-gray-300 dark:border-gray-600"
              />
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => onSort('code')}
            >
              <div className="flex items-center gap-1">
                Ticket
                <ChevronUpDownIcon className="w-4 h-4" />
              </div>
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => onSort('createdAt')}
            >
              <div className="flex items-center gap-1">
                Fecha
                <ChevronUpDownIcon className="w-4 h-4" />
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Asunto
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              De
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => onSort('priority')}
            >
              <div className="flex items-center gap-1">
                Prioridad
                <ChevronUpDownIcon className="w-4 h-4" />
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Asignado a
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Estado
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {tickets.map((ticket) => (
            <tr
              key={ticket.id}
              className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="checkbox"
                  checked={selectedIds.includes(ticket.id)}
                  onChange={(e) => handleSelectOne(ticket.id, e.target.checked)}
                  className="rounded border-gray-300 dark:border-gray-600"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">
                #{ticket.code}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {formatDate(ticket.createdAt)}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                <div className="flex items-center gap-2">
                  <span className="max-w-md truncate">{ticket.subject}</span>
                  <div className="flex gap-1">
                    {ticket.hasAttachment && (
                      <PaperClipIcon className="w-4 h-4 text-gray-400" />
                    )}
                    {ticket.commentCount > 0 && (
                      <div className="flex items-center gap-1 text-gray-400">
                        <ChatBubbleLeftIcon className="w-4 h-4" />
                        <span className="text-xs">{ticket.commentCount}</span>
                      </div>
                    )}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {ticket.fromName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(
                    ticket.priority
                  )}`}
                >
                  {ticket.priority}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {ticket.assignedTo?.name || '-'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                    ticket.status
                  )}`}
                >
                  {getStatusText(ticket.status)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketsTable;
