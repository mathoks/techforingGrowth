import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const TransformYourWorkflow = () => {


    return (
        <section className='container flex flex-col-reverse lg:flex-row items-center justify-between lg:px-4 py-12 lg:py-0'>
            <div className='px-4 lg:px-0'>
                <h2 className='text-[#256CBC] text-xl lg:text-4xl font-extrabold lg:leading-[48px] max-w-[468px]'>Transform Your Workflow with Superior Management</h2>
                <p className='font-extralight text-base leading-6 text-[#494949] mt-6 max-w-[568px]'>Welcome to the next level of business efficiency. Experience unmatched precision and productivity with our comprehensive solution designed to optimize your workflow and drive your business success. Transform your operations today and witness the exceptional difference.</p>
            </div>
            <div className='relative w-[300px] lg:w-[440px] h-[250px] lg:h-[438px] mb-16 lg:mb-0'>
               <Image src={'/TCP/workflow/tcp-animation.gif'} alt='workflow animation' width={1000} height={1000}/>
            </div>
        </section>
    )
}

export default TransformYourWorkflow