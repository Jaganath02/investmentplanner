/**
 * Calculates income tax under the old tax regime for FY 2023-24
 * @param income - Annual income in INR
 * @param deductions - Total deductions (80C, 80D, etc.) in INR
 * @returns Tax amount in INR
 */
export const calculateTaxOldRegime = (income: number, deductions: number): number => {
  // Calculate taxable income after deductions
  const taxableIncome = Math.max(0, income - deductions);
  let tax = 0;

  // Tax slabs for old regime FY 2023-24
  if (taxableIncome <= 250000) {
    tax = 0;
  } else if (taxableIncome <= 500000) {
    tax = (taxableIncome - 250000) * 0.05;
  } else if (taxableIncome <= 1000000) {
    tax = 12500 + (taxableIncome - 500000) * 0.2;
  } else {
    tax = 112500 + (taxableIncome - 1000000) * 0.3;
  }

  // Rebate under section 87A (for income up to 5 lakhs)
  if (taxableIncome <= 500000) {
    tax = Math.max(0, tax - 12500);
  }

  return tax;
};

/**
 * Calculates income tax under the new tax regime for FY 2023-24
 * @param income - Annual income in INR
 * @returns Tax amount in INR
 */
export const calculateTaxNewRegime = (income: number): number => {
  // Standard deduction of 50,000 is available in new regime from FY 2023-24
  const standardDeduction = 50000;
  const taxableIncome = Math.max(0, income - standardDeduction);
  let tax = 0;

  // Tax slabs for new regime FY 2023-24
  if (taxableIncome <= 300000) {
    tax = 0;
  } else if (taxableIncome <= 600000) {
    tax = (taxableIncome - 300000) * 0.05;
  } else if (taxableIncome <= 900000) {
    tax = 15000 + (taxableIncome - 600000) * 0.1;
  } else if (taxableIncome <= 1200000) {
    tax = 45000 + (taxableIncome - 900000) * 0.15;
  } else if (taxableIncome <= 1500000) {
    tax = 90000 + (taxableIncome - 1200000) * 0.2;
  } else {
    tax = 150000 + (taxableIncome - 1500000) * 0.3;
  }

  // Rebate under section 87A (for income up to 7 lakhs in new regime)
  if (taxableIncome <= 700000) {
    tax = Math.max(0, tax - 25000);
  }

  return tax;
};

/**
 * Calculates surcharge based on income level
 * @param income - Annual income in INR
 * @param taxAmount - Basic tax amount in INR
 * @returns Surcharge amount in INR
 */
export const calculateSurcharge = (income: number, taxAmount: number): number => {
  let surchargeRate = 0;

  if (income > 50000000) {
    surchargeRate = 0.37; // 37% for income > 5 crore
  } else if (income > 20000000) {
    surchargeRate = 0.25; // 25% for income > 2 crore
  } else if (income > 10000000) {
    surchargeRate = 0.15; // 15% for income > 1 crore
  } else if (income > 5000000) {
    surchargeRate = 0.1; // 10% for income > 50 lakhs
  }

  return taxAmount * surchargeRate;
};

/**
 * Calculates health and education cess
 * @param taxAmount - Basic tax amount + surcharge in INR
 * @returns Cess amount in INR
 */
export const calculateCess = (taxAmount: number): number => {
  return taxAmount * 0.04; // 4% health and education cess
};

/**
 * Calculates total tax liability including surcharge and cess
 * @param income - Annual income in INR
 * @param taxAmount - Basic tax amount in INR
 * @returns Total tax liability in INR
 */
export const calculateTotalTax = (income: number, taxAmount: number): number => {
  const surcharge = calculateSurcharge(income, taxAmount);
  const cess = calculateCess(taxAmount + surcharge);
  return taxAmount + surcharge + cess;
};