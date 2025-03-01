import { api } from './api';
import { Investment } from '../types/investment';

export const investmentService = {
  /**
   * Get all investments for the current user
   * @returns Promise with array of investments
   */
  async getInvestments(): Promise<Investment[]> {
    try {
      const response = await api.get('/investments');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching investments:', error);
      throw error;
    }
  },

  /**
   * Get a specific investment by ID
   * @param id - Investment ID
   * @returns Promise with investment data
   */
  async getInvestmentById(id: number): Promise<Investment> {
    try {
      const response = await api.get(`/investments/${id}`);
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching investment ${id}:`, error);
      throw error;
    }
  },

  /**
   * Add a new investment
   * @param investment - Investment data
   * @returns Promise with the created investment
   */
  async addInvestment(investment: Omit<Investment, 'id'>): Promise<Investment> {
    try {
      const response = await api.post('/investments', investment);
      return response.data.data;
    } catch (error) {
      console.error('Error adding investment:', error);
      throw error;
    }
  },

  /**
   * Update an existing investment
   * @param id - Investment ID
   * @param data - Updated investment data
   * @returns Promise with the updated investment
   */
  async updateInvestment(id: number, data: Partial<Investment>): Promise<Investment> {
    try {
      const response = await api.put(`/investments/${id}`, data);
      return response.data.data;
    } catch (error) {
      console.error(`Error updating investment ${id}:`, error);
      throw error;
    }
  },

  /**
   * Update the current value of an investment
   * @param id - Investment ID
   * @param currentValue - New current value
   * @returns Promise with the updated investment
   */
  async updateInvestmentValue(id: number, currentValue: number): Promise<Investment> {
    try {
      const response = await api.patch(`/investments/${id}/value`, {
        currentValue,
        valueDate: new Date().toISOString()
      });
      return response.data.data;
    } catch (error) {
      console.error(`Error updating investment value ${id}:`, error);
      throw error;
    }
  },

  /**
   * Delete an investment
   * @param id - Investment ID
   * @returns Promise with success status
   */
  async deleteInvestment(id: number): Promise<void> {
    try {
      await api.delete(`/investments/${id}`);
    } catch (error) {
      console.error(`Error deleting investment ${id}:`, error);
      throw error;
    }
  },

  /**
   * Add a transaction to an investment
   * @param investmentId - Investment ID
   * @param transaction - Transaction data
   * @returns Promise with the created transaction
   */
  async addTransaction(investmentId: number, transaction: any): Promise<any> {
    try {
      const response = await api.post(`/investments/${investmentId}/transactions`, transaction);
      return response.data.data;
    } catch (error) {
      console.error(`Error adding transaction to investment ${investmentId}:`, error);
      throw error;
    }
  },

  /**
   * Get investment performance data
   * @returns Promise with performance data
   */
  async getPerformanceData(): Promise<any> {
    try {
      const response = await api.get('/investments/performance');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching performance data:', error);
      throw error;
    }
  }
};import { api } from './api';
import { Investment } from '../types/investment';

export const investmentService = {
  /**
   * Get all investments for the current user
   * @returns Promise with array of investments
   */
  async getInvestments(): Promise<Investment[]> {
    try {
      const response = await api.get('/investments');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching investments:', error);
      throw error;
    }
  },

  /**
   * Get a specific investment by ID
   * @param id - Investment ID
   * @returns Promise with investment data
   */
  async getInvestmentById(id: number): Promise<Investment> {
    try {
      const response = await api.get(`/investments/${id}`);
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching investment ${id}:`, error);
      throw error;
    }
  },

  /**
   * Add a new investment
   * @param investment - Investment data
   * @returns Promise with the created investment
   */
  async addInvestment(investment: Omit<Investment, 'id'>): Promise<Investment> {
    try {
      const response = await api.post('/investments', investment);
      return response.data.data;
    } catch (error) {
      console.error('Error adding investment:', error);
      throw error;
    }
  },

  /**
   * Update an existing investment
   * @param id - Investment ID
   * @param data - Updated investment data
   * @returns Promise with the updated investment
   */
  async updateInvestment(id: number, data: Partial<Investment>): Promise<Investment> {
    try {
      const response = await api.put(`/investments/${id}`, data);
      return response.data.data;
    } catch (error) {
      console.error(`Error updating investment ${id}:`, error);
      throw error;
    }
  },

  /**
   * Update the current value of an investment
   * @param id - Investment ID
   * @param currentValue - New current value
   * @returns Promise with the updated investment
   */
  async updateInvestmentValue(id: number, currentValue: number): Promise<Investment> {
    try {
      const response = await api.patch(`/investments/${id}/value`, {
        currentValue,
        valueDate: new Date().toISOString()
      });
      return response.data.data;
    } catch (error) {
      console.error(`Error updating investment value ${id}:`, error);
      throw error;
    }
  },

  /**
   * Delete an investment
   * @param id - Investment ID
   * @returns Promise with success status
   */
  async deleteInvestment(id: number): Promise<void> {
    try {
      await api.delete(`/investments/${id}`);
    } catch (error) {
      console.error(`Error deleting investment ${id}:`, error);
      throw error;
    }
  },

  /**
   * Add a transaction to an investment
   * @param investmentId - Investment ID
   * @param transaction - Transaction data
   * @returns Promise with the created transaction
   */
  async addTransaction(investmentId: number, transaction: any): Promise<any> {
    try {
      const response = await api.post(`/investments/${investmentId}/transactions`, transaction);
      return response.data.data;
    } catch (error) {
      console.error(`Error adding transaction to investment ${investmentId}:`, error);
      throw error;
    }
  },

  /**
   * Get investment performance data
   * @returns Promise with performance data
   */
  async getPerformanceData(): Promise<any> {
    try {
      const response = await api.get('/investments/performance');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching performance data:', error);
      throw error;
    }
  }
};import { api } from './api';
import { Investment } from '../types/investment';

