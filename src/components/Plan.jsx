import React from 'react';
import p from '../style/plan.module.css';
import { Button, Divider } from './SharedComponents';
import { CheckCircle } from './Icon';
import Image from 'next/legacy/image';

const Plan = () => {

  return (
    <div className='custom-container'>
      <h1 className='text-secondary-1 font-bold lg:text-4xl text-[28px] leading-[48px] text-center mb-12'>Simple & Flexible Plan to Choose From</h1>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
        {
          plans.map((plan, index) => (
            <div key={index} className='p-6 flex flex-col gap-6 rounded-[4px] relative overflow-hidden' style={{
              boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.20)',
            }}>
              <h3 style={{
                color: plan?.style?.color
              }} className={`font-bold text-4xl w-fit ${plan?.className}`}>{plan.name}</h3>
              <p style={{
                color: plan?.style?.color
              }} className={`font-normal text-base w-fit ${plan?.className}`}>{plan.subTitle}</p>
              <Divider
                style={{
                  width: '100%',
                  height: '1px',
                  background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,0) 100%)',
                  margin: '0'
                }} />
              <div className='flex flex-col justify-between gap-6 h-full'>
                <div className='relative'>
                  <ul className='flex flex-col gap-4'>
                    {
                      plan.list.map(item => (
                        <li key={index + 1} className='flex gap-2 items-center'>
                          <CheckCircle />
                          <p className='text-base font-light text-dark-text-2 '>{item}</p>
                        </li>
                      ))
                    }
                  </ul>
                  <a href={plan.btnLink} className='cursor-pointer absolute bottom-0 right-0 roboto text-[14px] leading-6 text-green'>more..</a>
                </div>
                <Button text={plan.btnText} link={plan.btnLink} style={{ fontWeight: 400 }} />
              </div>
              {
                plan.free && (
                  <img src='/freeTag.webp' alt='free tag' className='absolute top-0 right-0 w-[100px] h-[100px]' />
                )
              }
            </div>
          )
          )
        }
      </div>
    </div>
  )
}

export default Plan;

const plans = [
  {
    name: 'Essential',
    free: null,
    subTitle: 'HRMS',
    list: [
      'Administration',
      'Attendance',
      'Performance',
      'Noticeboard',
      'Report, Document Management',
      'Fund Overview',
    ],
    btnText: 'Get Started',
    btnLink: '#dev',
    className: 'text-LG-1',
  },
  {
    name: 'Enhanced ',
    free: null,
    subTitle: 'HRMS & Recruitment',
    list: [
      'Job Board',
      'User Repository',
      'Applicants List',
      'Evaluation Process',
      'Candidate Processing',
      'Support',
    ],
    btnText: 'Let’s Talk',
    btnLink: '#',
    className: 'text-LG-2',
  },
  {
    name: 'Extensive',
    free: null,
    subTitle: 'HRMS, Recruitment & Finance Manager',
    list: [
      'Budget',
      'Sales',
      'Cash Flow',
      'Estimates & Expenses',
      'Payroll, Tax',
      'Financial Report',
    ],
    btnText: 'Contact Sales',
    btnLink: '#',
    className: 'text-LG-3',
  },
  {
    name: 'Add-on',
    free: true,
    subTitle: 'Get Started - It’s Free',
    list: [
      'Attendance',
      'Salary',
      'Documents',
      'KPI Score',
      'Survey, Official',
      'TechForing Official',
    ],
    btnText: 'Get Started - It’s Free',
    btnLink: '#',
    className: '',
    style: {
      color: 'var(--primary)',
    }
  }
]