import { Chat, Communication, MicroPhone, Ticket } from '@/SvgIcons';
import Image from 'next/image';
import React from 'react'

const ComprehensiveClientSupport = () => {
    return (
        <section className='pb-[96px] container scroll-mt-[200px]' >
            <h2 className='text-xl lg:text-4xl font-bold text-[#3369b4] text-center mb-10'>Comprehensive Client Support</h2>

            {/* desktop view */}
            <div className='hidden lg:flex items-center gap-2'>
                <div className='relative '>
                    <Image src={'/TCP/ticket.webp'} alt='ticket' width={1000} height={1000} className='min-w-[450px] max-h-[335px] w-full h-full lg:ml-20 ' />
                    <div className='absolute left-10 top-[35%] bg-white shadow-md p-4 rounded-full w-[80px] h-[80px] flex items-center justify-center'>
                        <MicroPhone />
                    </div>
                </div>
                <div className='relative -left-10'>
                    {data.map((item, index) => (
                        <div
                            key={item.title}
                            style={{ marginLeft: `${50 * index}px` }}
                            className='bg-[#f2faee] p-4 flex items-center gap-4 w-[600px] rounded-md'
                        >
                            <div className='bg-white p-5 rounded-md w-[80px] h-[80px] flex items-center justify-center shadow-md'>
                                {item.icon}
                            </div>
                            <div>
                                <h3 className='text-[#2a5ca2] font-bold text-lg'>{item.title}</h3>
                                <p className='text-[#494949] font-light'>{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/*mobile view */}
            <div className='lg:hidden flex flex-col gap-4'>
                {
                    data.map(item => (
                        <div key={item.title} className='bg-[#f0f6fd] p-4 flex items-center flex-col rounded-md gap-2'>
                            <div className='bg-white p-4 rounded-md w-[60px] h-[60px] flex items-center justify-center shadow-md'>
                                {item.icon}
                            </div>
                            <h3 className='text-[#2a5ca2] font-bold text-sm text-center'>{item.title}</h3>
                            <p className='text-[#494949] font-light text-sm'>{item.content}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default ComprehensiveClientSupport;



const data = [
    {
        icon: <Ticket />,
        title: 'Ticket System',
        content: 'Employees can provide support and clients can receive help through a structured ticketing system.'
    },
    {
        icon: <Communication />,
        title: 'Efficient Communication',
        content: 'Manage and track support requests with ease, ensuring no query goes unanswered.'
    },
    {
        icon: <Chat />,
        title: 'Direct Chat',
        content: 'Enable real-time communication between employees and clients for immediate support and resolution.'
    },
]