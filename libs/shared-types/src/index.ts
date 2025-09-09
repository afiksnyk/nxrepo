// User types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserRequest {
  email: string;
  name: string;
  password: string;
}

export interface UpdateUserRequest {
  name?: string;
  avatar?: string;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Common types
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export type Status = 'active' | 'inactive' | 'pending' | 'archived';

export interface FilterOptions {
  search?: string;
  status?: Status;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// Event types
export interface AppEvent {
  type: string;
  payload: any;
  timestamp: Date;
  userId?: string;
}

export type EventHandler<T = any> = (event: AppEvent & { payload: T }) => void;
