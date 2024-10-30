import React from 'react';
import "./Personal_routes_nav.css"


const Personal_routes_nav = ({ lvl }) => {
   const { path_1 } = lvl;

   const route_pages = [
      {
         link: "",
         img: "/personal/navbar/calendar.webp",
         img2: "/personal/navbar/calendar_white.webp",
         content1: "Attendance",
         content2: "Management",
         match: ""
      },
      {
         link: "",
         img: "/personal/navbar/cash_sync.webp",
         img2: "/personal/navbar/cash_sync_white.webp",
         content1: "Finance",
         content2: "Management",
         match: ""
      },
      {
         link: "",
         img: "/personal/navbar/document.webp",
         img2: "/personal/navbar/document_white.webp",
         content1: "Personal",
         content2: "Document",
         match: ""
      },
      {
         link: "",
         img: "/personal/navbar/document.webp",
         img2: "/personal/navbar/document_white.webp",
         content1: "Performance",
         content2: "Indicator",
         match: ""
      },
      {
         link: "",
         img: "/personal/navbar/report.webp",
         img2: "/personal/navbar/report_white.webp",
         content1: "Open Feedback ",
         content2: "Channel",
         match: ""
      },
      {
         link: "",
         img: "/personal/navbar/person_err.webp",
         img2: "/personal/navbar/person_err_white.webp",
         content1: "Complaint & ",
         content2: "Notification",
         match: ""
      },
      {
         link: "",
         img: "/personal/navbar/group.webp",
         img2: "/personal/navbar/group_white.webp",
         content1: "know Your",
         content2: "Colleagues",
         match: ""
      },
      {
         link: "",
         img: "/personal/navbar/security.webp",
         img2: "/personal/navbar/security_white.webp",
         content1: "Credential",
         content2: "Controls",
         match: ""
      },
      {
         link: "",
         img: "/personal/navbar/training.webp",
         img2: "/personal/navbar/training_white.webp",
         content1: "On Job",
         content2: "Training",
         match: ""
      }
   ]

   return (
      <nav className='sticky top-0 bg-light-white2 z-30'>
         <div className='max-w-[1140px] mx-auto'>
            <ul className="bg-light-white2 text-center grid grid-cols-9 shadow-shadow4.5x rounded-lg">
               {
                  route_pages.map(({ img, img2, content1, content2, link }, index) => (
                     <a key={index} href={`#${link}`}>
                        <li className='py-3 list_element'>
                           <img src={img} alt="" className='block mx-auto mb-2' />
                           <span className='roboto font-normal text-[12px] text_gradient_personal block opacity-70'>{content1}</span>
                           <br />
                           <span className='roboto font-normal text-[12px] text_gradient_personal mt-[-25px] block opacity-70'>{content2}</span>
                        </li>
                     </a>
                  ))
               }
            </ul>
         </div>
      </nav>
   );
};

export default Personal_routes_nav;