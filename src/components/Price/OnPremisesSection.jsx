import React from 'react'

const OnPremisesSection = () => {
  return (
    <div className='main_container my-8 md:my-16 px-4 md:px-8'>
      <div className='flex flex-col justify-center items-center gap-4 md:gap-6'>
        <h2 className='text-2xl md:text-4xl font-bold text-[#182F59] text-center'>
        Elevate Your Business with Premium
        <span className='text-primary'> On-Premises Solutions</span>
        </h2>
        <p className='text-sm md:text-base font-light text-center text-dark-text-3 max-w-4xl'>Experience unparalleled control, security, and customization with our On-Premise Edition software solutions. Perfect for businesses that require advanced DivBg protection and seamless integration with existing systems, our on-premise offerings ensure you have full authority over your software environment, updates, and maintenance.</p>
      </div>
      <div className='relative p-16'>
      <div className='hidden md:grid grid-cols-1 sm:grid-cols-2 gap-x-[68px] gap-y-[284px] py-11'></div>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 pl-4 justify-items-center md:absolute mt-4 md:top-[100px]'></div>
      </div>
    </div>
  )
}

export default OnPremisesSection
