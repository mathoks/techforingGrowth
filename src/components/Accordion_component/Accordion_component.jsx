import { useState } from 'react';
import './Accordion_component.css'
import { IoIosArrowDown } from 'react-icons/io';

const Accordion_component = ({ accordion_list, titleColor, subtitle }) => {
  const [open, setOpen] = useState(null);

  const handleAccordion = (index) => {
    if (index === open) {
      setOpen(null);
      return;
    }
    setOpen(index);
  }

  return (
    <section className='px-4'>
      <div className='main_container'>
        <div className='lg:mb-20 mb-8'>
          <h2 className={`text-[#15284D] inter lg:text-[36px] text-[18px] font-bold lg:leading-[52px] leading-[22px] mb-4 text-center`} style={{ color: titleColor }}>
            Frequently Asked Question
          </h2>
          {
            subtitle && <p className='lg:text-[16px] text-[14px] mt-4 md:mt-6 leading-6 md:leading-[20px] text-[#333] text-center'>{subtitle}</p>
          }
          {/* <p className='lg:text-[16px] text-[14px] lg:leading-6 leading-[20px] text-[#333] text-center'>Quick answers to questions you may have. Can’t find what you are looking for check you query here.</p> */}
        </div>
        <div className='main_accordions'>
          {
            accordion_list?.map((list, index) => <div key={index} className='accordions mb-6'>
              <div onClick={() => handleAccordion(index)} className={`py-[16px] px-[24px] flex justify-between items-center ${open === index ? "accordion_head active" : "accordion_head"}`}>
                <h3 className='lg:text-[16px] text-[14px] text-[#333] w-[90%] '> {list.headContent || list.question}</h3>
                <div className='w-[10%] flex justify-end'>
                  {
                    open === index ? <IoIosArrowDown className='w-[24px] h-[24px] rotate-[180deg] transition_all' /> :
                      <IoIosArrowDown className='w-[24px] h-[24px] rotate-0 transition_all' />
                  }
                </div>
              </div>
              <div className={`${open === index ? "accordion_paragraph active" : "accordion_paragraph"}`}>
                <p className='lg:text-[16px] text-[14px] text-[#333] leading-7 font-light'>{list.paraContent || list.answer } </p>
              </div>
            </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default Accordion_component;