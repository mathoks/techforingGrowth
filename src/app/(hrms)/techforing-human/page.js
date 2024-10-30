"use client";
import "../../globals.css";
import { useEffect, useState } from "react";
import Accordion_component from "@/components/Accordion_component/Accordion_component";
import Manual_HR_section from "@/components/Manual_HR_section/Manual_HR_section";
import Software_details_content2 from "@/components/Software_details_content2/Software_details_content2";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import FooterCTA from "@/section/FooterCTA";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { useGlobalContext } from "@/context/globalContext";
import { Button } from "@/components/SharedComponents";
import AdvantageVsDisadvantage from "@/section/AdvantageVsDisadvantage";
import { planning, adminList } from "/src/dummyData.js";
import BusinessTeamCTA from "@/section/BusinessTeamCTA";
import { recordKeeping, registration, exEmployee, training } from "/src/dummyData.js";

const hrms = () => {
  const { setOpenScheduleDemo, setOpenScheduleForm } = useGlobalContext();

  const [isAnimated, setIsAnimated] = useState(false);
  const [frame1, setFrame1] = useState(false);
  const [frame2, setFrame2] = useState(false);

  // This one is animation sections functionality
  useEffect(() => {
    const mainFrameElement = document.querySelector('.main_frame');
    const frame_1_Element = document.querySelector('.Frame_1');
    const frame_2_Element = document.querySelector('.Frame_2');

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
    img1: "/HRMS/icons/paper.webp",
    img2: "/HRMS/icons/document.webp",
    img3: "/HRMS/icons/all_people.webp",
    img4: "/HRMS/icons/desktop.webp",
    img5: "/HRMS/icons/list.webp",
    manualImage: "/HRMS/Employee_management/HRMS_Employee_management.webp",
    content1: "Getting stuck with large volumes of paperwork",
    content2: "Losing track of former employees’ data",
    content3: "Overall disarray in administration",
    content4: "Struggles with workplace planning",
    content5: "Inability to maintain a consistent employee evaluation"
  }

  /// employee details list
  const employee_data = [
    {
      img: "/HRMS/Employee_management/icons/Group_01.webp",
      head: "Employee Info",
      content: "Easily access and manage current employee information."
    },
    {
      img: "/HRMS/Employee_management/icons/Group_05.webp",
      head: "Department Management",
      content: "Organize your workforce into distinct departments for streamlined management."
    },
    {
      img: "/HRMS/Employee_management/icons/Group_02.webp",
      head: "Ex-Employee Record",
      content: "Maintain historical records of former employees for compliance and reference.."
    },
    {
      img: "/HRMS/Employee_management/icons/Group_06.webp",
      head: "Position Details",
      content: "Keep track of various job positions and roles within your company's hierarchy."
    },
    {
      img: "/HRMS/Employee_management/icons/Group_03.webp",
      head: "Admin Info",
      content: "Efficiently oversee administrative roles and permissions within your organization."
    },
    {
      img: "/HRMS/Employee_management/icons/Group_07.webp",
      head: "Training Program",
      content: "Plan and monitor employee training and development programs  with precision."
    },
    {
      img: "/HRMS/Employee_management/icons/Group_04.webp",
      head: "Employee Evaluation",
      content: "Assess employee performance and track progress effectively."
    },
    {
      img: "/HRMS/Employee_management/icons/Group_08.webp",
      head: "Resignation",
      content: "Manage employee resignations and off boarding seamlessly."
    },
  ]

  const details04 = {
    ScreenShot: '/HRMS/Employee_management/departmentList.webp',
    headTitle: "Gain Comprehensive Insights into Every Department",
    content01: "Manual HR management makes it challenging to gain insights into departmental performance and resource allocation.",
    content02: "Get comprehensive department data, facilitating better insight into every department, optimize resource allocation, and promote collaboration."
  }

  const details08 = {
    ScreenShot: '/HRMS/Employee_management/screenshot_8.webp',
    headTitle: "Inconsistent Employee Evaluation? Never Again!",
    content01: "You can do your best, but conducting consistent and objective employee evaluations will always be challenging, often resulting in inconsistent outcomes.",
    content02: "Automate your evaluation process with the dedicated evaluation feature and feel the change today! Our employee evaluation section streamlines the evaluation process, making it easier to manage and record performance data, track goals, and provide feedback consistently, whenever you need it!"
  }

  ///  Accordion list element
  const accordion_list = [
    {
      headContent: "What is the Employee Management Module, and why is it important for HR operations?",
      paraContent: "The Employee Management Module is a component of HR software that centralizes and automates various HR processes related to employee data, administration, training, evaluations, and more. It is crucial for improving efficiency, organization, and data accuracy in HR operations."
    },
    {
      headContent: "How does the module help with onboarding and offboarding processes?",
      paraContent: "The module streamlines onboarding by automating the collection of new employee information and simplifies offboarding by organizing and documenting the resignation process, making it smoother for both HR and departing employees."
    },
    {
      headContent: "Can I track employee training and development using this module?",
      paraContent: "Yes, the module includes a training feature that allows HR to track employee training progress, completion, and ongoing development initiatives."
    },
    {
      headContent: "How does the module assist in performance evaluations?",
      paraContent: "The module provides a dedicated section for employee evaluations, making it easier to record and manage performance data, set goals, and provide feedback consistently across the organization.4"
    },
    {
      headContent: " Is it possible to customize the module to match our company's specific HR processes and needs?",
      paraContent: "Of course! The employee management modules offer customization options to tailor the system to match your organization's unique HR workflows and requirements."
    },
    {
      headContent: " Does the module support reporting and analytics for HR decision-making?",
      paraContent: "Yes, most modules provide reporting and analytics tools, allowing HR professionals to generate insights and data-driven reports to make informed decisions."
    },
    {
      headContent: "How can the module help with workforce planning and resource allocation??",
      paraContent: "The Employee Position List and Department List features offer insights into staffing needs, departmental performance, and resource allocation, helping HR plan and optimize the workforce effectively."
    }
  ]


  return (
    <div className="flex flex-col lg:gap-24 gap-12">
      <section className='lg:py-[60px] py-[80px] px-4'>
        <div className='main_container flex lg:flex-row flex-col-reverse justify-between items-center'>
          <div className="lg:w-[45%] w-full">
            <h2 className='noto text_gradient lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-4 lg:block hidden'>Employee Management Made Easy</h2>
            <p className='roboto text-light-gray font-light text-[14px] lg:text-[16px] lg:leading-7 leading-[24px] text-justify lg:ml-0 ml-3'>Overwhelming amount of HR tasks slowing you down? It’s time to change your approach to employee management! Revolutionize your company’s HR processes and unlock unparalleled efficiency with TechForing Human! Our Employee Module is the ultimate solution for streamlining your workforce management and taking your organization to the next level.</p>
          </div>

          <div className="lg:w-[55%] w-full flex lg:flex-row flex-col justify-end lg:mb-0 mb-16">
            <h2 className='noto text_gradient lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-8 lg:hidden block '>Employee Management Made Easy</h2>
            <div className='lg:w-[530px] w-[200px] lg:mx-0 mx-auto lg:h-[395px] h-full relative'>
              <img src="/HRMS/Employee_management/combine_image/blob.webp" alt="" />
              <img src="/HRMS/Employee_management/combine_image/main-frame.webp" alt="" className={`main_frame ${isAnimated ? 'animate' : ''}`} />
              <img src="/HRMS/Employee_management/combine_image/person.webp" alt="" className='absolute bottom-[0px] left-[50%] translate-x-[-50%]' />
              <img src="/HRMS/Employee_management/combine_image/Frame-1.webp" alt="" className={`Frame_1 ${frame1 ? 'animate' : ''}`} />
              <img src="/HRMS/Employee_management/combine_image/Frame-2.webp" alt="" className={`Frame_2 ${frame2 ? 'animate' : ''}`} />
            </div>
          </div>
        </div>
      </section>

      {/* 4th unique sections */}
      <section className="py-[70px] lg:block hidden">
        <div className="main_container">
          <h2 className="inter font-bold text-[36px] leading-[56px] text_gradient text-center mb-8 ">Effortless Employee Management</h2>
          <p className="px-20 mb-10 font-light leading-[26px] text-light-gray text-center">TechForing Human Employee Management Module is a sophisticated employee management solution, designed to ease your HR processes with a comprehensive suite of essential features</p>

          <div className="grid grid-cols-2 gap-x-9 gap-y-5 justify-between">
            {
              employee_data.map((employee, index) => <div key={index} className="flex items-center p-5 angular_gradient border-[#182F59] border-l-2 rounded-lg">
                <img src={employee.img} alt="" />
                <div className="ml-8">
                  <h4 className="font-bold leading-6 text-light-gray mb-1">{employee.head}</h4>
                  <p className="font-light leading-6 text-light-gray">{employee.content}</p>
                </div>
              </div>)
            }
          </div>
        </div>
      </section>

      <section className="pt-5 pb-[60px] px-4 lg:hidden block">
        <h2 className="inter font-bold text-[20px] leading-22px] text_gradient mb-4 ">Effortless Employee Management</h2>
        <p className="mb-10 text-[14px] font-light leading-[20px] text-light-gray">TechForing Human Employee Management Module is a sophisticated employee management solution, designed to ease your HR processes with a comprehensive suite of essential features</p>
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
            <div className="pb-[60px]">
              <div className="p-5 angular_gradient border-[#182F59] border-l-2 rounded-lg mb-5">
                <div className="flex items-center mb-3">
                  <img src="/HRMS/Employee_management/icons/Group_01.webp" alt="" />
                  <h2 className="ml-5 font-bold leading-6 text-light-gray">Employee Info</h2>
                </div>
                <p className="font-light leading-6 text-light-gray">Easily access and manage current employee information.</p>
              </div>

              <div className="p-5 angular_gradient border-[#182F59] border-l-2 rounded-lg">
                <div className="flex items-center mb-3">
                  <img src="/HRMS/Employee_management/icons/Group_02.webp" alt="" />
                  <h2 className="ml-5 font-bold leading-6 text-light-gray">Ex-Employee Record</h2>
                </div>
                <p className="font-light leading-6 text-light-gray">Maintain historical records of former employees for compliance and reference.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pb-[60px]">
              <div className="p-5 angular_gradient border-[#182F59] border-l-2 rounded-lg mb-5">
                <div className="flex items-center mb-3">
                  <img src="/HRMS/Employee_management/icons/Group_03.webp" alt="" />
                  <h2 className="ml-5 font-bold leading-6 text-light-gray">Admin Info</h2>
                </div>
                <p className="font-light leading-6 text-light-gray">Efficiently oversee administrative roles and permissions within your organization.</p>
              </div>

              <div className="p-5 angular_gradient border-[#182F59] border-l-2 rounded-lg">
                <div className="flex items-center mb-3">
                  <img src="/HRMS/Employee_management/icons/Group_04.webp" alt="" />
                  <h2 className="ml-5 font-bold leading-6 text-light-gray">Employee Evaluation</h2>
                </div>
                <p className="font-light leading-6 text-light-gray">Assess employee performance and track progress effectively.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pb-[60px]">
              <div className="p-5 angular_gradient border-[#182F59] border-l-2 rounded-lg mb-5">
                <div className="flex items-center mb-3">
                  <img src="/HRMS/Employee_management/icons/Group_05.webp" alt="" />
                  <h2 className="ml-5 font-bold leading-6 text-light-gray">Department Management</h2>
                </div>
                <p className="font-light leading-6 text-light-gray">Organize your workforce into distinct departments for streamlined management.</p>
              </div>

              <div className="p-5 angular_gradient border-[#182F59] border-l-2 rounded-lg">
                <div className="flex items-center mb-3">
                  <img src="/HRMS/Employee_management/icons/Group_06.webp" alt="" />
                  <h2 className="ml-5 font-bold leading-6 text-light-gray">Position Details</h2>
                </div>
                <p className="font-light leading-6 text-light-gray">Keep track of various job positions and roles within your company's hierarchy.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pb-[60px]">
              <div className="p-5 angular_gradient border-[#182F59] border-l-2 rounded-lg mb-5">
                <div className="flex items-center mb-3">
                  <img src="/HRMS/Employee_management/icons/Group_07.webp" alt="" />
                  <h2 className="ml-5 font-bold leading-6 text-light-gray">Training Program</h2>
                </div>
                <p className="font-light leading-6 text-light-gray">Plan and monitor employee training and development programs  with precision.</p>
              </div>

              <div className="p-5 angular_gradient border-[#182F59] border-l-2 rounded-lg">
                <div className="flex items-center mb-3">
                  <img src="/HRMS/Employee_management/icons/Group_08.webp" alt="" />
                  <h2 className="ml-5 font-bold leading-6 text-light-gray">Resignation</h2>
                </div>
                <p className="font-light leading-6 text-light-gray">Manage employee resignations and offboarding seamlessly.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* 4th unique sections */}

      {/* business strength policy */}
      <Manual_HR_section manual_resource={manual_resource} />

      {/* Business team section  (common) */}
      <BusinessTeamCTA
        title={
          <>
            <span className="text_gradient">Still Stuck With </span><br /> <span className="text_gradient font-semibold">Manual HR</span> <span className="text_gradient">Process?</span>
          </>
        }
        subTitle={
          <>
            <span className="text_gradient">Dive into Employee Data, Training Insights, and More With</span> <span className="text-green font-bold lg:text-[22px] text-[9px]">TechForing Human!</span>
          </>
        }
        button={<Button className={'action_btn'} text={'Get Started'} onClick={() => setOpenScheduleForm(true)} />}
        imgSrc={'/HRMS/Employee_management/employee_business_team.svg'}
      />

      {/* Left data schedule field  part-1 (common) */}
      <AdvantageVsDisadvantage
        details={recordKeeping}
        imgSrc={'/HRMS/Employee_management/Record-Keeping.webp'}
        className={'lg:pb-5 pb-0'}
      />
      <AdvantageVsDisadvantage
        details={exEmployee}
        imgSrc={exEmployee.ScreenShot}
        shadowLeft={true}
        className={'flex-row-reverse'}
      />

      {/* working flow section (common) */}
      <section className='working_flow lg:mb-16 mb-0'>
        <div className='max-w-[1040px] mx-auto flex justify-between items-center px-4 relative lg:py-[100px] py-5'>
          <div className="w-[50%]">
            <h2 className='inter lg:text-[37.5px] text-[15px] mb-2 font-semibold lg:leading-[48px] leading-[22px]'><span className='text_gradient'>Elevate Your</span> <span className='text-green'>HR</span> <span className='text_gradient'>Workflow</span></h2>
            <h4 className='inter lg:text-[18px] text-[7.2px] mb-2 lg:leading-9 leading-2'>Experience the Future of HR management Today !</h4>
            <div className="lg:mt-10 mt-2 text-left">
              <Button className={'action_btn'} text={'Get A Demo'} onClick={() => setOpenScheduleDemo(true)} />
            </div>
          </div>
          <img src="/HRMS/Employee_management/business_person_banner.webp" alt="" className='lg:object-none object-cover w-[45%] h-[100%] absolute top-0 right-0 lg:translate-x-[154px] translate-x-0' />
        </div>
      </section>

      {/* Left data schedule field part-3 (common) */}
      <AdvantageVsDisadvantage
        details={adminList}
        imgSrc={adminList.ScreenShot}
      />

      {/* right data schedule field part-4 (common) */}
      <AdvantageVsDisadvantage
        details={details04}
        imgSrc={'/HRMS/Employee_management/departmentList.webp'}
        className={'flex-row-reverse'}
      />

      {/* Left data schedule field part-5 (common) */}
      <AdvantageVsDisadvantage
        details={planning}
        imgSrc={'/HRMS/Employee_management/planning.webp'}
      />

      {/* next level section (common) */}
      <section className='next_level px-4 relative'>
        <img src="/HRMS/Employee_management/person-2.webp" alt="" className=' h-[100%] absolute top-0 right-[10px] lg:hidden block' />
        <div className='main_container flex justify-between items-center max-sm:py-3'>
          <div className="w-[50%]">
            <h4 className='inter lg:text-[18px] text-[7.2px] mb-2 lg:leading-9 leading-2'>Efficiency, Accuracy and Transparency</h4>
            <h2 className='inter lg:text-[37.5px] text-[15px] font-semibold lg:leading-[48px] leading-[22px]'><span className='text_gradient'>Take Your</span> <span className='text-green'>HR</span> <span className='text_gradient'>Management to the Next Level!</span></h2>
            <div className="lg:mt-10 mt-2 text-left">
              <Button className={'action_btn'} text={'Start Today'} onClick={() => setOpenScheduleForm(true)} />
            </div>
          </div>
          <div className="w-[50%] lg:block hidden">
            <img src="/HRMS/Employee_management/person-2.webp" alt="" className='w-[420px] mx-auto' />
          </div>
        </div>
      </section>

      {/* right data schedule field part-6 (common) */}
      <AdvantageVsDisadvantage
        details={training}
        imgSrc={training.ScreenShot}
        className={'flex-row-reverse'}
        shadowLeft={true}
      />

      {/* Left data schedule field part-7  (common) */}
      <AdvantageVsDisadvantage
        className={'pt-10'}
        details={registration}
        imgSrc={registration.ScreenShot}
        shadowRight={true}
      />

      {/* right data schedule field part-8 (common) */}
      <section className='lg:py-[100px] py-[40px] px-4 overflow-hidden lg:mb-0 mb-0'>
        <div className='main_container flex_container relative'>
          <div className='div_shape_line_left lg:block hidden'></div>
          <div className='absolute top-[50%] translate-y-[-50%] translate-x-[-25px] left-0 w-[640px] h-[440px] lg:block hidden'>
            <img src='/HRMS/Employee_management/screenshot_8.webp' alt="" className='w-full h-full lg:object-contain object-none' />
          </div>

          <div className='lg:w-[50%] lg:ml-auto ml-0 w-full lg:translate-x-[42px] translate-x-0'>
            <Software_details_content2 details2={details08} />
          </div>
        </div>
      </section>

      {/* Frequently Ask Questions */}
      <Accordion_component accordion_list={accordion_list} />

      <FooterCTA
        imgSrc='/HRMS/Employee_management/footer_bottom_cta.webp'
        title={
          <>
            <span className="text-green font-semibold">Embrace</span> the Future of HR Management
          </>
        }
        button={<Button className={'action_btn2'} text={'Start Your Journey'} onClick={() => setOpenScheduleForm(true)} />}
      />
    </div>
  );
}

export default hrms;
