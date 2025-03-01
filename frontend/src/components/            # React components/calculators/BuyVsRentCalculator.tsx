import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { formatCurrency } from '../../utils/formatters';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BuyVsRentCalculator: React.FC = () => {
  // Property details
  const [propertyPrice, setPropertyPrice] = useState<number>(5000000);
  const [downPayment, setDownPayment] = useState<number>(1000000);
  const [loanTerm, setLoanTerm] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [propertyAppreciation, setPropertyAppreciation] = useState<number>(5);
  const [maintenanceCost, setMaintenanceCost] = useState<number>(5000);
  const [propertyTax, setPropertyTax] = useState<number>(10000);
  
  // Rent details
  const [monthlyRent, setMonthlyRent] = useState<number>(25000);
  const [rentIncrease, setRentIncrease] = useState<number>(5);
  const [securityDeposit, setSecurityDeposit] = useState<number>(100000);
  
  // Investment details (for rent scenario)
  const [investmentReturn, setInvestmentReturn] = useState<number>(8);
  
  // Results
  const [buyTotalCost, setBuyTotalCost] = useState<number>(0);
  const [rentTotalCost, setRentTotalCost] = useState<number>(0);
  const [breakevenYear, setBreakevenYear] = useState<number | null>(null);
  const [chartData, setChartData] = useState<any>(null);
  
  // Calculate costs
  useEffect(() => {
    const calculateCosts = () => {
      const years = 30; // Calculate for 30 years
      const loanAmount = propertyPrice - downPayment;
      const monthlyInterestRate = interestRate / 100 / 12;
      const totalPayments = loanTerm * 12;
      
      // Calculate monthly mortgage payment
      const monthlyPayment = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments) / 
        (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
      
     // frontend/src/components/calculators/BuyVsRentCalculator.tsx (continued)
     let buyYearlyCosts = [];
     let rentYearlyCosts = [];
     let buyNetWorth = [];
     let rentNetWorth = [];
     
     // Initial costs
     let totalBuyCost = downPayment;
     let totalRentCost = securityDeposit;
     let buyNetWorthValue = -downPayment + propertyPrice;
     let rentNetWorthValue = -securityDeposit;
     
     // Downpayment amount that could be invested in rent scenario
     let investedDownpayment = downPayment;
     
     buyYearlyCosts.push(totalBuyCost);
     rentYearlyCosts.push(totalRentCost);
     buyNetWorth.push(buyNetWorthValue);
     rentNetWorth.push(rentNetWorthValue);
     
     for (let year = 1; year <= years; year++) {
       // Property value increases with appreciation
       const propertyValue = propertyPrice * Math.pow(1 + propertyAppreciation / 100, year);
       
       // Buy scenario yearly costs
       const yearlyMortgage = year <= loanTerm ? monthlyPayment * 12 : 0;
       const yearlyMaintenance = maintenanceCost * 12;
       const yearlyPropertyTax = propertyTax;
       const buyYearlyCost = yearlyMortgage + yearlyMaintenance + yearlyPropertyTax;
       
       totalBuyCost += buyYearlyCost;
       buyYearlyCosts.push(totalBuyCost);
       
       // Calculate remaining loan balance
       let remainingLoan = 0;
       if (year <= loanTerm) {
         const monthsPaid = year * 12;
         remainingLoan = loanAmount * (Math.pow(1 + monthlyInterestRate, totalPayments) - Math.pow(1 + monthlyInterestRate, monthsPaid)) / 
           (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
       }
       
       // Buy scenario net worth (property value - remaining loan)
       buyNetWorthValue = propertyValue - remainingLoan;
       buyNetWorth.push(buyNetWorthValue);
       
       // Rent scenario yearly costs
       const currentMonthlyRent = monthlyRent * Math.pow(1 + rentIncrease / 100, year - 1);
       const yearlyRent = currentMonthlyRent * 12;
       
       totalRentCost += yearlyRent;
       rentYearlyCosts.push(totalRentCost);
       
       // Investment growth in rent scenario
       investedDownpayment *= (1 + investmentReturn / 100);
       
       // Additional monthly investment (difference between mortgage and rent)
       let additionalInvestment = 0;
       if (currentMonthlyRent < monthlyPayment) {
         additionalInvestment = (monthlyPayment - currentMonthlyRent) * 12;
         investedDownpayment += additionalInvestment * (1 + investmentReturn / 100 / 2); // Simplified growth calculation
       }
       
       // Rent scenario net worth (just investments)
       rentNetWorthValue = investedDownpayment - securityDeposit;
       rentNetWorth.push(rentNetWorthValue);
     }
     
     // Find breakeven year (when buy net worth exceeds rent net worth)
     let breakeven = null;
     for (let i = 0; i < buyNetWorth.length; i++) {
       if (buyNetWorth[i] > rentNetWorth[i]) {
         breakeven = i;
         break;
       }
     }
     
     setBreakevenYear(breakeven);
     setBuyTotalCost(totalBuyCost);
     setRentTotalCost(totalRentCost);
     
     // Prepare chart data
     const labels = Array.from({ length: years + 1 }, (_, i) => `Year ${i}`);
     
     setChartData({
       labels,
       datasets: [
         {
           label: 'Buy - Net Worth',
           data: buyNetWorth,
           borderColor: 'rgb(53, 162, 235)',
           backgroundColor: 'rgba(53, 162, 235, 0.5)',
         },
         {
           label: 'Rent - Net Worth',
           data: rentNetWorth,
           borderColor: 'rgb(255, 99, 132)',
           backgroundColor: 'rgba(255, 99, 132, 0.5)',
         },
       ],
     });
   };
   
   calculateCosts();
 }, [
   propertyPrice, downPayment, loanTerm, interestRate, propertyAppreciation,
   maintenanceCost, propertyTax, monthlyRent, rentIncrease, securityDeposit,
   investmentReturn
 ]);
 
 return (
   <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ duration: 0.5 }}
     className="bg-white rounded-xl shadow-lg p-6"
   >
     <h2 className="text-2xl font-bold text-gray-800 mb-6">Buy vs Rent Calculator</h2>
     
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       <div className="space-y-4">
         <h3 className="text-lg font-semibold text-gray-700">Property Purchase Details</h3>
         
         <div>
           <label htmlFor="propertyPrice" className="block text-sm font-medium text-gray-700">
             Property Price (₹)
           </label>
           <input
             type="number"
             id="propertyPrice"
             value={propertyPrice}
             onChange={(e) => setPropertyPrice(Number(e.target.value))}
             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
           />
         </div>
         
         <div>
           <label htmlFor="downPayment" className="block text-sm font-medium text-gray-700">
             Down Payment (₹)
           </label>
           <input
             type="number"
             id="downPayment"
             value={downPayment}
             onChange={(e) => setDownPayment(Number(e.target.value))}
             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
           />
           <p className="text-xs text-gray-500 mt-1">
             {((downPayment / propertyPrice) * 100).toFixed(1)}% of property price
           </p>
         </div>
         
         <div>
           <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700">
             Loan Term (years)
           </label>
           <input
             type="number"
             id="loanTerm"
             value={loanTerm}
             onChange={(e) => setLoanTerm(Number(e.target.value))}
             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
           />
         </div>
         
         <div>
           <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700">
             Interest Rate (%)
           </label>
           <input
             type="number"
             id="interestRate"
             value={interestRate}
             onChange={(e) => setInterestRate(Number(e.target.value))}
             step="0.1"
             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
           />
         </div>
         
         <div>
           <label htmlFor="propertyAppreciation" className="block text-sm font-medium text-gray-700">
             Annual Property Appreciation (%)
           </label>
           <input
             type="number"
             id="propertyAppreciation"
             value={propertyAppreciation}
             onChange={(e) => setPropertyAppreciation(Number(e.target.value))}
             step="0.1"
             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
           />
         </div>
         
         <div>
           <label htmlFor="maintenanceCost" className="block text-sm font-medium text-gray-700">
             Monthly Maintenance (₹)
           </label>
           <input
             type="number"
             id="maintenanceCost"
             value={maintenanceCost}
             onChange={(e) => setMaintenanceCost(Number(e.target.value))}
             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
           />
         </div>
         
         <div>
           <label htmlFor="propertyTax" className="block text-sm font-medium text-gray-700">
             Annual Property Tax (₹)
           </label>
           <input
             type="number"
             id="propertyTax"
             value={propertyTax}
             onChange={(e) => setPropertyTax(Number(e.target.value))}
             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
           />
         </div>
       </div>
       
       <div className="space-y-4">
         <h3 className="text-lg font-semibold text-gray-700">Rental Details</h3>
         
         <div>
           <label htmlFor="monthlyRent" className="block text-sm font-medium text-gray-700">
             Monthly Rent (₹)
           </label>
           <input
             type="number"
             id="monthlyRent"
             value={monthlyRent}
             onChange={(e) => setMonthlyRent(Number(e.target.value))}
             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
           />
         </div>
         
         <div>
           <label htmlFor="rentIncrease" className="block text-sm font-medium text-gray-700">
             Annual Rent Increase (%)
           </label>
           <input
             type="number"
             id="rentIncrease"
             value={rentIncrease}
             onChange={(e) => setRentIncrease(Number(e.target.value))}
             step="0.1"
             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
           />
         </div>
         
         <div>
           <label htmlFor="securityDeposit" className="block text-sm font-medium text-gray-700">
             Security Deposit (₹)
           </label>
           <input
             type="number"
             id="securityDeposit"
             value={securityDeposit}
             onChange={(e) => setSecurityDeposit(Number(e.target.value))}
             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
           />
         </div>
         
         <div>
           <label htmlFor="investmentReturn" className="block text-sm font-medium text-gray-700">
             Annual Investment Return (%)
           </label>
           <input
             type="number"
             id="investmentReturn"
             value={investmentReturn}
             onChange={(e) => setInvestmentReturn(Number(e.target.value))}
             step="0.1"
             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
           />
           <p className="text-xs text-gray-500 mt-1">
             Expected return if you invest the down payment amount
           </p>
         </div>
       </div>
     </div>
     
     <div className="mt-8">
       {chartData && (
         <div className="mb-6">
           <Line 
             data={chartData} 
             options={{
               responsive: true,
               plugins: {
                 legend: {
                   position: 'top' as const,
                 },
                 title: {
                   display: true,
                   text: 'Buy vs Rent Net Worth Comparison',
                 },
                 tooltip: {
                   callbacks: {
                     label: function(context) {
                       let label = context.dataset.label || '';
                       if (label) {
                         label += ': ';
                       }
                       if (context.parsed.y !== null) {
                         label += formatCurrency(context.parsed.y);
                       }
                       return label;
                     }
                   }
                 }
               },
             }}
           />
         </div>
       )}
       
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
         <motion.div 
           whileHover={{ scale: 1.02 }}
           className="bg-blue-50 p-4 rounded-lg"
         >
           <h4 className="text-sm font-medium text-blue-700">Total Cost of Buying</h4>
           <p className="text-xl font-bold text-blue-900">{formatCurrency(buyTotalCost)}</p>
           <p className="text-xs text-blue-600 mt-1">Over 30 years</p>
         </motion.div>
         
         <motion.div 
           whileHover={{ scale: 1.02 }}
           className="bg-pink-50 p-4 rounded-lg"
         >
           <h4 className="text-sm font-medium text-pink-700">Total Cost of Renting</h4>
           <p className="text-xl font-bold text-pink-900">{formatCurrency(rentTotalCost)}</p>
           <p className="text-xs text-pink-600 mt-1">Over 30 years</p>
         </motion.div>
         
         <motion.div 
           whileHover={{ scale: 1.02 }}
           className="bg-green-50 p-4 rounded-lg"
         >
           <h4 className="text-sm font-medium text-green-700">Breakeven Point</h4>
           <p className="text-xl font-bold text-green-900">
             {breakevenYear !== null ? `Year ${breakevenYear}` : 'None within 30 years'}
           </p>
           <p className="text-xs text-green-600 mt-1">When buying becomes better</p>
         </motion.div>
       </div>
       
       <div className="mt-6 p-4 bg-gray-50 rounded-lg">
         <h3 className="text-md font-semibold text-gray-700 mb-2">Analysis</h3>
         <p className="text-sm text-gray-600">
         {breakevenYear !== null 
              ? `Based on your inputs, buying becomes financially advantageous after ${breakevenYear} years compared to renting. ${breakevenYear <= 10 ? 'This suggests buying may be a good long-term decision if you plan to stay for several years.' : 'This is a relatively long period, so renting might be more flexible if you don\'t plan to stay long-term.'}`
              : 'Based on your inputs, renting appears to be more financially advantageous over the entire 30-year period. This could be due to high property prices, interest rates, or strong potential investment returns.'}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Remember that this analysis is purely financial and doesn't account for non-financial factors like stability, freedom to modify your home, or personal preferences.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BuyVsRentCalculator;