import React from 'react';
import { formatCurrency } from '../../utils/formatters';

interface TaxBreakdownProps {
  income: number;
  deductions: number;
  taxAmount: number;
  regime: 'old' | 'new';
}

const TaxBreakdown: React.FC<TaxBreakdownProps> = ({
  income,
  deductions,
  taxAmount,
  regime
}) => {
  const taxableIncome = regime === 'old' 
    ? Math.max(0, income - deductions) 
    : Math.max(0, income - (regime === 'new' ? 50000 : 0)); // Standard deduction in new regime
  
  const cess = taxAmount * 0.04;
  const totalTax = taxAmount + cess;
  
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-medium text-gray-800">Tax Breakdown</h3>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between py-1">
          <span className="text-sm text-gray-600">Gross Income:</span>
          <span className="text-sm font-medium text-gray-800">{formatCurrency(income)}</span>
        </div>
        
        {regime === 'old' && (
          <div className="flex justify-between py-1">
            <span className="text-sm text-gray-600">Deductions:</span>
            <span className="text-sm font-medium text-gray-800">- {formatCurrency(deductions)}</span>
          </div>
        )}
        
        {regime === 'new' && (
          <div className="flex justify-between py-1">
            <span className="text-sm text-gray-600">Standard Deduction:</span>
            <span className="text-sm font-medium text-gray-800">- {formatCurrency(50000)}</span>
          </div>
        )}
        
        <div className="flex justify-between py-1 border-t border-gray-200 mt-1 pt-2">
          <span className="text-sm font-medium text-gray-700">Taxable Income:</span>
          <span className="text-sm font-medium text-gray-800">{formatCurrency(taxableIncome)}</span>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between py-1">
          <span className="text-sm text-gray-600">Income Tax:</span>
          <span className="text-sm font-medium text-gray-800">{formatCurrency(taxAmount)}</span>
        </div>
        
        <div className="flex justify-between py-1">
          <span className="text-sm text-gray-600">Health & Education Cess (4%):</span>
          <span className="text-sm font-medium text-gray-800">{formatCurrency(cess)}</span>
        </div>
        
        <div className="flex justify-between py-1 border-t border-gray-200 mt-1 pt-2">
          <span className="text-sm font-medium text-gray-700">Total Tax Liability:</span>
          <span className="text-sm font-bold text-gray-800">{formatCurrency(totalTax)}</span>
        </div>
      </div>
      
      <div className="mt-2 text-xs text-gray-500">
        {regime === 'old' 
          ? "* Calculation based on old tax regime with applicable deductions" 
          : "* Calculation based on new tax regime with standard deduction"}
      </div>
    </div>
  );
};

export default TaxBreakdown;