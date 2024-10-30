"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { ImArrowRight2 } from 'react-icons/im';

const Recruitment_tab = [
  {
    img: "/Recruitment/icons/document.webp",
    img2: "/Recruitment/icons/document_white.webp",
    content: "Dynamic Job Board",
    match: "job_board"
  },
  {
    img: "/Recruitment/icons/report.webp",
    img2: "/Recruitment/icons/report_white.webp",
    content: "Hiring Process",
    match: "hiring"
  },
  {
    img: "/Recruitment/icons/user.webp",
    img2: "/Recruitment/icons/user_white.webp",
    content: "Applicant Management",
    match: "applicant"
  },
  {
    img: "/Recruitment/icons/person_tic.webp",
    img2: "/Recruitment/icons/person_tic_white.webp",
    content: "Talent Sorting",
    match: "talent"
  },
  {
    img: "/Recruitment/icons/support.webp",
    img2: "/Recruitment/icons/support_white.webp",
    content: "Candidate Support",
    match: "Support"
  }
]


const RecruitmentTool = () => {

  const [recruitmentSolution, setRecruitmentSolution] = useState("job_board");

  const handleRecruitment = (index) => {
    setRecruitmentSolution(index);
  }

  useEffect(() => {
    const array = [0, -20, -40, -60, -80];
    const recruitment_contents = document.querySelector(".recruitment_contents");

    if (recruitmentSolution === "hiring") {
      recruitment_contents.style.transform = `translateX(${array[1]}%)`;
    }
    else if (recruitmentSolution === "applicant") {
      recruitment_contents.style.transform = `translateX(${array[2]}%)`;
    }
    else if (recruitmentSolution === "talent") {
      recruitment_contents.style.transform = `translateX(${array[3]}%)`;
    }
    else if (recruitmentSolution === "Support") {
      recruitment_contents.style.transform = `translateX(${array[4]}%)`;
    }
    else {
      recruitment_contents.style.transform = `translateX(${array[0]}%)`;
    }

  }, [recruitmentSolution])


  useEffect(() => {
    const recruitment_data = document.querySelector(".recruitment_data");
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
      recruitment_data.scrollLeft -= movementX;
      startX = touchX;
    };

    recruitment_data.addEventListener("touchmove", dragging);
    recruitment_data.addEventListener("touchstart", startDragging);
    recruitment_data.addEventListener("touchend", stopDragging);

    return () => {
      recruitment_data.removeEventListener("touchmove", dragging);
      recruitment_data.removeEventListener("touchstart", startDragging);
      recruitment_data.removeEventListener("touchend", stopDragging);
    }
  }, [])

  const recruitmentData = recruitment_tab_contents.filter(recruitment => recruitment.match === recruitmentSolution);

  return (
    <>
      <div className='mt-32 lg:block hidden'>
        <div className='main_container'>
          <h1 className="roboto text-[36px] leading-[48px] font-bold text_gradient_recruitment text-center">AI Recruitment Tool: Discover the Future of Hiring With TechForing Talent!</h1>

          <div className='mt-10'>
            <ul className='flex justify-between items-center gap-4 recruitment_tab'>
              {
                Recruitment_tab.map((recruitment, index) => (
                  <li key={index} className={`${recruitmentSolution === recruitment.match ? "activeTabs2" : ""}  flex items-center justify-center gap-4 py-3 px-1 shadow-shadow6.5x rounded-lg`} onClick={() => setRecruitmentSolution(recruitment.match)}>
                    {
                      recruitmentSolution === recruitment.match ? <img src={recruitment.img2} alt="" className='w-[25px] h-[20px] object-contain' /> : <img src={recruitment.img} alt="" className='w-[25px] h-[20px] object-contain' />
                    }
                    <p className='roboto'>{recruitment.content}</p>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className='mt-32 flex flex-row-reverse justify-between items-center gap-16'>
            {
              recruitmentData.map((contents, i) => {
                return (
                  <div key={i} className='w-[60%]'>
                    <h3 className='lg:w-[70%] w-full roboto text-[28px] font-medium text-[#333] mb-6'>{contents.headTitle}</h3>
                    <p className='roboto text-[16px] leading-6 text-light-gray'>{contents.para}</p>

                    <div className='flex justify-between items-center gap-2 mt-10'>
                      <div className='w-[85%]'>
                        <ul className='flex justify-between items-center home_list'>
                          {
                            (contents.list).map((listElement, index) => (
                              <li key={index} className='text-center w-[25%]'>
                                <div className='px-2'>
                                  <img src={listElement.icon} alt="" className='mx-auto mb-2' />
                                  <h4 className='text-light-gray'>{listElement.icon_content}</h4>
                                </div>
                              </li>
                            ))
                          }
                        </ul>
                      </div>

                      <div className='w-[15%] '>
                        <Link href={`${contents.link}`} className='block bg-green px-[22px] py-[10px] rounded-lg'>
                          <HiArrowNarrowRight className="text-[#FAFAFA] mx-auto text-[26px]" />
                          <span className='text-[#FAFAFA] text-center block'>Explore More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              }
              )}


            <div className='w-[40%]'>
              <div className="relative">
                <img src="/Home/Recruitment_icons/recruitment_images.webp" alt="" />

                <img src="/Home/Recruitment_icons/anim_01.webp" alt="" className="recruitment_anim_01 shadow-iconShadow" />
                <img src="/Home/Recruitment_icons/anim_02.webp" alt="" className="recruitment_anim_02 shadow-iconShadow" />
                <img src="/Home/Recruitment_icons/anim_03.webp" alt="" className="recruitment_anim_03 shadow-iconShadow" />
                <img src="/Home/Recruitment_icons/anim_04.webp" alt="" className="recruitment_anim_04 shadow-iconShadow" />
                <img src="/Home/Recruitment_icons/anim_05.webp" alt="" className="recruitment_anim_05 shadow-iconShadow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* responsive */}
      <div className='lg:hidden block py-10 mx-4 overflow-x-hidden'>
        <h1 className="roboto text-[22px] leading-[32px] font-bold text_gradient_recruitment text-center mb-6">AI Recruitment Tool: Discover the Future of Hiring With TechForing Talent!</h1>
        <div className='recruitment_div'>
          <ul className='recruitment_data'>
            {
              Recruitment_tab.map((recruitment, index) => (
                <li key={index} className={`${recruitmentSolution === recruitment.match ? "recruitment_listing_tab active_recruitment" : "recruitment_listing_tab"} shadow-shadow6.5x rounded-lg`} onClick={() => handleRecruitment(recruitment.match)}>
                  <div className='flex items-center justify-center w-[225px]'>
                    {
                      recruitmentSolution === recruitment.match ? <img src={recruitment.img2} alt="" className='w-[25px] h-[20px] object-contain' /> : <img src={recruitment.img} alt="" className='w-[25px] h-[20px] object-contain' />
                    }
                    <p className='roboto ml-2'>{recruitment.content}</p>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="mt-10 relative z-10">
          <div className='bg-[#FFF] py-6 px-4 shadow-shadow6x rounded-lg'>
            <div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[90%] h-[105%] bg-[#D3D8E1] z-[-1] border-[2px] border-solid border-[#224642] rounded-[20px] shadow-shadow7x'></div>
            <div className="recruitment_main_contents">
              <div className="recruitment_contents">
                {
                  recruitment_tab_contents.map((recruitment, i) => (
                    <div key={i} className='w-full'>
                      <h3 className='roboto text-[#333] text-[14px] leading-5 font-medium mb-5 border-l-[3px] border-solid border-[#224642] pl-3'>{recruitment.headTitle}</h3>
                      <p className='text-[#494949] text-[14px] leading-6 font-light mb-5 text-justify'>{recruitment.para}</p>

                      <ul className='flex justify-between gap-5 mb-8'>
                        {
                          (recruitment.list).map((listItems, index) => (
                            <li key={index}>
                              <div className='text-center'>
                                <img src={listItems.icon} alt="" className='mx-auto' />
                                <span className='font-bold text-[10px] text-light-gray leading-4 block mt-2 opacity-80'>{listItems.icon_content}</span>
                              </div>
                            </li>
                          ))
                        }
                      </ul>

                      <a href={recruitment.link} className='text-[#FFF] bg-green rounded-[20px] w-[65%] mx-auto text-center flex items-center justify-center py-[6px]'>Explore More <ImArrowRight2 className="text-white ml-3" /></a>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
};

export default RecruitmentTool;


const recruitment_tab_contents = [
  {
    match: "job_board",
    headTitle: "A Dynamic Job Board to Maximize Your Hiring Success",
    para: "Say goodbye to the hassle of manual job posting and discover a seamless recruitment experience. Transform your recruitment process, attract top talent, and make confident hiring decisions with our Job Board Module.",
    link: "/techforing-talent#path_1",
    list: [
      {
        icon: "/Home/Recruitment_icons/applicant_tracking.webp",
        icon_content: "Applicant Tracking"
      },
      {
        icon: "/Home/Recruitment_icons/file_setting.webp",
        icon_content: "Simplified Job Management"
      },
      {
        icon: "/Home/Recruitment_icons/user_send.webp",
        icon_content: "Seamless Application Process"
      },
      {
        icon: "/Home/Recruitment_icons/job_listing.webp",
        icon_content: "Centralized Job Listings"
      }
    ]
  },
  {
    match: "hiring",
    headTitle: "Efficient Application Evaluation and Swift 5-Day Hiring Process",
    para: "Efficient, tailored hiring process prioritizing your comfort. Showcase skills through online tests, then a practical assessment. Face-to-face interviews ensure the perfect fit, with a swift 5-day process for seamless onboarding.",
    link: "/techforing-talent#path_2",
    list: [
      {
        icon: "/Home/Recruitment_icons/employee_group.webp",
        icon_content: "Centralized Candidate Database"
      },
      {
        icon: "/Home/Recruitment_icons/user_setting.webp",
        icon_content: "Candidate Management"
      },
      {
        icon: "/Home/Recruitment_icons/tele-communication.webp",
        icon_content: "Streamlined Communication"
      },
      {
        icon: "/Home/Recruitment_icons/doc_search.webp",
        icon_content: "Advanced Search Capabilities"
      }
    ]
  },
  {
    match: "applicant",
    headTitle: "Streamlined Recruitment Process With Applicant Database",
    para: "Say goodbye to scattered applicant data and hello to an organized and effective recruitment process. Streamline your recruitment process with our centralized applicant information database. Store, track, and evaluate candidate details from one place",
    link: "/techforing-talent#path_3",
    list: [
      {
        icon: "/Home/Recruitment_icons/Applicant_Storage.webp",
        icon_content: "Centralized Applicant Storage"
      },
      {
        icon: "/Home/Recruitment_icons/carbon_block-storage.webp",
        icon_content: "Centralized Applicant Storage"
      },
      {
        icon: "/Home/Recruitment_icons/Streamlined_Evaluation.webp",
        icon_content: "Streamlined Evaluation Process"
      },
      {
        icon: "/Home/Recruitment_icons/Data_Security.webp",
        icon_content: "Data Security and Privacy Controls"
      }
    ]
  },
  {
    match: "talent",
    headTitle: "Identify Top Talent Easily with Filter Questions",
    para: "Quickly assess and filter potential applicants with the filter questions feature. Identify top talent and focus on candidates that best match your criteria. Get streamlined screening, improved efficiency, and increased chances of finding the perfect fit for your organization.",
    link: "/techforing-talent#path_4",
    list: [
      {
        icon: "/Home/Recruitment_icons/Question_Set.webp",
        icon_content: "Predefined Question Set"
      },
      {
        icon: "/Home/Recruitment_icons/Talent_Identification.webp",
        icon_content: "Efficient Talent Identification"
      },
      {
        icon: "/Home/Recruitment_icons/Improved_Efficiency.webp",
        icon_content: "Improved Efficiency"
      },
      {
        icon: "/Home/Recruitment_icons/Candidate_Selection.webp",
        icon_content: "Enhanced Candidate Selection"
      }
    ]
  },
  {
    match: "Support",
    headTitle: "Expert Candidate Support, Right at Your Fingertips",
    para: "CCentralize all your company’s reports in one module, including performance, attendance, leave, invoices, payslips, commissions, and expenses. Make data-driven decisions and drive organizational success with our robust reporting capabilities.",
    link: "/techforing-talent#path_5",
    list: [
      {
        icon: "/Home/Recruitment_icons/Support_Team.webp",
        icon_content: "Access to Professional Support Team"
      },
      {
        icon: "/Home/Recruitment_icons/Timely_Assistance.webp",
        icon_content: "Timely Assistance"
      },
      {
        icon: "/Home/Recruitment_icons/Expert_Guidance.webp",
        icon_content: "Expert Guidance"
      },
      {
        icon: "/Home/Recruitment_icons/Personalized_Advice.webp",
        icon_content: "Personalized Advice"
      }
    ]
  }
]