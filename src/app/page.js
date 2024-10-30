"use client"
import HrmsSolution from '@/components/HrmsSolution'
import RecruitmentTool from '@/components/RecruitmentTool'
import Accounting from '@/components/Accounting'
import CustomizableDashboard from '@/components/CustomizableDashboard'
import MediaSlide from '@/components/MediaSlide'
import { Button, DataSecurity } from '@/components/SharedComponents'
import HrmsPrefer from '@/components/HrmsPrefer'
import Faq from '@/components/Faq'
import CustomerList from '@/components/CustomerList'
import HeroSection from '@/components/HeroSection'
import Header from '@/components/Header'
import { useGlobalContext } from '@/context/globalContext'
import OnboardingPortal from '@/components/OnbordingPortal'
import BloggingCMS from '@/components/BloggingCMS'

export default function Home() {
  const { setOpenScheduleForm } = useGlobalContext();
  return (
    <>
      {/* header part  */}
      <Header />
      <HeroSection />
      <MediaSlide />
      <HrmsSolution />
      <RecruitmentTool />
      <Accounting />
      <OnboardingPortal />
      <BloggingCMS />
      {/* next level section (common) */}
      <section className='next_level px-4 relative lg:py-0 py-5 lg:mb-10 mb-0 lg:mt-14 mt-8'>
        <img src="/Home/person-2.webp" alt="" className='h-[100%] absolute top-0 right-[6px] lg:hidden block' />
        <div className='main_container flex justify-between items-center'>
          <div className="w-[50%] lg:block hidden">
            <img src="/Home/person-2.webp" alt="" className='w-[420px] mx-auto' />
          </div>
          <div className="w-[50%]">
            <h2 className='inter lg:text-[36px] text-[14px] font-semibold lg:leading-[48px] leading-[20px] mb-2 lg:pr-[150px] pr-2'><span className='text_gradient_finance'>Upgrade to </span><span className='text-green'>Effortless HR </span></h2>
            <p className='inter font-medium lg:text-[18px] text-[9px] text_gradient_finance lg:pr-[70px] pr-0'>Ditch the Desk, Embrace the Cloud - Experience Seamless HR with TechForing Growth !</p>
            <div className="lg:mt-10 mt-2 text-left">
              <Button className={'action_btn'} text={'Start Today'} onClick={() => setOpenScheduleForm(true)} />
            </div>
          </div>
        </div>
      </section>

      {/* card stack animation */}
      <CustomizableDashboard />
      <DataSecurity />
      <HrmsPrefer />
      {/* another CTA */}
      <div className='lg:pt-10 lg:pb-10 pt-6 pb-12'>
        <div className='main_container flex justify-between items-center gap-5'>
          <div className='w-[50%]'>
            <img src="/Home/cta.webp" alt="" className='w-[90%] mx-auto' />
          </div>

          <div className='w-[50%] lg:mt-20 mt-0 lg:translate-x-[-40px] translate-x-0'>
            <div className='lg:w-[70%] w-full mx-auto'>
              <div className='flex items-center lg:mb-0 mb-1'>
                <img src="/Home/tic.webp" alt="" className='lg:w-[24px] w-[12px]' />
                <span className='inter lg:text-[28px] text-[10px] text-[#182F59] lg:ml-4 ml-2 '><span className='text-green lg:text-[32px] text-[12px] font-semibold'>Safeguard</span> Your Data</span>
              </div>
              <div className='flex items-center lg:mb-0 mb-1'>
                <img src="/Home/tic.webp" alt="" className='lg:w-[24px] w-[12px]' />
                <span className='inter lg:text-[28px] text-[10px] text-[#182F59] lg:ml-4 ml-2'><span className='text-green lg:text-[32px] text-[12px] font-semibold'>Engage</span> Your Team</span>
              </div>
              <div className='flex items-center'>
                <img src="/Home/tic.webp" alt="" className='lg:w-[24px] w-[12px]' />
                <span className='inter lg:text-[28px] text-[10px] text-[#182F59] lg:ml-4 ml-2'><span className='text-green lg:text-[32px] text-[12px] font-semibold'>Save</span> Time and Money</span>
              </div>
            </div>

            <p className='inter font-light lg:text-center text-left lg:mt-8 mt-3 lg:text-[18px] text-[12px] text-[#333]'>Experience Complete <span className='text-[#182F59] font-medium'>HR Efficiency and Scalability</span> with <span className='font-medium lg:text-[24px] text-[12px] text-green'>TechForing Growth</span></p>

            <div className='lg:text-center text-left lg:mt-8 mt-5'>
              <Button className={'action_btn'} text={'Start Today'} onClick={() => setOpenScheduleForm(true)} />
            </div>
          </div>
        </div>
      </div>

      <CustomerList />
      <Faq className='my-24' more={false} />
    </>
  )
}
