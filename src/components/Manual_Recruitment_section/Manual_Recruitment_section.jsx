import React from 'react';
import "./Manual_Recruitment_section.css"

const Manual_Recruitment_section = ({ manual_resource }) => {
    const { headTitle, img1, img2, img3, img4, img5, para, content1, content2, content3, content4, content5, manualImage } = manual_resource;

    return (
        <section className="overflow-x-hidden lg:mt-20 mt-0">
            <div className="main_container flex lg:flex-row flex-col-reverse justify-between items-center lg:pb-[75px] pb-[50px] lg:pt-[75px] pt-0 relative px-4">
                <div className="shape_div hidden lg:block lg:translate-x-[74px] translate-x-0"></div>

                <div className="lg:w-[50%] w-full">
                    <h2 className="text_gradient_recruitment lg:text-[36px] text-[20px] font-bold lg:leading-[50px] leading-[30px] mb-4 lg:pr-[100px] pr-0">{headTitle}</h2>
                    <p className='roboto text-justify leading-6 text-light-gray lg:mb-12 mb-8 lg:ml-[30px] ml-0'>{para}</p>

                    <ul className="manual_list">
                        <li>
                            <img src={img1} alt="" className="inline-block lg:w-[32px] w-[28px] lg:h-[32px] h-[28px]" /><span className="ml-4 font-light leading-6 text-[#494949] lg:text-[16px] text-[14px] text-justify">{content1}</span>
                        </li>
                        <li>
                            <img src={img2} alt="" className="inline-block lg:w-[32px] w-[28px] lg:h-[32px] h-[28px]" /><span className="ml-4 font-light leading-6 text-[#494949] lg:text-[16px] text-[14px] text-justify">{content2}</span>
                        </li>
                        <li>
                            <img src={img3} alt="" className="inline-block lg:w-[32px] w-[28px] lg:h-[32px] h-[28px]" /><span className="ml-4 font-light leading-6 text-[#494949] lg:text-[16px] text-[14px] text-justify">{content3}</span>
                        </li>
                        <li>
                            <img src={img4} alt="" className="inline-block lg:w-[32px] w-[28px] lg:h-[32px] h-[28px]" /><span className="ml-4 font-light leading-6 text-[#494949] lg:text-[16px] text-[14px] text-justify">{content4}</span>
                        </li>
                        <li>
                            <img src={img5} alt="" className="inline-block lg:w-[32px] w-[28px] lg:h-[32px] h-[28px]" /><span className="ml-4 font-light leading-6 text-[#494949] lg:text-[16px] text-[14px] text-justify">{content5}</span>
                        </li>
                    </ul>
                </div>

                <div className="lg:w-[50%] w-full h-[220px] flex items-center justify-center relative lg:mb-0 mb-8">
                    <div className="absolute top-0 left-[50%] w-full h-full bg-light-white lg:hidden block"></div>
                    <div className="lg:w-[380px] w-[120px] lg:h-[380px] h-[120px] image_div">
                        <div>
                            <img src={manualImage} alt="" className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Manual_Recruitment_section;