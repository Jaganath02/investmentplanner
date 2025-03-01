import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useInvestmentData } from '../../hooks/useInvestmentData';
import { formatCurrency } from '../../utils/formatters';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const InvestmentSummary: React.FC = () => {
  const { investmentData, isLoading, error, fetchInvestmentData } = useInvestmentData();

  useEffect(() => {
    fetchInvestmentData();
  }, [fetchInvestmentData]);

  if (isLoading) return <div className="animate-pulse h-64 bg-gray-200 rounded-lg"></div>;
  if (error) return <div className="text-red-500">Failed to load investment data</div>;

  const totalValue = investmentData.reduce((sum, item) => sum + item.currentValue, 0);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Portfolio Summary</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={investmentData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="currentValue"
                nameKey="assetType"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {investmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => formatCurrency(value as number)} 
                labelFormatter={(label) => `Asset: ${label}`}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full md:w-1/2 pl-0 md:pl-6 mt-4 md:mt-0">
          <h3 className="text-xl font-semibold text-gray-700">Total Portfolio Value</h3>
          <p className="text-3xl font-bold text-indigo-600">{formatCurrency(totalValue)}</p>
          
          <div className="mt-4 space-y-2">
            {investmentData.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex justify-between items-center"
              >
                <div className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <span className="text-gray-700">{item.assetType}</span>
                </div>
                <span className="font-medium">{formatCurrency(item.currentValue)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InvestmentSummary;