"use client"
import Accordion_component from '@/components/Accordion_component/Accordion_component';
import Manual_Finanace_section from '@/components/Manual_Finanace_section/Manual_Finanace_section';
import Finance_software_details from '@/components/Finance_software_details/Finance_software_details';
import Finance_software_details_two from '@/components/Finance_software_details_two/Finance_software_details_two';
import { useGlobalContext } from "@/context/globalContext";
import { Button } from "@/components/SharedComponents";
import FooterCTA from '@/section/FooterCTA';
import StyledCTA from "@/section/StyledCTA";
import AdvantageVsDisadvantage from "@/section/AdvantageVsDisadvantage";
const Budget_management = () => {
  const { setOpenScheduleForm } = useGlobalContext();

  // For Manual_Finance_Section system follow up
  const manual_resource = {
    headTitle: "Disadvantages of Manual Budgeting",
    img1: "/Finance/Budget_management/icons/time.webp",
    img2: "/Finance/Budget_management/icons/calculator.webp",
    img3: "/Finance/Budget_management/icons/sync_group.webp",
    img4: "/Finance/Budget_management/icons/particles.webp",
    img5: "/Finance/Budget_management/icons/settings.webp",
    manualImage: "/Finance/Budget_management/Finance_budget_management.svg",
    content1: "Manually creating and updating budgets is a time-intensive process, diverting valuable resources from other critical tasks.",
    content2: "Manual methods give limited real-time insights into financial performance, making it challenging to make accurate calculations.",
    content3: "Coordinating budget input from multiple teams can be cumbersome, lead to inaccuracies in budget calculations, and cause communication gaps.",
    content4: "Tailoring budgets to meet specific organizational needs is often complex and inflexible, hindering the organization’s ability to adapt to changing financial conditions.",
    content5: "Manual processes make it hard to retain comprehensive budget history, hindering data-driven decision-making, and affecting morale and productivity among HR professionals."
  }

  const details01 = {
    ScreenShot: '/Finance/Budget_management/screenshot_1.svg',
    headTitle: "Annual Budgeting Made Easy",
    content01: "HR departments often face the mammoth task of creating and managing annual budgets manually, which can take up a lot of time and cause a lot of sneaky errors.",
    content02: "Our built-in budgeting tool simplifies the annual budgeting process with a user-friendly interface, reducing required time and effort. Additionally, get a complete historical record of annual budgets so you can compare and make data-driven decisions effortlessly."
  }

  const details02 = {
    ScreenShot: '/Finance/Budget_management/screenshot_2.svg',
    headTitle: "Quick Monthly Budgeting",
    content01: "HR professionals need up-to-date financial information to monitor and adjust monthly budgets effectively. Manually creating and managing monthly budgets can be a very slow process, and may be unable to provide real-time data.",
    content02: "Get real-time financial insights with the Monthly Budgeting tool. HR teams can view, update, and control monthly budgets with just a click, and tailor the system to their specific needs in just a few clicks."
  }

  const details03 = {
    ScreenShot: '/Finance/Budget_management/screenshot_3.webp',
    headTitle: "Faster Project Budget Approval",
    content01: "Managing budgets for company projects includes resource allocation, profitability tracking, and many other tasks, making it a complex and challenging task for HR. Manual processes may also lead to errors and inefficient cost control.",
    content02: "Simplify project budgeting and adjustment intricacies with our Project Management feature. Optimize resource allocation, boost profitability, and make data-driven decisions through our intuitive interface and extensive historical project budgeting data."
  }

  const details04 = {
    ScreenShot: '/Finance/Budget_management/screenshot_4.svg',
    headTitle: "Complete Budget Comparison",
    content01: "HR professionals spend countless hours balancing various expenses while paying attention to financial constraints and organizational goals. Manually tracking and analyzing these budget elements becomes an error-prone, time-consuming task.",
    content02: "TechForing Cent offers a Budget Comparison feature, allowing HR professionals to select different budget entries and instantly compare them. This helps them to quickly identify discrepancies, optimize resource allocation, and make data-driven decisions; enabling more efficient budget planning and tracking further down the road."
  }

  ///  Accordion list element
  const accordion_list = [
    {
      headContent: "What is the HRMS Budget Management Module, and why is it essential for HR professionals?",
      paraContent: "The Budget Management Module is a crucial tool that simplifies budget creation, optimization, and tracking for HR departments. It helps HR professionals streamline financial planning, save time, and make data-driven decisions for better financial control."
    },
    {
      headContent: "How does the Annual Budget Management feature work?",
      paraContent: "The Annual Budget Management feature allows authorized users to create and optimize annual budgets effortlessly. It provides insights into previous budget history, enabling data-driven decisions, filtering and analyzing budget data, and strategic planning."
    },
    {
      headContent: "What benefits does the Monthly Budget Management feature offer HR teams?",
      paraContent: "The Monthly Budget Management feature simplifies monthly budgeting, providing real-time financial information and customizable options tailored to the organization's needs. It enables efficient budget control and monitoring."
    },
    {
      headContent: "How can the Project Budget Management feature help HR professionals manage project finances?",
      paraContent: "The Project Budget Management feature simplifies project budget creation and adjustment, optimizes resource allocation, and drives profitability. It maintains a record of past project budgets, facilitating data-driven decision-making and efficient cost control."
    },
    {
      headContent: "Is the Budget Management Module user-friendly and easy to integrate with our existing HRMS software?",
      paraContent: "Yes, the module is designed with a user-friendly interface for ease of use. It seamlessly integrates with your existing HRMS software, ensuring a smooth and efficient experience."
    },
    {
      headContent: "Can I customize the Budget Management Module to align with our organization's specific needs?",
      paraContent: "Absolutely! The module offers customizable options to tailor budget management processes to your organization's unique requirements."
    },
    {
      headContent: "How does the module help in compliance and reducing errors in budget management?",
      paraContent: "The module reduces errors through automated processes and maintains a comprehensive record of budget history, aiding in compliance with financial regulations and internal policies."
    },
    {
      headContent: "Is training required to use the Budget Management Module effectively?",
      paraContent: "Training may be provided for initial setup and usage, but the module's user-friendly interface minimizes the learning curve, making it accessible to HR professionals with varying levels of expertise."
    },
    {
      headContent: "Can I get support and assistance if I encounter issues or have questions about the module?",
      paraContent: "Yes, our dedicated support team is available to assist you with any issues or questions related to the Budget Management Module. We're committed to ensuring a seamless experience for our users."
    },
    {
      headContent: "How can I get started with the Budget Management Module for our HR department?",
      paraContent: "To get started, please contact our team to schedule a demo, request more information, or discuss how the Budget Management Module can benefit your organization. We'll guide you through the process and provide the necessary assistance for a smooth implementation."
    }
  ]


  const handleSlide1 = () => {
    const sub_color_line_finance = document.querySelector(".sub_color_line_finance");
    const para_resize_notice = document.querySelector(".para_resize_notice");
    const head_resize_notice = document.querySelector(".head_resize_notice");
    const click_btn_2 = document.querySelector(".click_btn2");
    const click_btn_3 = document.querySelector(".click_btn3");
    const click_btn_4 = document.querySelector(".click_btn4");

    sub_color_line_finance.style.width = "0%";
    click_btn_2.style.background = "transparent";
    click_btn_3.style.background = "transparent";
    click_btn_4.style.background = "transparent";
    para_resize_notice.style.transform = "translateX(0%)";
    head_resize_notice.style.transform = "translateX(0%)";
  }

  const handleSlide2 = () => {
    const sub_color_line_finance = document.querySelector(".sub_color_line_finance");
    const para_resize_notice = document.querySelector(".para_resize_notice");
    const head_resize = document.querySelector(".head_resize_notice");
    const click_btn_2 = document.querySelector(".click_btn2");
    const click_btn_3 = document.querySelector(".click_btn3");
    const click_btn_4 = document.querySelector(".click_btn4");

    sub_color_line_finance.style.width = "35%";
    click_btn_2.style.background = " conic-gradient(from -47deg at 70.61% 68.88%, rgba(76, 87, 107, 0.10) 0deg, rgba(0, 0, 0, 0.14) 360deg), linear-gradient(0deg, rgba(0, 61, 61, 0.70) 0%, rgba(0, 61, 61, 0.70) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)";
    click_btn_3.style.background = "transparent";
    click_btn_4.style.background = "transparent";
    para_resize_notice.style.transform = "translateX(-24.5%)";
    head_resize.style.transform = "translateX(-24.5%)";
  }

  const handleSlide3 = () => {
    const sub_color_line_finance = document.querySelector(".sub_color_line_finance");
    const para_resize_notice = document.querySelector(".para_resize_notice");
    const head_resize_notice = document.querySelector(".head_resize_notice");
    const click_btn_2 = document.querySelector(".click_btn2");
    const click_btn_3 = document.querySelector(".click_btn3");
    const click_btn_4 = document.querySelector(".click_btn4");

    sub_color_line_finance.style.width = "60%";
    click_btn_2.style.background = " conic-gradient(from -47deg at 70.61% 68.88%, rgba(76, 87, 107, 0.10) 0deg, rgba(0, 0, 0, 0.14) 360deg), linear-gradient(0deg, rgba(0, 61, 61, 0.70) 0%, rgba(0, 61, 61, 0.70) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)";
    click_btn_3.style.background = " conic-gradient(from -47deg at 70.61% 68.88%, rgba(76, 87, 107, 0.10) 0deg, rgba(0, 0, 0, 0.14) 360deg), linear-gradient(0deg, rgba(0, 61, 61, 0.70) 0%, rgba(0, 61, 61, 0.70) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)";
    click_btn_4.style.background = "transparent";
    para_resize_notice.style.transform = "translateX(-50.5%)";
    head_resize_notice.style.transform = "translateX(-50.5%)";
  }

  const handleSlide4 = () => {
    const sub_color_line_finance = document.querySelector(".sub_color_line_finance");
    const para_resize_notice = document.querySelector(".para_resize_notice");
    const head_resize_notice = document.querySelector(".head_resize_notice");
    const click_btn_2 = document.querySelector(".click_btn2");
    const click_btn_3 = document.querySelector(".click_btn3");
    const click_btn_4 = document.querySelector(".click_btn4");

    sub_color_line_finance.style.width = "100%";
    click_btn_2.style.background = " conic-gradient(from -47deg at 70.61% 68.88%, rgba(76, 87, 107, 0.10) 0deg, rgba(0, 0, 0, 0.14) 360deg), linear-gradient(0deg, rgba(0, 61, 61, 0.70) 0%, rgba(0, 61, 61, 0.70) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)";
    click_btn_3.style.background = " conic-gradient(from -47deg at 70.61% 68.88%, rgba(76, 87, 107, 0.10) 0deg, rgba(0, 0, 0, 0.14) 360deg), linear-gradient(0deg, rgba(0, 61, 61, 0.70) 0%, rgba(0, 61, 61, 0.70) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)";
    click_btn_4.style.background = "conic-gradient(from -47deg at 70.61% 68.88%, rgba(76, 87, 107, 0.10) 0deg, rgba(0, 0, 0, 0.14) 360deg), linear-gradient(0deg, rgba(0, 61, 61, 0.70) 0%, rgba(0, 61, 61, 0.70) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)";
    para_resize_notice.style.transform = "translateX(-76%)";
    head_resize_notice.style.transform = "translateX(-75.5%)";
  }

  return (
    <div className='flex flex-col lg:gap-24 gap-12'>
      <section className='px-4 lg:min-h-[517px] flex items-center'>
        <div className='main_container flex lg:flex-row flex-col-reverse justify-between items-center'>
          <div className="lg:w-[45%] w-full">
            <h2 className='noto text_gradient_finance lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-4 lg:block hidden'>Hassle-Free Budget Management</h2>
            <p className='roboto text-light-gray font-light text-[14px] lg:text-[16px] lg:leading-7 leading-[24px] text-justify lg:ml-0 ml-3'>Tired of spending endless hours and wrestling with countless spreadsheets and still ending up with an error-prone budget? We got a solution for you! Transform your financial planning experience and say hello to an effortless, efficient, and effective Budget Management solution!</p>
          </div>
          <div className="lg:w-[55%] w-full flex lg:flex-row flex-col justify-end lg:mb-0 mb-12">
            <h2 className='noto text_gradient_finance lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-8 lg:hidden block '>Hassle-Free Budget Management</h2>
            <div className='lg:w-[530px] w-[200px] lg:mx-0 mx-auto lg:h-[395px] h-full relative'>
              <img src="/Finance/Budget_management/combine_image/blob.webp" alt="" />
              <img src="/Finance/Budget_management/combine_image/person.webp" alt="" className='absolute lg:bottom-[5px] bottom-[1px] left-[50%] translate-x-[-50%]' />
            </div>
          </div>
        </div>
      </section>
      {/* 4th section individual section start */}
      <section className='lg:block hidden'>
        <h2 className="text-center inter mb-8 text-[36px] font-bold leading-[50px] text_gradient_finance">Utilize the Full Potential of Precision Budgeting</h2>
        <p className="mb-16 leading-6 text-light-gray px-[165px] text-center">The Budget Management Module’s key features allow your HR professionals to transform the way they handle financial planning and budget management</p>
        <div className='main_container flex justify-between items-center gap-8'>

          <div className="w-[45%] relative z-20">
            <img src="/Finance/Budget_management/growth_team.webp" alt="" className="shadow-shadow3.5x" />
          </div>

          <div className="w-[55%] relative z-10">
            <div className='absolute top-[50%] translate-y-[-50%] left-[-240px] w-[100%] h-[110%] bg-[#EAEAEA] rounded-[100%]'>
              <div className='absolute top-0 right-0 w-[50%] h-full bg-[#FFF]'></div>
            </div>
            <div className=''>

              <div className="relative flex items-center p-5 border-[#182F59] border-l-2 rounded-lg shadow-shadow0.5x mb-8 bg-[#FFF]">
                <div className="ml-3">
                  <h4 className="font-bold leading-6 text-light-gray mb-1">Annual Budget Management</h4>
                  <p className="font-light leading-6 text-light-gray">Streamline your organization's financial future with ease, create, and optimize annual budgets effortlessly.</p>
                </div>
              </div>

              <div className="relative flex items-center p-5 border-[#182F59] border-l-2 rounded-lg shadow-shadow0.5x mb-8 bg-[#FFF]">
                <div className="ml-3">
                  <h4 className="font-bold leading-6 text-light-gray mb-1">Monthly Budget Management</h4>
                  <p className="font-light leading-6 text-light-gray">Gain real-time financial insights and control with simplified monthly budget management.</p>
                </div>
              </div>

              <div className="relative flex items-center p-5 border-[#182F59] border-l-2 rounded-lg shadow-shadow0.5x mb-8 bg-[#FFF]">
                <div className="ml-3">
                  <h4 className="font-bold leading-6 text-light-gray mb-1">Project Budget Management</h4>
                  <p className="font-light leading-6 text-light-gray">Seamlessly create and adjust project budgets, optimize resource allocation, and drive profitability.</p>
                </div>
              </div>

              <div className="relative flex items-center p-5 border-[#182F59] border-l-2 rounded-lg shadow-shadow0.5x bg-[#FFF]">
                <div className="ml-3">
                  <h4 className="font-bold leading-6 text-light-gray mb-1">Budget Comparison</h4>
                  <p className="font-light leading-6 text-light-gray">Compare different budget scenarios and get a comprehensive analysis of financial performance with ease and precision.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* responsive for custom carousel/slider */}
      <div className='px-4 lg:hidden block overflow-hidden'>
        <h2 className="inter mb-6 text-[20px] font-bold leading-[30px] text_gradient_finance">Utilize the Full Potential of Precision Budgeting</h2>
        <p className="mb-10 leading-6 text-justify text-light-gray relative z-10">The Budget Management Module’s key features allow your HR professionals to transform the way they handle financial planning and budget management</p>

        <div className='relative mb-10'>
          <img src="/Finance/Budget_management/growth_team.webp" alt="" className="shadow-shadow3.5x relative z-10" />
          <div className='absolute top-[50%] translate-y-[-50%] right-0 translate-x-[200px] w-[100%] h-[150%] bg-[#EAEAEA] rounded-[100%]'>
            <div className='absolute top-0 right-0 w-[50%] h-full bg-transparent'></div>
          </div>
        </div>

        <div className='mx-auto mt-0 mb-[50px] rounded-[4px] w-[90%] px-6 py-7 shadow-shadow0.5x relative z-10 bg-[#FFF]'>
          <div className='mb-4'>
            <div className='head_resize_div'>
              <div className='head_resize_notice'>
                <div className='head_part_div'>
                  <h3 className='font-bold leading-[22px] text-light-gray'>Annual Budget Management</h3>
                </div>
                <div className='head_part_div'>
                  <h3 className='font-bold leading-[22px] text-light-gray'>Monthly Budget Management</h3>
                </div>
                <div className='head_part_div'>
                  <h3 className='font-bold leading-[22px] text-light-gray'>Project Budget Management</h3>
                </div>
                <div className='head_part_div'>
                  <h3 className='font-bold leading-[22px] text-light-gray'>Budget Comparison</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='para_resize_div'>
            <div className='para_resize_notice'>
              <div className='part_part_div'>
                <p className='font-light text-[14px] text-light-gray leading-[22px] text-justify'>Streamline your organization's financial future with ease, create, and optimize annual budgets effortlessly.</p>
              </div>
              <div className='part_part_div'>
                <p className='font-light text-[14px] leading-[22px] text-justify text-light-gray'>Gain real-time financial insights and control with simplified monthly budget management.</p>
              </div>
              <div className='part_part_div'>
                <p className='font-light text-[14px] leading-[22px] text-justify text-light-gray'>Seamlessly create and adjust project budgets, optimize resource allocation, and drive profitability.</p>
              </div>
              <div className='part_part_div'>
                <p className='font-light text-[14px] leading-[22px] text-justify text-light-gray'>Compare different budget scenarios and get a comprehensive analysis of financial performance with ease and precision.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-[70%] mx-auto'>
          <ul className='slide_btn flex justify-between items-center relative'>
            <div className='color_line_finance'>
              <div className='sub_color_line_finance'></div>
            </div>
            <span className='slide_1' onClick={handleSlide1}>
              <span className='click_btn01'></span>
            </span>
            <span className='slide_2' onClick={handleSlide2}>
              <span className='click_btn2'></span>
            </span>
            <span className='slide_3' onClick={handleSlide3}>
              <span className='click_btn3'></span>
            </span>
            <span className='slide_4' onClick={handleSlide4}>
              <span className='click_btn4'></span>
            </span>
          </ul>
        </div>
      </div>
      {/* 4th section individual section end */}

      {/* business strength policy */}
      <Manual_Finanace_section manual_resource={manual_resource} />

      {/* Employee organization */}
      <section className='budget_management_organized'>
        <div className='main_container flex lg:flex-row flex-col justify-between items-center lg:gap-6 gap-0'>
          <div className='lg:w-[55%] w-full'>
            <div className='relative lg:w-[160px] w-[100px] lg:h-[160px] h-[100px] mx-auto lg:mb-4 mb-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="159" height="159" viewBox="0 0 159 159" fill="none" className='percentage_svg'>
                <path d="M79.5 157C63.1336 157 47.1873 151.819 33.9466 142.199C20.7059 132.579 10.8506 119.014 5.79312 103.449C0.735628 87.8834 0.735627 71.1165 5.79312 55.5512C10.8506 39.9858 20.706 26.4211 33.9467 16.8012C47.1873 7.18125 63.1336 1.99999 79.5 2C95.8664 2 111.813 7.18126 125.053 16.8012C138.294 26.4211 148.149 39.9858 153.207 55.5512C158.264 71.1166 158.264 87.8835 153.207 103.449" stroke="#5BBC2E" strokeWidth="2.22" />
              </svg>
              <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full rounded-full flex justify-center items-center'>
                <h3 className='sura text-center text-white lg:text-[82px] text-[40px]'>95<span className='lg:text-[41px] text-[24px]'>%</span></h3>
              </div>
            </div>
            <p className='inter text-center font-light lg:text-[28px] text-[14px] leading-[48.5px] text-[#FFF]'>Decrease in budgeting Errors</p>
          </div>

          <div className='middle_hr mt-3 mb-4'></div>

          <div className='lg:w-[45%] w-full left_line'>
            <h3 className='roboto font-normal lg:text-[36px] text-[16px] lg:leading-[44px] leading-[24px] text-center lg:text-left text-[#FFF]'> <span className='font-semibold text-green'>Optimize </span> Budget Management, Drive <span className='font-semibold text-green'>Financial Success</span></h3>
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
      {/* next level section (common) */}
      <section className='next_level px-4 relative'>
        <img src="/Finance/Budget_management/person-2.webp" alt="" className='h-[100%] absolute top-0 right-[6px] lg:hidden block' />
        <div className='main_container flex justify-between items-center'>
          <div className="w-[51%]">
            <h2 className='inter lg:text-[36px] text-[14px] font-semibold lg:leading-[48px] leading-[20px] mb-2 lg:pr-[150px] pr-2'><span className='text_gradient_finance'>Experience </span><span className='text-green'>Trouble-Free </span> <span className='text_gradient_finance'>Budgeting</span></h2>
            <p className='inter font-extralight lg:text-[18px] text-[9px] text_gradient_finance lg:pr-[70px] pr-0'>Say Goodbye to Manual Hassles and Say Hello to Simplified Budget Management</p>
            <div className="lg:mt-10 mt-2 text-left">
              <Button className={'action_btn'} text={'Start Today'} onClick={() => setOpenScheduleForm(true)} />
            </div>
          </div>
          <div className="w-[48%] lg:block hidden">
            <img src="/Finance/Budget_management/person-2.webp" alt="" className='w-[420px] mx-auto' />
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
      />
      <StyledCTA
        imgSrc={'/Finance/Budget_management/g1.svg'}
        content={
          <div>
            <p>
              <span className="mb-2 inter text-secondary-1 font-semibold lg:text-[18px] text-[9px] lg:leading-normal leading-2">
                Ready to Experience<span className='inter text-green font-semibold lg:text-[32px] text-[10px'> Smart</span> Budgeting?
              </span>
            </p>
            <div className="noto font-extralight lg:text-[37.5px] text-[14px] lg:leading-[45px] leading-normal">
              <span className='text_gradient'>See How Our <span className='font-normal'> Budget Management </span>Feature Saves Your </span> <span className='text-primary font-normal'>Time and Resources</span>
            </div>
            <div className='flex items-center lg:mt-6 mt-2'>
              <Button className={'action_btn'} text={'Contact Us'} onClick={() => setOpenScheduleForm(true)} />
            </div>
          </div>
        }
      />
      {/* Frequently Ask Questions */}
      <Accordion_component accordion_list={accordion_list} />
      <FooterCTA
        imgSrc='/Finance/Budget_management/footer_bottom_cta.svg'
        title={
          <span className='flex flex-col lg:items-start items-center'>
            <span className='lg:text-[37.5px] text-[15px]'>
              <span className="text-green font-semibold">Boost</span> Financial Efficiency
            </span>
            {/* <span className="lg:text-[18px] text-[12px] inter text-light-white2 lg:mb-2 mb-2">Stop Wasting Time on Manual Attendance Tracking</span> */}
          </span>
        }
        button={
          <Button className={'action_btn2'} text={'Contact Us'} onClick={() => setOpenScheduleForm(true)} />
        }
      />
    </div>
  );
};

export default Budget_management;