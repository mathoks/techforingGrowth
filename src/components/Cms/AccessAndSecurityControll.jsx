import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const AccessAndSecurityControll = () => {


  const [animationStage, setAnimationStage] = useState(-1);
  const [selectedTab, setSelectedTab] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStage(prev => {
        if(prev >= 2){
          return -1
        }else{
          return prev + 1;
        }
      })
    },1000)

    return () => clearInterval(interval)
  },[])


  return (
    <section className='py-[96px] container scroll-mt-40'>
        <h2 className='text-[#256CBC] text-center text-xl lg:text-4xl font-bold mb-[52px]'>Access & Security Control</h2>

          {/* desktop view */}
          <div className='hidden lg:flex items-center justify-evenly flex-row-reverse gap-4'>
            <div>
              <Image src={'/TCP/ASC/asc.webp'} width={1000} height={1000} className='w-full h-full' alt='feature image'/>
            </div>
            <div className='space-y-8'>
              {data.map((item, index) => (
                <div key={item.id} className='flex items-center gap-4'>
                  <Image src={item.image} alt='icon' width={1000} height={1000} className={`w-[45px] h-[45px] duration-500 ${animationStage >= index ? ' opacity-100 scale-100' : ' opacity-0 scale-0'}`}/>
                  <div>
                    <h2 className='font-bold text-sm lg:text-lg text-[#2c5fa5]'>{item.title}</h2>
                    <p className='font-light text-[#494949] text-xs lg:text-sm max-w-[500px]'>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* mobile view */}
          <div className='lg:hidden'>
            <div className=''>
              <Image src={'/TCP/ASC/asc.webp'} alt='access and security control' width={1000} height={1000} className='w-[300px] mx-auto h-full'/>
              <div className='mt-4'>
                  <div className='flex items-center justify-center gap-2  -mb-4 relative z-30'>
                    {data.map((tab, index) => (
                      <div key={tab.id} className={`px-4 py-8 cursor-pointer ${selectedTab === index ? 'rounded-md shadow-lg bg-white' : 'opacity-75'}`} onClick={() => setSelectedTab(index)}>
                        <Image src={tab.image} alt='' width={40} height={40}/>
                      </div>
                    ))}
                  </div>
                  <div className='w-full h-1 border-b-2 border-[#2c5fa5] px-4 relative z-10'></div>
                  <div className='p-8 rounded-md shadow-md space-y-1 text-start'>
                    <h2 className='font-bold text-sm  text-[#2c5fa5]'>{data[selectedTab].title}</h2>
                    <p className='font-light text-[#494949] text-xs'>{data[selectedTab].content}</p>
                  </div>
              </div>
            </div>
          </div>
    </section>
  )
}

export default AccessAndSecurityControll


const data = [
  {
    id:1,
    image: '/TCP/ASC/invite.svg',
    title:'Invite Users',
    content:'Seamlessly invite new users via email, assigning them predefined roles to ensure secure and authorized access.' 
  },
  {
    id:2,
    image: '/TCP/ASC/add.svg',
    title:'Add Users',
    content:"Effortlessly add users from your company's employee database or through email invitations, granting them the necessary credentials and access rights."
  },
  {
    id:3,
    image: '/TCP/ASC/role.svg',
    title:'Role Assignment',
    content:'Precisely assign specific roles and access levels to each user, ensuring they only access the information and tools relevant to their responsibilities.' 
  },
]