import { CheckMark } from '@/SvgIcons'
import Image from 'next/image'
import React from 'react'

const SeamlessSocialPost = () => {


  const data = [
    {
      icon: <CheckMark />,
      title: 'Centralized Solution',
      content: "Manage all your social media posts from a single platform."
    },
    {
      icon: <CheckMark />,
      title: "Simplified Access",
      content: "Say goodbye to the hassle of logging into multiple accounts.",
    },
    {
      icon: <CheckMark />,
      title: "Efficient Scheduling",
      content: "Easily keep up with posting schedules without stress.",
    },
    {
      icon: <CheckMark />,
      title: "Integrated Management",
      content: "Streamline your social media workflow effortlessly.",
    }
  ]

  return (
    <section className='container scroll-m-16 relative'>
      <h2 className='pt-24 pb-[60px] lg:py-[105px] text-[#08747f] font-bold text-xl lg:text-4xl mx-auto text-center'>Seamless Social Post Management Solutions</h2>
      <div className='flex items-center justify-end relative lg:absolute lg:right-14 lg:top-72'>
        <div className='flex items-center gap-2 absolute -top-8 right-24 lg:right-12 z-10'>
          <Image src={'/CMS/facebook.webp'} alt='facebook' width={40} height={40} />
          <Image src={'/CMS/linkedin.webp'} alt='facebook' width={40} height={40} />
          <Image src={'/CMS/instragram.webp'} alt='facebook' width={40} height={40} />
          <Image src={'/CMS/x.webp'} alt='facebook' width={40} height={40} />
        </div>
        <p className='p-4 rounded-lg shadow-md max-w-[490px] z-20 bg-white'>Managing multiple social media accounts can quickly become overwhelming. With different platforms, varied posting schedules, and the need for engaging content, staying on top of your social media game can feel like an uphill battle.</p>
      </div>
      <div className=' hidden lg:block lg:-mt-4 relative'>
        <Image src={'/CMS/social-1.webp'} alt='social' width={1200} height={207} />
        <Image src={'/CMS/social-2.webp'} alt='social 2' className='absolute -top-10 lg:left-28 hidden lg:block' width={545} height={220} />

        <Image src={'/CMS/social-2.webp'} alt='social 2' className='absolute -top-24 lg:left-36 lg:hidden' width={205} height={150} />
      </div>
      {/* mobile image */}
      <div className='lg:hidden flex items-center justify-center py-4'>
        <Image src={'/CMS/social-mobile.webp'} alt='social 2' className='' width={320} height={200} />
      </div>
      <p className='font-light p-4 text-[#494949] max-w-[850px] text-start mx-auto'>Navigate the intricate world of social media with ease using our platform's comprehensive solutions. Gone are the days of juggling multiple accounts and fretting over posting schedules. Our integrated management feature offers a centralized hub for all your social media needs. Here's how we simplify the process:</p>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-9 mt-6 max-w-[850px] mx-auto'>
        {data.map(item => (
          <div key={item.title} className='flex items-start gap-5 px-4'>
            {item.icon}
            <div>
              <h2 className='text-[#087380] text-sm lg:text-lg font-bold'>{item.title}</h2>
              <p className='text-[#494949] font-light'>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SeamlessSocialPost