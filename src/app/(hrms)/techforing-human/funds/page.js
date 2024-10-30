"use client"
import "../../../globals.css"
import { useEffect, useState } from "react";
import Manual_HR_section from "@/components/Manual_HR_section/Manual_HR_section";
import Accordion_component from "@/components/Accordion_component/Accordion_component";
import { useGlobalContext } from "@/context/globalContext";
import { Button } from "@/components/SharedComponents";
import FooterCTA from "@/section/FooterCTA";
import BusinessTeamCTA from "@/section/BusinessTeamCTA";
import AdvantageVsDisadvantage from "@/section/AdvantageVsDisadvantage";
import StyledCTA from "@/section/StyledCTA";
const Funds = () => {
  const { setOpenScheduleDemo, setOpenScheduleForm } = useGlobalContext();

  const [isAnimated, setIsAnimated] = useState(false);

  // This one is animation sections functionality
  useEffect(() => {
    const mainFrameElement = document.querySelector('.main_frame');

    const handleScroll = () => {
      const mainFrameOffsetTop = mainFrameElement.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;

      // Check if the main_frame is within the viewport
      if (scrollPosition >= mainFrameOffsetTop + 50) {
        setTimeout(() => setIsAnimated(true), 1000);
      } else {
        setIsAnimated(false);
      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // For Manual_HR_Section system follow up
  const manual_resource = {
    headTitle: "Challenges of Manual Employee Fund Management",
    img1: "/HRMS/Funds/icons/calculator.webp",
    img2: "/HRMS/Funds/icons/law.webp",
    img3: "/HRMS/Funds/icons/env_money.webp",
    img4: "/HRMS/Funds/icons/hand_money.webp",
    img5: "/HRMS/Funds/icons/broken_database.webp",
    manualImage: "/HRMS/Funds/icons/HRMS_funds_management.webp",
    content1: "Manual calculations and data entry can be too time-consuming and error-prone",
    content2: "Staying compliant with changing regulations becomes difficult without automated tracking and reporting",
    content3: "Employees lack easy access to their fund details, leading to inquiries and frustration",
    content4: "Manual fund management processes can be inefficient, causing delays in fund processing and disbursements",
    content5: "Manual records can be vulnerable to data breaches or loss, compromising sensitive financial information"
  }

  const details01 = {
    headTitle: "Automate Gratuity Management",
    content01: "Managing Employee Gratuity Funds for pensions and financial obligations can be daunting, especially when it involves intricate regulations and calculations.",
    content02: "Automate gratuity calculations and ensure precise compliance with all regulations with our Gratuity Management feature. With seamless integration with your payroll system, get consistent and accurate gratuity calculations from day one."
  }

  const details02 = {
    ScreenShot: '/HRMS/Funds/screenshot_2.webp',
    headTitle: "Error-Free Provident Fund Tracking",
    content01: "Manually tracking Provident Fund contributions while maintaining accuracy is a time-consuming and error-prone task.",
    content02: "Automate and streamline Provident Fund contributions, drastically reducing manual labor and minimizing error risks. The feature also allows employees to effortlessly monitor their Provident Fund details, reducing the administrative load on HR."
  }

  const details03 = {
    ScreenShot: '/HRMS/Funds/screenshot_3.webp',
    headTitle: "Convenient Medical Fund for Everyone",
    content01: "Dealing with paperwork for medical fund contributions and claims can be cumbersome, inefficient, and can be problematic in actual emergencies.",
    content02: "TechForing Human’s Employee Benefits Management module seamlessly integrates medical fund contributions into your payroll system, eliminating paperwork, providing easy access to the employees, and reducing HR involvement in inquiries. A centralized dashboard allows HR to monitor fund utilization and generate on-demand reports for informed decision-making."

  }

  ///  Accordion list element
  const accordion_list = [
    {
      headContent: "What is the Fund Management Module, and why do I need it?",
      paraContent: "The Fund Management Module is a powerful tool designed to simplify and automate the management of various funds within your organization, such as the Employee Regulatory Fund (ERF), Provident Fund, and Medical Fund. You need it to streamline fund management, ensure compliance, reduce errors, and improve overall financial efficiency."
    },
    {
      headContent: "How does the module simplify Employee Regulatory Fund (ERF) management?",
      paraContent: "The module automates ERF calculations and seamlessly integrates with your payroll system, ensuring accurate deductions and compliance with regulations. It simplifies complex ERF management tasks, reducing manual effort."
    },
    {
      headContent: "Can the module help us with Provident Fund management?",
      paraContent: "Yes, it can. The module automates Provident Fund contributions, making it easier to track and manage. Employees can also access their Provident Fund details effortlessly, promoting transparency and reducing HR's administrative burden."
    },
    {
      headContent: "How does the module address Medical Fund management challenges?",
      paraContent: "The module integrates medical fund contributions into your payroll system, eliminating paperwork hassles. Employees can access their medical fund details with a single click. Administrators gain a dashboard for overseeing fund utilization and generating insightful reports for better decision-making."
    },
    {
      headContent: "Does the Fund Management Module help with compliance and reporting?",
      paraContent: "Absolutely. The module helps ensure compliance with changing regulations by automating calculations and deductions. It also provides tools for generating meaningful reports and simplifying audits and decision-making."
    },
    {
      headContent: "Is the module secure and compliant with data privacy standards?",
      paraContent: "Yes, data security is our priority. The module is designed to comply with data privacy standards and offers robust security measures to protect sensitive financial information."
    },
    {
      headContent: "How does the module improve transparency for employees?",
      paraContent: "Employees can easily access their fund details, promoting transparency and trust. They can view their contributions, balances, and other relevant information with a single click."
    },
    {
      headContent: "How do I get started with the Fund Management Module?",
      paraContent: "Yes, the Report Management Module is customizable. You can tailor reports to match your organization's unique requirements, ensuring that you get the data and insights that matter most to you."
    },
    {
      headContent: "What are the benefits of using the Fund Management Module for our organization?",
      paraContent: "The benefits include streamlined fund management, reduced errors, enhanced compliance, improved employee satisfaction, and greater financial efficiency, ultimately leading to a more agile and responsive HR and finance department."
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
    <div className="flex flex-col lg:gap-24 gap-12">
      <section className='px-4 lg:min-h-[517px] flex items-center'>
        <div className='main_container flex lg:flex-row flex-col-reverse justify-between items-center'>
          <div className="lg:w-[45%] w-full">
            <h2 className='noto text_gradient lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-4 lg:block hidden'>Simplify Employee Fund Management</h2>
            <p className='roboto text-light-gray font-light text-[14px] lg:text-[16px] lg:leading-7 leading-[24px] text-justify lg:ml-0 ml-3'>Drowning in endless spreadsheets, countless calculations, compliance complications, and other  heavy-hitting headaches that come with manual employee fund management? Say goodbye to manual fund management mess with our employee fund management feature and transform the way you handle employee funds, ensure compliance, and boost efficiency.</p>
          </div>

          <div className="lg:w-[55%] w-full flex lg:flex-row flex-col justify-end lg:mb-0 mb-16">
            <h2 className='noto text_gradient lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-8 lg:hidden block'>Simplify Employee Fund Management</h2>
            <div className='lg:w-[530px] w-[200px] lg:mx-0 mx-auto lg:h-[395px] h-full relative'>
              <img src="/HRMS/Funds/combine_image/blob.webp" alt="" />
              <img src="/HRMS/Funds/combine_image/main-frame.webp" alt="" className={`main_frame ${isAnimated ? 'animate' : ''}`} />
              <img src="/HRMS/Funds/combine_image/person.webp" alt="" className='absolute bottom-[0px] left-[50%] translate-x-[-50%]' />
            </div>
          </div>
        </div>
      </section>

      {/* 4th section individual section start */}
      <section className="lg:block hidden">
        <div className="main_container">
          <h2 className="text-center inter mb-8 text-[36px] font-bold leading-[50px] text_gradient">Say Goodbye to Manual Fund Hassles</h2>
          <p className="mb-16 leading-6 text-light-gray px-14 text-center">Simplify HR financial tasks and ensure compliance, free yourself from spreadsheets, and calculations with our Fund Management feature, so you can focus on what truly matters: your employees’ financial well-being and your organization’s financial stability.</p>
          <div className="flex justify-between gap-[100px]">
            <div className="w-[33.33%] relative z-10">
              <div className="px-[40px] py-[60px] shadow-shadow2x bg-light-white2 h-[300px]">
                <div className="absolute w-full h-full rounded-full top-8 left-8 bg-light-white -z-10"></div>
                <div className="flex items-center mb-3 ">
                  <img src="/HRMS/Funds/icons/coin.webp" alt="" />
                  <h2 className="ml-4 font-bold text-[18px] leading-6 text-light-gray">Effortless Gratuity  <br /> Management</h2>
                </div>
                <p className="font-light leading-6 text-light-gray text-justify">Simplify pension and financial obligation compliance with automated gratuity management integrated seamlessly with your payroll system.</p>
              </div>
            </div>

            <div className="w-[33.33%] relative z-10">
              <div className="px-[40px] py-[60px] shadow-shadow2x bg-light-white2 h-[300px]">
                <div className="absolute w-full h-full rounded-full top-8 left-8 bg-light-white -z-10"></div>
                <div className="flex items-center mb-3">
                  <img src="/HRMS/Funds/icons/coin.webp" alt="" />
                  <h2 className="ml-4 font-bold text-[18px] leading-6 text-light-gray">Provident Fund</h2>
                </div>
                <p className="font-light leading-6 text-light-gray text-justify">Ensure financial stability for employees with easy fund contribution tracking and seamless integration while staying compliant.</p>
              </div>
            </div>

            <div className="w-[33.33%] relative z-10">
              <div className="px-[40px] py-[60px] shadow-shadow2x bg-light-white2 h-[300px]">
                <div className="absolute w-full h-full rounded-full top-8 left-8 bg-light-white -z-10"></div>
                <div className="flex items-center mb-3">
                  <img src="/HRMS/Funds/icons/coin.webp" alt="" />
                  <h2 className="ml-4 font-bold text-[18px] leading-6 text-light-gray">Medical Fund</h2>
                </div>
                <p className="font-light leading-6 text-light-gray text-justify">Prioritize well-being by integrating medical fund contributions into payroll, offering one-click access for employees and insightful admin oversight for better decisions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* responsive for custom carousel/slider */}
      <div className='px-4 lg:hidden block mb-16'>
        <h2 className="inter mb-6 text-[20px] font-bold leading-[30px] text_gradient">Say Goodbye to Manual Fund Hassles</h2>
        <p className="mb-10 leading-6 text-justify text-light-gray">Simplify HR financial tasks and ensure compliance, free yourself from spreadsheets, and calculations with our Fund Management feature, so you can focus on what truly matters: your employees’ financial well-being and your organization’s financial stability.</p>
        <div className='card_div mb-16'>
          <div className='flex items-center mb-4'>
            <img src="/HRMS/Funds/icons/coin.webp" alt="" className='mr-4' />
            <div className='head_resize_div'>
              <div className='head_resize'>
                <div className='head_part_div'>
                  <h3 className='font-bold leading-[22px] text-light-gray'>Effortless Gratuity  <br /> Management</h3>
                </div>
                <div className='head_part_div'>
                  <h3 className='font-bold leading-[22px] text-light-gray'>Provident Fund</h3>
                </div>
                <div className='head_part_div'>
                  <h3 className='font-bold leading-[22px] text-light-gray'>Medical Fund</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='para_resize_div'>
            <div className='para_resize'>
              <div className='part_part_div'>
                <p className='font-light text-[14px] text-light-gray leading-[22px] text-justify'>Simplify pension and financial obligation compliance with automated gratuity management integrated seamlessly with your payroll system.</p>
              </div>
              <div className='part_part_div'>
                <p className='font-light text-[14px] leading-[22px] text-justify text-light-gray'>Simplify pension and financial obligation compliance with automated gratuity management integrated seamlessly with your payroll system.</p>
              </div>
              <div className='part_part_div'>
                <p className='font-light text-[14px] leading-[22px] text-justify text-light-gray'>Simplify pension and financial obligation compliance with automated gratuity management integrated seamlessly with your payroll system.</p>
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
      <Manual_HR_section manual_resource={manual_resource} />

      {/* Business team section  (common) */}
      <BusinessTeamCTA
        className="lg:py-0 py-3"
        title={
          <p className="inter justify-center font-light lg:mb-3 mb-1 lg:text-center text-left">
            <span className="text_gradient text-center">Elevate</span>
            <span className="!text-green font-semibold"> Employee Fund </span>
            <span className="text_gradient text-center">Management</span>
          </p>
        }
        subTitle={
          <p className='lg:text-center'>
            <span>Ensure Financial Well-Being and Boost Employee Satisfaction<br />With Our in-Depth Fund Management Solution.</span>
          </p>
        }
        button={
          <div className='flex lg:justify-center'>
            <Button className={'action_btn'} text={'Take A Tour'} onClick={() => setOpenScheduleDemo(true)} />
          </div>
        }
        imgSrc={'/HRMS/Funds/funds_business_team.svg'}
      />

      {/* Left data schedule field  part-1 (common) */}
      <AdvantageVsDisadvantage
        details={details01}
        imgSrc={
          <div className="relative overflow-hidden gratuity">
            <img className='-z-[10] relative gratuity' src="/HRMS/Funds/cycle.svg" alt="cycle" />
            <img className='absolute top-[29%] right-[1px] lg:w-fit w-[75%]' src="/HRMS/Funds/provider.svg" alt="provider" />
            <img className='absolute bottom-[15%] left-[3px] -z-[1] lg:w-fit w-[36.4%]' src="/HRMS/Funds/receiver.svg" alt="receiver" />
          </div>
        }
      />

      {/* right data schedule field  part-2 (common) */}
      <AdvantageVsDisadvantage
        details={details02}
        imgSrc={
          <div className="relative overflow-hidden fundTracking">
            <img className='lg:w-fit w-3/5 m-auto h-fit -z-[10] relative ' src="/HRMS/Funds/dollar.svg" alt="dollar" />
            <img className='absolute lg:top-[82px] top-[56px] left-1/2 lg:h-[160px] h-[110px] ' src="/HRMS/Funds/coin.svg" alt="coin" />
          </div>
        }
        className={'flex-row-reverse pb-6'}
      />

      {/* CTA Section */}
      <StyledCTA
        reverse={true}
        imgSrc={'/HRMS/Funds/C_CTA.svg'}
        content={
          <div>
            <h2 className="inter font-semibold lg:text-[32px] text-[14px] lg:leading-[44px] leading-4 lg:mb-5 mb-1"><span className="text-green">Simplify</span> <span className="text_gradient">Financial<br /> Management Challenges</span></h2>
            <p className="noto font-light lg:text-[20px] text-[12px] text_gradient">Explore Our Fund Management <span className="font-medium">Solutions</span> Today</p>
            <div className="lg:mt-6 mt-2 text-center">
              <Button className={'action_btn'} text={'Get Access'} onClick={() => setOpenScheduleDemo(true)} />
            </div>
          </div>
        }
        imgTransform={'lg:-translate-x-[51%] -translate-x-[47%]'}
      />
      {/* Left data schedule field  part-3 (common) */}
      <AdvantageVsDisadvantage
        details={details03}
        imgSrc={
          <div className="relative overflow-hidden fundTracking">
            <img className='lg:w-fit w-[70%] m-auto h-fit -z-[10] relative ' src="/HRMS/Funds/medical.svg" alt="medical" />
            <img className='absolute lg:top-[84px] top-[53px] lg:left-[38%] left-[38%] lg:h-[160px] h-[100px]  ' src="/HRMS/Funds/coin-green.svg" alt="coin" />
          </div>
        }
        className={'pb-6'}
      />

      {/* Frequently Ask Questions */}
      <Accordion_component accordion_list={accordion_list} />

      {/* footer bottom CTA (common) */}
      <FooterCTA
        imgSrc='/HRMS/Funds/footer_bottom_cta.webp'
        title={
          <span>
            <span className="inter lg:text-[28px] text-[15px] text-light-white2 font-normal">
              <span className="text-green lg:text-[37.5px] text-[15px] font-semibold">Upgrade</span> Your Employee Fund Processes<br />With <span className="lg:text-[37.5px] text-[15px] font-semibold">TechForing Growth</span></span>
          </span>
        }
        button={<Button className={'action_btn2'} text={'Contact Us'} onClick={() => setOpenScheduleForm(true)} />}
      />
    </div>
  );
}

export default Funds;