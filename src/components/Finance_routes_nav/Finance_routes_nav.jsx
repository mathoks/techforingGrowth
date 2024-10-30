import React, { useState, useEffect } from 'react';
import "./Finance_routes_nav.css"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Finance_routes_nav = ({ path }) => {
   const pathname = usePathname();
   const [activeRoute, setActiveRoute] = useState('budget_management');

   useEffect(() => {
      const currentPath = pathname;
      if (currentPath === '/techforing-cent' || currentPath === '/techforing-cent/') {
         setActiveRoute('budget_management');
      } else {
         const matchedRoute = route_pages.find(route => currentPath.includes(route.match));
         if (matchedRoute) {
            setActiveRoute(matchedRoute.match);
         }
      }
   }, [pathname]);

   const route_pages = [
      {
         link: "/techforing-cent/budget_management/#management",
         img: "/Finance/icons/budget_management.webp",
         img2: "/Finance/icons/budget_management_white.webp",
         content1: "Budget",
         content2: "Management",
         match: "budget_management"
      },
      {
         link: "/techforing-cent/sales_management/#management",
         img: "/Finance/icons/sales_management.webp",
         img2: "/Finance/icons/sales_management_white.webp",
         content1: "Sales",
         content2: "Management",
         match: "sales_management"
      },
      {
         link: "/techforing-cent/cash_flow/#management",
         img: "/Finance/icons/cash_flow.webp",
         img2: "/Finance/icons/cash_flow_white.webp",
         content1: "Cash Flow",
         content2: "",
         match: "cash_flow"
      },
      {
         link: "/techforing-cent/estimate_expense/#management",
         img: "/Finance/icons/estimate_expense.webp",
         img2: "/Finance/icons/estimate_expense_white.webp",
         content1: "Estimates",
         content2: "& Expenses",
         match: "estimate_expense"
      },
      {
         link: "/techforing-cent/payroll/#management",
         img: "/Finance/icons/payroll.webp",
         img2: "/Finance/icons/payroll_white.webp",
         content1: "Payroll",
         content2: "",
         match: "payroll"
      },
      {
         link: "/techforing-cent/asset/#management",
         img: "/Finance/icons/asset.webp",
         img2: "/Finance/icons/asset_white.webp",
         content1: "Asset",
         content2: "",
         match: "asset"
      },
      {
         link: "/techforing-cent/tax/#management",
         img: "/Finance/icons/tax.webp",
         img2: "/Finance/icons/tax_white.webp",
         content1: "Tax",
         content2: "",
         match: "tax"
      },
      {
         link: "/techforing-cent/financial_report/#management",
         img: "/Finance/icons/report.webp",
         img2: "/Finance/icons/report_white.webp",
         content1: "Financial",
         content2: "Report",
         match: "financial_report"
      }
   ];

   return (
      <div className={`pages_list_finance main_container mt-[60px] lg:block hidden overflow-hidden`}>
         <ul className='route_list_finance'>
            {route_pages.map((items, index) => (
               <li 
                  key={index} 
                  className={`${(items.match === activeRoute) ? "active" : ""} h-[70px]`}
                  onClick={() => setActiveRoute(items.match)}
               >
                  <Link href={items.link}>
                     <span className="sub_route_list_finance"></span>
                     {
                        items.match === activeRoute 
                           ? <img src={items.img2} alt="" />
                           : <img src={items.img} alt="" className="route_image_finance" />
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

export default Finance_routes_nav;