"use client";
import Accordion_component from '@/components/Accordion_component/Accordion_component';
import Manual_Recruitment_section from '@/components/Manual_Recruitment_section/Manual_Recruitment_section';
import Recruitment_Banner_section from '@/components/Recruitment_Banner_section/Recruitment_Banner_section';
import Recruitment_software_details from '@/components/Recruitment_software_details/Recruitment_software_details';
import React, { useEffect, useState } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Application_system from '@/components/Application_system/Application_system';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import { useGlobalContext } from '@/context/globalContext';
import { Button } from '@/components/SharedComponents';
import ResDropNav from '@/section/ResDropNav';
import FooterCTA from '@/section/FooterCTA';


const Recruitment = () => {
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
    const recruitment_list_element = document.querySelectorAll(".recruitment_list_element");
    // console.log(sections);

    const scrollActive = () => {

      sections.forEach((section, index) => {
        let scrollTop = window.scrollY;
        let secTop = section.offsetTop - 150;
        let secHeight = section.offsetHeight;
        // console.log(window.scrollY, path, path_height);        

        if (scrollTop > secTop && scrollTop < secTop + secHeight) {
          // console.log('hit the section' + index );
          recruitment_list_element[index].classList.add("active");
        }
        else {
          recruitment_list_element[index].classList.remove("active");
        }
      })
    };

    window.addEventListener("scroll", scrollActive);
  }, [])


  const manual_resource = {
    headTitle: "Forget Obsolete Means of Recruitment",
    img1: "/Recruitment/icons/time.webp",
    img2: "/Recruitment/icons/doc_setting.webp",
    img3: "/Recruitment/icons/time_alert.webp",
    img4: "/Recruitment/icons/yes_no.webp",
    img5: "/Recruitment/icons/like_dislike.webp",
    manualImage: "/Recruitment/Recruitment.webp",
    para: "Manual recruitment processes are slowing you down! Here’s how:",
    content1: "HR professionals lose valuable working hours sorting through stacks of resumes",
    content2: "Candidate information gets scattered across multiple platforms, making it hard to manage",
    content3: "Manual processes can lead to delayed responses to candidates, potentially resulting in lost interest in qualified candidates",
    content4: "Manual candidate screening is slow and prone to errors, making it difficult for recruiters to make data-driven decisions",
    content5: "Delays and inefficiencies can frustrate candidates, ultimately harming your brand’s reputation among job seekers"
  }

  const details = {
    ScreenShot: '/Recruitment/screenshot_1.webp',
    headTitle: "Automate Job Posting With Dynamic Job Board",
    content01: "Posting job openings manually on various platforms is time-consuming and can result in errors or missed opportunities.",
    content02: "Our Dynamic Job Board automates the job posting process, ensuring that job listings are posted consistently across multiple platforms, saving time and minimizing errors."
  }

  ///  Accordion list element
  const accordion_list = [
    {
      headContent: "What is the recruitment module, and how does it benefit my organization?",
      paraContent: "The recruitment module is a powerful tool designed to simplify and streamline your organization's hiring process. It benefits you by saving time, improving efficiency, enhancing candidate management, and providing expert support."
    },
    {
      headContent: " How does the Dynamic Job Board work, and what does it offer?",
      paraContent: "The Dynamic Job Board automates the job posting process, making it easy to list job openings consistently across multiple platforms. It offers enhanced visibility, simplified job management, and a seamless application process."
    },
    {
      headContent: "What is the Centralized Candidate Database, and why is it important?",
      paraContent: "The Centralized Candidate Database is a secure repository for all registered candidate information. It's essential because it centralizes candidate data, making it easily accessible, organized, and searchable, improving candidate management."
    },
    {
      headContent: "How does the module streamline the recruitment process?",
      paraContent: "The module streamlines the recruitment process by providing a centralized applicant information database, which helps in storing, tracking, and evaluating candidate details from one place, ensuring efficiency and data security."
    },
    {
      headContent: "Can you explain the Predefined Questionnaire feature and its benefits?",
      paraContent: "The Predefined Questionnaire feature provides predefined questions to quickly assess and filter potential applicants. Its benefits include streamlined screening, time-saving, and improved efficiency in identifying top candidates."
    },
    {
      headContent: "What is Expert Candidate Support, and how does it work?",
      paraContent: "Expert Candidate Support offers assistance and guidance to candidates navigating the job search process. It works by providing access to a professional support team, timely assistance, expert guidance, and personalized advice."
    },
    {
      headContent: "How does the recruitment module help in making data-driven decisions?",
      paraContent: "The module helps in making data-driven decisions by centralizing candidate data, enabling advanced search capabilities, and offering insights into the recruitment process. This data empowers organizations to make informed hiring choices."
    },
    {
      headContent: "What kind of security measures are in place to protect candidate data?",
      paraContent: "The recruitment module employs robust data security and privacy controls to ensure the protection of candidate data. It adheres to industry standards and regulations to safeguard sensitive information."
    },
    {
      headContent: "How can I get started with the recruitment module for my organization?",
      paraContent: "Getting started is easy. Simply contact our team, and we'll guide you through the setup process and help you harness the power of our AI-powered recruitment module for your organization's success."
    }
  ]

  return (
    <>

      {/* header part  */}
      <Header pathName={pathName} />

      {/* Responsive for recruitment routes */}
      <div className='lg:hidden block sticky_recruitment z-20'>
        <div className='flex items-center'>
          <div className='w-[30%]'>
            <div className='w-full recruitment_gradient relative py-[15px] px-3' onClick={() => setDrop(!drop)}>
              <span className='text-[#FFF] font-medium'>Talent</span>
              <MdArrowForwardIos className='absolute top-[50%] translate-y-[-50%] right-1 text-[#FFF] text-[12px]' />

              <div className={`${drop ? "dropdown activeDrop" : "dropdown"} absolute bottom-[-132px] left-0 w-full`}>
                <ResDropNav active={'/techforing-talent/'} />
              </div>
            </div>
          </div>

          <div className='w-[70%]'>
            <ul className='tab_box bg-[#FFF]'>
              {
                route_pages.map((routes, index) => (
                  <li key={index}>
                    <a href={`#${routes.link}`} className="tab_items" >
                      <div className='tab_items_inside'>
                        <img src={routes.img} alt="" className="tab_images" />
                        <span className="tab_content ml-3">{routes.content}</span>
                      </div>
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>

      {/* Recruitment banner section */}
      <Recruitment_Banner_section />

      {/* routes navbar section */}
      <nav className='lg:block hidden sticky top-[75px] z-30 mb-24 mt-20'>
        <div className='max-w-[1200px] mx-auto'>
          <ul className="bg-light-white2 text-center grid grid-cols-5 shadow-shadow4.5x rounded-lg overflow-hidden">
            {
              route_pages.map(({ img, svg, content, link }, index) => (
                <li key={index} className='recruitment_list_element transition-all'>
                  <a href={`#${link}`} className='py-5 transition-all flex justify-center items-center'>
                    {/* <img src={img} alt="" className='w-[24px] image_box' /> */}
                    <div className="w-[24px] mySvg">
                      {svg}
                    </div>
                    <span className='recruitment_nav_content'>{content}</span>
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>

      {/* 4th unique section start */}
      <section className='lg:block hidden'>
        <div className='main_container'>
          <h2 className="noto font-black lg:text-[36px] text-[20px] leading-[48px] text-center text_gradient_recruitment mb-16">Next Level Recruitment Process</h2>
          <div className='flex justify-between items-center'>
            <div className="w-[50%]">
              <div className='text_highlight shadow-shadow5x px-7 py-5 rounded-md w-[530px] mb-5 bg-white'>
                <span className='text_highlight_border'></span>
                <div className='flex items-center'>
                  <img src="/Recruitment/icons/stroke_arrow.webp" alt="" className='icons' />
                  <h3 className='roboto text-[18px] font-medium leading-[28px] text_gradient_recruitment ml-5'>Intuitive Dashboard</h3>
                </div>
                <p className='roboto font-normal text-[#333] leading-[28px]'>Simplify talent acquisition with automation & intuitive features.</p>
              </div>

              <div className='text_highlight shadow-shadow5x px-7 py-5 rounded-md w-[530px]  mb-5 translate-x-12 z-10 bg-white'>
                <span className='text_highlight_border'></span>
                <div className='flex items-center'>
                  <img src="/Recruitment/icons/stroke_arrow.webp" alt="" className='icons' />
                  <h3 className='roboto text-[18px] font-medium leading-[28px] text_gradient_recruitment ml-5'>Easy Talent Acquiring</h3>
                </div>
                <p className='roboto font-normal text-[#333] leading-[28px]'>Secure top talent easily with instant, data-driven insights</p>
              </div>

              <div className='text_highlight shadow-shadow5x px-7 py-5 rounded-md w-[530px] mb-5 translate-x-24 z-10 bg-white'>
                <span className='text_highlight_border'></span>
                <div className='flex items-center'>
                  <img src="/Recruitment/icons/stroke_arrow.webp" alt="" className='icons' />
                  <h3 className='roboto text-[18px] font-medium leading-[28px] text_gradient_recruitment ml-5'>Ease of Management</h3>
                </div>
                <p className='roboto font-normal text-[#333] leading-[28px]'>Control recent job posts and details with adaptable filters</p>
              </div>

              <div className='text_highlight shadow-shadow5x px-7 py-5 rounded-md w-[530px] mb-5 translate-x-[144px] z-10 bg-white'>
                <span className='text_highlight_border'></span>
                <div className='flex items-center'>
                  <img src="/Recruitment/icons/stroke_arrow.webp" alt="" className='icons' />
                  <h3 className='roboto text-[18px] font-medium leading-[28px] text_gradient_recruitment ml-5'>Boost Efficiency</h3>
                </div>
                <p className='roboto font-normal text-[#333] leading-[28px]'>Enhance productivity with quick search capabilities</p>
              </div>

              <div className='text_highlight shadow-shadow5x px-7 py-5 rounded-md w-[530px]  translate-x-[192px] z-10 bg-white'>
                <span className='text_highlight_border'></span>
                <div className='flex items-center '>
                  <img src="/Recruitment/icons/stroke_arrow.webp" alt="" className='icons' />
                  <h3 className='roboto text-[18px] font-medium leading-[28px] text_gradient_recruitment ml-5'>Elevate Candidate Experience</h3>
                </div>
                <p className='roboto font-normal text-[#333] leading-[28px]'>Seamless, engaging, and positive recruitment process</p>
              </div>
            </div>

            <div className="w-[50%]">
              <img src="/Recruitment/next_lvl_recruit.webp" alt="" className='shadow-shadow5.5x' />
            </div>
          </div>
        </div>
      </section>

      {/* responsive this section into carousel/slider */}
      <section className="pt-16 pb-[80px] px-4 lg:hidden block">
        <h2 className="noto font-black text-[20px] leading-[48px] text-center text_gradient_recruitment mb-10">Next Level Recruitment Process</h2>
        <img src="/Recruitment/next_lvl_recruit.webp" alt="" className='mb-8' />
        <div className='rounded-tl-[999px] rounded-tr-[999px]  bg-[#EAEAEA]'>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
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
              <div className="pb-8">
                <div className='text_highlight shadow-shadow5x px-7 py-5 mx-4 rounded-md mb-5 bg-white'>
                  <span className='text_highlight_border'></span>
                  <div className='flex items-center mb-4'>
                    <img src="/Recruitment/icons/fill_arrow.webp" alt="" className='icons' />
                    <h3 className='roboto text-[18px] font-medium leading-[28px] text_gradient_recruitment ml-4'>Intuitive Dashboard</h3>
                  </div>
                  <p className='roboto font-normal text-[#333] leading-[28px]'>Simplify talent acquisition with automation & intuitive features.</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="pb-8">
                <div className='text_highlight shadow-shadow5x px-7 mx-4 py-5 rounded-md mb-5 z-10 bg-white'>
                  <span className='text_highlight_border'></span>
                  <div className='flex items-center mb-4'>
                    <img src="/Recruitment/icons/fill_arrow.webp" alt="" className='icons' />
                    <h3 className='roboto text-[18px] font-medium leading-[28px] text_gradient_recruitment ml-4'>Easy Talent Acquiring</h3>
                  </div>
                  <p className='roboto font-normal text-[#333] leading-[28px]'>Secure top talent easily with instant, data-driven insights</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="pb-8">
                <div className='text_highlight shadow-shadow5x mx-4 px-7 py-5 rounded-md mb-5 z-10 bg-white'>
                  <span className='text_highlight_border'></span>
                  <div className='flex items-center mb-4'>
                    <img src="/Recruitment/icons/fill_arrow.webp" alt="" className='icons' />
                    <h3 className='roboto text-[18px] font-medium leading-[28px] text_gradient_recruitment ml-4'>Ease of Management</h3>
                  </div>
                  <p className='roboto font-normal text-[#333] leading-[28px]'>Control recent job posts and details with adaptable filters</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="pb-8">
                <div className='text_highlight shadow-shadow5x px-7 mx-4 py-5 rounded-md mb-5 z-10 bg-white'>
                  <span className='text_highlight_border'></span>
                  <div className='flex items-center mb-4'>
                    <img src="/Recruitment/icons/fill_arrow.webp" alt="" className='icons' />
                    <h3 className='roboto text-[18px] font-medium leading-[28px] text_gradient_recruitment ml-4'>Boost Efficiency</h3>
                  </div>
                  <p className='roboto font-normal text-[#333] leading-[28px]'>Enhance productivity with quick search capabilities</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="pb-8">
                <div className='text_highlight shadow-shadow5x mx-4 px-7 py-5 rounded-md z-10 bg-white'>
                  <span className='text_highlight_border'></span>
                  <div className='flex items-center mb-4'>
                    <img src="/Recruitment/icons/fill_arrow.webp" alt="" className='icons' />
                    <h3 className='roboto text-[18px] font-medium leading-[28px] text_gradient_recruitment ml-5'>Elevate Candidate Experience</h3>
                  </div>
                  <p className='roboto font-normal text-[#333] leading-[28px]'>Seamless, engaging, and positive recruitment process</p>
                </div>
              </div>
            </SwiperSlide>


          </Swiper>
        </div>
      </section>
      {/* 4th unique section end */}

      {/* business strength policy */}
      <Manual_Recruitment_section manual_resource={manual_resource} />

      {/* Left data schedule field  part-1 (common) */}
      <section className='scrollSection relative lg:pt-[160px] lg:pb-[100px] pt-[40px] pb-[40px] px-4 lg:mb-[-60px] mb-0 overflow-hidden' id="path_1">
        <div className='main_container flex_container relative'>
          <div className='lg:w-[50%] w-full'>
            <Recruitment_software_details details={details} />
          </div>

          <div className='absolute top-[50%] right-0 w-[40%] h-[150%] bg-[#EAEAEA] translate-x-[100px] translate-y-[-50%] border_top_left_radius lg:block hidden'></div>
          <div className='absolute top-[50%] translate-y-[-50%] translate-x-[75px] right-0 w-[640px] h-[440px] lg:block hidden'>
            <img src="/Recruitment/screenshot_1.webp" alt="" className='w-[560px] h-full' />
          </div>
        </div>
      </section>

      {/* hiring process section start */}
      <div id="path_2" className="scrollSection lg:pt-40 pt-10 pb-10 ">
        <section className='lg:block hidden' >
          <div className='main_container'>
            <h2 className='lg:text-[36px] text-[20px] text-center inter lg:leading-[52px] leading-7 font-bold text_gradient_recruitment mb-2'>Hire Faster, Hire Smarter</h2>
            <p className='inter font-light lg:leading-[52px] leading-[28px] text_gradient text-center'>How Our Automated Recruitment Process Works</p>

            <div className='tab_list'>
              <ul>
                <li>
                  <button className='btn_dev'>New Applicant</button>
                </li>
                <li>
                  <button className='btn_dev'>Online Test</button>
                </li>
                <li>
                  <button className='btn_dev'>Practical Test</button>
                </li>
                <li>
                  <button className='btn_dev'>F2F Interview</button>
                </li>
                <li>
                  <button className='btn_dev'>DOC Verification</button>
                </li>
                <li>
                  <button className='btn_dev'>On Boarding</button>
                </li>
              </ul>
            </div>

            <div className='content_containers_mainDiv'>
              <div className='content_containers_div'>
                <div className='single_content'>
                  <div className='inside_contents'>
                    <div className='w-[40%]'>
                      <img src="/Recruitment/content_01.webp" alt="" />
                    </div>

                    <div className='w-[60%]'>
                      <div className="bg-light-white2 p-[30px]">
                        <p className='font-light leading-6 text-light-gray'>Every time a new job applicant applies, they are automatically added to our comprehensive job applicant list. This centralized hub allows you to easily keep track of each applicant. From there you can update their onboarding status, access their resumes, and perform various actions with just a few clicks, ensuring that no detail is overlooked.</p>
                      </div>
                    </div>
                  </div>

                  <div className='inside_contents'>
                    <div className='w-[40%]'>
                      <img src="/Recruitment/content_02.webp" alt="" />
                    </div>

                    <div className='w-[60%]'>
                      <div className="bg-light-white2 p-[30px]">
                        <p className='font-light leading-6 text-light-gray'>Our system initiates an automated test designed to delve into the candidate's values and abilities. The best part? This test can be taken from anywhere, providing flexibility and convenience within a specified deadline. This ensures candidates can showcase their potential in a convenient and stress-free manner.</p>
                      </div>
                    </div>
                  </div>

                  <div className='inside_contents'>
                    <div className='w-[40%]'>
                      <img src="/Recruitment/content_03.webp" alt="" />
                    </div>

                    <div className='w-[60%]'>
                      <div className="bg-light-white2 p-[30px]">
                        <p className='font-light leading-6 text-light-gray'>Moving forward, we determine the candidates' practical skills with a predefined test tailored to the role's requirements. Just like the initial online test, candidates can also complete this practical evaluation remotely, adding an extra layer of convenience to the selection process while ensuring they're up for the task.</p>
                      </div>
                    </div>
                  </div>

                  <div className='inside_contents'>
                    <div className='w-[40%]'>
                      <img src="/Recruitment/content_04.webp" alt="" />
                    </div>

                    <div className='w-[60%]'>
                      <div className="bg-light-white2 p-[30px]">
                        <p className='font-light leading-6 text-light-gray'>Once candidates successfully navigate the initial tests, our system schedules a crucial face-to-face (F2F) interview. This in-person meeting helps you ensure that the candidate is the right fit for your organization, emphasizing the importance of a personal connection in the hiring process.</p>
                      </div>
                    </div>
                  </div>

                  <div className='inside_contents'>
                    <div className='w-[40%]'>
                      <img src="/Recruitment/content_05.webp" alt="" />
                    </div>

                    <div className='w-[60%]'>
                      <div className="bg-light-white2 p-[30px]">
                        <p className='font-light leading-6 text-light-gray'>Our system simplifies the burdensome paperwork by generating formal offer letters and providing an effortless document submission process to the candidate. The quick and meticulous document verification ensures to make the entire onboarding process seamlessly hassle-free.</p>
                      </div>
                    </div>
                  </div>

                  <div className='inside_contents'>
                    <div className='w-[40%]'>
                      <img src="/Recruitment/content_06.webp" alt="" />
                    </div>

                    <div className='w-[60%]'>
                      <div className="bg-light-white2 p-[30px]">
                        <p className='font-light leading-6 text-light-gray'>Upon thorough verification of all documents and references, our system will send your organization’s terms & conditions to the candidate. Once these are accepted, the system will expertly guide the candidate through the comprehensive onboarding process, ensuring they are seamlessly integrated into your organization.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* responsive section */}
        <section className='lg:hidden block px-4 py-10 overflow-hidden' >
          <h2 className='text-[20px] text-center inter leading-7 font-bold text_gradient_recruitment mb-2'>Hire Faster, Hire Smarter</h2>
          <p className='inter font-light text-[14px] leading-[28px] text_gradient text-center mb-12'>How Our Automated Recruitment Process Works</p>

          {/* div part-1 */}
          <div className='w-[92%] ml-auto mb-[32px]'>
            <div className='relative'>
              <div className='absolute top-[50%] left-0 translate-y-[-50%]'>
                <div className='relative'>
                  <div className='absolute z-10 top-0 left-[-30px] w-[48px] h-full rounded-full bg-[#FFF]'>
                    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[70%] h-[70%] rounded-full bg-[#EAEAEA] '>
                      <div className='absolute top-[50%] rounded-full left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50%] h-[50%] recruitment_bg_gradient'></div>
                    </div>
                  </div>
                  <div className='title_clip_path'>
                    <div className=''>New Applicant</div>
                  </div>
                </div>
              </div>
              <img src="/Recruitment/res_content_01.webp" alt="" className='w-[50%] h-full ml-auto' />
            </div>
            <div className='p-4 shadow-shadow6x bg-light-white2'>
              <p className='font-light text-[14px] leading-5 text-light-gray text-justify'>Every time a new job applicant applies, they are automatically added to our comprehensive job applicant list. This centralized hub allows you to easily keep track of each applicant. From there you can update their onboarding status, access their resumes, and perform various actions with just a few clicks, ensuring that no detail is overlooked.</p>
            </div>
          </div>

          {/* div part-2 */}
          <div className='w-[92%] mb-[32px]'>
            <div className='relative'>
              <div className='absolute top-[50%] right-0 translate-y-[-50%]'>
                <div className='relative'>
                  <div className='absolute z-10 top-0 right-[-30px] w-[48px] h-full rounded-full bg-[#FFF]'>
                    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[70%] h-[70%] rounded-full bg-[#EAEAEA] '>
                      <div className='absolute top-[50%] rounded-full left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50%] h-[50%] recruitment_bg_gradient'></div>
                    </div>
                  </div>
                  <div className='title_clip_path2'>
                    <div className=''>Online Test</div>
                  </div>
                </div>
              </div>
              <img src="/Recruitment/res_content_02.webp" alt="" className='w-[50%] h-full ' />
            </div>
            <div className='p-4 shadow-shadow6x bg-light-white2'>
              <p className='font-light text-[14px] leading-5 text-light-gray text-justify'>Our system initiates an automated test designed to delve into the candidate's values and abilities. The best part? This test can be taken from anywhere, providing flexibility and convenience within a specified deadline. This ensures candidates can showcase their potential in a convenient and stress-free manner.</p>
            </div>
          </div>

          {/* div part-3 */}
          <div className='w-[92%] ml-auto mb-[32px]'>
            <div className='relative'>
              <div className='absolute top-[50%] left-0 translate-y-[-50%]'>
                <div className='relative'>
                  <div className='absolute z-10 top-0 left-[-30px] w-[48px] h-full rounded-full bg-[#FFF]'>
                    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[70%] h-[70%] rounded-full bg-[#EAEAEA] '>
                      <div className='absolute top-[50%] rounded-full left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50%] h-[50%] recruitment_bg_gradient'></div>
                    </div>
                  </div>
                  <div className='title_clip_path'>
                    <div className=''>Practical Test</div>
                  </div>
                </div>
              </div>
              <img src="/Recruitment/res_content_03.webp" alt="" className='w-[50%] h-full ml-auto' />
            </div>
            <div className='p-4 shadow-shadow6x bg-light-white2'>
              <p className='font-light text-[14px] leading-5 text-light-gray text-justify'>Moving forward, we determine the candidates' practical skills with a predefined test tailored to the role's requirements. Just like the initial online test, candidates can also complete this practical evaluation remotely, adding an extra layer of convenience to the selection process while ensuring they're up for the task.</p>
            </div>
          </div>

          {/* div part-4 */}
          <div className='w-[92%] mb-[32px]'>
            <div className='relative'>
              <div className='absolute top-[50%] right-0 translate-y-[-50%]'>
                <div className='relative'>
                  <div className='absolute z-10 top-0 right-[-30px] w-[48px] h-full rounded-full bg-[#FFF]'>
                    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[70%] h-[70%] rounded-full bg-[#EAEAEA] '>
                      <div className='absolute top-[50%] rounded-full left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50%] h-[50%] recruitment_bg_gradient'></div>
                    </div>
                  </div>
                  <div className='title_clip_path2'>
                    <div className=''>F2F Interview</div>
                  </div>
                </div>
              </div>
              <img src="/Recruitment/res_content_04.webp" alt="" className='w-[50%] h-full ' />
            </div>
            <div className='p-4 shadow-shadow6x bg-light-white2'>
              <p className='font-light text-[14px] leading-5 text-light-gray text-justify'>Once candidates successfully navigate the initial tests, our system schedules a crucial face-to-face (F2F) interview. This in-person meeting helps you ensure that the candidate is the right fit for your organization, emphasizing the importance of a personal connection in the hiring process.</p>
            </div>
          </div>

          {/* div part-5 */}
          <div className='w-[92%] ml-auto mb-[32px]'>
            <div className='relative'>
              <div className='absolute top-[50%] left-0 translate-y-[-50%]'>
                <div className='relative'>
                  <div className='absolute z-10 top-0 left-[-30px] w-[48px] h-full rounded-full bg-[#FFF]'>
                    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[70%] h-[70%] rounded-full bg-[#EAEAEA] '>
                      <div className='absolute top-[50%] rounded-full left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50%] h-[50%] recruitment_bg_gradient'></div>
                    </div>
                  </div>
                  <div className='title_clip_path'>
                    <div className=''>DOC Verification</div>
                  </div>
                </div>
              </div>
              <img src="/Recruitment/res_content_05.webp" alt="" className='w-[50%] h-full ml-auto' />
            </div>
            <div className='p-4 shadow-shadow6x bg-light-white2'>
              <p className='font-light text-[14px] leading-5 text-light-gray text-justify'>Our system simplifies the burdensome paperwork by generating formal offer letters and providing an effortless document submission process to the candidate. The quick and meticulous document verification ensures to make the entire onboarding process seamlessly hassle-free.</p>
            </div>
          </div>

          {/* div part-6 */}
          <div className='w-[92%] mb-[32px]'>
            <div className='relative'>
              <div className='absolute top-[50%] right-0 translate-y-[-50%]'>
                <div className='relative'>
                  <div className='absolute z-10 top-0 right-[-30px] w-[48px] h-full rounded-full bg-[#FFF]'>
                    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[70%] h-[70%] rounded-full bg-[#EAEAEA] '>
                      <div className='absolute top-[50%] rounded-full left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50%] h-[50%] recruitment_bg_gradient'></div>
                    </div>
                  </div>
                  <div className='title_clip_path2'>
                    <div className=''>Onboarding</div>
                  </div>
                </div>
              </div>
              <img src="/Recruitment/res_content_06.webp" alt="" className='w-[50%] h-full ' />
            </div>
            <div className='p-4 shadow-shadow6x bg-light-white2'>
              <p className='font-light text-[14px] leading-5 text-light-gray text-justify'>Upon thorough verification of all documents and references, our system will send your organization’s terms & conditions to the candidate. Once these are accepted, the system will expertly guide the candidate through the comprehensive onboarding process, ensuring they are seamlessly integrated into your organization.</p>
            </div>
          </div>
        </section>
      </div>
      {/* hiring process section end */}

      {/* Business team section part-2 (common) */}
      <section className="bg-[#FAFAFA] shadow-shadow1x text-[#FAFAFA] lg:mt-10 mt-0 lg:mb-[-60px] mb-0 overflow-hidden">
        <div className="main_container flex justify-between items-center lg:py-[80px] py-[20px] px-4 relative">
          <div className="w-[51%] lg:pl-[18px] pl-0">
            <h5 className='inter font-medium lg:text-[18px] text-[10px] lg:mb-4 mb-2 text_gradient_recruitment'>Still <span className='lg:text-[22px] text-[14px] font-semibold'>Manually</span> Posting Job Openings ?</h5>
            <h3 className='noto font-extralight lg:text-[36px] text-[14px] lg:leading-[48px] leading-5'><span className='text_gradient_recruitment'>Explore Our</span> <span className='font-semibold text-green'>Automated</span> <span className='text_gradient_recruitment'>Job Posting Feature and Attract Top Talent Faster!</span></h3>

            <div className="lg:mt-10 mt-5 text-left">
              <Button className={'action_btn'} text={'Start Today'} onClick={() => setOpenScheduleForm(true)} />
            </div>
          </div>

          <div className="image_container2 lg:translate-x-[110px] translate-x-0">
            <img src="/Recruitment/recruitment_business_team.webp" alt="" className="w-ful h-full" />
          </div>
        </div>
      </section>

      {/* application system management section */}
      <div id="path_3" className="scrollSection">
        <Application_system />
      </div>

      {/* talent sorting section */}
      <section className='scrollSection lg:-mt-20 mt-0 lg:pt-48 lg:pb-28 pt-6 pb-6 px-4 overflow-hidden' id="path_4">
        <div className='main_container'>
          <h2 className='font-black lg:text-[36px] text-[20px] leading-[48px] text-center text_gradient_recruitment mb-16'>Talent Sorting</h2>
          <div className='flex lg:flex-row flex-col-reverse justify-between items-center gap-5'>
            <div className='lg:w-[60%] w-full'>
              <img src="/Recruitment/icons/star.webp" alt="" className='mx-auto lg:block hidden' />
              <div className='mx-auto rounded-lg lg:bg-light-white2 lg:p-10 p-5 lg:mt-0 mt-[-136px] relative z-10'>
                <div className='lg:block flex items-center justify-center mb-4'>
                  <img src="/Recruitment/icons/star.webp" alt="" className='mx-auto lg:hidden block w-[42px] h-[42px]' />
                  <h4 className='roboto lg:text-[22px] text-[16px]  text_gradient_recruitment lg:ml-0 ml-5'>Efficient Talent Selection with Predefined Filter Questions</h4>
                </div>
                <p className='roboto text-light-gray font-light leading-6 text-justify lg:text-[16px] text-[14px]'>Give your job candidates exceptional support throughout every step of the hiring process. Our HRMS software’s Candidate Support feature enables your support team to provide a seamless journey to every job candidate, providing them with the necessary guidance, answering their questions, or solving any challenges they may be facing throughout their onboarding process.</p>
              </div>
            </div>

            <div className='lg:w-[40%] w-full flex justify-center items-center white_linear_gradient'>
              <div className='w-[300px] h-[300px] relative z-10'>
                <span className='absolute top-[-30px] left-[-30px] lg:border-[1px] border-[0.906px] border-solid border-[#182F59] lg:w-full w-[80%] h-full'></span>
                <span className='absolute lg:bottom-[-30px] bottom-0 right-[-30px] bg-light-white w-full lg:h-full h-[80%]'></span>
                <img src="/Recruitment/talent_person.webp" alt="" className='w-full h-full relative z-10' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employee organization */}
      <section className='recruitment_organized lg:mb-0 mb-8'>
        <div className='main_container flex lg:flex-row flex-col justify-between items-center lg:gap-6 gap-0'>
          <div className='lg:w-[55%] w-full'>
            <div className='relative lg:w-[160px] w-[100px] lg:h-[160px] h-[100px] mx-auto lg:mb-4 mb-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="159" height="159" viewBox="0 0 159 159" fill="none" className='percentage_svg'>
                <path d="M79.4996 157C68.9122 157 58.4372 154.831 48.7206 150.626C39.004 146.421 30.252 140.27 23.0045 132.552C15.757 124.835 10.1676 115.714 6.58131 105.752C2.99498 95.7908 1.48771 85.2002 2.15249 74.6337C2.81728 64.0673 5.64001 53.7491 10.4466 44.3157C15.2531 34.8824 21.9415 26.5338 30.0992 19.7852C38.2569 13.0366 47.7108 8.03102 57.8778 5.07724C68.0447 2.12347 78.709 1.28417 89.2129 2.61111" stroke="#5BBC2E" strokeWidth="2.22" />
              </svg>
              <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full rounded-full flex justify-center items-center'>
                <h3 className='sura text-center text-white lg:text-[82px] text-[40px]'>52<span className='lg:text-[41px] text-[24px]'>%</span></h3>
              </div>
            </div>
            <p className='inter text-center font-light lg:text-[28px] text-[14px] lg:leading-[48.5px] leading-6 text-[#FFF]'>of Recruiters Find it Challenging to Screen Candidates from a Pool of Applicants</p>
          </div>

          <div className='middle_hr mt-3 mb-4'></div>

          <div className='lg:w-[45%] w-full left_line'>
            <h3 className='inter font-normal lg:text-[36px] text-[16px] lg:leading-[44px] leading-[24px] text-center lg:text-left text-[#FFF]'>Say <span className='font-semibold text-green'>Goodbye </span> to Scattered Candidate Data and Inefficiencies !</h3>
            <div className="lg:mt-[30px] mt-5 flex md:justify-start justify-center">
              <Button className={'action_btn2'} text={'Start Here'} onClick={() => setOpenScheduleDemo(true)} />
            </div>
          </div>
        </div>
      </section>

      {/* candidate support section */}
      <section className='scrollSection lg:-mt-20 mt-0 px-4 lg:pt-44 lg:pb-10 pt-6 pb-0' id="path_5">
        <div className='main_container'>
          <h2 className='font-black lg:text-[36px] text-[20px] leading-[48px] text-center text_gradient_recruitment lg:mb-[8rem] mb-5'>Candidate Support</h2>
          <div className='lg:bg-light-white mt-[20px] relative'>
            <span className='absolute top-[50%] left-0 w-full h-[140%] bg-light-white lg:hidden block'></span>
            <img src="/Recruitment/environment.webp" alt="" className='mx-auto lg:translate-y-[-90px] translate-y-0 lg:w-[860px] lg:h-[260px] w-[300px] h-[175px] object-cover lg:object-none' />
          </div>

          <div className='lg:w-[50%] w-[95%] mx-auto rounded-lg bg-light-white2 lg:p-10 p-5 lg:mt-[-180px] mt-[-40px] relative z-10'>
            <div className='flex items-center mb-4'>
              <img src="/Recruitment/icons/microphone.webp" alt="" />
              <h4 className='roboto lg:text-[22px] text-[16px] text_gradient_recruitment ml-4'>Ensure Exceptional Support for Every Candidate</h4>
            </div>
            <p className='roboto text-light-gray font-light leading-6 text-justify lg:text-[16px] text-[14px]'>Give your job candidates exceptional support throughout every step of the hiring process. Our HRMS software’s Candidate Support feature enables your support team to provide a seamless journey to every job candidate, providing them with the necessary guidance, answering their questions, or solving any challenges they may be facing throughout their onboarding process.</p>
          </div>
        </div>
      </section>

      {/* Frequently Ask Questions */}
      <Accordion_component accordion_list={accordion_list} />
      <FooterCTA
        imgSrc='/Recruitment/footer_bottom_cta.webp'
        title={
          <span className='flex flex-col'>
            <span className='lg:text-[36px]'>
              Ready to <span className="text-green font-semibold">Boost</span> Your Hiring Efficiency?
            </span>
            <span className="lg:text-[18px] text-[12px] inter text-light-white2 lg:mb-2 mb-2">Try Our AI-Powered Recruitment Module Today and Experience the Difference!</span>
          </span>
        }
        button={<Button className={'action_btn2'} text={'Contact Us'} onClick={() => setOpenScheduleForm(true)} />}
      />
    </>
  );
};

export default Recruitment;


const route_pages = [
  {
    link: "path_1",
    img: "/Recruitment/icons/document.webp",
    content: "Dynamic Job Board",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
      <path d="M10.04 2.5L7.53 5H12.53L10.04 2.5ZM2 7V20H18V7H2ZM10 0L15 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H2C1.46957 22 0.960859 21.7893 0.585786 21.4142C0.210714 21.0391 0 20.5304 0 20V7C0 6.46957 0.210714 5.96086 0.585786 5.58579C0.960859 5.21071 1.46957 5 2 5H5L10 0ZM5 18V14H10V18H5ZM12 17V10H16V17H12ZM4 12V9H9V12H4Z" fill="#182F59" />
    </svg>
  },
  {
    link: "path_2",
    img: "/Recruitment/icons/report.webp",
    content: "Hiring Process",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.75 2.25H15C15.3978 2.25 15.7794 2.40804 16.0607 2.68934C16.342 2.97064 16.5 3.35218 16.5 3.75V19.5C16.5 19.8978 16.342 20.2794 16.0607 20.5607C15.7794 20.842 15.3978 21 15 21H1.5C1.10218 21 0.720644 20.842 0.43934 20.5607C0.158035 20.2794 0 19.8978 0 19.5V3.75C0 3.35218 0.158035 2.97064 0.43934 2.68934C0.720644 2.40804 1.10218 2.25 1.5 2.25H3.75V1.5C3.75 1.10218 3.90804 0.720644 4.18934 0.43934C4.47064 0.158035 4.85218 0 5.25 0H11.25C11.6478 0 12.0294 0.158035 12.3107 0.43934C12.592 0.720644 12.75 1.10218 12.75 1.5V2.25ZM11.25 1.5H5.25V4.5H11.25V1.5ZM1.5 19.5H15V3.75H12.75V6H3.75V3.75H1.5V19.5ZM9.25 14.5H7.75V17.5H9.25V14.5ZM13 13H11.5V17.5H13V13ZM5.5 10H4V17.5H5.5V10Z" fill="#182F59" />
    </svg>
  },
  {
    link: "path_3",
    img: "/Recruitment/icons/user.webp",
    content: "Applicant Management",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
      <path d="M2.89863 5.23753C2.89964 4.36823 3.1161 3.51272 3.52863 2.74753C4.1539 1.59438 5.18821 0.717068 6.42793 0.288331C7.66766 -0.140406 9.02297 -0.0895079 10.227 0.431005C11.4311 0.951517 12.3967 1.90393 12.9337 3.10074C13.4708 4.29754 13.5403 5.65203 13.1286 6.89753C12.8557 7.72122 12.3813 8.46369 11.7486 9.05753C12.9417 9.6413 13.9775 10.5026 14.7692 11.5691C15.5609 12.6357 16.0853 13.8765 16.2986 15.1875C16.3232 15.3332 16.3232 15.4819 16.2986 15.6275C16.2637 15.7708 16.2027 15.9064 16.1186 16.0275C16.0283 16.1445 15.9162 16.243 15.7886 16.3175C15.6638 16.3972 15.5245 16.4516 15.3786 16.4775C15.233 16.5022 15.0843 16.5022 14.9386 16.4775C14.7949 16.4389 14.6594 16.3745 14.5386 16.2875C14.4198 16.2033 14.3208 16.094 14.2486 15.9675C14.1689 15.8427 14.1146 15.7034 14.0886 15.5575C13.8572 14.1545 13.135 12.8792 12.0507 11.9592C10.9664 11.0391 9.59064 10.5341 8.16863 10.5341C6.74661 10.5341 5.37082 11.0391 4.28656 11.9592C3.20231 12.8792 2.48007 14.1545 2.24863 15.5575C2.22268 15.7034 2.16832 15.8427 2.08863 15.9675C2.0197 16.0964 1.9201 16.2063 1.79863 16.2875C1.67789 16.3745 1.54236 16.4389 1.39863 16.4775C1.25349 16.5074 1.10377 16.5074 0.958629 16.4775C0.812583 16.4583 0.67258 16.4071 0.548629 16.3275C0.409548 16.2398 0.290332 16.124 0.198629 15.9875C0.11674 15.8652 0.0559006 15.73 0.0186288 15.5875C-0.0062096 15.4453 -0.0062096 15.2998 0.0186288 15.1575C0.234317 13.8538 0.757798 12.6204 1.54563 11.5595C2.33347 10.4986 3.36294 9.64089 4.54863 9.05753C4.02779 8.56686 3.61275 7.97489 3.32901 7.31799C3.04527 6.66108 2.89881 5.9531 2.89863 5.23753ZM16.3986 2.98753C17.2696 2.98861 18.1215 3.24239 18.851 3.7181C19.5806 4.19381 20.1564 4.87101 20.5086 5.66753C20.8612 6.46467 20.9758 7.34676 20.8386 8.20753C20.696 9.06748 20.3109 9.86885 19.7286 10.5175C20.6411 10.9678 21.4512 11.6009 22.1086 12.3775C22.764 13.1418 23.2604 14.0291 23.5686 14.9875C23.6239 15.1803 23.6239 15.3848 23.5686 15.5775C23.5256 15.7685 23.4324 15.9446 23.2986 16.0875C23.1695 16.237 22.999 16.3449 22.8086 16.3975C22.6158 16.4523 22.4115 16.4523 22.2186 16.3975C22.0276 16.3545 21.8516 16.2613 21.7086 16.1275C21.5633 15.9909 21.4564 15.8185 21.3986 15.6275C21.128 14.7601 20.6378 13.9775 19.9755 13.3554C19.3132 12.7334 18.5013 12.2932 17.6186 12.0775C17.37 12.0179 17.1483 11.8772 16.9886 11.6775C16.8356 11.476 16.7515 11.2306 16.7486 10.9775V10.4475C16.7805 10.2528 16.8633 10.07 16.9886 9.91753C17.0984 9.73872 17.2584 9.59614 17.4486 9.50753C17.8903 9.27492 18.2421 8.90202 18.4486 8.44753C18.6609 7.99121 18.7103 7.47589 18.5886 6.98753C18.4722 6.49437 18.1941 6.05435 17.7986 5.73753C17.4015 5.41924 16.9075 5.24634 16.3986 5.24753C16.242 5.26232 16.084 5.24423 15.9347 5.19442C15.7855 5.1446 15.6483 5.06417 15.5319 4.95826C15.4155 4.85236 15.3225 4.72332 15.2589 4.57941C15.1953 4.43549 15.1624 4.27988 15.1624 4.12253C15.1624 3.96519 15.1953 3.80958 15.2589 3.66566C15.3225 3.52175 15.4155 3.39271 15.5319 3.2868C15.6483 3.1809 15.7855 3.10047 15.9347 3.05065C16.084 3.00084 16.242 2.98275 16.3986 2.99753V2.98753ZM8.14863 2.23753C7.75171 2.22794 7.357 2.2994 6.98863 2.44753C6.61599 2.59212 6.276 2.80971 5.98863 3.08753C5.69758 3.37015 5.4693 3.71087 5.31863 4.08753C5.15883 4.4533 5.07709 4.84839 5.07863 5.24753C5.07796 5.6466 5.15967 6.0415 5.31863 6.40753C5.46822 6.78477 5.69665 7.1257 5.98863 7.40753C6.28121 7.66387 6.62085 7.86086 6.98863 7.98753C7.3601 8.13702 7.75836 8.2085 8.15863 8.19753C8.95428 8.19753 9.71734 7.88146 10.2799 7.31885C10.8426 6.75625 11.1586 5.99318 11.1586 5.19753C11.1586 4.40189 10.8426 3.63882 10.2799 3.07621C9.71734 2.5136 8.95428 2.19753 8.15863 2.19753L8.14863 2.23753Z" fill="#182F59" />
    </svg>
  },
  {
    link: "path_4",
    img: "/Recruitment/icons/person_tic.webp",
    content: "Talent Sorting",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 18.8904C0 19.2908 0.400391 19.99 0.799805 20.0916C4.7998 21.5916 9 21.99 13.5 20.8904C12.1631 19.3865 10.5469 18.8611 8.88574 18.3201C8.55859 18.2127 8.22949 18.1052 7.90039 17.99C8.40039 16.99 8.7998 16.0916 9.2002 15.1912C9.59961 14.2908 10 13.49 10.5 12.49C8.5 13.7908 6.59961 13.3904 5.7998 10.49L5.44336 10.6267L4.98047 10.7966C4.22461 11.072 3.45898 11.3513 2.7998 11.7908C2.09961 12.1912 1.2002 12.7908 1 13.49C0.5 15.1912 0.200195 17.0916 0 18.8904ZM10.7002 10.0916C12.0996 8.59156 12.7002 6.79078 12.5996 4.79078C12.6641 2.88258 12.4033 1.82398 11.4854 1.12672C11.3037 0.988046 11.0957 0.863046 10.8594 0.749765C10.7559 0.698983 10.6475 0.652108 10.5332 0.605233C10.3887 0.54664 10.2344 0.489999 10.0703 0.437265C9.80566 0.351327 9.5166 0.269296 9.2002 0.191171C6.5 -0.60961 4.2998 1.19117 4.5 3.99V5.09156C4.2002 6.99 5 8.59156 6.09961 9.99C6.91895 10.9861 7.8418 11.3982 8.7666 11.2498C9.42188 11.1443 10.0781 10.7556 10.7002 10.0916ZM10.9502 14.9607C11.0938 14.6599 11.2373 14.3513 11.3809 14.0349C11.5205 13.7302 11.6602 13.4158 11.7998 13.0916L12.4502 13.6814L13.1064 14.2673C13.5068 14.6189 13.9072 14.9666 14.3076 15.3084L15.6357 16.4373L15.7002 16.49L16.5146 15.6267C18.334 13.6873 20.1758 11.7224 22.7002 10.5916C19.4004 13.49 17.5 17.2908 15.5996 21.2908C14.4004 18.8904 12.4004 17.6912 10 16.8904L10.5303 15.8259L10.9502 14.9607ZM11.0996 11.0916C12.5996 12.1912 14.0996 13.2908 15.7002 14.3904C16.0996 13.49 15.5996 12.5916 14.5 11.99C13.8945 11.6873 13.2891 11.4216 12.6621 11.1482L12.4355 11.0486C12.0986 10.9021 11.7549 10.7517 11.4004 10.5916C11.3584 10.5916 11.3164 10.574 11.2686 10.5525L11.2393 10.5408L11.1533 10.5115C11.1084 10.4998 11.0586 10.49 11 10.49C11 10.7048 10.9707 10.8611 10.9443 11.0076L10.9189 11.1619C10.9082 11.2341 10.9004 11.3084 10.9004 11.3904C10.9004 11.2908 11 11.1912 11.0996 11.0916Z" fill="#182F59" />
    </svg>
  },
  {
    link: "path_5",
    img: "/Recruitment/icons/microphone.webp",
    content: "Candidate Support",
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.5498 0.0211522C8.27734 0.152012 7.04004 0.519199 5.90039 1.09928C5.27539 1.40787 4.68652 1.77506 4.1416 2.19498C3.89746 2.38248 3.66211 2.5817 3.43555 2.79068C3.28906 2.92545 3.14746 3.06412 3.00879 3.2067L2.78418 3.44498L2.6709 3.57193L2.65234 3.59342C2.05371 4.27701 1.54395 5.03678 1.13574 5.85904L1.12012 5.89029C0.762695 6.5817 0.487305 7.31021 0.296875 8.06021C0.134766 8.70084 0.0351562 9.35709 0 10.0212V10.5993L0.139648 10.5094C0.420898 10.3024 0.731445 10.1383 1.05957 10.0212L1.44043 9.89029V9.59928C1.47168 9.3649 1.50977 9.13248 1.55469 8.90201C1.63867 8.46256 1.74707 8.02701 1.87988 7.59928C2.37207 6.13248 3.22656 4.81412 4.36523 3.76529C5.50293 2.71646 6.8877 1.97037 8.38965 1.59928C9.08594 1.4274 9.80273 1.34928 10.5195 1.37076C11.2373 1.34928 11.9541 1.42545 12.6504 1.59928C14.8926 2.15006 16.8477 3.52115 18.1299 5.44107L18.2773 5.69303L18.3652 5.84732L18.4697 6.04068L18.6426 6.38443C18.7012 6.50553 18.7568 6.62662 18.8105 6.74967C18.9277 7.01529 19.0342 7.28482 19.1299 7.56021C19.333 8.21256 19.4795 8.88248 19.5703 9.56021V9.84928L19.9502 9.98014C20.2803 10.0856 20.5928 10.236 20.8799 10.4294L21.0098 10.5212V9.94107C20.9922 9.59342 20.957 9.24576 20.9053 8.90396C20.8574 8.58756 20.7959 8.27311 20.7207 7.96451C20.6855 7.82193 20.6484 7.67936 20.6074 7.53873C20.2305 6.23209 19.6025 5.00162 18.75 3.91959C18.2627 3.34342 17.7275 2.80826 17.1504 2.31998C16.4932 1.79654 15.7793 1.35514 15.0244 1.00162C14.1406 0.589512 13.2012 0.298496 12.2305 0.140293C11.3428 0.0113866 10.4453 -0.029629 9.5498 0.0211522ZM4.51953 9.90006C4.1123 9.9899 3.73926 10.1969 3.44629 10.4958C3.15332 10.7946 2.95312 11.1696 2.87012 11.5797C2.80957 11.9098 2.80957 17.7204 2.87012 18.0504C2.9082 18.2321 2.96777 18.4079 3.04785 18.5719C3.15625 18.7965 3.30273 19.0016 3.48047 19.1794C3.79785 19.4801 4.19824 19.6794 4.62988 19.7497C5.17188 19.8239 5.7207 19.6833 6.16309 19.361C6.60449 19.0387 6.9043 18.5583 7 18.0212L7.00586 17.9684L7.0127 17.8532C7.02051 17.7028 7.02637 17.4645 7.03027 17.1676C7.03711 16.7047 7.04199 16.0973 7.04395 15.4528V14.3454L7.03809 13.0622L7.02832 12.279L7.01465 11.7633L7.00684 11.6129L7 11.5504C6.89258 10.9977 6.57324 10.5094 6.11035 10.1911C5.63867 9.88834 5.06738 9.78482 4.51953 9.90006ZM14.6963 10.4958C14.9893 10.1969 15.3623 9.9899 15.7695 9.90006C15.8633 9.88248 15.957 9.87076 16.0518 9.8649C16.2344 9.85514 16.4189 9.86686 16.5996 9.90006C17.0137 9.986 17.3926 10.193 17.6895 10.4938C17.9863 10.7946 18.1885 11.1754 18.2695 11.5895V15.7907V16.3161L18.2666 16.9176C18.2637 18.1344 18.2598 18.8512 18.2402 19.3083C18.2305 19.5348 18.2178 19.6969 18.1992 19.8258C18.1719 20.0133 18.1338 20.1266 18.0781 20.2594L18.0361 20.359L18 20.4411C17.8887 20.7028 17.749 20.9469 17.584 21.1735C17.4766 21.32 17.3584 21.4606 17.2305 21.5895L17.1045 21.7106L17.0332 21.7751C16.9609 21.8376 16.8867 21.8981 16.8096 21.9547L16.7715 21.9821C16.6602 22.0622 16.5439 22.1383 16.4238 22.2067C16.3311 22.2575 16.2363 22.3044 16.1396 22.3493C15.8428 22.4879 15.6777 22.5524 15.3613 22.5837C15.2451 22.5954 15.1084 22.6012 14.9375 22.6051L14.4463 22.611H13.9805H12.5498L12.4102 22.8708C12.2598 23.1618 12.043 23.4137 11.7764 23.6051L11.6689 23.6774C11.5791 23.734 11.4863 23.7829 11.3896 23.8239L11.3164 23.8532L11.1719 23.904L11.0967 23.9254L10.9688 23.9547L10.8779 23.9704C10.5537 24.0192 10.2227 23.9899 9.91211 23.8844C9.68457 23.8083 9.47363 23.695 9.28711 23.5485C9.21777 23.4938 9.15234 23.4352 9.08984 23.3708C8.76855 23.0563 8.55762 22.6442 8.49023 22.2008C8.44629 21.9157 8.46191 21.6266 8.53418 21.3532C8.58594 21.1559 8.66699 20.9665 8.77637 20.7887C8.9082 20.5758 9.07617 20.3883 9.27051 20.2379L9.33887 20.1891L9.43555 20.1208C9.50977 20.0739 9.58691 20.0309 9.66602 19.9938C9.74414 19.9567 9.82422 19.9254 9.90723 19.8981C10.3779 19.7458 10.8877 19.7633 11.3457 19.9508C11.8047 20.1383 12.1816 20.4801 12.4102 20.9196L12.5498 21.1911H13.7598C14.2441 21.2008 14.7275 21.1833 15.21 21.1403L15.292 21.1188C15.3369 21.1071 15.3818 21.0915 15.4258 21.0758C15.6523 20.9958 15.8643 20.8805 16.0537 20.7321C16.1973 20.6208 16.3184 20.5016 16.4287 20.3571C16.5127 20.2477 16.5869 20.1325 16.6504 20.0094C16.6768 19.9587 16.7002 19.9059 16.7217 19.8532L16.7803 19.7008C16.7207 19.7067 16.6621 19.7145 16.6035 19.7262L16.5 19.7497C16.2354 19.7887 15.9678 19.7751 15.7109 19.7126C15.6455 19.6969 15.5811 19.6774 15.5176 19.654C15.4326 19.6247 15.3506 19.5895 15.2695 19.5504C14.9766 19.404 14.7197 19.195 14.5205 18.9333C14.3213 18.6735 14.1836 18.3708 14.1201 18.0504C14.0596 17.7204 14.0596 11.9098 14.1201 11.5797C14.2031 11.1696 14.4033 10.7946 14.6963 10.4958ZM1.13965 11.5212L1.0957 11.5465L0.966797 11.6266C0.899414 11.6735 0.834961 11.7223 0.773438 11.7751L0.652344 11.8883L0.570312 11.9762L0.457031 12.1129C0.272461 12.3551 0.140625 12.6344 0.0703125 12.9294C0 14.1852 0 15.445 0.0703125 16.7008C0.151367 17.0348 0.30957 17.3454 0.53125 17.6071C0.753906 17.8688 1.03418 18.0758 1.34961 18.2106C1.44043 18.2106 1.44043 18.2106 1.44043 14.8102V11.3903L1.13965 11.5212ZM19.7695 18.2106C19.6797 18.2399 19.6797 18.2106 19.6797 14.82C19.6797 11.4196 19.6797 11.3903 19.7695 11.4196C19.9395 11.4919 20.0986 11.5856 20.2451 11.6969C20.3135 11.7497 20.3789 11.8063 20.4404 11.8649C20.4932 11.9157 20.5439 11.9684 20.5918 12.0251C20.6865 12.1364 20.7695 12.2555 20.8398 12.3805C20.9365 12.5524 21.0107 12.736 21.0596 12.9294L21.0918 13.6383C21.1113 14.1911 21.1172 14.7477 21.1094 15.3004C21.1064 15.529 21.1006 15.7575 21.0928 15.986C21.084 16.2243 21.0732 16.4626 21.0596 16.7008C20.9766 17.0348 20.8174 17.3454 20.5938 17.6071C20.3691 17.8688 20.0879 18.0758 19.7695 18.2106Z" fill="#182F59" />
    </svg>
  }
]