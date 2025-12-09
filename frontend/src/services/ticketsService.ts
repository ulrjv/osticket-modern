import { api } from './api';
import type {
  TicketsResponse,
  TicketFilters,
  BulkUpdateRequest,
  LoginRequest,
  LoginResponse,
} from '../types';

export const ticketsService = {
  getTickets: (filters: TicketFilters): Promise<TicketsResponse> => {
    return api.get('/tickets', filters as Record<string, unknown>);
  },

  bulkUpdate: (data: BulkUpdateRequest) => {
    return api.post('/tickets/bulk-update', data);
  },

  exportTickets: async (filters: TicketFilters): Promise<Blob> => {
    return api.download('/tickets/export', filters as Record<string, unknown>);
  },
};

export const authService = {
  login: (data: LoginRequest): Promise<LoginResponse> => {
    return api.post('/login', data);
  },

  logout: () => {
    return api.post('/logout');
  },
};
