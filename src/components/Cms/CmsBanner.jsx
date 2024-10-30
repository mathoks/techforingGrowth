import React from 'react';
import { useGlobalContext } from '@/context/globalContext';
import "@/style/cms/cms-styles.css";
import { Banner_btn } from '@/components/sharedComponent/All_buttons';


const CmsBanner = () => {
   const { setOpenScheduleDemo } = useGlobalContext();
   return (
      <section className="px-4 banner_bg max-sm:overflow-hidden " >
         <div className="main_container flex lg:flex-row flex-col justify-between items-center backdrop-blur-[2px] ">
            <div className="lg:w-[50%] w-full ">
               <div className="lg:block flex items-center lg:mb-0 mb-5 ">
                  <h1 className="banner_content font-black noto text-[#0c7a88]"> Elevate Your Blog Management<span className="text-green ml-2">Effortlessly</span></h1>
                  <div className="lg:w-full w-[60%] ">
                     <img src="/CMS/cms-hero-image.webp" alt="" className="lg:hidden block scale-[1.2]" />
                  </div>
               </div>

               <ul>
                {
                    data?.map((item,index) =>(
                         <li key={index} className="flex items-center mb-3" >
                            <img src={item.icon} alt="" className="w-[25px] h-[25px] object-contain mr-4" />
                            <p className="lg:leading-[38px] leading-[18px] lg:text-[18px] text-[14px] text-[#0c7a88]">{item.title}</p>
                         </li>
                    ))
                }
                 
               </ul>
               
               <div className="lg:mt-[70px] mt-[20px]">
                  <Banner_btn className='' text={"Explore Live"} OpenScheduleDemo={setOpenScheduleDemo} />
               </div>
            </div>

            <div className="w-[80%] ">
               <img src="/CMS/cms-hero-image.webp" alt="" className="lg:block hidden" />
            </div>
         </div>
      </section>
   );
};

export default CmsBanner;

const data=[
    {
      id: 1,
      title: 'Seamless Blog Writing & Posting',
      icon: '/Recruitment/icons/tic.webp',
    },
    {
      id: 2,
      title: 'Easy Site & Category Setup',
      icon: '/Recruitment/icons/tic.webp',
    },
    {
      id: 3,
      title: 'Unified Social Media Management',
      icon: '/Recruitment/icons/tic.webp'
    },
    {
      id: 4,
      title: 'Complete Blog History Access',
      icon: '/Recruitment/icons/tic.webp',

    },
]