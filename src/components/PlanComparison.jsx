"use client"
import React, { useState } from 'react';
import p from '../style/plan.module.css';
import { Check, Cross, Key } from './Icon';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const PlanComparison = ({ className }) => {
  const [accordion, setAccordion] = useState(0);
  const [showAll, setShowAll] = React.useState(false)
  const showList = showAll ? lists : lists.slice(0, 20);

  const handleAccordion = (index) => {
    if (index === accordion) {
      setAccordion(null);
      return;
    }
    setAccordion(index);
  }

  return (
    <>
      <div className={`${className} mt-24 lg:block hidden`}>
        <div className="custom-container">
          <h1 className='font-bold text-4xl text-secondary-1 text-center'>Plan Comparison</h1>
          <div className='relative'>
            <table className='w-full mt-12'>
              <thead className='bg-secondary-1 text-white'>
                <tr>
                  <th className='w-4/12 font-medium'></th>
                  <th className='w-2/12 font-medium p-[10px]'>Essential</th>
                  <th className='w-2/12 font-medium p-[10px]'>Enhanced</th>
                  <th className='w-2/12 font-medium p-[10px]'>Extensive</th>
                </tr>
              </thead>
              <tbody>
                {
                  showList.map((list, index) => (
                    <tr key={index} style={{
                      borderBottom: '1px solid #E5E5E5'
                    }}>
                      <td className='py-[10px] px-4 flex items-center gap-[10px]'>
                        <Key />
                        <p className='text-dark-text-2 font-normal text-base'>{list.title}</p>
                      </td>
                      <td className='bg-[#FCFCFC]  '><div className='flex justify-center'>{list.essential ? <Check /> : <Cross />}</div></td>
                      <td className='bg-[#F8F8F8]  '><div className='flex justify-center'>{list.enhanced ? <Check /> : <Cross />}</div></td>
                      <td className='bg-[#F2F2F2]  '><div className='flex justify-center'>{list.extensive ? <Check /> : <Cross />}</div></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            <div className={`absolute pt-5 w-full left-0 ${showAll ? 'h-fit' : 'h-[20%] bottom-0'} flex items-end justify-center`} style={{
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 95.31%)'
            }}
              onClick={() => setShowAll(!showAll)}
            >
              {
                showAll ?
                  <div className='flex flex-col items-center cursor-pointer'>
                    <p className='text-secondary-1 text-base font-normal'>Hide</p>
                    <IoIosArrowUp className='text-3xl text-secondary-1' />
                  </div>
                  :
                  <div className='flex flex-col items-center cursor-pointer'>
                    <p className='text-secondary-1 text-base font-normal'>Get Full view</p>
                    <IoIosArrowDown className='text-3xl text-secondary-1' />
                  </div>
              }
            </div>
          </div>
        </div>
      </div>

      {/* responsive plan comparison */}
      <div className='lg:hidden block px-4'>
        <h2 className='text-[#182F59] text-[24px] font-bold text-center mb-8'>Plan Comparison</h2>

        {
          listPlan.map((listItem, index) => (
            <div key={index} className='planning_div mb-4' >
              <div className='planning_head bg-[#182F59] px-4 py-3' onClick={() => handleAccordion(index)}>
                <h3 className='text-white text-[18px] font-semibold roboto'>{listItem.headTitle}</h3>
                <IoIosArrowDown className={`${accordion === index ? "angel_arrow_img activePlan" : "angel_arrow_img"} text-white text-[24px] `} />
              </div>

              <div className={`${accordion === index ? "planning_para activePlan" : "planning_para"} `}>
                <ul className='px-4'>
                  {
                    (listItem.dataList).map((listPlanItem, i) => (
                      <li key={i} className='flex items-center justify-between mb-5'>
                        <div className='flex items-center'>
                          <img src="/price/KeyOutline.webp" alt="" />
                          <h5 className='roboto leading-6 text-[#333] ml-3 font-medium'>{listPlanItem.title}</h5>
                        </div>
                        <img src="/price/tick.webp" alt="" />
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          ))
        }

      </div>
    </>
  )
}

export default PlanComparison;

const listPlan = [
  {
    headTitle: "Essential",
    dataList: [
      { title: 'Employees List' },
      { title: 'Ex-Employees List' },
      { title: 'Admins List' },
      { title: 'Department List' },
      { title: 'Position List' },
      { title: 'Training' },
      { title: 'Evaluation' },
      { title: 'Resignation' },
      { title: 'Employee Attendance' },
      { title: 'Leave Request' },
      { title: 'Invoice Report' },
      { title: 'Adding New User' }
    ]
  },
  {
    headTitle: "Enhanced",
    dataList: [
      { title: 'Employees List' },
      { title: 'Ex-Employees List' },
      { title: 'Admins List' },
      { title: 'Department List' },
      { title: 'Position List' },
      { title: 'Training' },
      { title: 'Evaluation' },
      { title: 'Resignation' },
      { title: 'Employee Attendance' },
      { title: 'Leave Request' },
      { title: 'Invoice Report' },
      { title: 'Adding New User' }
    ]
  },
  {
    headTitle: "Extensive",
    dataList: [
      { title: 'Employees List' },
      { title: 'Ex-Employees List' },
      { title: 'Admins List' },
      { title: 'Department List' },
      { title: 'Position List' },
      { title: 'Training' },
      { title: 'Evaluation' },
      { title: 'Resignation' },
      { title: 'Employee Attendance' },
      { title: 'Leave Request' },
      { title: 'Invoice Report' },
      { title: 'Adding New User' }
    ]
  }

]

const lists = [
  {
    title: 'Employees List',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Ex-Employees List',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Admins List',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Department List',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Position List',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Training',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Evaluation',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Resignation',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Employee Attendance',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Leave Request',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Total Leave',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Adding New User',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Shifts',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'KPI Score and Bonus',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Promotion',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Events',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Performance Report',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Attendance Report',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Leave Report',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Invoice Report',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Payslip & Commission Slip Report',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Expense Report',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Employee Document',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Expense Document',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Employee Salary Sheet',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Commission Sheet',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Vendor Documents',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'ERF (Employee Regulatory Fund)',
    essential: true,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Job Post List',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Job Post Management',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Direct Application',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Applicant Progress Tracking',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Applicant Tracking by Job Post',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Registered User Database Management',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Job Applicant Database Management',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Direct Communication with Applicants',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Applicant Filtering & Sorting',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Talent Pool Building for Future Jobs',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Integrated Evaluation Tools',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Automated Repetitive Tasks',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Automated Screening Process',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Automated Talent Identification',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Automated Talent Identification',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Automated Candidate Selection',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Predefined Interview Questions',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Faster Candidate Processing with Automated Workflow',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Dedicated Professional Support Team',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Data Security',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Privacy Controls',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Annual Budget',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Monthly Budget',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Project Budget',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'All Sales',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Customer Invoices',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Sales Projection',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Overview',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Report',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Expense',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Vendors',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Expense Invoices',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Project Expense ',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Personal Expense',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Employee Salary',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Commission Request',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Salary & Commission Slip',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Tax Rate Calculation',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Balance Sheet',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Expense Report',
    essential: false,
    enhanced: true,
    extensive: true
  },
  {
    title: 'Management Report',
    essential: false,
    enhanced: true,
    extensive: true
  },
]