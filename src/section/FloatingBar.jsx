"use client"
import { useGlobalContext } from '@/context/globalContext';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaCalendarCheck } from "react-icons/fa";
import { MdNoteAlt } from "react-icons/md";
const FloatingBar = () => {
  const { setOpenScheduleForm, setOpenScheduleDemo } = useGlobalContext();
  const router = useRouter();
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      right: '0',
      zIndex: '9999',
    }} className='flex flex-col gap-0 translate-x-[135px]'>
      <div
        onClick={() => setOpenScheduleDemo(true)}
        className='text-white rounded-l-3xl bg-[#5bbc2e80] hover:bg-primary  flex justify-center items-center gap-3 cursor-pointer py-2 px-3 hover:-translate-x-[135px] transition-all duration-300' >
        <FaCalendarCheck className=' w-5 h-5' />
        <span className='text-base font-normal'>Schedule a demo</span>
      </div>
      <div
        onClick={() => router.push('/contact-us')}
        className='text-white rounded-l-3xl bg-[#182f5980] hover:bg-secondary-1 flex justify-start items-center gap-3 cursor-pointer py-2 px-3 hover:-translate-x-[100px] transition-all duration-300'>
        <MdNoteAlt className=' w-5 h-5' />
        <span className='text-base font-normal'>Contact Us</span>
      </div>
    </div>
  )
}

export default FloatingBar