export interface TaxProfile {
    id?: number;
    financialYear: string;
    regime: TaxRegime;
    grossIncome: number;
    deductions80C?: number;
    deductions80D?: number;
    hraExemption?: number;
    otherDeductions?: number;
    taxPaid?: number;
  }
  
  export enum TaxRegime {
    OLD = 'OLD',
    NEW = 'NEW'
  }
  
  export interface TaxCalculationResult {
    taxableIncome: number;
    basicTax: number;
    surcharge: number;
    cess: number;
    totalTax: number;
    effectiveTaxRate: number;
  }
  
  export interface TaxBreakdownProps {
    income: number;
    deductions: number;
    taxAmount: number;
    regime: 'old' | 'new';
  }
  
  export interface TaxSlab {
    min: number;
    max: number | null;
    rate: number;
    regime: TaxRegime;
  }
  
  // Tax slabs for FY 2023-24
  export const OLD_REGIME_SLABS: TaxSlab[] = [
    { min: 0, max: 250000, rate: 0, regime: TaxRegime.OLD },
    { min: 250001, max: 500000, rate: 0.05, regime: TaxRegime.OLD },
    { min: 500001, max: 1000000, rate: 0.2, regime: TaxRegime.OLD },
    { min: 1000001, max: null, rate: 0.3, regime: TaxRegime.OLD }
  ];
  
  export const NEW_REGIME_SLABS: TaxSlab[] = [
    { min: 0, max: 300000, rate: 0, regime: TaxRegime.NEW },
    { min: 300001, max: 600000, rate: 0.05, regime: TaxRegime.NEW },
    { min: 600001, max: 900000, rate: 0.1, regime: TaxRegime.NEW },
    { min: 900001, max: 1200000, rate: 0.15, regime: TaxRegime.NEW },
    { min: 1200001, max: 1500000, rate: 0.2, regime: TaxRegime.NEW },
    { min: 1500001, max: null, rate: 0.3, regime: TaxRegime.NEW }
  ];