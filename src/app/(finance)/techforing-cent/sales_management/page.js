"use client"
import Accordion_component from '@/components/Accordion_component/Accordion_component';
import Manual_Finanace_section from '@/components/Manual_Finanace_section/Manual_Finanace_section';
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
import AdvantageVsDisadvantage from "@/section/AdvantageVsDisadvantage";
import BusinessTeamCTA from '@/section/BusinessTeamCTA';
const Sales_management = () => {
  const { setOpenScheduleDemo, setOpenScheduleForm } = useGlobalContext();

  // For Manual_Finance_Section system follow up
  const manual_resource = {
    headTitle: "Obstacles in Manual Sales Management",
    img1: "/Finance/Sales_management/icons/file_err.webp",
    img2: "/Finance/Sales_management/icons/doc_err.webp",
    img3: "/Finance/Sales_management/icons/doc_list.webp",
    img4: "/Finance/Sales_management/icons/dislike.webp",
    img5: "/Finance/Sales_management/icons/particles.webp",
    manualImage: "/Finance/Sales_management/Finance_sales_management.svg",
    content1: "Manually handling sales data can be labor-intensive and error-prone.",
    content2: "Manual processes can result in a lack of real-time insights and delayed access to crucial sales data, obstructing decision-making.",
    content3: "Managing customer invoices and tracking payment statuses manually can be inefficient and disorganized.",
    content4: "Delays in invoicing and order processing can negatively impact customer satisfaction and retention.",
    content5: "Manual sales management can become increasingly complex and unsustainable with your business’s growth."
  }

  const details01 = {
    ScreenShot: '/Finance/Sales_management/screenshot_1.svg',
    headTitle: "Detailed Sales Data",
    content01: "Manually tracking and managing sales data can be a challenge for HR professionals, leading to errors, delayed access to critical information, and difficulty in decision-making; ultimately making it difficult for the HR team to provide accurate and timely insights to the management.",
    content02: "Simplify the sales management process with TechForing Cent. Automate sales data entry, categorize sales data and get region-specific sales details with just a few clicks. Get accurate and updated sales information instantly so you can make quick and informed decisions to support business growth effectively."
  }

  const details02 = {
    ScreenShot: '/Finance/Sales_management/screenshot_2.svg',
    headTitle: "Easy Customer Invoice Management",
    content01: "Manual invoice management is a time-consuming and error-prone process, leading to delayed payment processing and potentially affecting the cash flow. Maintaining organized records and ensuring customer satisfaction is also a challenging task for HR professionals.",
    content02: "Overcome invoicing challenges with TechForing Cent's automated invoicing system. HR professionals can streamline invoicing, track payment dates, and manage client lists in just a few clicks, reducing error risks, enhancing customer satisfaction, and saving valuable HR time."
  }

  const details03 = {
    ScreenShot: '/Finance/Sales_management/screenshot_3.webp',
    headTitle: "Get Data-Driven Sales Projection",
    content01: "Getting accurate sales forecasts is challenging for every organization. Using manual methods only adds to the complexity, not providing enough insights for effective resource allocation and future planning.",
    content02: "The Sales Projection feature provides powerful tools and a comprehensive sales history, allowing HR professionals to get accurate sales forecasts. This allows HR to optimize resource allocation, align hiring strategies with sales projections, and manage workforce planning effectively."
  }

  ///  Accordion list element
  const accordion_list = [
    {
      headContent: "What is the Sales Management module in HRMS?",
      paraContent: "The Sales Management module in HRMS is a feature-rich component designed to help organizations streamline their sales processes, manage customer invoices, and make accurate sales projections."
    },
    {
      headContent: "How can the Sales Management module improve our sales processes?",
      paraContent: "The module can enhance sales processes by providing access to organized sales categories, regional sales insights, and comprehensive customer details. It enables efficient data management and empowers sales teams to make informed decisions."
    },
    {
      headContent: "What challenges does manual sales management pose for HR professionals?",
      paraContent: "Manual sales management can be time-consuming, error-prone, and can lead to delayed access to critical information. It also hinders the ability to make data-driven decisions and provide valuable insights to management."
    },
    {
      headContent: " How does the Sales Management module address these challenges?",
      paraContent: "The module automates data entry, categorizes sales, and offers region-wise sales lists. It streamlines invoicing, tracks payment dates, and ensures organized records, reducing errors and improving decision-making efficiency for HR professionals."
    },
    {
      headContent: "Can the Sales Management module help with sales forecasting?",
      paraContent: "Yes, the module includes a Sales Projection feature that provides accurate forecasting tools and comprehensive historical data. This assists HR professionals in optimizing resource allocation and aligning hiring strategies with sales projections."
    },
    {
      headContent: "Is the module user-friendly?",
      paraContent: "Absolutely. The module is designed with a user-friendly interface, making it easy for HR professionals to navigate and use its features efficiently."
    },
    {
      headContent: " How can I request a demo or get more information about the Sales Management module?",
      paraContent: "To request a demo or obtain more information about the Sales Management module, you can reach out to our support team via the contact information provided on the website."
    },
    {
      headContent: "Is my sales data secure with the Sales Management module?",
      paraContent: "Yes, we prioritize data security. Your sensitive sales data is protected by top-notch security measures to ensure confidentiality and compliance with data protection regulations."
    },
    {
      headContent: "Can the Sales Management module scale with our growing business?",
      paraContent: "Absolutely. The module is designed to be scalable, allowing it to grow with your business needs without limitations."
    },
    {
      headContent: "How can the Sales Management module help our organization outshine the competition?",
      paraContent: "By providing accurate sales data, efficient processes, and insights into customer numbers and revenue opportunities, the module enables organizations to optimize resource allocation and gain a competitive edge in the market."
    }
  ]

  return (
    <div className='flex flex-col lg:gap-24 gap-12'>
      <section className='px-4 lg:min-h-[517px] flex items-center'>
        <div className='main_container flex lg:flex-row flex-col-reverse justify-between items-center'>
          <div className="lg:w-[45%] w-full">
            <h2 className='noto text_gradient_finance lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-4 lg:block hidden'>Take Your Sales Performance to the Next Level</h2>
            <p className='roboto text-light-gray font-light text-[14px] lg:text-[16px] lg:leading-7 leading-[24px] text-justify lg:ml-0 ml-3'>Struggling with an overwhelming amount of sales data, client invoices, and sales projections? Is sales management becoming a time-consuming, error-prone process with a lack of clear insights? Our Sales Management feature is here to make your sales process efficient, accurate, and insightful, taking your sales performance to the next level!</p>
          </div>

          <div className="lg:w-[55%] w-full flex lg:flex-row flex-col justify-end lg:mb-0 mb-12">
            <h2 className='noto text_gradient_finance lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-8 lg:hidden block '>Take Your Sales Performance to the Next Level</h2>
            <div className='lg:w-[530px] w-[200px] lg:mx-0 mx-auto lg:h-[395px] h-full relative'>
              <img src="/Finance/Sales_management/combine_image/blob.webp" alt="" />
              <img src="/Finance/Sales_management/combine_image/person.webp" alt="" className='absolute lg:bottom-[5px] bottom-[1px] left-[50%] translate-x-[-50%]' />
            </div>
          </div>
        </div>
      </section>
      {/* 4th section individual section start */}
      <section className='lg:block hidden'>
        <div className='main_container'>
          <h2 className="text-center inter mb-8 text-[36px] font-bold leading-[50px] text_gradient_finance">Simplify Sales Management</h2>
          <p className="mb-16 leading-6 text-light-gray px-14 text-center">Our Sales Management Module covers all the basic tasks you need to handle sales, customer invoices, and projections with precision and efficiency.</p>

          <div className='grid grid-cols-3 gap-5 mt-[250px]'>
            <div className='px-[40px] py-[60px] angular_gradient2 relative'>
              <img src="/Finance/Tax/tax_01.webp" alt="" className='absolute top-[-190px] left-[50%] translate-x-[-50%] block mx-auto shadow-shadow1.5x rounded-[20px]' />
              <h2 className="mb-4 font-bold text-[22px] leading-6 text_gradient_finance">All Sales</h2>
              <p className="font-light leading-6 text-light-gray text-justify">Organize sales data with sales categories, regional insights, and complete control over customer details.</p>
            </div>

            <div className='px-[40px] py-[60px] angular_gradient2 relative'>
              <img src="/Finance/Tax/tax_02.webp" alt="" className='absolute top-[-190px] left-[50%] translate-x-[-50%] block mx-auto shadow-shadow1.5x rounded-[20px]' />
              <h2 className="mb-4 font-bold text-[22px] leading-6 text_gradient_finance">Customer Invoices</h2>
              <p className="font-light leading-6 text-light-gray text-justify">Simplify invoicing, stay organized, and boost revenue with our user-friendly interface and flexible currency filters.</p>
            </div>

            <div className='px-[40px] py-[60px] angular_gradient2 relative'>
              <img src="/Finance/Tax/tax_03.webp" alt="" className='absolute top-[-190px] left-[50%] translate-x-[-50%] block mx-auto shadow-shadow1.5x rounded-[20px]' />
              <h2 className="mb-4 font-bold text-[22px] leading-6 text_gradient_finance">Leave Report</h2>
              <p className="font-light leading-6 text-light-gray text-justify">Wave goodbye to manual leave tracking; automate and gain insights into employee leave trends.</p>
            </div>
          </div>
        </div>
      </section>
      {/* responsive section for this */}
      <section className="px-4 lg:hidden block">
        <h2 className="inter font-bold text-[20px] leading-22px] text_gradient_finance mb-4">Simplify Sales Management</h2>
        <p className="mb-10 text-[14px] font-light leading-[20px] text-light-gray">Our Sales Management Module covers all the basic tasks you need to handle sales, customer invoices, and projections with precision and efficiency.</p>
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
              <div className="px-5 py-10 angular_gradient">
                <img src="/Finance/Tax/tax_02.webp" alt="" className='block mx-auto shadow-shadow1.5x rounded-[20px] mb-5' />
                <h2 className="text-center mb-3 text-[18px] font-bold leading-6 text_gradient_finance">All Sales</h2>
                <p className="font-light text-[14px] leading-6 text-justify text-light-gray">Organize sales data with sales categories, regional insights, and complete control over customer details.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pb-[60px]">
              <div className="px-5 py-10 angular_gradient">
                <img src="/Finance/Tax/tax_02.webp" alt="" className='block mx-auto shadow-shadow1.5x rounded-[20px] mb-5' />
                <h2 className="text-center text-[18px] mb-3 font-bold leading-6 text_gradient_finance">Customer Invoices</h2>
                <p className="font-light text-[14px] leading-6 text-justify text-light-gray">Simplify invoicing, stay organized, and boost revenue with our user-friendly interface and flexible currency filters.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pb-[60px]">
              <div className="px-5 py-10 angular_gradient">
                <img src="/Finance/Tax/tax_03.webp" alt="" className='block mx-auto shadow-shadow1.5x rounded-[20px] mb-5' />
                <h2 className="text-center text-[18px] mb-3 font-bold leading-6 text_gradient_finance">Leave Report</h2>
                <p className="font-light text-[14px] leading-6 text-justify text-light-gray">Wave goodbye to manual leave tracking; automate and gain insights into employee leave trends.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* 4th section individual section end */}
      {/* business strength policy */}
      <Manual_Finanace_section manual_resource={manual_resource} />

      {/* Employee organization */}
      <section className='sales_management_organized'>
        <div className='main_container flex lg:flex-row flex-col justify-between items-center lg:gap-6 gap-0'>
          <div className='lg:w-[55%] w-full'>
            <p className='roboto lg:text-[28px] text-[14px] lg:leading-[48px] leading-[24px] font-light text-center text-[#FFF] lg:px-0 px-5'>Gain <span className="sura lg:text-[52px] text-[24px] font-bold">360</span> degree insights for smarter decision-making</p>
          </div>

          <div className='middle_hr mt-4 mb-4'></div>

          <div className='lg:w-[45%] w-full left_line'>
            <h3 className='roboto lg:text-[28px] text-[16px] lg:leading-[38.5px] leading-[24px] text-center lg:text-left font-semibold text-[#FFF]'><span className='font-extralight'>Unlock </span>
              <span className='font-semibold text-green'>Sales Success </span> <span className='font-extralight'>with </span><span className='lg:text-[36px] text-[16px] font-semibold'>TechForing Cent</span></h3>
            <div className="lg:mt-[30px] mt-5 flex md:justify-start justify-center">
              <Button className={'action_btn2'} text={'See How'} onClick={() => setOpenScheduleForm(true)} />
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
        className='flex-row-reverse'
      />
      <BusinessTeamCTA
        reverse={true}
        title={
          <span className="lg:text-[42px] block text-[15px] font-semibold inter text-green lg:w-[80%] w-full mx-auto lg:mb-5 mb-2 lg:text-center text-left">Supercharge <span className='text_gradient_finance'> Your Sales Strategy!</span></span>
        }
        subTitle={
          <p className="inter font-extralight lg:text-[22px] text-[10px] text_gradient_finance lg:px-10 px-0 lg:text-center text-left">Simplify sales processes, reduce errors, and achieve maximum growth</p>
        }
        button={
          <div className='flex items-start justify-center'>
            <Button className={'action_btn'} text={'Request Consultation'} onClick={() => setOpenScheduleDemo(true)} />
          </div>
        }
        imgSrc={'/Finance/Sales_management/sales_business_team.webp'}
      />
      <AdvantageVsDisadvantage
        details={details03}
        imgSrc={details03.ScreenShot}
        shadowRightBL={true}
      />
      {/* Frequently Ask Questions */}
      <Accordion_component accordion_list={accordion_list} />
      <FooterCTA
        imgSrc='/Finance/Sales_management/footer_bottom_cta.svg'
        title={
          <span className='flex flex-col lg:items-start items-center'>
            <span className='lg:text-[37.5px] text-[15px]'>
              Ready to <span className="text-green font-semibold">Boost</span> Your Sales Management?
            </span>
            <span className="lg:text-[18px] text-[12px] inter text-light-white2 lg:mb-2 mb-2">
              Discover How TechForing Growth can transform your business
            </span>
          </span>
        }
        button={
          <Button className={'action_btn2'} text={'Contact Us'} onClick={() => setOpenScheduleForm(true)} />
        }
      />
    </div>
  );
};

export default Sales_management;