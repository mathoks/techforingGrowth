import React, { useEffect, useState } from 'react';
import CMS from '../../../public/TechForing-CMS.svg';
import Image from 'next/image';
import SingleTable from './SingleTable';
import CombineTable from './CombineTable';

const PriceTable = React.forwardRef(({ dynamicURL, tabId, activePlan, selectedCurrency }, ref) => {
  // console.log('Price Table Data:', tabId);
  // console.log('Price Table Dynamic URL:', dynamicURL);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [price, setPrice] = useState(''); // State to hold the price

  // console.log('Active Plan from Table:', activePlan);
  // console.log('Currency from Table:', selectedCurrency);
  let currencyIcon = '';
  if (selectedCurrency === 'USD') {
    currencyIcon = '$';
  } else if (selectedCurrency === 'EUR') {
    currencyIcon = '€';
  } else if (selectedCurrency === 'BDT') {
    currencyIcon = '৳';
  } else {
    currencyIcon = 'N/A';
  }
  let planSuffix = '';
  if (activePlan === 'Monthly') {
    planSuffix = '/mo';
  } else if (activePlan === 'Quarterly') {
    planSuffix = '/3mo';
  } else if (activePlan === 'Yearly') {
    planSuffix = '/yr';
  } else {
    planSuffix = '';
  }
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      if (!dynamicURL || !tabId) return;

      const endPoint = `${baseUrl}/blog/products-pricing/products-packages-with-features-update?${dynamicURL}=${tabId}`;
      // console.log('API Endpoint:', endPoint);

      try {
        const response = await fetch(endPoint);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const result = await response.json();
        console.log('Fetched Data:', result);
        setData(result); // Update data state
        updatePrice(result, activePlan, selectedCurrency); // Update the price based on fetched data
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message); // Set error state
      } finally {
        setLoading(false); // Set loading state to false
      }
    };

    fetchData();
  }, [dynamicURL, tabId, activePlan, selectedCurrency]);

  // Function to update the price based on activePlan and selectedCurrency
  const updatePrice = (data, activePlan, selectedCurrency) => {
    if (!data || !activePlan || !selectedCurrency) return;

    const activePackage = data.product_packages?.find(
      (pkg) => pkg.package.toLowerCase() === activePlan.toLowerCase()
    );

    if (activePackage) {
      const currencyPrice = activePackage.prices?.find(
        (price) => price.currency.toLowerCase() === selectedCurrency.toLowerCase()
      );
      setPrice(currencyPrice ? currencyPrice.amount : 'N/A'); // Set price or display N/A
    }
  };

  // console.log(' price from table ', price);

  // if (loading) return <p className='text-center'>Loading...</p>;
  // if (error) return <p className=''>Error: {error}</p>;

  // console.log('Data from PriceTable:', data);

  const styleLastWord = (text) => {
    if (!text) return '';
    const words = text.split(' ');
    const lastWord = words.pop();
    return (
      <>
        {words.join(' ')} <span className='text-primary capitalize'>{lastWord}</span>
      </>
    );
  };

  return (
    <div className='main_container mb-4 h-screen'>
      <div ref={ref} className='text-center md:pt-16 md:pb-9'>
        <h2 className='text-secondary-1 text-2xl md:text-4xl font-bold'>
          Compare All Plans With <span className='text-primary'>Full of Features</span>
        </h2>
      </div>

      <div className='w-full border-[#0F93B1] border-[0.5px] flex bg-[#EEF4FD] sticky top-[75px] z-30'>
        <div className='w-1/3 flex flex-col text-center items-center justify-center border-r border-[#0F93B1] p-6'>
          <h2 className='text-[#0F93B1] text-lg md:text-[28px] font-medium'>
            {styleLastWord(data?.name)}
          </h2>
          <h3 className='text-[#0F93B1] text-sm md:text-lg font-medium'>Includes the Following</h3>
        </div>

        <div className='w-4/6 flex'>
          {data?.product_packages?.map((item, index) => (
            <div
              key={index}
              className={`flex-1 p-1 md:p-4 text-center flex flex-col items-center ${index !== data.product_packages.length - 1 ? 'border-r border-r-[#0F93B1]' : ''
                }`}
            >
              <h3 className='text-xs md:text-lg font-medium text-[#0F93B1]'>{item.package}</h3>
              <p className='text-[10px] md:text-base font-medium text-[#0F93B1]'>
                {currencyIcon}{parseInt(
                  item?.payment_methods?.find((p) => p.payment_method === activePlan)
                    ?.payment_method_details.find(detail => detail.detail === selectedCurrency)?.price
                ) || 'N/A'}{planSuffix}
              </p>

              <button className="mt-4 bg-primary md:text-sm text-[8px] hover:bg-white hover:text-primary hover:border hover:border-primary text-white py-1 md:py-2 px-2 md:px-4 rounded hover:bg-primary-dark">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
      {
        dynamicURL === 'combine_product'
          ? data?.clone_products?.map((item, index) => <CombineTable allData={data} key={index} singlelData={item} />)
          : <SingleTable data={data}/>
      }
    </div>
  );
});

export default PriceTable;