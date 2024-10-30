"use client"
import React, { useEffect } from 'react';
import c from '../style/customerList.module.css';
import '../app/globals.css';
import { Cash, Clock, Employee, Hand, TechForingGradientDragon, User } from './Icon';
import { Button } from './SharedComponents';
import { ImArrowDown2, ImArrowUp2 } from 'react-icons/im';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useGlobalContext } from '@/context/globalContext';
import { NextArrow, PrevArrow } from './Arrows/Arrows';

const CustomerList = () => {
  const { setOpenScheduleDemo } = useGlobalContext();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    arrows: true
  };

  useEffect(() => {
    let currentIndex = 0;
    const icon_glow = document.querySelectorAll(".icon_glow");

    const setActiveLink = (index) => {
      icon_glow.forEach((item, i) => {
        if (i === index) {
          icon_glow[i].classList.add(`active_glow`);

        } else {
          icon_glow[i].classList.remove(`active_glow`);
        }
      });
    }
    const autoSlide = () => {
      currentIndex = (currentIndex + 1) % icon_glow.length;
      setActiveLink(currentIndex);
    }
    // Initial call to set the active class
    setActiveLink(currentIndex);
    // 5-second later auto loop iteration
    setInterval(autoSlide, 6000);

  }, [])

  return (
    <>

      <div className='mt-24 lg:block hidden'>
        <div className="whole_div_shape">
          <div className='custom-container'>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col gap-4 w-[470px]'>
                <h1 className={c.title}>Join Our Growing<br /><span>Customer</span> List</h1>
                {/* <p className='text'>We built for teams from 10 to 10,000+ and offers products for all dimensions of engagement from rewards, recognition, surveys, and perks</p> */}
              </div>
              {/* <div className='flex gap-20'>
                <div className='w-[193px] h-[193px] rounded-full flex items-center justify-center shadow-xl bg-[#FAFAFA]'>
                  <img src="/nivea.webp" alt="nivea" className='w-[120px]' />
                </div>
                <div className='w-[193px] h-[193px] rounded-full flex items-center justify-center shadow-xl bg-[#FAFAFA]'>
                  <img src="/nourish.webp" alt="nourish" className='w-[120px]' />
                </div>
              </div> */}
            </div>

            <img src="/hand-shake.webp" alt="" className='relative z-10 w-[350px] h-[220px] left-[-75px]' />
          </div>
        </div>

        {/* part-2 */}
        <div className={c.contentArea}>
          <div className='custom-container flex gap-28'>
            <div className='relative h-fit'>
              <div className={c.vector}>
                <TechForingGradientDragon />
                <div className='z-10 flex items-center justify-center flex-col gap-[6px] absolute top-14 -left-4'>
                  <div className='w-14 h-14 rounded-full bg-orange-400 flex items-center justify-center'>
                    <Employee fill="#fff" width="32px" />
                  </div>
                  <p className='font-normal text-white text-base'>HR Management</p>
                </div>
                <div className='z-10 flex items-center justify-center flex-col gap-[6px] absolute top-14 -right-4'>
                  <div className='w-14 h-14 rounded-full bg-blue-400 flex items-center justify-center'>
                    <Cash fill="#fff" width="32px" />
                  </div>
                  <p className='font-normal text-white text-base'>Easy Accounting</p>
                </div>
                <div className='z-10 flex items-center justify-center flex-col gap-[6px] absolute bottom-0 left-1'>
                  <div className='w-14 h-14 rounded-full bg-[#76D895] flex items-center justify-center'>
                    <Clock color1="#fff" color2="#fff" width="32px" />
                  </div>
                  <p className='font-normal text-white text-base'>Improve Productivity</p>
                </div>
                <div className='z-10 flex items-center justify-center flex-col gap-[6px] absolute bottom-0 right-1'>
                  <div className='w-14 h-14 rounded-full bg-pink-400 flex items-center justify-center'>
                    <User fill="#fff" width="32px" />
                  </div>
                  <p className='font-normal text-white text-base'>Onboard Talent</p>
                </div>
              </div>

              <div className={`${c.rotate} absolute top-0 left-0 w-full h-full`}>
                <div className='relative w-full h-full'>
                  <div className='w-5 h-5 rounded-full bg-white opacity-50 absolute -top-[10px] left-1/2 -translate-x-1/2'></div>
                  <div className='w-5 h-5 rounded-full bg-white opacity-50 absolute top-1/2 left-full -translate-x-1/2'></div>
                  <div className='w-5 h-5 rounded-full bg-white opacity-50 absolute -bottom-[10px] left-1/2 -translate-x-1/2'></div>
                  <div className='w-5 h-5 rounded-full bg-white opacity-50 absolute top-1/2 left-0 -translate-x-1/2'></div>
                </div>
              </div>
            </div>

            <div className='-translate-y-24'>
              <h1 className='text-white text-3xl font-medium mb-4'>Maximize Efficiency and Resource Optimization with <span className="text-primary">Techforing Growth</span></h1>
              <p className="text opacity-75" style={{ color: 'white' }}>Whether you have 10 employees or 10,000 – the TechForing Growth will elevate your workforce management with ease</p>
              <ul className='flex flex-col gap-6 my-9'>
                <li className='flex items-center gap-4'>
                  <Hand /><p className='text' style={{ color: 'white' }}>Enhanced employee engagement and satisfaction</p>
                </li>
                <li className='flex items-center gap-4'>
                  <Hand /><p className='text' style={{ color: 'white' }}>Robust data security and compliance</p>
                </li>
                <li className='flex items-center gap-4'>
                  <Hand /><p className='text' style={{ color: 'white' }}>Advanced analytics for data-driven decision-making</p>
                </li>
                <li className='flex items-center gap-4'>
                  <Hand /><p className='text' style={{ color: 'white' }}>Scalability and customization for growing organizations</p>
                </li>
                <li className='flex items-center gap-4'>
                  <Hand /><p className='text' style={{ color: 'white' }}>Dedicated support for a smooth implementation</p>
                </li>
              </ul>
              <div className="w-[119px]">
                <Button
                  onClick={() => setOpenScheduleDemo(true)}
                  text="Get Demo"
                  className="action_btn"
                />
              </div>
            </div>
          </div>
        </div>

        {/* part-3 */}
        <div className='relative z-0 card_sections'>
          <h3 className='text-4xl font-bold text-[#182F59] text-center mb-20'>Unlock the Full Potential of Your <span className='text-green'>HR Department</span></h3>
          <div className='custom-container'>
            <div className='grid gap-5 grid-cols-5'>
              <div className={c.progressCard}>
                <h4 className='text-6xl font-bold text-green font-rajdhani'>26%</h4>
                <span style={{ lineHeight: 'initial' }} className='text-center text-[24px] font-normal text-[#182F59]'>Administrative Costs</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="29" viewBox="0 0 24 29" fill="none">
                  <path d="M11.9439 0.500001C11.3471 0.500001 10.7748 0.739207 10.3529 1.165C9.93093 1.59078 9.69388 2.16828 9.69388 2.77043L9.69388 20.7523L3.78388 14.7886C3.35735 14.3875 2.79322 14.1692 2.21031 14.1796C1.62741 14.19 1.07125 14.4282 0.659013 14.8442C0.246776 15.2602 0.0106365 15.8214 0.000352009 16.4096C-0.00993247 16.9978 0.206439 17.5671 0.603879 17.9975L10.3539 27.836C10.7758 28.2612 11.3476 28.5 11.9439 28.5C12.5401 28.5 13.112 28.2612 13.5339 27.836L23.2839 17.9975C23.5049 17.7896 23.6822 17.539 23.8052 17.2604C23.9282 16.9819 23.9943 16.6813 23.9997 16.3764C24.005 16.0716 23.9494 15.7688 23.8362 15.4861C23.7231 15.2034 23.5546 14.9466 23.341 14.731C23.1273 14.5154 22.8728 14.3454 22.5927 14.2312C22.3125 14.117 22.0124 14.0609 21.7103 14.0663C21.4082 14.0717 21.1103 14.1384 20.8343 14.2625C20.5583 14.3866 20.3099 14.5655 20.1039 14.7886L14.1939 20.7523L14.1939 2.77043C14.1939 1.51715 13.1859 0.500001 11.9439 0.500001Z" fill="#FF0000" />
                </svg>
                <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75px] h-[75px] rounded-full' style={{ background: "linear-gradient(180deg, transparent, transparent, rgba(91, 188, 46, 1))" }}>
                  <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] rounded-full bg-white flex justify-center items-center ' >
                    <img src="/Home/hand_coin.svg" alt="" className='' />
                  </div>
                </div>
              </div>

              <div className={c.progressCard}>
                <h4 className='text-6xl font-bold text-green font-rajdhani'>64%</h4>
                <span style={{ lineHeight: 'initial' }} className='text-center text-[24px] font-normal text-[#182F59]'>Reduced Human Error</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="29" viewBox="0 0 24 29" fill="none">
                  <path d="M11.9439 0.500001C11.3471 0.500001 10.7748 0.739207 10.3529 1.165C9.93093 1.59078 9.69388 2.16828 9.69388 2.77043L9.69388 20.7523L3.78388 14.7886C3.35735 14.3875 2.79322 14.1692 2.21031 14.1796C1.62741 14.19 1.07125 14.4282 0.659013 14.8442C0.246776 15.2602 0.0106365 15.8214 0.000352009 16.4096C-0.00993247 16.9978 0.206439 17.5671 0.603879 17.9975L10.3539 27.836C10.7758 28.2612 11.3476 28.5 11.9439 28.5C12.5401 28.5 13.112 28.2612 13.5339 27.836L23.2839 17.9975C23.5049 17.7896 23.6822 17.539 23.8052 17.2604C23.9282 16.9819 23.9943 16.6813 23.9997 16.3764C24.005 16.0716 23.9494 15.7688 23.8362 15.4861C23.7231 15.2034 23.5546 14.9466 23.341 14.731C23.1273 14.5154 22.8728 14.3454 22.5927 14.2312C22.3125 14.117 22.0124 14.0609 21.7103 14.0663C21.4082 14.0717 21.1103 14.1384 20.8343 14.2625C20.5583 14.3866 20.3099 14.5655 20.1039 14.7886L14.1939 20.7523L14.1939 2.77043C14.1939 1.51715 13.1859 0.500001 11.9439 0.500001Z" fill="#FF0000" />
                </svg>
                <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75px] h-[75px] rounded-full' style={{ background: "linear-gradient(180deg, transparent, transparent, rgba(91, 188, 46, 1))" }}>
                  <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] rounded-full bg-white flex justify-center items-center ' >
                    <img src="/Home/man_err.svg" alt="" className='' />
                  </div>
                </div>
              </div>

              <div className={c.progressCard}>
                <h4 className='text-6xl font-bold text-green font-rajdhani'>60%</h4>
                <span style={{ lineHeight: 'initial' }} className='text-center text-[24px] font-normal text-[#182F59]'>Improved Onboarding</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="29" viewBox="0 0 24 29" fill="none">
                  <path d="M12.0561 28.5C12.6529 28.5 13.2252 28.2608 13.6471 27.835C14.0691 27.4092 14.3061 26.8317 14.3061 26.2296L14.3061 8.24774L20.2161 14.2114C20.6427 14.6125 21.2068 14.8308 21.7897 14.8204C22.3726 14.81 22.9288 14.5718 23.341 14.1558C23.7532 13.7398 23.9894 13.1786 23.9997 12.5904C24.0099 12.0022 23.7936 11.4329 23.3961 11.0025L13.6461 1.16399C13.2242 0.738816 12.6524 0.499998 12.0561 0.499998C11.4599 0.499998 10.888 0.738816 10.4661 1.16399L0.716127 11.0025C0.495066 11.2104 0.31776 11.461 0.194784 11.7396C0.0718082 12.0181 0.00568258 12.3187 0.000352285 12.6236C-0.00497801 12.9284 0.0505956 13.2312 0.163759 13.5139C0.276922 13.7966 0.445356 14.0534 0.659012 14.269C0.872668 14.4846 1.12717 14.6546 1.40733 14.7688C1.6875 14.883 1.98759 14.9391 2.28969 14.9337C2.5918 14.9283 2.88974 14.8616 3.16574 14.7375C3.44174 14.6134 3.69014 14.4345 3.89613 14.2114L9.80613 8.24774L9.80613 26.2296C9.80613 27.4828 10.8141 28.5 12.0561 28.5Z" fill="#5BBC2E" />
                </svg>
                <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75px] h-[75px] rounded-full' style={{ background: "linear-gradient(180deg, transparent, transparent, rgba(91, 188, 46, 1))" }}>
                  <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] rounded-full bg-white flex justify-center items-center ' >
                    <img src="/Home/hand.svg" alt="" className='' />
                  </div>
                </div>
              </div>

              <div className={c.progressCard}>
                <h4 className='text-6xl font-bold text-green font-rajdhani'>26%</h4>
                <span style={{ lineHeight: 'initial' }} className='text-center text-[24px] font-normal text-[#182F59]'>HR Accuracy</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="29" viewBox="0 0 24 29" fill="none">
                  <path d="M12.0561 28.5C12.6529 28.5 13.2252 28.2608 13.6471 27.835C14.0691 27.4092 14.3061 26.8317 14.3061 26.2296L14.3061 8.24774L20.2161 14.2114C20.6427 14.6125 21.2068 14.8308 21.7897 14.8204C22.3726 14.81 22.9288 14.5718 23.341 14.1558C23.7532 13.7398 23.9894 13.1786 23.9997 12.5904C24.0099 12.0022 23.7936 11.4329 23.3961 11.0025L13.6461 1.16399C13.2242 0.738816 12.6524 0.499998 12.0561 0.499998C11.4599 0.499998 10.888 0.738816 10.4661 1.16399L0.716127 11.0025C0.495066 11.2104 0.31776 11.461 0.194784 11.7396C0.0718082 12.0181 0.00568258 12.3187 0.000352285 12.6236C-0.00497801 12.9284 0.0505956 13.2312 0.163759 13.5139C0.276922 13.7966 0.445356 14.0534 0.659012 14.269C0.872668 14.4846 1.12717 14.6546 1.40733 14.7688C1.6875 14.883 1.98759 14.9391 2.28969 14.9337C2.5918 14.9283 2.88974 14.8616 3.16574 14.7375C3.44174 14.6134 3.69014 14.4345 3.89613 14.2114L9.80613 8.24774L9.80613 26.2296C9.80613 27.4828 10.8141 28.5 12.0561 28.5Z" fill="#5BBC2E" />
                </svg>
                <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75px] h-[75px] rounded-full' style={{ background: "linear-gradient(180deg, transparent, transparent, rgba(91, 188, 46, 1))" }}>
                  <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] rounded-full bg-white flex justify-center items-center ' >
                    <img src="/Home/circle_shot.svg" alt="" className='' />
                  </div>
                </div>
              </div>

              <div className={c.progressCard}>
                <h4 className='text-6xl font-bold text-green font-rajdhani'>44%</h4>
                <span style={{ lineHeight: 'initial' }} className='text-center text-[24px] font-normal text-[#182F59]'>Improved Compliance</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="29" viewBox="0 0 24 29" fill="none">
                  <path d="M12.0561 28.5C12.6529 28.5 13.2252 28.2608 13.6471 27.835C14.0691 27.4092 14.3061 26.8317 14.3061 26.2296L14.3061 8.24774L20.2161 14.2114C20.6427 14.6125 21.2068 14.8308 21.7897 14.8204C22.3726 14.81 22.9288 14.5718 23.341 14.1558C23.7532 13.7398 23.9894 13.1786 23.9997 12.5904C24.0099 12.0022 23.7936 11.4329 23.3961 11.0025L13.6461 1.16399C13.2242 0.738816 12.6524 0.499998 12.0561 0.499998C11.4599 0.499998 10.888 0.738816 10.4661 1.16399L0.716127 11.0025C0.495066 11.2104 0.31776 11.461 0.194784 11.7396C0.0718082 12.0181 0.00568258 12.3187 0.000352285 12.6236C-0.00497801 12.9284 0.0505956 13.2312 0.163759 13.5139C0.276922 13.7966 0.445356 14.0534 0.659012 14.269C0.872668 14.4846 1.12717 14.6546 1.40733 14.7688C1.6875 14.883 1.98759 14.9391 2.28969 14.9337C2.5918 14.9283 2.88974 14.8616 3.16574 14.7375C3.44174 14.6134 3.69014 14.4345 3.89613 14.2114L9.80613 8.24774L9.80613 26.2296C9.80613 27.4828 10.8141 28.5 12.0561 28.5Z" fill="#5BBC2E" />
                </svg>

                <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75px] h-[75px] rounded-full' style={{ background: "linear-gradient(180deg, transparent, transparent, rgba(91, 188, 46, 1))" }}>
                  <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] rounded-full bg-white flex justify-center items-center ' >
                    <img src="/Home/list_tick.svg" alt="" className='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* part - 4 */}
        <div className='pt-0 pb-8 lg:block hidden'>
          <div className='main_container'>
            <div className='w-[85%]'>
              <Slider {...settings}>
                {/* 1st slider */}
                <div className='!flex !justify-between !items-center !gap-20'>
                  <div className='w-[220px] h-[220px] rounded-full overflow-hidden'>
                    <img src="/Home/ERIC_HO.webp" alt="ERIC_HO" />
                  </div>
                  <div className='w-[70%]'>
                    <p className='roboto text-[#333] font-light leading-6 mb-5 pr-16'>
                      Revolutionized our workforce management processes. The system's comprehensive features, such as employee scheduling and attendance tracking, have streamlined our operations. We can efficiently allocate resources, track employee hours, and manage leaves. The system's user-friendly interface and robust functionality have made our HR processes more efficient and effective</p>
                    <h2 className='roboto text-[28px] font-medium text-[#333] mb-1'>ERIC HO (ECUADOR)</h2>
                    <span className='roboto text-[#333]'>Staff Software Engineer, RippleMatch</span>
                  </div>
                </div>
                {/* 2nd slider */}
                <div className='!flex !justify-between !items-center !gap-20'>
                  <div className='w-[220px] h-[220px] rounded-full overflow-hidden'>
                    <img className='scale-[1.05]' src="/Home/OZ_GOREN.webp" alt="OZ_GOREN" />
                  </div>
                  <div className='w-[70%]'>
                    <p className='roboto text-[#333] font-light leading-6 mb-5 pr-16'>
                      The accounting module is robust and user-friendly. It allows us to manage employee salaries, benefits, and expenses seamlessly. The reporting capabilities have given us valuable insights into our financial performance. With TechForing Growth, we have experienced increased efficiency and accuracy in our HR and accounting operations</p>
                    <h2 className='roboto text-[28px] font-medium text-[#333] mb-1'>OZ GOREN (ISRAEL)</h2>
                    <span className='roboto text-[#333]'>VP Marketing, Tanku</span>
                  </div>
                </div>
                {/* 3rd slider */}
                <div className='!flex !justify-between !items-center !gap-20'>
                  <div className='w-[220px] h-[220px] rounded-full overflow-hidden'>
                    <img className='scale-[1.05] w-full h-full' src="/Home/ISRAEL_SANCHEZ.webp" alt="ISRAEL_SANCHEZ" />
                  </div>
                  <div className='w-[70%]'>
                    <p className='roboto text-[#333] font-light leading-6 mb-5 pr-16'>Transformed our HR department. The system's talent management module has made it easy to attract, retain, and develop top talent. We can efficiently manage the entire employee lifecycle, from recruitment to performance management. The self-service capabilities have empowered our employees and improved overall engagement. TechForing Human is a game-changer for HR professionals.</p>
                    <h2 className='roboto text-[28px] font-medium text-[#333] mb-1'>ISRAEL SANCHEZ (USA)</h2>
                    <span className='roboto text-[#333]'>CEO, Integrated Healing and Strength Systems, Inc.</span>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        <div className='min-h-[212px] mt-[120px] flex items-center justify-center' style={{ background: '#182F59' }}>
          <div className='custom-container min-h-[212px] relative flex'>
            <div className='flex items-center'>
              <div className='w-4/12'>
              </div>
              <div className='w-8/12'>
                <span className=' text-white font-medium text-[28px] leading-8'>Don’t Settle for Less: Unlock the Full Potential of Your HR Department - With TechForing Growth</span>
                <Button className='bg-green !w-fit mt-8 action_btn' text='Schedule Live Demo'
                  onClick={() => setOpenScheduleDemo(true)}
                />
              </div>
            </div>
            <img src="/image 79 (1) 1 (1).webp" alt="" className='absolute bottom-0 left-24 w-[169px] h-[276px]' />
          </div>
        </div>
      </div>

      {/* Responsive */}
      <div className='lg:hidden block '>
        <div className='first_container pt-10 pb-28'>
          <div className='flex justify-between items-end gap-5 px-4'>
            <div className='w-[65%]'>
              <h1 className='roboto font-bold text-[18px] text-[#333] mb-4'>Join Our Growing <span className='text-green'>Customer</span> List</h1>
              <p className='roboto text-[14px] text-[#333] mb-2'>We built for teams from 10 to 10,000+ and offers products for all dimensions of engagement from rewards, recognition, surveys, and perks</p>
              <img src="/Home/hand-shake.webp" alt="" className='translate-x-[-18px]' />
            </div>
            {/* <div className='w-[35%] flex flex-col items-end'>
              <div className='w-[96px] h-[96px] rounded-full flex items-center justify-center shadow-xl bg-[#FAFAFA]'>
                <img src="/nivea.webp" alt="nivea" className='w-[50px] lg:h-[50px] h-[20px]' />
              </div>
              <div className='w-[96px] h-[96px] translate-x-[-32px] mt-2 rounded-full flex items-center justify-center shadow-xl bg-[#FAFAFA]'>
                <img src="/nourish.webp" alt="nourish" className='w-[50px] h-[50px]' />
              </div>
            </div> */}
          </div>
        </div>

        {/* 2nd section */}
        <div className='py-28 px-4 color_Change_bg mt-[-95px]'>
          <h2 className='roboto font-medium text-[20px] text-white mb-6'>Maximize Efficiency and Resource Optimization with <span className='text-green'>TechForing Growth</span></h2>
          <p className='roboto text-[14px] leading-5 text-[#FAFAFA] opacity-75 mb-5'>Whether you have 10 employees or 10,000 – the TechForing Growth will elevate your workforce management with ease</p>

          <div className='flex justify-between items-center'>
            <div className='w-[20%]'>
              <ul>
                <li className='mb-5'>
                  <div className='flex justify-center mb-1'>
                    <div className='icon_glow bg-[#FF9300]'>
                      <img src="/Home/user.webp" alt="" className='w-[20px]' />
                    </div>
                  </div>
                  <div className='leading-3'>
                    <p className='font-medium text-[10px] text-center text-white'>HR</p>
                    <p className='font-medium text-[10px] text-center text-white'>Management</p>
                  </div>
                </li>

                <li className='mb-5'>
                  <div className=' flex justify-center mb-1'>
                    <div className='icon_glow bg-[#5598EA]'>
                      <img src="/Home/cash.webp" alt="" className='w-[20px]' />
                    </div>
                  </div>
                  <div className='leading-3'>
                    <p className='font-medium text-[10px] text-center text-white'>Easy</p>
                    <p className='font-medium text-[10px] text-center text-white'>Accounting</p>
                  </div>
                </li>

                <li className='mb-5'>
                  <div className=' flex justify-center mb-1'>
                    <div className='icon_glow bg-[#F282D9]'>
                      <img src="/Home/group.webp" alt="" className='w-[20px]' />
                    </div>
                  </div>
                  <div className='leading-3'>
                    <p className='font-medium text-[10px] text-center text-white'>Onboard</p>
                    <p className='font-medium text-[10px] text-center text-white'>Talent</p>
                  </div>
                </li>

                <li className='mb-5'>
                  <div className=' flex justify-center mb-1'>
                    <div className='icon_glow bg-[#76D895]'>
                      <img src="/Home/time.webp" alt="" className='w-[20px]' />
                    </div>
                  </div>
                  <div className='leading-3'>
                    <p className='font-medium text-[10px] text-center text-white'>Improve</p>
                    <p className='font-medium text-[10px] text-center text-white'>Productivity</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className='w-[80%]'>
              <ul>
                <li className='mb-6'>
                  <div className="flex items-center ml-5">
                    <img src="/Home/hand.webp" alt="" className='' />
                    <a className='font-medium text-[14px] text-[#FAFAFA] ml-4'>Enhanced employee
                      engagement and satisfaction </a>
                  </div>
                </li>
                <li className='mb-6'>
                  <div className="flex items-center ml-5">
                    <img src="/Home/hand.webp" alt="" className='' />
                    <p className='font-medium text-[14px] text-[#FAFAFA] ml-4'>Robust data security and compliance</p>
                  </div>
                </li>
                <li className='mb-6'>
                  <div className="flex items-center ml-5">
                    <img src="/Home/hand.webp" alt="" className='' />
                    <p className='font-medium text-[14px] text-[#FAFAFA] ml-4'>Advanced analytics for data-driven decision-making</p>
                  </div>
                </li>
                <li className='mb-6'>
                  <div className="flex items-center ml-5">
                    <img src="/Home/hand.webp" alt="" className='' />
                    <p className='font-medium text-[14px] text-[#FAFAFA] ml-4'>Scalability and customization for growing organizations</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center ml-5">
                    <img src="/Home/hand.webp" alt="" className='' />
                    <p className='font-medium text-[14px] text-[#FAFAFA] ml-4'>Dedicated support for a smooth implementation</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className='text-center mt-4'>
            <Button className={'action_btn'} text={'Get Demo'} onClick={() => setOpenScheduleDemo(true)} />
          </div>
        </div>

        {/* 3rd section */}
        <div className='last_container_bg pt-7'>
          <div className='px-4'>
            <h2 className='roboto font-bold text-[18px] leading-[22px] text-[#182F59] text-center mb-5'>Unlock the Full Potential of Your HR Department<span className='text-green'>TechForing Growth</span></h2>

            <div className='w-[90%] ml-auto shadow-shadow7.5x rounded-[20px] py-5 relative mb-6'>
              <div className='absolute top-[50%] translate-y-[-50%] -left-8 w-[70px] h-[70px] rounded-full flex justify-center items-center'>
                <div className='absolute top-0 left-0 border-r-2 border-t-2 border-solid border-[#5BBC2F] w-full h-full rounded-full rotate-[36deg]'></div>
                <img src="/Home/hand_coin.svg" alt="" className='' />
              </div>

              <div className='w-[75%] ml-auto mr-5 gap-3'>
                <div className='flex justify-between items-center'>
                  <p className='w-[25%] text-center font-rajdhani text-[32px] text-green font-bold'>26%</p>
                  <span className='text-[#182F59] leading-6 text-center roboto w-[55%] font-medium'>Administrative Costs</span>
                  <div className='w-[20%]'>
                    <ImArrowDown2 className='text-[#FF0000] text-[20px] mx-auto' />
                  </div>
                </div>
              </div>
            </div>

            <div className='w-[90%] ml-auto shadow-shadow7.5x rounded-[20px] py-5 relative mb-6'>
              <div className='absolute top-[50%] translate-y-[-50%] -left-8 w-[70px] h-[70px] rounded-full flex justify-center items-center'>
                <div className='absolute top-0 left-0 border-r-2 border-t-2 border-solid border-[#5BBC2F] w-full h-full rounded-full rotate-[36deg]'></div>
                <img src="/Home/man_err.svg" alt="" className='' />
              </div>

              <div className='w-[75%] ml-auto mr-5 gap-3'>
                <div className='flex justify-between items-center'>
                  <p className='w-[25%] text-center font-rajdhani text-[32px] text-green font-bold'>64%</p>
                  <span className='text-[#182F59] leading-6 text-center roboto w-[55%] font-medium'>Reduced Human Error</span>
                  <div className='w-[20%]'>
                    <ImArrowDown2 className='text-[#FF0000] text-[20px] mx-auto' />
                  </div>
                </div>
              </div>
            </div>

            <div className='w-[90%] ml-auto shadow-shadow7.5x rounded-[20px] py-5 relative mb-6'>
              <div className='absolute top-[50%] translate-y-[-50%] -left-8 w-[70px] h-[70px] rounded-full flex justify-center items-center'>
                <div className='absolute top-0 left-0 border-r-2 border-t-2 border-solid border-[#5BBC2F] w-full h-full rounded-full rotate-[36deg]'></div>
                <img src="/Home/hand.svg" alt="" className='' />
              </div>

              <div className='w-[75%] ml-auto mr-5 gap-3'>
                <div className='flex justify-between items-center'>
                  <p className='w-[25%] text-center font-rajdhani text-[32px] text-green font-bold'>60%</p>
                  <span className='text-[#182F59] leading-6 text-center roboto w-[55%] font-medium'>Improved Onboarding</span>
                  <div className='w-[20%]'>
                    <ImArrowUp2 className='text-[#5BBC2F] text-[20px] mx-auto' />
                  </div>
                </div>
              </div>
            </div>

            <div className='w-[90%] ml-auto shadow-shadow7.5x rounded-[20px] py-5 relative mb-6'>
              <div className='absolute top-[50%] translate-y-[-50%] -left-8 w-[70px] h-[70px] rounded-full flex justify-center items-center'>
                <div className='absolute top-0 left-0 border-r-2 border-t-2 border-solid border-[#5BBC2F] w-full h-full rounded-full rotate-[36deg]'></div>
                <img src="/Home/circle_shot.svg" alt="" className='' />
              </div>

              <div className='w-[75%] ml-auto mr-5 gap-3'>
                <div className='flex justify-between items-center'>
                  <p className='w-[25%] text-center font-rajdhani text-[32px] text-green font-bold'>26%</p>
                  <span className='text-[#182F59] leading-6 text-center roboto w-[55%] font-medium'>HR Accuracy</span>
                  <div className='w-[20%]'>
                    <ImArrowUp2 className='text-[#5BBC2F] text-[20px] mx-auto' />
                  </div>
                </div>
              </div>
            </div>

            <div className='w-[90%] ml-auto shadow-shadow7.5x rounded-[20px] py-5 relative mb-6'>
              <div className='absolute top-[50%] translate-y-[-50%] -left-8 w-[70px] h-[70px] rounded-full flex justify-center items-center'>
                <div className='absolute top-0 left-0 border-r-2 border-t-2 border-solid border-[#5BBC2F] w-full h-full rounded-full rotate-[36deg]'></div>
                <img src="/Home/list_tick.svg" alt="" className='' />
              </div>

              <div className='w-[75%] ml-auto mr-5 gap-3'>
                <div className='flex justify-between items-center'>
                  <p className='w-[25%] text-center font-rajdhani text-[32px] text-green font-bold'>44%</p>
                  <span className='text-[#182F59] leading-6 text-center roboto w-[55%] font-medium'>Improved Compliance</span>
                  <div className='w-[20%]'>
                    <ImArrowUp2 className='text-[#5BBC2F] text-[20px] mx-auto' />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4th section */}
        <div className='py-16 px-4 lg:hidden block'>
          <div className='main_container'>
            <div className='w-full'>
              <Slider {...settings}>
                {/* 1st slider */}
                <div className='!flex !flex-col !justify-between !items-center lg:!gap-20 !gap-0'>
                  <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                    <img src="/Home/ERIC_HO.webp" alt="ERIC_HO" />
                  </div>
                  <div className=' w-full'>
                    <p className='roboto text-[#333] lg:text-left font-normal leading-7 mb-5 lg:pr-16 pr-0 text-justify'>Revolutionized our workforce management processes. The system's comprehensive features, such as employee scheduling and attendance tracking, have streamlined our operations. We can efficiently allocate resources, track employee hours, and manage leaves. The system's user-friendly interface and robust functionality have made our HR processes more efficient and effective</p>
                    <h2 className='text-center lg:text-left roboto text-[28px] font-medium text-[#333] mb-1'>ERIC HO (ECUADOR)</h2>
                    <span className='block text-center lg:text-left roboto text-[#333]'>Staff Software Engineer, RippleMatch</span>
                  </div>
                </div>

                {/* 2nd slider */}
                <div className='!flex !flex-col !justify-between !items-center lg:!gap-20 !gap-0'>
                  <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                    <img className='scale-[1.05]' src="/Home/OZ_GOREN.webp" alt="OZ_GOREN" />
                  </div>
                  <div className=' w-full'>
                    <p className='roboto text-[#333] lg:text-left font-normal leading-7 mb-5 lg:pr-16 pr-0 text-justify'>The accounting module is robust and user-friendly. It allows us to manage employee salaries, benefits, and expenses seamlessly. The reporting capabilities have given us valuable insights into our financial performance. With TechForing Growth, we have experienced increased efficiency and accuracy in our HR and accounting operations</p>
                    <h2 className='text-center lg:text-left roboto text-[28px] font-medium text-[#333] mb-1'>OZ GOREN (ISRAEL)</h2>
                    <span className='block text-center lg:text-left roboto text-[#333]'>VP Marketing, Tanku.</span>
                  </div>
                </div>
                {/* 3rd slider */}
                <div className='!flex !flex-col !justify-between !items-center lg:!gap-20 !gap-0'>
                  <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                    <img className='scale-[1.05] w-full h-full' src="/Home/ISRAEL_SANCHEZ.webp" alt="ISRAEL_SANCHEZ" />
                  </div>
                  <div className=' w-full'>
                    <p className='roboto text-[#333] lg:text-left font-normal leading-7 mb-5 lg:pr-16 pr-0 text-justify'>Transformed our HR department. The system's talent management module has made it easy to attract, retain, and develop top talent. We can efficiently manage the entire employee lifecycle, from recruitment to performance management. The self-service capabilities have empowered our employees and improved overall engagement. TechForing Human is a game-changer for HR professionals.</p>
                    <h2 className='text-center lg:text-left roboto text-[28px] font-medium text-[#333] mb-1'>ISRAEL SANCHEZ (USA)</h2>
                    <span className='block text-center lg:text-left roboto text-[#333]'>CEO, Integrated Healing and Strength Systems, Inc.</span>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        {/*5th section */}
        <div className='bg-[#182F59] py-8 px-4 mt-32 mb-16 relative'>
          <div className='w-[56%] ml-auto'>
            <span className='text-white text-[12px] font-medium leading-5 mb-6 block'>Don’t Settle for Less: Unlock the Full Potential of Your HR Department - With TechForing Growth</span>
            <div className='lg:text-center text-left'>
              <Button className={'action_btn'} text={'Schedule Live Demo'} onClick={() => setOpenScheduleDemo(true)} />
            </div>
          </div>

          <img src="/image 79 (1) 1 (1).webp" alt="" className='absolute bottom-0 left-3 w-[155px]' />
        </div>
      </div>
    </>
  )
}

export default CustomerList;