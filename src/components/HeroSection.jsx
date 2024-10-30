"use client"
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '@/context/globalContext';
import { Button } from './SharedComponents';
import Link from 'next/link';

const HeroSection = () => {
  const { setOpenScheduleDemo } = useGlobalContext();
  const [colorBg, setColorBg] = useState();

  useEffect(() => {
    let increase = 0;
    let currentIndex = 0;
    const image = ["/team1.webp", "/team2.webp", "/team3.webp"];
    const svg_change = document.querySelector(".svg_change");
    const carousel_img = document.querySelector(".carousel_img");
    // const button_bg_change = document.querySelector(".button_bg_change");
    const text_animation = document.querySelector(".text_animation").children;

    const setSvgLink = (index, increase) => {
      setColorBg(index)
      let degIncrease = 90;

      for (let i = 0; i < text_animation.length; i++) {
        text_animation[i].classList.remove("text_in", "text_out");
      }

      text_animation[index].classList.add("text_in");

      setTimeout(() => {
        text_animation[index].classList.add("text_out");
      }, 3800)

      svg_change.style.transform = `rotate(-${increase * degIncrease}deg)`;
      // button_bg_change.style.background = `${gradient[index]}`

      carousel_img.style.opacity = 0; // Add opacity transition
      setTimeout(() => {
        carousel_img.src = image[index];
        carousel_img.style.opacity = 1;
      }, 400); // Adjust the duration based on your preference
    }

    const animation = () => {
      currentIndex = (currentIndex + 1) % image.length;
      increase = increase + 1;
      setSvgLink(currentIndex, increase);
    }

    // Initial call to set the active class
    setSvgLink(currentIndex, increase);

    // 5-second later auto loop iteration
    setInterval(animation, 4000);

    // window.addEventListener("load", setSvgLink);
  }, [])
  return (
    <>
      {/* Responsive */}
      <div className='lg:py-20 pb-10 pt-20 lg:pb-40 px-4 lg:overflow-x-clip overflow-x-hidden relative z-0' >
        <div className='main_container'>
          <div className='flex justify-between items-center relative'>
            <div className='lg:w-[50%] w-[60%]'>
              <h5 className='roboto text-[#182F59] font-medium lg:text-[18px] text-[10px] mb-3'>A platform built for a new way of working</h5>
              <span className='roboto text-[#182F59] font-normal lg:text-[48px] text-[16px] lg:leading-[60px] leading-6 lg:mb-5 mb-0'>TechForing Growth Empowering Your<br /><span className='text-green lg:text-[48px] text-[18px] font-semibold'>Business</span> with</span>
              <span className='mb-2 text_animation'>
                <span className='noto text_gradient text_in font-black lg:text-[60px] text-[22px]'>HR Management</span>
                <span className='noto block text_gradient_recruitment font-black lg:text-[60px] text-[22px]'>Talent Acquisition</span>
                <span className='noto block text_gradient_finance font-black lg:text-[60px] text-[22px]'>Finance Manager</span>
              </span>

              <div className='flex flex-col lg:flex-row lg:gap-5  gap-5 mt-10 lg:mt-5'>
                {/* <Button onClick={() => setOpenScheduleDemo(true)} className={'button_bg_change text-white py-[14px] px-[22px]'} text={'Schedule A Demo'} /> */}
                <Button className={'action_btn py-[14px] px-[22px]'} text={'Schedule A Demo'} onClick={() => setOpenScheduleDemo(true)} />
              </div>
            </div>

            {/* position image and svg */}
            <div className='absolute top-0 right-0 lg:translate-x-[300px] translate-x-[105px] lg:translate-y-[-185px] translate-y-[-60px] lg:w-[750px] w-[250px]'>
              <img src="/team1.webp" alt="" className='carousel_img' />

              <div className='svg_change'>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 835 836" fill="none">
                  {
                    colorBg === 0 ? <path d="M234.088 78.4388C258.736 5.17929 351.204 -23.641 411.756 24.4012C522.233 112.055 627.302 172.308 765.258 227.269C837.64 256.106 857.038 352.083 804.066 409.222C705.197 515.869 648.156 617.959 606.333 756.166C584.192 829.334 494.196 860.357 433.554 813.813C316.209 723.748 208.497 660.207 67.4375 602.296C-1.93167 573.817 -22.2519 483.16 27.6423 427.181C127.465 315.184 188.55 213.784 234.088 78.4388Z" fill="url(#paint0_linear_4544_83304)" /> :

                      colorBg === 1 ? <path d="M78.099 600.815C4.83945 576.166 -23.9808 483.698 24.0614 423.147C111.715 312.67 171.968 207.6 226.929 69.6444C255.766 -2.73816 351.743 -22.1354 408.882 30.836C515.529 129.705 617.62 186.747 755.826 228.569C828.995 250.71 860.017 340.706 813.473 401.348C723.409 518.693 659.867 626.405 601.956 767.465C573.477 836.834 482.821 857.154 426.841 807.26C314.844 707.437 213.444 646.352 78.099 600.815Z" fill="url(#paint0_linear_4544_83306)" /> :

                        <path d="M600.395 757.794C575.746 831.053 483.278 859.873 422.727 811.831C312.25 724.177 207.18 663.924 69.2245 608.963C-3.15808 580.126 -22.5554 484.149 30.4161 427.011C129.285 320.363 186.327 218.273 228.149 80.0663C250.291 6.898 340.286 -24.1247 400.928 22.4196C518.273 112.484 625.985 176.025 767.045 233.936C836.414 262.415 856.734 353.072 806.84 409.052C707.018 521.049 645.932 622.449 600.395 757.794Z" fill="url(#paint0_linear_4544_83308)" />
                  }

                  {
                    colorBg === 0 ? <path d="M234.088 78.4388C258.736 5.17929 351.204 -23.641 411.756 24.4012C522.233 112.055 627.302 172.308 765.258 227.269C837.64 256.106 857.038 352.083 804.066 409.222C705.197 515.869 648.156 617.959 606.333 756.166C584.192 829.334 494.196 860.357 433.554 813.813C316.209 723.748 208.497 660.207 67.4375 602.296C-1.93167 573.817 -22.2519 483.16 27.6423 427.181C127.465 315.184 188.55 213.784 234.088 78.4388Z" fill="url(#paint1_radial_4544_83304)" fillOpacity="0.2" /> :

                      colorBg === 1 ? <path d="M78.099 600.815C4.83945 576.166 -23.9808 483.698 24.0614 423.147C111.715 312.67 171.968 207.6 226.929 69.6444C255.766 -2.73816 351.743 -22.1354 408.882 30.836C515.529 129.705 617.62 186.747 755.826 228.569C828.995 250.71 860.017 340.706 813.473 401.348C723.409 518.693 659.867 626.405 601.956 767.465C573.477 836.834 482.821 857.154 426.841 807.26C314.844 707.437 213.444 646.352 78.099 600.815Z" fill="#5BBC2E" fillOpacity="0.25" /> :

                        <path d="M600.395 757.794C575.746 831.053 483.278 859.873 422.727 811.831C312.25 724.177 207.18 663.924 69.2245 608.963C-3.15808 580.126 -22.5554 484.149 30.4161 427.011C129.285 320.363 186.327 218.273 228.149 80.0663C250.291 6.898 340.286 -24.1247 400.928 22.4196C518.273 112.484 625.985 176.025 767.045 233.936C836.414 262.415 856.734 353.072 806.84 409.052C707.018 521.049 645.932 622.449 600.395 757.794Z" fill="#003D3D" fillOpacity="0.7" />
                  }

                  {
                    colorBg === 0 ? <path d="M234.088 78.4388C258.736 5.17929 351.204 -23.641 411.756 24.4012C522.233 112.055 627.302 172.308 765.258 227.269C837.64 256.106 857.038 352.083 804.066 409.222C705.197 515.869 648.156 617.959 606.333 756.166C584.192 829.334 494.196 860.357 433.554 813.813C316.209 723.748 208.497 660.207 67.4375 602.296C-1.93167 573.817 -22.2519 483.16 27.6423 427.181C127.465 315.184 188.55 213.784 234.088 78.4388Z" fill="url(#paint2_angular_4544_83304)" fillOpacity="0.1" /> :

                      colorBg === 1 ? <path d="M78.099 600.815C4.83945 576.166 -23.9808 483.698 24.0614 423.147C111.715 312.67 171.968 207.6 226.929 69.6444C255.766 -2.73816 351.743 -22.1354 408.882 30.836C515.529 129.705 617.62 186.747 755.826 228.569C828.995 250.71 860.017 340.706 813.473 401.348C723.409 518.693 659.867 626.405 601.956 767.465C573.477 836.834 482.821 857.154 426.841 807.26C314.844 707.437 213.444 646.352 78.099 600.815Z" fill="url(#paint1_angular_4544_83306)" fillOpacity="0.2" /> :

                        <path d="M600.395 757.794C575.746 831.053 483.278 859.873 422.727 811.831C312.25 724.177 207.18 663.924 69.2245 608.963C-3.15808 580.126 -22.5554 484.149 30.4161 427.011C129.285 320.363 186.327 218.273 228.149 80.0663C250.291 6.898 340.286 -24.1247 400.928 22.4196C518.273 112.484 625.985 176.025 767.045 233.936C836.414 262.415 856.734 353.072 806.84 409.052C707.018 521.049 645.932 622.449 600.395 757.794Z" fill="url(#paint1_angular_4544_83308)" fillOpacity="0.2" />
                  }

                  <defs>
                    {
                      colorBg === 0 ? <linearGradient id="paint0_linear_4544_83304" x1="305.882" y1="177.669" x2="371.265" y2="790.125" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#182F59" />
                        <stop offset="1" stopColor="#020F26" />
                      </linearGradient> :

                        colorBg === 1 ? <linearGradient id="paint0_linear_4544_83306" x1="177.329" y1="529.02" x2="789.785" y2="463.637" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#182F59" />
                          <stop offset="1" stopColor="#020F26" />
                        </linearGradient> :
                          <linearGradient id="paint0_linear_4544_83308" x1="528.601" y1="658.563" x2="463.217" y2="46.1079" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#182F59" />
                            <stop offset="1" stopColor="#020F26" />
                          </linearGradient>
                    }
                    {
                      colorBg === 0 ? <radialGradient id="paint1_radial_4544_83304" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(331.362 279.039) rotate(118.659) scale(371.115 381.223)">
                        <stop stopColor="#182F59" />
                        <stop offset="1" stopColor="#5C7EBC" />
                      </radialGradient> :

                        colorBg === 1 ? <radialGradient id="paint1_angular_4544_83306" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(613.254 346.881) rotate(161.99) scale(581.441 580.01)">
                          <stop stopColor="#4C576B" stopOpacity="0.5" />
                          <stop offset="1" stopOpacity="0.7" />
                        </radialGradient> :

                          <radialGradient id="paint1_angular_4544_83308" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(346.461 222.638) rotate(71.9899) scale(581.441 580.01)">
                            <stop stopColor="#4C576B" stopOpacity="0.5" />
                            <stop offset="1" stopOpacity="0.7" />
                          </radialGradient>
                    }
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* color shade */}
        <div className='absolute top-0 left-0 -z-10 w-36 h-36 bg-[#5a81cbcb] blur-[150px]'></div>
        <div className='absolute top-0 right-[25%] -z-10 w-36 h-36 bg-[#9ADF7A] blur-[140px]'></div>
        <div className='absolute bottom-[5%] left-0 -z-10 w-36 h-36 bg-[#9ADF7A] blur-[140px]'></div>
        <div className='absolute bottom-[20%] right-[30%] -z-10 w-36 h-36 bg-[#5A82CB] blur-[130px]'></div>
      </div>
    </>
  )
}

export default HeroSection;

const gradient = [
  "conic-gradient(from -74deg at 70.61% 68.88%, rgba(76, 87, 107, 0.05) 0deg, rgba(0, 0, 0, 0.07) 360deg), radial-gradient(50.59% 50.59% at 30.4% 40.06%, rgba(24, 47, 89, 0.20) 0%, rgba(92, 126, 188, 0.20) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)",

  "conic-gradient(from -74deg at 70.61% 68.88%, rgba(76, 87, 107, 0.10) 0deg, rgba(0, 0, 0, 0.14) 360deg), linear-gradient(0deg, rgba(91, 188, 46, 0.25) 0%, rgba(91, 188, 46, 0.25) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)",

  "conic-gradient(from -74deg at 70.61% 68.88%, rgba(76, 87, 107, 0.10) 0deg, rgba(0, 0, 0, 0.14) 360deg), linear-gradient(0deg, rgba(0, 61, 61, 0.70) 0%, rgba(0, 61, 61, 0.70) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)"
]

