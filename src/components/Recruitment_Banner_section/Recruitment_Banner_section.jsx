import React from 'react';
import "./Recruitment_Banner_section.css"
import { useGlobalContext } from '@/context/globalContext';
import { Banner_btn } from '../sharedComponent/All_buttons';

const Recruitment_Banner_section = () => {
   const { setOpenScheduleDemo } = useGlobalContext();
   return (
      <section className="px-4 banner_bg max-sm:overflow-hidden" >
         <div className="main_container flex lg:flex-row flex-col justify-between items-center">
            <div className="lg:w-[50%] w-full">
               <div className="lg:block flex items-center lg:mb-0 mb-5">
                  <h1 className="banner_content font-black noto"><span className="text_gradient_recruitment">Discover the Future of Hiring With</span> <span className="text-green">AI-Powered Recruitment</span></h1>
                  <div className="lg:w-full w-[50%]">
                     <img src="/Recruitment/recruitment_banner.webp" alt="" className="lg:hidden block scale-[1.2]" />
                  </div>
               </div>

               <ul>
                  <li className="flex items-center mb-3">
                     <img src="/Recruitment/icons/tic.webp" className="inline w-[18px] lg:w-[23px]" alt="" />
                     <span className="ml-4 lg:leading-[38px] leading-[18px] lg:text-[18px] text-[14px] text_gradient_recruitment">Revolutionize Recruitment with AI</span>
                  </li>
                  <li className="flex items-center mb-3">
                     <img src="/Recruitment/icons/tic.webp" className="inline w-[18px] lg:w-[23px]" alt="" />
                     <span className="ml-4 lg:leading-[38px] leading-[18px] lg:text-[18px] text-[14px] text_gradient_recruitment">Simplify the Hiring Process</span>
                  </li>
                  <li className="flex items-center mb-3">
                     <img src="/Recruitment/icons/tic.webp" className="inline w-[18px] lg:w-[23px]" alt="" />
                     <span className="ml-4 lg:leading-[38px] leading-[18px] lg:text-[18px] text-[14px] text_gradient_recruitment">Attract Top Talent Effortlessly</span>
                  </li>
                  <li className="flex items-center">
                     <img src="/Recruitment/icons/tic.webp" className="inline w-[18px] lg:w-[23px]" alt="" />
                     <span className="ml-4 lg:leading-[38px] leading-[18px] lg:text-[18px] text-[14px] text_gradient_recruitment">Empower Data-Driven, Confident Hiring Decisions</span>
                  </li>
               </ul>
               <div className="lg:mt-[70px] mt-[40px]">
                  <Banner_btn text={"Live Demo"} OpenScheduleDemo={setOpenScheduleDemo} />
               </div>
            </div>

            <div className="lg:w-[50%] w-full">
               <img src="/Recruitment/recruitment_banner.webp" alt="" className="lg:block hidden" />
            </div>
         </div>
      </section>
   );
};

export default Recruitment_Banner_section;