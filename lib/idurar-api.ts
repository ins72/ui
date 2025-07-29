import { Search } from "lucide-react";
import React from "react";
import axios from 'axios';

// Idurar API Configuration
const IDURAR_BASE_URL = process.env.NEXT_PUBLIC_IDURAR_API_URL || 'http://localhost:5000';
const IDURAR_API_KEY = process.env.NEXT_PUBLIC_IDURAR_API_KEY;

// Create axios instance for Idurar API
export const idurarApi = axios.create({
  baseURL: `${IDURAR_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add authentication headers
if (IDURAR_API_KEY) {
  idurarApi.defaults.headers.common['Authorization'] = `Bearer ${IDURAR_API_KEY}`;
}

// Idurar API Types
export interface Client {
  _id: string;
  name: string;
  phone?: string;
  country?: string;
  address?: string;
  email?: string;
  enabled: boolean;
  removed: boolean;
  created: string;
  updated: string;
  createdBy?: string;
  assigned?: string;
}

export interface Invoice {
  _id: string;
  number: number;
  year: number;
  content?: string;
  recurring?: 'daily' | 'weekly' | 'monthly' | 'annually' | 'quarter';
  date: string;
  expiredDate: string;
  client: Client;
  items: InvoiceItem[];
  taxRate: number;
  subTotal: number;
  taxTotal: number;
  total: number;
  credit: number;
  discount: number;
  paymentStatus: 'unpaid' | 'partial' | 'paid';
  status: 'draft' | 'sent' | 'viewed' | 'expired' | 'declined' | 'accepted';
  note?: string;
  terms?: string;
  enabled: boolean;
  removed: boolean;
  created: string;
  updated: string;
  createdBy?: string;
}

export interface InvoiceItem {
  itemName: string;
  description?: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Quote {
  _id: string;
  number: number;
  year: number;
  content?: string;
  date: string;
  expiredDate: string;
  client: Client;
  items: InvoiceItem[];
  taxRate: number;
  subTotal: number;
  taxTotal: number;
  total: number;
  credit: number;
  discount: number;
  status: 'draft' | 'sent' | 'viewed' | 'expired' | 'declined' | 'accepted';
  note?: string;
  terms?: string;
  enabled: boolean;
  removed: boolean;
  created: string;
  updated: string;
  createdBy?: string;
}

export interface Payment {
  _id: string;
  number: number;
  year: number;
  client: Client;
  invoice: Invoice;
  amount: number;
  paymentMode: string;
  ref: string;
  description?: string;
  date: string;
  status: 'pending' | 'completed' | 'failed';
  enabled: boolean;
  removed: boolean;
  created: string;
  updated: string;
  createdBy?: string;
}

export interface PaymentMode {
  _id: string;
  name: string;
  description?: string;
  enabled: boolean;
  removed: boolean;
  created: string;
  updated: string;
}

export interface Taxes {
  _id: string;
  name: string;
  percentage: number;
  description?: string;
  enabled: boolean;
  removed: boolean;
  created: string;
  updated: string;
}

// Dashboard Stats Interface
export interface DashboardStats {
  totalClients: number;
  totalInvoices: number;
  totalQuotes: number;
  totalPayments: number;
  totalRevenue: number;
  pendingInvoices: number;
  overdueInvoices: number;
  clientGrowth: number;
  revenueGrowth: number;
  invoiceGrowth: number;
  paymentGrowth: number;
}

// Enhanced API service with analytics
export const idurarApiService = {
  // Client Management
  async getClients(filters?: any): Promise<Client[]> {
    try {
      const response = await idurarApi.get('/client/list', { params: { filters } });
      return response.data || [];
    } catch (error) {
      console.error('Error fetching clients:', error);
      return [];
    }
  },

  async createClient(clientData: Partial<Client>): Promise<Client | null> {
    try {
      const response = await idurarApi.post('/client/create', clientData);
      return response.data;
    } catch (error) {
      console.error('Error creating client:', error);
      return null;
    }
  },

  async updateClient(id: string, clientData: Partial<Client>): Promise<Client | null> {
    try {
      const response = await idurarApi.patch(`/client/update/${id}`, clientData);
      return response.data;
    } catch (error) {
      console.error('Error updating client:', error);
      return null;
    }
  },

  async deleteClient(id: string): Promise<boolean> {
    try {
      await idurarApi.delete(`/client/delete/${id}`);
      return true;
    } catch (error) {
      console.error('Error deleting client:', error);
      return false;
    }
  },

  async searchClients(searchTerm: string): Promise<Client[]> {
    try {
      const response = await idurarApi.get('/client/search', { params: { search: searchTerm } });
      return response.data || [];
    } catch (error) {
      console.error('Error searching clients:', error);
      return [];
    }
  },

  // Invoice Management
  async getInvoices(filters?: any): Promise<Invoice[]> {
    try {
      const response = await idurarApi.get('/invoice/list', { params: { filters } });
      return response.data || [];
    } catch (error) {
      console.error('Error fetching invoices:', error);
      return [];
    }
  },

  async createInvoice(invoiceData: Partial<Invoice>): Promise<Invoice | null> {
    try {
      const response = await idurarApi.post('/invoice/create', invoiceData);
      return response.data;
    } catch (error) {
      console.error('Error creating invoice:', error);
      return null;
    }
  },

  async updateInvoice(id: string, invoiceData: Partial<Invoice>): Promise<Invoice | null> {
    try {
      const response = await idurarApi.patch(`/invoice/update/${id}`, invoiceData);
      return response.data;
    } catch (error) {
      console.error('Error updating invoice:', error);
      return null;
    }
  },

  async deleteInvoice(id: string): Promise<boolean> {
    try {
      await idurarApi.delete(`/invoice/delete/${id}`);
      return true;
    } catch (error) {
      console.error('Error deleting invoice:', error);
      return false;
    }
  },

  async getInvoice(id: string): Promise<Invoice | null> {
    try {
      const response = await idurarApi.get(`/invoice/read/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching invoice:', error);
      return null;
    }
  },

  // Quote Management
  async getQuotes(filters?: any): Promise<Quote[]> {
    try {
      const response = await idurarApi.get('/quote/list', { params: { filters } });
      return response.data || [];
    } catch (error) {
      console.error('Error fetching quotes:', error);
      return [];
    }
  },

  async createQuote(quoteData: Partial<Quote>): Promise<Quote | null> {
    try {
      const response = await idurarApi.post('/quote/create', quoteData);
      return response.data;
    } catch (error) {
      console.error('Error creating quote:', error);
      return null;
    }
  },

  async updateQuote(id: string, quoteData: Partial<Quote>): Promise<Quote | null> {
    try {
      const response = await idurarApi.patch(`/quote/update/${id}`, quoteData);
      return response.data;
    } catch (error) {
      console.error('Error updating quote:', error);
      return null;
    }
  },

  async deleteQuote(id: string): Promise<boolean> {
    try {
      await idurarApi.delete(`/quote/delete/${id}`);
      return true;
    } catch (error) {
      console.error('Error deleting quote:', error);
      return false;
    }
  },

  async convertQuoteToInvoice(id: string): Promise<Invoice | null> {
    try {
      const response = await idurarApi.get(`/quote/convert/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error converting quote:', error);
      return null;
    }
  },

  // Payment Management
  async getPayments(filters?: any): Promise<Payment[]> {
    try {
      const response = await idurarApi.get('/payment/list', { params: { filters } });
      return response.data || [];
    } catch (error) {
      console.error('Error fetching payments:', error);
      return [];
    }
  },

  async createPayment(paymentData: Partial<Payment>): Promise<Payment | null> {
    try {
      const response = await idurarApi.post('/payment/create', paymentData);
      return response.data;
    } catch (error) {
      console.error('Error creating payment:', error);
      return null;
    }
  },

  async updatePayment(id: string, paymentData: Partial<Payment>): Promise<Payment | null> {
    try {
      const response = await idurarApi.patch(`/payment/update/${id}`, paymentData);
      return response.data;
    } catch (error) {
      console.error('Error updating payment:', error);
      return null;
    }
  },

  async deletePayment(id: string): Promise<boolean> {
    try {
      await idurarApi.delete(`/payment/delete/${id}`);
      return true;
    } catch (error) {
      console.error('Error deleting payment:', error);
      return false;
    }
  },

  // Payment Modes
  async getPaymentModes(): Promise<PaymentMode[]> {
    try {
      const response = await idurarApi.get('/paymentmode/list');
      return response.data || [];
    } catch (error) {
      console.error('Error fetching payment modes:', error);
      return [];
    }
  },

  // Taxes
  async getTaxes(): Promise<Taxes[]> {
    try {
      const response = await idurarApi.get('/taxes/list');
      return response.data || [];
    } catch (error) {
      console.error('Error fetching taxes:', error);
      return [];
    }
  },

  // Dashboard Analytics
  async getDashboardStats(): Promise<DashboardStats | null> {
    try {
      const response = await idurarApi.get('/analytics/dashboard');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      return null;
    }
  },

  // Search functionality
  async searchResources(entity: string, searchTerm: string): Promise<any[]> {
    try {
      const response = await idurarApi.get(`/${entity}/search`, {
        params: { search: searchTerm },
      });
      return response.data || [];
    } catch (error) {
      console.error('Error searching resources:', error);
      return [];
    }
  },

  // Analytics functions
  async getClientAnalytics(clientId: string): Promise<any> {
    try {
      const response = await idurarApi.get(`/analytics/client/${clientId}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching client analytics:', error);
      return null;
    }
  },

  async getRevenueTrends(period: string = '30d'): Promise<any[]> {
    try {
      const response = await idurarApi.get(`/analytics/revenue-trends?period=${period}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching revenue trends:', error);
      return [];
    }
  },

  async getInvoiceTrends(period: string = '30d'): Promise<any[]> {
    try {
      const response = await idurarApi.get(`/analytics/invoice-trends?period=${period}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching invoice trends:', error);
      return [];
    }
  },

  async getTopClients(limit: number = 10): Promise<any[]> {
    try {
      const response = await idurarApi.get(`/analytics/top-clients?limit=${limit}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching top clients:', error);
      return [];
    }
  },

  async getPaymentStatusDistribution(): Promise<any[]> {
    try {
      const response = await idurarApi.get('/analytics/payment-distribution');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching payment distribution:', error);
      return [];
    }
  },
};

export default idurarApiService; 