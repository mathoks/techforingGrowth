"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { ImArrowRight2 } from 'react-icons/im';

const Account_tab = [
  {
    img: "/Home/Accounts_icons/Budget.webp",
    img2: "/Home/Accounts_icons/Budget_white.webp",
    content: "Budget",
    match: "Budget"
  },
  {
    img: "/Home/Accounts_icons/cart.webp",
    img2: "/Home/Accounts_icons/cart_white.webp",
    content: "Sales",
    match: "Sales"
  },
  {
    img: "/Home/Accounts_icons/cash_money.webp",
    img2: "/Home/Accounts_icons/cash_money_white.webp",
    content: "Cash Flow",
    match: "Cash"
  },
  {
    img: "/Home/Accounts_icons/expense.webp",
    img2: "/Home/Accounts_icons/expense_white.webp",
    content: "Expense",
    match: "Expense"
  },
  {
    img: "/Home/Accounts_icons/payroll.webp",
    img2: "/Home/Accounts_icons/payroll_white.webp",
    content: "Payroll",
    match: "Payroll"
  },
  {
    img: "/Home/Accounts_icons/Asset.webp",
    img2: "/Home/Accounts_icons/Asset_white.webp",
    content: "Asset",
    match: "Asset"
  },
  {
    img: "/Home/Accounts_icons/Tax.webp",
    img2: "/Home/Accounts_icons/Tax_white.webp",
    content: "Tax",
    match: "Tax"
  },
  {
    img: "/Home/Accounts_icons/Report.webp",
    img2: "/Home/Accounts_icons/Report_white.webp",
    content: "Report",
    match: "Report"
  },
]

