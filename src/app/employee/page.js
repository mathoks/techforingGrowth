"use client"
import Accordion_component from '@/components/Accordion_component/Accordion_component';
import Auto_carousel from '@/components/Auto_carousel/Auto_carousel';
import Manual_Personal_section from '@/components/Manual_Personal_section/Manual_Personal_section';
import Personal_Banner_section from '@/components/Personal_Banner_section/Personal_Banner_section';
import Personal_res_nav from '@/components/Personal_res_nav/Personal_res_nav';
import Personal_software_details from '@/components/Personal_software_details/Personal_software_details';
import Personal_software_details2 from '@/components/Personal_software_details2/Personal_software_details2';
import React, { useEffect, useState } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import Link from 'next/link';
import Header from '@/components/Header';
import { usePathname } from 'next/navigation';
import { useGlobalContext } from "@/context/globalContext";
import { Button } from '@/components/SharedComponents';
import StyledCTA from "@/section/StyledCTA";
import FooterCTA from '@/section/FooterCTA';
const Personal = () => {
  const { setOpenScheduleDemo, setOpenScheduleForm } = useGlobalContext();
  const pathName = usePathname();
  const [drop, setDrop] = useState(false);

  useEffect(() => {
    const tab_box = document.querySelector(".tab_box");
    let isDragging = false;
    let startX;

    const startDragging = (e) => {
      isDragging = true;
      startX = e.touches[0].clientX;
    };

    const stopDragging = () => {
      isDragging = false;
    };

    const dragging = (e) => {
      if (!isDragging) return;
      const touchX = e.touches[0].clientX;
      const movementX = touchX - startX;
      tab_box.scrollLeft -= movementX;
      startX = touchX;
    };

    tab_box.addEventListener("touchmove", dragging);
    tab_box.addEventListener("touchstart", startDragging);
    tab_box.addEventListener("touchend", stopDragging);

    return () => {
      tab_box.removeEventListener("touchmove", dragging);
      tab_box.removeEventListener("touchstart", startDragging);
      tab_box.removeEventListener("touchend", stopDragging);
    }
  }, []);


  useEffect(() => {
    const list_element = document.querySelectorAll(".list_element");

    for (let i = 0; i < list_element.length; i++) {
      list_element[i].addEventListener("mouseenter", (e) => {
        list_element[i].classList.add("active");
      })

      list_element[i].addEventListener("mouseleave", (e) => {
        list_element[i].classList.remove("active");
      })
    }
  }, []);


  useEffect(() => {
    const sections = document.querySelectorAll(".scrollSection");
    const list_element = document.querySelectorAll(".list_element");
    // console.log(sections);

    const scrollActives = () => {

      sections.forEach((section, index) => {
        let scrollTop = window.scrollY;
        let secTop = section.offsetTop - 150;
        let secHeight = section.offsetHeight;
        // console.log(window.scrollY, path, path_height);        

        if (scrollTop > secTop && scrollTop < secTop + secHeight) {
          // console.log('hit the section' + index );
          list_element[index].classList.add("active");
        }
        else {
          list_element[index].classList.remove("active");
        }
      })
    };

    window.addEventListener("scroll", scrollActives);
  }, [])


  const manual_resource = {
    headTitle: "The Usual Workplace Struggles",
    img1: "/personal/icons/files.webp",
    img2: "/personal/icons/work_speed.webp",
    img3: "/personal/icons/doc_err.webp",
    manualImage: "/personal/personal.webp",
    para: "From scattered documents to missing deadlines, employees face countless challenges on a daily basis",
    content1: "Having vital information, such as attendance records, leave balances, expense reports, etc. scattered across various platforms and physical documents makes it difficult to access them when needed.",
    content2: "Employees often lack visibility into their performance metrics and Key Performance Indicators (KPIs), affecting their ability to improve their performance and enhance their contributors.",
    content3: "Manual processes like paper-based forms and email approvals are cumbersome, wasteful, introduce errors, and divert resources away from strategic HR initiatives."
  }

  const details01 = {
    ScreenShot: '/personal/screenshot_1.webp',
    headTitle: "Total Control Over Work-Time & Off-Time",
    content01: "Employees often struggle to track their attendance records, leave management, and staying updated on important holidays. This can lead to serious disciplinary issues, work-life imbalance, and missed personal events.",
    content02: "The Personal Dashboard offers an integrated solution for time management: both in and out of work. An employee can get real-time attendance tracking and performance insights, manage leaves, and stay informed about upcoming holidays."
  }

  const details02 = {
    ScreenShot: '/personal/screenshot_2.webp',
    headTitle: "Financial Management Made Easy",
    content01: "Employees may face challenges in understanding and managing their salary, tracking personal expenses, and handling commission-related paperwork, causing them financial stress as well as operational inefficiencies.",
    content02: "Get a unified solution to these financial challenges with the personal dashboard, offering comprehensive earning insights, simplified personal expense tracking and claiming option, and a transparent commission request option to empower your employees manage their finances with ease and confidence."
  }

  const details03 = {
    ScreenShot: '/personal/screenshot_3.webp',
    headTitle: "Simplified Document Management",
    content01: "Document management is often a challenge for most employees. Dealing with scattered documents, enduring time-consuming retrieval processes, and facing challenges in tracking, updating, or renewing documents often result in considerable wasted time. Additionally, manually handling employee documents introduces concerns about document validity and accuracy, further complicating the process.",
    content02: "Our Document Management feature provides a centralized access point to address these challenges, making it easy for employees to find and access their documents. The user-friendly file management ensures easy document retrieval, update, and renewal, making the whole process a breeze so the employees can focus on what truly matters, being productive."
  }

  const details04 = {
    ScreenShot: '/personal/screenshot_4.webp',
    headTitle: "Performance Assessment Through Real-Time Data",
    content01: "Employees often encounter challenges when assessing their own performance, including a lack of real-time insights, complex performance metrics such as Key Performance Indicator (KPI) scores, and difficulty in identifying performance trends that align with organizational goals.",
    content02: "Our real-time KPI Score tracking feature provides employees with immediate insights into their performance. Simplified weekly KPI score tracking making it easier for employees to understand and monitor their performance and drive continuous improvement."
  }

  const details05 = {
    ScreenShot: '/personal/screenshot_5.webp',
    headTitle: "Enhancing Decision-Making through Monthly Surveys",
    content01: "Employees often share their concerns regarding expressing their opinions, often resulting in feelings of voicelessness, disconnection from leadership decisions, and limited engagement in organizational goals.",
    content02: "The Monthly Survey feature directly addresses this issue by providing employees with a platform to express their thoughts, gain insights, and actively participate in shaping the organization’s direction. This empowers employees to have a voice within the organization, feel more engaged, and foster open communication for better alignment with organizational goals."
  }

  const details06 = {
    ScreenShot: '/personal/screenshot_6.webp',
    headTitle: "Simplified Workplace Solutions",
    content01: "Keeping up with organizational matters can be challenging for employees sometimes. It’s easy to miss important updates, announcements, or meeting notices, resulting in confusion, communication gaps, and wasted time. Employees may also face trouble resolving workplace conflicts and reporting problems openly, and may experience unnecessary delays in the resignation process.",
    content02: "Our comprehensive Official panel directly addresses these challenges, preventing information gaps with dedicated sections for notices and announcements, providing the option for employees to confidentially file complaints, and streamline resignation process with zero delays."
  }

  const details07 = {
    ScreenShot: '/personal/screenshot_7.webp',
    headTitle: "Break Down Communication Barriers",
    content01: "Employees often face difficulties connecting and collaborating with with their colleagues, leading to lost time. Getting introduced to everyone is also a time-consuming and inefficient process.",
    content02: "The “Organization Members” section solves these challenges by centralizing employee details, making it easier for colleagues to connect with each other and collaborate. This feature streamlines communication and reduces the time spent on introduction and searching for contact information."
  }

  const details08 = {
    ScreenShot: '/personal/screenshot_8.webp',
    headTitle: "Simplify Credential Controls",
    content01: "Modern workplaces involves many applications and online tools. Keeping track of all the credentials for these applications can be complex and time-consuming, leading to inescapable and potential security risks.",
    content02: "Simplify credential management with TechForing Human’s centralized platform, allowing employees to manage all their software access efficiently, allowing them to reduce security risks and time spent on managing access controls."
  }

  const details09 = {
    ScreenShot: '/personal/screenshot_9.webp',
    headTitle: "Solutions for Training Roadblocks",
    content01: "Employees often face difficulties in accessing relevant training materials and courses, as well as tracking their personal development. This limits their opportunities for skill development and career growth.",
    content02: "Our personal dashboard addresses these issues directly, offering a direct access to a diverse range of training courses. The Training section also simplifies progress tracking with a simplified interface, allowing the users to easily measure their professional growth."
  }

  ///  Accordion list element
  const accordion_list = [
    {
      headContent: "What is the Employee Personal Dashboard module, and how does it benefit employees?",
      paraContent: "The Employee Personal Dashboard is a feature-rich module designed to empower employees by providing them with a centralized hub to manage various aspects of their professional and personal details. It benefits employees by streamlining attendance tracking, leave management, expense reporting, and more, ultimately enhancing work-life balance and productivity."
    },
    {
      headContent: "How does the Attendance feature help employees manage their work hours and performance?",
      paraContent: "The Attendance feature allows employees to easily track their attendance records, view performance graphs, and access historical data. This helps employees stay accountable for their attendance, monitor their performance, and make improvements where necessary."
    },
    {
      headContent: "Can I request leaves and track my leave history using the Leave Management feature?",
      paraContent: "Yes, absolutely. The Leave Management feature provides a user-friendly interface for employees to request leaves, view their leave history, and check leave balances. It simplifies the leave approval process and ensures efficient management."
    },
    {
      headContent: "How does the Personal Expense feature assist employees in managing their expenses?",
      paraContent: "The Personal Expense feature enables employees to track expenses incurred on behalf of the organization and streamline compensation claims. It simplifies the process of listing expenses, attaching supporting documents, and ensuring timely reimbursements."
    },
    {
      headContent: "What are the benefits of using the Commission feature for employees who receive commissions or bonuses?",
      paraContent: "The Commission feature eliminates paperwork hassles by providing a transparent and efficient platform for submitting commission requests. Employees can easily provide client details, commission month, and other necessary information, ensuring accurate tracking and timely payments."
    },
    {
      headContent: "How does the Monthly Survey feature contribute to employee engagement and feedback collection?",
      paraContent: "The Monthly Survey feature empowers employees to participate in surveys, share insights, and provide valuable feedback to drive organizational growth. It fosters a culture of open communication and collaborative decision-making."
    },
    {
      headContent: " Can I access and manage all my important documents in one place using the Documents feature?",
      paraContent: "Absolutely. The Documents feature centralizes access to personal and employment-related documents, making it convenient for employees to view, edit, and update certificates, leave support documents, employment records, and more."
    },
    {
      headContent: "How does the Official feature keep employees informed about important notices and announcements?",
      paraContent: "How does the Official feature keep employees informed about important notices and announcements?"
    }
  ]

  return (
    <>
      {/* header part  */}
      <Header pathName={pathName} />

      {/* Responsive routes start */}
      <Personal_res_nav />

      {/* Personal banner section */}
      <Personal_Banner_section />

      {/* routes navbar section */}
      <nav className='lg:block hidden sticky lg:top-[75px] top-0 z-30 mb-24 mt-20'>
        <div className='max-w-[1140px] mx-auto'>
          <ul className="bg-light-white2 text-center grid grid-cols-9 shadow-shadow4.5x rounded-lg">
            {
              route_pages.map(({ img, svg, content1, content2, link }, index) => (
                <li key={index} className='py-3 list_element cursor-pointer'>
                  <a href={`#${link}`} className='transition-all'>
                    {/* <img src={img} alt="" className='image_boxes opacity-75 block mx-auto mb-2 w-[26px]' /> */}
                    <div className="mx-auto mb-2 w-[26px] personalSvg flex justify-center">
                      {svg}
                    </div>
                    <span className='nav_content'>{content1}</span>
                    <br />
                    <span className='nav_content mt-[-25px]'>{content2}</span>
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>

      {/* auto text slide show animation */}
      <Auto_carousel />

      {/* business strength policy */}
      <Manual_Personal_section manual_resource={manual_resource} />

      {/* Eleavate Working Experience & Personal Dashbaoard */}
      <section className='mt-[100px]'>
        <StyledCTA
          reverse={false}
          imgTransform={'-translate-x-[50%]'}
          imgSrc={'/personal/personal_dashboard.webp'}
          content={
            <div className="lg:ml-auto ml-0 lg:pl-[32px] pl-0">
              <h3 className="inter text-center lg:text-left lg:pr-0">
                <span className='text_gradient_personal font-bold lg:text-[18px] text-[10px]'>Elevate Your </span>
                <span className='text-[10px] lg:text-[32px] text-green'>Working</span>
                <span className='font-bold lg:text-[18px] text-[10px] text_gradient_personal'> Experience!</span>
              </h3>
              <div className="inter text-center lg:text-left mt-[-5px] lg:mt-0 pr-2">
                <span className='font-light lg:text-[32px] text-[10px] lg:leading-[36px] leading-[10px] text_gradient_personal'>Improve Your</span>
                <p className='font-semibold lg:text-[32px] text-[14px] text_gradient_personal'>Work-Life Productivity</p>
                <p className='pt-0 pr-1'>
                  <span className='font-light lg:text-[32px] text-[14px] text_gradient_personal'>With Our</span>
                  <span className='font-semibold lg:text-[32px] text-[14px] text-green'> Personal Dashboard </span>
                </p>
              </div>
              <div className="flex justify-center lg:justify-start lg:mt-6 mt-1">
                <Button className={'action_btn lg:h-[48px] md:h-[35px] h-[25px] text-[15px] lg:text-[22px]'} text={'Contact Us'} onClick={() => setOpenScheduleForm(true)} />
              </div>
            </div>
          }
        />
      </section>

      {/* Left data schedule field  part-1 (common) */}
      <section className='scrollSection  lg:pt-[200px] pt-[60px] lg:pb-[100px] pb-[40px] px-4 overflow-hidden lg:mb-20 mb-0 lg:mt-[10px] mt-0' id="path_1">
        <div className='main_container flex_container relative'>
          <div className='lg:w-[50%] w-full'>
            <Personal_software_details details11={details01} />
          </div>

          <div className='absolute top-[50%] right-0 w-[40%] h-[140%] bg-[#EAEAEA] translate-x-[100px] translate-y-[-50%] border_top_left_radius lg:block hidden'></div>
          <div className='absolute top-[50%] translate-y-[-50%] translate-x-[75px] right-0 w-[640px] h-[440px] lg:block hidden'>
            <img src="/personal/screenshot_1.webp" alt="" className='w-full h-full' />
          </div>
        </div>
      </section>

      {/* right data schedule field  part-2 (common) */}
      <section className='scrollSection lg:pt-[200px] pt-[40px] lg:pb-[100px] pb-[40px] px-4 overflow-hidden lg:mb-10 mb-8 lg:mt-[-80px] mt-0' id="path_2">
        <div className='main_container flex_container relative'>
          <div className='absolute top-[50%] left-0 w-[40%] h-[120%] bg-[#EAEAEA] translate-x-[-100px] translate-y-[-50%] border_top_right_radius lg:block hidden'></div>
          <div className='absolute top-[50%] translate-y-[-50%] translate-x-[-20px] left-0 w-[640px] h-[440px] lg:block hidden'>
            <img src="/personal/screenshot_2.webp" alt="" className='w-[580px] h-full lg:object-contain object-none' />
          </div>

          <div className='lg:w-[50%] lg:ml-auto ml-0 w-full'>
            <Personal_software_details2 details12={details02} />
          </div>
        </div>
      </section>

      {/* next level section (common) */}
      <section className='next_level px-4 relative lg:py-0 py-5 lg:mb-10 mb-0 lg:mt-14 mt-8'>
        <img src="/Finance/Budget_management/person-2.webp" alt="" className='h-[100%] absolute top-0 right-[6px] lg:hidden block' />
        <div className='max-w-[1040px] mx-auto flex justify-between items-center'>
          <div className="w-[51%]">
            <h2 className='inter lg:text-[36px] text-[14px] font-semibold lg:leading-[48px] leading-[20px] mb-2 lg:pr-[150px] pr-2'><span className='text-green'>Maximize </span> <span className='text_gradient_personal'>Employee Efficiency </span></h2>
            <p className='inter font-extralight lg:text-[22px] text-[9px] text_gradient_personal lg:pr-[200px] pr-0'>Discover How Our Features Boost Workplace Productivity</p>
            <div className="lg:mt-10 mt-2 text-left">
              <Button className={'action_btn'} text={'Explore Features'} onClick={() => setOpenScheduleForm(true)} />
            </div>
          </div>
          <div className="w-[48%] lg:block hidden">
            <img src="/personal/person-2.webp" alt="" className='w-[420px] mx-auto' />
          </div>
        </div>
      </section>

      {/* Left data schedule field  part-3 (common) */}
      <section className='scrollSection lg:pt-[200px] pt-[40px] lg:pb-[100px] pb-[40px] px-4 overflow-hidden lg:mb-10 mb-0 lg:mt-[-80px] mt-0' id="path_3">
        <div className='main_container flex_container relative'>
          <div className='lg:w-[50%] w-full'>
            <Personal_software_details details11={details03} />
          </div>

          <div className='absolute top-[50%] translate-y-[-50%] translate-x-[305px] right-0 w-[900px] h-[590px] lg:block hidden'>
            <img src="/personal/screenshot_3.webp" alt="" className='h-full' />
          </div>
        </div>
      </section>

      {/* right data schedule field  part-4 (common) */}
      <section className='scrollSection lg:pt-[200px] pt-[40px] lg:pb-[100px] pb-[40px] px-4 overflow-hidden lg:mb-10 mb-8 lg:mt-[-80px] mt-0' id="path_4">
        <div className='main_container flex_container relative'>

          <div className='absolute top-[30%] translate-y-[-50%] translate-x-[-200px] left-0 w-[800px] h-[550px] lg:block hidden'>
            <img src="/personal/screenshot_4.webp" alt="" className='lg:object-contain object-none' />
          </div>

          <div className='lg:w-[50%] lg:ml-auto ml-0 w-full'>
            <Personal_software_details2 details12={details04} />
          </div>
        </div>
      </section>

      {/* Left data schedule field  part-5 (common) */}
      <section className='scrollSection lg:pt-[200px] pt-[40px] lg:pb-[100px] pb-[40px] px-3 overflow-hidden lg:mb-20 mb-0 lg:mt-[-80px] mt-0' id="path_5">
        <div className='main_container flex_container relative'>
          <div className='lg:w-[50%] w-full'>
            <Personal_software_details details11={details05} />
          </div>

          <div className='absolute top-[50%] translate-y-[-50%] translate-x-[65px] right-0 w-[475px] h-[580px] lg:block hidden'>
            <img src="/personal/screenshot_5.webp" alt="" className='w-full h-full' />
          </div>
        </div>
      </section>

      {/* Business team section  (common) */}
      <section className="bg-[#FAFAFA] shadow-shadow1x text-[#FAFAFA] lg:mt-20 lg:mb-10 mt-0 mb-5 overflow-hidden">
        <div className="main_container flex justify-between items-center lg:py-[110px] py-[20px] px-4 relative">
          <div className="lg:w-[45%] w-[40%] lg:ml-auto ml-0 lg:pl-[30px] pl-0">
            <h3 className="inter font-semibold lg:text-[37.5px] text-[15px] mb-1 text-left lg:leading-[48px] leading-[22px] lg:pr-0 pr-[70px]"><span className='text-green font-semibold'>Empower</span><span className='text_gradient_personal'> Your Workforce</span></h3>
            <p className="inter font-extralight lg:text-[18px] text-[9px] lg:leading-[36px] leading-[16px] text-left text_gradient_personal pr-2">Give Your Employees the Tools They Need to Succeed</p>

            <div className="lg:mt-5 mt-5 text-left">
              <Button className={'action_btn md:h-[45px] text-[22px]'} text={'Get Started Today'} onClick={() => setOpenScheduleForm(true)} />
            </div>
          </div>

          <div className="image_container_unique lg:translate-x-0 translate-x-[-80%]">
            <img src="/personal/empower_workforce.webp" alt="" className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* right data schedule field  part-6 (common) */}
      <section className='scrollSection lg:pt-[200px] pt-[40px] lg:pb-[100px] pb-[40px] px-4 overflow-hidden lg:mb-10 mb-8 lg:mt-[-80px] mt-0' id="path_6">
        <div className='main_container flex_container relative'>

          <div className='absolute top-[50%] translate-y-[-50%] translate-x-[-20px] left-0 w-[640px] h-[550px] lg:block hidden'>
            <img src="/personal/screenshot_6.webp" alt="" className='w-[580px] h-full lg:object-contain object-none' />
          </div>

          <div className='lg:w-[50%] lg:ml-auto ml-0 w-full'>
            <Personal_software_details2 details12={details06} />
          </div>
        </div>
      </section>

      {/* Left data schedule field  part-7 (common) */}
      <section className='scrollSection lg:pt-[200px] pt-[40px] lg:pb-[100px] pb-[40px] px-4 overflow-hidden lg:mb-10 mb-0 lg:mt-[-80px] mt-0' id="path_7">
        <div className='main_container flex_container relative'>
          <div className='lg:w-[50%] w-full'>
            <Personal_software_details details11={details07} />
          </div>

          <div className='absolute top-[50%] right-0 w-[40%] h-[120%] bg-[#EAEAEA] translate-x-[100px] translate-y-[-50%] border_top_left_radius lg:block hidden'></div>
          <div className='absolute top-[50%] translate-y-[-50%] translate-x-[75px] right-0 w-[640px] h-[440px] lg:block hidden'>
            <img src="/personal/screenshot_7.webp" alt="" className='w-[540px] h-full' />
          </div>
        </div>
      </section>


      {/* Enhance Employee Experience section  (common) */}
      <section className='mt-[100px]'>
        <StyledCTA
          reverse={false}
          imgTransform={'-translate-x-[50%]'}
          imgSrc={'/personal/enhance_experience.webp'}
          content={
            <div>
              <div className="lg:ml-auto ml-0 lg:pl-[30px] pl-0">
                <h3 className="inter lg:text-[32px] text-[15px] mb-1 text-center lg:text-left lg:leading-[48px] leading-[22px] lg:pr-0"><span className='text-green font-bold'>Enhance</span><span className='text_gradient_personal '> Employee Experience</span></h3>
                <div className="inter text-center lg:text-left text_gradient_personal lg:mt-0 mt-[-5px] pr-2">
                  <span className='font-light lg:text-[32px] text-[14px] lg:leading-[36px] leading-[16px]'>Upgrade</span> <span className='font-semibold lg:text-[16px] text-[14px] text_gradient_personal'> Your Employee Workday With the</span>
                  <p className='pt-1 lg:pt-3 font-light lg:text-[32px] text-[14px] lg:leading-[36px] leading-[16px]'>Personalized Dashboard</p>
                </div>
                <div className="flex justify-center lg:justify-start lg:mt-6 mt-1">
                  <Button className={'action_btn lg:h-[48px] md:h-[35px] h-[25px] text-[15px] lg:text-[22px]'} text={'Upgrade Today'} onClick={() => setOpenScheduleForm(true)} />
                </div>
              </div>
            </div>
          }
        />
      </section>

      {/* right data schedule field  part-8 (common) */}
      <section className="scrollSection  lg:pt-[200px] pt-[40px] lg:pb-[100px] pb-[40px] px-4 overflow-hidden lg:mb-10 mb-8 lg:mt-[-80px] mt-0" id="path_8">
        <div className='main_container flex_container relative'>

          <div className='absolute top-[50%] translate-y-[-50%] translate-x-[-20px] left-0 w-[900px] h-[540px] lg:block hidden'>
            <img src="/personal/screenshot_8.webp" alt="" className='w-[580px] h-full lg:object-contain object-none' />
          </div>

          <div className='lg:w-[50%] lg:ml-auto ml-0 w-full'>
            <Personal_software_details2 details12={details08} />
          </div>
        </div>
      </section>

      {/* Left data schedule field  part-9 (common) */}
      <section className='scrollSection lg:pt-[200px] pt-[40px] lg:pb-[100px] pb-[40px] px-4 overflow-hidden lg:mb-10 mb-0 lg:mt-[-80px] mt-0' id="path_9">
        <div className='main_container flex_container relative'>
          <div className='lg:w-[50%] w-full'>
            <Personal_software_details details11={details09} />
          </div>
          <div className='absolute top-[50%] translate-y-[-40%] translate-x-[125px] right-0 w-[700px] h-[540px] lg:block hidden'>
            <img src="/personal/screenshot_9.webp" alt="" className=' h-[500px]' />
          </div>
        </div>
      </section>

      {/* Frequently Ask Questions */}
      <Accordion_component accordion_list={accordion_list} />

      <section className='mt-[90px]'>
        <FooterCTA
          imgSrc='/personal/footer_bottom_cta_bg.webp'
          title={
            <span className='flex flex-col lg:items-start items-center'>
              <span className='lg:text-[37.5px] text-[15px]'>
                <span className="text-green font-semibold">Boost</span> Employee Well-being
              </span>
              <span className="lg:text-[18px] text-[12px] inter text-light-white2 lg:mb-2 mb-2">
                Enable Work-Life Balance and Stress-Free Operations
              </span>
            </span>
          }
          button={
            <Button className={'transparent_action_btn'} text={'Contact Us'} onClick={() => setOpenScheduleForm(true)} />
          }
        />
      </section>
    </>
  );
};

export default Personal;


const route_pages = [
  {
    link: "path_1",
    img: "/personal/navbar/calendar.webp",
    content1: "Attendance",
    content2: "Management",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M15 2H17C17.7956 2 18.5587 2.31607 19.1213 2.87868C19.6839 3.44129 20 4.20435 20 5V17C20 17.7956 19.6839 18.5587 19.1213 19.1213C18.5587 19.6839 17.7956 20 17 20H3C2.20435 20 1.44129 19.6839 0.87868 19.1213C0.316071 18.5587 0 17.7956 0 17V5C0 4.20435 0.316071 3.44129 0.87868 2.87868C1.44129 2.31607 2.20435 2 3 2H5V1C5 0.734783 5.10536 0.48043 5.29289 0.292893C5.48043 0.105357 5.73478 0 6 0C6.26522 0 6.51957 0.105357 6.70711 0.292893C6.89464 0.48043 7 0.734783 7 1V2H13V1C13 0.734783 13.1054 0.48043 13.2929 0.292893C13.4804 0.105357 13.7348 0 14 0C14.2652 0 14.5196 0.105357 14.7071 0.292893C14.8946 0.48043 15 0.734783 15 1V2ZM17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V10H2V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H17C17.2652 18 17.5196 17.8946 17.7071 17.7071ZM2 8H18V5C18 4.73478 17.8946 4.48043 17.7071 4.29289C17.5196 4.10536 17.2652 4 17 4H15V5C15 5.26522 14.8946 5.51957 14.7071 5.70711C14.5196 5.89464 14.2652 6 14 6C13.7348 6 13.4804 5.89464 13.2929 5.70711C13.1054 5.51957 13 5.26522 13 5V4H7V5C7 5.26522 6.89464 5.51957 6.70711 5.70711C6.51957 5.89464 6.26522 6 6 6C5.73478 6 5.48043 5.89464 5.29289 5.70711C5.10536 5.51957 5 5.26522 5 5V4H3C2.73478 4 2.48043 4.10536 2.29289 4.29289C2.10536 4.48043 2 4.73478 2 5V8Z" fill="#182F59" />
    </svg>,
  },
  {
    link: "path_2",
    img: "/personal/navbar/cash_sync.webp",
    content1: "Finance",
    content2: "Management",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M21 24C19.3 24 18 22.7 18 21C18 20.6 18.1 20.1 18.3 19.6L15.8 17.9C14.8 19.1 13.3 19.9 11.6 19.9C10 19.9 8.5 19.2 7.5 18.1L5.8 19.4C5.81716 19.4686 5.83431 19.5343 5.85097 19.5981C5.93137 19.9059 6 20.1686 6 20.5C6 21.9 4.9 23 3.5 23C2.1 23 1 21.9 1 20.5C1 19.1 2.1 18 3.4 18C4.1 18 4.7 18.2 5.1 18.6L6.8 17.3C6.3 16.4 6 15.5 6 14.4C6 13.2 6.4 12.1 7.1 11.2L5.8 10.1C5.2 10.7 4.4 11 3.5 11C1.6 11 0 9.4 0 7.5C0 5.6 1.6 4 3.5 4C4.5 4 5.4 4.4 6 5.1L8.2 3.5C8.1 3.2 8 2.9 8 2.5C8 1.1 9.1 0 10.5 0C11.6 0 12.5 0.7 12.8 1.6L15 1.2C15.2 0.5 15.8 0 16.5 0C17.3 0 18 0.7 18 1.5C18 2.3 17.3 3 16.5 3C15.9 3 15.4 2.7 15.2 2.2L13 2.6C12.9 3.9 11.8 5 10.5 5C9.8 5 9.2 4.7 8.8 4.3L6.6 5.9C6.8 6.4 7 6.9 7 7.5C7 8.2 6.8 8.9 6.4 9.4L7.7 10.5C8.7 9.6 10 9 11.5 9C13.6 9 15.4 10.1 16.3 11.8L18.1 11C18 10.9 18 10.7 18 10.5C18 9.6 18.5 8.9 19.2 8.4L18.6 7H18.5C17.7 7 17 6.3 17 5.5C17 4.7 17.7 4 18.5 4C19.3 4 20 4.7 20 5.5C20 5.9 19.8 6.3 19.5 6.6L20.1 8H20.5C21.9 8 23 9.1 23 10.5C23 11.9 21.9 13 20.5 13C19.7 13 19 12.5 18.5 11.9L16.7 12.7C16.9 13.3 17 13.9 17 14.5C17 15.5 16.7 16.4 16.3 17.2L18.8 18.9C19.4 18.4 20.2 18 21 18C22.7 18 24 19.3 24 21C24 22.7 22.7 24 21 24ZM18.5 5C18.2 5 18 5.2 18 5.5C18 5.8 18.2 6 18.5 6C18.8 6 19 5.8 19 5.5C19 5.2 18.8 5 18.5 5ZM22 10.5C22 9.7 21.3 9 20.5 9C19.7 9 19 9.7 19 10.5C19 11.3 19.7 12 20.5 12C21.3 12 22 11.3 22 10.5ZM17 1.5C17 1.2 16.8 1 16.5 1C16.2 1 16 1.2 16 1.5C16 1.8 16.2 2 16.5 2C16.8 2 17 1.8 17 1.5ZM12 2.5C12 1.7 11.3 1 10.5 1C9.7 1 9 1.7 9 2.5C9 3.3 9.7 4 10.5 4C11.3 4 12 3.3 12 2.5ZM2 20.5C2 21.3 2.7 22 3.5 22C4.3 22 5 21.3 5 20.5C5 19.7 4.3 19 3.5 19C2.7 19 2 19.7 2 20.5ZM1 7.5C1 8.9 2.1 10 3.5 10C4.9 10 6 8.9 6 7.5C6 6.1 4.9 5 3.5 5C2.1 5 1 6.1 1 7.5ZM7 14.5C7 17 9 19 11.5 19C14 19 16 17 16 14.5C16 12 14 10 11.5 10C9 10 7 12 7 14.5ZM19 21C19 22.1 19.9 23 21 23C22.1 23 23 22.1 23 21C23 19.9 22.1 19 21 19C19.9 19 19 19.9 19 21ZM11 13.5C11 13.8 11.2 14 11.5 14C12.3 14 13 14.7 13 15.5C13 16.1 12.6 16.7 12 16.9V17.5C12 17.8 11.8 18 11.5 18C11.2 18 11 17.8 11 17.5V17H10.5C10.2 17 10 16.8 10 16.5C10 16.2 10.2 16 10.5 16H11.5C11.8 16 12 15.8 12 15.5C12 15.2 11.8 15 11.5 15C10.7 15 10 14.3 10 13.5C10 12.9 10.4 12.3 11 12.1V11.5C11 11.2 11.2 11 11.5 11C11.8 11 12 11.2 12 11.5V12H12.5C12.8 12 13 12.2 13 12.5C13 12.8 12.8 13 12.5 13H11.5C11.2 13 11 13.2 11 13.5Z" fill="#182F59" />
    </svg>,
  },
  {
    link: "path_3",
    img: "/personal/navbar/document.webp",
    content1: "Personal",
    content2: "Document",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
      <path d="M10.04 2.5L7.53 5H12.53L10.04 2.5ZM2 7V20H18V7H2ZM10 0L15 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H2C1.46957 22 0.960859 21.7893 0.585786 21.4142C0.210714 21.0391 0 20.5304 0 20V7C0 6.46957 0.210714 5.96086 0.585786 5.58579C0.960859 5.21071 1.46957 5 2 5H5L10 0ZM5 18V14H10V18H5ZM12 17V10H16V17H12ZM4 12V9H9V12H4Z" fill="#182F59" />
    </svg>,
  },
  {
    link: "path_4",
    img: "/personal/navbar/document.webp",
    content1: "Performance",
    content2: "Indicator",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 12.2075 0.00510938 12.4132 0.0155156 12.618H3.77498V11.3819H1.7707C1.84158 10.1915 2.11467 9.05742 2.55661 8.01183C2.99325 6.9787 3.59602 6.03136 4.32938 5.20388L5.74659 6.62147L6.62109 5.74673L5.20481 4.33027C5.54166 4.032 5.89697 3.75338 6.27103 3.50166C7.74797 2.50444 9.49388 1.88442 11.382 1.77216V3.77531H12.618V1.77066C13.8097 1.84209 14.9438 2.11462 15.9893 2.55694C17.0226 2.99358 17.9701 3.59616 18.7972 4.32947L17.38 5.74669L18.2534 6.62142L19.6708 5.20495C19.9695 5.5418 20.2464 5.89711 20.5 6.27136C21.4969 7.74834 22.1172 9.49439 22.2293 11.3819H20.226V12.618H23.9835C23.9949 12.4131 24 12.2075 24 12C24.0012 10.3461 23.6643 8.766 23.0576 7.32877C22.146 5.17514 20.6256 3.34477 18.7107 2.05116C16.7958 0.757172 14.4825 0 12 0C10.3458 0 8.76562 0.336047 7.3297 0.943547C5.175 1.85494 3.34458 3.37575 2.05078 5.29041C0.757219 7.20399 0 9.51905 0 12ZM15.2457 4.35516C15.2909 4.28109 15.3731 4.24856 15.4395 4.27767C15.5058 4.30683 15.5372 4.38961 15.5128 4.47267L13.5924 11.0537C13.7579 11.3312 13.8546 11.6541 13.8546 12.0007C13.8546 13.0248 13.0244 13.8549 12.0006 13.8549C10.9765 13.8549 10.1465 13.0248 10.1465 12.0007C10.1465 11.0753 10.8255 10.3098 11.7121 10.171L15.2457 4.35516ZM11.0735 12.0008C11.0735 12.513 11.4885 12.9277 12.0006 12.9277C12.5124 12.9277 12.9275 12.513 12.9275 12.0008C12.9275 11.4885 12.5124 11.0735 12.0006 11.0735C11.4885 11.0735 11.0735 11.4885 11.0735 12.0008Z" fill="#182F59" />
    </svg>,
  },
  {
    link: "path_5",
    img: "/personal/navbar/report.webp",
    content1: "Open Feedback ",
    content2: "Channel",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.75 2.25H15C15.3978 2.25 15.7794 2.40804 16.0607 2.68934C16.342 2.97064 16.5 3.35218 16.5 3.75V19.5C16.5 19.8978 16.342 20.2794 16.0607 20.5607C15.7794 20.842 15.3978 21 15 21H1.5C1.10218 21 0.720644 20.842 0.43934 20.5607C0.158035 20.2794 0 19.8978 0 19.5V3.75C0 3.35218 0.158035 2.97064 0.43934 2.68934C0.720644 2.40804 1.10218 2.25 1.5 2.25H3.75V1.5C3.75 1.10218 3.90804 0.720644 4.18934 0.43934C4.47064 0.158035 4.85218 0 5.25 0H11.25C11.6478 0 12.0294 0.158035 12.3107 0.43934C12.592 0.720644 12.75 1.10218 12.75 1.5V2.25ZM11.25 1.5H5.25V4.5H11.25V1.5ZM1.5 19.5H15V3.75H12.75V6H3.75V3.75H1.5V19.5ZM9.25 14.5H7.75V17.5H9.25V14.5ZM13 13H11.5V17.5H13V13ZM5.5 10H4V17.5H5.5V10Z" fill="#182F59" />
    </svg>
    ,
  },
  {
    link: "path_6",
    img: "/personal/navbar/person_err.webp",
    content1: "Complaint & ",
    content2: "Notification",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M11.1562 2.71582C12.053 1.09906 13.7772 0 15.75 0C18.6406 0 21 2.3594 21 5.25C21 8.14061 18.6406 10.5 15.75 10.5C14.9798 10.5 14.2482 10.3317 13.5879 10.0312C12.6787 11.682 10.93 12.7448 9.0015 12.75H9C6.10939 12.75 3.75 10.3906 3.75 7.5C3.75 4.6094 6.10939 2.25 9 2.25C9.74704 2.2499 10.4811 2.41177 11.1562 2.71582ZM19.5 5.25C19.5 3.17005 17.83 1.5 15.75 1.5C14.1475 1.5 12.7901 2.49165 12.2505 3.89795C12.2363 3.97689 12.2096 4.05305 12.1714 4.12354C12.0608 4.47859 12 4.85722 12 5.25C12 6.51159 12.6154 7.62102 13.563 8.2998C13.6304 8.33189 13.6926 8.37386 13.7476 8.42432C14.3261 8.78867 15.0118 9 15.75 9C17.83 9 19.5 7.32995 19.5 5.25ZM10.6245 4.12061C10.1196 3.87784 9.56489 3.74992 9 3.75C6.92005 3.75 5.25 5.42005 5.25 7.5C5.25 9.57995 6.92005 11.25 9 11.25C10.4166 11.2456 11.6871 10.4498 12.3208 9.2168C11.2079 8.25273 10.5 6.83138 10.5 5.25C10.5 4.86252 10.5441 4.4846 10.6245 4.12061ZM15.75 2.25C15.5511 2.25 15.3603 2.32901 15.2197 2.46966C15.079 2.61031 15 2.80109 15 3V5.25C15 5.44891 15.079 5.63967 15.2197 5.78032C15.3603 5.92097 15.5511 6 15.75 6C15.9489 6 16.1397 5.92097 16.2803 5.78032C16.421 5.63967 16.5 5.44891 16.5 5.25V3C16.5 2.80109 16.421 2.61031 16.2803 2.46966C16.1397 2.32901 15.9489 2.25 15.75 2.25ZM15.2197 6.96966C15.3603 6.82901 15.5511 6.75 15.75 6.75C15.9489 6.75 16.1397 6.82901 16.2803 6.96966C16.421 7.11031 16.5 7.30109 16.5 7.5C16.5 7.69891 16.421 7.88967 16.2803 8.03032C16.1397 8.17097 15.9489 8.25 15.75 8.25C15.5511 8.25 15.3603 8.17097 15.2197 8.03032C15.079 7.88967 15 7.69891 15 7.5C15 7.30109 15.079 7.11031 15.2197 6.96966ZM0 17.25C0 15.1855 1.68547 13.5 3.75 13.5H14.25C16.3145 13.5 18 15.1855 18 17.25C18 19.3145 16.3145 21 14.25 21H3.75C1.68547 21 0 19.3145 0 17.25ZM16.5 17.25C16.5 15.9905 15.5095 15 14.25 15H3.75C2.49053 15 1.5 15.9905 1.5 17.25C1.5 18.5095 2.49053 19.5 3.75 19.5H14.25C15.5095 19.5 16.5 18.5095 16.5 17.25Z" fill="#182F59" />
    </svg>,
  },
  {
    link: "path_7",
    img: "/personal/navbar/group.webp",
    content1: "know Your",
    content2: "Colleagues",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
      <path d="M2.89863 5.23753C2.89964 4.36823 3.1161 3.51272 3.52863 2.74753C4.1539 1.59438 5.18821 0.717068 6.42793 0.288331C7.66766 -0.140406 9.02297 -0.0895079 10.227 0.431005C11.4311 0.951517 12.3967 1.90393 12.9337 3.10074C13.4708 4.29754 13.5403 5.65203 13.1286 6.89753C12.8557 7.72122 12.3813 8.46369 11.7486 9.05753C12.9417 9.6413 13.9775 10.5026 14.7692 11.5691C15.5609 12.6357 16.0853 13.8765 16.2986 15.1875C16.3232 15.3332 16.3232 15.4819 16.2986 15.6275C16.2637 15.7708 16.2027 15.9064 16.1186 16.0275C16.0283 16.1445 15.9162 16.243 15.7886 16.3175C15.6638 16.3972 15.5245 16.4516 15.3786 16.4775C15.233 16.5022 15.0843 16.5022 14.9386 16.4775C14.7949 16.4389 14.6594 16.3745 14.5386 16.2875C14.4198 16.2033 14.3208 16.094 14.2486 15.9675C14.1689 15.8427 14.1146 15.7034 14.0886 15.5575C13.8572 14.1545 13.135 12.8792 12.0507 11.9592C10.9664 11.0391 9.59064 10.5341 8.16863 10.5341C6.74661 10.5341 5.37082 11.0391 4.28656 11.9592C3.20231 12.8792 2.48007 14.1545 2.24863 15.5575C2.22268 15.7034 2.16832 15.8427 2.08863 15.9675C2.0197 16.0964 1.9201 16.2063 1.79863 16.2875C1.67789 16.3745 1.54236 16.4389 1.39863 16.4775C1.25349 16.5074 1.10377 16.5074 0.958629 16.4775C0.812583 16.4583 0.67258 16.4071 0.548629 16.3275C0.409548 16.2398 0.290332 16.124 0.198629 15.9875C0.11674 15.8652 0.0559006 15.73 0.0186288 15.5875C-0.0062096 15.4453 -0.0062096 15.2998 0.0186288 15.1575C0.234317 13.8538 0.757798 12.6204 1.54563 11.5595C2.33347 10.4986 3.36294 9.64089 4.54863 9.05753C4.02779 8.56686 3.61275 7.97489 3.32901 7.31799C3.04527 6.66108 2.89881 5.9531 2.89863 5.23753ZM16.3986 2.98753C17.2696 2.98861 18.1215 3.24239 18.851 3.7181C19.5806 4.19381 20.1564 4.87101 20.5086 5.66753C20.8612 6.46467 20.9758 7.34676 20.8386 8.20753C20.696 9.06748 20.3109 9.86885 19.7286 10.5175C20.6411 10.9678 21.4512 11.6009 22.1086 12.3775C22.764 13.1418 23.2604 14.0291 23.5686 14.9875C23.6239 15.1803 23.6239 15.3848 23.5686 15.5775C23.5256 15.7685 23.4324 15.9446 23.2986 16.0875C23.1695 16.237 22.999 16.3449 22.8086 16.3975C22.6158 16.4523 22.4115 16.4523 22.2186 16.3975C22.0276 16.3545 21.8516 16.2613 21.7086 16.1275C21.5633 15.9909 21.4564 15.8185 21.3986 15.6275C21.128 14.7601 20.6378 13.9775 19.9755 13.3554C19.3132 12.7334 18.5013 12.2932 17.6186 12.0775C17.37 12.0179 17.1483 11.8772 16.9886 11.6775C16.8356 11.476 16.7515 11.2306 16.7486 10.9775V10.4475C16.7805 10.2528 16.8633 10.07 16.9886 9.91753C17.0984 9.73872 17.2584 9.59614 17.4486 9.50753C17.8903 9.27492 18.2421 8.90202 18.4486 8.44753C18.6609 7.99121 18.7103 7.47589 18.5886 6.98753C18.4722 6.49437 18.1941 6.05435 17.7986 5.73753C17.4015 5.41924 16.9075 5.24634 16.3986 5.24753C16.242 5.26232 16.084 5.24423 15.9347 5.19442C15.7855 5.1446 15.6483 5.06417 15.5319 4.95826C15.4155 4.85236 15.3225 4.72332 15.2589 4.57941C15.1953 4.43549 15.1624 4.27988 15.1624 4.12253C15.1624 3.96519 15.1953 3.80958 15.2589 3.66566C15.3225 3.52175 15.4155 3.39271 15.5319 3.2868C15.6483 3.1809 15.7855 3.10047 15.9347 3.05065C16.084 3.00084 16.242 2.98275 16.3986 2.99753V2.98753ZM8.14863 2.23753C7.75171 2.22794 7.357 2.2994 6.98863 2.44753C6.61599 2.59212 6.276 2.80971 5.98863 3.08753C5.69758 3.37015 5.4693 3.71087 5.31863 4.08753C5.15883 4.4533 5.07709 4.84839 5.07863 5.24753C5.07796 5.6466 5.15967 6.0415 5.31863 6.40753C5.46822 6.78477 5.69665 7.1257 5.98863 7.40753C6.28121 7.66387 6.62085 7.86086 6.98863 7.98753C7.3601 8.13702 7.75836 8.2085 8.15863 8.19753C8.95428 8.19753 9.71734 7.88146 10.2799 7.31885C10.8426 6.75625 11.1586 5.99318 11.1586 5.19753C11.1586 4.40189 10.8426 3.63882 10.2799 3.07621C9.71734 2.5136 8.95428 2.19753 8.15863 2.19753L8.14863 2.23753Z" fill="#182F59" />
    </svg>,
  },
  {
    link: "path_8",
    img: "/personal/navbar/security.webp",
    content1: "Credential",
    content2: "Controls",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.45711 1.04289C2.06658 0.652369 1.43342 0.652369 1.04289 1.04289C0.652369 1.43342 0.652369 2.06658 1.04289 2.45711L3.70136 5.11557C2.40263 6.7244 1.625 8.77139 1.625 11C1.625 13.2286 2.40263 15.2756 3.70136 16.8844L1.04289 19.5429C0.652369 19.9334 0.652369 20.5666 1.04289 20.9571C1.43342 21.3476 2.06658 21.3476 2.45711 20.9571L5.11557 18.2986C6.7244 19.5974 8.77139 20.375 11 20.375C13.2286 20.375 15.2756 19.5974 16.8844 18.2986L19.5429 20.9571C19.9334 21.3476 20.5666 21.3476 20.9571 20.9571C21.3476 20.5666 21.3476 19.9334 20.9571 19.5429L18.2986 16.8844C19.5974 15.2756 20.375 13.2286 20.375 11C20.375 8.77139 19.5974 6.7244 18.2986 5.11557L20.9571 2.45711C21.3476 2.06658 21.3476 1.43342 20.9571 1.04289C20.5666 0.652369 19.9334 0.652369 19.5429 1.04289L16.8844 3.70136C15.2756 2.40263 13.2286 1.625 11 1.625C8.77139 1.625 6.7244 2.40263 5.11557 3.70136L2.45711 1.04289ZM3.625 11C3.625 6.9269 6.9269 3.625 11 3.625C15.0731 3.625 18.375 6.9269 18.375 11C18.375 15.0731 15.0731 18.375 11 18.375C6.9269 18.375 3.625 15.0731 3.625 11ZM11 6.0075C8.99771 6.0075 7.375 7.63021 7.375 9.6325C7.375 10.6341 7.78158 11.54 8.43658 12.1953L7.44922 14.6132C7.32329 14.9216 7.35917 15.2724 7.54492 15.5489C7.73067 15.8254 8.0419 15.9912 8.375 15.9912H13.625C13.9581 15.9912 14.2693 15.8254 14.4551 15.5489C14.6408 15.2724 14.6767 14.9216 14.5508 14.6132L13.5634 12.1953C14.2184 11.54 14.625 10.6341 14.625 9.6325C14.625 7.63021 13.0023 6.0075 11 6.0075ZM9.375 9.6325C9.375 8.73478 10.1023 8.0075 11 8.0075C11.8977 8.0075 12.625 8.73478 12.625 9.6325C12.625 10.2216 12.312 10.7388 11.8378 11.0254C11.4164 11.28 11.2431 11.8035 11.4292 12.2593L12.1365 13.9912H9.86353L10.5708 12.2593C10.7569 11.8035 10.5836 11.28 10.1622 11.0254C9.68796 10.7388 9.375 10.2216 9.375 9.6325Z" fill="#182F59" />
    </svg>
    ,
  },
  {
    link: "path_9",
    img: "/personal/navbar/training.webp",
    content1: "On Job",
    content2: "Training",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M17.8066 0H0V2.32227H0.774414V13.5488H0V15.8711H9.05078L10.9863 19.7422H14.71V24H24V19.3555C24 18.791 23.8477 18.2617 23.583 17.8047C23.3604 17.4219 23.0586 17.0898 22.7002 16.834C22.1934 16.4707 21.5732 16.2578 20.9033 16.2578H20.3789C20.5361 16.1309 20.6826 15.9902 20.8154 15.8379C20.9404 15.6953 21.0537 15.543 21.1543 15.3809C21.2559 15.2188 21.3438 15.0469 21.417 14.8672L21.4912 14.6699C21.5391 14.5293 21.5791 14.3848 21.6084 14.2383L21.6416 14.0488L21.6523 13.9727L21.666 13.8418L21.6748 13.709L21.6777 13.5488V12C21.6777 10.5059 20.4619 9.29102 18.9678 9.29102H17.4189C17.2881 9.29102 17.1592 9.30273 17.0322 9.32227V2.32227H17.8066V0ZM20.4473 17.9668L18.876 18.6406L19.9492 17.0332H20.2139L20.4473 17.9668ZM19.0186 17.0332L18.1934 18.2695L17.3682 17.0332H19.0186ZM17.5098 18.6406L15.9385 17.9668L16.1729 17.0332H16.4375L17.5098 18.6406ZM20.9033 13.5488C20.9033 15.043 19.6875 16.2578 18.1934 16.2578C16.7002 16.2578 15.4834 15.043 15.4834 13.5488H17.2949C17.6064 13.5488 17.9092 13.4922 18.1934 13.3867C18.5312 13.2598 18.8408 13.0605 19.1025 12.7988L19.3027 12.5996C19.7041 13.0957 20.2754 13.4199 20.9033 13.5156V13.5488ZM2.32227 9.29102V12.7734H7.50879L7.52344 12.8164L7.88965 13.5488H1.54883V2.32227H16.2578V9.55469C15.3438 9.99219 14.71 10.9219 14.71 12V13.5488H11.5615L10.3604 11.2969C10.082 10.7754 9.54199 10.4512 8.95117 10.4512C8.46582 10.4512 8.03516 10.6738 7.74219 11.0176V9.29102H2.32227ZM6.96777 10.0645V12H3.09668V10.0645H6.96777ZM17.4189 10.0645H18.9678C19.2764 10.0645 19.5674 10.1367 19.8262 10.2656L19.9668 10.3418C20.0156 10.3711 20.0625 10.4023 20.1074 10.4355C20.165 10.4785 20.2197 10.5234 20.2725 10.5723C20.3477 10.6406 20.418 10.7148 20.4814 10.7949C20.7451 11.127 20.9033 11.5449 20.9033 12V12.7285C20.46 12.6309 20.0654 12.3672 19.8066 11.9805L19.415 11.3926L18.5547 12.252C18.4404 12.3672 18.3125 12.4648 18.1748 12.543L18.084 12.5898C18.043 12.6113 18 12.6289 17.957 12.6465C17.749 12.7305 17.5254 12.7734 17.2949 12.7734H15.4834V12C15.4834 10.9336 16.3525 10.0645 17.4189 10.0645ZM0.774414 0.773438H17.0322V1.54883H0.774414V0.773438ZM0.774414 15.0977V14.3223H8.27734L8.66406 15.0977H0.774414ZM12.3867 18.9668H11.4648L8.21582 12.4707C8.15918 12.3555 8.12891 12.2285 8.12891 12.1016V12.0488C8.12891 11.8594 8.19336 11.6855 8.30176 11.5469C8.40137 11.418 8.53711 11.3203 8.69336 11.2676C8.77441 11.2402 8.86133 11.2266 8.95117 11.2266C9.25586 11.2266 9.53418 11.3926 9.67773 11.6621L12.3867 16.7422V18.9668ZM11.9736 14.3223H14.7998C14.8613 14.5938 14.9561 14.8535 15.0771 15.0977H12.3867L11.9736 14.3223ZM12.7998 15.8711H15.6045C15.7295 16.0098 15.8633 16.1406 16.0088 16.2578H13.0068L12.7998 15.8711ZM23.2256 23.2266H21.6777V21.6777H23.2256V23.2266ZM23.2256 20.9023H21.6777V19.3555H20.9033V23.2266H15.4834V18.9668H13.1611V17.0332H15.375L15.0283 18.4199L18.1934 19.7754L21.3584 18.4199L21.0127 17.0371C22.2422 17.0957 23.2256 18.1113 23.2256 19.3555V20.9023ZM7.74219 5.41992H6.92871C6.89746 5.26758 6.84863 5.12305 6.78418 4.98633C6.74414 4.90039 6.69727 4.81836 6.64551 4.74023L7.22168 4.16406L6.6748 3.61719L6.09766 4.19336C5.9873 4.11914 5.86914 4.05664 5.74512 4.00781L5.6709 3.97852L5.58301 3.95117L5.41895 3.91016V3.09766H4.64551V3.91016C4.39844 3.96094 4.16895 4.05859 3.9668 4.19336L3.38965 3.61719L2.84277 4.16406L3.41895 4.74023L3.35059 4.85156L3.30859 4.92773L3.28809 4.96875C3.21973 5.11133 3.16797 5.26172 3.13574 5.41992H2.32227V6.19336H3.13574C3.18652 6.43945 3.28418 6.66992 3.41895 6.87305L2.84277 7.44922L3.38965 7.99609L3.9668 7.41992C4.16895 7.55469 4.39844 7.65234 4.64551 7.70312V8.51562H5.41895V7.70312C5.66602 7.65234 5.89551 7.55469 6.09766 7.41992L6.6748 7.99609L7.22168 7.44922L6.64551 6.87305C6.78027 6.66992 6.87793 6.43945 6.92871 6.19336H7.74219V5.41992ZM5.03223 6.9668C4.3916 6.9668 3.87109 6.44727 3.87109 5.80664C3.87109 5.16602 4.3916 4.64453 5.03223 4.64453C5.67285 4.64453 6.19336 5.16602 6.19336 5.80664C6.19336 6.44727 5.67285 6.9668 5.03223 6.9668ZM13.1611 3.87109H11.8203L10.2715 6.19336H8.5166V5.41992H9.85742L11.4062 3.09766H13.1611V3.87109ZM15.4834 3.09766H13.9355V3.87109H15.4834V3.09766ZM8.5166 6.9668H10.8389V9.29102H8.5166V6.9668ZM9.29004 8.51562H10.0645V7.74219H9.29004V8.51562ZM13.1611 7.74219H11.6133V8.51562H13.1611V7.74219ZM13.9355 7.74219H15.4834V8.51562H13.9355V7.74219Z" fill="#182F59" />
    </svg>,
  }
]


const route_page_slide = [
  {
    link: "path_1",
    img: "/personal/navbar/calendar.webp",
    content: "Attendance Management",
  },
  {
    link: "path_2",
    img: "/personal/navbar/cash_sync.webp",
    content: "Finance Management",
  },
  {
    link: "path_3",
    img: "/personal/navbar/document.webp",
    content: "Personal Document",
  },
  {
    link: "path_4",
    img: "/personal/navbar/document.webp",
    content: "Performance Indicator"
  },
  {
    link: "path_5",
    img: "/personal/navbar/report.webp",
    content: "Open Feedback Channel"
  },
  {
    link: "path_6",
    img: "/personal/navbar/person_err.webp",
    content: "Complaint & Notification"
  },
  {
    link: "path_7",
    img: "/personal/navbar/group.webp",
    content: "know Your Colleagues"
  },
  {
    link: "path_8",
    img: "/personal/navbar/security.webp",
    content: "Credential Controls"
  },
  {
    link: "path_9",
    img: "/personal/navbar/training.webp",
    content: "On Job Training"
  }
]