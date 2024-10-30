"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { ImArrowRight2 } from 'react-icons/im';

const HRMS_tab = [
  {
    img: "/HRMS/icons/employee_management.webp",
    img2: "/HRMS/icons/employee_management_white.webp",
    content: "Employee",
    match: "employee"
  },
  {
    img: "/HRMS/icons/attendance_management.webp",
    img2: "/HRMS/icons/attendance_management_white.webp",
    content: "Attendance",
    match: "attendance"
  },
  {
    img: "/HRMS/icons/performance_management.webp",
    img2: "/HRMS/icons/performance_management_white.webp",
    content: "Performance",
    match: "performance"
  },
  {
    img: "/HRMS/icons/noticeboard_management.webp",
    img2: "/HRMS/icons/noticeboard_management_white.webp",
    content: "Noticeboard",
    match: "noticeboard"
  },
  {
    img: "/HRMS/icons/report_management.webp",
    img2: "/HRMS/icons/report_management_white.webp",
    content: "Report",
    match: "report"
  },
  {
    img: "/HRMS/icons/document_management.webp",
    img2: "/HRMS/icons/document_management_white.webp",
    content: "Document",
    match: "document"
  },
  {
    img: "/HRMS/icons/funds.webp",
    img2: "/HRMS/icons/funds_white.webp",
    content: "Fund",
    match: "funds"
  },
]

