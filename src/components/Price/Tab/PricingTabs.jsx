import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import PricingTabsPanal from './PricingTabsPanal';

const PricingTabs = ({
  scrollToDiv,
  productData,
  setSingleProduct,
  dynamicURL,
  tabId,
  activePlan,
  setActivePlan,
  selectedCurrency,
  setSelectedCurrency,
  availableProduct,
  currentIndex,
  setCurrentIndex
}) => {

  // const filteredData = productData.filter(item => item.is_published);
  
  

  useEffect(() => {
    if (productData.length > 0) {
      setCurrentIndex(0);
    }
  }, [productData]);

  if (!productData || productData.length === 0) {
    return <div>No product data available</div>;
  }

  // Filter the product data to get only the published items, then get the item at the current index
  const currentTab = productData.filter(item => item.is_published)[currentIndex];
  
  console.log('product data', productData);
  console.log('current index', currentIndex)
  console.log('current tab', currentTab)


  console.log('product id', tabId);
  console.log('dynamic url',dynamicURL)
  return (
    <div className="w-full max-w-screen-xl mx-auto px-2 sm:px-4 md:px-6">
      <Box sx={{ width: '100%', typography: 'body1', marginTop: '32px sm:marginTop-34px' }}>
        {/* Scrollable Tab List with improved responsiveness */}
        <div className="flex justify-start items-center overflow-x-auto">
          {productData.filter((item => item.is_published)).map((tab, index) => (
            <div
              key={index}
              className={`cursor-pointer px-3 sm:px-4 lg:px-6 py-2 sm:py-3 flex-shrink-0 ${index === currentIndex ? 'border-b-2 border-primary' : ''
                }`}
              onClick={() => {
                // console.log('clicked')
                // console.log('item from data',tab);
                setCurrentIndex(index);
              }}
              style={{
                border: '0.5px solid #0F93B1',
                borderBottom: 'none',
                borderRadius: '20px 20px 0px 0px',
                background: index === currentIndex ? '#E4EDFC' : 'transparent',
                minWidth: 'fit-content',
                marginRight: index < productData.length - 1 ? '-1px' : '0', // Add this lin
              }}
            >
              {tab.images?.length ? (
                <img
                  src={tab.images[0]}
                  alt={`Tab ${index}`}
                  className="w-[60px] sm:w-[80px] lg:w-[112px] h-[18px] sm:h-[24px] lg:h-[32px] object-contain"
                />
              ) : (
                <div className="w-[60px] sm:w-[80px] lg:w-[112px] h-[18px] sm:h-[24px] lg:h-[32px] bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>

        <div className='border-t-[0.5px] border-[#0F93B1]'>
          {
            availableProduct.length > 0 && (
              <PricingTabsPanal
                activePlan={activePlan}
                setActivePlan={setActivePlan}
                selectedCurrency={selectedCurrency}
                setSelectedCurrency={setSelectedCurrency}
                tabData={currentTab}
                setSingleProduct={setSingleProduct}
                dynamicURL={dynamicURL}
                tabId={tabId}
                cardData={[]}
              />
            )
          }
        </div>
      </Box>
      <div className="mt-6 sm:mt-8 flex items-center justify-center">
        <button
          onClick={scrollToDiv}
          className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base font-bold flex justify-center items-center gap-2"
          style={{
            borderRadius: '8px',
            borderBottom: '1.75px solid #5BBC2E',
          }}
        >
          Compare Full Plan
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className="sm:w-5 sm:h-5">
            <path d="M16 17L12 21M12 21L8 17M12 21V3" stroke="#5BBC2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PricingTabs;