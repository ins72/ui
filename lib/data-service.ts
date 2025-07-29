import { Search } from "lucide-react";
import { toast } from 'react-hot-toast';

class DataService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      toast.error(error instanceof Error ? error.message : 'An error occurred');
      throw error;
    }
  }

  // Products CRUD
  async getProducts(params: any = {}) {
    const searchParams = new URLSearchParams(params);
    return this.request(`/products?${searchParams}`);
  }

  async createProduct(data: any) {
    return this.request('/products', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateProduct(id: string, data: any) {
    return this.request(`/products?id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteProduct(id: string) {
    return this.request(`/products?id=${id}`, {
      method: 'DELETE',
    });
  }

  // Customers CRUD
  async getCustomers(params: any = {}) {
    const searchParams = new URLSearchParams(params);
    return this.request(`/customers?${searchParams}`);
  }

  async createCustomer(data: any) {
    return this.request('/customers', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateCustomer(id: string, data: any) {
    return this.request(`/customers?id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteCustomer(id: string) {
    return this.request(`/customers?id=${id}`, {
      method: 'DELETE',
    });
  }

  // Transactions CRUD
  async getTransactions(params: any = {}) {
    const searchParams = new URLSearchParams(params);
    return this.request(`/transactions?${searchParams}`);
  }

  async createTransaction(data: any) {
    return this.request('/transactions', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateTransaction(id: string, data: any) {
    return this.request(`/transactions?id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteTransaction(id: string) {
    return this.request(`/transactions?id=${id}`, {
      method: 'DELETE',
    });
  }

  // Income CRUD
  async getIncome(params: any = {}) {
    const searchParams = new URLSearchParams(params);
    return this.request(`/income?${searchParams}`);
  }

  async createIncome(data: any) {
    return this.request('/income', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateIncome(id: string, data: any) {
    return this.request(`/income?id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteIncome(id: string) {
    return this.request(`/income?id=${id}`, {
      method: 'DELETE',
    });
  }

  // Payouts CRUD
  async getPayouts(params: any = {}) {
    const searchParams = new URLSearchParams(params);
    return this.request(`/payouts?${searchParams}`);
  }

  async createPayout(data: any) {
    return this.request('/payouts', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updatePayout(id: string, data: any) {
    return this.request(`/payouts?id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deletePayout(id: string) {
    return this.request(`/payouts?id=${id}`, {
      method: 'DELETE',
    });
  }

  // Comments CRUD
  async getComments(params: any = {}) {
    const searchParams = new URLSearchParams(params);
    return this.request(`/comments?${searchParams}`);
  }

  async createComment(data: any) {
    return this.request('/comments', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateComment(id: string, data: any) {
    return this.request(`/comments?id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteComment(id: string) {
    return this.request(`/comments?id=${id}`, {
      method: 'DELETE',
    });
  }

  // Messages CRUD
  async getMessages(params: any = {}) {
    const searchParams = new URLSearchParams(params);
    return this.request(`/messages?${searchParams}`);
  }

  async createMessage(data: any) {
    return this.request('/messages', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateMessage(id: string, data: any) {
    return this.request(`/messages?id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteMessage(id: string) {
    return this.request(`/messages?id=${id}`, {
      method: 'DELETE',
    });
  }

  // Notifications CRUD
  async getNotifications(params: any = {}) {
    const searchParams = new URLSearchParams(params);
    return this.request(`/notifications?${searchParams}`);
  }

  async createNotification(data: any) {
    return this.request('/notifications', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateNotification(id: string, data: any) {
    return this.request(`/notifications?id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteNotification(id: string) {
    return this.request(`/notifications?id=${id}`, {
      method: 'DELETE',
    });
  }

  // Refunds CRUD
  async getRefunds(params: any = {}) {
    const searchParams = new URLSearchParams(params);
    return this.request(`/refunds?${searchParams}`);
  }

  async createRefund(data: any) {
    return this.request('/refunds', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateRefund(id: string, data: any) {
    return this.request(`/refunds?id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteRefund(id: string) {
    return this.request(`/refunds?id=${id}`, {
      method: 'DELETE',
    });
  }

  // Statements CRUD
  async getStatements(params: any = {}) {
    const searchParams = new URLSearchParams(params);
    return this.request(`/statements?${searchParams}`);
  }

  async createStatement(data: any) {
    return this.request('/statements', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateStatement(id: string, data: any) {
    return this.request(`/statements?id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteStatement(id: string) {
    return this.request(`/statements?id=${id}`, {
      method: 'DELETE',
    });
  }

  // Countries CRUD
  async getCountries(params: any = {}) {
    const searchParams = new URLSearchParams(params);
    return this.request(`/countries?${searchParams}`);
  }

  async createCountry(data: any) {
    return this.request('/countries', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateCountry(id: string, data: any) {
    return this.request(`/countries?id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteCountry(id: string) {
    return this.request(`/countries?id=${id}`, {
      method: 'DELETE',
    });
  }

  // Shop Items CRUD
  async getShopItems(params: any = {}) {
    const searchParams = new URLSearchParams(params);
    return this.request(`/shop-items?${searchParams}`);
  }

  async createShopItem(data: any) {
    return this.request('/shop-items', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateShopItem(id: string, data: any) {
    return this.request(`/shop-items?id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteShopItem(id: string) {
    return this.request(`/shop-items?id=${id}`, {
      method: 'DELETE',
    });
  }

  // Chart Data CRUD
  async getChartData(params: any = {}) {
    const searchParams = new URLSearchParams(params);
    return this.request(`/chart-data?${searchParams}`);
  }

  async createChartData(data: any) {
    return this.request('/chart-data', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateChartData(id: string, data: any) {
    return this.request(`/chart-data?id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteChartData(id: string) {
    return this.request(`/chart-data?id=${id}`, {
      method: 'DELETE',
    });
  }

  // Active Times CRUD
  async getActiveTimes(params: any = {}) {
    const searchParams = new URLSearchParams(params);
    return this.request(`/active-times?${searchParams}`);
  }

  async createActiveTime(data: any) {
    return this.request('/active-times', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateActiveTime(id: string, data: any) {
    return this.request(`/active-times?id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteActiveTime(id: string) {
    return this.request(`/active-times?id=${id}`, {
      method: 'DELETE',
    });
  }

  // Promotes CRUD
  async getPromotes(params: any = {}) {
    const searchParams = new URLSearchParams(params);
    return this.request(`/promote?${searchParams}`);
  }

  async createPromote(data: any) {
    return this.request('/promote', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updatePromote(id: string, data: any) {
    return this.request(`/promote?id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deletePromote(id: string) {
    return this.request(`/promote?id=${id}`, {
      method: 'DELETE',
    });
  }

  // Creators CRUD
  async getCreators(params: any = {}) {
    const searchParams = new URLSearchParams(params);
    return this.request(`/creators?${searchParams}`);
  }

  async createCreator(data: any) {
    return this.request('/creators', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateCreator(id: string, data: any) {
    return this.request(`/creators?id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteCreator(id: string) {
    return this.request(`/creators?id=${id}`, {
      method: 'DELETE',
    });
  }

  // FAQs CRUD
  async getFaqs(params: any = {}) {
    const searchParams = new URLSearchParams(params);
    return this.request(`/faqs?${searchParams}`);
  }

  async createFaq(data: any) {
    return this.request('/faqs', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateFaq(id: string, data: any) {
    return this.request(`/faqs?id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteFaq(id: string) {
    return this.request(`/faqs?id=${id}`, {
      method: 'DELETE',
    });
  }

  // Pricing Plans CRUD
  async getPricingPlans(params: any = {}) {
    const searchParams = new URLSearchParams(params);
    return this.request(`/pricing?${searchParams}`);
  }

  async createPricingPlan(data: any) {
    return this.request('/pricing', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updatePricingPlan(id: string, data: any) {
    return this.request(`/pricing?id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deletePricingPlan(id: string) {
    return this.request(`/pricing?id=${id}`, {
      method: 'DELETE',
    });
  }

  // Affiliate Center CRUD
  async getAffiliateCenter(params: any = {}) {
    const searchParams = new URLSearchParams(params);
    return this.request(`/affiliate-center?${searchParams}`);
  }

  async createAffiliateData(data: any) {
    return this.request('/affiliate-center', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateAffiliateData(id: string, data: any) {
    return this.request(`/affiliate-center?id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteAffiliateData(id: string) {
    return this.request(`/affiliate-center?id=${id}`, {
      method: 'DELETE',
    });
  }

  // Followers CRUD
  async getFollowers(params: any = {}) {
    const searchParams = new URLSearchParams(params);
    return this.request(`/followers?${searchParams}`);
  }

  async createFollower(data: any) {
    return this.request('/followers', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateFollower(id: string, data: any) {
    return this.request(`/followers?id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteFollower(id: string) {
    return this.request(`/followers?id=${id}`, {
      method: 'DELETE',
    });
  }
}

export const dataService = new DataService();
