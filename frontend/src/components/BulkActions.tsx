import React, { useState } from 'react';

interface BulkActionsProps {
  selectedCount: number;
  onAction: (status: 'open' | 'answered' | 'closed') => void;
  isLoading: boolean;
}

const BulkActions: React.FC<BulkActionsProps> = ({
  selectedCount,
  onAction,
  isLoading,
}) => {
  const [action, setAction] = useState<'open' | 'answered' | 'closed'>('open');

  const handleSubmit = () => {
    onAction(action);
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {selectedCount} ticket{selectedCount !== 1 ? 's' : ''} seleccionado
        {selectedCount !== 1 ? 's' : ''}
      </span>

      <select
        value={action}
        onChange={(e) =>
          setAction(e.target.value as 'open' | 'answered' | 'closed')
        }
        className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
      >
        <option value="open">Marcar como Abierto</option>
        <option value="answered">Marcar como Contestado</option>
        <option value="closed">Marcar como Cerrado</option>
      </select>

      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50"
      >
        {isLoading ? 'Procesando...' : 'Aplicar'}
      </button>
    </div>
  );
};

export default BulkActions;
