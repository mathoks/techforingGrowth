"use client";
import Accordion_component from '@/components/Accordion_component/Accordion_component';
import React, { useEffect, useState } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import 'swiper/css';
import 'swiper/css/pagination';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import { useGlobalContext } from '@/context/globalContext';
import { Button } from '@/components/SharedComponents';
import ResDropNav from '@/section/ResDropNav';
import FooterCTA from '@/section/FooterCTA';
import TCP_Banner_section from '@/components/TCP/Banner/TCP_Banner_Section';
import { AccessSecurityControlSVG, ClientOnboardingSVG, ClientSupportSVG, CommunicationManagementSVG, ProjectManagementSVG } from '../../../public/SVG/SVGImages';
// import css
import "../../style/tcp/tcp-styles.css";
import Hidden_Costs_Section from '@/components/Common/HiddenCosts_Section';
import { hiddenCostData_tcp } from '@/dummyData';
import StyledCTA from '@/section/StyledCTA';
import BusinessTeamCTA from '@/section/BusinessTeamCTA';
import Image from 'next/image';
import ProjectManagementSection from '@/components/TCP/ProjectManagement/ProjectManagement';
import TransformYourWorkflow from '@/components/TCP/TransformYourWorkflow';
import EasyClientOnboarding from '@/components/TCP/EasyClientOnboarding';
import CommunicationManagement from '@/components/TCP/CommunicationManagement';
import ComprehensiveClientSupport from '@/components/TCP/ComprehensiveClientSupport';
import AccessAndSecurityControll from '@/components/Cms/AccessAndSecurityControll';
import { useIntersectionObserver } from '@/utils/hooks';