const Accounting = () => {
  const [accountSolution, setAccountSolution] = useState("Budget");

  const handleAccount = (index) => {
    setAccountSolution(index);
  }

  useEffect(() => {
    const array = [0, -12.5, -25, -37.5, -50, -62.5, -75, -87.5];
    const account_contents = document.querySelector(".account_contents");

    if (accountSolution === "Sales") {
      account_contents.style.transform = `translateX(${array[1]}%)`;
    }
    else if (accountSolution === "Cash") {
      account_contents.style.transform = `translateX(${array[2]}%)`;
    }
    else if (accountSolution === "Expense") {
      account_contents.style.transform = `translateX(${array[3]}%)`;
    }
    else if (accountSolution === "Payroll") {
      account_contents.style.transform = `translateX(${array[4]}%)`;
    }
    else if (accountSolution === "Asset") {
      account_contents.style.transform = `translateX(${array[5]}%)`;
    }
    else if (accountSolution === "Tax") {
      account_contents.style.transform = `translateX(${array[6]}%)`;
    }
    else if (accountSolution === "Report") {
      account_contents.style.transform = `translateX(${array[7]}%)`;
    }
    else {
      account_contents.style.transform = `translateX(${array[0]}%)`;
    }

  }, [accountSolution]);


  useEffect(() => {
    const account_data = document.querySelector(".account_data");
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
      account_data.scrollLeft -= movementX;
      startX = touchX;
    };

    account_data.addEventListener("touchmove", dragging);
    account_data.addEventListener("touchstart", startDragging);
    account_data.addEventListener("touchend", stopDragging);

    return () => {
      account_data.removeEventListener("touchmove", dragging);
      account_data.removeEventListener("touchstart", startDragging);
      account_data.removeEventListener("touchend", stopDragging);
    }
  }, [])

  const accountData = account_tab_contents.filter(account => account.match === accountSolution);

  return (
    <>
      <div className='mt-32 lg:block hidden'>
        <div className='main_container'>
          <h1 className="roboto text-[36px] leading-[48px] font-bold text_gradient_finance text-center">TechForing Cent: Stay Ahead in Financial Management</h1>

          <div className='mt-10'>
            <ul className='flex justify-between items-center gap-4 account_tab'>
              {
                Account_tab.map((account, index) => (
                  <li key={index} className={`${accountSolution === account.match ? "activeTabs3" : ""}  flex items-center justify-center gap-4 py-3 px-1 shadow-shadow6.5x rounded-lg`} onClick={() => setAccountSolution(account.match)}>
                    {
                      accountSolution === account.match ? <img src={account.img2} alt="" className='w-[25px] h-[20px] object-contain' /> : <img src={account.img} alt="" className='w-[25px] h-[20px] object-contain' />
                    }
                    <p className='roboto text-[#182F59]'>{account.content}</p>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className='mt-32 mb-24 flex justify-between items-center gap-16'>
            {
              accountData.map((contents, i) => {
                return (
                  <div key={i} className='w-[60%]'>
                    <h3 className='lg:w-[70%] w-full roboto text-[28px] font-medium text-[#333] mb-6'>{contents.headTitle}</h3>
                    <p className='roboto text-[16px] leading-6 text-light-gray'>{contents.para}</p>

                    <div className='flex justify-between items-center gap-2 mt-10'>
                      <div className='w-[85%]'>
                        <ul className='flex justify-between items-center home_list'>
                          {
                            (contents.list).map((listElement, index) => {
                              const listLen = (contents.list).length;

                              return (
                                <li key={index} className={`text-center w-[${"100% / listLen"}] `}>
                                  <div className='px-2'>
                                    <img src={listElement.icon} alt="" className='mx-auto mb-2' />
                                    <h4 className='text-light-gray'>{listElement.icon_content}</h4>
                                  </div>
                                </li>
                              )
                            })
                          }
                        </ul>
                      </div>

                      <div className='w-[15%] '>
                        <Link href={`${contents.link}`} className='block bg-green px-[22px] py-[10px] rounded-lg'>
                          <HiArrowNarrowRight className="text-[#FAFAFA] mx-auto text-[26px]" />
                          <span className='text-[#FAFAFA] text-center block'>Explore More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              }
              )}

            <div className='w-[40%] translate-x-[-10px]'>
              <div className="relative">
                <img src="/Home/Accounts_icons/account_images.webp" alt="" />

                <img src="/Home/Accounts_icons/anim_01.webp" alt="" className="accounting_anim_01 shadow-iconShadow" />
                <img src="/Home/Accounts_icons/anim_02.webp" alt="" className="accounting_anim_02 shadow-iconShadow" />
                <img src="/Home/Accounts_icons/anim_03.webp" alt="" className="accounting_anim_03 shadow-iconShadow" />
                <img src="/Home/Accounts_icons/anim_04.webp" alt="" className="accounting_anim_04 shadow-iconShadow" />
                <img src="/Home/Accounts_icons/anim_05.webp" alt="" className="accounting_anim_05 shadow-iconShadow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* responsive */}
      <div className='lg:hidden block py-10 mx-4 overflow-x-hidden'>
        <h1 className="roboto text-[22px] leading-[32px] font-bold text_gradient_finance text-center mb-6">Powerful Accounting Software: Stay Ahead in Financial Management</h1>
        <div className='account_div'>
          <ul className='account_data'>
            {
              Account_tab.map((account, index) => (
                <li key={index} className={`${accountSolution === account.match ? "account_listing_tab active_account" : "account_listing_tab"} shadow-shadow6.5x rounded-lg`} onClick={() => handleAccount(account.match)}>
                  <div className='flex items-center justify-center w-[150px]'>
                    {
                      accountSolution === account.match ? <img src={account.img2} alt="" className='w-[25px] h-[20px] object-contain' /> : <img src={account.img} alt="" className='w-[25px] h-[20px] object-contain' />
                    }
                    <p className='roboto ml-2'>{account.content}</p>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="mt-10 relative z-10">
          <div className='bg-[#FFF] py-6 px-4 shadow-shadow6x rounded-lg'>
            <div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[90%] h-[105%] bg-[#D3D8E1] z-[-1] border-[2px] border-solid border-[#06303A] rounded-[20px] shadow-shadow7x'></div>
            <div className="account_main_contents">
              <div className="account_contents">
                {
                  account_tab_contents.map((account, i) => (
                    <div key={i} className='w-full'>
                      <h3 className='roboto text-[#333] text-[14px] leading-5 font-medium mb-5 border-l-[3px] border-solid border-[#06303A] pl-3'>{account.headTitle}</h3>
                      <p className='text-[#494949] text-[14px] leading-6 font-light mb-5 text-justify'>{account.para}</p>

                      <ul className='flex justify-between gap-5 mb-8'>
                        {
                          (account.list).map((listItems, index) => (
                            <li key={index}>
                              <div className='text-center'>
                                <img src={listItems.icon} alt="" className='mx-auto' />
                                <span className='font-bold text-[10px] text-light-gray leading-4 block mt-2 opacity-80'>{listItems.icon_content}</span>
                              </div>
                            </li>
                          ))
                        }
                      </ul>

                      <a href={account.link} className='text-[#FFF] bg-green rounded-[20px] w-[65%] mx-auto text-center flex items-center justify-center py-[6px]'>Explore More <ImArrowRight2 className="text-white ml-3" /></a>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Accounting;

const account_tab_contents = [
  {
    match: "Budget",
    headTitle: "Master Your Financial Planning",
    para: "Create, manage, and track your organization’s annual, monthly, and project budgets seamlessly with the budget module. Get a comprehensive view of your financial landscape, streamline your budgeting process, make informed decisions, and achieve financial stability for your business.",
    link: "/techforing-cent/budget_management#management",
    list: [
      {
        icon: "/Home/Accounts_icons/Budget_creation.webp",
        icon_content: "Budget creation"
      },
      {
        icon: "/Home/Accounts_icons/Budget_Management.webp",
        icon_content: "Budget Management"
      },
      {
        icon: "/Home/Accounts_icons/Budget_Tracking.webp",
        icon_content: "Budget Tracking"
      },
      {
        icon: "/Home/Accounts_icons/Budget_history.webp",
        icon_content: "Budget history list"
      }
    ]
  },
  {
    match: "Sales",
    headTitle: "Maximize Sales Efficiency",
    para: "Get a wide range of powerful features designed to optimize your sales processes, enhance customer engagement, and drive revenue growth. From comprehensive sales tracking to streamlined invoice management, our solution empowers your business to achieve sales excellence",
    link: "/techforing-cent/sales_management#management",
    list: [
      {
        icon: "/Home/Accounts_icons/Sales_Processes.webp",
        icon_content: "Streamline Sales Processes"
      },
      {
        icon: "/Home/Accounts_icons/Customer_Engagement.webp",
        icon_content: "Enhance Customer Engagement"
      },
      {
        icon: "/Home/Accounts_icons/Flow_Management.webp",
        icon_content: "Improve Cash Flow Management"
      },
      {
        icon: "/Home/Accounts_icons/Actionable_Insights.webp",
        icon_content: "Gain Actionable Insights"
      }
    ]
  },
  {
    match: "Expense",
    headTitle: "Comprehensive Expense Management",
    para: "Track, analyze, and optimize your organization’s expenses while maintaining control over your budget. Make real-time data-driven financial decisions with our expense management module.",
    link: "/cash_flow#management",
    list: [
      {
        icon: "/Home/Accounts_icons/Expense_Overview.webp",
        icon_content: "Expense Overview"
      },
      {
        icon: "/Home/Accounts_icons/Vendor_Management.webp",
        icon_content: "Vendor Management"
      },
      {
        icon: "/Home/Accounts_icons/Project_Expense.webp",
        icon_content: "Project Expense Monitoring"
      },
      {
        icon: "/Home/Accounts_icons/Personal_Expense.webp",
        icon_content: "Personal Expense Tracking"
      }
    ]
  },
  {
    match: "Payroll",
    headTitle: "Accurate Salary Processing",
    para: "Experience streamlined payroll management, accurate salary processing, and simplified commission management with the payroll module. From salary tracking to handling commission requests, the payroll module got you covered.",
    link: "/techforing-cent/estimate_expense#management",
    list: [
      {
        icon: "/Home/Accounts_icons/Employee_Salary.webp",
        icon_content: "Employee Salary Management"
      },
      {
        icon: "/Home/Accounts_icons/Commission_Request.webp",
        icon_content: "Commission Request Tracking"
      },
      {
        icon: "/Home/Accounts_icons/Payslip_Generation.webp",
        icon_content: "Payslip Generation & Overview"
      },
      {
        icon: "/Home/Accounts_icons/Commission_Slip.webp",
        icon_content: "Commission Slip Management"
      }
    ]
  },
  {
    match: "Cash",
    headTitle: "Optimize Cash Flow, Gain Financial Insights",
    para: "Get a comprehensive view of your organization’s cash flow, allowing you to effectively manage your finances and make informed decisions with features like detailed overviews, insightful reports, and interactive charts.",
    link: "/techforing-cent/payroll#management",
    list: [
      {
        icon: "/Home/Accounts_icons/Comprehensive_Overview.webp",
        icon_content: "Comprehensive Overview"
      },
      {
        icon: "/Home/Accounts_icons/Real_time_Monitoring.webp",
        icon_content: "Real-time Monitoring"
      },
      {
        icon: "/Home/Accounts_icons/Financial_Analysis.webp",
        icon_content: "Financial Analysis"
      },
      {
        icon: "/Home/Accounts_icons/Forecasting.webp",
        icon_content: "Forecasting Capabilities"
      }
    ]
  },
  {
    match: "Asset",
    headTitle: "Simplified Asset Management",
    para: "Get complete control over your organization’s assets. The user-friendly asset management module ensures that you can monitor, analyze, and optimize your organization’s assets, track asset details and purchase information, and generate insightful reports from one comprehensive solution.",
    link: "/techforing-cent/asset#management",
    list: [
      {
        icon: "/Home/Accounts_icons/Track_Assets.webp",
        icon_content: "Track Assets"
      },
      {
        icon: "/Home/Accounts_icons/Asset_Analysis.webp",
        icon_content: "Categorized Asset Analysis"
      },
      {
        icon: "/Home/Accounts_icons/New_Asset.webp",
        icon_content: "Add New Asset"
      },
      {
        icon: "/Home/Accounts_icons/Asset_List.webp",
        icon_content: "Comprehensive Asset List"
      }
    ]
  },
  {
    match: "Tax",
    headTitle: "Effortless Tax Management",
    para: "Effortlessly handle tax-related processes, ensure accurate reporting, and maintain compliance with the powerful Tax management module. With easy access to important details, insightful reports, and easy-to-access editing capabilities, managing taxes has never been easier.",
    link: "/techforing-cent/tax#management",
    list: [
      {
        icon: "/Home/Accounts_icons/Tax_Returns.webp",
        icon_content: "Tax Returns and Payments"
      },
      {
        icon: "/Home/Accounts_icons/Rate_Management.webp",
        icon_content: "Tax Rate Management"
      },
      {
        icon: "/Home/Accounts_icons/Rate_Overview.webp",
        icon_content: "Tax Rate Overview"
      }
    ]
  },
  {
    match: "Report",
    headTitle: "Empower Financial Decision-Making",
    para: "Take control of your organization’s financial data: streamline financial reporting processes, uncover key insights, and make data-driven decisions with the Financial Reporting module, so you can stay on top of your organization’s financial health and drive growth with confidence.",
    link: "/techforing-cent/financial_report#management",
    list: [
      {
        icon: "/Home/Accounts_icons/Balance_Sheet.webp",
        icon_content: "Detailed Balance Sheet"
      },
      {
        icon: "/Home/Accounts_icons/law.webp",
        icon_content: "Balance management"
      },
      {
        icon: "/Home/Accounts_icons/Expense_Report.webp",
        icon_content: "Detailed Expense Report"
      },
      {
        icon: "/Home/Accounts_icons/Report_Distribution.webp",
        icon_content: "Report Distribution"
      }
    ]
  }
]