import React from 'react';
import './Finance_Banner_section.css'
import { useGlobalContext } from '@/context/globalContext';
import { Banner_btn } from '../sharedComponent/All_buttons';

const Finance_Banner_section = () => {
   const { setOpenScheduleDemo } = useGlobalContext();
   return (
      <section className="px-4 banner_bg lg:pt-0 pt-6" >
         <div className="main_container flex lg:flex-row flex-col justify-between items-center">
            <div className="lg:w-[50%] w-full">
               <div className="lg:block flex items-center lg:mb-0 mb-5">
                  <h1 className="banner_content font-black noto"><span className="text_gradient_finance">Complete</span> <span className="text-green">Financial Control </span><span className="text_gradient_finance">At Your Fingertips</span></h1>
                  <div className="lg:w-full w-[50%]">
                     <img src="/Finance/Finance_banner.webp" alt="" className="lg:hidden block scale-[1.2]" />
                  </div>
               </div>

               <ul>
                  <li className="flex items-center mb-3">
                     <img src="/Finance/icons/tic.webp" className="inline w-[18px] lg:w-[23px]" alt="" />
                     <span className="ml-4 lg:leading-[38px] leading-[18px] lg:text-[18px] text-[14px] text_gradient_finance">Seamless Payroll Processing</span>
                  </li>
                  <li className="flex items-center mb-3">
                     <img src="/Finance/icons/tic.webp" className="inline w-[18px] lg:w-[23px]" alt="" />
                     <span className="ml-4 lg:leading-[38px] leading-[18px] lg:text-[18px] text-[14px] text_gradient_finance">Insightful Financial Reporting</span>
                  </li>
                  <li className="flex items-center mb-3">
                     <img src="/Finance/icons/tic.webp" className="inline w-[18px] lg:w-[23px]" alt="" />
                     <span className="ml-4 lg:leading-[38px] leading-[18px] lg:text-[18px] text-[14px] text_gradient_finance">Ensure Financial Accuracy and Efficiency</span>
                  </li>
                  <li className="flex items-center">
                     <img src="/Finance/icons/tic.webp" className="inline w-[18px] lg:w-[23px]" alt="" />
                     <span className="ml-4 lg:leading-[38px] leading-[18px] lg:text-[18px] text-[14px] text_gradient_finance">Empower HR for Strategic Growth and Compliance</span>
                  </li>
               </ul>

               <div className="lg:mt-[70px] mt-[40px]">
                  <Banner_btn text = {"Request A Report"} OpenScheduleDemo = { setOpenScheduleDemo }  />
               </div>
               
            </div>

            <div className="lg:w-[50%] w-full">
               <img src="/Finance/Finance_banner.webp" alt="" className="lg:block hidden" />
            </div>
         </div>
      </section>
   );
};

export default Finance_Banner_section;