const Recruitment = () => {
  const { setOpenScheduleDemo, setOpenScheduleForm } = useGlobalContext();
  const pathName = usePathname();
  const [drop, setDrop] = useState(false);
  const [activePath, setActivePath] = useState('');
  const [mounted, setMounted] = useState(false);

  const [inViewSections, observeSection] = useIntersectionObserver({ threshold: 0.5 });

  useEffect(() => {
    setMounted(true)
  }, [])



  useEffect(() => {
    const handleHashChange = () => {
        if (typeof window !== "undefined" && window.location.hash) {
            const hash = window.location.hash.slice(1);
            const element = document.getElementById(hash);

            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                element.style.scrollMarginTop = '160PX';
            } else {
                // If the element is not yet available, try again after a short delay
                setTimeout(() => {
                    const delayedElement = document.getElementById(hash);
                    if (delayedElement) {
                        delayedElement.scrollIntoView({ behavior: 'smooth' });
                        delayedElement.style.scrollMarginTop = '160PX';
                    }
                }, 100); // Adjust the delay time if necessary
            }
        }
    };

    // Run when the component mounts
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Clean up the event listener when the component unmounts
    return () => {
        window.removeEventListener('hashchange', handleHashChange);
    };
}, []);



  useEffect(() => {
    if (inViewSections.path_1) {
      setActivePath('path_1');
    } else if (inViewSections.path_2) {
      setActivePath('path_2');
    } else if (inViewSections.path_3) {
      setActivePath('path_3');
    } else if (inViewSections.path_4) {
      setActivePath('path_4');
    } else if (inViewSections.path_5) {
      setActivePath('path_5');
    }
    else {
      setActivePath('')
    }
  }, [inViewSections]);



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

    tab_box?.addEventListener("touchmove", dragging);
    tab_box?.addEventListener("touchstart", startDragging);
    tab_box?.addEventListener("touchend", stopDragging);

    return () => {
      tab_box?.removeEventListener("touchmove", dragging);
      tab_box?.removeEventListener("touchstart", startDragging);
      tab_box?.removeEventListener("touchend", stopDragging);
    }
  }, []);



  // this is Hiring Process section
  useEffect(() => {
    const translate = [0, 1240, 2480, 3720, 4960, 6200];
    const btn_dev = document.querySelectorAll(".btn_dev");
    const single_content = document.querySelector(".single_content");
    let currentIndex = 0;

    btn_dev.forEach((tab, i) => {
      tab.addEventListener("click", () => {
        currentIndex = i;
        setActiveTabLink(currentIndex)
      })
    });

    function setActiveTabLink(index) {
      btn_dev.forEach((link, i) => {
        if (index === i) {
          btn_dev[i].classList.add('autoActive');
          single_content.style.transform = `translateX(-${translate[i]}px)`;
        }
        else if (index === 1) {
          btn_dev[2].classList.remove('autoActive');
          btn_dev[3].classList.remove('autoActive');
          btn_dev[4].classList.remove('autoActive');
          btn_dev[5].classList.remove('autoActive');
        }
        else if (index === 2) {
          btn_dev[1].classList.add('autoActive');
          btn_dev[2].classList.add('autoActive');
          btn_dev[3].classList.remove('autoActive');
          btn_dev[4].classList.remove('autoActive');
          btn_dev[5].classList.remove('autoActive');
        }
        else if (index === 3) {
          btn_dev[1].classList.add('autoActive');
          btn_dev[2].classList.add('autoActive');
          btn_dev[3].classList.add('autoActive');
          btn_dev[4].classList.remove('autoActive');
          btn_dev[5].classList.remove('autoActive');
        }
        else if (index === 4) {
          btn_dev[1].classList.add('autoActive');
          btn_dev[2].classList.add('autoActive');
          btn_dev[3].classList.add('autoActive');
          btn_dev[4].classList.add('autoActive');
          btn_dev[5].classList.remove('autoActive');
        }
        else if (index === 5) {
          btn_dev[1].classList.add('autoActive');
          btn_dev[2].classList.add('autoActive');
          btn_dev[3].classList.add('autoActive');
          btn_dev[4].classList.add('autoActive');
          btn_dev[5].classList.add('autoActive');
        }
        else if (index === 0) {
          btn_dev[1].classList.remove('autoActive');
          btn_dev[2].classList.remove('autoActive');
          btn_dev[3].classList.remove('autoActive');
          btn_dev[4].classList.remove('autoActive');
          btn_dev[5].classList.remove('autoActive');
        }
      });
    }

    function autoSlide() {
      currentIndex = (currentIndex + 1) % btn_dev.length;
      setActiveTabLink(currentIndex);
    }

    // Initial marker position
    setActiveTabLink(currentIndex);

    // Auto slide every 5 seconds
    setInterval(autoSlide, 5000);

  }, [])

  // this is next level Recruitment Process section
  useEffect(() => {
    const text_highlight = document.querySelectorAll('.text_highlight');
    const icons = document.querySelectorAll(".icons");
    let currentIndex = 0;

    // click event handler
    text_highlight.forEach((text, index) => {
      text.addEventListener('mousemove', (e) => {
        e.preventDefault();
        currentIndex = index;
        setActiveLink(currentIndex);
      });
    });

    function setActiveLink(index) {
      text_highlight.forEach((link, i) => {
        if (i === index) {
          text_highlight[i].classList.add('textActive');
          icons[i].src = "/Recruitment/icons/fill_arrow.webp";
        }
        else {
          text_highlight[i].classList.remove('textActive');
          icons[i].src = "/Recruitment/icons/stroke_arrow.webp";
        }
      });
    }

    function autoSlide() {
      currentIndex = (currentIndex + 1) % text_highlight.length;
      setActiveLink(currentIndex);
    }

    // Initial marker position
    setActiveLink(currentIndex);

    // Auto slide every 3 seconds
    setInterval(autoSlide, 3000);
  }, []);


  useEffect(() => {
    const sections = document.querySelectorAll(".scrollSection");
    const tcp_route_elements = document.querySelectorAll(".tcp_route_elements");
    // console.log(sections);

    const scrollActive = () => {

      sections.forEach((section, index) => {
        let scrollTop = window.scrollY;
        let secTop = section.offsetTop - 150;
        let secHeight = section.offsetHeight;
        // console.log(window.scrollY, path, path_height);        

        if (scrollTop > secTop && scrollTop < secTop + secHeight) {
          // console.log('hit the section' + index );
          tcp_route_elements[index].classList.add("active");
        }
        else {
          tcp_route_elements[index].classList.remove("active");
        }
      })
    };
    window.addEventListener("scroll", scrollActive);
  }, [])


  const details = {
    ScreenShot: '/Recruitment/screenshot_1.webp',
    headTitle: "Automate Job Posting With Dynamic Job Board",
    content01: "Posting job openings manually on various platforms is time-consuming and can result in errors or missed opportunities.",
    content02: "Our Dynamic Job Board automates the job posting process, ensuring that job listings are posted consistently across multiple platforms, saving time and minimizing errors."
  }


  if (!mounted) return null

  return (
    <>

      {/* header part  */}
      <Header pathName={pathName} />
      {/* routes navbar section >> Mobile Version */}
      <div className='lg:hidden block sticky_recruitment z-20'>
        <div className='flex items-center'>
          <div className='w-[30%]'>
            <div className='w-full tcp_gradient relative py-[15px] px-3' onClick={() => setDrop(!drop)}>
              <span className='text-[#FFF] font-medium'>TCP</span>
              <MdArrowForwardIos className='absolute top-[50%] translate-y-[-50%] right-1 text-[#FFF] text-[12px]' />
              <div className={`${drop ? "dropdown activeDrop" : "dropdown"} absolute bottom-[-132px] left-0 w-full`}>
                <ResDropNav active={'/techforing-customer/'} />
              </div>
            </div>
          </div>

          <div className='w-[70%]'>
            <ul className='tab_box bg-[#FFF]'>
              {
                route_pages.map((route, index) => (
                  <li key={index} className='px-2 py-1'>
                    <a href={`#${route.link}`} className="tab_items" >
                      <div className="w-[24px]">
                        {route.svg}
                      </div>
                      <span className="tab_content ml-2 text-[7px]">{route.content}</span>
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
      {/* Recruitment banner section */}
      <TCP_Banner_section />

      {/* routes navbar section >> Desktop Version */}
      <nav className='lg:block hidden sticky top-[75px] z-30 mb-24 mt-20'>
        <div className='max-w-[1200px] mx-auto'>
          <ul className="bg-light-white2 text-center grid grid-cols-5 shadow-shadow4.5x rounded-lg overflow-hidden">
            {
              route_pages.map(({ svg, content, link }, index) => (
                <li key={index} className={`tcp_route_elements transition-all ${activePath === link ? 'active' : ''}`}>
                  <a href={`#${link}`} className='py-4 transition-all flex flex-col gap-1 min-w-[150px] justify-center items-center'>
                    <div className="w-[24px] mySvg">
                      {svg}
                    </div>
                    <span className='tcp_nav_title_content'>{content}</span>
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>

      <TransformYourWorkflow />

      {/* Hidden Costs Inefficiency */}
      <Hidden_Costs_Section textColor={"#256CBC"} data={hiddenCostData_tcp} />

      {/* Clients in the loop >> CTA Section */}
      <StyledCTA
        imgSrc={'/TCP/client-portal-cta.webp'}
        content={
          <div className='flex flex-col md:gap-[18px] gap-1'>
            <b className='md:text-[37px] text-sm text-blue leading-normal'>Need To Keep <br /> <span className='text-green'>Clients</span> In The Loop?</b>
            <p className='text-blue text-[10px] md:text-[22px] font-light'>
              Get Real-time Updates & Maintain Transparent
              Communication With <span className='md:text-[28px] text-[11px] font-semibold text-green'>TechForing Client Portal</span>
            </p>
            <Button className={'action_btn py-1'} text={'See How It Works'} onClick={() => setOpenScheduleForm(true)} />
          </div>
        }
      />

      <div className='scroll-m-64' id='path_1' ref={el => observeSection(el)}>
        <EasyClientOnboarding />
      </div>

      <br />
      {/* Efficient Project Management Simplified */}

      <div className='scroll-mt-28' id='path_2' ref={el => observeSection(el)}>
        <ProjectManagementSection />
      </div>

      <br />
      <BusinessTeamCTA
        title={
          <p className="inter font-semibold lg:text-[22px] text-[12px] text-blue text-left pt-4">Your Clients Deserve The <span className="text-green">Best</span> </p>
        }
        subTitle={
          <p className="inter leading-5 md:leading-10 font-light lg:text-[26px] text-[12px]  text-left text-blue">Give Your Clients The <span className='md:text-[32px] text-[12px] font-semibold'>Service and Updates</span> They Deserve With A Portal They’ll Love!</p>
        }
        button={
          <div className='py-4'>
            <Button text={"Upgrade Your Client Experience"} onClick={() => setOpenScheduleForm(true)} className='md:px-4 px-2 md:py-3 py-1 font-semibold transition-all rounded-lg md:text-[22px] text-[10px] bg-green text-white hover:text-green hover:bg-white hover:border-green border-2 !-mt-5' />
          </div>
        }
        imgSrc={'/TCP/clients-experience-cta.webp'}
      />
      <br />

      <div className='scroll-mt-28' id='path_3' ref={el => observeSection(el)}>
        <CommunicationManagement />
      </div>
      <br />
      <div className='scroll-mt-40' id='path_4' ref={el => observeSection(el)}>
        <ComprehensiveClientSupport />
      </div>
      <br />

      {/* Ready For a Seamless Client Experience */}
      <section className='next_level px-4 relative'>

        <div className='main_container flex gap-2 justify-between items-center '>
          <div className="w-[70%]">
            <h2 className='inter lg:text-[37.5px] text-[14px] font-semibold lg:leading-[48px] leading-[22px] text-blue'>Ready For A <span className='text-green'>Seamless</span> <br /> Client Experience?</h2>
            <p className='text-lightBlack mt-2 md:mt-4 text-sm md:text-xl'>Build Stronger Connections & Deliver Exceptional Service With Our All-in-one Client Portal</p>
            <div className="lg:mt-8 mt-2 text-left">
              <Button className={'action_btn'} text={'See The Difference'} onClick={() => setOpenScheduleForm(true)} />
            </div>
          </div>

          <div className="w-[70%] md:w-[30%]">
            <Image src="/TCP/seamless-experience.webp" alt="seamless-experience" width={1000} height={1000} className='w-[420px] mx-auto lg:block hidden h-full' />
            <Image src="/TCP/seamless-experience.webp" width={1000} height={1000} alt="" className='lg:hidden block h-[170px] w-full object-cover' />
          </div>
        </div>
      </section>


      <div className='scroll-mt-16' id='path_5' ref={el => observeSection(el)}>
        <AccessAndSecurityControll />
      </div>




      {/* Frequently Ask Questions */}
      <Accordion_component accordion_list={accordion_list} titleColor={'#256CBC'} subtitle={"Got a question? We have the answers!"} />
      <FooterCTA
        imgSrc='/TCP/footer-cta-bg.webp'
        title={
          <span className='flex flex-col'>
            <span className='lg:text-[36px]'>
              The <span className="text-green font-semibold">Future</span> of Client Management is Here!
            </span>
            <span className="lg:text-[18px] text-[12px] inter text-light-white2 lg:mb-2 mb-2">Join top businesses using our innovative client portal and step into the future today!</span>
          </span>
        }
        button={<Button className={'action_btn2'} text={'Get Started'} onClick={() => setOpenScheduleForm(true)} />}
      />
    </>
  );
};

export default Recruitment;

const route_pages = [
  {
    link: "path_1",
    // img: "/Recruitment/icons/document.webp",
    content: "Client On-Boarding",
    svg: <ClientOnboardingSVG />
  },
  {
    link: "path_2",
    img: "/Recruitment/icons/report.webp",
    content: "Project Management",
    svg: <ProjectManagementSVG />
  },
  {
    link: "path_3",
    img: "/Recruitment/icons/user.webp",
    content: "Communication Management",
    svg: <CommunicationManagementSVG />
  },
  {
    link: "path_4",
    img: "/Recruitment/icons/person_tic.webp",
    content: "Client Support",
    svg: <ClientSupportSVG />
  },
  {
    link: "path_5",
    img: "/Recruitment/icons/microphone.webp",
    content: "Access & Security Control",
    svg: <AccessSecurityControlSVG />
  }
]

///  Accordion list element
const accordion_list = [
  {
    headContent: "What is TechForing Client Portal (TCP)?",
    paraContent: "TCP is a comprehensive client management platform that streamlines onboarding, project management, communication, and support. It provides a centralized hub for businesses and clients to collaborate, track progress, share updates, and access essential information."
  },
  {
    headContent: "How does TCP benefit my business?",
    paraContent: "TCP improves client satisfaction, boosts productivity, and drives business growth by streamlining workflows, enhancing communication, and automating tasks. It also helps you build stronger client relationships and provides valuable insights for data-driven decision-making."
  },
  {
    headContent: "What industries does TCP cater to?",
    paraContent: "TCP is versatile and can benefit businesses across various industries, including marketing agencies, software development firms, consulting companies, professional services providers, and more. Any business that values efficient client management can leverage TCP's features."
  },
  {
    headContent: "What features does TCP offer?",
    paraContent: "TCP offers a wide range of features, including client onboarding tools, project management dashboards, real-time communication channels, support ticketing systems, document sharing, reporting, analytics, and customizable branding."
  },
  {
    headContent: "Can I customize TCP to match my brand?",
    paraContent: "Yes, TCP allows you to personalize the portal with your company logo, colors, and domain, creating a seamless and consistent brand experience for your clients."
  },
  {
    headContent: "How secure is my data in TCP?",
    paraContent: "TCP prioritizes data security with robust features like role-based access control, two-factor authentication, data encryption, and regular backups. We ensure your client data is protected with industry-leading security measures."
  },
  {
    headContent: "Does TCP comply with data protection regulations?",
    paraContent: "TCP is designed to comply with major data protection regulations like GDPR and CCPA. We take data privacy seriously and ensure our platform meets the highest security standards."
  },
  {
    headContent: "What are the pricing options for TCP?",
    paraContent: "We offer flexible pricing plans to accommodate different business sizes and needs. To know more about our pricing plans, please contact our sales team for a personalized quote and to discuss the best plan for you."
  },
  {
    headContent: "What kind of customer support can I expect?",
    paraContent: "We offer comprehensive onboarding assistance, ongoing technical support, and a knowledge base with resources and tutorials. Our dedicated support team is available to help you get the most out of TCP."
  }
];