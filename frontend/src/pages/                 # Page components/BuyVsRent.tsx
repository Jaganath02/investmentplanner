import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import BuyVsRentCalculator from '../components/calculators/BuyVsRentCalculator';
import AdBanner from '../components/common/AdBanner';

const BuyVsRentPage: React.FC = () => {
  const pageTitle = "Buy vs Rent Calculator India | Compare Home Buying and Renting";
  const pageDescription = "Use our Buy vs Rent Calculator to make an informed decision about whether to buy or rent a property in India. Compare long-term costs and benefits.";
  const keywords = "buy vs rent calculator india, home buying calculator, rent or buy house india, property investment calculator, real estate investment india";
  
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://investwiseindia.com/buy-vs-rent" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="https://investwiseindia.com/images/buy-vs-rent-preview.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://investwiseindia.com/buy-vs-rent" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content="https://investwiseindia.com/images/buy-vs-rent-preview.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://investwiseindia.com/buy-vs-rent" />
      </Head>
      
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Buy vs Rent Calculator</h1>
            <p className="text-lg text-gray-600">
            // frontend/src/pages/BuyVsRent.tsx (continued)
              Compare the financial implications of buying versus renting property in India. Make an informed decision based on your financial situation.
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
                href="#considerations" 
                className="text-indigo-600 font-medium hover:text-indigo-500 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Key Considerations
              </a>
              <a 
                href="#faq" 
                className="text-indigo-600 font-medium hover:text-indigo-500 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                FAQ
              </a>
            </div>
          </div>
          
          <BuyVsRentCalculator />
          
          {/* AdSense Banner */}
          <div className="my-8">
            <AdBanner 
              slot="2345678901" 
              format="auto" 
              responsive={true}
              className="min-h-[250px]"
            />
          </div>
          
          <div className="mt-12 space-y-10">
            <section id="how-it-works">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How Our Buy vs Rent Calculator Works</h2>
              <div className="prose prose-indigo max-w-none">
                <p>
                  Our calculator performs a comprehensive financial analysis comparing the costs and benefits of buying versus renting a property in India. It takes into account various factors including:
                </p>
                <ul>
                  <li>Property price and expected appreciation</li>
                  <li>Loan terms, interest rates, and down payment</li>
                  <li>Rental costs and expected increases</li>
                  <li>Maintenance costs and property taxes</li>
                  <li>Investment returns on savings (in the rent scenario)</li>
                </ul>
                <p>
                  The calculator provides a year-by-year comparison of your net worth in both scenarios, helping you identify when (or if) buying becomes more financially advantageous than renting.
                </p>
              </div>
            </section>
            
            <section id="considerations">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Considerations for Indian Home Buyers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Financial Factors</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Home loan interest rates (currently 8-9% in India)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Property tax rates (varies by municipality)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Home loan tax benefits under Section 24 and 80C</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Stamp duty and registration charges (4-8% in most states)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Maintenance costs and society charges</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl shadow p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Non-Financial Factors</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Emotional security and stability of owning a home</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Freedom to modify and personalize your space</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Flexibility to relocate (advantage of renting)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Responsibility for repairs and maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Pride of ownership and social status</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section id="faq">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="bg-white rounded-xl shadow divide-y divide-gray-200">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">Is buying always better than renting in India?</h3>
                  <p className="mt-2 text-gray-600">
                    Not necessarily. The decision depends on multiple factors including how long you plan to stay in the property, current interest rates, property appreciation potential, and your personal financial situation. In cities with high property prices like Mumbai, Delhi, or Bangalore, renting may be more economical in the short to medium term.
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">What is a good property appreciation rate to assume in India?</h3>
                  <p className="mt-2 text-gray-600">
                    Property appreciation rates vary significantly by location, but a conservative estimate for most Indian cities would be 5-8% annually. Premium locations in major metros might see higher appreciation, while smaller cities or oversupplied markets might see lower rates.
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">How does the calculator account for tax benefits on home loans?</h3>
                  <p className="mt-2 text-gray-600">
                    The calculator doesn't explicitly factor in tax benefits, which can be significant under Section 24 (interest deduction up to ₹2 lakhs) and Section 80C (principal repayment up to ₹1.5 lakhs). For a more accurate comparison, you should manually adjust your calculations based on your tax bracket.
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">What investment return rate should I use for the rent scenario?</h3>
                  <p className="mt-2 text-gray-600">
                    For a conservative estimate, you might use 7-8%, which is approximately what long-term equity investments in India have returned historically. If you're more risk-averse and would invest in fixed deposits or debt instruments, a rate of 5-6% might be more appropriate.
                  </p>
                </div>
              </div>
            </section>
          </div>
          
          {/* AdSense Banner */}
          <div className="mt-8">
            <AdBanner 
              slot="3456789012" 
              format="auto" 
              responsive={true}
              className="min-h-[250px]"
            />
          </div>
          
          <section className="mt-12 bg-indigo-50 rounded-xl p-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Stay Updated with Real Estate & Investment News</h2>
                <p className="text-gray-600 mb-4">
                  Subscribe to our newsletter to receive the latest updates on property markets, investment strategies, and financial planning tips.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </section>
          </div>
      </Layout>
    </>
  );
};

export default BuyVsRentPage;