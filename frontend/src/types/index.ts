export interface Agent {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface Ticket {
  id: number;
  code: string;
  subject: string;
  fromName: string;
  fromEmail: string;
  status: 'open' | 'answered' | 'closed';
  priority: 'Baja' | 'Normal' | 'Alta' | 'Urgente';
  department?: string;
  topic?: string;
  assignedToId?: number;
  assignedTo?: Agent;
  closedById?: number;
  closedBy?: Agent;
  commentCount: number;
  hasAttachment: boolean;
  createdAt: string;
  closedAt?: string;
  updatedAt: string;
}

export interface TicketsResponse {
  success: boolean;
  data: Ticket[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

export interface TicketFilters {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortDir?: 'asc' | 'desc';
  status?: string;
  priority?: string;
  assignee?: string;
  search?: string;
  fromDate?: string;
  toDate?: string;
}

export interface BulkUpdateRequest {
  ticketIds: number[];
  status: 'open' | 'answered' | 'closed';
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  agent: Agent;
}
