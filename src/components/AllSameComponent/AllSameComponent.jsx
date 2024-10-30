import './src/app/globals.css';
import Manual_HR_section from "../../Component/Manual_HR_section/Manual_HR_section";
import img1 from "@/HRMS/icons/paper.webp";
import img2 from "@/HRMS/icons/document.webp";
import img3 from "@/HRMS/icons/all_people.webp";
import img4 from "@/HRMS/icons/desktop.webp";
import img5 from "@/HRMS/icons/list.webp";
import manualImage from "@/HRMS/HRMS_Employee_management.webp";
import business_team from "@/HRMS/business_team_1.webp";
import footer_end_img from "@/HRMS/footer_end_1.webp";
import ScreenShot01 from "@/HRMS/screenshot_1.webp";
import Software_details_content from '../Software_details_content/Software_details_content';
import Accordion_component from '../Accordion_component/Accordion_component';
import img_png from '@/HRMS/p1.webp';
import blob from '@/HRMS/combine_image/blob.webp';
import person from '@/HRMS/combine_image/person.webp';
import main_frame from '@/HRMS/combine_image/main-frame.webp';
import Frame_1 from '@/HRMS/combine_image/Frame-1.webp';
import Frame_2 from '@/HRMS/combine_image/Frame-2.webp';
import { useEffect, useState } from 'react';
import emp_management from "@/HRMS/icons/employee_management.webp";
import attend_management from "@/HRMS/icons/attendance_management.webp";
import perform_management from "@/HRMS/icons/performance_management.webp";
import fund_management from "@/HRMS/icons/funds.webp";
import report_management from "@/HRMS/icons/report_management.webp";
import notice_management from "@/HRMS/icons/noticeboard_management.webp";
import document_management from "@/HRMS/icons/document_management.webp";
import HRMS_Banner_section from '../HRMS_Banner_section/HRMS_Banner_section';
import person_2 from "@/HRMS/person-2.webp";
import business_person_banner from '@/HRMS/business_person_banner.webp';
import coin from "@/HRMS/coin.webp";
import { useGlobalContext } from '@/context/globalContext';
import { Button } from '../SharedComponents';

