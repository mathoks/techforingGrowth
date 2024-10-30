"use client"
import { useEffect, useState } from 'react';
import f from '../style/faq.module.css';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { TechForingDragon } from './Icon';
import Link from 'next/link';
import Res_accordion from './Res_accordion/Res_accordion';

const Faq = ({ className, more, category }) => {
  const [accordion, setAccordion] = useState(0);
  const [anim, setAnim] = useState(0);
  const [active, setActive] = useState({
    faq: category ? category : 0,
    question: null,
    height: 0
  });

  //show array
  const show = more ? faq[active.faq]?.questions : faq[active.faq]?.questions?.slice(0, 5);

  useEffect(() =>{
    if(active.faq === 1){
      setAnim(1);
    }
    else if(active.faq === 2){
      setAnim(2);
    }
    else{
        setAnim(0);
    }
  },[active])

  return (
    <>
    <div className='lg:block hidden'>
      <div className={className}>
        <div className="custom-container">
          <h1 className={f.title}>
            Frequently Asked <span>Question</span>
          </h1>
          <p className='text-dark-text-2 text-base font-normal text-center'>Quick answers to questions you may have. Can’t find what you are looking for check you query here.</p>
          <div className='flex lg:flex-row flex-col gap-12 mt-12'>
            <div className={`${f.left} relative z-10`}>
              {
                faq.map((item, index) => (
                  <div key={index} className={`flex justify-between items-center p-[10px] hover:opacity-100 transition-all border-solid border-b-2 cursor-pointer ${parseInt(active.faq) === index ? 'opacity-100' : 'opacity-50'}`}
                    onClick={() => {
                      setActive({
                        faq: index,
                        question: null,
                        more: false
                      });
                    }
                    }
                  >
                    <p className="">{item.category}</p>
                    <IoIosArrowForward />
                  </div>
                ))
              }
              <div className='absolute top-1/2 -left-1/2  -translate-y-1/2 -z-10'>
                <TechForingDragon width='400px' />
              </div>
            </div>
            
            {/*  */}
            <div className={f.right}>
              <div className={`${parseInt(active.faq) === anim ? 'accordion A_active' : 'accordion'}`}>
              {
                show.map((item, index) => (
                  <div key={index} className="mb-6">
                    <div className='bg-[#F1F1F1] rounded-lg py-4 px-6 flex justify-between items-center cursor-pointer text-dark-text-2 text-base font-normal'
                      onClick={() => {
                        setActive(active.question === index ? {
                          ...active,
                          question: null,
                        } : {
                          ...active,
                          question: index,
                          height: document.getElementsByClassName("faq_answer")[index].clientHeight
                        });
                      }}>
                      <p className="">{item.question}</p>
                      <IoIosArrowDown />
                    </div>
                    <div className='overflow-hidden'
                      style={{
                        transition: 'all 0.3s ease-in-out',
                        height: active.question === index ? active.height + 'px' : '0px'
                      }}
                    >
                      <p className="faq_answer px-6 pt-6 text-dark-text-2 text-base font-light">{item.answer}</p>
                    </div>
                  </div>
                ))
              }
              </div>
              {
                faq[active.faq]?.questions?.length > 5 &&
                <div className='flex justify-end'>
                  <Link href={{
                    pathname: '/faq',
                    query: { category: active.faq },
                  }} >
                    <button className='text-primary text-base font-normal p-1 cursor-pointer'
                      onClick={() => {
                        setActive({
                          ...active,
                          more: !active.more
                        })
                      }}
                    >{!more && 'More...'}</button>
                  </Link>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
      </div>
      

      {/* responsive Accordions */}
      <Res_accordion faq={faq} />
    </>
  )
}

export default Faq;

const faq = [
  {
    category: 'HRMS',
    questions: [
      {
        question: 'What is an HRMS (Human Resource Management System)?',
        answer: 'An HRMS, also known as a human resources management system or human resource management software, is a software application that helps HR professionals streamline and automate various HR processes within an organization. It combines multiple HR functions, such as talent management, performance management, benefits administration, and employee record management, into a single system.'
      },
      {
        question: 'How can an HRMS benefit my HR department and workforce management processes?',
        answer: 'An HRMS simplifies and automates HR processes, allowing HR personnel to efficiently manage human resources, from employee onboarding to retirement. It provides comprehensive solutions for employee management, benefits management, payroll processing, attendance tracking, leave management, and more. By centralizing workforce management processes, an HRMS increases efficiency, accuracy, and compliance while reducing administrative burdens.'
      },
      {
        question: 'What core HR functions are typically included in an HRMS?',
        answer: 'An HRMS encompasses a range of core HR functions, including employee record management, HR data storage and retrieval, payroll processing, benefits administration, attendance tracking, leave management, employee scheduling, and performance management. It serves as a central repository for all employee information and facilitates seamless HR operations.'
      },
      {
        question: 'How does an HRMS contribute to employee engagement and development?',
        answer: 'An HRMS often features an employee self-service portal, where employees can access their personal information, view pay stubs, request leaves, and participate in training programs. By empowering employees with self-service capabilities, an HRMS promotes employee engagement and development. It allows employees to take ownership of their information and career growth while reducing reliance on HR personnel for routine HR transactions.'
      },
      {
        question: 'How does an HRMS help in talent management and succession planning?',
        answer: 'An HRMS provides tools and functionalities for talent management, including applicant tracking, performance evaluations, training resources, and succession planning. It assists in identifying and nurturing top talent within the organization, aligning employee interests with organizational goals, and developing a robust talent pool for future leadership positions.'
      },
      {
        question: 'Can an HRMS integrate with other systems, such as payroll or learning management systems?',
        answer: 'Yes, many HRMS systems are designed to integrate seamlessly with other software applications, such as payroll modules or learning management systems (LMS). This integration ensures a smooth flow of data between systems, eliminates manual data entry, and enables efficient management of HR activities in a unified manner.'
      },
      {
        question: 'How does an HRMS ensure data security and privacy?',
        answer: 'An HRMS employs various measures to ensure data security and privacy. This may include data encryption, access controls, user authentication, role-based permissions, and regular data backups. Cloud-based HRMS solutions often provide robust security features and adhere to industry-standard security protocols to safeguard system data.'
      },
      {
        question: 'Can an HRMS provide predictive analytics and insights for HR decision-making?',
        answer: 'Yes, many advanced HRMS systems incorporate predictive analytics capabilities. By analyzing HR data, such as employee performance, turnover rates, and key performance indicators (KPIs), an HRMS can provide valuable insights for HR professionals to make data-driven decisions. These insights can help optimize workforce management, identify areas for improvement, and align HR strategies with business goals.'
      },
      {
        question: 'Are there mobile applications available for accessing an HRMS on the go?',
        answer: 'Yes, many HRMS solutions offer mobile applications allowing employees and HR staff to access the system data, perform HR transactions, and stay connected while moving. These mobile applications enhance accessibility and convenience, enabling users to manage HR activities anytime, anywhere.'
      },
      {
        question: ' Can I try out an HRMS software before implementing it in my organization?',
        answer: 'Yes, many HRMS vendors offer free trials or demos of their software. This allows organizations to evaluate the features, user interface, and compatibility of the HRMS with their business landscape before making a commitment. It\'s recommended to take advantage of such trials to ensure the chosen HRMS meets your organization\'s specific needs.'
      },
    ]
  },
  {
    category: 'Recruitment',
    questions: [
      {
        question: 'What is a recruitment module in an HRMS?',
        answer: 'The recruitment module is a component of an HRMS (Human Resources Management System) that automates and streamlines the recruitment process. It assists HR professionals in managing job requisitions, applicant tracking, resume screening, interview scheduling, offer management, and onboarding.'
      },
      {
        question: 'How does the recruitment module benefit HR professionals?',
        answer: 'The recruitment module simplifies and accelerates the recruitment process, saving time and effort for HR professionals. It provides a centralized platform for managing job openings, tracking candidates, and coordinating interviews. Additionally, it enables data-driven decision-making by offering recruitment metrics and analytics.'
      },
      {
        question: 'Can the recruitment module integrate with other HR systems?',
        answer: 'Yes, the recruitment module can integrate with other HR systems such as learning management systems (LMS) and enterprise resource planning (ERP) systems. The integration allows for seamless data flow and leveraging additional resources for recruitment purposes'
      },
      {
        question: 'Does the recruitment module offer self-service capabilities for candidates?',
        answer: 'Yes, many HRMSs with a recruitment module include an employee self-service portal. Candidates can create profiles, submit applications, track their application status, and complete necessary documentation conveniently.'
      },
      {
        question: 'How does data encryption ensure the security of candidate information?',
        answer: 'Data encryption is a security measure implemented in HRMSs to protect sensitive candidate information from unauthorized access or breaches. It ensures that data remains encrypted and secure while stored or transmitted within the system.'
      },
      {
        question: 'Can the recruitment module utilize predictive analytics and machine learning?',
        answer: 'Yes, many HRMS systems are designed to integrate seamlessly with other software applications, such as payroll modules or learning management systems (LMS). This integration ensures a smooth flow of data between systems, eliminates manual data entry, and enables efficient management of HR activities in a unified manner.'
      },
      {
        question: 'What are the key features of a recruitment module?',
        answer: 'Key features of a recruitment module include job requisition management, applicant tracking, resume screening, interview scheduling, offer management, and onboarding. Other features may include integration with HRIS (Human Resources Information System), attendance tracking, and reporting capabilities.'
      },
      {
        question: 'Is the recruitment module suitable for organizations of all sizes?',
        answer: 'Yes, the recruitment module is designed to cater to the needs of organizations of all sizes. It provides scalable solutions for efficient recruitment management, whether for small businesses or large enterprises.'
      },
      {
        question: 'Can the recruitment module help improve the candidate experience?',
        answer: 'Yes, the recruitment module can enhance the candidate experience by providing a user-friendly application process, timely communication, and transparent status updates. It streamlines the recruitment process, making it more efficient and engaging for candidates.'
      },
      {
        question: 'How can I evaluate the effectiveness of my recruitment efforts using the recruitment module?',
        answer: 'The recruitment module typically offers HR metrics and analytics, allowing you to track and measure recruitment performance. Key performance indicators (KPIs) such as time-to-fill, cost-per-hire, and source effectiveness can provide insights into the effectiveness of your recruitment efforts.'
      },
    ]
  },
  {
    category: 'Financial Management',
    questions: [
      {
        question: 'What is the accounting module in an HRMS?',
        answer: 'The accounting module in an HRMS refers to the functionality that allows organizations to manage financial transactions and track expenses within the same system used for human resources management. It provides a seamless integration of HR and financial processes.'
      },
      {
        question: 'How does the accounting module benefit HR processes?',
        answer: 'The accounting module automates financial tasks, such as payroll processing, benefits administration, and expense management. It reduces manual efforts, improves accuracy, and ensures compliance with financial regulations, enhancing overall HR efficiency.'
      },
      {
        question: 'Can the accounting module handle core HR functions?',
        answer: 'Yes, the accounting module in an HRMS can handle core HR functions like payroll management, employee benefits administration, and employee scheduling. It provides a comprehensive solution for managing both financial and human resource aspects.'
      },
      {
        question: 'Does the accounting module integrate with other HR modules?',
        answer: 'Absolutely! The accounting module seamlessly integrates with other modules in the HRMS, such as the employee self-service portal, talent management, and performance management. This integration offers a unified platform for managing the entire employee lifecycle.'
      },
      {
        question: 'What are the key features of an accounting module in an HRMS?',
        answer: 'The accounting module typically includes features such as payroll processing, benefits management, expense tracking, financial reporting, and compliance management. It may also provide features like attendance tracking, leave management, and employee self-service capabilities.'
      },
      {
        question: 'How does the accounting module ensure data security?',
        answer: 'The accounting module prioritizes data security by employing encryption techniques and following industry-standard security practices. It safeguards employee data and system information, ensuring confidentiality and protecting against unauthorized access.'
      },
      {
        question: 'Can the accounting module generate reports and analytics?',
        answer: 'Yes, the accounting module offers robust reporting capabilities. It provides HR professionals with key metrics and insights related to payroll, expenses, and financial performance. It may also leverage predictive analytics and machine learning to facilitate data-driven decision-making.'
      },
      {
        question: 'Does the accounting module support payroll processing?',
        answer: 'Absolutely! The accounting module includes a payroll module that streamlines the process of running payroll, calculating salaries, deductions, and taxes. It ensures accurate and timely payment to employees while automating tax calculations and generating payroll reports.'
      },
      {
        question: 'Is the accounting module cloud-based or available as a software application?',
        answer: 'The accounting module can be offered as both a cloud-based HRMS solution and a software application. Cloud-based systems offer the advantage of accessibility from anywhere, while software applications provide greater control over data within the organization\'s infrastructure.'
      },
      {
        question: 'Are free trials available for the accounting module in HRMS systems?',
        answer: 'Some HRMS vendors offer free trials for their accounting modules, allowing organizations to evaluate the software\'s suitability and functionality. Free trials provide an opportunity to explore the features and capabilities of the accounting module before making a purchase decision.'
      },
    ]
  },
]