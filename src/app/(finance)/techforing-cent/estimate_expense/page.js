"use client"
import React from 'react';
import Finance_Banner_section from '@/components/Finance_Banner_section/Finance_Banner_section';
import Finance_routes_nav from '@/components/Finance_routes_nav/Finance_routes_nav';
import { usePathname } from 'next/navigation';
import Accordion_component from '@/components/Accordion_component/Accordion_component';
import Manual_Finanace_section from '@/components/Manual_Finanace_section/Manual_Finanace_section';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Finance_software_details from '@/components/Finance_software_details/Finance_software_details';
import Finance_software_details_two from '@/components/Finance_software_details_two/Finance_software_details_two';
import Finance_res_nav from '@/components/Finance_res_nav/Finance_res_nav';
import Header from '@/components/Header';
import { useGlobalContext } from "@/context/globalContext";
import { Button } from '@/components/SharedComponents';
import FooterCTA from '@/section/FooterCTA';
import AdvantageVsDisadvantage from "@/section/AdvantageVsDisadvantage";

const Estimate_expense = () => {
  const { setOpenScheduleDemo, setOpenScheduleForm } = useGlobalContext();
  const pathName = usePathname();
  const path = usePathname();
  const splits = path.split("/")[2];

  // For Manual_Finance_Section system follow up
  const manual_resource = {
    headTitle: "Why Move Away from Manual Estimate & Expense Management?",
    img1: "/Finance/Estimate&Expense/icons/file_err.webp",
    img2: "/Finance/Estimate&Expense/icons/setting_err.webp",
    img3: "/Finance/Estimate&Expense/icons/setting_time.webp",
    img4: "/Finance/Estimate&Expense/icons/file_secure.webp",
    img5: "/Finance/Estimate&Expense/icons/alert.webp",
    manualImage: "/Finance/Estimate&Expense/Finance_estimate_expense.webp",
    content1: "Manually entering data and handling documents can lead to errors, lost receipts, and difficulties in maintaining a clear audit trail.",
    content2: "Tracking expenses manually can result in inaccuracies, a lack of real-time insights, cumbersome paperwork, and challenges in tracking unusual expenses.",
    content3: "Inefficiencies in approval workflows, legacy system integration, and mobility issues for field teams can cause delays and frustrations.",
    content4: "Manual processes pose data security risks, and compliance may be compromised without consistent enforcement and monitoring.",
    content5: "Managing vendor relationships manually can be challenging, and dealing with multiple currencies can lead to errors and confusion."
  }

  const details01 = {
    ScreenShot: '/Finance/Estimate&Expense/screenshot_1.svg',
    headTitle: "Comprehensive Expense Management",
    content01: "HR professionals often spend excessive time manually reviewing, tracking, and approving expenses.",
    content02: "TechForing Cent's automated expense tracking and approval workflows reduce manual intervention. Predefined expense categories and approval hierarchies also accelerate the process."
  }
  const details02 = {
    ScreenShot: '/Finance/Estimate&Expense/screenshot_2.svg',
    headTitle: "Enhanced Vendor Relationship",
    content01: "Maintaining strong vendor relationships can be challenging without organized, detailed vendor data and regular communication.",
    content02: "Easily centralize vendor information within the module, including contact details, transaction history, and agreements. Automated alerts also keep you updated on contract renewals and important vendor interactions."
  }
  const details03 = {
    ScreenShot: '/Finance/Estimate&Expense/screenshot_3.svg',
    headTitle: "Automate Expense Invoice Management",
    content01: "Manually handling invoices and tracking payments can often lead to errors and delays.",
    content02: "Our module comes with a detailed invoicing system that automates listing invoice receipts, matching, and approvals, ensuring error-free timely payments."
  }
  const details04 = {
    ScreenShot: '/Finance/Estimate&Expense/screenshot_4.svg',
    headTitle: "Seamless Project Expense Management",
    content01: "Tracking project expenses manually can result in cost overruns, as well as difficulties in monitoring project budgets.",
    content02: "Using the project management tools within the module helps you to set budgets, allocate expenses, and track project costs in real-time. Automated alerts also notify HR and project managers of potential budget issues, reducing the chance of cost overruns."
  }
  const details05 = {
    ScreenShot: '/Finance/Estimate&Expense/screenshot_5.webp',
    headTitle: "Efficiently Handle Personal Compensation",
    content01: "Manually handling personal expense requests is a big challenge for HR professionals. Time-consuming data entry, inefficient tracking, and lack of transparency can lead to errors, delays, and employee dissatisfaction.",
    content02: "The “Personal Expense” feature lists all the personal expense compensation requests in detail, so HR professionals can review and approve the requests on time and deliver timely reimbursements, significantly boosting employee satisfaction."
  }

  ///  Accordion list element
  const accordion_list = [
    {
      headContent: "What is the Estimates & Expenses Management Module in HRMS Finances software?",
      paraContent: "The Estimates & Expenses Management Module is a powerful tool within HRMS Finances software that streamlines the management of expenses, estimates, invoices, vendor relationships, project expenses, and personal finances."
    },
    {
      headContent: "How does the module help in managing expenses more efficiently?",
      paraContent: "The module automates expense tracking, approval workflows, and categorization, reducing manual effort and minimizing errors. It offers real-time insights into expenses and provides a user-friendly interface."
    },
    {
      headContent: "Can this module enhance vendor relationships?",
      paraContent: "Yes, it can. It offers a comprehensive vendor list with detailed profiles, simplifying vendor management. It helps in maintaining accurate records and timely communication with vendors."
    },
    {
      headContent: " What benefits does it provide for managing expense invoices?",
      paraContent: "The module simplifies invoice management by allowing easy access, editing, and deletion of invoices. It eliminates paperwork and automates invoice-related processes, reducing delays and errors."
    },
    {
      headContent: "How does it assist in managing project expenses?",
      paraContent: "The module allows for seamless project expense management. Users can set project budgets, assign teams, and gain insights into project costs. It helps optimize project workflows and budget tracking."
    },
    {
      headContent: "What features support personal expense management?",
      paraContent: "The module enables employees to request reimbursement for personal expenses. It maintains detailed records, including the purchaser's name, date, and invoice, streamlining the reimbursement process."
    },
    {
      headContent: "How can this module enhance financial control?",
      paraContent: "It enhances financial control by providing real-time insights, automating processes, and offering robust expense categorization. It helps in tracking expenses, preventing unauthorized spending, and ensuring compliance."
    },
    {
      headContent: "How does the module handle unique expenses or non-standard categories?",
      paraContent: "The module allows for customizable expense categories, making it suitable for tracking unique or non-standard expenses. Users can set up categories to match their specific needs."
    },
    {
      headContent: "Does it provide reporting and analytics capabilities?",
      paraContent: "Yes, the module may offer reporting and analytics features, enabling users to extract valuable insights from expense and estimate data for informed decision-making."
    },
    {
      headContent: "How can I get started with the Estimates & Expenses Management Module?",
      paraContent: "You can get started by contacting our team to schedule a demo, request a quote, or obtain more information on how the module can benefit your organization."
    }
  ]

  return (
    <div className='flex flex-col lg:gap-24 gap-12'>
      <section className='px-4 lg:min-h-[517px] flex items-center'>
        <div className='main_container flex lg:flex-row flex-col-reverse justify-between items-center'>
          <div className="lg:w-[45%] w-full">
            <h2 className='noto text_gradient_finance lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-4 lg:block hidden'>Say Goodbye to Manual Estimates & Expense Management Struggles</h2>
            <p className='roboto text-light-gray font-light text-[14px] lg:text-[16px] lg:leading-7 leading-[24px] text-justify lg:ml-0 ml-3'>Tired of manual expense management? Our Estimates & Expenses Management feature is here to help you get rid of all the complexities of managing expenses, estimates, invoices, and project costs manually and give you a seamless, efficient, and stress-free experience.</p>
          </div>

          <div className="lg:w-[55%] w-full flex lg:flex-row flex-col justify-end lg:mb-0 mb-12">
            <h2 className='noto text_gradient_finance lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-8 lg:hidden block '>Say Goodbye to Manual Estimates & Expense Management Struggles</h2>
            <div className='lg:w-[530px] w-[200px] lg:mx-0 mx-auto lg:h-[395px] h-full relative'>
              <img src="/Finance/Estimate&Expense/combine_image/blob.webp" alt="" />
              <img src="/Finance/Estimate&Expense/combine_image/person.webp" alt="" className='absolute lg:bottom-[5px] bottom-[1px] left-[50%] translate-x-[-50%]' />
            </div>
          </div>
        </div>
      </section>

      {/* 4th section individual section start */}
      <section className='lg:block hidden'>
        <div className="main_container">
          <div className='mb-16'>
            <h2 className="text-center inter mb-8 text-[36px] font-bold leading-[50px] text_gradient_finance">Comprehensive Features to Simplify Your Workflow</h2>
            <p className="mb-16 leading-6 text-light-gray px-14 text-center">Our Estimates & Expenses Management module comes with an array of game-changing features to simplify your financial operations and drive efficiency in your organization</p>
          </div>
          <div className='flex justify-between items-center'>
            <div className='w-[33.33%] flex justify-end'>
              <div className='p-5 w-[280px] h-[220px] border-r-[1px] border-solid border-[#182F59] border-b-[1px]'>
                <h3 className='font-medium text-[20px] leading-7 text_gradient_finance mb-5'>Expense Management</h3>
                <p className='font-light text-[#333] leading-6'>Gain a holistic view of expenses with dynamic charts and streamline workflow in just three steps.</p>
              </div>
            </div>

            <div className='w-[33.33%]'>
              <img src="/Finance/Estimate&Expense/attention.webp" alt="" />
            </div>

            <div className='w-[33.33%] flex justify-start'>
              <div className='p-5 w-[280px] h-[220px] border-l-[1px] border-solid border-[#182F59] border-b-[1px]'>
                <h3 className='font-medium text-[20px] leading-7 text_gradient_finance mb-5'>Complete Personal Financial Clarity</h3>
                <p className='font-light text-[#333] leading-6'>Empower employees to request reimbursements with detailed records, enhancing financial control and satisfaction.</p>
              </div>
            </div>
          </div>

          <div className='flex justify-between items-center'>
            <div className='w-[33.33%] flex justify-end'>
              <div className='p-5 w-[280px] h-[220px] border-r-[1px] border-solid border-[#182F59] border-t-[1px] translate-x-[30px] translate-y-[-50px]'>
                <h3 className='font-medium text-[20px] leading-7 text_gradient_finance mb-5'>Vendor Relationship Enhancement</h3>
                <p className='font-light text-[#333] leading-6'>Elevate vendor partnerships with a comprehensive vendor list and effortless profile management.</p>
              </div>
            </div>

            <div className='w-[33.33%] flex justify-center'>
              <div className='p-5 w-[280px] h-[220px] border-l-[1px] border-t-[1px] border-solid border-[#182F59] border-r-[1px]'>
                <h3 className='font-medium text-[20px] leading-5 text_gradient_finance mb-5'>Expense Invoices</h3>
                <p className='font-light text-[#333] leading-6'>Take control of invoices, access, edit, and delete them with a single click, freeing you from paperwork.</p>
              </div>
            </div>

            <div className='w-[33.33%] flex justify-start'>
              <div className='p-5 w-[280px] h-[220px] border-l-[1px] border-solid border-[#182F59] border-t-[1px] translate-x-[-30px] translate-y-[-50px]'>
                <h3 className='font-medium text-[20px] leading-7 text_gradient_finance mb-5'>Project Expense Management</h3>
                <p className='font-light text-[#333] leading-6'>Efficiently manage projects from start to finish, assign teams, and optimize workflows.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* responsive this section into carousel/slider */}
      <section className="px-4 lg:hidden block">
        <h2 className="inter font-bold text-[20px] leading-22px] text_gradient_finance mb-4 ">Comprehensive Features to Simplify Your Workflow</h2>
        <p className="mb-10 text-[14px] font-light leading-[24px] text-light-gray">Our Estimates & Expenses Management module comes with an array of game-changing features to simplify your financial operations and drive efficiency in your organization</p>
        <img src="/Finance/Estimate&Expense/attention.webp" alt="" />
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50
            }
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="pb-5">
              <div className="px-5 py-10">
                <h2 className="text-center mb-5 text-[18px] font-bold leading-6 text_gradient">Expense Management</h2>
                <p className="font-light text-[14px] leading-6 text-justify text-[#333]">Gain a holistic view of expenses with dynamic charts and streamline workflow in just three steps.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pb-5">
              <div className="px-5 py-10">
                <h2 className="text-center mb-5 text-[18px] font-bold leading-6 text_gradient">Complete Personal Financial Clarity</h2>
                <p className="font-light text-[14px] leading-6 text-justify text-[#333]">Empower employees to request reimbursements with detailed records, enhancing financial control and satisfaction.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pb-5">
              <div className="px-5 py-10">
                <h2 className="text-center mb-5 text-[18px] font-bold leading-6 text_gradient">Vendor Relationship Enhancement</h2>
                <p className="font-light text-[14px] leading-6 text-justify text-[#333]">Elevate vendor partnerships with a comprehensive vendor list and effortless profile management.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pb-5">
              <div className="px-5 py-10">
                <h2 className="text-center mb-5 text-[18px] font-bold leading-6 text_gradient">Expense Invoices</h2>
                <p className="font-light text-[14px] leading-6 text-justify text-[#333]">Take control of invoices, access, edit, and delete them with a single click, freeing you from paperwork.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pb-5">
              <div className="px-5 py-10">
                <h2 className="text-center mb-5 text-[18px] font-bold leading-6 text_gradient">Project Expense Management</h2>
                <p className="font-light text-[14px] leading-6 text-justify text-[#333]">Efficiently manage projects from start to finish, assign teams, and optimize workflows.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* 4th section individual section end */}

      {/* business strength policy */}
      <Manual_Finanace_section manual_resource={manual_resource} />

      {/* Employee organization */}
      <section className='estimate_expense_organized'>
        <div className='main_container flex lg:flex-row flex-col justify-between items-center lg:gap-6 gap-0'>
          <div className='lg:w-[55%] w-full'>
            <div className='relative lg:w-[160px] w-[100px] lg:h-[160px] h-[100px] mx-auto lg:mb-4 mb-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="159" height="159" viewBox="0 0 159 159" fill="none" className='percentage_svg'>
                <path d="M79.5 157C63.1336 157 47.1873 151.819 33.9466 142.199C20.7059 132.579 10.8506 119.014 5.79312 103.449C0.735628 87.8834 0.735627 71.1165 5.79312 55.5512C10.8506 39.9858 20.706 26.4211 33.9467 16.8012C47.1873 7.18125 63.1336 1.99999 79.5 2C95.8664 2 111.813 7.18126 125.053 16.8012C138.294 26.4211 148.149 39.9858 153.207 55.5512C158.264 71.1166 158.264 87.8835 153.207 103.449" stroke="#5BBC2E" strokeWidth="2.22" />
              </svg>
              <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full rounded-full flex justify-center items-center'>
                <h3 className='sura text-center text-white lg:text-[82px] text-[40px]'>80<span className='lg:text-[41px] text-[24px]'>%</span></h3>
              </div>
            </div>
            <p className='inter text-center font-light lg:text-[28px] text-[14px] leading-[48.5px] text-[#FFF]'>Increase in Expense Management Efficiency</p>
          </div>

          <div className='middle_hr mt-3 mb-4'></div>

          <div className='lg:w-[45%] w-full left_line'>
            <h3 className='roboto font-normal lg:text-[36px] text-[16px] lg:leading-[44px] leading-[24px] text-center lg:text-left text-[#FFF]'> <span className='font-semibold text-green'>Enhance </span> Financial Insights with Our Innovative Solution</h3>
            <div className="lg:mt-[30px] mt-5 flex md:justify-start justify-center">
              <Button className={'action_btn2'} text={'Start Today !'} onClick={() => setOpenScheduleForm(true)} />
            </div>
          </div>
        </div>
      </section>
      <AdvantageVsDisadvantage
        details={details01}
        imgSrc={details01.ScreenShot}
        shadowRight={true}
      />
      <AdvantageVsDisadvantage
        details={details02}
        imgSrc={details02.ScreenShot}
        shadowLeft={true}
        className={'flex-row-reverse'}
      />

      {/* working flow section (common) */}
      <section className='working_flow'>
        <div className='max-w-[1040px] mx-auto flex justify-between items-center px-4 relative lg:py-[100px] py-10'>
          <div className="lg:w-[70%] w-[50%]">
            <h2 className='inter lg:text-[37.5px] text-[15px] mb-2 font-semibold lg:leading-[48px] leading-[22px] text-left lg:pr-[70px] pr-0'><span className='text-green'>Unlock</span> <span className='text_gradient_finance'>Complete Financial Control!</span></h2>
            <h4 className='noto lg:text-[18px] text-[9px] mb-2 lg:leading-9 leading-2 text_gradient_finance font-medium text-left'>Discover effortless expense management for your organization</h4>
            <div className="lg:mt-7 mt-4 text-left">
              <Button className={'action_btn'} text={'Start Today'} onClick={() => setOpenScheduleForm(true)} />
            </div>
          </div>
          <img src="/Finance/Estimate&Expense/business_person_banner.webp" alt="" className='lg:object-none object-cover w-[45%] h-[100%] absolute top-0 right-0 lg:translate-x-[154px] translate-x-0' />
        </div>
      </section>
      <AdvantageVsDisadvantage
        details={details03}
        imgSrc={details03.ScreenShot}
      />
      <AdvantageVsDisadvantage
        details={details04}
        imgSrc={details04.ScreenShot}
        shadowLeft={true}
        className={'flex-row-reverse'}
      />

      {/* next level section (common) */}
      <section className='next_level px-4 relative'>
        <img src="/Finance/Estimate&Expense/person-2.webp" alt="" className='h-[100%] absolute top-0 right-[6px] lg:hidden block' />
        <div className='main_container flex justify-between items-center'>
          <div className="w-[51%]">
            <h2 className='inter lg:text-[28px] text-[14px] font-semibold lg:leading-[38px] leading-[20px] mb-2'><span className='text_gradient_finance'>Experience </span><span className='text-green lg:text-[37.5px] text-[16px]'>Efficient</span> <span className='text_gradient_finance'>Expense Management</span></h2>
            <p className='inter font-extralight lg:text-[18px] text-[9px] text_gradient_finance lg:pr-[120px] pr-0'>Transform Your Organization’s Estimates and Expenses with Automation!</p>
            <div className="lg:mt-10 mt-2 text-left">
              <Button className={'action_btn'} text={'Learn more'} onClick={() => setOpenScheduleForm(true)} />
            </div>
          </div>
          <div className="w-[48%] lg:block hidden">
            <img src="/Finance/Estimate&Expense/person-2.webp" alt="" className='w-[420px] mx-auto' />
          </div>
        </div>
      </section>

      <AdvantageVsDisadvantage
        details={details05}
        imgSrc={details05.ScreenShot}
        shadowRight={true}
      />

      {/* Frequently Ask Questions */}
      <Accordion_component accordion_list={accordion_list} />
      <FooterCTA
        imgSrc='/Finance/Estimate&Expense/footer_bottom_cta.svg'
        title={
          <span className='flex flex-col lg:items-start items-center'>
            <span className='lg:text-[37.5px] text-[15px]'>
              Ready to <span className="text-green font-semibold">Revamp</span> Your Financial Strategy?
            </span>
            <span className="lg:text-[18px] text-[12px] inter text-light-white2 lg:mb-2 mb-2">
              Make Your Organization’s Expense Management Effortless Today!
            </span>
          </span>
        }
        button={
          <Button className={'action_btn2'} text={'Book A Consultation'} onClick={() => setOpenScheduleDemo(true)} />
        }
      />
    </div>
  );
};

export default Estimate_expense;