import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { calculateTaxOldRegime, calculateTaxNewRegime } from '../../utils/taxCalculations';
import { formatCurrency } from '../../utils/formatters';
import TaxBreakdown from './TaxBreakdown';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const TaxCalculator: React.FC = () => {
  const [income, setIncome] = useState<number>(0);
  const [deductions, setDeductions] = useState<number>(0);
  const [selectedRegime, setSelectedRegime] = useState<'old' | 'new'>('new');
  const [oldRegimeTax, setOldRegimeTax] = useState<number>(0);
  const [newRegimeTax, setNewRegimeTax] = useState<number>(0);
  const [showComparison, setShowComparison] = useState<boolean>(false);

  useEffect(() => {
    const oldTax = calculateTaxOldRegime(income, deductions);
    const newTax = calculateTaxNewRegime(income);
    
    setOldRegimeTax(oldTax);
    setNewRegimeTax(newTax);
  }, [income, deductions]);

  const handleCalculate = () => {
    setShowComparison(true);
  };

  const recommendedRegime = oldRegimeTax <= newRegimeTax ? 'old' : 'new';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Income Tax Calculator FY 2023-24</h2>
      
      <Tab.Group onChange={(index) => setSelectedRegime(index === 0 ? 'old' : 'new')}>
        <Tab.List className="flex rounded-xl bg-blue-50 p-1 mb-6">
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white text-blue-700 shadow'
                  : 'text-blue-500 hover:bg-white/[0.12] hover:text-blue-600'
              )
            }
          >
            Old Tax Regime
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white text-blue-700 shadow'
                  : 'text-blue-500 hover:bg-white/[0.12] hover:text-blue-600'
              )
            }
          >
            New Tax Regime
          </Tab>
        </Tab.List>
        
        <Tab.Panels className="mt-2">
          <Tab.Panel className="rounded-xl bg-white p-3">
            <div className="space-y-4">
              <div>
                <label htmlFor="income" className="block text-sm font-medium text-gray-700">
                  Annual Income (₹)
                </label>
                <input
                  type="number"
                  id="income"
                  value={income || ''}
                  onChange={(e) => setIncome(Number(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter your annual income"
                />
              </div>
              
              <div>
                <label htmlFor="deductions" className="block text-sm font-medium text-gray-700">
                  Total Deductions (80C, 80D, etc.) (₹)
                </label>
                <input
                  type="number"
                  id="deductions"
                  value={deductions || ''}
                  onChange={(e) => setDeductions(Number(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter your total deductions"
                />
              </div>
              
              <div className="pt-4">
                <TaxBreakdown 
                  income={income} 
                  deductions={deductions} 
                  taxAmount={oldRegimeTax} 
                  regime="old" 
                />
              </div>
            </div>
          </Tab.Panel>
          
          <Tab.Panel className="rounded-xl bg-white p-3">
            <div className="space-y-4">
              <div>
                <label htmlFor="income-new" className="block text-sm font-medium text-gray-700">
                  Annual Income (₹)
                </label>
                <input
                  type="number"
                  id="income-new"
                  value={income || ''}
                  onChange={(e) => setIncome(Number(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter your annual income"
                />
              </div>
              
              <div className="pt-4">
                <TaxBreakdown 
                  income={income} 
                  deductions={0} 
                  taxAmount={newRegimeTax} 
                  regime="new" 
                />
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      
      <div className="mt-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleCalculate}
          className="w-full py-3 px-4 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Compare Tax Regimes
        </motion.button>
      </div>
      
      {showComparison && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 p-4 bg-blue-50 rounded-lg"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Tax Comparison</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">Old Regime Tax</p>
              <p className="text-xl font-bold text-gray-800">{formatCurrency(oldRegimeTax)}</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">New Regime Tax</p>
              <p className="text-xl font-bold text-gray-800">{formatCurrency(newRegimeTax)}</p>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm font-medium text-gray-700">
              Recommended Tax Regime: <span className="text-green-600 font-bold">{recommendedRegime === 'old' ? 'Old Regime' : 'New Regime'}</span>
            </p>
            <p className="text-sm text-gray-600 mt-1">
              You can save {formatCurrency(Math.abs(oldRegimeTax - newRegimeTax))} by choosing the {recommendedRegime} regime.
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TaxCalculator;