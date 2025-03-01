import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import TaxCalculator from '../components/calculators/TaxCalculator';
import AdBanner from '../components/common/AdBanner';

const TaxCalculatorPage: React.FC = () => {
  const pageTitle = "Indian Income Tax Calculator 2023-24 | Old vs New Tax Regime Comparison";
  const pageDescription = "Calculate and compare your income tax under both old and new tax regimes for FY 2023-24. Our tax calculator helps Indian taxpayers make informed decisions and save money.";
  const keywords = "income tax calculator india, new tax regime, old tax regime, income tax calculator 2023-24, tax planning india, section 80c deductions, income tax comparison";
  
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://investwiseindia.com/tax-calculator" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="https://investwiseindia.com/images/tax-calculator-preview.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://investwiseindia.com/tax-calculator" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content="https://investwiseindia.com/images/tax-calculator-preview.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://investwiseindia.com/tax-calculator" />
      </Head>
      
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Income Tax Calculator 2023-24</h1>
            <p className="text-lg text-gray-600">
              Compare old and new tax regimes to find which one saves you more money. Calculate your exact tax liability for FY 2023-24.
            </p>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a 
                href="#how-it-works" 
                className="text-indigo-600 font-medium hover:text-indigo-500 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                How it works
              </a>
              <a 
                href="#tax-slabs" 
                className="text-indigo-600 font-medium hover:text-indigo-500 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Tax Slabs
              </a>
              <a 
                href="#deductions" 
                className="text-indigo-600 font-medium hover:text-indigo-500 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Deductions
              </a>
            </div>
          </div>
          
          <TaxCalculator />
          
          {/* AdSense Banner */}
          <div className="my-8">
            <AdBanner 
              slot="1234567890" 
              format="auto" 
              responsive={true}
              className="min-h-[250px]"
            />
          </div>
          
          <div className="mt-12 space-y-10">
            <section id="how-it-works">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How Our Tax Calculator Works</h2>
              <div className="prose prose-indigo max-w-none">
                <p>
                  Our Income Tax Calculator for FY 2023-24 (AY 2024-25) helps you compare taxes under both the old and new tax regimes in India. Simply enter your income and deductions to get an instant calculation of your tax liability under both systems.
                </p>
                <p>
                  The calculator considers all the latest updates from Budget 2023, including the revised tax slabs under the new tax regime and standard deduction for salaried individuals.
                </p>
                <h3>Key Features:</h3>
                <ul>
                  <li>Side-by-side comparison of old and new tax regimes</li>
                  <li>Detailed breakdown of tax calculations</li>
                  <li>Support for all major deductions under Section 80C, 80D, and more</li>
                  <li>Clear recommendation on which tax regime is better for you</li>
                  <li>Updated for FY 2023-24 as per the latest budget</li>
                </ul>
              </div>
            </section>
            
            {/* Additional sections omitted for brevity */}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default TaxCalculatorPage;