"use client";
import React from 'react';
import h from '../../style/pricePurchase.module.css';
import { useQuery } from '@tanstack/react-query';
import { useGetPricePurchase } from '@/utils/price';

const EveryPurchase = ({ dynamicURL, tabId }) => {
  const [activeTab, setActiveTab] = React.useState(0);


  const { data } = useGetPricePurchase(dynamicURL, tabId);



  const singleData = data?.filter((d, index) => index === activeTab) || [];

  if (!data || data.length === 0) {
    return <div className='text-center mt-4'>No data available.</div>;
  }

  return (
    <>
      <div className="mt-24 lg:block hidden bg-[#EEF4FD] py-16">
        <div className="custom-container">
          <h1 className={h.title}>
            With Every Purchase, <span>You Will Get!</span>
          </h1>
          <div className="flex gap-6 mt-12">
            <div
              className="p-6 rounded flex flex-col gap-6 items-center justify-center w-[268px] relative bg-white"
              style={{
                boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.25)',
              }}
            >
              {data?.map((item, index) => (
                <h3
                  key={index}
                  className={`${h.subTitle} ${activeTab === index ? h.active : ''}`}
                  onClick={() => setActiveTab(index)}
                  style={{ color: activeTab === index ? '#0F93B1' : 'inherit' }}
                >
                  {item.title}
                </h3>
              ))}
              <div className={h.horizontalLine}></div>
            </div>
            <div className={`${h.content} flex justify-between `} >
              <div className="flex flex-col gap-6 ml-12 ">
                <div dangerouslySetInnerHTML={{ __html: data[activeTab]?.html_content }}></div>
              </div>
              {/* Move the image here to ensure it's at the bottom */}
              <div className={`relative min-w-[317px] h-[299px]`}
              style={{
                backgroundImage: `url(${data[activeTab]?.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(90deg, #F9F9F9 0%, rgba(249,249,249,0) 50%)'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* responsive */}
      <div className="lg:hidden block px-4 py-10">
        <h2 className="roboto text-[#333] font-bold text-[18px] leading-[22px] text-center">
          With Every Purchase, <span className="text-green">You Will Get!</span>
        </h2>
        <div className="mb-8 mt-8">
          <ul className="grid grid-cols-2 gap-5">
            {data?.map((item, index) => (
              <li
                key={index}
                className={`${
                  activeTab === index
                    ? "dataLists actives bg-primary !text-white"
                    : "dataLists"
                } roboto`}
                style={{
                  color: activeTab === index ? 'white' : 'inherit'
                }}
                onClick={() => setActiveTab(index)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-2 border-solid border-[#5BBC2F] rounded-[20px] px-4 py-8 bg-[#FAFAFA]">
          {singleData.map((contentItem, index) => (
            <div key={index}>
              <h3 className="roboto text-green text-[20px] font-medium mb-5">{contentItem.subTitle}</h3>
              <img src={contentItem.image} alt={contentItem.alt} className="w-full rounded-lg" />
              <div
                className="roboto text-light text-[14px] leading-6 opacity-90 text-[#333] mt-6"
                dangerouslySetInnerHTML={{ __html: contentItem.html_content }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EveryPurchase;
