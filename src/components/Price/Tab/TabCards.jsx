import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import TabCard from './TabCard';
import ChevronUpOutline from '../../../../public/ChevronUpOutline.svg';
import ChevronUpOutlinBlue from '../../../../public/ChevronUpOutlinBlue.svg';

const TabCards = ({ packages, activePlan }) => {
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const data = packages[0]?.product_packages;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollContainerStyle = {
    display: 'flex',
    overflowX: 'scroll',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    WebkitOverflowScrolling: 'touch',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  };

  const handlePrevious = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(data.length - 4, currentIndex + 1));
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: index * scrollContainerRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current && isMobile) {
      const scrollPosition = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.offsetWidth;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer && isMobile) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [isMobile]);

  const visibleCards = isMobile
    ? data
    : data.slice(currentIndex, currentIndex + 4);
    console.log("data from tabcard",data)

  return (
    <div className='main_container mx-auto px-4 md:px-0'>
      <div className='relative'>
        {data && data.length > (isMobile ? 1 : 4) ? (
          <>
            <div 
              ref={scrollContainerRef}
              className="scrollable-container flex md:flex-row md:justify-start items-center gap-2 md:gap-3 py-4 px-0 md:px-1"
              style={{
                ...scrollContainerStyle,
                scrollSnapType: isMobile ? 'x mandatory' : 'none',
              }}
            >
              {visibleCards.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`w-full md:w-[calc(25%-9px)] flex-shrink-0 flex justify-center ${index === 0 ? 'md:ml-0' : ''} ${index === visibleCards.length - 1 ? 'md:mr-0' : ''}`}
                  style={{ scrollSnapAlign: isMobile ? 'start' : 'none' }}
                >
                  <TabCard item={item} activePlan={activePlan} />
                </div>
              ))}
            </div>

            {isMobile ? (
              <div className="flex justify-center mt-4">
                {data.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-2 rounded-full mx-1 ${
                      index === activeIndex ? 'bg-[#5BBC2E]' : 'bg-gray-300'
                    }`}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </div>
            ) : (
              <>
                <div
                  className='hidden md:flex items-center justify-center w-[200px] -rotate-90 absolute -left-[132px] top-[350px] gap-[10px] transform -translate-y-1/2 disabled:opacity-50 cursor-pointer'
                  style={{
                    borderRadius: '12px 12px 0px 0px',
                    background: '#FFF9E3',
                    padding: '8px',
                  }}
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                >
                  <Image src={ChevronUpOutline} width={16} alt="Previous" />
                  <span className='text-[#DB811A] text-sm font-medium'>
                    {data[0]?.package}
                  </span>
                  <Image src={ChevronUpOutline} width={16} alt="Previous" />
                </div>

                <div
                  className='hidden md:flex items-center justify-center transform w-[200px] rotate-90 absolute -right-[130px] top-[350px] gap-[10px] -translate-y-1/2 disabled:opacity-50 cursor-pointer'
                  style={{
                    borderRadius: '12px 12px 0px 0px',
                    background: '#E4EDFC',
                    padding: '8px',
                  }}
                  onClick={handleNext}
                  disabled={currentIndex >= data.length - 4}
                >
                  <Image src={ChevronUpOutlinBlue} width={16} alt="Next" />
                  <span className='text-[#0F93B1] text-sm font-medium'>
                    {data[data.length-1]?.package}
                  </span>
                  <Image src={ChevronUpOutlinBlue} width={16} alt="Next" />
                </div>
              </>
            )}
          </>
        ) : (
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-4">
            {data?.map((item) => (
              <div key={item.id} className="w-full md:w-[calc(25%-12px)] flex justify-center">
                <TabCard item={item} activePlan={activePlan} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabCards;