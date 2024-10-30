"use client"
import Accordion_component from '@/components/Accordion_component/Accordion_component';
import Manual_Finanace_section from '@/components/Manual_Finanace_section/Manual_Finanace_section';
import Finance_software_details from '@/components/Finance_software_details/Finance_software_details';
import Finance_software_details_two from '@/components/Finance_software_details_two/Finance_software_details_two';
import { useGlobalContext } from "@/context/globalContext";
import { Button } from '@/components/SharedComponents';
import FooterCTA from '@/section/FooterCTA';
import BusinessTeamCTA from '@/section/BusinessTeamCTA';
import AdvantageVsDisadvantage from "@/section/AdvantageVsDisadvantage";

const Payroll = () => {
  const { setOpenScheduleDemo, setOpenScheduleForm } = useGlobalContext();

  // For Manual_Finance_Section system follow up
  const manual_resource = {
    headTitle: "Manual Payroll: Errors and Headaches",
    img1: "/Finance/payroll/icons/calculator.webp",
    img2: "/Finance/payroll/icons/time.webp",
    img3: "/Finance/payroll/icons/doc_secure.webp",
    img4: "/Finance/payroll/icons/file_list.webp",
    img5: "/Finance/payroll/icons/legal_cash.webp",
    manualImage: "/Finance/payroll/Finance_payroll.webp",
    content1: "Manual calculations are susceptible to errors, leading to discrepancies in employee paychecks and potential compliance issues.",
    content2: "Manually processing payroll is time-intensive, diverting valuable HR resources from more strategic tasks.",
    content3: " Storing sensitive payroll data in spreadsheets or paper forms can pose security risks.",
    content4: "Generating custom reports or responding to ad-hoc requests can be slow and inefficient in manual systems.",
    content5: "Payroll errors can lead to costly fines, penalties, or legal issues."
  }

  const details01 = {
    ScreenShot: '/Finance/payroll/screenshot_1.svg',
    headTitle: "Simplify Salary Management",
    content01: "HR departments often face the challenge of accurately calculating and managing salaries, especially in organizations with complex pay structures.",
    content02: "The payroll module simplifies salary calculations, allowing HR professionals to easily calculate, view, and manage salaries. It provides department-wise insights and currency conversion, reducing errors and ensuring precision."
  }

  const details02 = {
    ScreenShot: '/Finance/payroll/screenshot_2.webp',
    headTitle: "Transparent Commission Request Management",
    content01: "Tracking and managing employee commissions and requests can be time-consuming and error-prone, leading to disputes and delayed payments.",
    content02: "Streamline commission request management with detailed employee commission profiles. HR professionals can easily track and approve requests, reducing administrative burdens and ensuring timely payments."
  }

  const details03 = {
    ScreenShot: '/Finance/payroll/screenshot_3.webp',
    headTitle: "Easy Salary & Commission Slip Management",
    content01: "Creating and managing salary and commission slips manually can be complex and labor-intensive, with a risk of errors in the process.",
    content02: "The Payroll Management offers an intuitive interface for generating salary and commission slips, making the process efficient and accurate. HR professionals can generate and manage these documents easily, reducing errors and time required, as well as ensuring compliance."
  }


  ///  Accordion list element
  const accordion_list = [
    {
      headContent: "What is the HRMS Payroll Management Module, and what does it offer?",
      paraContent: "The HRMS Payroll Management Module is a powerful tool designed to simplify and streamline payroll processes within your organization. It offers features such as department-wise salary insights, currency conversion, bonus management, commission tracking, and much more to ensure hassle-free, accurate payroll management."
    },
    {
      headContent: "How does this module help in reducing payroll complications?",
      paraContent: "By automating various payroll tasks, this module minimizes manual errors and ensures that payroll is processed accurately and on time. It simplifies currency conversion, offers department-wise insights, and streamlines bonus calculations, making payroll management much less complicated."
    },
    {
      headContent: "Can I customize the payroll module to fit the unique needs of my organization?",
      paraContent: " Yes, our payroll module is highly customizable. You can tailor it to your organization's specific requirements, whether you have complex pay structures, unique deductions, or varying payroll schedules."
    },
    {
      headContent: "What benefits does this module offer for managing commissions and bonuses?",
      paraContent: "The module simplifies commission request management, offering complete insights into commission requests, drafts, in-progress, and completed commissions. It also streamlines bonus management, allowing one-click bonus administration to save time and reduce errors."
    },
    {
      headContent: "How does this module ensure data accuracy and security?",
      paraContent: "The payroll module reduces data entry errors and enhances data security by centralizing payroll information. It provides a secure platform to manage sensitive payroll data and offers detailed audit trails for tracking changes."
    },
    {
      headContent: "Can I use this module for international payroll management?",
      paraContent: "Absolutely. The module includes features like currency conversion and can accommodate multinational operations, making it suitable for organizations with employees in different countries."
    },
    {
      headContent: "What kind of reporting and analytics capabilities does this module offer?",
      paraContent: "The module provides robust reporting and analytics tools, allowing you to gain valuable insights from payroll data. You can generate custom reports, track historical payroll data, and respond to ad-hoc requests efficiently."
    },
    {
      headContent: "How easy is it to integrate this module with other systems, such as accounting software?",
      paraContent: "Integration with third-party systems is made straightforward, ensuring seamless data flow and reducing discrepancies. We offer compatibility with various software solutions for a hassle-free experience."
    },
    {
      headContent: "Can I request a demo or trial to see how the payroll module works?",
      paraContent: "Certainly! You can request a demo to experience the module's functionality firsthand. We also offer trial options to help you explore its capabilities before making a decision."
    },
    {
      headContent: "What support options are available if I need assistance with implementing the payroll module?",
      paraContent: "Our expert support team is here to assist you. We provide comprehensive support during implementation and ongoing usage to ensure a smooth experience with our payroll management module."
    }
  ]

  const handleSlide1 = () => {
    const sub_color_line = document.querySelector(".sub_color_line");
    const para_resize = document.querySelector(".para_resize");
    const head_resize = document.querySelector(".head_resize");
    const click_btn_2 = document.querySelector(".click_btn2");
    const click_btn_3 = document.querySelector(".click_btn3");

    sub_color_line.style.width = "0%";
    click_btn_2.style.background = "transparent";
    click_btn_3.style.background = "transparent";
    para_resize.style.transform = "translateX(0%)";
    head_resize.style.transform = "translateX(0%)";
  }

  const handleSlide2 = () => {
    const sub_color_line = document.querySelector(".sub_color_line");
    const para_resize = document.querySelector(".para_resize");
    const head_resize = document.querySelector(".head_resize");
    const click_btn_2 = document.querySelector(".click_btn2");
    const click_btn_3 = document.querySelector(".click_btn3");

    sub_color_line.style.width = "50%";
    click_btn_2.style.background = "conic-gradient(from -47deg at 70.61% 68.88%, rgba(76, 87, 107, 0.05) 0deg, rgba(0, 0, 0, 0.07) 360deg), radial-gradient(50.59% 50.59% at 30.4% 40.06%, rgba(24, 47, 89, 0.20) 0%, rgba(92, 126, 188, 0.20) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)";
    click_btn_3.style.background = "transparent";
    para_resize.style.transform = "translateX(-33.5%)";
    head_resize.style.transform = "translateX(-33%)";
  }

  const handleSlide3 = () => {
    const sub_color_line = document.querySelector(".sub_color_line");
    const para_resize = document.querySelector(".para_resize");
    const head_resize = document.querySelector(".head_resize");
    const click_btn_2 = document.querySelector(".click_btn2");
    const click_btn_3 = document.querySelector(".click_btn3");

    sub_color_line.style.width = "100%";
    click_btn_2.style.background = "conic-gradient(from -47deg at 70.61% 68.88%, rgba(76, 87, 107, 0.05) 0deg, rgba(0, 0, 0, 0.07) 360deg), radial-gradient(50.59% 50.59% at 30.4% 40.06%, rgba(24, 47, 89, 0.20) 0%, rgba(92, 126, 188, 0.20) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)";
    click_btn_3.style.background = "conic-gradient(from -47deg at 70.61% 68.88%, rgba(76, 87, 107, 0.05) 0deg, rgba(0, 0, 0, 0.07) 360deg), radial-gradient(50.59% 50.59% at 30.4% 40.06%, rgba(24, 47, 89, 0.20) 0%, rgba(92, 126, 188, 0.20) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)";
    para_resize.style.transform = "translateX(-67.5%)";
    head_resize.style.transform = "translateX(-67%)";
  }


  return (
    <div className='flex flex-col lg:gap-24 gap-12'>
      <section className='px-4 lg:min-h-[517px] flex items-center'>
        <div className='main_container flex lg:flex-row flex-col-reverse justify-between items-center'>
          <div className="lg:w-[45%] w-full">
            <h2 className='noto text_gradient_finance lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-4 lg:block hidden'>Make Payroll Management Hassle-Free</h2>
            <p className='roboto text-light-gray font-light text-[14px] lg:text-[16px] lg:leading-7 leading-[24px] text-justify lg:ml-0 ml-3'>Manual payroll management is a never-ending maze of spreadsheets, calculations, and errors - wasting valuable time of HR professionals and frustrations in employees. TechForing Cent provides an advanced Payroll Management solution that simplifies the process, eliminates errors, and saves time. Enjoy complete payroll insights, currency conversions, and easy data filtering right at your fingertips!</p>
          </div>

          <div className="lg:w-[55%] w-full flex lg:flex-row flex-col justify-end lg:mb-0 mb-12">
            <h2 className='noto text_gradient_finance lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-8 lg:hidden block '>Make Payroll Management Hassle-Free</h2>
            <div className='lg:w-[530px] w-[200px] lg:mx-0 mx-auto lg:h-[395px] h-full relative'>
              <img src="/Finance/Payroll/combine_image/blob.webp" alt="" />
              <img src="/Finance/Payroll/combine_image/person.webp" alt="" className='absolute lg:bottom-[5px] bottom-[1px] left-[50%] translate-x-[-50%]' />
            </div>
          </div>
        </div>
      </section>

      {/* 4th section individual section start */}
      <section className="lg:block hidden">
        <div className="main_container">
          <h2 className="text-center inter mb-8 text-[36px] font-bold leading-[50px] text_gradient_finance">Elevate Your Payroll Experience</h2>
          <p className="mb-16 leading-6 text-light-gray px-14 text-center">Tired of payroll headaches? Our Payroll Management Module is your ultimate solution, designed to effortlessly streamline payroll tasks, minimize complications, and deliver timely, accurate results.</p>
          <div className="flex justify-between gap-[100px]">
            <div className="w-[33.33%] relative z-10">
              <div className="px-[40px] py-[60px] shadow-shadow2x bg-light-white2 h-[300px]">
                <div className="absolute w-full h-full rounded-full top-8 left-8 bg-light-white -z-10"></div>
                <div className="flex items-center mb-3 ">
                  <img src="/Finance/Estimate&Expense/icons/boy.webp" alt="" />
                  <h2 className="ml-4 font-bold text-[18px] leading-6 text-light-gray">Employee Salary</h2>
                </div>
                <p className="font-light leading-6 text-light-gray text-justify">Simplify salary management with department-wise insights, seamless currency conversion, and effortless bonus administration.</p>
              </div>
            </div>

            <div className="w-[33.33%] relative z-10">
              <div className="px-[40px] py-[60px] shadow-shadow2x bg-light-white2 h-[300px]">
                <div className="absolute w-full h-full rounded-full top-8 left-8 bg-light-white -z-10"></div>
                <div className="flex items-center mb-3">
                  <img src="/Finance/Estimate&Expense/icons/cash.webp" alt="" />
                  <h2 className="ml-4 font-bold text-[18px] leading-6 text-light-gray">Commission Request</h2>
                </div>
                <p className="font-light leading-6 text-light-gray text-justify">Master commission handling with comprehensive insights, detailed employee profiles, and an intuitive interface for success.</p>
              </div>
            </div>

            <div className="w-[33.33%] relative z-10">
              <div className="px-[40px] py-[60px] shadow-shadow2x bg-light-white2 h-[300px]">
                <div className="absolute w-full h-full rounded-full top-8 left-8 bg-light-white -z-10"></div>
                <div className="flex items-center mb-3">
                  <img src="/Finance/Estimate&Expense/icons/doc_cash.webp" alt="" />
                  <h2 className="ml-4 font-bold text-[18px] leading-6 text-light-gray">Salary & Commission Slip</h2>
                </div>
                <p className="font-light leading-6 text-light-gray text-justify">Effortlessly oversee salary and commission matters through transparent, user-friendly management, including an intuitive table overview and simplified data entry.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* responsive for custom carousel/slider */}
      <div className='px-4  lg:hidden block'>
        <h2 className="inter mb-6 text-[20px] font-bold leading-[30px] text_gradient">Elevate Your Payroll Experience</h2>
        <p className="mb-10 leading-6 text-justify text-light-gray">Tired of payroll headaches? Our Payroll Management Module is your ultimate solution, designed to effortlessly streamline payroll tasks, minimize complications, and deliver timely, accurate results.</p>
        <div className='card_div mb-16'>
          <div className='flex items-center mb-4'>
            <div className='head_resize_div'>
              <div className='head_resize'>
                <div className='head_part_div flex items-center mb-2'>
                  <img src="/Finance/Estimate&Expense/icons/boy.webp" alt="" className='mr-4' />
                  <h3 className='font-bold leading-[22px] text-light-gray'>Employee Salary</h3>
                </div>
                <div className='head_part_div flex items-center mb-2'>
                  <img src="/Finance/Estimate&Expense/icons/cash.webp" alt="" className='mr-4' />
                  <h3 className='font-bold leading-[22px] text-light-gray'>Commission Request</h3>
                </div>
                <div className='head_part_div flex items-center mb-2'>
                  <img src="/Finance/Estimate&Expense/icons/doc_cash.webp" alt="" className='mr-4' />
                  <h3 className='font-bold leading-[22px] text-light-gray'>Salary & Commission Slip</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='para_resize_div'>
            <div className='para_resize'>
              <div className='part_part_div'>
                <p className='font-light text-[14px] text-light-gray leading-[22px] text-justify'>Simplify salary management with department-wise insights, seamless currency conversion, and effortless bonus administration.</p>
              </div>
              <div className='part_part_div'>
                <p className='font-light text-[14px] leading-[22px] text-justify text-light-gray'>Master commission handling with comprehensive insights, detailed employee profiles, and an intuitive interface for success.</p>
              </div>
              <div className='part_part_div'>
                <p className='font-light text-[14px] leading-[22px] text-justify text-light-gray'>Effortlessly oversee salary and commission matters through transparent, user-friendly management, including an intuitive table overview and simplified data entry.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-[70%] mx-auto'>
          <ul className='slide_btn flex justify-between items-center relative'>
            <div className='color_line'>
              <div className='sub_color_line'></div>
            </div>
            <span className='slide_1' onClick={handleSlide1}>
              <span className='click_btn1'></span>
            </span>
            <span className='slide_2' onClick={handleSlide2}>
              <span className='click_btn2'></span>
            </span>
            <span className='slide_3' onClick={handleSlide3}>
              <span className='click_btn3'></span>
            </span>
          </ul>
        </div>
      </div>
      {/* 4th section individual section end */}

      {/* business strength policy */}
      <Manual_Finanace_section manual_resource={manual_resource} />

      {/* Employee organization */}
      <section className='payroll_organized'>
        <div className='main_container flex lg:flex-row flex-col justify-between items-center lg:gap-6 gap-0'>
          <div className='lg:w-[55%] w-full'>
            <h5 className='roboto lg:text-[28px] text-[14px] lg:leading-[48px] leading-[24px] font-light text-center text-[#FFF] lg:px-0 px-5'>Save Over <span className="sura lg:text-[82px] text-[24px] font-bold">30<span className='lg:text-[41px] text-[14px]'>%</span> Hours</span> Monthly on Payroll Tasks</h5>
          </div>

          <div className='middle_hr mt-4 mb-4'></div>

          <div className='lg:w-[45%] w-full left_line'>
            <h3 className='roboto lg:text-[36px] text-[16px] lg:leading-[44px] leading-[24px] text-center lg:text-left text-[#FFF]'>Experience <span className='font-semibold text-green'>99.9% </span>Accuracy in Every Payroll Run</h3>
            <div className="lg:mt-[30px] mt-5 flex md:justify-start justify-center">
              <Button className={'action_btn2'} text={'Get Started'} onClick={() => setOpenScheduleForm(true)} />
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
        shadowLeft={true}
      />
      <BusinessTeamCTA
        title={<span className="inter font-extralight lg:text-[37.5px] text-[16px] mb-3 text-left lg:leading-[48px] leading-[22px]"><span className='text_gradient_finance'>Say </span><span className='text-green font-semibold'>Goodbye</span><span className='text_gradient_finance'> to Payroll Headaches</span></span>
        }
        subTitle={
          <p className="font-extralight lg:text-[18px] text-[9px] lg:leading-[36px] leading-[16px] text-left text_gradient"><span className='font-semibold'>Eliminate</span> manual payroll complications and embrace seamless, precise <span className='font-semibold'>payroll processing</span></p>
        }
        button={
          <div>
            <Button className={'action_btn'} text={'Request A Demo'} onClick={() => setOpenScheduleDemo(true)} />
          </div>
        }
        imgSrc={'/Finance/payroll/payroll_business_team.svg'}
      />
      <AdvantageVsDisadvantage
        details={details02}
        imgSrc={details02.ScreenShot}
        shadowRight={true}
      />
      {/* Frequently Ask Questions */}
      <Accordion_component accordion_list={accordion_list} />
      <FooterCTA
        imgSrc='/Finance/payroll/footer_bottom_cta.svg'
        title={
          <span className='flex flex-col lg:items-start items-center'>
            <span className='lg:text-[37.5px] text-[15px]'>
              Ready to <span className="text-green font-semibold">Elevate</span> Your Payroll Experience?
            </span>
            <span className="lg:text-[18px] text-[12px] inter text-light-white2 lg:mb-2 mb-2">
              Discover how our module can streamline your payroll processes and boost HR efficiency
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

export default Payroll;