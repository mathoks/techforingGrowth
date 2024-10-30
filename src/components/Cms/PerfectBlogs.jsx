import { perfectBlogData } from '@/dummyData'
import Image from 'next/image'
import React, { useState } from 'react'

const PerfectBlogsSection = () => {

  const [hoverIndex, setHoverIndex] = useState(0);


  return (
    <section className='container pt-24 pb-[52px] lg:py-[96px] ' >
      <h2 className='font-bold text-xl lg:text-4xl text-[#08727c] text-center'>Post Perfect Blogs with Ease and Precision</h2>
      <div className='mt-16 flex flex-col lg:flex-row items-center gap-3 lg:gap-2 w-full'>

        <div className='relative max-w-[570px] w-full h-[380px] z-20 hidden lg:block object-contain'>
          <Image src={'/CMS/computer.webp'} fill alt='computer image' className='block' />
          <Image className='absolute z-30 top-7 left-[139px]' width={280} height={50} src={perfectBlogData[0]?.img1} alt='task image' />
          <Image className='absolute z-30 top-7 left-[139px] object-contain' width={280} height={50} src={perfectBlogData[hoverIndex]?.img1} alt='task image' />
          <div className='w-[400px] h-[200px]'>
            {perfectBlogData[hoverIndex]?.img2 && (
              <Image className='relative top-10  z-50 object-contain w-full h-full' width={1000} height={1000} src={perfectBlogData[hoverIndex]?.img2} alt='' />
            )}
          </div>
        </div>


        {/* mobile image animation view */}
        <div className='relative w-[350px] h-[230px] overflow-hidden z-20 lg:hidden'>
          <Image className='lg:hidden' src={'/CMS/computer-2.webp'} fill alt='computer image' />
          {perfectBlogData[hoverIndex]?.img1 && (
            <div className='w-[320px] h-[160px]'>
              <Image className='relative top-0 left-4 z-50 lg:hidden w-full h-full object-contain' width={1000} height={1000} src={perfectBlogData[hoverIndex]?.img2 || perfectBlogData[hoverIndex]?.img1} alt='' />
            </div>
          )}
        </div>

        <div className='max-w-[620px]  space-y-2'>
          {perfectBlogData.map((info, index) => (
            <div key={info.title} className='flex flex-col text-start bg-[#FAFAFA] py-3 px-4 lg:px-5 rounded-lg' onMouseOver={(e) => setHoverIndex(index)} >
              <div className='flex items-center gap-2 text-[#08747f] text-lg font-bold'>
                {hoverIndex === index ? info.icon2 : info.icon1} <h2>{info.title}</h2>
              </div>
              {hoverIndex === index && <p className='text-[#494949] font-light mt-2 ml-6'>{info.content}</p>}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default PerfectBlogsSection