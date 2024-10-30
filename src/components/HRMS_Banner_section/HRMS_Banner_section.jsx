"use client"
import { Button } from "@/components/SharedComponents";
import "./HRMS_Banner_section.css";
import { useGlobalContext } from "@/context/globalContext";
import { Banner_btn } from "../sharedComponent/All_buttons";

const HRMS_Banner_section = () => {
   const { setOpenScheduleDemo } = useGlobalContext();
   return (
      <section className="px-4 banner_bg lg:pt-0 pt-10" >
         <div className="main_container flex lg:flex-row flex-col justify-between items-center">
            <div className="lg:w-[50%] w-full">
               <div className="lg:block flex items-center lg:mb-0 mb-5">
                  <h1 className="banner_content font-black noto"><span className="text_gradient">Simplify</span><span className="text-green"> HR Management</span><span className="text_gradient"> With Automation</span></h1>
                  <div className="lg:w-full w-[50%] overflow-hidden">
                     <img src="/HRMS/HRMS_Banner.webp" alt="" className="lg:hidden block scale-[1.2]" />
                  </div>
               </div>

               <ul>
                  <li className="flex items-center mb-3">
                     <img src="/HRMS/tic.webp" className="inline w-[18px] lg:w-[23px]" alt="" />
                     <span className="ml-4 lg:leading-[38px] leading-[18px] lg:text-[18px] text-[14px] text_gradient">Minimize Paperwork, Maximize Operational Efficiency</span>
                  </li>
                  <li className="flex items-center mb-3">
                     <img src="/HRMS/tic.webp" className="inline w-[18px] lg:w-[23px]" alt="" />
                     <span className="ml-4 lg:leading-[38px] leading-[18px] lg:text-[18px] text-[14px] text_gradient">Eliminate Human Errors, Ensure Constant Precision</span>
                  </li>
                  <li className="flex items-center mb-3">
                     <img src="/HRMS/tic.webp" className="inline w-[18px] lg:w-[23px]" alt="" />
                     <span className="ml-4 lg:leading-[38px] leading-[18px] lg:text-[18px] text-[14px] text_gradient">Automate Complex HR Tasks for Efficiency</span>
                  </li>
                  <li className="flex items-center">
                     <img src="/HRMS/tic.webp" className="inline w-[18px] lg:w-[23px]" alt="" />
                     <span className="ml-4 lg:leading-[38px] leading-[18px] lg:text-[18px] text-[14px] text_gradient">Free The HR Professionals to Focus on Talent and Innovation</span>
                  </li>
               </ul>
               <div className="lg:mt-[70px] mt-[40px]">
                  <Banner_btn text={"Get A Demo"} OpenScheduleDemo={setOpenScheduleDemo} />
               </div>
            </div>

            <div className="lg:w-[50%] w-full">
               <img src="/HRMS/HRMS_Banner.webp" alt="" className="lg:block hidden" />
            </div>
         </div>
      </section>
   );
};

export default HRMS_Banner_section;