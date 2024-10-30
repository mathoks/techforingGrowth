"use client"
import React from 'react';
import { useEffect, useState } from "react";
import Accordion_component from "@/components/Accordion_component/Accordion_component";
import Manual_HR_section from "@/components/Manual_HR_section/Manual_HR_section";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { useGlobalContext } from "@/context/globalContext";
import { Button } from '@/components/SharedComponents';
import FooterCTA from '@/section/FooterCTA';
import BusinessTeamCTA from '@/section/BusinessTeamCTA';
import AdvantageVsDisadvantage from '@/section/AdvantageVsDisadvantage';


const Report_management = () => {
  const { setOpenScheduleDemo, setOpenScheduleForm } = useGlobalContext();
  const [isAnimated, setIsAnimated] = useState(false);
  const [frame1, setFrame1] = useState(false);
  const [frame2, setFrame2] = useState(false);

  // This one is animation sections functionality
  useEffect(() => {
    const mainFrameElement = document.querySelector('.main_frame');
    const frame_1_Element = document.querySelector('.Frame_1');
    const frame_2_Element = document.querySelector('.Frame_02');

    const handleScroll = () => {
      const mainFrameOffsetTop = mainFrameElement.offsetTop;
      const frame_1_OffsetTop = frame_1_Element.offsetTop;
      const frame_2_OffsetTop = frame_2_Element.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;

      // Check if the main_frame is within the viewport
      if (scrollPosition >= mainFrameOffsetTop + 50) {
        setTimeout(() => setIsAnimated(true), 1000);
      } else {
        setIsAnimated(false);
      }

      if (scrollPosition >= frame_1_OffsetTop) {
        setTimeout(() => setFrame1(true), 2000);
      } else {
        setFrame1(false);
      }

      if (scrollPosition >= frame_2_OffsetTop) {
        setTimeout(() => setFrame2(true), 3000);
      } else {
        setFrame2(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // For Manual_HR_Section system follow up
  const manual_resource = {
    headTitle: "Challenges of Manual HR Management",
    img1: "/HRMS/Report_management/icons/time_circle.webp",
    img2: "/HRMS/Report_management/icons/error_document.webp",
    img3: "/HRMS/Report_management/icons/time_stretegy.webp",
    img4: "/HRMS/Report_management/icons/file_clip.webp",
    img5: "/HRMS/Report_management/icons/file_syntax.webp",
    manualImage: "/HRMS/Report_management/HRMS_Report_management.svg",
    content1: "Hours of data entry, compilation, and verification steal valuable time from HR professionals",
    content2: "The human element of manual report handling introduces errors, leading to inaccuracies that can have far-reaching consequences",
    content3: "Manual processes can’t provide real-time data, which can interrupt quick decision-making and timely responsiveness",
    content4: "Storing reports in physical formats or fragmented digital files increases the risk of data loss and misplacement",
    content5: "Inaccuracies or missing data can lead to compliance issues"
  }

  const details01 = {
    ScreenShot: '/HRMS/Report_management/screenshot_1.svg',
    headTitle: "Automate Record-Keeping for Efficiency",
    content01: "Maintaining and updating employee records manually is time-consuming and riddled with errors.",
    content02: "Streamline your HR operations by automating record management to ensure accurate and up-to-date employee information is readily accessible, right at your fingertips."
  }

  const details02 = {
    ScreenShot: '/HRMS/Report_management/screenshot_2.svg',
    headTitle: "Easily Retrieve Ex-Employee Data!",
    content01: "Without a comprehensive archive of former employee records, it’s challenging and time-consuming to conduct reference checks or evaluate rehiring.",
    content02: "Easily store all the Ex-employee’s historical data with just a few clicks for future reference checks, assess rehiring, or perform any inquiries efficiently."
  }

  const details03 = {
    ScreenShot: '/HRMS/Report_management/screenshot_3.svg',
    headTitle: "Easily Monitor Leave Details",
    content01: "Tracking leaves manually can lead to inaccuracies in leave balances, misunderstandings between employees and HR, and difficulties in monitoring leave trends.",
    content02: "The Leave Report feature automates the leave management process and provides detailed leave reports, that your HR can use to gain valuable insights into employee leave trends, enjoy simplified leave tracking, and save time by reducing disputes over leave balances."
  }

  const details04 = {
    ScreenShot: '/HRMS/Report_management/screenshot_4.svg',
    headTitle: "Organize Your Invoice Management",
    content01: "Managing various types of invoices manually, such as expenses, assets, and payslips, can be disorganized and time-consuming.",
    content02: "The Invoice Report feature centralizes all types of invoices, including estimates, expenses, personal expenses, assets, and payslips. HR professionals can easily access and manage invoices, improve financial transparency, and simplify financial record-keeping."
  }

  const details05 = {
    ScreenShot: '/HRMS/Report_management/screenshot_5.svg',
    headTitle: "Transparent Remuneration Tracking",
    content01: "Ensuring accurate and transparent remuneration tracking can be challenging for HR when managing payslips and commissions manually.",
    content02: "The Payslip and Commission Slip Report feature provides a transparent view of each employee's monthly salary and commission amounts. This ensures accurate payment distribution, simplifies payroll administration, and enhances trust between HR and employees."
  }

  const details06 = {
    ScreenShot: '/HRMS/Report_management/screenshot_6.svg',
    headTitle: "Make Data-Driven Financial Decisions",
    content01: "Manually tracking annual expenses and assets may result in financial inconsistencies, budgeting difficulties, and a lack of transparency into financial trends.",
    content02: "Simplify expense tracking with TechForing Growth's Expense Report feature. Get valuable insights into financial trends and optimize budgeting, enhance transparency, and make informed financial decisions with almost zero effort."
  }

  ///  Accordion list element
  const accordion_list = [
    {
      headContent: "What is the Report Management Module, and why is it important for HR professionals?",
      paraContent: "The Report Management Module is a feature in our HRMS software that centralizes and automates the management of various HR-related reports. It is crucial for HR professionals as it streamlines report handling, saves time, reduces errors, and empowers data-driven decision-making."
    },
    {
      headContent: "How does the Performance Report feature benefit HR teams?",
      paraContent: "The Performance Report feature allows HR professionals to store and access detailed performance data for each employee, including KPI scores, attendance, and punctuality. This enables better tracking, analysis, and management of employee performance, ultimately leading to improved productivity."
    },
    {
      headContent: "How can the Attendance Report feature help in optimizing workforce management?",
      paraContent: "The Attendance Report feature simplifies attendance management by providing comprehensive monthly attendance records. HR can use this data to identify attendance patterns, ensure accurate payroll processing, and optimize workforce management for enhanced operational efficiency."
    },
    {
      headContent: "How does the Leave Report feature simplify employee leave management?",
      paraContent: "The Leave Report feature automates leave management, offering detailed reports on each employee's total number of leaves, leaves taken, and remaining leave balance. This simplifies leave tracking, reduces disputes, and provides insights into leave trends."
    },
    {
      headContent: "What types of invoices can be managed using the Invoice Report feature?",
      paraContent: "The Invoice Report feature centralizes various types of invoices, including estimates, expenses, personal expenses, assets, and payslips. It simplifies financial record management and reporting."
    },
    {
      headContent: "How does the Payslip and Commission Slip Report feature ensure transparency in remuneration tracking?",
      paraContent: "The Payslip and Commission Slip Report feature provides a transparent view of each employee's monthly salary and commission amounts. This ensures accurate payment distribution, streamlines payroll administration, and fosters trust between HR and employees."
    },
    {
      headContent: "What financial insights can be gained through the Expense Report feature?",
      paraContent: "The Expense Report feature tracks yearly expenses and assets, offering valuable insights into financial trends. HR can optimize budgeting, enhance financial transparency, and make informed financial decisions for the organization's future success."
    },
    {
      headContent: "Is the Report Management Module customizable to meet our organization's specific needs?",
      paraContent: "Yes, the Report Management Module is customizable. You can tailor reports to match your organization's unique requirements, ensuring that you get the data and insights that matter most to you."
    },
    {
      headContent: " How does the automation feature in the Report Management Module save time for HR professionals?",
      paraContent: "The automation feature in the Report Management Module automates tasks such as report compilation and updates, reducing the time spent on manual data entry and management."
    },
    {
      headContent: " Can you provide training and support for using the Report Management Module effectively?",
      paraContent: "Yes, we offer comprehensive training and ongoing support to ensure that HR professionals can fully utilize the Report Management Module's capabilities. Our dedicated support team is here to assist you every step of the way."
    }
  ]

  return (
    <div className='flex flex-col lg:gap-24 gap-12'>
      <section className='px-4 lg:min-h-[517px] flex items-center'>
        <div className='main_container flex lg:flex-row flex-col-reverse justify-between items-center'>
          <div className="lg:w-[45%] w-full">
            <h2 className='noto text_gradient lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-4 lg:block hidden'>Elevate Decision-Making with Smart Report Management</h2>
            <p className='roboto text-light-gray font-light text-[14px] lg:text-[16px] lg:leading-7 leading-[24px] text-justify lg:ml-0 ml-3'>Tired of drowning in HR paperwork and spreadsheets? Time for a game-changer! TechForing Human eliminates manual report management, freeing HR professionals from stress, saving time, and improving efficiency. Say goodbye to tedious tasks and make data-driven decisions effortlessly</p>
          </div>

          <div className="lg:w-[55%] w-full flex lg:flex-row flex-col justify-end lg:mb-0 mb-16">
            <h2 className='noto text_gradient lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-8 lg:hidden block '>Elevate Decision-Making with Smart Report Management</h2>
            <div className='lg:w-[530px] w-[200px] lg:mx-0 mx-auto lg:h-[395px] h-full relative'>
              <img src="/HRMS/Report_management/combine_image/blob.webp" alt="" />
              <img src='/HRMS/Report_management/combine_image/main-frame.webp' alt="" className={`main_frame ${isAnimated ? 'animate' : ''}`} />
              <img src="/HRMS/Report_management/combine_image/person.webp" alt="" className='absolute bottom-[5px] left-[50%] translate-x-[-50%]' />
              <img src="/HRMS/Report_management/combine_image/Frame-1.webp" alt="" className={`Frame_1 ${frame1 ? 'animate' : ''}`} />
              <img src="/HRMS/Report_management/combine_image/Frame-2.webp" alt="" className={`Frame_02 absolute lg:bottom-[-45px] bottom-[-30px] lg:right-[200px] right-[56px] ${frame2 ? 'animate' : ''}`} />
            </div>
          </div>
        </div>
      </section>

      {/* 4th section individual section start */}
      <section className='lg:block hidden'>
        <div className='main_container'>
          <h2 className="text-center inter mb-8 text-[36px] font-bold leading-[50px] text_gradient">Make Report Management a Breeze</h2>
          <p className="mb-16 leading-6 text-light-gray px-14 text-center">Our feature-rich report management feature takes the complexity out of HR reporting, offering powerful tools to make decision-making easy for your HR and empower your organization with clear, actionable insights</p>

          <div className='grid grid-cols-3 gap-5'>
            <div className='px-[40px] py-[60px] angular_gradient2'>
              <h2 className="mb-4 font-bold text-[18px] leading-6 text-light-gray">Performance Report</h2>
              <p className="font-light leading-6 text-light-gray text-justify">Effortlessly track and analyze employee performance, from KPI scores to attendance records.</p>
            </div>

            <div className='px-[40px] py-[60px] angular_gradient2'>
              <h2 className="mb-4 font-bold text-[18px] leading-6 text-light-gray">Attendance Report</h2>
              <p className="font-light leading-6 text-light-gray text-justify">Simplify attendance management with comprehensive monthly records, optimizing payroll and efficiency.</p>
            </div>

            <div className='px-[40px] py-[60px] angular_gradient2'>
              <h2 className="mb-4 font-bold text-[18px] leading-6 text-light-gray">Leave Report</h2>
              <p className="font-light leading-6 text-light-gray text-justify">Wave goodbye to manual leave tracking; automate and gain insights into employee leave trends.</p>
            </div>

            <div className='px-[40px] py-[60px] angular_gradient2'>
              <h2 className="mb-4 font-bold text-[18px] leading-6 text-light-gray">Invoice Report</h2>
              <p className="font-light leading-6 text-light-gray text-justify">Streamline financial record management with centralized invoices and comprehensive reporting.</p>
            </div>

            <div className='px-[40px] py-[60px] angular_gradient2'>
              <h2 className="mb-4 font-bold text-[18px] leading-6 text-light-gray">Pay slip and Commission Slip Report</h2>
              <p className="font-light leading-6 text-light-gray text-justify">Ensure accurate compensation distribution and simplify payroll administration transparently.</p>
            </div>

            <div className='px-[40px] py-[60px] angular_gradient2'>
              <h2 className="mb-4 font-bold text-[18px] leading-6 text-light-gray">Expense Report</h2>
              <p className="font-light leading-6 text-light-gray text-justify">Gain financial insights by effortlessly tracking yearly expenses and assets, optimizing budgeting and transparency.</p>
            </div>

          </div>
        </div>
      </section>

      <section className="px-4 lg:hidden block">
        <h2 className="inter font-bold text-[20px] leading-22px] text_gradient mb-4 ">Make Report Management a Breeze</h2>
        <p className="mb-10 text-[14px] font-light leading-[20px] text-light-gray">Our feature-rich report management feature takes the complexity out of HR reporting, offering powerful tools to make decision-making easy for your HR and empower your organization with clear, actionable insights</p>
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
            <div className="pb-[40px]">
              <div className="px-5 py-14 angular_gradient mb-5">
                <h2 className="text-center mb-3 font-bold leading-6 text-light-gray">Employee Info</h2>
                <p className="font-light text-[14px] leading-6 text-justify text-light-gray">Effortlessly track and analyze employee performance, from KPI scores to attendance records.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pb-[40px]">
              <div className="px-5 py-14 angular_gradient mb-5">
                <h2 className="text-center mb-3 font-bold leading-6 text-light-gray">Attendance Report</h2>
                <p className="font-light text-[14px] leading-6 text-justify text-light-gray">Simplify attendance management with comprehensive monthly records, optimizing payroll and efficiency.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pb-[40px]">
              <div className="px-5 py-14 angular_gradient mb-5">
                <h2 className="text-center mb-3 font-bold leading-6 text-light-gray">Leave Report</h2>
                <p className="font-light text-[14px] leading-6 text-justify text-light-gray">Wave goodbye to manual leave tracking; automate and gain insights into employee leave trends.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pb-[40px]">
              <div className="px-5 py-14 angular_gradient mb-5">
                <h2 className="text-center mb-3 font-bold leading-6 text-light-gray">Invoice Report</h2>
                <p className="font-light text-[14px] leading-6 text-justify text-light-gray">Streamline financial record management with centralized invoices and comprehensive reporting.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pb-[40px]">
              <div className="px-5 py-14 angular_gradient mb-5">
                <h2 className="text-center mb-3 font-bold leading-6 text-light-gray">Pay slip and Commission Slip Report</h2>
                <p className="font-light text-[14px] leading-6 text-justify text-light-gray">Ensure accurate compensation distribution and simplify payroll administration transparently.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pb-[40px]">
              <div className="px-5 py-14 angular_gradient mb-5">
                <h2 className="text-center mb-3 font-bold leading-6 text-light-gray">Expense Report</h2>
                <p className="font-light text-[14px] leading-6 text-justify text-light-gray">Gain financial insights by effortlessly tracking yearly expenses and assets, optimizing budgeting and transparency.</p>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </section>
      {/* 4th section individual section end */}

      {/* business strength policy */}
      <Manual_HR_section manual_resource={manual_resource} />

      {/* Business team section  (common) */}
      <BusinessTeamCTA
        title={
          <span className="inter font-light lg:text-[36px] text-[16px] mb-3 lg:text-center text-left lg:leading-[48px] leading-[22px]"><span className="text_gradient">Optimize </span> <span className="text-green font-semibold">Decision-Making</span> <span className="text_gradient">With</span> <span className="text-green font-semibold">Data-Driven</span> <span className="text_gradient">Insights</span></span>
        }
        subTitle={
          <p className='text-center'>
            <span className="font-medium lg:text-[18px] text-[9px] lg:leading-[36px] leading-[16px] lg:text-center text-left text_gradient">Elevate Your HR Reporting With Our Advanced HR Report Management Solution</span>
          </p>
        }
        button={
          <div className='flex justify-center'>
            <Button className={'action_btn'} text={'Try Today!'} onClick={() => setOpenScheduleForm(true)} />
          </div>
        }
        imgSrc={<div className='w-full'>
          <img src={'/HRMS/Report_management/report_business_team.svg'} alt="" className='h-full' />
        </div>}
      />
      <AdvantageVsDisadvantage
        details={details01}
        imgSrc={details01.ScreenShot}
        shadowRight={true}
      />
      <AdvantageVsDisadvantage
        details={details02}
        imgSrc={details02.ScreenShot}
        className={'flex-row-reverse'}
        shadowLeft={true}
      />
      {/* Employee organization */}
      <section className='report_organized'>
        <div className='main_container flex lg:flex-row flex-col justify-between items-center lg:gap-6 gap-0'>
          <div className='lg:w-[55%] w-full'>
            <p className='inter lg:text-[24px] text-[14px] lg:leading-[48.5px] leading-[24px] font-light text-center text-[#FFF] lg:px-0 px-10'>60% of HR Professionals Think Automation Can Save Them <span className="font-semibold lg:text-[82.5px] text-[18px]"><span className="sura">6+</span> Hours</span> Every Week</p>
          </div>

          <div className='middle_hr mt-4 mb-4'></div>

          <div className='lg:w-[45%] w-full left_line'>
            <h3 className='inter lg:text-[37.5px] text-[16px] lg:leading-[38.5px] leading-[24px] text-center lg:text-left w-[60%] lg:w-full mx-auto lg:mx-0 text-[#FFF]'><span className='text-green font-semibold'>Automate</span> Your Report Management Process !</h3>
            <div className="lg:mt-[30px] mt-5 text-center lg:text-left">
              <Button className={'action_btn2'} text={'Get Started'} onClick={() => setOpenScheduleForm(true)} />
            </div>
          </div>
        </div>
      </section>
      <AdvantageVsDisadvantage
        details={details03}
        imgSrc={details03.ScreenShot}
        shadowLeft={true}
        className={'flex-row-reverse'}
      />
      <AdvantageVsDisadvantage
        details={details04}
        imgSrc={details04.ScreenShot}
        shadowRight={true}
      />
      <BusinessTeamCTA
        reverse={true}
        title={
          <span className="inter font-extralight lg:text-[36px] text-[12px] mb-3 lg:text-left lg:leading-[48px] leading-[22px]"><span className="text_gradient">Stop Wasting <span className='font-semibold'> Time </span> on Manual Report Management</span>
          </span>
        }
        subTitle={
          <p className='lg:text-left text-center'>
            <span className="font-medium lg:text-[18px] text-[9px]">
              <span className='text_gradient'>Make Report Organization </span>
              <span className="lg:text-2xl text-[9px] !text-primary">Effortless</span></span>
          </p>
        }
        button={
          <div className='flex lg:justify-start justify-center'>
            <Button className={'action_btn'} text={'Try Today!'} onClick={() => setOpenScheduleForm(true)} />
          </div>
        }
        imgSrc={<div className='w-[90%]'>
          <img src={'/HRMS/Report_management/report_business_team2.svg'} alt="" className='h-full' />
        </div>}
      />
      <AdvantageVsDisadvantage
        details={details05}
        imgSrc={details05.ScreenShot}
        shadowRight={true}
      />
      <AdvantageVsDisadvantage
        details={details06}
        imgSrc={details06.ScreenShot}
        shadowLeft={true}
        className={'flex-row-reverse'}
      />
      {/* Frequently Ask Questions */}
      <Accordion_component accordion_list={accordion_list} />

      {/* footer bottom CTA (common) */}
      <FooterCTA
        imgSrc='/HRMS/Report_management/footer_bottom_cta.webp'
        title={
          <span className='flex flex-col'>
            <span className="lg:text-[18px] text-[12px] inter text-light-white2 lg:mb-2 mb-2">
              Ready for a Smarter Approach to Report Management?
            </span>
            <span className='lg:text-[36px]'>
              Our
              <span className="text-green font-semibold"> Cutting-Edge </span>System is Here to Help!
            </span>
          </span>
        }
        button={<Button className={'action_btn2'} text={'Start Your Journey'} onClick={() => setOpenScheduleDemo(true)} />}
      />
    </div>
  );
};

export default Report_management;