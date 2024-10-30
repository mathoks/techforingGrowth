"use client"
import Accordion_component from '@/components/Accordion_component/Accordion_component';
import Manual_Finanace_section from '@/components/Manual_Finanace_section/Manual_Finanace_section';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { useGlobalContext } from "@/context/globalContext";
import { Button } from '@/components/SharedComponents';
import FooterCTA from '@/section/FooterCTA';
import StyledCTA from "@/section/StyledCTA";
const Asset = () => {
  const { setOpenScheduleForm } = useGlobalContext();

  // For Manual_Finance_Section system follow up
  const manual_resource = {
    headTitle: "Challenges of Manual Asset Tracking",
    img1: "/Finance/Asset/icons/pc_doc.webp",
    img2: "/Finance/Asset/icons/doc_err.webp",
    img3: "/Finance/Asset/icons/calculator.webp",
    img4: "/Finance/Asset/icons/doc_secure.webp",
    img5: "/Finance/Asset/icons/yes_no.webp",
    manualImage: "/Finance/Asset/Finance_asset.webp",
    content1: "Human errors in data entry can result in inaccurate asset records, impacting financial reporting.",
    content2: "Incomplete or inaccurate asset records increase the risk of asset loss or theft.",
    content3: "Errors in asset records can lead to incorrect financial calculations and budgeting.",
    content4: "Manual systems may lack robust security measures, putting sensitive asset information at risk.",
    content5: "It's challenging to have real-time visibility into asset status, leading to delays in decision-making."
  }

  /// employee details list
  const employee_data = [
    {
      img: "/Finance/Asset/icons/group_01.webp",
      head: "Boost Efficiency",
      content: "Ditch manual asset tracking for our seamless, automated system."
    },
    {
      img: "/Finance/Asset/icons/Group_02.webp",
      head: "Customized Categories",
      content: "Tailor asset classNameifications to perfectly fit your organization's specific requirements."
    },
    {
      img: "/Finance/Asset/icons/Group_03.webp",
      head: "Instant Insights",
      content: "Access real-time data on asset value, status, and maintenance history at your fingertips."
    },
    {
      img: "/Finance/Asset/icons/Group_04.webp",
      head: "Precision Analysis",
      content: "Calculate asset category distribution percentages for well-informed decision-making."
    },
    {
      img: "/Finance/Asset/icons/Group_05.webp",
      head: "Effortless Retrieval",
      content: "Quickly locate asset entries with our user-friendly, filter-based search."
    },
    {
      img: "/Finance/Asset/icons/Group_06.webp",
      head: "Intuitive Interface",
      content: "Experience asset management made easy through our user-friendly platform."
    }
  ]

  ///  Accordion list element
  const accordion_list = [
    {
      headContent: "What is the Asset Management module, and how does it work?",
      paraContent: "The Asset Management module is a software solution designed to streamline and automate the process of tracking and managing assets within an organization. It works by providing tools and features that allow you to input, monitor, and optimize your asset inventory."
    },
    {
      headContent: "What are the key challenges of manual asset management that this module addresses?",
      paraContent: "Manual asset management can be time-consuming, error-prone, and lacks real-time visibility. This module solves these challenges by automating asset tracking, providing real-time insights, and simplifying compliance and reporting tasks."
    },
    {
      headContent: "Can the Tax Management Module help us calculate tax rates accurately?",
      paraContent: "Yes, the module simplifies tax rate calculations, reducing the risk of errors. It also keeps tax rate information up-to-date to ensure precise deductions and compliance with changing regulations."
    },
    {
      headContent: "How does the module improve asset visibility and control?",
      paraContent: "The module offers real-time insights into asset status, location, and condition. This visibility allows HR professionals to make informed decisions and maintain better control over their assets."
    },
    {
      headContent: " Can this module help with compliance and reporting tasks related to asset management?",
      paraContent: "Yes, the module includes compliance features and reporting tools that simplify asset compliance tasks and enable the generation of accurate reports for auditing and regulatory purposes."
    },
    {
      headContent: " How does the module optimize resource allocation within the HR department?",
      paraContent: "By automating asset management tasks, the module frees up HR resources that can be redirected to more strategic HR initiatives, ultimately enhancing productivity and efficiency."
    },
    {
      headContent: "Can I customize asset categories with this module?",
      paraContent: "Absolutely. The module allows you to create and customize asset categories to match your organization's unique needs as your asset inventory evolves."
    },
    {
      headContent: "How does the module assist in calculating asset category percentages?",
      paraContent: "The module provides tools for calculating asset category distributions with precision, helping you visualize how assets are allocated across different categories."
    },
    {
      headContent: " Is the user interface user-friendly and easy to navigate?",
      paraContent: "Yes, the module features an intuitive user interface designed to simplify asset management tasks, making it user-friendly and accessible to HR professionals."
    },
    {
      headContent: "What benefits can I expect by adopting this Asset Management module?",
      paraContent: "By adopting this module, you can expect benefits such as increased efficiency, reduced errors, improved compliance, enhanced security, and more time for strategic HR activities."
    }
  ]

  return (
    <div className='flex flex-col lg:gap-24 gap-12'>
      <section className='px-4 lg:min-h-[517px] flex items-center'>
        <div className='main_container flex lg:flex-row flex-col-reverse justify-between items-center'>
          <div className="lg:w-[45%] w-full">
            <h2 className='noto text_gradient_finance lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-4 lg:block hidden'>Smart Asset Management: Do More in Less Time</h2>
            <p className='roboto text-light-gray font-light text-[14px] lg:text-[16px] lg:leading-7 leading-[24px] text-justify lg:ml-0 ml-3'>Keeping track of an organization’s assets is no walk in the park. Doing it manually only adds to the complexity, making it more time-consuming, error-prone, and frustrating for HR professionals. Our Asset Management feature simplifies the process, eliminating the need for manual tracking, and offering an optimized solution for efficient asset management.</p>
          </div>

          <div className="lg:w-[55%] w-full flex lg:flex-row flex-col justify-end lg:mb-0 mb-12">
            <h2 className='noto text_gradient_finance lg:text-[42px] text-[20px] font-black lg:leading-[52px] leading-[30px] lg:mb-12 mb-8 lg:hidden block '>Smart Asset Management: Do More in Less Time</h2>
            <div className='lg:w-[530px] w-[200px] lg:mx-0 mx-auto lg:h-[395px] h-full relative'>
              <img src="/Finance/Asset/combine_image/blob.webp" alt="" />
              <img src="/Finance/Asset/combine_image/person.webp" alt="" className='absolute lg:bottom-[5px] bottom-[1px] left-[50%] translate-x-[-50%]' />
            </div>
          </div>
        </div>
      </section>

      {/* 4th unique sections */}
      <section className="lg:block hidden">
        <div className="main_container">
          <h2 className="inter font-bold text-[36px] leading-[56px] text_gradient_finance text-center mb-8 ">Simplify Your Asset Management Workflow!</h2>
          <p className="px-20 mb-10 font-light leading-[26px] text-light-gray text-center">Say goodbye to the complexities of manual asset tracking. Our Asset Management module simplifies the process, providing a user-friendly interface that streamlines workflows and improves overall productivity.</p>

          <div className="grid grid-cols-2 gap-x-9 gap-y-5 justify-between">
            {
              employee_data.map((employee, index) => <div key={index} className="flex items-center p-5 angular_gradient border-[#182F59] border-l-2 rounded-lg">
                <img src={employee.img} alt="" />
                <div className="ml-8">
                  <h4 className="font-bold leading-6 text-light-gray mb-1">{employee.head}</h4>
                  <p className="font-light leading-6 text-light-gray">{employee.content}</p>
                </div>
              </div>)
            }
          </div>
        </div>
      </section>

      <section className="px-4 lg:hidden block">
        <h2 className="inter font-bold text-[20px] leading-22px] text_gradient mb-4 ">Simplify Your Asset Management Workflow!</h2>
        <p className="mb-10 text-[14px] font-light leading-[20px] text-light-gray">Say goodbye to the complexities of manual asset tracking. Our Asset Management module simplifies the process, providing a user-friendly interface that streamlines workflows and improves overall productivity.</p>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50
            }
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="pb-[60px]">
              <div className="p-5 angular_gradient border-[#182F59] border-l-2 rounded-lg mb-5">
                <div className="flex items-center mb-3">
                  <img src="/Finance/Asset/icons/Group_01.webp" alt="" />
                  <h2 className="ml-5 font-bold leading-6 text-light-gray">Boost Efficiency</h2>
                </div>
                <p className="font-light leading-6 text-light-gray">Ditch manual asset tracking for our seamless, automated system.</p>
              </div>

              <div className="p-5 angular_gradient border-[#182F59] border-l-2 rounded-lg">
                <div className="flex items-center mb-3">
                  <img src="/Finance/Asset/icons/Group_02.webp" alt="" />
                  <h2 className="ml-5 font-bold leading-6 text-light-gray">Customized Categories</h2>
                </div>
                <p className="font-light leading-6 text-light-gray">Tailor asset classifications to perfectly fit your organization's specific requirements.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pb-[60px]">
              <div className="p-5 angular_gradient border-[#182F59] border-l-2 rounded-lg mb-5">
                <div className="flex items-center mb-3">
                  <img src="/Finance/Asset/icons/Group_03.webp" alt="" />
                  <h2 className="ml-5 font-bold leading-6 text-light-gray">Instant Insights</h2>
                </div>
                <p className="font-light leading-6 text-light-gray">Access real-time data on asset value, status, and maintenance history at your fingertips.</p>
              </div>

              <div className="p-5 angular_gradient border-[#182F59] border-l-2 rounded-lg">
                <div className="flex items-center mb-3">
                  <img src="/Finance/Asset/icons/Group_04.webp" alt="" />
                  <h2 className="ml-5 font-bold leading-6 text-light-gray">Precision Analysis</h2>
                </div>
                <p className="font-light leading-6 text-light-gray">Calculate asset category distribution percentages for well-informed decision-making.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pb-[60px]">
              <div className="p-5 angular_gradient border-[#182F59] border-l-2 rounded-lg mb-5">
                <div className="flex items-center mb-3">
                  <img src="/Finance/Asset/icons/Group_05.webp" alt="" />
                  <h2 className="ml-5 font-bold leading-6 text-light-gray">Effortless Retrieval</h2>
                </div>
                <p className="font-light leading-6 text-light-gray">Quickly locate asset entries with our user-friendly, filter-based search.</p>
              </div>

              <div className="p-5 angular_gradient border-[#182F59] border-l-2 rounded-lg">
                <div className="flex items-center mb-3">
                  <img src="/Finance/Asset/icons/Group_06.webp" alt="" />
                  <h2 className="ml-5 font-bold leading-6 text-light-gray">Intuitive Interface</h2>
                </div>
                <p className="font-light leading-6 text-light-gray">Experience asset management made easy through our user-friendly platform.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* 4th unique sections */}

      {/* business strength policy */}
      <Manual_Finanace_section manual_resource={manual_resource} />

      {/* Employee organization */}
      <section className='asset_organized'>
        <div className='main_container flex lg:flex-row flex-col justify-between items-center lg:gap-6 gap-0'>
          <div className='lg:w-[55%] w-full'>
            <h5 className='roboto lg:text-[28px] text-[14px] lg:leading-[48px] leading-[24px] font-light text-center text-[#FFF] lg:px-0 px-5'>Experience up to <span className="sura lg:text-[82px] text-[24px] font-bold">80<span className='lg:text-[41px] text-[12px]'>% </span></span> improvement in asset utilization</h5>
          </div>

          <div className='middle_hr mt-4 mb-4'></div>

          <div className='lg:w-[45%] w-full left_line'>
            <h3 className='roboto lg:text-[37.5px] text-[16px] lg:leading-[44px] leading-[24px] text-center lg:text-left text-[#FFF]'>Embrace <span className="text-green font-semibold">Efficient </span>Asset Management </h3>
            <div className="lg:mt-[40px] mt-5 flex md:justify-start justify-center">
              <Button className={'action_btn2'} text={'Get Started'} onClick={() => setOpenScheduleForm(true)} />
            </div>
          </div>
        </div>
      </section>

      {/* asset management sub features start */}
      <section className='lg:block hidden'>
        <div className='max-w-[1000px] mx-auto'>
          <div className='mb-10'>
            <h2 className="inter font-bold text-[36px] leading-[56px] text_gradient_finance text-center mb-8 ">Your Solution for a Smarter Asset Management</h2>
            <p className="px-20 mb-10 font-light leading-[26px] text-light-gray text-center">Enhancing Visibility, and Ensuring Compliance for Optimal Resource Allocation and Security</p>
          </div>

          {/* part-1 */}
          <div className='mb-20'>
            <h4 className='inter font-bold text-[28px] leading-[52px] text_gradient_finance mb-7 w-[50%] mx-auto'>Automation</h4>

            <div className='rounded-tl-[200px] rounded-bl-[200px] gradient_transparent_div pb-[2px] pt-[2px] pl-[2px]'>
              <div className='bg-white px-[50px] py-[65px] flex justify-between items-center rounded-tl-[200px] rounded-bl-[200px]'>
                <div className='w-[30%]'>
                  <div className='w-[200px] h-[200px] rounded-full bg-light-white flex justify-center items-center'>
                    <div className='w-[160px] h-[160px] bg-light-white2 rounded-full flex justify-center items-center'>
                      <img src="/Finance/Asset/pc_setting.webp" alt="" />
                    </div>
                  </div>
                </div>

                <div className='lg:w-[70%] w-full'>
                  <div className='flex items-center mb-[30px] lg:mr-[60px] mr-0'>
                    <img src="/Finance/icons/stroke_color.webp" alt="" />
                    <p className='lg:text-[16px] text-[14px] roboto ml-4 lg:leading-6 leading-[22px] text-light-gray font-light'>HR professionals often rely on manual methods to track and manage assets, which can be time-consuming and prone to errors.</p>
                  </div>

                  <div className='content_div'>
                    <span className='content_div_sub'></span>
                    <div className='para_div'>
                      <img src="/Finance/icons/fill_like.webp" alt="" />
                      <p className='lg:text-[16px] text-[14px] roboto ml-5 lg:leading-7 leading-[22px] text-light-gray font-light lg:text-justify text-left'>The Asset Management module automates asset tracking processes, reducing the time and effort required for asset management tasks.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* part-2 */}
          <div className='mb-20'>
            <h4 className='inter font-bold text-[28px] leading-[52px] text_gradient_finance mb-7 w-[50%] mx-auto text-right'>Real-Time Visibility</h4>

            <div className='rounded-tr-[200px] rounded-br-[200px] gradient_transparent_div2 pb-[2px] pt-[2px] pr-[2px]'>
              <div className='bg-white px-[50px] py-[65px] flex justify-between items-center rounded-tr-[200px] rounded-br-[200px]'>
                <div className='lg:w-[70%] w-full'>
                  <div className='flex items-center mb-[30px] lg:mr-[60px] mr-0'>
                    <img src="/Finance/icons/stroke_color.webp" alt="" />
                    <p className='lg:text-[16px] text-[14px] roboto ml-4 lg:leading-6 leading-[22px] text-light-gray font-light'>Manual systems may lack real-time visibility into asset status, making it difficult to know the exact location and condition of assets.</p>
                  </div>

                  <div className='content_div'>
                    <span className='content_div_sub'></span>
                    <div className='para_div'>
                      <img src="/Finance/icons/fill_like.webp" alt="" />
                      <p className='lg:text-[16px] text-[14px] roboto ml-5 lg:leading-7 leading-[22px] text-light-gray font-light lg:text-justify text-left'>The module provides real-time insights into asset status, enabling HR professionals to track assets' whereabouts and conditions at all times.</p>
                    </div>
                  </div>
                </div>

                <div className='w-[30%] flex items-center justify-end'>
                  <div className='w-[200px] h-[200px] rounded-full bg-light-white flex justify-center items-center'>
                    <div className='w-[160px] h-[160px] bg-light-white2 rounded-full flex justify-center items-center'>
                      <img src="/Finance/Asset/analysis_time.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* part-3 */}
          <div className='mb-20'>
            <h4 className='inter font-bold text-[28px] leading-[52px] text_gradient_finance mb-7 w-[50%] mx-auto'>Compliance Tools</h4>

            <div className='rounded-tl-[200px] rounded-bl-[200px] gradient_transparent_div pb-[2px] pt-[2px] pl-[2px]'>
              <div className='bg-white px-[50px] py-[65px] flex justify-between items-center rounded-tl-[200px] rounded-bl-[200px]'>
                <div className='w-[30%]'>
                  <div className='w-[200px] h-[200px] rounded-full bg-light-white flex justify-center items-center'>
                    <div className='w-[160px] h-[160px] bg-light-white2 rounded-full flex justify-center items-center'>
                      <img src="/Finance/Asset/doc_plus.webp" alt="" />
                    </div>
                  </div>
                </div>

                <div className='lg:w-[70%] w-full'>
                  <div className='flex items-center mb-[30px] lg:mr-[60px] mr-0'>
                    <img src="/Finance/icons/stroke_color.webp" alt="" />
                    <p className='lg:text-[16px] text-[14px] roboto ml-4 lg:leading-6 leading-[22px] text-light-gray font-light'>Ensuring compliance with regulations and generating accurate asset-related reports can be a complex and time-intensive task.</p>
                  </div>

                  <div className='content_div'>
                    <span className='content_div_sub'></span>
                    <div className='para_div'>
                      <img src="/Finance/icons/fill_like.webp" alt="" />
                      <p className='lg:text-[16px] text-[14px] roboto ml-5 lg:leading-7 leading-[22px] text-light-gray font-light lg:text-justify text-left'>The module offers compliance features and reporting tools to ensure that HR stays compliant with regulations and can generate accurate reports effortlessly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* part-4 */}
          <div className='mb-20'>
            <h4 className='inter font-bold text-[28px] leading-[52px] text_gradient_finance mb-7 w-[50%] mx-auto text-right'>Resource Efficiency</h4>

            <div className='rounded-tr-[200px] rounded-br-[200px] gradient_transparent_div2 pb-[2px] pt-[2px] pr-[2px]'>
              <div className='bg-white px-[50px] py-[65px] flex justify-between items-center rounded-tr-[200px] rounded-br-[200px]'>
                <div className='lg:w-[70%] w-full'>
                  <div className='flex items-center mb-[30px] lg:mr-[60px] mr-0'>
                    <img src="/Finance/icons/stroke_color.webp" alt="" />
                    <p className='lg:text-[16px] text-[14px] roboto ml-4 lg:leading-6 leading-[22px] text-light-gray font-light'>Managing assets manually consumes HR resources that could be better allocated to strategic HR functions.</p>
                  </div>

                  <div className='content_div'>
                    <span className='content_div_sub'></span>
                    <div className='para_div'>
                      <img src="/Finance/icons/fill_like.webp" alt="" />
                      <p className='lg:text-[16px] text-[14px] roboto ml-5 lg:leading-7 leading-[22px] text-light-gray font-light lg:text-justify text-left'>By automating asset management, HR can free up valuable resources that can be redirected to more strategic HR initiatives, enhancing overall productivity.</p>
                    </div>
                  </div>
                </div>

                <div className='w-[30%] flex items-center justify-end'>
                  <div className='w-[200px] h-[200px] rounded-full bg-light-white flex justify-center items-center'>
                    <div className='w-[160px] h-[160px] bg-light-white2 rounded-full flex justify-center items-center'>
                      <img src="/Finance/Asset/tree.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* part-5 */}
          <div className='mb-20'>
            <h4 className='inter font-bold text-[28px] leading-[52px] text_gradient_finance mb-7 w-[50%] mx-auto'>Enhanced Security</h4>

            <div className='rounded-tl-[200px] rounded-bl-[200px] gradient_transparent_div pb-[2px] pt-[2px] pl-[2px]'>
              <div className='bg-white px-[50px] py-[65px] flex justify-between items-center rounded-tl-[200px] rounded-bl-[200px]'>
                <div className='w-[30%]'>
                  <div className='w-[200px] h-[200px] rounded-full bg-light-white flex justify-center items-center'>
                    <div className='w-[160px] h-[160px] bg-light-white2 rounded-full flex justify-center items-center'>
                      <img src="/Finance/Asset/doc_lock.webp" alt="" />
                    </div>
                  </div>
                </div>

                <div className='lg:w-[70%] w-full'>
                  <div className='flex items-center mb-[30px] lg:mr-[60px] mr-0'>
                    <img src="/Finance/icons/stroke_color.webp" alt="" />
                    <p className='lg:text-[16px] text-[14px] roboto ml-4 lg:leading-6 leading-[22px] text-light-gray font-light'>Incomplete or inaccurate records increase the risk of asset loss or theft, leading to financial losses.</p>
                  </div>

                  <div className='content_div'>
                    <span className='content_div_sub'></span>
                    <div className='para_div'>
                      <img src="/Finance/icons/fill_like.webp" alt="" />
                      <p className='lg:text-[16px] text-[14px] roboto ml-5 lg:leading-7 leading-[22px] text-light-gray font-light lg:text-justify text-left'>The module's security features help mitigate the risk of asset loss or theft by maintaining accurate and secure asset records.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* for responsive this section */}
      <section className='lg:hidden block px-4 overflow-hidden'>
        {/* part-1 responsive */}
        <div className='part-1 mb-20'>
          <h2 className='text_gradient_finance inter text-[28px] font-bold lg:mb-10 mb-[30px] lg:mr-[60px] mr-0'>Automation</h2>
          <div className='flex items-center mb-[30px] lg:mr-[60px] mr-0'>
            <img src="/Finance/icons/stroke_color.webp" alt="" />
            <p className='lg:text-[16px] text-[14px] roboto ml-4 lg:leading-6 leading-[22px] text-light-gray font-light'>HR professionals often rely on manual methods to track and manage assets, which can be time-consuming and prone to errors.</p>
          </div>

          <div className='relative left-[50%] translate-x-[-25%] my-10'>
            <div className="w-[70%] rounded-tl-[100px] rounded-bl-[100px] gradient_transparent_div pb-[2px] pt-[2px] pl-[2px]">
              <div className='bg-white px-[30px] py-[20px] flex justify-between items-center rounded-tl-[100px] rounded-bl-[100px]'>
                <div className='w-[150px] h-[150px] rounded-full bg-light-white flex justify-center items-center'>
                  <div className='w-[120px] h-[120px] bg-light-white2 rounded-full flex justify-center items-center'>
                    <img src="/Finance/Asset/pc_setting.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='content_div'>
            <span className='content_div_sub'></span>
            <div className='para_div'>
              <img src="/Finance/icons/fill_like.webp" alt="" />
              <p className='lg:text-[16px] text-[14px] roboto ml-5 lg:leading-7 leading-[22px] text-light-gray font-light lg:text-justify text-left'>The Asset Management module automates asset tracking processes, reducing the time and effort required for asset management tasks.</p>
            </div>
          </div>
        </div>

        {/* part-2 responsive */}
        <div className='part-2 mb-20 overflow-hidden pb-6'>
          <h2 className='text_gradient_finance inter text-[28px] font-bold lg:mb-10 mb-[30px] lg:mr-[60px] mr-0'>Real-Time Visibility</h2>
          <div className='flex items-center mb-[30px] lg:mr-[60px] mr-0'>
            <img src="/Finance/icons/stroke_color.webp" alt="" />
            <p className='lg:text-[16px] text-[14px] roboto ml-4 lg:leading-6 leading-[22px] text-light-gray font-light'>Manual systems may lack real-time visibility into asset status, making it difficult to know the exact location and condition of assets.</p>
          </div>

          <div className='relative left-[50%] translate-x-[-50%] my-10'>
            <div className="w-[70%] rounded-tr-[100px] rounded-br-[100px] gradient_transparent_div2 pb-[2px] pt-[2px] pr-[2px]">
              <div className='bg-white px-[30px] py-[20px] flex justify-end items-center rounded-tr-[100px] rounded-br-[100px]'>
                <div className='w-[150px] h-[150px] rounded-full bg-light-white flex justify-center items-center'>
                  <div className='w-[120px] h-[120px] bg-light-white2 rounded-full flex justify-center items-center'>
                    <img src="/Finance/Asset/analysis_time.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='content_div'>
            <span className='content_div_sub'></span>
            <div className='para_div'>
              <img src="/Finance/icons/fill_like.webp" alt="" />
              <p className='lg:text-[16px] text-[14px] roboto ml-5 lg:leading-7 leading-[22px] text-light-gray font-light lg:text-justify text-left'>The module provides real-time insights into asset status, enabling HR professionals to track assets' whereabouts and conditions at all times.</p>
            </div>
          </div>
        </div>

        {/* part-3 responsive */}
        <div className='part-3 mb-20'>
          <h2 className='text_gradient_finance inter text-[28px] font-bold lg:mb-10 mb-[30px] lg:mr-[60px] mr-0'>Compliance Tools</h2>
          <div className='flex items-center mb-[30px] lg:mr-[60px] mr-0'>
            <img src="/Finance/icons/stroke_color.webp" alt="" />
            <p className='lg:text-[16px] text-[14px] roboto ml-4 lg:leading-6 leading-[22px] text-light-gray font-light'>Ensuring compliance with regulations and generating accurate asset-related reports can be a complex and time-intensive task.</p>
          </div>

          <div className='relative left-[50%] translate-x-[-25%] my-10'>
            <div className="w-[70%] rounded-tl-[100px] rounded-bl-[100px] gradient_transparent_div pb-[2px] pt-[2px] pl-[2px]">
              <div className='bg-white px-[30px] py-[20px] flex justify-between items-center rounded-tl-[100px] rounded-bl-[100px]'>
                <div className='w-[150px] h-[150px] rounded-full bg-light-white flex justify-center items-center'>
                  <div className='w-[120px] h-[120px] bg-light-white2 rounded-full flex justify-center items-center'>
                    <img src="/Finance/Asset/doc_plus.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='content_div'>
            <span className='content_div_sub'></span>
            <div className='para_div'>
              <img src="/Finance/icons/fill_like.webp" alt="" />
              <p className='lg:text-[16px] text-[14px] roboto ml-5 lg:leading-7 leading-[22px] text-light-gray font-light lg:text-justify text-left'>The module offers compliance features and reporting tools to ensure that HR stays compliant with regulations and can generate accurate reports effortlessly.</p>
            </div>
          </div>
        </div>

        {/* part-4 responsive */}
        <div className='part-5 mb-20 overflow-hidden pb-6'>
          <h2 className='text_gradient_finance inter text-[28px] font-bold lg:mb-10 mb-[30px] lg:mr-[60px] mr-0'>Resource Efficiency</h2>
          <div className='flex items-center mb-[30px] lg:mr-[60px] mr-0'>
            <img src="/Finance/icons/stroke_color.webp" alt="" />
            <p className='lg:text-[16px] text-[14px] roboto ml-4 lg:leading-6 leading-[22px] text-light-gray font-light'>Managing assets manually consumes HR resources that could be better allocated to strategic HR functions.</p>
          </div>

          <div className='relative left-[50%] translate-x-[-50%] my-10'>
            <div className="w-[70%] rounded-tr-[100px] rounded-br-[100px] gradient_transparent_div2 pb-[2px] pt-[2px] pr-[2px]">
              <div className='bg-white px-[30px] py-[20px] flex justify-end items-center rounded-tr-[100px] rounded-br-[100px]'>
                <div className='w-[150px] h-[150px] rounded-full bg-light-white flex justify-center items-center'>
                  <div className='w-[120px] h-[120px] bg-light-white2 rounded-full flex justify-center items-center'>
                    <img src="/Finance/Asset/tree.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='content_div'>
            <span className='content_div_sub'></span>
            <div className='para_div'>
              <img src="/Finance/icons/fill_like.webp" alt="" />
              <p className='lg:text-[16px] text-[14px] roboto ml-5 lg:leading-7 leading-[22px] text-light-gray font-light lg:text-justify text-left'>By automating asset management, HR can free up valuable resources that can be redirected to more strategic HR initiatives, enhancing overall productivity.</p>
            </div>
          </div>
        </div>

        {/* part-5 responsive */}
        <div className='part-5 pb-6'>
          <h2 className='text_gradient_finance inter text-[28px] font-bold lg:mb-10 mb-[30px] lg:mr-[60px] mr-0'>Enhanced Security</h2>
          <div className='flex items-center mb-[30px] lg:mr-[60px] mr-0'>
            <img src="/Finance/icons/stroke_color.webp" alt="" />
            <p className='lg:text-[16px] text-[14px] roboto ml-4 lg:leading-6 leading-[22px] text-light-gray font-light'>Incomplete or inaccurate records increase the risk of asset loss or theft, leading to financial losses.</p>
          </div>

          <div className='relative left-[50%] translate-x-[-25%] my-10'>
            <div className="w-[70%] rounded-tl-[100px] rounded-bl-[100px] gradient_transparent_div pb-[2px] pt-[2px] pl-[2px]">
              <div className='bg-white px-[30px] py-[20px] flex justify-between items-center rounded-tl-[100px] rounded-bl-[100px]'>
                <div className='w-[150px] h-[150px] rounded-full bg-light-white flex justify-center items-center'>
                  <div className='w-[120px] h-[120px] bg-light-white2 rounded-full flex justify-center items-center'>
                    <img src="/Finance/Asset/doc_lock.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='content_div'>
            <span className='content_div_sub'></span>
            <div className='para_div'>
              <img src="/Finance/icons/fill_like.webp" alt="" />
              <p className='lg:text-[16px] text-[14px] roboto ml-5 lg:leading-7 leading-[22px] text-light-gray font-light lg:text-justify text-left'>The module's security features help mitigate the risk of asset loss or theft by maintaining accurate and secure asset records.</p>
            </div>
          </div>
        </div>
      </section>
      {/* asset management sub features end */}
      <StyledCTA
        reverse={true}
        imgTransform={'-translate-x-[55%]'}
        imgSrc={'/Finance/Asset/g1.svg'}
        content={
          <div>
            <div className="noto font-extralight lg:text-[37.5px] text-[14px] lg:leading-[45px] leading-normal">
              <h3 className='text-center'>
                <span className='text-primary font-medium'>Boost </span>
                <span className='text_gradient_finance lg:text-[28px] text-[12px] font-extralight'>Your </span>
                <span className='text_gradient_finance font-medium'> HR Productivity</span>
                <span className='text_gradient_finance lg:text-[28px] text-[12px] font-extralight'> with</span>
                <span className='text_gradient_finance font-extralight'> Automated Asset Management </span>
              </h3>
            </div>
            <div className='flex justify-center lg:mt-6 mt-2'>
              <Button className={'action_btn'} text={'Get Started'} onClick={() => setOpenScheduleForm(true)} />
            </div>
          </div>
        }
      />
      {/* Frequently Ask Questions */}
      <Accordion_component accordion_list={accordion_list} />
      <FooterCTA
        imgSrc='/Finance/Asset/footer_bottom_cta.svg'
        title={
          <span className='flex flex-col lg:items-start items-center'>
            <span className='lg:text-[37.5px] text-[15px]'>
              Ready to <span className="text-green font-semibold">Upgrade</span> Asset Management?
            </span>
            <span className="lg:text-[18px] text-[12px] inter text-light-white2 lg:mb-2 mb-2">
              Transform Asset Management and Reach Maximum HR Efficiency Today!
            </span>
          </span>
        }
        button={
          <Button className={'action_btn2'} text={'Contact Us'} onClick={() => setOpenScheduleForm(true)} />
        }
      />
    </div>
  );
};

export default Asset;