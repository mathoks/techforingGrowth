import { cmsBlogData } from '@/dummyData'
import React, { useEffect, useState } from 'react'

const CmsBlog = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [firstCardImageIndex, setFirstCardImageIndex] = useState(1);

  useEffect(() => {
    // Handle first card animation separately
    const firstCardInterval = setInterval(() => {
      setFirstCardImageIndex(prev => (prev % 3) + 1); // Cycle through indices 1, 2, 3
    }, 1000); // Adjusted interval to match transition duration

    // Handle other cards
    const otherCardsIntervals = cmsBlogData.slice(1).map((data) => {
      return setInterval(() => {
        setCurrentImageIndex(prev => ({
          ...prev,
          [data.name]: (prev[data.name] + 1) % data.images.length || 0
        }));
      }, 1000); // Adjusted interval to match transition duration
    });

    return () => {
      clearInterval(firstCardInterval);
      otherCardsIntervals.forEach(clearInterval);
    };
  }, []);

  return (
    <section className='flex flex-col gap-8 text-center pt-[52px] container' >
      <h2 className='text-xl lg:text-4xl text-[#08727c] font-bold'>Organize Your Blogging Like Never Before!</h2>
      <p className='text-[#494949] font-light max-w-[1000px] mx-auto text-center my-6 text-sm lg:text-base px-4'>
        Navigating the labyrinth of online platforms for publishing your blogs can be a daunting task. Without a centralized solution, keeping track of where your content is posted becomes a Herculean challenge. Our Site & Category Management feature is your map through the wilderness of the internet. With intuitive category and sub-category organization, you'll bring structure to your content creation process.
      </p>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 -mt-8'>
        {/* First card with custom animation */}
        <div className='flex flex-col gap-4'>
          <div className='relative lg:mb-12 flex items-center h-[150px] w-[150px] justify-center mx-auto -mb-4'>
            <img
              src="/CMS/anim/anim1-setting.svg"
              alt="setting image"
              className='absolute h-[40px] w-[40px] top-6 left-3 object-contain transition-transform duration-1000 z-20 animate-spin'
            />
            <img
              src={`/CMS/anim/anim1-globe${firstCardImageIndex}.svg`}
              alt="globe image"
              className='absolute object-contain transition-opacity duration-[1000ms] z-20 opacity-0'
              style={{ opacity: firstCardImageIndex ? 1 : 0 }}
            />
            <img
              src="/CMS/anim/globetick.svg"
              alt="setting image"
              className='absolute h-[40px] w-[40px] right-1 bottom-2 lg:-bottom-2 lg:right-8 object-contain transition-transform duration-1000 z-20'
            />
          </div>
          <h2 className='text-lg text-[#08727c] font-bold'>{cmsBlogData[0].title}</h2>
          <p className='font-light text-[#494949] text-start ml-4'>{cmsBlogData[0].content}</p>
        </div>

        {/* Second and third cards */}
        {cmsBlogData.slice(1).map((data) => (
          <div key={data.name} className='flex flex-col gap-4'>
            <div className='relative lg:mb-12 flex items-center justify-center h-[150px] w-[150px] mx-auto -mb-4'>
              <img
                src={data.images[currentImageIndex[data.name] || 0]}
                alt={`${data.name} image`}
                className='absolute w-full h-full object-contain transition-opacity duration-[1000ms] opacity-0'
                style={{ opacity: currentImageIndex[data.name] !== undefined ? 1 : 0 }}
              />
            </div>
            <h2 className='text-sm lg:text-lg text-[#08727c] font-bold'>{data.title}</h2>
            <p className='font-light text-[#494949] text-start ml-4'>{data.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CmsBlog