export const investmentService = {
  /**
   * Get all investments for the current user
   * @returns Promise with array of investments
   */
  async getInvestments(): Promise<Investment[]> {
    try {
      const response = await api.get('/investments');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching investments:', error);
      throw error;
    }
  },

  /**
   * Get a specific investment by ID
   * @param id - Investment ID
   * @returns Promise with investment data
   */
  async getInvestmentById(id: number): Promise<Investment> {
    try {
      const response = await api.get(`/investments/${id}`);
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching investment ${id}:`, error);
      throw error;
    }
  },

  /**
   * Add a new investment
   * @param investment - Investment data
   * @returns Promise with the created investment
   */
  async addInvestment(investment: Omit<Investment, 'id'>): Promise<Investment> {
    try {
      const response = await api.post('/investments', investment);
      return response.data.data;
    } catch (error) {
      console.error('Error adding investment:', error);
      throw error;
    }
  },

  /**
   * Update an existing investment
   * @param id - Investment ID
   * @param data - Updated investment data
   * @returns Promise with the updated investment
   */
  async updateInvestment(id: number, data: Partial<Investment>): Promise<Investment> {
    try {
      const response = await api.put(`/investments/${id}`, data);
      return response.data.data;
    } catch (error) {
      console.error(`Error updating investment ${id}:`, error);
      throw error;
    }
  },

  /**
   * Update the current value of an investment
   * @param id - Investment ID
   * @param currentValue - New current value
   * @returns Promise with the updated investment
   */
  async updateInvestmentValue(id: number, currentValue: number): Promise<Investment> {
    try {
      const response = await api.patch(`/investments/${id}/value`, {
        currentValue,
        valueDate: new Date().toISOString()
      });
      return response.data.data;
    } catch (error) {
      console.error(`Error updating investment value ${id}:`, error);
      throw error;
    }
  },

  /**
   * Delete an investment
   * @param id - Investment ID
   * @returns Promise with success status
   */
  async deleteInvestment(id: number): Promise<void> {
    try {
      await api.delete(`/investments/${id}`);
    } catch (error) {
      console.error(`Error deleting investment ${id}:`, error);
      throw error;
    }
  },

  /**
   * Add a transaction to an investment
   * @param investmentId - Investment ID
   * @param transaction - Transaction data
   * @returns Promise with the created transaction
   */
  async addTransaction(investmentId: number, transaction: any): Promise<any> {
    try {
      const response = await api.post(`/investments/${investmentId}/transactions`, transaction);
      return response.data.data;
    } catch (error) {
      console.error(`Error adding transaction to investment ${investmentId}:`, error);
      throw error;
    }
  },

  /**
   * Get investment performance data
   * @returns Promise with performance data
   */
  async getPerformanceData(): Promise<any> {
    try {
      const response = await api.get('/investments/performance');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching performance data:', error);
      throw error;
    }
  }
};