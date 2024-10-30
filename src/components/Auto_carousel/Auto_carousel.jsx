import React, { useEffect } from 'react';
import "./Auto_carousel.css"

const Auto_carousel = () => {
    // icons changes
     const icons = ["/personal/person_tic.webp", "/personal/cash.webp", "/personal/doc.webp", "/personal/kpi.webp", "/personal/message.webp", "/personal/operator.webp", "/personal/user_secure.webp", "/personal/cycle.webp"];

    useEffect(() => {
        const line_array = ["26.06deg","15deg","117.06deg","105deg","208.05deg","195.29deg","301.06deg","288.94deg"];
        const line_array2 = ["-27deg","77.5deg","60deg","167deg","155.18deg","-105.98deg","-122.46deg","-15.58deg"];
        const rotate = [0, 35, 90, 135, 180, 225, 270, 315, 360];
      
        let currentIndex = 0;
        const hightLight_sub_content = document.querySelectorAll(".hightLight_sub_content");
        const image_slide_show = document.querySelector(".image_slide_show");
        const line = document.querySelector(".line");
        const line2 = document.querySelector(".line2");
      
        const setActiveLink = (index) => {
          hightLight_sub_content.forEach((item, i) => {
            if (i === index) {
              hightLight_sub_content[i].classList.add(`activeData`);
              hightLight_sub_content[i].style.transform = `rotate(${rotate[i]}deg)`;
              line.style.transform = `rotate(${line_array[i]})`;
              line2.style.transform = `translate(-50%, -50%) rotate(${line_array2[i]})`;
              // Use a fade-in effect when changing the image
              image_slide_show.style.opacity = 0;
              setTimeout(() => {
                image_slide_show.src = icons[i];
                image_slide_show.style.opacity = 1;
              }, 200); // Change the image after 500ms (0.5s) for the fade-in effect
      
            } else {
              hightLight_sub_content[i].classList.remove(`activeData`);
            }
          });
        }
      
        const autoSlide = () => {
          currentIndex = (currentIndex + 1) % hightLight_sub_content.length;
          setActiveLink(currentIndex); 
        }
      
        // Initial call to set the active class
        setActiveLink(currentIndex);
      
        // 4-second later auto loop iteration
        setInterval(autoSlide, 4000);
      
      }, []);
      
      
      useEffect(() => {
          const line_rotate = ["30deg","0deg","50deg","10deg","80deg","10deg","75deg","10deg"];
          const line_rotate2 = ["-30deg","70deg","0deg","75deg","14deg","75deg","0deg","80deg"];
        
          let currentIndex = 0;
          const hightLight_content_responsive = document.querySelectorAll(".hightLight_content_responsive");
          const image_slider = document.querySelector(".image_slider");
          const line_break = document.querySelector(".line_break");
          const line_break2 = document.querySelector(".line_break2");
        
          const setActiveLinkResponsive = (index) => {
              hightLight_content_responsive.forEach((item, i) => {
              if (i === index) {
                  hightLight_content_responsive[i].classList.add(`activeSlider`);
                  line_break.style.transform = `rotate(${line_rotate[i]})`;
                  line_break2.style.transform = `translate(-50%, -50%) rotate(${line_rotate2[i]})`;
                // Use a fade-in effect when changing the image
                   image_slider.style.opacity = 0;
                setTimeout(() => {
                  image_slider.src = icons[i];
                  image_slider.style.opacity = 1;
                }, 200); // Change the image after 500ms (0.5s) for the fade-in effect
        
              } else {
                  hightLight_content_responsive[i].classList.remove(`activeSlider`);
              }
            });
          }
        
          const autoSliders = () => {
            currentIndex = (currentIndex + 1) % hightLight_content_responsive.length;
            setActiveLinkResponsive(currentIndex); 
          }
        
          // Initial call to set the active class
          setActiveLinkResponsive(currentIndex);
        
          // 4-second later auto loop iteration
          setInterval(autoSliders, 4000);
        
        }, []);


    return (
        <>
            <section className='mt-48 mb-52 lg:block hidden'>
              <div className='main_container flex justify-between items-center' >
                 <div className="w-[50%]">
                    <h2 className='font-black noto text-[36px] leading-[48px] text_gradient_personal '>All-in-One </h2>
                    <h2 className='font-black noto text-[36px] leading-[48px] mb-6 text_gradient_personal '>Work-Life Integration</h2>
                    <p className='roboto font-light leading-6 text-light-gray text-justify'>Experience a seamless blend of work-life balance and professional growth through our versatile Personal Dashboard module. Effortlessly oversee your attendance, leave, and holiday records. Boost your financial confidence with intuitive earnings and expenses management. Easily access and organize crucial documents from a centralized location. Keep a real-time pulse on your personal KPI score, and much more, all at your fingertips.</p>
                 </div>

                 <div className="w-[50%] flex justify-center">
                   <div className='relative w-[250px] h-[250px] bg-[#FBFBFB] rounded-full'>
                       <div className='hightLight_content h_content_01'>
                          <span className='hightLight_sub_content'></span>
                            <h3>Attendance</h3>
                       </div>
                       <div className='hightLight_content h_content_02'>
                            <span className='hightLight_sub_content'></span>
                            <h3>Finances</h3>
                       </div>
                       <div className='hightLight_content h_content_03'>
                           <span className='hightLight_sub_content'></span>
                            <h3>Documents</h3>
                       </div>
                       <div className='hightLight_content h_content_04'>
                           <span className='hightLight_sub_content'></span>
                            <h3>KPI Monitoring</h3>
                       </div>
                       <div className='hightLight_content h_content_05'>
                            <span className='hightLight_sub_content'></span>
                            <h3>Surveys</h3>
                       </div>
                       <div className='hightLight_content h_content_06'>
                            <span className='hightLight_sub_content'></span>
                            <h3>Official</h3>
                       </div>
                       <div className='hightLight_content h_content_07'>
                            <span className='hightLight_sub_content'></span>
                            <h3>Access Control</h3>
                       </div>
                       <div className='hightLight_content h_content_08'>
                            <span className='hightLight_sub_content'></span>
                            <h3>Training</h3>
                       </div>
                      <div className='line'></div>
                      <div className='line2'></div>
                      <div className='slide_image'>
                          <img src="/personal/person_tic.webp" alt="" className='image_slide_show' />
                      </div>
                   </div>
                 </div>
              </div>
            </section>
             
             {/* for responsive */}
             <section className='px-3 py-16 lg:hidden block'>
                  <h2 className='font-black noto lg:text-[36px] text-[24px] lg:leading-[48px] leading-[36px] text_gradient_personal mb-5'>All-in-One Work-Life Integration</h2>
               <div className='flex justify-between mt-10'>
                 <div className='w-[45%]'>
                    <div className='relative w-[220px] h-[220px] bg-[#FBFBFB] rounded-full ml-[-75px]'>
                        <div className='line_break'></div>
                        <div className='line_break2'></div>
                        <div className='slider_image_containers'>
                            <img src="/personal/person_tic.webp" alt="" className='image_slider translate-x-6' />
                        </div>
                    </div>
                 </div>
                 <div className='w-[55%]'>
                     <div className='grid grid-cols-2 gap-x-1 gap-y-2'>
                         <div className='hightLight_content_responsive'>
                            <h3>Attendance</h3>
                         </div>
                         <div className='hightLight_content_responsive'>
                            <h3>Finances</h3>
                         </div>
                         <div className='hightLight_content_responsive'>
                            <h3>Documents</h3>
                       </div>
                       <div className='hightLight_content_responsive'>
                            <h3>KPI Monitoring</h3>
                       </div>
                       <div className='hightLight_content_responsive'>
                            <h3>Surveys</h3>
                       </div>
                       <div className='hightLight_content_responsive'>
                            <h3>Official</h3>
                       </div>
                       <div className='hightLight_content_responsive'>
                            <h3>Access Control</h3>
                       </div>
                       <div className='hightLight_content_responsive'>
                            <h3>Training</h3>
                       </div>
                     </div>
                 </div>
               </div>

               <p className='roboto lg:text-[16px] text-[14px] font-light leading-6 text-light-gray text-justify mt-10'>Experience a seamless blend of work-life balance and professional growth through our versatile Personal Dashboard module. Effortlessly oversee your attendance, leave, and holiday records. Boost your financial confidence with intuitive earnings and expenses management. Easily access and organize crucial documents from a centralized location. Keep a real-time pulse on your personal KPI score, and much more, all at your fingertips.</p>
             </section>
        </>
    );
};

export default Auto_carousel;