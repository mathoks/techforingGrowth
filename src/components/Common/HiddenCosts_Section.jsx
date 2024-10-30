import React from 'react';
import "./common-styles.css"

const Hidden_Costs_Section = ({ data, textColor }) => {
    const { headTitle, featImage, description, contents } = data;

    return (
        <section className="overflow-x-hidden lg:mt-20 mt-0">
            <div className="main_container flex lg:flex-row flex-col-reverse justify-between items-center lg:pb-[75px] pb-[50px] lg:pt-[75px] pt-0 relative px-4">
                <div className="shape_div hidden lg:block lg:translate-x-[74px] translate-x-0"></div>

                <div className="lg:w-[50%] w-full">
                    <h2
                        className="lg:text-[36px] text-[20px] font-bold lg:leading-[50px] leading-[30px] mb-4 lg:pr-[100px] pr-0"
                        style={{ color: textColor }}
                    >
                        {headTitle}
                    </h2>
                    <p className='roboto text-justify leading-6 text-light-gray lg:mb-[24px] mb-4 lg:ml-[25px] ml-0'>{description}</p>

                    <ul className=" px-4">
                        {
                            contents.map((item, index) => (
                                <li key={index} className='flex items-center gap-[10px] mb-[26px]'>
                                    <span className="inline-block" >
                                        {item.icon}
                                    </span>
                                    <span className="ml-4 font-light leading-6 text-[#494949] lg:text-[16px] text-[14px] text-justify">{item.paragraph}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="lg:w-[50%] w-full h-[220px] flex items-center justify-center relative lg:mb-0 mb-8">
                    <div className="absolute top-0 left-[50%] w-full h-full bg-light-white lg:hidden block"></div>
                    <div className="lg:w-[380px] w-[120px] lg:h-[380px] h-[120px] image_div">
                        <div>
                            <img src={featImage} alt="" className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hidden_Costs_Section;