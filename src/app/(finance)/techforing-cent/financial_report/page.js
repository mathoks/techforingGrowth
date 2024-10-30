"use client"
import Accordion_component from '@/components/Accordion_component/Accordion_component';
import Manual_Finanace_section from '@/components/Manual_Finanace_section/Manual_Finanace_section';
import { useGlobalContext } from "@/context/globalContext";
import { Button } from '@/components/SharedComponents';
import FooterCTA from '@/section/FooterCTA';
import AdvantageVsDisadvantage from "@/section/AdvantageVsDisadvantage";
import BusinessTeamCTA from '@/section/BusinessTeamCTA';

const Financial_report = () => {
  const { setOpenScheduleDemo, setOpenScheduleForm } = useGlobalContext();

  // For Manual_Finance_Section system follow up
  const manual_resource = {
    headTitle: "The Drawbacks of Manual Financial Report Management",
    img1: "/Finance/finance_report/icons/file_err.webp",
    img2: "/Finance/finance_report/icons/time.webp",
    img3: "/Finance/finance_report/icons/doc_err.webp",
    img4: "/Finance/finance_report/icons/pie_cash.webp",
    img5: "/Finance/finance_report/icons/money_decrease.webp",
    manualImage: "/Finance/finance_report/Finance_report.webp",
    content1: "Manual data entry increases the risk of errors in financial reports, which can lead to incorrect decisions, financial losses, and compliance violations.",
    content2: "Manual reporting is often slow, causing delays in decision-making, which can result in missed opportunities and reduced competitiveness.",
    content3: "Manual handling of sensitive financial data increases the risk of data breaches, potentially exposing the organization to data theft and security threats.",
    content4: "Errors in manual reporting can lead to inaccurate budgeting and financial planning, impacting the organization's financial health.",
    content5: "Inaccurate financial reporting can result in financial losses, affecting the organization's profitability and financial stability."
  }

  const details01 = {
    ScreenShot: '/Finance/finance_report/screenshot_1.webp',
    headTitle: "Comprehensive Balance Sheet",
    content01: "HR professionals often face challenges in efficiently managing and tracking funds from various countries. Manually handling balance sheets can be time-consuming and prone to errors, leading to inaccuracies and compliance issues.",
    content02: "The Balance Sheet feature simplifies fund management by providing a user-friendly interface to manage funds from different countries, reducing the risk of errors and enhancing accuracy. This way, HR professionals can have a clear and up-to-date view of financial resources and have a simplified process of adding new entries to the balance sheet list."
  }

  const details02 = {
    ScreenShot: '/Finance/finance_report/screenshot_2.svg',
    headTitle: "Simplified Expense Report",
    content01: "Manually tracking expenses across different regions and generating reports can be a daunting task for HR teams. The processes are often slowed down, and may not be readily available for decision-making.",
    content02: "TechForing Cent’s Expense Report feature simplifies expense tracking and analysis. It provides instant insights into expense categories, compares year-to-year spending, and generates detailed monthly reports automatically."
  }

  const details03 = {
    ScreenShot: '/Finance/finance_report/screenshot_3.svg',
    headTitle: "Intuitive Management Report",
    content01: "HR professionals need to present financial data accurately and comprehensively to stakeholders. Manual reporting can introduce errors and lead to delays in sharing critical information, impacting strategic planning in the long term.",
    content02: "Our intuitive Management Report feature addresses these challenges with a simplified dashboard for comparing income and expenses. The dashboard compares income and expenses, streamlining the process of creating customized reports, and making it easier to share financial insights with stakeholders."
  }

  ///  Accordion list element
  const accordion_list = [
    {
      headContent: "What is the HRMS Financial Report Management Module?",
      paraContent: "The HRMS Financial Report Management Module is a comprehensive tool designed to streamline financial report management for HR professionals and organizations. It offers features like balance sheet management, expense tracking, and management reporting to simplify financial processes."
    },
    {
      headContent: "How can this module reduce the HR workload?",
      paraContent: "This module automates various financial processes, reducing the need for manual data entry and report generation. By automating tasks, it significantly lightens the HR workload, allowing HR professionals to focus on strategic activities."
    },
    {
      headContent: "What kind of financial insights can I expect to gain with this module?",
      paraContent: "With this module, you can gain insights into your organization's financial health, including fund management, expense tracking, and income analysis. It provides detailed reports and data analytics for better decision-making."
    },
    {
      headContent: "Can I easily manage funds from different countries with this module?",
      paraContent: "Yes, the module simplifies the management of funds from different countries. It provides a user-friendly interface for tracking funds, viewing comprehensive balance sheets, and adding new balances, ensuring financial control and accuracy."
    },
    {
      headContent: "How does this module help with expense tracking?",
      paraContent: "The module offers an Expense Report feature that allows you to track expenses effortlessly across different regions. You can compare current and previous year's expenses, generate detailed monthly reports, and analyze spending trends."
    },
    {
      headContent: "What are the benefits of the Management Report feature?",
      paraContent: "The Management Report feature provides an intuitive dashboard for comparing income and expenses, discovering revenue growth, and creating customized reports. It enables you to share financial insights with stakeholders easily."
    },
    {
      headContent: "Is this module suitable for organizations of all sizes?",
      paraContent: "Yes, this module is designed to cater to the financial reporting needs of organizations of all sizes. Whether you're a multinational corporation or a growing startup, it offers tools to enhance financial control and reporting."
    },
    {
      headContent: " Can I request a demo or trial to see how the module works?",
      paraContent: "Absolutely! You can request a demo or a free trial to explore the features and benefits of the Financial Report Management Module. Our team will be happy to assist you in getting started."
    },
    {
      headContent: "Is the data processed and stored securely within the module?",
      paraContent: "Yes, data security is a priority. The module includes robust security measures to protect sensitive financial data, ensuring that your information is safe and compliant with privacy regulations."
    },
    {
      headContent: "How can I get in touch for more information or support?",
      paraContent: "Feel free to contact our team for more information or assistance with the Financial Report Management Module. You can use the 'Contact Us' button or reach out through the provided contact details, and we'll be happy to help."
    }
  ]

  return (
    <div className='flex flex-col lg:gap-24 gap-12'>
      <section className='px-4 lg:min-h-[517px] flex items-center'>
        <div className='main_container flex lg:flex-row flex-col-reverse justify-between items-center'>
          <div className="lg:w-[45%] w-full">
            <h2 className='noto text_gradient_finance lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-4 lg:block hidden'>Simple, Comprehensive Financial Report Management</h2>
            <p className='roboto text-light-gray font-light text-[14px] lg:text-[16px] lg:leading-7 leading-[24px] text-justify lg:ml-0 ml-3'>Is your HR team tired of dealing with complex financial data in never-ending spreadsheets? We get it. Manually handling financial reports has always been a cumbersome process, causing inefficiency and costly errors. Our user-friendly Financial Report Management feature simplifies the process, providing a stress-free solution for your HR professionals.</p>
          </div>

          <div className="lg:w-[55%] w-full flex lg:flex-row flex-col justify-end lg:mb-0 mb-12">
            <h2 className='noto text_gradient_finance lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-8 lg:hidden block '>Simple, Comprehensive Financial Report Management</h2>
            <div className='lg:w-[530px] w-[200px] lg:mx-0 mx-auto lg:h-[395px] h-full relative'>
              <img src="/Finance/finance_report/combine_image/blob.webp" alt="" />
              <img src="/Finance/finance_report/combine_image/person.webp" alt="" className='absolute lg:bottom-[5px] bottom-[1px] left-[50%] translate-x-[-50%]' />
            </div>
          </div>
        </div>
      </section>

      {/* 4th individual section start */}
      <section className='lg:bg-transparent bg-light-white px-4'>
        <div className='main_container'>
          <div className="lg:mb-16 mb-10">
            <h2 className="lg:text-center text-left inter lg:mb-8 mb-3 lg:text-[36px] text-[20px] font-bold leading-[50px] text_gradient_finance">Financial Reproting Made Easy</h2>
            <p className="lg:mb-16 mb-10 leading-6 text-light-gray lg:px-14 px-0 lg:text-center text-justify">Our Financial Report Management Module simplifies financial reporting, so you can get the job done quickly and accurately.</p>

            <div className='lg:w-[600px] w-full lg:h-[600px] h-full mx-auto lg:bg-[#F6F6F6] bg-transparent rounded-full relative lg:mb-0 mb-5'>
              <div className='absolute top-0 left-[50%] translate-x-[-50%] w-[520px] h-[520px] bg-[#F0F0F0] rounded-full lg:block hidden'></div>
              <div className='absolute top-0 left-[50%] translate-x-[-50%] w-[395px] h-[395px] bg-[#EBEBEB] rounded-full lg:block hidden' ></div>
              <img src="/Finance/finance_report/analysis.webp" alt="" className='mx-auto relative z-10' />
            </div>

            <div className='flex lg:flex-row flex-col justify-between gap-5 lg:mt-[-280px] mt-0'>

              <div className="lg:w-[33.33%] w-full shadow-shadow0.5x rounded-br-[28px] relative z-10 lg:mb-0 mb-5">
                <div className='bg-[#FFF] px-[50px] py-8 rounded-br-[28px] h-[100%] '>
                  <div className='absolute top-0 left-0 w-[100.5%] h-[101%] gradient_background1 -z-10 rounded-br-[28px]' ></div>
                  <h3 className='text_gradient_finance font-bold lg:text-[20px] leading-6 mb-4'>Expense Report</h3>
                  <p className='leading-6 font-light text-light-gray text-justify'>Effortlessly track and analyze spending across regions, compare current and previous year's expenses, and generate detailed monthly reports for data-driven decision-making.</p>
                </div>
              </div>

              <div className="lg:w-[33.33%] w-full shadow-shadow0.5x rounded-tr-[28px] rounded-tl-[28px] relative z-10 lg:translate-y-[-40px] translate-y-0 lg:mb-0 mb-5">
                <div className='bg-[#FFF] px-[50px] py-8 rounded-tr-[28px] h-[100%] rounded-tl-[28px] '>
                  <div className='absolute top-0 left-[-2px] w-[101%] h-[100%] gradient_background2 -z-10 rounded-tr-[28px] rounded-tl-[28px]'></div>
                  <h3 className='text_gradient_finance font-bold text-[20px] leading-6 mb-4'>Balance Sheett</h3>
                  <p className='leading-6 font-light text-light-gray text-justify'>Gain powerful financial insights by managing funds from different countries, viewing comprehensive balance sheets, and adding new balances through a user-friendly interface.</p>
                </div>
              </div>

              <div className="lg:w-[33.33%] w-full shadow-shadow0.5x rounded-bl-[28px] relative z-10 lg:mb-0 mb-5">
                <div className='bg-[#FFF] px-[50px] py-8 rounded-bl-[28px] h-[100%] '>
                  <div className='absolute top-0 left-[-2px] w-[100%] h-[101%] gradient_background3 -z-10 rounded-bl-[28px]' ></div>
                  <h3 className='text_gradient_finance font-bold text-[20px] leading-6 mb-4'>Management Report</h3>
                  <p className='leading-6 font-light text-light-gray text-justify'>Elevate your financial strategy with an intuitive dashboard for comparing income and expenses, discovering revenue growth, creating customized reports, and easily sharing insights with your team and stakeholders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 4th individual section end */}

      {/* business strength policy */}
      <Manual_Finanace_section manual_resource={manual_resource} />

      {/* Employee organization */}
      <section className='finance_report_organized'>
        <div className='main_container flex lg:flex-row flex-col justify-between items-center lg:gap-6 gap-0'>
          <div className='lg:w-[55%] w-full'>
            <div className='relative lg:w-[160px] w-[100px] lg:h-[160px] h-[100px] mx-auto lg:mb-4 mb-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="159" height="159" viewBox="0 0 159 159" fill="none" className='percentage_svg'>
                <path d="M79.5 157C59.9983 157 41.2135 149.648 26.8929 136.41C12.5724 123.172 3.769 105.022 2.23891 85.5806C0.708829 66.139 6.56456 46.8352 18.6379 31.5202C30.7113 16.2052 48.1147 6.00488 67.3763 2.95415C86.6379 -0.0965855 106.342 4.22655 122.557 15.0611C138.772 25.8957 150.306 42.4451 154.859 61.408C159.411 80.3708 156.647 100.353 147.118 117.368C137.589 134.383 121.996 147.181 103.449 153.207" stroke="#5BBC2E" strokeWidth="2.22" />
              </svg>
              <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full rounded-full flex justify-center items-center'>
                <h3 className='sura text-center text-white lg:text-[82px] text-[40px]'>95<span className='lg:text-[41px] text-[24px]'>%</span></h3>
              </div>
            </div>
            <p className='inter text-center font-light lg:text-[28px] text-[14px] leading-[48.5px] text-[#FFF]'>Reporting errors has been reduced by our solution</p>
          </div>

          <div className='middle_hr mt-3 mb-4'></div>

          <div className='lg:w-[45%] w-full left_line'>
            <h3 className='roboto lg:text-[36px] text-[16px] lg:leading-[44px] leading-[24px] text-center lg:text-left text-[#FFF]'>Experience <span className='font-semibold text-green'>Error-Free </span>Reporting</h3>
            <div className="lg:mt-[30px] mt-5 flex md:justify-start justify-center">
              <Button className={'action_btn2'} text={'Get A Live Demo'} onClick={() => setOpenScheduleDemo(true)} />
            </div>
          </div>
        </div>
      </section>
      <AdvantageVsDisadvantage
        details={details01}
        imgSrc={details01.ScreenShot}
      />
      <AdvantageVsDisadvantage
        details={details02}
        imgSrc={details02.ScreenShot}
        className='flex-row-reverse'
      />
      <BusinessTeamCTA
        title={
          <span className="inter font-extralight lg:text-[37.5px] text-[14px] mb-3 text-left lg:leading-[48px] leading-[18px]"><span className='text_gradient_finance'>Say </span><span className='text-green font-semibold'>Goodbye</span><span className='text_gradient_finance'> to Manual Report Management!</span></span>
        }
        subTitle={
          <p className="font-extralight lg:text-[18px] text-[9px] lg:leading-[36px] leading-[16px] text-left text_gradient pr-2">Experience total financial control with our <span className='font-semibold'>Financial Report Management</span> Module</p>
        }
        button={
          <div>
            <Button className={'action_btn'} text={'Schedule A Consultation'} onClick={() => setOpenScheduleDemo(true)} />
          </div>
        }
        imgSrc={'/Finance/finance_report/finance_report_business_team.svg'}
      />
      <AdvantageVsDisadvantage
        details={details03}
        imgSrc={details03.ScreenShot}
        shadowRightBL={true}
      />
      {/* Frequently Ask Questions */}
      <Accordion_component accordion_list={accordion_list} />
      <FooterCTA
        imgSrc='/Finance/finance_report/footer_bottom_cta.svg'
        title={
          <span className='flex flex-col lg:items-start items-center'>
            <span className='lg:text-[37.5px] text-[15px]'>
              Ready to <span className="text-green font-semibold">Simplify</span> Financial Reporting?
            </span>
            <span className="lg:text-[18px] text-[12px] inter text-light-white2 lg:mb-2 mb-2">
              Get better financial insights easily and empower your HR team Today!
            </span>
          </span>
        }
        button={
          <Button className={'action_btn2'} text={'Contact US'} onClick={() => setOpenScheduleForm(true)} />
        }
      />
    </div>
  );
};

export default Financial_report;