"use client"
import "../../../globals.css"
import { useEffect, useState } from "react";
import Manual_HR_section from "@/components/Manual_HR_section/Manual_HR_section";
import Accordion_component from "@/components/Accordion_component/Accordion_component";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { useGlobalContext } from "@/context/globalContext";
import { Button } from "@/components/SharedComponents";
import FooterCTA from '@/section/FooterCTA';

const Performance_management = () => {
  const { setOpenScheduleForm } = useGlobalContext();

  const [isAnimated, setIsAnimated] = useState(false);
  const [frame1, setFrame1] = useState(false);
  const [frame2, setFrame2] = useState(false);

  // This one is animation sections functionality
  useEffect(() => {
    const mainFrameElement = document.querySelector('.main_frame');
    const frame_1_Element = document.querySelector('.performance_Frame_1');
    const frame_2_Element = document.querySelector('.performance_Frame_2');

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
    headTitle: "Problems With Manual Performance Management",
    img1: "/HRMS/performance_management/icons/ratio.webp",
    img2: "/HRMS/performance_management/icons/list.webp",
    img3: "/HRMS/performance_management/icons/search_err.webp",
    img4: "/HRMS/performance_management/icons/pc_opt.webp",
    img5: "/HRMS/performance_management/icons/user_circle.webp",
    manualImage: "/HRMS/performance_management/HRMS_performance_management.svg",
    content1: "Difficulties in setting Clear Performance Expectations",
    content2: "Inconsistent Performance Evaluation",
    content3: "Struggle in HR to Identify Skill Gaps and Training Needs",
    content4: "Inability to Make Data-Driven Decisions",
    content5: "Identifying and Preparing Employees for Critical Roles Becomes a Challenge"
  }

  /// unlock the HRMS status details 
  const status_details = [
    {
      _id: 1,
      img: "/HRMS/performance_management/icons/group_01.webp",
      headTitle: "Performance Excellence",
      contents: "Our module empowers you to track, evaluate, and nurture employee performance comprehensively. From project milestones to adherence to company standards, it's all at your fingertips."
    },
    {
      _id: 2,
      img: "/HRMS/performance_management/icons/group_02.webp",
      headTitle: "KPI Score and Bonuses",
      contents: "Drive your team towards exceptional results with Key Performance Indicators (KPIs) and bonuses. Securely store and access performance scores, and incentivize your employees to reach new heights."
    },
    {
      _id: 3,
      img: "/HRMS/performance_management/icons/group_03.webp",
      headTitle: "Boost Morale and Productivity",
      contents: "By recognizing and rewarding outstanding performance, you'll see an immediate boost in employee morale and productivity. Motivated teams consistently outperform expectations."
    },
    {
      _id: 4,
      img: "/HRMS/performance_management/icons/group_04.webp",
      headTitle: "Data-Driven Insights",
      contents: "Gain invaluable insights into your workforce's strengths and areas for improvement. Our module provides actionable data to help you set higher targets and strategically allocate bonuses."
    },
    {
      _id: 5,
      img: "/HRMS/performance_management/icons/group_05.webp",
      headTitle: "Streamlined Promotions",
      contents: "Simplify the often complex promotion process. Track eligibility criteria effortlessly and document promotion details with our user-friendly interface."
    },
    {
      _id: 6,
      img: "/HRMS/performance_management/icons/group_06.webp",
      headTitle: "Accessible and Secure",
      contents: "Your data is safe and accessible whenever you need it. We prioritize data security, so you can focus on achieving your business goals."
    },
    {
      _id: 7,
      img: "/HRMS/performance_management/icons/group_07.webp",
      headTitle: "Customizable Solutions",
      contents: "Tailor our Employee Performance Module to your organization's unique needs. It's your roadmap to success, designed with your company's specific goals in mind."
    },
    {
      _id: 8,
      img: "/HRMS/performance_management/icons/group_08.webp",
      headTitle: "Exceptional Support",
      contents: "Our team is dedicated to your success. We provide unparalleled customer support to ensure your experience is smooth and productive."
    }
  ]

  ///  Accordion list element
  const accordion_list = [
    {
      headContent: "What is the Employee Performance Module, and how does it work?",
      paraContent: "The Employee Performance Module is a software tool designed to help organizations manage and enhance employee performance. It works by allowing you to set performance expectations, track progress, provide feedback, and reward outstanding performance through bonuses and promotions."
    },
    {
      headContent: "Why should my company need the Employee Performance Module?",
      paraContent: "Having access to this module can lead to improved employee engagement, increased productivity, and better alignment with organizational goals. It simplifies performance management, promotes data-driven decision-making, and ensures fairness in rewards and promotions."
    },
    {
      headContent: "Can the Employee Performance Module be customized to suit our company's unique needs?",
      paraContent: "Yes, our module is highly customizable. You can tailor it to your organization's specific goals, performance metrics, and evaluation criteria."
    },
    {
      headContent: "How does the module handle performance evaluations and feedback?",
      paraContent: "The module facilitates ongoing performance evaluations and feedback through regular check-ins and reviews. It allows managers and employees to document accomplishments, set goals, and provide constructive feedback to foster continuous improvement."
    },
    {
      headContent: "What role do Key Performance Indicators (KPIs) play in the module?",
      paraContent: "KPIs are a central part of our module. They help measure and evaluate employee performance objectively. The module enables you to set, track, and manage KPIs to drive exceptional performance."
    },
    {
      headContent: " Does the module assist with promotions and career development?",
      paraContent: "Yes, the module includes features to streamline the promotion process. It helps HR track eligibility criteria, document promotion details, and identify high-potential employees for career development."
    },
    {
      headContent: "How does the module handle data security and privacy?",
      paraContent: "We prioritize data security and compliance with privacy regulations. The module ensures secure storage of employee performance data and access controls to protect sensitive information."
    },
    {
      headContent: "Can employees access their performance data and progress through the module?",
      paraContent: "Yes, employees can access their performance data and progress through the module. It promotes transparency and encourages employees to take ownership of their development."
    },
    {
      headContent: "What kind of ROI can my company expect from using this module?",
      paraContent: "The ROI from the Employee Performance Module can include improved employee retention, increased productivity, enhanced organizational alignment, and a more engaged and motivated workforce. The specific ROI will vary based on your organization's goals and implementation."
    },
    {
      headContent: "How do we get started with the Employee Performance Module?",
      paraContent: "Getting started is easy. Simply contact our team, and we will guide you through the setup, customization, and implementation process. We'll work closely with your organization to ensure a smooth transition to the module."
    }
  ]

  return (
    <div className='flex flex-col lg:gap-24 gap-12'>
      <section className='px-4 lg:min-h-[517px] flex items-center'>
        <div className='main_container flex lg:flex-row flex-col-reverse justify-between items-center'>
          <div className="lg:w-[45%] w-full">
            <h2 className='noto text_gradient lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-4 lg:block hidden'>Employee Performance Tracking Made Easy</h2>
            <p className='roboto text-light-gray font-light text-[14px] lg:text-[16px] lg:leading-7 leading-[24px] text-justify lg:ml-0 ml-3'>Is manual performance tracking causing headaches to your HR and holding your organization back? Say goodbye to outdated methods and easily track employee performance, ignite motivation, and streamline promotions like never before. Elevate your employees’ performance with the most intuitive HRMS today!</p>
          </div>

          <div className="lg:w-[55%] w-full lg:flex-row flex-col flex justify-end lg:mb-0 mb-16">
            <h2 className='noto text_gradient lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-8 lg:hidden block '>Employee Performance Tracking Made Easy</h2>
            <div className='lg:w-[530px] w-[200px] lg:mx-0 mx-auto lg:h-[395px] h-full relative'>
              <img src="/HRMS/performance_management/combine_image/blob.webp" alt="" />
              <img src="/HRMS/performance_management/combine_image/main-frame.webp" alt="" className={`main_frame ${isAnimated ? 'animate' : ''}`} />
              <img src="/HRMS/performance_management/combine_image/person.webp" alt="" className='absolute bottom-1 left-[50%] translate-x-[-50%]' />
              <img src="/HRMS/performance_management/combine_image/Frame-1.webp" alt="" className={`performance_Frame_1 absolute lg:w-[172px] w-[100px] lg:bottom-[55px] bottom-0 lg:left-[65px] left-[24px] ${frame1 ? 'animate' : ''}`} />
              <img src="/HRMS/performance_management/combine_image/Frame-2.webp" alt="" className={`performance_Frame_2 absolute lg:w-[172px] w-[100px] lg:bottom-[26px] bottom-[-26px] lg:right-[80px] right-[0px] ${frame2 ? 'animate' : ''}`} />
            </div>
          </div>
        </div>
      </section>

      {/* 4th section individual section start */}
      <section className="px-4">
        <div className="main_container">
          <h2 className="lg:text-center text-left inter lg:mb-8 mb-5 lg:text-[36px] text-[20px] font-bold lg:leading-[50px] leading-8 text_gradient">Elevate Employee Performance With Precision</h2>
          <p className="lg:mb-16 mb-10 leading-6 text-light-gray lg:px-16 px-0 lg:text-center text-justify">TechForing Human simplifies HR processes by automating data collection, providing real-time insights, tracking employee performance, and rewarding your employees accordingly.</p>

          <div className="flex lg:flex-row flex-col justify-between gap-8">
            <div className="lg:w-[50%] w-full lg:py-[50px] py-5 lg:px-[100px] px-8 bg_angular">
              <img src="/HRMS/performance_management/kpi.svg" alt="" className="block mx-auto multiShadow mb-5" />
              <h3 className="inter font-bold text-[18px] leading-[52px] text_gradient">KPI Score and Bonus</h3>
              <p className="font-light leading-6 text-light-gray">Your performance powerhouse. Keep records of KPI scores and reward employees with top-notch performance.</p>
            </div>

            <div className="lg:w-[50%] w-full lg:py-[50px] py-5 lg:px-[100px] px-8 bg_angular">
              <img src="/HRMS/performance_management/success.svg" alt="" className="block mx-auto multiShadow mb-5" />
              <h3 className="inter font-bold text-[18px] leading-[52px] text_gradient">Promotion Management</h3>
              <p className="font-light leading-6 text-light-gray">Simplify the often complex promotion process. Track eligibility criteria with zero effort and document promotion details with our user-friendly interface.</p>
            </div>
          </div>
        </div>
      </section>
      {/* 4th section individual section end */}

      {/* business strength policy */}
      <Manual_HR_section manual_resource={manual_resource} />

      {/* Performance organization */}
      <section className='performance_organized'>
        <div className='main_container flex lg:flex-row flex-col justify-between lg:items-end items-center lg:gap-12 gap-0'>
          <div className='lg:w-[55%] w-full'>
            <div className='number_div'>
              <h5 className='lg:text-[82px] text-[41px] sura leading-[16.5px] flex items-end text-[#FFF]'>71 <span className='lg:text-[41px] text-[20px] block'>%</span></h5>
            </div>
            <p className='inter lg:text-[28px] text-[14px] lg:leading-[48.5px] leading-[24px] font-light text-center text-[#FFF]'>of Employees Think They’ll be More Motivated & Engaged With Proper Recognition</p>
          </div>

          <div className='middle_hr mt-4 mb-4'></div>

          <div className='lg:w-[45%] w-full left_line'>
            <h3 className='inter lg:text-[37.5px] text-[16px] lg:leading-[38.5px] leading-[24px] text-center lg:text-left w-[75%] lg:w-full mx-auto lg:mx-0 text-[#FFF]'><span className='text-green font-semibold'>Improve</span> Employee Recognition of Your Organization!</h3>
            <div className="lg:mt-[30px] mt-5 text-center lg:text-left">
              <Button className={'action_btn2'} text={'Start Today !'} onClick={() => setOpenScheduleForm(true)} />
            </div>
          </div>
        </div>
      </section>

      {/* Left data schedule field  part-1 (common) */}
      <section className="px-4">
        <div className="main_container">
          <h2 className="lg:text-center text-left inter lg:mb-16 mb-5 lg:text-[36px] text-[20px] font-bold lg:leading-[50px] leading-8 text_gradient">Performance Management with KPI Scores and Bonuses</h2>

          <div className="flex lg:flex-row flex-col-reverse justify-between gap-5">
            <div className="lg:w-[50%] w-full">
              <p className="leading-6 lg:mb-7 mb-3 text-light-gray text-justify">Efficiently motivate, track, and reward high-performing employees with our KPI score and Bonuses Module. This system ensures transparency, identifies top performers, and encourages continuous improvement. Boost morale and drive success in your organization</p>
              <ul>
                <li className="flex lg:items-end items-center lg:mb-6 mb-5">
                  <img src="/HRMS/icons/color_like.webp" alt="" />
                  <p className="text-light-gray font-light ml-6 lg:mt-3 mt-0 lg:text-[16px] text-[14px]">Securely stores and organizes employee performance data</p>
                </li>
                <li className="flex lg:items-end items-center lg:mb-6 mb-5">
                  <img src="/HRMS/icons/color_like.webp" alt="" />
                  <p className="text-light-gray font-light lg:mt-3 mt-0 ml-6 lg:text-[16px] text-[14px]">Includes Key Performance Indicator (KPI) scores and bonuses</p>
                </li>
                <li className="flex lg:items-end items-center lg:mb-6 mb-5">
                  <img src="/HRMS/icons/color_like.webp" alt="" />
                  <p className="text-light-gray font-light lg:mt-3 mt-0 ml-6 lg:text-[16px] text-[14px]">Tracks individual performance over time</p>
                </li>
                <li className="flex lg:items-end items-center lg:mb-6 mb-5">
                  <img src="/HRMS/icons/color_like.webp" alt="" />
                  <p className="text-light-gray font-light lg:mt-3 mt-0 ml-6 lg:text-[16px] text-[14px]">Identifies top performers effortlessly</p>
                </li>
                <li className="flex lg:items-end items-center lg:mb-6 mb-5">
                  <img src="/HRMS/icons/color_like.webp" alt="" />
                  <p className="text-light-gray font-light lg:mt-3 mt-0 ml-6 lg:text-[16px] text-[14px]">Pinpoints areas of improvement with ease</p>
                </li>
                <li className="flex lg:items-end items-center lg:mb-6 mb-5">
                  <img src="/HRMS/icons/color_like.webp" alt="" />
                  <p className="text-light-gray font-light lg:mt-3 mt-0 ml-6 lg:text-[16px] text-[14px]">Facilitates finding top performers within the organization</p>
                </li>
              </ul>
            </div>

            <div className="lg:w-[50%] w-full">
              <img src="/HRMS/performance_management/screenshot_1.svg" className="block mb-5" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Right data schedule field  part-2 (common) */}
      <section className='px-4 overflow-hidden'>
        <div className="main_container">
          <div className="lg:w-[90%] w-full lg:mb-12 mb-0 mx-auto">
            <h2 className="text-center inter lg:mb-8 mb-5 lg:text-[36px] text-[20px] font-bold lg:leading-[50px] leading-8 text_gradient">Simplify Promotions</h2>
            <div className="flex items-center mb-[30px] lg:mr-[60px] mr-0">
              <img src="/HRMS/performance_management/icons/stroke_like.webp" alt="" className="lg:block hidden" />
              <p className="lg:text-[16px] text-[14px] roboto lg:ml-4 ml-0 lg:leading-6 leading-[22px] text-light-gray font-light">Handling employee promotions is another formidable challenge for most HR. The whole process includes various intricacies, from tracking eligibility criteria to documenting promotion details. Tackling this task manually can be cumbersome and error-prone, leading to misunderstandings and employee dissatisfaction, as well as making it more difficult to keep accurate records as the organization grows.</p>
            </div>
          </div>

          <div className='flex lg:flex-row flex-col justify-between relative'>
            {/* <div className='absolute top-[50%] left-0 w-[40%] h-[140%] bg-[#EAEAEA] translate-x-[-100px] translate-y-[-50%] border_top_right_radius lg:block hidden'></div> */}
            <div className='absolute top-[50%] translate-y-[-50%] translate-x-[-25px] left-0 w-[640px] h-[440px] lg:block hidden'>
              <img src="/HRMS/performance_management/screenshot_2.svg" alt="" className='w-full h-full lg:object-contain object-none' />
            </div>

            {/* responsive shape and image */}
            <div className="h-[250px] grid grid-cols-1 items-center relative z-[1] mb-10 lg:hidden block">
              <div className="absolute w-[70%] rounded-tr-[50%] translate-x-[-20px] h-full top-0 left-0 bg-light-white"></div>
              <img src="/HRMS/performance_management/screenshot_2.svg" alt="" className="w-[300px] mx-auto object-cover relative z-10" />
            </div>

            <div className='lg:w-[50%] lg:ml-auto ml-0 w-full lg:translate-x-[42px] translate-x-0'>
              <ul>
                <li className="flex lg:items-end items-center lg:mb-6 mb-5">
                  <img src="/HRMS/icons/color_like.webp" alt="" />
                  <p className="text-light-gray font-light ml-6 lg:mt-3 mt-0 lg:text-[16px] text-[14px]">Automate and simplify the promotion process with TechForing Human</p>
                </li>
                <li className="flex lg:items-end items-center lg:mb-6 mb-5">
                  <img src="/HRMS/icons/color_like.webp" alt="" />
                  <p className="text-light-gray font-light lg:mt-3 mt-0 ml-6 lg:text-[16px] text-[14px]">Streamline promotion workflows for greater efficiency</p>
                </li>
                <li className="flex lg:items-end items-center lg:mb-6 mb-5">
                  <img src="/HRMS/icons/color_like.webp" alt="" />
                  <p className="text-light-gray font-light lg:mt-3 mt-0 ml-6 lg:text-[16px] text-[14px]">Reduce administrative burden on HR teams</p>
                </li>
                <li className="flex lg:items-end items-center lg:mb-6 mb-5">
                  <img src="/HRMS/icons/color_like.webp" alt="" />
                  <p className="text-light-gray font-light lg:mt-3 mt-0 ml-6 lg:text-[16px] text-[14px]">Utilize straightforward tracking and eligibility criteria</p>
                </li>
                <li className="flex lg:items-end items-center lg:mb-6 mb-5">
                  <img src="/HRMS/icons/color_like.webp" alt="" />
                  <p className="text-light-gray font-light lg:mt-3 mt-0 ml-6 lg:text-[16px] text-[14px]">Ensure accuracy in promotion workflows</p>
                </li>
                <li className="flex lg:items-end items-center lg:mb-6 mb-5">
                  <img src="/HRMS/icons/color_like.webp" alt="" />
                  <p className="text-light-gray font-light lg:mt-3 mt-0 ml-6 lg:text-[16px] text-[14px]">Create a centralized record for easy promotion history maintenance</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* next level section (common) */}
      <section className='next_level px-4 relative'>
        <img src="/HRMS/noticeBoard_management/person-2.webp" alt="" className='h-[100%] absolute top-0 right-[6px] lg:hidden block' />
        <div className='main_container flex justify-between items-center'>
          <div className="w-[51%]">
            <h2 className='inter lg:text-[37.5px] text-[14px] font-semibold lg:leading-[48px] leading-[20px]'><span className='text-green'>Improve</span> <span className='text_gradient font-extralight lg:text-[22px] text-[14px]'> Employee Engagement With Smart</span> <span className='text_gradient'>Performance Management</span></h2>
            <div className="lg:mt-10 mt-2 text-left">
              <Button className={'action_btn'} text={'Learn more'} onClick={() => setOpenScheduleForm(true)} />
            </div>
          </div>
          <div className="w-[48%] lg:block hidden">
            <img src="/HRMS/performance_management/person-2.webp" alt="" className='w-[420px] mx-auto' />
          </div>
        </div>
      </section>

      {/* unlock the HRMS status details */}
      <section className="lg:block hidden">
        <div className="main_container">
          <h2 className="text-center inter lg:mb-16 mb-5 lg:text-[36px] text-[20px] font-bold lg:leading-[50px] leading-8 text_gradient">Unlock a World of Possibilities</h2>

          <div className="grid grid-cols-2 gap-x-10">
            {
              status_details.map((status) => <div key={status._id} className="flex items-center gap-2 mb-7">
                <div className="w-[20%]">
                  <div className="w-full h-[120px] shadow-shadow2.5x flex justify-center items-center">
                    <img src={status.img} alt="" />
                  </div>
                </div>

                <div className="ml-4 w-[80%]">
                  <h3 className="inter font-bold text-[18px] leading-[52px] text_gradient">{status.headTitle}</h3>
                  <p className="text-light-gray font-light leading-6">{status.contents}</p>
                </div>
              </div>
              )}
          </div>



        </div>
      </section>

      {/* for responsive of this section*/}
      <section className="px-4 lg:hidden block">
        <h2 className="inter font-bold text-[20px] leading-22px] text_gradient mb-4 ">Effortless Employee Management</h2>
        <p className="mb-20 font-light leading-[24px] text-light-gray">TechForing Human Employee Management Module is a sophisticated employee management solution, designed to ease your HR processes with a comprehensive suite of essential features</p>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true
          }}
          breakpoints={{
            480: {
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
            <div className="pb-10">
              <div className="flex flex-col items-center gap-2 mb-7">
                <div className="">
                  <div className="w-[120px] h-[120px] shadow-shadow2.5x flex justify-center items-center">
                    <img src="/HRMS/performance_management/icons/group_01.webp" alt="" className="w-[60px]" />
                  </div>
                </div>

                <div className="">
                  <h3 className="inter font-bold text-[18px] leading-[52px] text_gradient text-center">Performance Excellence</h3>
                  <p className="text-light-gray font-light leading-6 text-justify">Our module empowers you to track, evaluate, and nurture employee performance comprehensively. From project milestones to adherence to company standards, it's all at your fingertips.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pb-10">
              <div className="flex flex-col items-center gap-2 mb-7">
                <div className="">
                  <div className="w-[120px] h-[120px] shadow-shadow2.5x flex justify-center items-center">
                    <img src="/HRMS/performance_management/icons/group_02.webp" alt="" className="w-[60px]" />
                  </div>
                </div>

                <div className="">
                  <h3 className="inter font-bold text-[18px] leading-[52px] text_gradient text-center">KPI Score and Bonuses</h3>
                  <p className="text-light-gray font-light leading-6 text-justify">Drive your team towards exceptional results with Key Performance Indicators (KPIs) and bonuses. Securely store and access performance scores, and incentivize your employees to reach new heights.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pb-10">
              <div className="flex flex-col items-center gap-2 mb-7">
                <div className="">
                  <div className="w-[120px] h-[120px] shadow-shadow2.5x flex justify-center items-center">
                    <img src="/HRMS/performance_management/icons/group_03.webp" alt="" className="w-[60px]" />
                  </div>
                </div>

                <div className="">
                  <h3 className="inter font-bold text-[18px] leading-[52px] text_gradient text-center">Boost Morale and Productivity</h3>
                  <p className="text-light-gray font-light leading-6 text-justify">By recognizing and rewarding outstanding performance, you'll see an immediate boost in employee morale and productivity. Motivated teams consistently outperform expectations.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pb-10">
              <div className="flex flex-col items-center gap-2 mb-7">
                <div className="">
                  <div className="w-[120px] h-[120px] shadow-shadow2.5x flex justify-center items-center">
                    <img src="/HRMS/performance_management/icons/group_04.webp" alt="" className="w-[60px]" />
                  </div>
                </div>

                <div className="">
                  <h3 className="inter font-bold text-[18px] leading-[52px] text_gradient text-center">Data-Driven Insights</h3>
                  <p className="text-light-gray font-light leading-6 text-justify">Gain invaluable insights into your workforce's strengths and areas for improvement. Our module provides actionable data to help you set higher targets and strategically allocate bonuses.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pb-10">
              <div className="flex flex-col items-center gap-2 mb-7">
                <div className="">
                  <div className="w-[120px] h-[120px] shadow-shadow2.5x flex justify-center items-center">
                    <img src="/HRMS/performance_management/icons/group_05.webp" alt="" className="w-[60px]" />
                  </div>
                </div>

                <div className="">
                  <h3 className="inter font-bold text-[18px] leading-[52px] text_gradient text-center">Streamlined Promotions</h3>
                  <p className="text-light-gray font-light leading-6 text-justify">Simplify the often complex promotion process. Track eligibility criteria effortlessly and document promotion details with our user-friendly interface.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pb-10">
              <div className="flex flex-col items-center gap-2 mb-7">
                <div className="">
                  <div className="w-[120px] h-[120px] shadow-shadow2.5x flex justify-center items-center">
                    <img src="/HRMS/performance_management/icons/group_06.webp" alt="" className="w-[60px]" />
                  </div>
                </div>

                <div className="">
                  <h3 className="inter font-bold text-[18px] leading-[52px] text_gradient text-center">Accessible and Secure</h3>
                  <p className="text-light-gray font-light leading-6 text-justify">Your data is safe and accessible whenever you need it. We prioritize data security, so you can focus on achieving your business goals.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pb-10">
              <div className="flex flex-col items-center gap-2 mb-7">
                <div className="">
                  <div className="w-[120px] h-[120px] shadow-shadow2.5x flex justify-center items-center">
                    <img src="/HRMS/performance_management/icons/group_07.webp" alt="" className="w-[60px]" />
                  </div>
                </div>

                <div className="">
                  <h3 className="inter font-bold text-[18px] leading-[52px] text_gradient text-center">Customizable Solutions</h3>
                  <p className="text-light-gray font-light leading-6 text-justify">Tailor our Employee Performance Module to your organization's unique needs. It's your roadmap to success, designed with your company's specific goals in mind.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pb-10">
              <div className="flex flex-col items-center gap-2 mb-7">
                <div className="">
                  <div className="w-[120px] h-[120px] shadow-shadow2.5x flex justify-center items-center">
                    <img src="/HRMS/performance_management/icons/group_08.webp" alt="" className="w-[60px]" />
                  </div>
                </div>

                <div className="">
                  <h3 className="inter font-bold text-[18px] leading-[52px] text_gradient text-center">Exceptional Support</h3>
                  <p className="text-light-gray font-light leading-6 text-justify">Our team is dedicated to your success. We provide unparalleled customer support to ensure your experience is smooth and productive.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* unlock the HRMS status details */}

      {/* Frequently Ask Questions */}
      <Accordion_component accordion_list={accordion_list} />

      {/* footer bottom CTA (common) */}
      <FooterCTA
        imgSrc='/HRMS/performance_management/footer_bottom_cta.webp'
        title={
          <span>
            <span className='lg:text-[36px]'>
              Get a Clear Picture of Your <br /> Organization’s <span className="text-green font-semibold">Performance</span> Today</span>
          </span>
        }
        button={<Button className={'action_btn2'} text={'Start Today'} onClick={() => setOpenScheduleForm(true)} />}
      />
    </div>
  );
};

export default Performance_management;