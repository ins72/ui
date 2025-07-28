import axios from 'axios';

// ERPNext API Configuration
const ERP_NEXT_BASE_URL = process.env.NEXT_PUBLIC_ERP_NEXT_URL || 'http://localhost:8000';
const ERP_NEXT_API_KEY = process.env.NEXT_PUBLIC_ERP_NEXT_API_KEY;
const ERP_NEXT_API_SECRET = process.env.NEXT_PUBLIC_ERP_NEXT_API_SECRET;

// Create axios instance for ERPNext API
export const erpNextApi = axios.create({
  baseURL: `${ERP_NEXT_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add authentication headers
if (ERP_NEXT_API_KEY && ERP_NEXT_API_SECRET) {
  erpNextApi.defaults.headers.common['Authorization'] = `token ${ERP_NEXT_API_KEY}:${ERP_NEXT_API_SECRET}`;
}

// ERPNext API Types
export interface Customer {
  name: string;
  customer_name: string;
  customer_type: string;
  customer_group: string;
  territory: string;
  email_id?: string;
  phone?: string;
  creation: string;
  modified: string;
}

export interface Lead {
  name: string;
  lead_name: string;
  company_name?: string;
  email_id?: string;
  phone?: string;
  status: string;
  source?: string;
  creation: string;
  modified: string;
}

export interface SalesOrder {
  name: string;
  customer: string;
  customer_name: string;
  transaction_date: string;
  delivery_date: string;
  grand_total: number;
  status: string;
  items: SalesOrderItem[];
  creation: string;
  modified: string;
}

export interface SalesOrderItem {
  item_code: string;
  item_name: string;
  qty: number;
  rate: number;
  amount: number;
}

export interface Product {
  name: string;
  item_code: string;
  item_name: string;
  item_group: string;
  stock_uom: string;
  standard_rate: number;
  description?: string;
  creation: string;
  modified: string;
}

export interface Employee {
  name: string;
  employee_name: string;
  employee: string;
  designation: string;
  department: string;
  email: string;
  cell_number?: string;
  date_of_joining: string;
  creation: string;
  modified: string;
}

export interface Project {
  name: string;
  project_name: string;
  status: string;
  expected_start_date: string;
  expected_end_date: string;
  actual_start_date?: string;
  actual_end_date?: string;
  project_type: string;
  priority: string;
  creation: string;
  modified: string;
}

// ERPNext API Functions
export const erpNextApiService = {
  // Customer Management
  async getCustomers(filters?: any): Promise<Customer[]> {
    const response = await erpNextApi.get('/resource/Customer', { params: { filters } });
    return response.data.data;
  },

  async createCustomer(customerData: Partial<Customer>): Promise<Customer> {
    const response = await erpNextApi.post('/resource/Customer', customerData);
    return response.data.data;
  },

  async updateCustomer(name: string, customerData: Partial<Customer>): Promise<Customer> {
    const response = await erpNextApi.put(`/resource/Customer/${name}`, customerData);
    return response.data.data;
  },

  // Lead Management
  async getLeads(filters?: any): Promise<Lead[]> {
    const response = await erpNextApi.get('/resource/Lead', { params: { filters } });
    return response.data.data;
  },

  async createLead(leadData: Partial<Lead>): Promise<Lead> {
    const response = await erpNextApi.post('/resource/Lead', leadData);
    return response.data.data;
  },

  async updateLead(name: string, leadData: Partial<Lead>): Promise<Lead> {
    const response = await erpNextApi.put(`/resource/Lead/${name}`, leadData);
    return response.data.data;
  },

  // Sales Order Management
  async getSalesOrders(filters?: any): Promise<SalesOrder[]> {
    const response = await erpNextApi.get('/resource/Sales Order', { params: { filters } });
    return response.data.data;
  },

  async createSalesOrder(orderData: Partial<SalesOrder>): Promise<SalesOrder> {
    const response = await erpNextApi.post('/resource/Sales Order', orderData);
    return response.data.data;
  },

  async updateSalesOrder(name: string, orderData: Partial<SalesOrder>): Promise<SalesOrder> {
    const response = await erpNextApi.put(`/resource/Sales Order/${name}`, orderData);
    return response.data.data;
  },

  // Product Management
  async getProducts(filters?: any): Promise<Product[]> {
    const response = await erpNextApi.get('/resource/Item', { params: { filters } });
    return response.data.data;
  },

  async createProduct(productData: Partial<Product>): Promise<Product> {
    const response = await erpNextApi.post('/resource/Item', productData);
    return response.data.data;
  },

  async updateProduct(name: string, productData: Partial<Product>): Promise<Product> {
    const response = await erpNextApi.put(`/resource/Item/${name}`, productData);
    return response.data.data;
  },

  // Employee Management
  async getEmployees(filters?: any): Promise<Employee[]> {
    const response = await erpNextApi.get('/resource/Employee', { params: { filters } });
    return response.data.data;
  },

  async createEmployee(employeeData: Partial<Employee>): Promise<Employee> {
    const response = await erpNextApi.post('/resource/Employee', employeeData);
    return response.data.data;
  },

  async updateEmployee(name: string, employeeData: Partial<Employee>): Promise<Employee> {
    const response = await erpNextApi.put(`/resource/Employee/${name}`, employeeData);
    return response.data.data;
  },

  // Project Management
  async getProjects(filters?: any): Promise<Project[]> {
    const response = await erpNextApi.get('/resource/Project', { params: { filters } });
    return response.data.data;
  },

  async createProject(projectData: Partial<Project>): Promise<Project> {
    const response = await erpNextApi.post('/resource/Project', projectData);
    return response.data.data;
  },

  async updateProject(name: string, projectData: Partial<Project>): Promise<Project> {
    const response = await erpNextApi.put(`/resource/Project/${name}`, projectData);
    return response.data.data;
  },

  // Dashboard Analytics
  async getDashboardStats(): Promise<any> {
    const response = await erpNextApi.get('/method/frappe.desk.doctype.dashboard_chart.dashboard_chart.get');
    return response.data;
  },

  // Search functionality
  async searchResources(doctype: string, searchTerm: string): Promise<any[]> {
    const response = await erpNextApi.get(`/method/frappe.desk.search.search_link`, {
      params: {
        doctype,
        txt: searchTerm,
        query: 'frappe.desk.search.search_link',
      },
    });
    return response.data.message || [];
  },
};

export default erpNextApiService; 