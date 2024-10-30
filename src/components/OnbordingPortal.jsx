"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { ImArrowRight2 } from 'react-icons/im';

const OnboardingTabs = [
  {
    img: "/onboarding/icons/client.svg",
    img2: "/onboarding/icons/client-2.svg",
    content: "Client On-Boarding",
    match: "client_on_boarding",
  },
  {
    img: "/onboarding/icons/hiring.svg",
    img2: "/onboarding/icons/hiring-2.svg",
    content: "Project Management",
    match: "project"
  },
  {
    img: "/onboarding/icons/communication.svg",
    img2: "/onboarding/icons/communication-2.svg",
    content: "Communication Management",
    match: "communication"
  },
  {
    img: "/onboarding/icons/client-support.svg",
    img2: "/onboarding/icons/client-support-2.svg",
    content: "Client Support",
    match: "support"
  },
  {
    img: "/onboarding/icons/access.svg",
    img2: "/onboarding/icons/access-2.svg",
    content: "Access and Security Control",
    match: "accessAndSecurity"
  }
]

const OnboardingPortal = () => {
  const [selectedPortal, setSelectedPortal] = useState("client_on_boarding");



  const handleOnboarding = (index) => {
    setSelectedPortal(index);
  }



  useEffect(() => {
    const array = [0, -20, -40, -60, -80];
    const OnboardingTabs_contents = document.querySelector(".OnboardingTabs_contents");

    if (selectedPortal === "project") {
      OnboardingTabs_contents.style.transform = `translateX(${array[1]}%)`;
    }
    else if (selectedPortal === "communication") {
      OnboardingTabs_contents.style.transform = `translateX(${array[2]}%)`;
    }
    else if (selectedPortal === "support") {
      OnboardingTabs_contents.style.transform = `translateX(${array[3]}%)`;
    }
    else if (selectedPortal === "accessAndSecurity") {
      OnboardingTabs_contents.style.transform = `translateX(${array[4]}%)`;
    }
    else {
      OnboardingTabs_contents.style.transform = `translateX(${array[0]}%)`;
    }
  }, [selectedPortal])

  useEffect(() => {
    const portalData_div = document.querySelector(".portalData_div");
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
      portalData_div.scrollLeft -= movementX;
      startX = touchX;
    };

    portalData_div.addEventListener("touchmove", dragging);
    portalData_div.addEventListener("touchstart", startDragging);
    portalData_div.addEventListener("touchend", stopDragging);

    return () => {
      portalData_div.removeEventListener("touchmove", dragging);
      portalData_div.removeEventListener("touchstart", startDragging);
      portalData_div.removeEventListener("touchend", stopDragging);
    }
  }, [])

  const portalData = OnboardingTabs_contents.filter(portal => portal.match === selectedPortal);

  return (
    <>
      <div className='mt-32 lg:block hidden'>
        <div className='main_container'>
          <h1 className="roboto text-[36px] leading-[48px] font-bold text-blue text-center">The Ultimate Portal for Onboarding, Collaboration & Support</h1>

          <div className='mt-10'>
            <ul className='flex justify-between items-center gap-4 onboardingTabs'>
              {OnboardingTabs.map((portal, index) => (
                <li key={index} className={`${selectedPortal === portal.match ? "activeTabs2" : ""}  flex items-center justify-center gap-2 py-3 px-4 shadow-shadow6.5x rounded-lg`} onClick={() => setSelectedPortal(portal.match)}>
                  {selectedPortal === portal.match ? 
                    <img src={portal.img2} alt="" className='w-[25px] h-[20px] object-contain' /> : 
                    <img src={portal.img} alt="" className='w-[25px] h-[20px] object-contain' />
                  }
                  <p className='roboto text-[#3b5d8c]'>{portal.content}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className='mt-32 flex flex-row-reverse justify-between items-center gap-16'>
            {portalData.map((contents, i) => (
              <div key={i} className='w-[60%]'>
                <h3 className='lg:w-[80%] w-full roboto text-[28px] font-medium text-[#333] mb-6'>{contents.headTitle}</h3>
                <p className='roboto text-[16px] leading-6 text-light-gray'>{contents.para}</p>

                <div className='flex justify-between items-center gap-2 mt-10'>
                  <div className='w-[85%]'>
                    <ul className='flex justify-between items-center home_list home_list2'>
                      {contents.list.map((listElement, index) => (
                        <li key={index} className='text-center w-[33.3%]'>
                          <div className='px-2  flex items-start justify-start flex-col'>
                            <img src={listElement.icon} alt="" className='mx-auto mb-2' />
                            <h4 className='text-light-gray'>{listElement.icon_content}</h4>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className='w-[15%]'>
                    <Link href={`${contents.link}`} className='block bg-green px-[22px] py-[10px] rounded-lg'>
                      <HiArrowNarrowRight className="text-[#FAFAFA] mx-auto text-[26px]" />
                      <span className='text-[#FAFAFA] text-center block'>Explore More</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            <div className='w-[40%]'>
              <div className="relative">
                <img src="./onboarding/onboarding-1.webp" className='relative z-20 w-full h-full' alt="" />
                <img src="./onboarding/icons/animation/user-update.webp" alt="" className="onboarding_anim_01 shadow-iconShadow" />
                <img src="./onboarding/icons/animation/progress.webp" alt="" className="onboarding_anim_02 shadow-iconShadow" />
                <img src="./onboarding/icons/animation/notification.webp" alt="" className="onboarding_anim_03 shadow-iconShadow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* responsive */}
      <div className='lg:hidden block py-10 mx-4 overflow-x-hidden'>
        <h1 className="roboto text-[22px] leading-[32px] font-bold text-blue text-center mb-6">The Ultimate Portal for Onboarding, Collaboration & Support</h1>
        <div className='onboarding_div'>
          <ul className='portalData_div'>
            {OnboardingTabs.map((portal, index) => (
              <li key={index} className={`${selectedPortal === portal.match ? "onboarding_listing_tab active_onboard" : "onboarding_listing_tab"} shadow-shadow6.5x rounded-lg mr-4`} onClick={() => handleOnboarding(portal.match)}>
                <div className='flex items-center justify-center w-[225px]'>
                  {selectedPortal === portal.match ? 
                    <img src={portal.img2} alt="" className='w-[25px] h-[20px] object-contain' /> : 
                    <img src={portal.img} alt="" className='w-[25px] h-[20px] object-contain' />
                  }
                  <p className={`roboto ml-2 ${portal.match === selectedPortal ? 'text-[#FFF]' : 'text-[#3b5d8c]'}`}>{portal.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 relative z-10">
          <div className='bg-[#FFF] py-6 px-4 shadow-shadow6x rounded-lg'>
            <div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[90%] h-[105%] bg-[#D3D8E1] z-[-1] border-[2px] border-solid border-[#224642] rounded-[20px] shadow-shadow7x'></div>
            <div className="recruitment_main_contents">
              <div className="OnboardingTabs_contents">
                {OnboardingTabs_contents.map((portal, i) => (
                  <div key={i} className='w-full'>
                    <h3 className='roboto text-[#333] text-[14px] leading-5 font-medium mb-5 border-l-[3px] border-solid border-[#224642] pl-3'>{portal.headTitle}</h3>
                    <p className='text-[#494949] text-[14px] leading-6 font-light mb-5 text-justify'>{portal.para}</p>

                    <ul className='flex justify-between mb-8 gap-2'>
                      {portal.list.map((listItems, index) => (
                        <li key={index} className='w-full flex-1'>
                          <div className='text-center'>
                            <img src={listItems.icon} alt="" className='mx-auto' />
                            <span className='font-bold text-[10px] text-light-gray leading-4 block mt-2 opacity-80'>{listItems.icon_content}</span>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <a href={portal.link} className='text-[#FFF] bg-green rounded-[20px] w-[65%] mx-auto text-center flex items-center justify-center py-[6px]'>Explore More <ImArrowRight2 className="text-white ml-3" /></a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default OnboardingPortal;


const OnboardingTabs_contents = [
  {
    match: "client_on_boarding",
    headTitle: "Effortless Client Onboarding: Start Strong, Build Lasting Relationships",
    para: "Make a lasting first impression with TCP’s intuitive onboarding process. Forget juggling with paperwork, gather essential client details efficiently so you can start delivering personalized service from day one. Focus on building lasting relationships, not filling out forms.",
    link:'/techforing-customer#path_1',
    list: [
      {
        icon: "/onboarding/icons/client-onboarding/user.webp",
        icon_content: "Client Information"
      },
      {
        icon: "/onboarding/icons/client-onboarding/setting.webp",
        icon_content: "Service Information"
      },
      {
        icon: "/onboarding/icons/client-onboarding/wallet.webp",
        icon_content: "Payment Information"
      }
    ]
  },
  {
    match: "project",
    headTitle: "Project Management, Perfected: Take Control, Deliver Results",
    para: "Take the chaos out of project management. TCP allows you to conduct seamless project initiation, clear task assignments, real-time progress tracking, and smart prioritization. Keep your team focused, hit deadlines effortlessly, and exceed client expectations every time.",
    link: "/techforing-customer#path_2",
    list: [
      {
        icon: "/onboarding/icons/hiring/project.webp",
        icon_content: "Project Initialization"
      },
      {
        icon: "/onboarding/icons/hiring/assignment.webp",
        icon_content: "Project Assignment"
      },
      {
        icon: "/onboarding/icons/hiring/realtime.webp",
        icon_content: "Real-Time Project Updates"
      }
    ]
  },
  {
    match: "communication",
    headTitle: "Communication, Simplified: Stay Connected, Keep Everyone in the Loop",
    para: "Say goodbye to communication breakdowns and missed client messages. Ensure seamless uninterrupted communication between your team and your clients with personalized templates and automated updates from a centralized dashboard. Keep every project on track with crystal clear communication with TCP.",
    link:'/techforing-customer#path_3',
    list: [
      {
        icon: "/onboarding/icons/communication/box.webp",
        icon_content: "Create Email/SMS Templates"
      },
      {
        icon: "/onboarding/icons/communication/setting.webp",
        icon_content: "Set Automation Rules"
      },
      {
        icon: "/onboarding/icons/communication/sms.webp",
        icon_content: "Direct Client Communication"
      },
    ]
  },
  {
    match: "support",
    headTitle: "Client Support, Elevated: Build Trust, Deliver Exceptional Service",
    para: "Make client satisfaction your top priority. Give your clients the VIP system they deserve with our efficient ticketing system and instant live chat support. Keep track of every conversation with a centralized communication history, make issue resolution a breeze, and build lasting client relationships with our proactive support.",
    link:'/techforing-customer#path_4',
    list: [
      {
        icon: "/onboarding/icons/support/ticket.webp",
        icon_content: "Ticket System"
      },
      {
        icon: "/onboarding/icons/support/communication.webp",
        icon_content: "Efficient Communication"
      },
      {
        icon: "/onboarding/icons/support/sms.webp",
        icon_content: "Direct Chat"
      }
    ]
  },
  {
    match: "accessAndSecurity",
    headTitle: "Protect Data, Build Client Confidence With Fortress-Level Access & Security Control",
    para: "Rest easy knowing your client's sensitive data is in safe hands. Our industry-leading encryption, granular access controls, and role-based permissions ensure that only authorized eyes see what they should. Build trust and protect your reputation with uncompromising security.",
    link:'/techforing-customer#path_5',
    list: [
      {
        icon: "/onboarding/icons/access/sms-box.webp",
        icon_content: "Invite Users"
      },
      {
        icon: "/onboarding/icons/access/user.webp",
        icon_content: "Add Users"
      },
      {
        icon: "/onboarding/icons/access/user-plus.webp",
        icon_content: "Role Assignment"
      }
    ]
  }
]