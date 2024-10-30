import { accessAndSecurityData } from '@/dummyData'
import React from 'react'

const AccessAndSecurityControl = () => {

  return (
    <section className='container pt-24 py-[52px] lg:py-[106px] space-y-12' >
        <h2 className='text-center font-bold text-xl lg:text-4xl text-[#087380]'>Efficient Access & Security Control</h2>
        <p className='text-[#494949] font-light max-w-[980px] mx-auto px-4'>In the realm of content management, having the right access levels is crucial for smooth collaboration and content integrity. Our platform offers tailored roles and access levels to ensure optimal efficiency and security. Here's how we empower your team:</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {accessAndSecurityData.map(item => (
                <div key={item.title} className={`p-6 shadow-2xl space-y-4 py-12 border-t-4 border-t-[#087380] rounded-md`}>
                    <h2 className='text-center text-lg font-bold text-[#087380]'>{item.title}</h2>
                    {
                        item.data.map(info => (
                            <div key={info.text} className={` ${info.opacity && 'opacity-60'} flex items-center gap-2`}>
                                {info.icon} <p>{info.text}</p>
                            </div>
                        ))
                    }
                </div>
            ))}
        </div>
    </section>
  )
}

export default AccessAndSecurityControl