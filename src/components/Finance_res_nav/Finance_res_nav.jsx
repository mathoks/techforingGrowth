import React, { useEffect, useState } from 'react';
import "./Finance_res_nav.css"
import { MdArrowForwardIos } from 'react-icons/md';
import Link from 'next/link';
import ResDropNav from '@/section/ResDropNav';

const Finance_res_nav = ({ path }) => {
  const splitPath = path.split('/')[2];
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
    <div className='lg:hidden block finance_sticky z-40'>
      <div className='flex items-center'>
        <div className='w-[30%]'>
          <div className='w-full finance_gradient relative py-[15px] px-3' onClick={() => setDrop(!drop)}>
            <span className='text-[#FFF] font-medium'>Cent</span>
            <MdArrowForwardIos className='absolute top-[50%] translate-y-[-50%] right-1 text-[#FFF] text-[12px]' />

            <div className={`${drop ? "dropdown activeDrop" : "dropdown"} absolute top-full left-0 w-full`}>
              <ResDropNav active='/techforing-cent/' />
            </div>
          </div>
        </div>

        <div className='w-[70%]'>
          <ul className='tab_box bg-[#FFF]'>
            {
              route_pages.map((routes, index) => (
                <li key={index}>
                  <Link href={routes.link} className={`${routes.match === splitPath ? "tab_items ActiveNavigation" : "tab_items"}`}>
                    <div className='tab_items_inside'>
                      <img src={routes.img} alt="" className={`${routes.match === splitPath ? "tab_images ActiveNavigation" : "tab_images"}`} />
                      <span className={`${routes.match === splitPath ? "tab_content  ActiveNavigation" : "tab_content"} ml-3`}>{routes.content}</span>
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

export default Finance_res_nav;

const route_pages = [
  {
    link: "/techforing-cent/budget_management/#management",
    img: "/Finance/icons/budget_management.webp",
    content: "Budget Management",
    match: "budget_management"
  },
  {
    link: "/techforing-cent/sales_management/#management",
    img: "/Finance/icons/sales_management.webp",
    content: "Sales Management",
    match: "sales_management"
  },
  {
    link: "/techforing-cent/cash_flow/#management",
    img: "/Finance/icons/cash_flow.webp",
    content: "Cash Flow",
    match: "cash_flow"
  },
  {
    link: "/techforing-cent/estimate_expense/#management",
    img: "/Finance/icons/estimate_expense.webp",
    content: "Estimates & Expenses",
    match: "estimate_expense"
  },
  {
    link: "/techforing-cent/payroll/#management",
    img: "/Finance/icons/payroll.webp",
    content: "Payroll",
    match: "payroll"
  },
  {
    link: "/techforing-cent/asset/#management",
    img: "/Finance/icons/asset.webp",
    content: "Asset",
    match: "asset"
  },
  {
    link: "/techforing-cent/tax/#management",
    img: "/Finance/icons/tax.webp",
    content: "Tax",
    match: "tax"
  },
  {
    link: "/techforing-cent/financial_report/#management",
    img: "/Finance/icons/report.webp",
    content: "Financial Report",
    match: "financial_report"
  },
]