import React from 'react'
import { Button } from '../SharedComponents'
import Image from 'next/image'

const SaveTimeAndConsistancy = () => {
    return (
        <section className=' shadow-xl mb-16'>
            <div className=' container mx-auto flex flex-row pb-4 lg:pb-0 items-center lg:justify-between gap-2 lg:gap-0 mt-4 lg:mt-0'>
                
                    <img src={"/CMS/timeandconsistance.webp"} alt='time and consistency' className=' -ml-8 lg:-ml-0 w-[582px] h-[150px]  lg:w-[560px] lg:h-[330px] object-cover' />
               
                <div className=' space-y-1 lg:space-y-2'>
                    <p className='font-semibold text-xs lg:text-2xl text-[#087380]'>Save <span className='text-[#5bbc2e]'>Time</span>, Ensure <span className='text-[#5bbc2e]'>Consistency</span></p>
                    <h3 className='text-[#2f92a0] font-light text-sm lg:text-3xl max-w-[563px]'>Publish your content in multiple channels from one single platform with our <span className='text-[#2f92a0]  font-bold'>unified CMS</span> today!</h3>
                    <Button className={'action_btn'} text={'Start Saving Time'}  />
                </div>
            </div>
        </section>
    )
}

export default SaveTimeAndConsistancy