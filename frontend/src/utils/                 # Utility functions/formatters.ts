/**
 * Format a number as Indian currency (INR)
 * @param amount - The amount to format
 * @returns Formatted currency string
 */
export const formatCurrency = (amount: number): string => {
    // Handle invalid inputs
    if (amount === null || amount === undefined || isNaN(amount)) {
      return '₹0';
    }
  
    // Indian number formatting with commas
    const formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  
    return formatter.format(amount);
  };
  
  /**
   * Format a number as a percentage
   * @param value - The value to format as percentage
   * @param decimals - Number of decimal places (default: 2)
   * @returns Formatted percentage string
   */
  export const formatPercentage = (value: number, decimals = 2): string => {
    if (value === null || value === undefined || isNaN(value)) {
      return '0%';
    }
  
    return `${value.toFixed(decimals)}%`;
  };
  
  /**
   * Format a date in Indian format (DD/MM/YYYY)
   * @param date - Date to format
   * @returns Formatted date string
   */
  export const formatDate = (date: Date | string): string => {
    if (!date) return '';
    
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    
    return new Intl.DateTimeFormat('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(dateObj);
  };
  
  /**
   * Format a number with Indian number system (lakhs, crores)
   * @param num - Number to format
   * @returns Formatted number string
   */
  export const formatIndianNumber = (num: number): string => {
    if (num === null || num === undefined || isNaN(num)) {
      return '0';
    }
  
    const absNum = Math.abs(num);
    
    if (absNum >= 10000000) {
      return `${(num / 10000000).toFixed(2)} Cr`;
    } else if (absNum >= 100000) {
      return `${(num / 100000).toFixed(2)} L`;
    } else if (absNum >= 1000) {
      return `${(num / 1000).toFixed(2)} K`;
    } else {
      return num.toString();
    }
  };
  
  /**
   * Format a number with commas as per Indian number system
   * @param num - Number to format
   * @returns Formatted number string with commas
   */
  export const formatNumberWithCommas = (num: number): string => {
    if (num === null || num === undefined || isNaN(num)) {
      return '0';
    }
  
    return num.toLocaleString('en-IN');
  };