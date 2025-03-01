export interface Investment {
    id: number;
    name: string;
    description?: string;
    investedAmount: number;
    currentValue: number;
    purchaseDate: string;
    lastUpdated: string;
    notes?: string;
    categoryId: number;
    category?: {
      id: number;
      name: string;
      color?: string;
    };
    transactions?: Transaction[];
  }
  
  export interface Transaction {
    id: number;
    investmentId: number;
    type: TransactionType;
    amount: number;
    units?: number;
    price?: number;
    date: string;
    notes?: string;
  }
  
  export enum TransactionType {
    BUY = 'BUY',
    SELL = 'SELL',
    DIVIDEND = 'DIVIDEND',
    INTEREST = 'INTEREST',
    FEE = 'FEE',
    OTHER = 'OTHER'
  }
  
  export interface Category {
    id: number;
    name: string;
    description?: string;
    color?: string;
    icon?: string;
  }
  
  export interface InvestmentSummary {
    totalInvested: number;
    totalCurrentValue: number;
    totalGain: number;
    percentageGain: number;
  }
  
  export interface PortfolioByCategory {
    [key: string]: {
      categoryId: number;
      categoryName: string;
      investedAmount: number;
      currentValue: number;
      gain: number;
      percentageGain: number;
      investments: Investment[];
    };
  }