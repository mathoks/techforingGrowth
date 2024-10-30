import React, { useEffect } from 'react';
import "./Application_system.css"

const Application_system = () => {

  useEffect(() => {
    const application_system = document.querySelectorAll(".application_system");
    let CurrentData = 0;

    function setActiveApplication(index) {
      application_system.forEach((link, i) => {
        if (index === i) {
          application_system[i].classList.add('activeApplication');
        }
        else {
          application_system[i].classList.remove('activeApplication');
        }
      });
    }

    function autoSlide() {
      CurrentData = (CurrentData + 1) % application_system.length;
      setActiveApplication(CurrentData);
    }

    // Initial marker position
    setActiveApplication(CurrentData);

    // Auto slide every 5 seconds
    setInterval(autoSlide, 5000);


  }, [])

  return (
    <>
      <section className='pt-40 pb-0 lg:block hidden'>
        <div className='main_container'>
          <h2 className='lg:text-[36px] text-[20px] text-center inter leading-[48px] font-bold text_gradient_recruitment mb-4 '>Comprehensive Applicant Management System</h2>
          <p className='inter font-light leading-[24px] text_gradient_recruitment text-center mb-20'>Manage the candidate pool effectively with a centralized platform, so your recruiters can track and assess candidates at various stages of the recruitment journey while easily sorting and accessing relevant applicant information</p>

          <div className='overflow-hidden flex lg:flex-row flex-col items-center justify-between gap-8 relative'>
            <div className='absolute top-0 left-0 w-[40%] h-full bg-light-white border_top_right_radius translate-x-[-75px]'></div>

            <div className='lg:w-[50%] w-full'>
              <div className='w-[450px] h-[400px] flex justify-center items-center relative z-20'>
                <div className='relative z-10 w-[50px] h-[60px]'>
                  <img src="/Recruitment/user.webp" alt="" className='main_user' />
                  <img src="/Recruitment/user.webp" alt="" className='img_class_01' />
                  <img src="/Recruitment/user.webp" alt="" className='img_class_02' />
                  <img src="/Recruitment/user.webp" alt="" className='img_class_03' />
                  <img src="/Recruitment/user.webp" alt="" className='img_class_04' />
                  <img src="/Recruitment/user.webp" alt="" className='img_class_05' />
                  <img src="/Recruitment/user.webp" alt="" className='img_class_06' />
                </div>

                <img src="/Recruitment/frame_without_user.webp" alt="" className='f_without_user' />
                <img src="/Recruitment/cv_frame.webp" alt="" className='f_user_01' />
                <img src="/Recruitment/cv_frame.webp" alt="" className='f_user_02' />
              </div>
            </div>

            {/*  */}
            <div className="lg:w-[50%] w-full">
              <div className="application_system activeApplication">
                <img src="/Recruitment/icons/circle.webp" alt="" className='application_img' />
                <div className='application_main_div'>
                  <div className='application_contents'>
                    <span className='line_shape_area'></span>
                    <h3 className='roboto font-medium text-[16px] leading-[48px] text_gradient_recruitment'>Statistical Display</h3>
                    <p className='roboto font-light leading-6 text-[#333]'>Easily track and showcase the total number of applicants, hires, shortlisted, and rejected candidates.</p>
                  </div>
                </div>
              </div>

              <div className="application_system">
                <img src="/Recruitment/icons/doc_err.webp" alt="" className='application_img' />
                <div className='application_main_div'>
                  <div className='application_contents'>
                    <span className='line_shape_area'></span>
                    <h3 className='roboto font-medium text-[16px] leading-[48px] text_gradient_recruitment'>Candidate Details</h3>
                    <p className='roboto font-light leading-6 text-[#333]'>Easily access all applicants’ essential information, including name, email, job type, shift preference, application date, and current hiring process status for applied candidates.</p>
                  </div>
                </div>
              </div>

              <div className="application_system">
                <img src="/Recruitment/icons/filter.webp" alt="" className='application_img' />
                <div className='application_main_div'>
                  <div className='application_contents'>
                    <span className='line_shape_area'></span>
                    <h3 className='roboto font-medium text-[16px] leading-[48px] text_gradient_recruitment'>Filtering Options</h3>
                    <p className='roboto font-light leading-6 text-[#333]'>Easily sort and find your ideal candidates by narrowing your searches based on job title, type, and shift, simplifying the whole process.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='lg:hidden block px-4 py-16'>
        <div className=''>
          <h2 className='text-[20px] text-left inter leading-[28px] font-bold text_gradient_recruitment mb-7'>Comprehensive Applicant Management System</h2>
          <p className='inter font-light leading-[24px] text_gradient_recruitment mb-10 text-[14px] text-justify'>Manage the candidate pool effectively with a centralized platform, so your recruiters can track and assess candidates at various stages of the recruitment journey while easily sorting and accessing relevant applicant information</p>
        </div>

        <div className="mb-10">
          <img src="/Recruitment/icons/circle.webp" alt="" className='w-[75px] h-[75px] mx-auto mb-5' />
          <div className='relative z-[2]'>
            <div className='p-5 rounded-md bg-light-white2 shadow-shadow6x'>
              <span className='absolute top-[20px] left-2 lg:left-[20px] w-full h-full bg-light-white z-[-1] rounded-md'></span>
              <h3 className='roboto font-medium text-[16px] leading-[48px] text_gradient_recruitment'>Statistical Display</h3>
              <p className='font-light leading-6 text-[#333]'>Easily track and showcase the total number of applicants, hires, shortlisted, and rejected candidates.</p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <img src="/Recruitment/icons/doc_err.webp" alt="" className='w-[75px] h-[75px] mx-auto mb-5 ' />
          <div className='relative z-[2]'>
            <div className='p-5 rounded-md bg-light-white2 shadow-shadow6x'>
              <span className='absolute top-[20px] left-2 lg:left-[20px] w-full h-full bg-light-white z-[-1] rounded-md'></span>
              <h3 className='roboto font-medium text-[16px] leading-[48px] text_gradient_recruitment'>Candidate Details</h3>
              <p className='font-light leading-6 text-[#333]'>Easily access all applicants’ essential information, including name, email, job type, shift preference, application date, and current hiring process status for applied candidates.</p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <img src="/Recruitment/icons/filter.webp" alt="" className='w-[75px] h-[75px] mx-auto mb-5' />
          <div className='relative z-[2]'>
            <div className='p-5 rounded-md bg-light-white2 shadow-shadow6x'>
              <span className='absolute top-[20px] left-2 lg:left-[20px] w-full h-full bg-light-white z-[-1] rounded-md'></span>
              <h3 className='roboto font-medium text-[16px] leading-[48px] text_gradient_recruitment'>Statistical Display</h3>
              <p className='font-light leading-6 text-[#333]'>Easily sort and find your ideal candidates by narrowing your searches based on job title, type, and shift, simplifying the whole process.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Application_system;