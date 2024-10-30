"use client";
import React, { useEffect, useState } from 'react';
import "./HRMS_res_nav.css"
import { MdArrowForwardIos } from 'react-icons/md';
import Link from 'next/link';
import ResDropNav from '@/section/ResDropNav';
import { usePathname } from 'next/navigation';

const HRMS_res_nav = () => {
  const splitPath = usePathname()?.split('/')[2];

  const [drop, setDrop] = useState(false);

  useEffect(() => {
    const tab_box = document.querySelector(".tab_box");
    let isDragging = false;
    let startX;

    const startDragging = (e) => {
      isDragging = true;
      startX = e.touches[0].clientX;
    };

    const stopDragging = () => {
      isDragging = false;
    };

    const dragging = (e) => {
      if (!isDragging) return;
      const touchX = e.touches[0].clientX;
      const movementX = touchX - startX;
      tab_box.scrollLeft -= movementX;
      startX = touchX;
    };

    tab_box.addEventListener("touchmove", dragging);
    tab_box.addEventListener("touchstart", startDragging);
    tab_box.addEventListener("touchend", stopDragging);

    return () => {
      tab_box.removeEventListener("touchmove", dragging);
      tab_box.removeEventListener("touchstart", startDragging);
      tab_box.removeEventListener("touchend", stopDragging);
    }
  }, [])


  return (
    <div className='lg:hidden block sticky-element bg-[#FFF] z-20'>
      <div className='flex items-center'>
        <div className='w-[30%]'>
          <div className='w-full hrms_gradient relative py-[14px] px-3' onClick={() => setDrop(!drop)}>
            <span className='text-[#FFF] font-medium'>HRMS</span>
            <MdArrowForwardIos className='absolute top-[50%] translate-y-[-50%] right-1 text-[#FFF] text-[12px]' />

            <div className={`${drop ? "dropdown activeDrop" : "dropdown"} absolute bottom-[-132px] left-0 w-full`}>
              <ResDropNav active='/techforing-human/' />
            </div>
          </div>
        </div>

        <div className='w-[70%]'>
          <ul className='tab_box'>
            {
              route_pages.map((routes, index) => (
                <li key={index}>
                  <Link href={routes.link} className={`${routes.match === splitPath ? "tab_items ActiveNavigation" : "tab_items"}`}>
                    <div className='tab_items_inside'>
                      <img src={routes.img} alt="" className={`${routes.match === splitPath ? "tab_images ActiveNavigation" : "tab_images"}`} />
                      <span className={`${routes.match === splitPath ? "tab_content  ActiveNavigation" : "tab_content"}`}>{routes.content}</span>
                    </div>
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HRMS_res_nav;


const route_pages = [
  {
    link: "/techforing-human/employee_Management/#management",
    img: "/HRMS/icons/employee_management.webp",
    content: "Employee Management",
    match: "employee_Management"
  },
  {
    link: "/techforing-human/attendance_management/#management",
    img: "/HRMS/icons/attendance_management.webp",
    content: "Attendance Management",
    match: "attendance_management"
  },
  {
    link: "/techforing-human/performance_management/#management",
    img: "/HRMS/icons/performance_management.webp",
    content: "Performance Management",
    match: "performance_management"
  },
  {
    link: "/techforing-human/noticeboard_management/#management",
    img: "/HRMS/icons/noticeboard_management.webp",
    content: "Noticeboard Management",
    match: "noticeboard_management"
  },
  {
    link: "/techforing-human/report_management/#management",
    img: "/HRMS/icons/report_management.webp",
    content: "Report Management",
    match: "report_management"
  },
  {
    link: "/techforing-human/document_management/#management",
    img: "/HRMS/icons/document_management.webp",
    content: "Documents Management",
    match: "document_management"
  },
  {
    link: "/techforing-human/funds/#management",
    img: "/HRMS/icons/funds.webp",
    content: "Funds Management",
    match: "funds"
  },
]