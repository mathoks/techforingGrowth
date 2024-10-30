"use client"
import React from 'react';
import { useEffect, useState } from "react";
import Manual_HR_section from '@/components/Manual_HR_section/Manual_HR_section';
import Accordion_component from '@/components/Accordion_component/Accordion_component';
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
import StyledCTA from '@/section/StyledCTA';
const document_management = () => {
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
    headTitle: "Manual Document Management is Slowing Your Organization Down!",
    img1: "/HRMS/document_management/icons/time.webp",
    img2: "/HRMS/document_management/icons/pc_doc.webp",
    img3: "/HRMS/document_management/icons/doc_list.webp",
    img4: "/HRMS/document_management/icons/search.webp",
    img5: "/HRMS/document_management/icons/paper.webp",
    manualImage: "/HRMS/document_management/HRMS_document_management.svg",
    content1: "Consumes more time and delays other processes",
    content2: "Data entry errors lead to inaccuracies and compliance issues.",
    content3: "Scattered documents make organization and retrieval challenging.",
    content4: "Extracting insights from paper is difficult.",
    content5: "Retrieving offsite documents incurs costs and delays."
  }

  const details01 = {
    ScreenShot: '/HRMS/document_management/screenshot_1.webp',
    headTitle: "Struggling With Scattered Employee Documents?",
    content01: "Managing various employee documents across multiple devices in different formats and locations can result in massive disorganization, as well as the risk of losing critical records.",
    content02: "With TechFoting Human’s advanced document management system, you’ll get a centralized repository for all employee documents. Say goodbye to losing crucial documents, centralize and organize all employee documents in one secure place with easy access, whenever and wherever!"
  }

  const details02 = {
    ScreenShot: '/HRMS/document_management/screenshot_2.svg',
    headTitle: "Mistakes in Expense Documents Can be Costly",
    content01: "Managing paid invoices, equipment lists, and warranties manually can lead to errors, delays, and a lack of visibility into financial records, leading to miscalculations and financial loss.",
    content02: "Automate your expense tracking with TechForing Human. The Expense Document Management feature allows you to store and organize all of your expense-related documents, reducing the chance of errors and providing real-time insights into financial data."
  }

  const details03 = {
    ScreenShot: '/HRMS/document_management/screenshot_3.svg',
    headTitle: "Error-Free Salary Sheets, Instantly",
    content01: "Manually preparing salary sheets while ensuring absolute accuracy in payroll administration is not only time-consuming but also error-prone.",
    content02: "Simplify the salary sheet processes with TechForing Human. Get a transparent and filterable solution to generate, process, and deliver error-free salary slips, enhancing efficiency and accuracy in your payroll administration."
  }

  const details04 = {
    ScreenShot: '/HRMS/document_management/screenshot_4.svg',
    headTitle: "Forget Commission Tracking Complexity",
    content01: "Tracking sales commissions and ensuring accurate compensation records manually can be overly complicated and challenging without a structured system.",
    content02: "Introducing the Commission Sheet Management feature for effortless organization. Easily categorize commission slips by employee name, position, and department, streamlining the addition and upload process for HR professionals, and ensuring precise and efficient commission management."
  }
  const details05 = {
    ScreenShot: '/HRMS/document_management/screenshot_5.svg',
    headTitle: "Say Goodbye to Vendor Document Management Hassles",
    content01: "Manually managing vendor documents can lead to delays, procurement errors, and chaotic record-keeping. These challenges can disrupt procurement processes, result in compliance issues, and waste valuable time and resources.",
    content02: "Automate your vendor document management today with a centralized system and streamline your company operations. Easily control vendor-related information, simplify procurement processes, and optimize workflows, so your organization can engage with vendors confidently and promptly while staying compliant with regulations and internal policies."
  }

  ///  Accordion list element
  const accordion_list = [
    {
      headContent: "What is HRMS document management, and why is it important?",
      paraContent: "HRMS document management is a feature in Human Resource Management Systems that allows organizations to electronically store, organize, and manage HR-related documents and files. It's important because it streamlines HR operations, ensures compliance, and enhances document security."
    },
    {
      headContent: "How does document management improve HR efficiency?",
      paraContent: "Document management improves HR efficiency by centralizing document storage, making retrieval faster, reducing manual data entry, and automating document-related tasks."
    },
    {
      headContent: "What types of documents can be managed using the HRMS document management feature?",
      paraContent: "You can manage a wide range of HR-related documents, including employee records, contracts, resumes, training materials, expense documents, invoices, salary slips, commission records, vendor documents, and more."
    },
    {
      headContent: "How does document security work in HRMS document management?",
      paraContent: "Document security is typically enforced through access controls and permissions. Only authorized users with the appropriate permissions can access or modify specific documents. This ensures that sensitive HR data remains confidential."
    },
    {
      headContent: "Can I access and manage documents remotely using the HRMS document management feature?",
      paraContent: "Yes, our HRMS systems offer remote access, allowing authorized users to access, upload, and manage documents from anywhere with an internet connection. This is especially useful for remote work environments."
    },
    {
      headContent: "How does the HRMS document management feature help with compliance and audits?",
      paraContent: "HRMS document management simplifies compliance by providing easy access to required documents during audits. It ensures that documents are stored securely and can be retrieved quickly, helping organizations meet legal and regulatory requirements."
    },
    {
      headContent: "Can I track changes and revisions made to documents using the HRMS document management feature?",
      paraContent: "You can. Our HRMS systems offer version control features that allow you to track changes made to documents over time. You can view the document's revision history and revert to previous versions if needed."
    },
    {
      headContent: "Is it possible to categorize and organize documents based on departments or employee positions?",
      paraContent: "Yes, our HRMS document management systems allow you to categorize and organize documents based on various criteria, such as departments, positions, employee names, document types, and more. This makes it easier to locate specific documents."
    },
    {
      headContent: "What kind of training and support is provided for using the HRMS document management feature?",
      paraContent: "We offer training and support resources, including user manuals, video tutorials, and customer support teams to assist users in learning and using the document management feature effectively."
    }
  ]
  return (
    <div className='flex flex-col lg:gap-24 gap-12'>
      <section className='px-4 lg:min-h-[517px] flex items-center'>
        <div className='main_container flex lg:flex-row flex-col-reverse justify-between items-center'>
          <div className="lg:w-[45%] w-full">
            <h2 className='noto text_gradient lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-4 lg:block hidden'>One-Stop Document Management</h2>
            <p className='roboto text-light-gray font-light text-[14px] lg:text-[16px] lg:leading-7 leading-[24px] text-justify lg:ml-0 ml-3'>Experience a revolutionary shift from paper-based bureaucracy to digital efficiency with our cutting-edge Document Management Module. Say goodbye to document management-related chaos, administrative hassles, and compliance worries, and embrace the eco-conscious, secure, and accessible world of document handling. Leave stacks of paper behind and welcome a welcome a pixel-perfect era.</p>
          </div>

          <div className="lg:w-[55%] w-full flex lg:flex-row flex-col justify-end lg:mb-0 mb-16">
            <h2 className='noto text_gradient lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-8 lg:hidden block'>One-Stop Document Management</h2>
            <div className='lg:w-[530px] w-[200px] lg:mx-0 mx-auto lg:h-[395px] h-full relative'>
              <img src="/HRMS/document_management/combine_image/blob.webp" alt="" />
              <img src='/HRMS/document_management/combine_image/main-frame.webp' alt="" className={`main_frame ${isAnimated ? 'animate' : ''}`} />
              <img src="/HRMS/document_management/combine_image/person.webp" alt="" className='absolute bottom-[5px] left-[50%] translate-x-[-50%]' />
              <img src="/HRMS/document_management/combine_image/Frame-1.webp" alt="" className={`Frame_1 ${frame1 ? 'animate' : ''}`} />
              <img src="/HRMS/document_management/combine_image/Frame-2.webp" alt="" className={`Frame_02 absolute lg:bottom-[-15px] bottom-[-50px] lg:right-[180px] right-[12px] ${frame2 ? 'animate' : ''}`} />
            </div>
          </div>
        </div>
      </section>
      {/* 4th section individual section start */}
      <section className='lg:block hidden'>
        <div className="main_container">
          <div className='mb-16'>
            <h2 className="text-center inter mb-8 text-[36px] font-bold leading-[50px] text_gradient">Upgrade How You Handle Documents</h2>
            <p className="mb-16 leading-6 text-light-gray px-14 text-center">Is your HR bogged down in a sea of paperwork, spending endless hours on administrative tasks, and struggling to handle other HR processes? It’s time to embrace a transformative solution with TechForing Human</p>
          </div>
          <div className='flex justify-between items-center'>
            <div className='w-[33.33%] flex justify-end'>
              <div className='p-5 w-[280px] h-[220px] border-r-[1px] border-solid border-[#182F59] border-b-[1px]'>
                <h3 className='font-medium text-[20px] leading-7 text_gradient mb-5'>Centralized Employee Documentation</h3>
                <p className='font-light text-[#333] leading-6'>Centralize and secure all your employee documents, simplifying the organization and reducing administrative burdens.</p>
              </div>
            </div>

            <div className='w-[33.33%]'>
              <img src="/HRMS/document_management/attention.webp" alt="" />
            </div>

            <div className='w-[33.33%] flex justify-start'>
              <div className='p-5 w-[280px] h-[220px] border-l-[1px] border-solid border-[#182F59] border-b-[1px]'>
                <h3 className='font-medium text-[20px] leading-7 text_gradient mb-5'>Employee Salary Sheet</h3>
                <p className='font-light text-[#333] leading-6'>Access transparent salary slips by name, department, and month, revolutionizing your payroll administration.</p>
              </div>
            </div>
          </div>

          <div className='flex justify-between items-center'>
            <div className='w-[33.33%] flex justify-end'>
              <div className='p-5 w-[280px] h-[220px] border-r-[1px] border-solid border-[#182F59] border-t-[1px] translate-x-[30px] translate-y-[-50px]'>
                <h3 className='font-medium text-[20px] leading-7 text_gradient mb-5'>Expense Document Management</h3>
                <p className='font-light text-[#333] leading-6'>Automate your expense tracking, manage paid invoices and warranties, and gain financial clarity with ease.</p>
              </div>
            </div>

            <div className='w-[33.33%] flex justify-center'>
              <div className='p-5 w-[280px] h-[220px] border-l-[1px] border-t-[1px] border-solid border-[#182F59] border-r-[1px]'>
                <h3 className='font-medium text-[20px] leading-7 text_gradient mb-5'>Vendor Documents</h3>
                <p className='font-light text-[#333] leading-6'>Automate vendor document management, take control of vendor information and optimize procurement processes for maximum efficiency.</p>
              </div>
            </div>

            <div className='w-[33.33%] flex justify-start'>
              <div className='p-5 w-[280px] h-[220px] border-l-[1px] border-solid border-[#182F59] border-t-[1px] translate-x-[-30px] translate-y-[-50px]'>
                <h3 className='font-medium text-[20px] leading-7 text_gradient mb-5'>Commission Sheet</h3>
                <p className='font-light text-[#333] leading-6'>Simplify commission tracking with categorized slips by name, position, and department, ensuring precision in compensation management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* responsive this section into carousel/slider */}
      <section className="px-4 lg:hidden block">
        <h2 className="inter font-bold text-[20px] leading-22px] text_gradient mb-4 ">Upgrade How You Handle Documents</h2>
        <p className="mb-10 text-[14px] font-light leading-[24px] text-light-gray">Is your HR bogged down in a sea of paperwork, spending endless hours on administrative tasks, and struggling to handle other HR processes? It’s time to embrace a transformative solution with TechForing Human</p>
        <img src="/HRMS/document_management/attention.webp" alt="" />
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
                <h2 className="text-center mb-5 text-[18px] font-bold leading-6 text_gradient">Centralized Employee Documentation</h2>
                <p className="font-light text-[14px] leading-6 text-justify text-[#333]">Centralize and secure all your employee documents, simplifying the organization and reducing administrative burdens.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pb-5">
              <div className="px-5 py-10">
                <h2 className="text-center mb-5 text-[18px] font-bold leading-6 text_gradient">Employee Salary Sheet</h2>
                <p className="font-light text-[14px] leading-6 text-justify text-[#333]">Access transparent salary slips by name, department, and month, revolutionizing your payroll administration.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pb-5">
              <div className="px-5 py-10">
                <h2 className="text-center mb-5 text-[18px] font-bold leading-6 text_gradient">Expense Document Management</h2>
                <p className="font-light text-[14px] leading-6 text-justify text-[#333]">Automate your expense tracking, manage paid invoices and warranties, and gain financial clarity with ease.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pb-5">
              <div className="px-5 py-10">
                <h2 className="text-center mb-5 text-[18px] font-bold leading-6 text_gradient">Vendor Documents</h2>
                <p className="font-light text-[14px] leading-6 text-justify text-[#333]">Automate vendor document management, take control of vendor information and optimize procurement processes for maximum efficiency.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pb-5">
              <div className="px-5 py-10">
                <h2 className="text-center mb-5 text-[18px] font-bold leading-6 text_gradient">Commission Sheet</h2>
                <p className="font-light text-[14px] leading-6 text-justify text-[#333]">Simplify commission tracking with categorized slips by name, position, and department, ensuring precision in compensation management.</p>
              </div>
            </div>
          </SwiperSlide>


        </Swiper>
      </section>
      {/* 4th section individual section end */}

      {/* business strength policy */}
      <Manual_HR_section manual_resource={manual_resource} />
      <BusinessTeamCTA
        title={
          <p className='text-center'>
            <span className="text_gradient">Simplify </span> <span className="text_gradient font-semibold">Document</span> <span className="text_gradient">Management</span>
          </p>
        }
        subTitle={
          <p className='text-center'>
            <span className="text_gradient">Say Goodbye to Paperwork, Embrace Efficiency with Our Document Management Solution</span>
          </p>
        }
        button={
          <div className='flex items-start justify-center'>
            <Button className={'action_btn'} text={'Explore More'} onClick={() => setOpenScheduleForm(true)} />
          </div>
        }
        imgSrc={'/HRMS/document_management/document_business_team.svg'}
      />
      <AdvantageVsDisadvantage
        details={details01}
        imgSrc={details01.ScreenShot}
        shadowRightBL={true}
      />
      <AdvantageVsDisadvantage
        details={details02}
        imgSrc={details02.ScreenShot}
        className={'flex-row-reverse'}
        shadowLeft={true}
      />
      {/* Employee organization */}
      <section className='document_organized'>
        <div className='main_container flex lg:flex-row flex-col justify-between items-center lg:gap-6 gap-0'>
          <div className='lg:w-[55%] w-full'>
            <p className='inter lg:text-[28px] text-[14px] lg:leading-[48px] leading-[24px] font-light text-center text-[#FFF] lg:px-0 px-5'>Businesses Waste an Average of <span className="font-semibold lg:text-[52px] text-[18px]"><span className="sura">$20,000</span></span> on Document Issues</p>
          </div>

          <div className='middle_hr mt-4 mb-4'></div>

          <div className='lg:w-[45%] w-full left_line'>
            <h3 className='inter lg:text-[37.5px] text-[16px] lg:leading-[38.5px] leading-[24px] text-center lg:text-left w-[90%] lg:w-full mx-auto lg:mx-0 text-[#FFF]'><span className='font-medium text-[16px]'>Save Your Resources With</span> <span className='lg:text-[37.5px] text-[15px]'>Advanced</span> <span className='font-semibold text-green'>Document</span> <span className='lg:text-[37.5px] text-[15px]'>Management</span></h3>
            <div className="lg:mt-[30px] mt-5 text-center ">
              <Button className={'action_btn2'} text={'See How'} onClick={() => setOpenScheduleDemo(true)} />
            </div>
          </div>
        </div>
      </section>
      <AdvantageVsDisadvantage
        details={details03}
        imgSrc={details03.ScreenShot}
        shadowRight={true}
      />
      <AdvantageVsDisadvantage
        details={details04}
        imgSrc={details04.ScreenShot}
        className={'flex-row-reverse'}
        shadowLeft={true}
      />

      {/* CTA Section */}
      <StyledCTA
        imgSrc={'/HRMS/document_management/C_CTA.webp'}
        reverse={true}
        gap={'lg:gap-0'}
        content={
          <div>
            <h2 className="noto font-extralight lg:text-[28px] text-[12px] lg:mb-5 mb-1 text_gradient lg:text-start text-center">Over <span className="font-normal lg:text-[36px] text-[16px]">95%</span> of businesses still use <span className="font-normal lg:text-[36px] text-[16px]">paper-based</span> documentation</h2>
            <div className="lg:mt-6 flex lg:flex-row flex-col lg:gap-6 gap:1 items-center">
              <p>
                <span className='inter font-semibold lg:text-[42px] text-[16px] text_gradient'>Join the </span> <span className='inter text-green font-semibold lg:text-[52px] text-[24px]'> 5%</span>
              </p>
              <Button className={'action_btn'} text={'Get Started'} onClick={() => setOpenScheduleForm(true)} />
            </div>
          </div>
        }
        imgTransform={'lg:-translate-x-[54%] -translate-x-[47%]'}
      />
      <AdvantageVsDisadvantage
        details={details05}
        imgSrc={details05.ScreenShot}
        className={'pb-1'}
      />
      {/* Frequently Ask Questions */}
      <Accordion_component accordion_list={accordion_list} />

      {/* footer bottom CTA (common) */}
      <FooterCTA
        imgSrc='/HRMS/document_management/footer_bottom_cta.svg'
        title={
          <span className='lg:text-[36px]'>
            Ready for<span className="text-green font-semibold"> Error-Free </span>Document Management?
          </span>
        }
        button={<Button className={'action_btn2'} text={'Start Today'} onClick={() => setOpenScheduleForm(true)} />}
      />
    </div>
  );
};

export default document_management;