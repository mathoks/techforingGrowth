"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Link from 'next/link';
import { customEBookSliderOption } from './customSliderRules';
import { Button } from '../SharedComponents';

const EbookSection = ({ renderedData, bg, variant = 'primary' }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const splideRef = useRef(null);

  useEffect(() => {
    const splideInstance = splideRef.current.splide;
    if (splideInstance) {
      splideInstance.on('moved', () => {
        setCurrentItemIndex(splideInstance.index);
      });
    }
  }, [splideRef.current]);


  const handleNext = () => {
    if (splideRef.current) {
      const splideInstance = splideRef.current.splide;
      const totalSlides = splideInstance.length;

      if (splideInstance.index === totalSlides - 1) {
        splideInstance.go(0);
      } else {
        splideInstance.go('+1');
      }
    }
  };

  const handlePrevious = () => {
    if (splideRef.current) {
      const splideInstance = splideRef.current.splide;
      const totalSlides = splideInstance.length;

      if (splideInstance.index === 0) {
        splideInstance.go(totalSlides - 1);
      } else {
        splideInstance.go('-1');
      }
    }
  };
  const arrowVariant = {
    primary: 'hover:border-sky text-sky',
    secondary: 'hover:border-secondary text-secondary',
    red: 'hover:border-redThree text-redThree',
    yellow: 'hover:border-yellowTwo text-yellowTwo',
    purple: 'hover:border-purpleTwo text-purpleTwo',
    green: 'hover:border-green text-green',
    yellowThree: 'hover:border-yellowThree text-yellowThree',
    secondaryTwo: 'hover:border-secondaryTwo text-secondaryTwo',
    yellowTwo: 'hover:border-yellowTwo text-yellowTwo',
    skyThree: 'hover:border-skyThree text-skyThree',
    skyFour: 'hover:border-skyFour text-skyFour',
  }
  const btnVariant = {
    primary: 'bg-sky border-sky text-strongWhite hover:text-sky hover:bg-transparent',
    secondary: 'bg-secondary border-secondary text-strongWhite hover:text-secondary hover:bg-transparent',
    red: 'bg-redThree border-redThree text-strongWhite hover:text-redThree hover:bg-transparent',
    yellow: 'bg-yellowTwo border-yellowTwo text-strongWhite hover:text-yellowTwo hover:bg-transparent',
    purple: 'bg-purpleTwo border-purpleTwo text-strongWhite hover:text-purpleTwo hover:bg-transparent',
    green: 'bg-green border-green text-strongWhite hover:text-green hover:bg-transparent',
    yellowThree: 'bg-yellowThree border-yellowThree text-strongWhite hover:text-yellowThree hover:bg-transparent',
    secondaryTwo: 'bg-secondaryTwo border-secondaryTwo text-strongWhite hover:text-secondaryTwo hover:bg-transparent',
    yellowTwo: 'bg-yellowTwo border-yellowTwo text-strongWhite hover:text-yellowTwo hover:bg-transparent',
    skyThree: 'bg-skyThree border-skyThree text-strongWhite hover:text-skyThree hover:bg-transparent',
    skyFour: 'bg-skyFour border-skyFour text-strongWhite hover:text-skyFour hover:bg-transparent',
  }
  const textColor = {
    primary: 'text-sky',
    secondary: 'text-secondary',
    red: 'text-redThree',
    yellow: 'text-yellowTwo',
    purple: 'text-purpleTwo',
    green: 'text-green',
    yellowThree: 'text-yellowThree',
    secondaryTwo: 'text-secondaryTwo',
    yellowTwo: 'text-yellowTwo',
    skyThree: 'text-skyThree',
    skyFour: 'text-skyFour',
  }
  const boxShadow = {
    primary: 'shadow-skyDrop',
    secondary: 'shadow-secondaryDrop',
    red: 'shadow-redDrop',
    yellow: 'shadow-yellowDrop',
    purple: 'shadow-purpleDrop',
    green: 'shadow-greenEbookDrop',
    yellowThree: 'shadow-yellowThreeDrop',
    secondaryTwo: 'shadow-secondaryTwoDrop',
    yellowTwo: 'shadow-yellowTwoDrop',
    skyThree: 'shadow-skyThreeDrop',
    skyFour: 'shadow-skyDrop',
  }
  return (
    <section className='w-full lg:w-[1000px] h-fit mx-auto flex flex-col gap-4 lg:gap-[39px] px-2 lg:px-0'>
      <Splide options={customEBookSliderOption} ref={splideRef}>
        {renderedData?.map((data, index) => (
          <SplideSlide key={index}>
            <div className={`w-full h-full lg:h-[250px] flex flex-col lg:flex-row items-center gap-10 px-3 lg:px-10 py-6 lg:py-0 rounded-lg ${index !== currentItemIndex && 'hidden'}`} style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}>
              <div className='w-full lg:w-3/12 h-full flex items-center justify-center'>
                <Image src={data.img} alt={data?.alt} width={148} height={201} />
              </div>
              <div className='w-full lg:w-9/12 h-full flex flex-col items-start justify-center'>
                <div className='w-fit lg:w-[500px] flex flex-col items-center justify-center gap-6'>
                  <h3 className='text-md lg:text-2xl text-center text-[#1C1C1C]'>{data?.text}</h3>
                  <Button asChild variant="contained" color={variant} size='medium' className={`${btnVariant[variant]} active:scale-75`}>
                    <Link href={data?.btnLink}>
                      {data?.btnText}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
      <div className='ebookController flex items-center justify-center gap-5'>
        <span className={`leftEBookController cursor-pointer  border border-transparent hover:rounded-full ${arrowVariant[variant]} p-1`} onClick={handlePrevious}>
          <HiChevronLeft className='w-8 h-8' />
        </span>
        <h4 className={`text-lg font-bold ${textColor[variant]}`}>{currentItemIndex + 1}/{renderedData?.length}</h4>
        <span className={`rightEBookController cursor-pointer  border border-transparent hover:rounded-full ${arrowVariant[variant]} p-1`} onClick={handleNext}>
          <HiChevronRight className='w-8 h-8' />
        </span>
      </div>
    </section>
  );
};

export default EbookSection;