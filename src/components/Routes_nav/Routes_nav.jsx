"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import "./Routes_nav.css"
import { usePathname } from "next/navigation";

const Routes_nav = () => {
   const pathname = usePathname();
   const [activeRoute, setActiveRoute] = useState('employee_Management');

   useEffect(() => {
      const path = pathname.split("/")[2];
      if (pathname === '/techforing-human' || pathname === '/techforing-human/') {
         setActiveRoute('employee_Management');
      } else if (path) {
         setActiveRoute(path);
      }
   }, [pathname]);

   const route_pages = [
      {
         link: "/techforing-human/employee_Management/#management",
         img: "/HRMS/icons/employee_management.webp",
         img2: "/HRMS/icons/employee_management_white.webp",
         content1: "Employee",
         content2: "Management",
         match: "employee_Management"
      },
      {
         link: "/techforing-human/attendance_management/#management",
         img: "/HRMS/icons/attendance_management.webp",
         img2: "/HRMS/icons/attendance_management_white.webp",
         content1: "Attendance",
         content2: "Management",
         match: "attendance_management"
      },
      {
         link: "/techforing-human/performance_management/#management",
         img: "/HRMS/icons/performance_management.webp",
         img2: "/HRMS/icons/performance_management_white.webp",
         content1: "Performance",
         content2: "Management",
         match: "performance_management"
      },
      {
         link: "/techforing-human/noticeboard_management/#management",
         img: "/HRMS/icons/noticeboard_management.webp",
         img2: "/HRMS/icons/noticeboard_management_white.webp",
         content1: "Noticeboard",
         content2: "Management",
         match: "noticeboard_management"
      },
      {
         link: "/techforing-human/report_management/#management",
         img: "/HRMS/icons/report_management.webp",
         img2: "/HRMS/icons/report_management_white.webp",
         content1: "Report",
         content2: "Management",
         match: "report_management"
      },
      {
         link: "/techforing-human/document_management/#management",
         img: "/HRMS/icons/document_management.webp",
         img2: "/HRMS/icons/document_management_white.webp",
         content1: "Documents",
         content2: "Management",
         match: "document_management"
      },
      {
         link: "/techforing-human/funds/#management",
         img: "/HRMS/icons/funds.webp",
         img2: "/HRMS/icons/funds_white.webp",
         content1: "Funds",
         content2: "Management",
         match: "funds"
      },
   ];

   return (
      <div className={`pages_lists main_container lg:block hidden overflow-hidden`}>
         <ul className='route_list'>
            {route_pages.map((items, index) => (
               <li 
                  key={index} 
                  className={`${items.match === activeRoute ? "active" : ""}`}
                  onClick={() => setActiveRoute(items.match)}
               >
                  <span className={`${items.match === activeRoute ? "sub_route_list active" : "sub_route_list"}`}></span>
                  <Link href={items.link}>
                     {items.match === activeRoute 
                        ? <img src={items.img2} alt="" />
                        : <img src={items.img} alt="" className="route_image" />
                     }
                     <div className={`ml-4 leading-6 text-[12px]`}>
                        <p className={`${items.match === activeRoute ? "active" : ""}`}>{items.content1}</p>
                        <p className={`${items.match === activeRoute ? "active" : ""}`}>{items.content2}</p>
                     </div>
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Routes_nav;