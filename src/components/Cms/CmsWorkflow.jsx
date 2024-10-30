import Image from 'next/image'
import React from 'react'

const CmsWorkflow = () => {
  return (
    <div className='flex items-center flex-col-reverse gap-5 lg:flex-row justify-between container py-12  '>
        <div className='max-w-[568px] flex flex-col gap-2 leading-6 text-center lg:text-start lg:gap-5 lg:justify-start'>
            <h2 className='font-extrabold text-xl md:text-4xl text-[#0c7a88] md:w-[310px]'>Master Your Blogging  Workflow</h2>
            <p className='text-xs md:text-base text-[#494949] p-4 lg:p-0 text-start'>Discover a seamless way to manage your blog with our comprehensive software. From organizing your sites and categories to crafting and posting engaging content, our platform simplifies every step. Keep track of your blog history, make edits on the fly, and effortlessly manage your social media accounts—all with robust access and security controls. Elevate your blogging experience and focus on what truly matters: creating great content.</p>
        </div>
        <div className='relative w-full object-contain ml-4 p-4 lg:p-0 h-[13rem] md:w-[526px] md:h-[340px] mx-auto'>
            <Image src={'/CMS/workflow.webp'} fill alt='workflow'/>
        </div>
    </div>
  )
}

export default CmsWorkflow