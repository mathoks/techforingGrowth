"use client"
import React from 'react';
import Finance_Banner_section from '@/components/Finance_Banner_section/Finance_Banner_section';
import Finance_routes_nav from '@/components/Finance_routes_nav/Finance_routes_nav';
import { usePathname } from 'next/navigation';
import Accordion_component from '@/components/Accordion_component/Accordion_component';
import Manual_Finanace_section from '@/components/Manual_Finanace_section/Manual_Finanace_section';
import Finance_software_details from '@/components/Finance_software_details/Finance_software_details';
import Finance_software_details_two from '@/components/Finance_software_details_two/Finance_software_details_two';
import Finance_res_nav from '@/components/Finance_res_nav/Finance_res_nav';
import Header from '@/components/Header';
import { useGlobalContext } from "@/context/globalContext";
import { Button } from '@/components/SharedComponents';
import FooterCTA from '@/section/FooterCTA';
import AdvantageVsDisadvantage from "@/section/AdvantageVsDisadvantage";
const Cash_flow = () => {
  const { setOpenScheduleDemo, setOpenScheduleForm } = useGlobalContext();
  const pathName = usePathname();
  const path = usePathname();
  const splits = path.split("/")[2];

  // For Manual_Finance_Section system follow up
  const manual_resource = {
    headTitle: "The Hidden Costs of Manual Cash Flow Management",
    img1: "/Finance/Cash_flow/icons/analysis.webp",
    img2: "/Finance/Cash_flow/icons/time.webp",
    img3: "/Finance/Cash_flow/icons/setting_time.webp",
    img4: "/Finance/Cash_flow/icons/file_list.webp",
    img5: "/Finance/Cash_flow/icons/calculator.webp",
    manualImage: "/Finance/Cash_flow/Finance_cash_flow.webp",
    content1: "Lack of real-time data access can limit your ability to make timely and informed financial decisions.",
    content2: "Manually inputting and processing financial data is a time-intensive task that could be better spent on strategic HR activities.",
    content3: "Reduced Productivity: HR professionals spend excessive time on financial tasks that could be streamlined with automation.",
    content4: "Ineffective Reporting: Generating comprehensive financial reports manually can be cumbersome and delay decision-making.",
    content5: "Manual calculations and data entry can lead to errors, resulting in financial inaccuracies that may be costly to rectify."
  }

  const details01 = {
    ScreenShot: '/Finance/Cash_flow/screenshot_1.svg',
    headTitle: "Easily Track Income and Expenses",
    content01: "HR professionals often struggle with manually tracking income and expenses, making it time-consuming and prone to errors. This can lead to financial inaccuracies and delayed decision-making.",
    content02: "With the Cash Flow Overview feature, get a simplified, interactive overview of revenue projections and sales data. HR teams can easily track income and expenses while managing bills and invoices through our user-friendly interface."
  }

  const details02 = {
    ScreenShot: '/Finance/Cash_flow/screenshot_2.webp',
    headTitle: "Get Clear Cash Flow Reports",
    content01: "Manually generating financial reports becomes challenging and cumbersome for HR professionals, resulting in inefficiencies, reporting delays, and difficulties in financial analysis.",
    content02: "The Cash Flow Report feature helps HR professionals by delivering monthly financial summaries, easy-to-understand graphs, and real-time financial control so you can make data-driven decisions right on time, and generate detailed financial reports whenever you need."
  }

  ///  Accordion list element
  const accordion_list = [
    {
      headContent: "What is the HRMS Cash Flow Management Module?",
      paraContent: "The HRMS Cash Flow Management Module is a feature within our HR management software designed to help organizations efficiently track, manage, and analyze their cash flow."
    },
    {
      headContent: "How does the Cash Flow Overview feature benefit HR professionals?",
      paraContent: "The Cash Flow Overview feature provides HR professionals with interactive revenue projections, sales charts, and simplified income and expense tracking, allowing them to make informed financial decisions and streamline financial processes."
    },
    {
      headContent: "What does the Cash Flow Report feature offer HR teams?",
      paraContent: "The Cash Flow Report feature offers HR teams monthly summaries, visualized cash flow data, and enhanced financial control. It simplifies financial reporting, making data-driven decisions more accessible."
    },
    {
      headContent: "How can automated cash flow management save HR professionals time?",
      paraContent: "Automated cash flow management eliminates manual data entry, reducing the time spent on financial tasks and enabling HR professionals to focus on strategic HR activities."
    },
    {
      headContent: "Can the Cash Flow Module help with financial planning?",
      paraContent: "Yes, the Cash Flow Module aids in financial planning by providing real-time insights, projections, and historical data, making it easier to forecast and plan for future financial needs."
    },
    {
      headContent: "Is the software scalable for different organization sizes?",
      paraContent: "Absolutely! Our HRMS Cash Flow Management Module is scalable and suitable for organizations of various sizes, from small businesses to large enterprises."
    },
    {
      headContent: " How user-friendly is the interface for HR professionals?",
      paraContent: "The interface is designed with simplicity in mind. It's intuitive and user-friendly, ensuring that HR professionals can navigate and use the software with ease."
    },
    {
      headContent: "What kind of support is available for users of the Cash Flow Module?",
      paraContent: "We provide dedicated customer support to assist users at every step. Our team is committed to helping you make the most of the module for your organization's success."
    },
    {
      headContent: "Can the Cash Flow Module integrate with other HRMS features?",
      paraContent: "Yes, our Cash Flow Module is designed to seamlessly integrate with other HRMS features, ensuring a cohesive and efficient HR and financial management experience."
    },
    {
      headContent: "How can I get started with the Cash Flow Management Module for my organization?",
      paraContent: "To get started, you can either request a demo or contact us to discuss your organization's specific needs and explore how our Cash Flow Module can benefit you."
    }
  ]

  return (
    <>
      <section className='lg:pt-[60px] lg:pb-[60px] pt-[80px] mb-6 px-4'>
        <div className='main_container flex lg:flex-row flex-col-reverse justify-between items-center'>
          <div className="lg:w-[45%] w-full">
            <h2 className='noto text_gradient_finance lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-4 lg:block hidden'>Automate Your Company’s Cash Flow Tracking</h2>
            <p className='roboto text-light-gray font-light text-[14px] lg:text-[16px] lg:leading-7 leading-[24px] text-justify lg:ml-0 ml-3'>Tired of manual cash flow management hassles? Don't let paperwork, spreadsheet headaches, and sleepless nights overwhelm you. With TechForing Cent's Cash Flow Management feature, simplify your financial processes, replacing complexity with a paperless system for your organization’s cash flow.</p>
          </div>

          <div className="lg:w-[55%] w-full flex lg:flex-row flex-col justify-end lg:mb-0 mb-12">
            <h2 className='noto text_gradient_finance lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-8 lg:hidden block '>Automate Your Company’s Cash Flow Tracking</h2>
            <div className='lg:w-[530px] w-[200px] lg:mx-0 mx-auto lg:h-[395px] h-full relative'>
              <img src="/Finance/Cash_flow/combine_image/blob.webp" alt="" />
              <img src="/Finance/Cash_flow/combine_image/person.webp" alt="" className='absolute lg:bottom-[5px] bottom-[1px] left-[50%] translate-x-[-50%]' />
            </div>
          </div>
        </div>
      </section>

      {/* 4th section individual section start */}
      <section className="lg:pt-20 pt-3 lg:pb-16 pb-16 px-4">
        <div className="main_container">
          <h2 className="lg:text-center text-left inter lg:mb-8 mb-5 lg:text-[36px] text-[20px] font-bold lg:leading-[50px] leading-8 text_gradient_finance">Discover a Powerful Cash Flow Management</h2>
          <p className="lg:mb-16 mb-10 leading-6 text-light-gray lg:px-16 px-0 lg:text-center text-justify">Simplify financial tasks, get real-time insights, and empower your organization to make informed decisions effortlessly.</p>

          <div className="flex lg:flex-row flex-col justify-between gap-8">
            <div className="lg:w-[50%] w-full lg:py-[50px] py-5 lg:px-[100px] px-8 bg_angular">
              <img src="/Finance/Cash_flow/cash_flow_overview.webp" alt="" className="block mx-auto multiShadow mb-5" />
              <h3 className="inter font-bold text-[18px] leading-[52px] text_gradient_finance">Cash Flow Overview</h3>
              <p className="font-light leading-6 text-light-gray">Gain instant insights into your organization's financial health with interactive revenue projections, sales charts, and effortless income and expense tracking.</p>
            </div>

            <div className="lg:w-[50%] w-full lg:py-[50px] py-5 lg:px-[100px] px-8 bg_angular">
              <img src="/Finance/Cash_flow/cash_flow_report.webp" alt="" className="block mx-auto multiShadow mb-5" />
              <h3 className="inter font-bold text-[18px] leading-[52px] text_gradient_finance">Cash Flow Report</h3>
              <p className="font-light leading-6 text-light-gray">Visualize your financial data with monthly summaries, graphs, and complete financial control, making data-driven decisions a breeze.</p>
            </div>
          </div>
        </div>
      </section>
      {/* 4th section individual section end */}

      {/* business strength policy */}
      <Manual_Finanace_section manual_resource={manual_resource} />

      {/* Employee organization */}
      <section className='cashFlow_organized lg:mb-16 mb-8'>
        <div className='main_container flex lg:flex-row flex-col justify-between items-center lg:gap-6 gap-0'>
          <div className='lg:w-[55%] w-full'>
            <p className='roboto lg:text-[28px] text-[14px] lg:leading-[48px] leading-[24px] font-light text-center text-[#FFF] lg:px-0 px-5'>Reduce <span className="sura lg:text-[82px] text-[24px] font-bold">82<span className='lg:text-[41px] text-[12px]'>%</span></span> time spent on cash flow management</p>
          </div>

          <div className='middle_hr mt-4 mb-4'></div>

          <div className='lg:w-[45%] w-full left_line'>
            <h3 className='roboto lg:text-[37.5px] text-[16px] lg:leading-[44px] leading-[24px] text-center lg:text-left text-[#FFF]'>Say <span className="text-green font-semibold">Goodbye </span>to endless paperwork and spreadsheet headaches </h3>
            <div className="lg:mt-[40px] mt-5 flex md:justify-start justify-center">
              <Button className={'action_btn2'} text={'Get Started'} onClick={() => setOpenScheduleForm(true)} />
            </div>
          </div>
        </div>
      </section>
      <AdvantageVsDisadvantage
        details={details01}
        imgSrc={details01.ScreenShot}
      />
      {/* right data schedule field  part-2 (common) */}
      <section className='lg:py-[100px] py-[40px] px-4 overflow-hidden lg:mb-20 mb-8'>
        <div className='main_container flex_container relative'>
          <div className='absolute top-[50%] left-0 w-[40%] h-[120%] bg-[#EAEAEA] translate-x-[-100px] translate-y-[-50%] border_top_right_radius lg:block hidden'></div>
          <div className='absolute top-[50%] translate-y-[-50%] translate-x-[-25px] left-0 w-[640px] h-[440px] lg:block hidden'>
            <img src="/Finance/Cash_flow/screenshot_2.webp" alt="" className='[670px] h-[380px] lg:object-contain object-none absolute top-[50%] translate-y-[-50%]' />
          </div>

          <div className='lg:w-[50%] lg:ml-auto ml-0 w-full'>
            <Finance_software_details_two details4={details02} />
          </div>
        </div>
      </section>

      {/* Business team section part-2 (common) */}
      <section className="bg-[#FFF] shadow-shadow1x text-[#FAFAFA] lg:my-10 my-0 overflow-hidden">
        <div className="main_container flex justify-between items-center lg:py-[80px] py-[20px] px-4 relative">
          <div className="w-[51%] lg:pl-[18px] pl-0">
            <h5 className='inter font-medium lg:text-[18px] text-[10px] lg:mb-4 mb-2'><span className='text-green'>Don't</span> <span className='text_gradient_finance'>Let Manual Processes Hold You Back!</span></h5>
            <h3 className='inter font-extralight lg:text-[28px] text-[14px]'><span className='text_gradient_finance'>Simplify your financial journey with our</span> <span className='text-green font-medium lg:text-[37.5px] text-[15px]'>Cash Flow Management</span> <span className='text_gradient_finance'>module</span></h3>

            <div className="lg:mt-10 mt-5 text-left">
              <Button className={'action_btn'} text={'Schedule A Consultation'} onClick={() => setOpenScheduleDemo(true)} />
            </div>
          </div>

          <div className="image_container2 lg:translate-x-[110px] translate-x-0">
            <img src="/Finance/Cash_flow/CashFlow_business_team.webp" alt="" className="w-ful h-full" />
          </div>
        </div>
      </section>

      {/* Frequently Ask Questions */}
      <Accordion_component accordion_list={accordion_list} />
      <div className='lg:mt-24 mt-12'>
        <FooterCTA
          imgSrc='/Finance/Cash_flow/footer_bottom_cta.svg'
          title={
            <span className='flex flex-col lg:items-start items-center'>
              <span className='lg:text-[37.5px] text-[15px]'>
                Take <span className="text-green font-semibold">Control</span> of Your Cash Flow!
              </span>
              <span className="lg:text-[18px] text-[12px] inter text-light-white2 lg:mb-2 mb-2">
                Experience streamlined financial management like never before
              </span>
            </span>
          }
          button={
            <Button className={'action_btn2'} text={'Contact Us'} onClick={() => setOpenScheduleForm(true)} />
          }
        />
      </div>
    </>
  );
};

export default Cash_flow;