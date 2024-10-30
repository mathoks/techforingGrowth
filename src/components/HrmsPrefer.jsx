"use client"
import React from 'react';
import h from '../style/hrmsPrefer.module.css';
import Image from 'next/legacy/image';

const HrmsPrefer = () => {
  const [activeTab, setActiveTab] = React.useState(0)
  const data = [
    {
      title: 'Efficiency',
      subTitle: 'Efficient HR Processes',
      details: 'Simplify and automate various HR processes, saving time and reducing administrative burdens. You can streamline tasks such as employee onboarding, leave management, performance reviews, and payroll processing, leading to increased efficiency and productivity.',
      imgSre: '/featureHome.webp',
      img: "/Home/image_01.webp",
      alt: 'feature home'
    },
    {
      title: 'Scalability',
      subTitle: 'Scalability and Flexibility',
      details: 'TechForing Human is designed to scale and adapt to the evolving needs of growing organizations. You can easily add new employees, departments, or locations without system constraints, ensuring the agility and responsiveness of TechForing Human to your changing requirements.',
      imgSre: '/featureHome2.webp',
      img: "/Home/image_02.webp",
      alt: 'feature home'
    },
    {
      title: 'Cost Savings',
      subTitle: 'Cost Savings',
      details: 'Implementing TechForing Growth can lead to significant cost savings for clients. Achieve cost effectiveness by streamlining HR processes, eliminating manual paperwork, reducing errors, and optimizing resource allocation; so that you can allocate the HR budget more effectively.',
      imgSre: '/featureHome3.webp',
      img: "/Home/image_03.webp",
      alt: 'feature home'
    },
    {
      title: 'Employee Experience',
      subTitle: 'Enhanced Employee Experience',
      details: 'Empower employees with self-service capabilities and intuitive interfaces, improving engagement and satisfaction. Employees can easily access and update their information, view pay stubs, request time off, and engage in collaborative activities, fostering a positive and engaging work environment.',
      imgSre: '/featureHome4.webp',
      img: "/Home/image_04.webp",
      alt: 'feature home'
    }
  ]

  const singleData = data.filter(((d, index) => index === activeTab))

  return (
    <>
      <div className='mt-24 lg:block hidden'>
        <div className="custom-container">
          <h1 className={h.title}>Why should you prefer <span>TechFroing Growth</span> Over Others?</h1>
          <div className='flex gap-6 mt-12'>
            <div className='p-6 rounded flex flex-col gap-6 items-center w-[268px] relative' style={{
              boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.25)'
            }}>
              {
                data.map((item, index) => {
                  return (
                    <h3 key={index} className={`${h.subTitle} ${activeTab === index ? h.active : ''}`}
                      onClick={() => setActiveTab(index)}>{item.title}</h3>
                  )
                }
                )
              }
              <div className={h.horizontalLine}></div>
            </div>
            <div className={h.content}>
              <div className='flex flex-col gap-6 ml-12'>
                <h4 className={h.c_subTitle}>{data[activeTab]?.subTitle}</h4>
                <p className={h.c_description}>{data[activeTab]?.details}</p>
              </div>
              <div className={h.c_imgArea}>
                <img src={data[activeTab]?.imgSre} alt={data[activeTab]?.alt} className='w-full object-cover' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* responsive */}
      <div className='lg:hidden block px-4 py-10'>
        <h2 className='roboto text-[#333] font-bold text-[18px] leading-[22px] text-center'>Why should you prefer <span className='text-green'>TechFroing Growth</span> Over Others?</h2>
        <div className='mb-8 mt-8'>
          <ul className='grid grid-cols-2 gap-5'>
            {
              data.map((item, index) => (
                <li key={index} className={`${activeTab === index ? "dataLists actives" : "dataLists"} roboto`} onClick={() => setActiveTab(index)}>{item.title}</li>
              ))
            }
          </ul>
        </div>

        <div className='border-2 border-solid border-[#5BBC2F] rounded-[20px] px-4 py-8 bg-[#FAFAFA]'>
          {
            singleData.map((contentItem, index) => (
              <div key={index} className=''>
                <h3 className='roboto text-green text-[20px] font-medium mb-5'>{contentItem.subTitle}</h3>
                <img src={contentItem.img} alt={contentItem.alt} className='w-full' />
                <p className='roboto text-light text-[14px] leading-6 opacity-90 text-[#333] mt-6 '>{contentItem.details}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default HrmsPrefer