const AllSameComponent = () => {
    const { setOpenScheduleForm } = useGlobalContext();
    const [isAnimated, setIsAnimated] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [frame1, setFrame1] = useState(false);
    const [frame2, setFrame2] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 595) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const mainFrameElement = document.querySelector('.main_frame');
        const frame_1_Element = document.querySelector('.Frame_1');
        const frame_2_Element = document.querySelector('.Frame_2');

        const handleScroll = () => {
            const mainFrameOffsetTop = mainFrameElement.offsetTop;
            const frame_1_OffsetTop = frame_1_Element.offsetTop;
            const frame_2_OffsetTop = frame_2_Element.offsetTop;
            const scrollPosition = window.scrollY + window.innerHeight;

            // Check if the main_frame is within the viewport
            if (scrollPosition >= mainFrameOffsetTop + 50) {
                setTimeout(() => setIsAnimated(true), 1000);
            } else {
                setIsAnimated(false);
            }

            if (scrollPosition >= frame_1_OffsetTop) {
                setTimeout(() => setFrame1(true), 2000);
            } else {
                setFrame1(false);
            }

            if (scrollPosition >= frame_2_OffsetTop) {
                setTimeout(() => setFrame2(true), 3000);
            } else {
                setFrame2(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // For Manual_HR_Section system follow up
    const manual_resource = {
        headTitle: "Challenges of Manual HR Management",
        img1: img1,
        img2: img2,
        img3: img3,
        img4: img4,
        img5: img5,
        manualImage: manualImage,
        content1: "Getting stuck with large volumes of paperwork",
        content2: "Losing track of former employees’ data",
        content3: "Overall disarray in administration",
        content4: "Struggles with workplace planning",
        content5: "Inability to maintain a consistent employee evaluation"
    }

    ///
    const details = {
        headTitle: "Automate Record-Keeping for Efficiency",
        content01: "Maintaining and updating employee records manually is time-consuming and riddled with errors.",
        content02: "Streamline your HR operations by automating record management to ensure accurate and up-to-date employee information is readily accessible, right at your fingertips."
    }

    ///  Accordion list element
    const accordion_list = [
        {
            headContent: "What is the Report Management Module, and why is it important for HR professionals?",
            paraContent: "The Report Management Module is a feature in our HRMS software that centralizes and automates the management of various HR-related reports. It is crucial for HR professionals as it streamlines report handling, saves time, reduces errors, and empowers data-driven decision-making."
        },
        {
            headContent: "How does the Performance Report feature benefit HR teams?",
            paraContent: "The Performance Report feature allows HR professionals to store and access detailed performance data for each employee, including KPI scores, attendance, and punctuality. This enables better tracking, analysis, and management of employee performance, ultimately leading to improved productivity."
        },
        {
            headContent: "How can the Attendance Report feature help in optimizing workforce management?",
            paraContent: "The Attendance Report feature simplifies attendance management by providing comprehensive monthly attendance records. HR can use this data to identify attendance patterns, ensure accurate payroll processing, and optimize workforce management for enhanced operational efficiency."
        },
        {
            headContent: "How does the Leave Report feature simplify employee leave management?",
            paraContent: "The Leave Report feature automates leave management, offering detailed reports on each employee's total number of leaves, leaves taken, and remaining leave balance. This simplifies leave tracking, reduces disputes, and provides insights into leave trends."
        },
        {
            headContent: "What types of invoices can be managed using the Invoice Report feature?",
            paraContent: "The Invoice Report feature centralizes various types of invoices, including estimates, expenses, personal expenses, assets, and payslips. It simplifies financial record management and reporting."
        },
        {
            headContent: "How does the Payslip and Commission Slip Report feature ensure transparency in remuneration tracking?",
            paraContent: "The Payslip and Commission Slip Report feature provides a transparent view of each employee's monthly salary and commission amounts. This ensures accurate payment distribution, streamlines payroll administration, and fosters trust between HR and employees."
        },
        {
            headContent: "What financial insights can be gained through the Expense Report feature?",
            paraContent: "The Expense Report feature tracks yearly expenses and assets, offering valuable insights into financial trends. HR can optimize budgeting, enhance financial transparency, and make informed financial decisions for the organization's future success."
        },
        {
            headContent: "Is the Report Management Module customizable to meet our organization's specific needs?",
            paraContent: "Yes, the Report Management Module is customizable. You can tailor reports to match your organization's unique requirements, ensuring that you get the data and insights that matter most to you."
        },
        {
            headContent: " How does the automation feature in the Report Management Module save time for HR professionals?",
            paraContent: "The automation feature in the Report Management Module automates tasks such as report compilation and updates, reducing the time spent on manual data entry and management."
        },
        {
            headContent: " Can you provide training and support for using the Report Management Module effectively?",
            paraContent: "Yes, we offer comprehensive training and ongoing support to ensure that HR professionals can fully utilize the Report Management Module's capabilities. Our dedicated support team is here to assist you every step of the way."
        }
    ]


    const handleSlide1 = () => {
        const sub_color_line = document.querySelector(".sub_color_line");
        const para_resize = document.querySelector(".para_resize");
        const head_resize = document.querySelector(".head_resize");
        const click_btn_2 = document.querySelector(".click_btn2");
        const click_btn_3 = document.querySelector(".click_btn3");

        sub_color_line.style.width = "0%";
        click_btn_2.style.background = "transparent";
        click_btn_3.style.background = "transparent";
        para_resize.style.transform = "translateX(0%)";
        head_resize.style.transform = "translateX(0%)";
    }

    const handleSlide2 = () => {
        const sub_color_line = document.querySelector(".sub_color_line");
        const para_resize = document.querySelector(".para_resize");
        const head_resize = document.querySelector(".head_resize");
        const click_btn_2 = document.querySelector(".click_btn2");
        const click_btn_3 = document.querySelector(".click_btn3");

        sub_color_line.style.width = "50%";
        click_btn_2.style.background = "conic-gradient(from -47deg at 70.61% 68.88%, rgba(76, 87, 107, 0.05) 0deg, rgba(0, 0, 0, 0.07) 360deg), radial-gradient(50.59% 50.59% at 30.4% 40.06%, rgba(24, 47, 89, 0.20) 0%, rgba(92, 126, 188, 0.20) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)";
        click_btn_3.style.background = "transparent";
        para_resize.style.transform = "translateX(-33.5%)";
        head_resize.style.transform = "translateX(-33%)";
    }

    const handleSlide3 = () => {
        const sub_color_line = document.querySelector(".sub_color_line");
        const para_resize = document.querySelector(".para_resize");
        const head_resize = document.querySelector(".head_resize");
        const click_btn_2 = document.querySelector(".click_btn2");
        const click_btn_3 = document.querySelector(".click_btn3");

        sub_color_line.style.width = "100%";
        click_btn_2.style.background = "conic-gradient(from -47deg at 70.61% 68.88%, rgba(76, 87, 107, 0.05) 0deg, rgba(0, 0, 0, 0.07) 360deg), radial-gradient(50.59% 50.59% at 30.4% 40.06%, rgba(24, 47, 89, 0.20) 0%, rgba(92, 126, 188, 0.20) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)";
        click_btn_3.style.background = "conic-gradient(from -47deg at 70.61% 68.88%, rgba(76, 87, 107, 0.05) 0deg, rgba(0, 0, 0, 0.07) 360deg), radial-gradient(50.59% 50.59% at 30.4% 40.06%, rgba(24, 47, 89, 0.20) 0%, rgba(92,pages_list 126, 188, 0.20) 100%), linear-gradient(143deg, #182F59 25.94%, #020F26 85.35%)";
        para_resize.style.transform = "translateX(-67.5%)";
        head_resize.style.transform = "translateX(-67%)";
    }


    return (
        <>
            <HRMS_Banner_section />

            {/* routing pages list section */}
            <div className={`pages_list main_container ${isSticky ? 'sticky' : ''} hidden`}>
                <ul className='route_list'>
                    <li>
                        <img src={emp_management} alt="" className='route_image' />
                        <div className='ml-4 leading-6 text-[12px]'>
                            <p>Employee</p>
                            <p>Management</p>
                        </div>
                    </li>
                    <li>
                        <img src={attend_management} alt="" className='route_image' />
                        <div className='ml-4 leading-6 text-[12px]'>
                            <p>Attendance</p>
                            <p>Management</p>
                        </div>
                    </li>
                    <li>
                        <img src={perform_management} alt="" className='route_image' />
                        <div className='ml-4 leading-6 text-[12px]'>
                            <p>Performance</p>
                            <p>Management</p>
                        </div>
                    </li>
                    <li>
                        <img src={notice_management} alt="" className='route_image' />
                        <div className='ml-4 leading-6 text-[12px]'>
                            <p>Noticeboard</p>
                            <p>Management</p>
                        </div>
                    </li>
                    <li>
                        <img src={report_management} alt="" className='route_image' />
                        <div className='ml-4 leading-6 text-[12px]'>
                            <p>Report</p>
                            <p>Management</p>
                        </div>
                    </li>
                    <li>
                        <img src={document_management} alt="" className='route_image' />
                        <div className='ml-4 leading-6 text-[12px]'>
                            <p> Documents</p>
                            <p>Management</p>
                        </div>
                    </li>
                    <li>
                        <img src={fund_management} alt="" className='route_image' />
                        <div className='ml-4 leading-6 text-[12px]'>
                            <p>Funds</p>
                            <p>Management</p>
                        </div>
                    </li>
                </ul>
            </div>
            {/* routing pages list section */}

            {/* animated section */}
            <section className='py-[50px] px-4'>
                <div className='main_container flex lg:flex-row flex-col-reverse justify-between items-center'>
                    <div className="lg:w-[45%] w-full">
                        <h2 className='noto text_gradient lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-4'>Employee Management Made Easy</h2>
                        <p className='roboto text-light-gray font-light text-[14px] lg:text-[16px] lg:leading-7 leading-[24px] text-justify lg:ml-0 ml-3'>Overwhelming amount of HR tasks slowing you down? It’s time to change your approach to employee management! Revolutionize your company’s HR processes and unlock unparalleled efficiency with TechForing Human! Our Employee Module is the ultimate solution for streamlining your workforce management and taking your organization to the next level.</p>
                    </div>

                    <div className="lg:w-[55%] w-full flex justify-end lg:mb-0 mb-16">
                        <div className='lg:w-[530px] w-[200px] lg:mx-0 mx-auto lg:h-[395px] h-full relative'>
                            <img src={blob} alt="" />
                            <img src={main_frame} alt="" className={`main_frame ${isAnimated ? 'animate' : ''}`} />
                            <img src={person} alt="" className='absolute bottom-[0px] left-[50%] translate-x-[-50%]' />
                            <img src={Frame_1} alt="" className={`Frame_1 ${frame1 ? 'animate' : ''}`} />
                            <img src={Frame_2} alt="" className={`Frame_2 ${frame2 ? 'animate' : ''}`} />
                        </div>
                    </div>
                </div>
            </section>

            <Manual_HR_section manual_resource={manual_resource} />

            {/* Business team section  */}
            <section className="lg:py-[110px] py-[20px] px-4 relative bg-[#FFF] shadow-shadow1x text-[#FAFAFA]">
                <div className="main_container flex justify-between items-center">
                    <div className="w-[50%] ml-auto lg:pl-[50px] pl-0">
                        <h3 className="inter font-light lg:text-[34px] text-[16px] mb-2 lg:text-center text-left lg:leading-[48px] leading-[22px]"><span className="text_gradient">Still Stuck With </span> <span className="text-green font-semibold">Manual HR</span> <span className="text_gradient">Process?</span></h3>
                        <p className="text_gradient font-medium lg:text-[18px] text-[9px] lg:leading-[37px] leading-[13.5px] lg:text-center text-left">Boost Productivity and Empower Your Workforce with Our Smart Employee Attendance Management Solution</p>
                        <div className="lg:mt-10 mt-5 text-left">
                            <Button className={'action_btn'} text={'Explore More'} onClick={() => setOpenScheduleForm(true)} />
                        </div>
                    </div>
                </div>

                <div className="image_container">
                    <img src={business_team} alt="" className="business_image" />
                </div>
            </section>

            {/* Left data schedule field */}
            <section className='lg:py-[100px] py-[40px] relative px-4'>
                <div className='main_container flex_container'>
                    <div className='lg:w-[50%] w-full'>
                        <Software_details_content details={details} />
                    </div>
                </div>

                <div className='div_shape_line_right lg:block hidden'></div>
                <div className='absolute top-[50%] translate-y-[-50%] right-0 w-[640px] h-[440px] lg:block hidden'>
                    <img src={ScreenShot01} alt="" className='w-full h-full' />
                </div>
            </section>

            {/* working flow section */}
            <section className='working_flow px-4 relative lg:py-[100px] py-5'>
                <img src={business_person_banner} alt="" className='lg:object-none object-cover w-[45%] h-[100%] absolute top-0 right-0 ' />

                <div className='max-w-[1040px] mx-auto flex justify-between items-center'>
                    <div className="w-[50%]">
                        <h2 className='inter lg:text-[37.5px] text-[15px] mb-2 font-semibold lg:leading-[48px] leading-[22px]'><span className='text_gradient'>Elevate Your</span> <span className='text-green'>HR</span> <span className='text_gradient'>Workflow</span></h2>
                        <h4 className='inter lg:text-[18px] text-[7.2px] mb-2 lg:leading-9 leading-2'>Experience the Future of HR management Today !</h4>
                        <div className="lg:mt-10 mt-2 text-left">
                            <Button className={'action_btn'} text={'Get A Demo'} onClick={() => setOpenScheduleForm(true)} />
                        </div>
                    </div>
                </div>
            </section>

            {/* next level section */}
            <section className='next_level px-4 relative lg:py-0 py-5'>
                <img src={person_2} alt="" className=' h-[100%] absolute top-0 right-[10px] lg:hidden block' />
                <div className='main_container flex justify-between items-center max-sm:py-3'>
                    <div className="w-[50%]">
                        <h4 className='inter lg:text-[18px] text-[7.2px] mb-2 lg:leading-9 leading-2'>Efficiency, Accuracy and Transparency</h4>
                        <h2 className='inter lg:text-[37.5px] text-[15px] font-semibold lg:leading-[48px] leading-[22px]'><span className='text_gradient'>Take Your</span> <span className='text-green'>HR</span> <span className='text_gradient'>Management to the Next Level!</span></h2>
                        <div className="lg:mt-10 mt-2 text-left">
                            <Button className={'action_btn'} text={'Start Today'} onClick={() => setOpenScheduleForm(true)} />
                        </div>
                    </div>
                    <div className="w-[50%] lg:block hidden">
                        <img src={person_2} alt="" className='w-[420px] mx-auto' />
                    </div>
                </div>
            </section>

            {/* Frequently Ask Questions */}
            <Accordion_component accordion_list={accordion_list} />

            {/* Employee organization */}
            <section className='employee_organized'>
                <div className='main_container flex lg:flex-row flex-col justify-between lg:items-end items-center lg:gap-12 gap-0'>
                    <div className='lg:w-[55%] w-full'>
                        <div className='number_div'>
                            <h5 className='lg:text-[82px] text-[41px] sura leading-[16.5px] flex items-end text-[#FFF]'>71 <span className='lg:text-[41px] text-[20px] block'>%</span></h5>
                        </div>
                        <p className='inter lg:text-[28px] text-[14px] lg:leading-[48.5px] leading-[24px] font-light text-center text-[#FFF]'>of Employees Think They’ll be More Motivated & Engaged With Proper Recognition</p>
                    </div>

                    <div className='middle_hr mt-4 mb-4'></div>

                    <div className='lg:w-[45%] w-full left_line'>
                        <h3 className='inter lg:text-[37.5px] text-[16px] lg:leading-[38.5px] leading-[24px] text-center lg:text-left w-[60%] lg:w-full mx-auto lg:mx-0 text-[#FFF]'><span className='text-green font-semibold'>Improve</span> Employee Recognition of Your Organization!</h3>
                        <div className="lg:mt-[30px] mt-5 text-center lg:text-left">
                            <Button className={'action_btn2'} text={'Start Today'} onClick={() => setOpenScheduleForm(true)} />
                        </div>
                    </div>
                </div>
            </section>

            {/* banner-marketing section */}
            <section className='banner-marketing hidden'>
                <img src={img_png} alt="" className='image_container' />
                <div className='position_content'>
                    <h3 className='lg:text-[37.5px] text-[14px] lg:leading-[65px] leading-4 lg:mb-7 mb-1 lg:text-left text-center'><span className='lg:text-[125px] text-[16px] text-green sura'>80</span><span className='lg:text-[75px] text-[16px] text-green sura'>%</span> <span className='inter text_gradient font-light'>of business <br /> Worldwide Use an HR Software</span></h3>
                    <div className='flex lg:flex-row flex-col items-center lg:mb-0 mb-[6px]'>
                        <h5 className='inter font-semibold lg:text-[18px] text-[10px]'><span className='text_gradient'>Get The Best</span> <span className='text-green lg:text-[32px] text-[12px]'>HRMS</span> <span className='text_gradient'>Today</span></h5>
                        <div className='mt-[6px]'>
                            <Button className={'action_btn'} text={'Contact Us'} onClick={() => setOpenScheduleForm(true)} />
                        </div>
                    </div>
                </div>
            </section>

            {/* footer bottom CTA (common) */}
            <section className="mt-10 footer_end_part">
                <div className="main_container">
                    <div className="lg:w-[50%] w-full mx-auto text-center">
                        <img src={footer_end_img} alt="" className="block mx-auto mb-5 lg:w-[198px] w-[100px]" />
                        <h2 className="inter lg:text-[28px] text-[15px] text-light-white2 font-normal"><span className="text-green lg:text-[37.5px] text-[15px] font-semibold">Upgrade</span> Your Employee Fund Processes With <span className="lg:text-[37.5px] text-[15px] font-semibold">TechForing Growth</span></h2>
                        <div className="lg:mt-[30px] mt-5  flex justify-center">
                            <Button className={'action_btn2'} text={'Contact Us'} onClick={() => setOpenScheduleForm(true)} />
                        </div>
                    </div>
                </div>
            </section>

            {/* responsive for custom carousel/slider */}
            <div className='px-4 py-10 lg:hidden block'>
                <div className='card_div mb-16'>
                    <div className='flex items-center mb-4'>
                        <img src={coin} alt="" className='mr-4' />
                        <div className='head_resize_div'>
                            <div className='head_resize'>
                                <div className='head_part_div'>
                                    <h3 className='font-bold leading-[22px] text-light-gray'>Effortless Gratuity  <br /> Management</h3>
                                </div>
                                <div className='head_part_div'>
                                    <h3 className='font-bold leading-[22px] text-light-gray'>Provident Fund</h3>
                                </div>
                                <div className='head_part_div'>
                                    <h3 className='font-bold leading-[22px] text-light-gray'>Medical Fund</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='para_resize_div'>
                        <div className='para_resize'>
                            <div className='part_part_div'>
                                <p className='font-light text-[14px] text-light-gray leading-[22px] text-justify'>Simplify pension and financial obligation compliance with automated gratuity management integrated seamlessly with your payroll system.</p>
                            </div>
                            <div className='part_part_div'>
                                <p className='font-light text-[14px] leading-[22px] text-justify text-light-gray'>Simplify pension and financial obligation compliance with automated gratuity management integrated seamlessly with your payroll system.</p>
                            </div>
                            <div className='part_part_div'>
                                <p className='font-light text-[14px] leading-[22px] text-justify text-light-gray'>Simplify pension and financial obligation compliance with automated gratuity management integrated seamlessly with your payroll system.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-[70%] mx-auto'>
                    <ul className='slide_btn flex justify-between items-center relative'>
                        <div className='color_line'>
                            <div className='sub_color_line'></div>
                        </div>
                        <span className='slide_1' onClick={handleSlide1}>
                            <span className='click_btn1'></span>
                        </span>
                        <span className='slide_2' onClick={handleSlide2}>
                            <span className='click_btn2'></span>
                        </span>
                        <span className='slide_3' onClick={handleSlide3}>
                            <span className='click_btn3'></span>
                        </span>
                    </ul>
                </div>
            </div>


        </>
    );
};

export default AllSameComponent;