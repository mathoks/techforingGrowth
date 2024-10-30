import React from 'react';
import './Finance_software_details.css'

const Finance_software_details = ({ details3 }) => {
    const { headTitle, content01, content02, ScreenShot } = details3;

    return (
        <>
        <h2 className='text_gradient_finance inter lg:text-[36px] text-[18px] font-bold lg:mb-10 mb-[30px] lg:mr-[60px] mr-0'>{headTitle}</h2>
            <div className='flex items-center mb-[30px] lg:mr-[60px] mr-0'>
                <img src="/Finance/icons/stroke_color.webp" alt="" />
                <p className='lg:text-[16px] text-[14px] roboto ml-4 lg:leading-6 leading-[22px] text-light-gray font-light'>{content01}</p>
            </div>

            <div className="h-[250px] grid grid-cols-1 items-center relative z-[1] mb-10 lg:hidden block ">
              <div className="bg-light-white res_bg_shape"></div>
                  <img src={ScreenShot} alt="" className="w-[300px] mx-auto object-cover" />
            </div>

            <div className='content_div'>
                <span className='content_div_sub'></span>
                <div className='para_div'>
                    <img src="/Finance/icons/fill_like.webp" alt="" />
                    <p className='lg:text-[16px] text-[14px] roboto ml-5 lg:leading-7 leading-[22px] text-light-gray font-light lg:text-justify text-left'>{content02}</p> 
                </div>
            </div>
        </>
    );
};

export default Finance_software_details;