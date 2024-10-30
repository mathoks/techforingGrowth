"use client";
import React, { useState } from 'react';
import "./Res_accordion.css"
import { IoIosArrowDown } from "react-icons/io";

const Res_accordion = ({ faq }) => {
    const [subAccordions, setSubAccordions] = useState(0)
    const [accordions, setAccordions] = useState(0);

    const handleCategories = (index) => {
        if (index === accordions) {
            setAccordions(null)
            return;
        }
        setAccordions(index);
    }

    const handleSubCategories = (index) => {
        if (index === subAccordions) {
            setSubAccordions(null)
            return;
        }
        setSubAccordions(index);
    }


    return (
        <div className='lg:hidden block px-4'>
            <div className=''>
                {
                    faq.map((faqItem, index) => (
                        <div key={index} className='main_faq'>
                            <div className='faq_head bg-[#182F59] px-4 py-2 mb-5' onClick={() => handleCategories(index)}>
                                <h3 className='text-white text-[18px] font-medium roboto'>{faqItem.category}</h3>
                                <IoIosArrowDown className={`${accordions === index ? "faq_arrow F_accordion" : "faq_arrow"} text-white text-[24px]`} />
                            </div>

                            <div className={`${accordions === index ? "categories F_accordion" : "categories"}`} >
                                {
                                    (faqItem.questions).map((subFaq, index) => (
                                        <div key={index} className='overflow-hidden'>
                                            <div className={`${subAccordions === index ? "sub_faq_head sub_F_accordion" : "sub_faq_head"} bg-[#F1F1F1] px-4 py-4 mb-5 rounded-md`} onClick={() => handleSubCategories(index)}>
                                                <h3 className='W-[85%] text-[#333] text-[14px] font-medium roboto'>{subFaq.question}</h3>
                                                <IoIosArrowDown className={`${subAccordions === index ? "sub_faq_arrow sub_F_accordion" : "sub_faq_arrow"} text-[#333] text-[24px] w-[15%]`} />
                                            </div>

                                            <div className={`${subAccordions === index ? "sub_categories sub_F_accordion" : "sub_categories"}  px-4 text-justify`}>
                                                <p className='mb-5 text-[14px]'>{subFaq.answer}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>

                    ))
                }
            </div>
        </div>
    );
};

export default Res_accordion;

// const faq_item = [
//     {headTitle: "HRMS"},
//     {headTitle: "Recruitment"},
//     {headTitle: "Financial Management"}
// ]