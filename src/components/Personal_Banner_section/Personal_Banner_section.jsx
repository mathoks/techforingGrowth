import React from 'react';
import "./Personal_Banner_section.css"
import { useGlobalContext } from '@/context/globalContext';
import { Banner_btn } from '../sharedComponent/All_buttons';

const Personal_Banner_section = () => {
   const { setOpenScheduleDemo } = useGlobalContext();
   return (
      <section className="px-4 banner_bg lg:pt-0 pt-10" >
         <div className="main_container flex lg:flex-row flex-col justify-between items-center">
            <div className="lg:w-[50%] w-full">
               <div className="lg:block flex items-center lg:mb-0 mb-5">
                  <h1 className="banner_content font-black noto"><span className="text-green">Personal Dashboard </span><span className="text_gradient_personal">: Your Workplace, Your Way</span></h1>
                  <div className="lg:w-full w-[50%]">
                     <img src="/personal/personal_banner.webp" alt="" className="lg:hidden block scale-[1.2]" />
                  </div>
               </div>

               <ul>
                  <li className="flex items-center mb-3">
                     <img src="/personal/icons/tic.webp" className="inline w-[18px] lg:w-[23px]" alt="" />
                     <span className="ml-4 lg:leading-[38px] leading-[18px] lg:text-[18px] text-[14px] text_gradient_personal">Instant Access to Vital Information</span>
                  </li>
                  <li className="flex items-center mb-3">
                     <img src="/personal/icons/tic.webp" className="inline w-[18px] lg:w-[23px]" alt="" />
                     <span className="ml-4 lg:leading-[38px] leading-[18px] lg:text-[18px] text-[14px] text_gradient_personal">Efficient Self-Service for Reduced HR Workload</span>
                  </li>
                  <li className="flex items-center mb-3">
                     <img src="/personal/icons/tic.webp" className="inline w-[18px] lg:w-[23px]" alt="" />
                     <span className="ml-4 lg:leading-[38px] leading-[18px] lg:text-[18px] text-[14px] text_gradient_personal">Centralized Personal Dashboard for Employees</span>
                  </li>
                  <li className="flex items-center">
                     <img src="/personal/icons/tic.webp" className="inline w-[18px] lg:w-[23px]" alt="" />
                     <span className="ml-4 lg:leading-[38px] leading-[18px] lg:text-[18px] text-[14px] text_gradient_personal">Easy Access to Personal Performance Tracking & Training</span>
                  </li>
               </ul>
               <div className="lg:mt-[70px] mt-[40px]">
                  <Banner_btn text = {"Explore Live"} OpenScheduleDemo = { setOpenScheduleDemo }  />
               </div>
            </div>

            <div className="lg:w-[50%] w-full">
               <img src="/personal/personal_banner.webp" alt="" className="lg:block hidden" />
            </div>
         </div>
      </section>
   );
};

export default Personal_Banner_section;