const HrmsSolution = () => {
  const [hrmsSolution, setHrmsSolution] = useState("employee");

  const handleHrms = (index) => {
    setHrmsSolution(index);
  }

  useEffect(() => {
    const array = [0, -14.5, -28.8, -43.2, -57.7, -72, -86.4];
    const hrms_contents = document.querySelector(".hrms_contents");

    if (hrmsSolution === "attendance") {
      hrms_contents.style.transform = `translateX(${array[1]}%)`;
    }
    else if (hrmsSolution === "performance") {
      hrms_contents.style.transform = `translateX(${array[2]}%)`;
    }
    else if (hrmsSolution === "noticeboard") {
      hrms_contents.style.transform = `translateX(${array[3]}%)`;
    }
    else if (hrmsSolution === "report") {
      hrms_contents.style.transform = `translateX(${array[4]}%)`;
    }
    else if (hrmsSolution === "document") {
      hrms_contents.style.transform = `translateX(${array[5]}%)`;
    }
    else if (hrmsSolution === "funds") {
      hrms_contents.style.transform = `translateX(${array[6]}%)`;
    }
    else {
      hrms_contents.style.transform = `translateX(${array[0]}%)`;
    }

  }, [hrmsSolution])

  useEffect(() => {
    const hrms_data = document.querySelector(".hrms_data");
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
      hrms_data.scrollLeft -= movementX;
      startX = touchX;
    };

    hrms_data.addEventListener("touchmove", dragging);
    hrms_data.addEventListener("touchstart", startDragging);
    hrms_data.addEventListener("touchend", stopDragging);

    return () => {
      hrms_data.removeEventListener("touchmove", dragging);
      hrms_data.removeEventListener("touchstart", startDragging);
      hrms_data.removeEventListener("touchend", stopDragging);
    }
  }, [])

  const hrmsData = hrms_tab_contents.filter(hrms => hrms.match === hrmsSolution);

  return (
    <>
      <div className='mt-32 lg:block hidden'>
        <div className='main_container'>
          <h1 className="roboto text-[36px] leading-[48px] font-bold text_gradient text-center">Comprehensive HRMS Solution for All Your HR Operations</h1>

          <div className='mt-10'>
            <ul className='flex justify-between items-center gap-4 hrms_tab'>
              {
                HRMS_tab.map((hrms, index) => (
                  <li key={index} className={`${hrmsSolution === hrms.match ? "activeTabs" : ""}  flex items-center justify-center gap-4 py-3 px-1 shadow-shadow6.5x rounded-lg`} onClick={() => setHrmsSolution(hrms.match)}>
                    {
                      hrmsSolution === hrms.match ? <img src={hrms.img2} alt="" className='w-[25px] h-[20px] object-contain' /> : <img src={hrms.img} alt="" className='w-[25px] h-[20px] object-contain' />
                    }
                    <p className='roboto'>{hrms.content}</p>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className='mt-32 flex justify-between items-center gap-16'>
            {
              hrmsData.map((contents, i) => {
                return (
                  <div key={i} className='w-[60%]'>
                    <h3 className='lg:w-[80%] w-full roboto text-[28px] font-medium text-[#333] mb-6'>{contents.headTitle}</h3>
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
                <img src="/Home/HRMS_icons/hrms_images.webp" alt="" />

                <img src="/Home/HRMS_icons/anim_01.webp" alt="" className="hrms_anim_01 shadow-iconShadow" />
                <img src="/Home/HRMS_icons/anim_02.webp" alt="" className="hrms_anim_02 shadow-iconShadow" />
                <img src="/Home/HRMS_icons/anim_03.webp" alt="" className="hrms_anim_03 shadow-iconShadow" />
                <img src="/Home/HRMS_icons/anim_04.webp" alt="" className="hrms_anim_04 shadow-iconShadow" />
                <img src="/Home/HRMS_icons/anim_05.webp" alt="" className="hrms_anim_05 shadow-iconShadow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* responsive */}
      <div className='lg:hidden block py-10 mx-4 overflow-x-hidden'>
        <h1 className="roboto text-[22px] leading-[32px] font-bold text_gradient text-center mb-6">Comprehensive HRMS Solution for All Your HR Operations</h1>
        <div className='hrms_div'>
          <ul className='hrms_data'>
            {
              HRMS_tab.map((hrms, index) => (
                <li key={index} className={`${hrmsSolution === hrms.match ? "hrms_listing_tab active_hrms" : "hrms_listing_tab"} shadow-shadow6.5x rounded-lg`} onClick={() => handleHrms(hrms.match)}>
                  <div className='flex items-center justify-center w-[150px]'>
                    {
                      hrmsSolution === hrms.match ? <img src={hrms.img2} alt="" className='w-[25px] h-[20px] object-contain' /> : <img src={hrms.img} alt="" className='w-[25px] h-[20px] object-contain' />
                    }
                    <p className='roboto ml-2'>{hrms.content}</p>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="mt-10 relative z-10">
          <div className='bg-[#FFF] py-6 px-4 shadow-shadow6x rounded-lg'>
            <div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[90%] h-[105%] bg-[#D3D8E1] z-[-1] border-[2px] border-solid border-[#182F59] rounded-[20px] shadow-shadow7x'></div>
            <div className="hrms_main_contents">
              <div className="hrms_contents">
                {
                  hrms_tab_contents.map((hrms, i) => (
                    <div key={i} className='w-full'>
                      <h3 className='roboto text-[#333] text-[14px] leading-5 font-medium mb-5 border-l-[3px] border-solid border-[#182F59] pl-3'>{hrms.headTitle}</h3>
                      <p className='text-[#494949] text-[14px] leading-6 font-light mb-5 text-justify'>{hrms.para}</p>

                      <ul className='flex justify-between gap-5 mb-8'>
                        {
                          (hrms.list).map((listItems, index) => (
                            <li key={index}>
                              <div className='text-center'>
                                <img src={listItems.icon} alt="" className='mx-auto' />
                                <span className='font-bold text-[10px] text-light-gray leading-4 block mt-2 opacity-80'>{listItems.icon_content}</span>
                              </div>
                            </li>
                          ))
                        }
                      </ul>

                      <a href={hrms.link} className='text-[#FFF] bg-green rounded-[20px] w-[65%] mx-auto text-center flex items-center justify-center py-[6px]'>Explore More <ImArrowRight2 className="text-white ml-3" /></a>
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
}

export default HrmsSolution;


const hrms_tab_contents = [
  {
    match: "employee",
    headTitle: "Employee Management Made Easy",
    para: "TechForing Human simplifies employee management with a comprehensive module that centralizes employee records, department management, training tracking, evaluation processes, and resignation handling. With user-friendly interfaces and powerful features, streamline employee management throughout the entire employee lifecycle.",
    link: "/techforing-human/employee_Management/#management",
    list: [
      {
        icon: "/Home/HRMS_icons/employee_record.webp",
        icon_content: "Employee Records"
      },
      {
        icon: "/Home/HRMS_icons/department.webp",
        icon_content: "Department Management"
      },
      {
        icon: "/Home/HRMS_icons/training.webp",
        icon_content: "Training Tracking"
      },
      {
        icon: "/Home/HRMS_icons/resignation.webp",
        icon_content: "Resignation Handling"
      }
    ]
  },
  {
    match: "attendance",
    headTitle: "Real-time Attendance Tracking and Leave Management",
    para: "Simplify attendance and leave management with intuitive sub-modules. Track employee attendance, handle leave requests, calculate total leave days, streamline onboarding, and manage shifts. Experience seamless attendance management and accurate leave tracking with our powerful software.",
    link: "/techforing-human/attendance_management/#management",
    list: [
      {
        icon: "/Home/HRMS_icons/employee_record.webp",
        icon_content: "Attendance Tracking"
      },
      {
        icon: "/Home/HRMS_icons/user_email.webp",
        icon_content: "Leave Request Handling"
      },
      {
        icon: "/Home/HRMS_icons/user_send.webp",
        icon_content: "Smooth Onboarding Process"
      },
      {
        icon: "/Home/HRMS_icons/clock.webp",
        icon_content: "Easy Shift Management"
      }
    ]
  },
  {
    match: "performance",
    headTitle: "Supercharge Employee Performance",
    para: "Enhance employee performance by seamlessly tracking and managing performance metrics. Nurture a high-performing workforce with a streamlined evaluation process, transparent KPI tracking, and efficient promotion workflows to ensure fair recognition and rewards.",
    link: "/techforing-human/performance_management/#management",
    list: [
      {
        icon: "/Home/HRMS_icons/performance_tracking.webp",
        icon_content: "Performance Tracking"
      },
      {
        icon: "/Home/HRMS_icons/kpi_score.webp",
        icon_content: "KPI Scores and Bonuses"
      },
      {
        icon: "/Home/HRMS_icons/transparent_component.webp",
        icon_content: "Transparent Promotions"
      },
      {
        icon: "/Home/HRMS_icons/face_recognition.webp",
        icon_content: "Foster a Culture of Recognition"
      }
    ]
  },
  {
    match: "noticeboard",
    headTitle: "Engaging Noticeboard for Easy Communication and Event Management",
    para: "Keep your organization connected and informed. Easily manage events, including employee birthdays, holidays, meetings, etc. Handle employee terminations, and distribute notices and announcements in a user-friendly and efficient way. Conduct anonymous employee satisfaction surveys without the hassle of repetitive survey creation.",
    link: "/techforing-human/noticeboard_management/#management",
    list: [
      {
        icon: "/Home/HRMS_icons/msg.webp",
        icon_content: "Communication Hub"
      },
      {
        icon: "/Home/HRMS_icons/env.webp",
        icon_content: "Event Management"
      },
      {
        icon: "/Home/HRMS_icons/doc_err.webp",
        icon_content: "Termination Process"
      },
      {
        icon: "/Home/HRMS_icons/speaker.webp",
        icon_content: "Announcement Distribution"
      }
    ]
  },
  {
    match: "report",
    headTitle: "Expert Candidate Support, Right at Your Fingertips",
    para: "CCentralize all your company’s reports in one module, including performance, attendance, leave, invoices, payslips, commissions, and expenses. Make data-driven decisions and drive organizational success with our robust reporting capabilities.",
    link: "/techforing-human/report_management/#management",
    list: [
      {
        icon: "/Home/HRMS_icons/performance_evaluation.webp",
        icon_content: "Performance Evaluation"
      },
      {
        icon: "/Home/HRMS_icons/hand_cash.webp",
        icon_content: "Expense Analysis"
      },
      {
        icon: "/Home/HRMS_icons/leave_management.webp",
        icon_content: "Leave Management"
      },
      {
        icon: "/Home/HRMS_icons/analysis.webp",
        icon_content: "Financial Visibility"
      }
    ]
  },
  {
    match: "document",
    headTitle: "Easy HR Document Management for Streamlined Operations",
    para: "Experience a hassle-free approach to document workflows: streamline your HR document management with our comprehensive system. Organize, store, and access employee documents, expenses, salary sheets, commission slips, and vendor information securely and efficiently.",
    link: "/techforing-human/report_management/#management",
    list: [
      {
        icon: "/Home/HRMS_icons/employee_document.webp",
        icon_content: "Employee Document Repository"
      },
      {
        icon: "/Home/HRMS_icons/money_bag.webp",
        icon_content: "Expense Management"
      },
      {
        icon: "/Home/HRMS_icons/spreadsheet.webp",
        icon_content: "Streamlined Salary Sheets"
      },
      {
        icon: "/Home/HRMS_icons/box_percentage.webp",
        icon_content: "Commission Slip Tracking"
      }
    ]
  },
  {
    match: "funds",
    headTitle: "Seamless Fund Control for Effortless Fund Management",
    para: "Take charge of your organization’s financial well-being with our comprehensive fund management solution. Track existing and previous funds and calculate them accurately to enable greater transparency and control over your financial resources.",
    link: "/techforing-human/fund/#management",
    list: [
      {
        icon: "/Home/HRMS_icons/fund_calculator.webp",
        icon_content: "Simplified Fund Calculations"
      },
      {
        icon: "/Home/HRMS_icons/fund_management.webp",
        icon_content: "Employee Regulatory Fund Management"
      },
      {
        icon: "/Home/HRMS_icons/kpi_control.webp",
        icon_content: "Transparency and Control"
      },
      {
        icon: "/Home/HRMS_icons/fund_tracking.webp",
        icon_content: "Streamlined Fund Tracking"
      }
    ]
  }
]