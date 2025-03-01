import { useState, useEffect, useCallback } from 'react';
import { investmentService } from '../services/investmentService';
import { Investment } from '../types/investment';

export const useInvestmentData = () => {
  const [investmentData, setInvestmentData] = useState<Investment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchInvestmentData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await investmentService.getInvestments();
      setInvestmentData(data);
    } catch (err) {
      setError('Failed to fetch investment data');
      console.error('Error fetching investment data:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchInvestmentData();
  }, [fetchInvestmentData]);

  const addInvestment = async (investment: Omit<Investment, 'id'>) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await investmentService.addInvestment(investment);
      // Refresh data after adding
      fetchInvestmentData();
    } catch (err) {
      setError('Failed to add investment');
      console.error('Error adding investment:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateInvestment = async (id: number, data: Partial<Investment>) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await investmentService.updateInvestment(id, data);
      // Refresh data after updating
      fetchInvestmentData();
    } catch (err) {
      setError('Failed to update investment');
      console.error('Error updating investment:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteInvestment = async (id: number) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await investmentService.deleteInvestment(id);
      // Refresh data after deleting
      fetchInvestmentData();
    } catch (err) {
      setError('Failed to delete investment');
      console.error('Error deleting investment:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    investmentData,
    isLoading,
    error,
    fetchInvestmentData,
    addInvestment,
    updateInvestment,
    deleteInvestment
  };
};