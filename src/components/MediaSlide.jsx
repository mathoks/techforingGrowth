"use client"
import React from 'react'
import m from '../style/hero.module.css';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { BBC, Entrepreneur, Forbes } from './Icon';
import Image from 'next/legacy/image';

const MediaSlide = () => {
  const items = [
    < Forbes />,
    <img src="/cnn.webp" alt="CNN" className='h-[50px]' />,
    <BBC />,
    <img src="/worldEconomicForum.webp" alt="World Economic Forum" className='w-[117px] h-[72px]' />,
    <Entrepreneur />,
    <img src="/Business Insider svg.webp" alt="business insider" className='w-[124px] h-[87px]' />
  ]
  const options = {
    perPage: 6,
    gap: '0px',
    type: 'loop',
    cloneStatus: false,
    updateOnMove: false,
    start: 0,
    perMove: 1,
    autoplay: false,
    drag: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    pagination: false,
    interval: 3000,
    width: '100%',
    breakpoints: {
      640: {
        perPage: 2,
      },
    },
  };
  return (
    <>
      <div className={`${m.mediaSlide}  h-[147px] custom-container lg:block hidden !mt-6`}>
        <div className='flex items-center py-4'>
          <div className={m.mediaTitle}>Media <br />Coverage</div>
          <div className={m.slide}>
            <Splide hasTrack={false} className='contents' options={options}>
              <SplideTrack className='items-center'>
                {
                  items.map((item, index) => {
                    return (
                      <SplideSlide key={index} className='flex items-center justify-center'>
                        {item}
                      </SplideSlide>
                    )
                  })
                }
              </SplideTrack>
            </Splide>
          </div>
        </div>
      </div>

      {/* responsive */}
      <div className='lg:hidden block'>
        <h2 className='roboto font-bold text_grad_gradient text-center'>Media Coverage</h2>
        <hr className='border-none grad_gradient w-[35%] h-[3px] mx-auto mt-1 mb-7' />
        <div className='flex_container mb-5'>
          <div className='w-[33.33%]'><img src="/Home/forbes.webp" alt="" className='mx-auto w-[100px]' /></div>
          <div className='w-[33.33%]'><img src="/Home/cnn.webp" alt="" className='mx-auto w-[100px]' /></div>
          <div className='w-[33.33%]'><img src="/Home/BBC.webp" alt="" className='mx-auto w-[100px]' /></div>
        </div>
        <div className='flex_container mb-5'>
          <div className='w-[33.33%]'><img src="/Home/worldEconomicForum.webp" alt="" className='mx-auto w-[100px]' /></div>
          <div className='w-[33.33%]'><img src="/Home/entrepreneur.webp" alt="" className='mx-auto w-[100px]' /></div>
          <div className='w-[33.33%]'><img src="/Home/Business_Insider.webp" alt="" className='mx-auto w-[100px]' /></div>
        </div>
      </div>
    </>
  )
}

export default MediaSlide;