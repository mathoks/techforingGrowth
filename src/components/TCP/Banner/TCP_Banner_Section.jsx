import React from 'react';
import "../../../style/tcp/tcp-styles.css";
import { useGlobalContext } from '@/context/globalContext';
import { Banner_btn } from '@/components/sharedComponent/All_buttons';


const TCP_Banner_section = () => {
   const { setOpenScheduleDemo } = useGlobalContext();
   return (
      <section className="px-4 banner_bg max-sm:overflow-hidden" >
         <div className="main_container flex lg:flex-row flex-col justify-between items-center">
            <div className="lg:w-[50%] w-full">
               <div className="lg:block flex items-center lg:mb-0 mb-5">
                  <h1 className="banner_content font-black noto text-blue"><span className="text-green">The Ultimate Portal for </span>Onboarding, Collaboration & Support</h1>
                  <div className="lg:w-full w-[50%]">
                     <img src="/TCP/tcp-hero-image.webp" alt="" className="lg:hidden block scale-[1.2]" />
                  </div>
               </div>

               <ul>
                {
                    data?.map((item,index) =>(
                         <li key={index} className="flex items-center mb-3" >
                            <img src={item.icon} alt="" className="w-[25px] h-[25px] object-contain mr-4" />
                            <p className="lg:leading-[38px] leading-[18px] lg:text-[18px] text-[14px] text-blue">{item.title}</p>
                         </li>
                    ))
                }
                 
               </ul>
               <div className="lg:mt-[70px] mt-[20px]">
                  <Banner_btn className='' text={"Explore Live"} OpenScheduleDemo={setOpenScheduleDemo} />
               </div>
            </div>

            <div className="lg:w-[50%] w-full">
               <img src="/TCP/tcp-hero-image.webp" alt="" className="lg:block hidden" />
            </div>
         </div>
      </section>
   );
};

export default TCP_Banner_section;

const data=[
    {
      id: 1,
      title: 'Revolutionize Recruitment with AI',
      icon: '/Recruitment/icons/tic.webp',
    },
    {
      id: 2,
      title: 'Simplify the Hiring Process',
      icon: '/Recruitment/icons/tic.webp',
    },
    {
      id: 3,
      title: 'Attract Top Talent Effortlessly',
      icon: '/Recruitment/icons/tic.webp'
    },
    {
      id: 4,
      title: 'Empower Data-Driven, Confident Hiring Decisions',
      icon: '/Recruitment/icons/tic.webp',

    },
]