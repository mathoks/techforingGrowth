"use client"
import Header from '@/components/Header'
import { Linkedin, Mail, TechForingDragon, TechForingGradientDragon, Twitter } from '@/components/Icon'
import PageCommonBanner from '@/components/PageCommonBanner'
import { Button, CTA, Divider } from '@/components/SharedComponents'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useGlobalContext } from "@/context/globalContext";

const page = () => {
  const { setOpenScheduleForm } = useGlobalContext();
  const pathName = usePathname();

  const imgs = [
    <svg xmlns="http://www.w3.org/2000/svg" width="57" height="86" viewBox="0 0 57 86" fill="none">
      <g opacity="0.2" clipPath="url(#clip0_1557_32351)">
        <path d="M16.6529 35.3309L20.6211 38.5079L23.7982 34.5397L19.8299 31.3627M1.16335 58.7446C-7.58657 51.7393 -9.00676 38.9135 -2.0014 30.1636C5.00395 21.4137 17.8297 19.9935 26.5796 26.9989C35.3295 34.0042 36.7497 46.8299 29.7443 55.5799C22.739 64.3298 9.91327 65.75 1.16335 58.7446ZM29.7566 23.0307C27.151 20.9446 24.1601 19.3922 20.9546 18.462C17.749 17.5318 14.3917 17.2421 11.0742 17.6095C4.37423 18.3514 -1.75662 21.7244 -5.96962 26.9866C-10.1826 32.2488 -12.1327 38.9691 -11.3908 45.669C-11.0235 48.9865 -10.0063 52.1992 -8.39736 55.1235C-6.78843 58.0479 -4.61925 60.6268 -2.01368 62.7128C3.2485 66.9258 9.96877 68.8759 16.6687 68.134C23.3687 67.3921 29.4996 64.0191 33.7126 58.7569C35.7986 56.1513 37.3511 53.1604 38.2812 49.9549C39.2114 46.7493 39.5011 43.392 39.1337 40.0745C38.7664 36.757 37.7492 33.5443 36.1403 30.62C34.5314 27.6956 32.3622 25.1167 29.7566 23.0307ZM3.94478 51.2038L7.913 54.3808L17.4441 42.4762L13.4759 39.2991L3.94478 51.2038Z" fill="#5BBC2E" />
      </g>
      <defs>
        <clipPath id="clip0_1557_32351">
          <rect width="61" height="61" fill="white" transform="translate(9.12427) rotate(38.6814)" />
        </clipPath>
      </defs>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
      <g opacity="0.15" clipPath="url(#clip0_1518_35869)">
        <path d="M40.6403 27.3585L33.5976 31.1532L21.2648 8.26425L28.3076 4.46956L40.6403 27.3585ZM34.4096 28.4438L37.931 26.5465L27.4956 7.17892L23.9742 9.07627L34.4096 28.4438ZM31.8369 32.1019L24.7941 35.8966L16.2561 20.0504L23.2988 16.2557L31.8369 32.1019ZM25.6062 33.1872L29.1275 31.2898L22.4868 18.965L18.9654 20.8624L25.6062 33.1872ZM23.0335 36.8452L15.9907 40.6399L10.2987 30.0758L17.3414 26.2811L23.0335 36.8452ZM16.8027 37.9306L20.3241 36.0332L16.5294 28.9905L13.008 30.8878L16.8027 37.9306Z" fill="#5BBC2E" />
      </g>
      <defs>
        <clipPath id="clip0_1518_35869">
          <rect width="32" height="32" fill="white" transform="translate(0 15.1787) rotate(-28.3161)" />
        </clipPath>
      </defs>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
      <g opacity="0.3" clipPath="url(#clip0_1557_32349)">
        <path d="M36.1558 34.9447C35.3372 33.7449 34.3137 32.6986 33.1322 31.8538C35.2369 30.7188 36.8272 28.6812 37.3044 26.15C38.1462 21.6842 35.1126 17.3183 30.6338 16.545C26.2235 15.7846 22.0052 18.7 21.174 23.1094C20.6969 25.6406 21.4403 28.1181 22.9832 29.9407C21.5751 30.2969 20.2408 30.8988 19.0419 31.7188C16.4256 33.5086 14.6276 36.1832 13.962 39.2715C13.9528 39.3144 13.9522 39.3586 13.9604 39.4016C13.9686 39.4446 13.9853 39.4856 14.0095 39.522C14.0338 39.5585 14.0651 39.5897 14.1016 39.6139C14.1381 39.6381 14.1791 39.6547 14.2221 39.6628L16.4792 40.0883C16.6525 40.121 16.8235 40.0113 16.8602 39.8387C17.3774 37.5154 18.7372 35.5054 20.7148 34.1586C21.7281 33.4628 22.8692 32.9749 24.0723 32.7231C25.2754 32.4713 26.5164 32.4606 27.7237 32.6916C30.1783 33.1543 32.3077 34.5449 33.7175 36.6096C35.065 38.5832 35.5997 40.9504 35.2396 43.3033C35.211 43.4774 35.3302 43.6418 35.5036 43.6744L37.7607 44.0999C37.8037 44.108 37.8479 44.1075 37.8907 44.0982C37.9335 44.089 37.9741 44.0713 38.0099 44.0461C38.0458 44.021 38.0762 43.989 38.0995 43.9519C38.1228 43.9148 38.1384 43.8734 38.1454 43.8302C38.6498 40.7114 37.9489 37.5658 36.1558 34.9447ZM28.2707 29.7896C26.8922 29.5298 25.6954 28.7491 24.9079 27.5906C24.5116 27.015 24.2353 26.3656 24.0954 25.6809C23.9556 24.9963 23.9551 24.2904 24.0939 23.6056C24.3552 22.2858 25.1241 21.1077 26.2256 20.3345C27.3799 19.5253 28.7778 19.217 30.1633 19.4615C31.532 19.7069 32.7577 20.4889 33.5531 21.6281C34.368 22.7959 34.6693 24.2092 34.4064 25.6038C34.1465 26.9822 33.3666 28.175 32.2073 28.9665C31.6381 29.3571 30.9972 29.631 30.3214 29.7723C29.6457 29.9136 28.9487 29.9195 28.2707 29.7896ZM18.946 23.7913C18.9759 23.4338 19.0226 23.0753 19.0902 22.7166C19.211 22.0758 19.3892 21.4624 19.6168 20.8751C19.6724 20.7353 19.6239 20.5717 19.5023 20.4862C19.0005 20.137 18.5605 19.7035 18.2057 19.1942C17.7865 18.6001 17.4958 17.9252 17.352 17.2126C17.2082 16.4999 17.2146 15.765 17.3707 15.055C17.6508 13.768 18.4025 12.6367 19.4841 11.8806C20.6719 11.0485 22.1149 10.7445 23.5347 11.0289C24.8182 11.2833 25.9661 12.0131 26.7396 13.0688C27.0018 13.4271 27.2136 13.8092 27.3765 14.2072C27.4335 14.3474 27.5808 14.4294 27.727 14.4069C28.4827 14.2947 29.2651 14.2627 30.0501 14.3272C30.2804 14.3456 30.455 14.1281 30.3922 13.9076C29.5708 11.069 27.2318 8.7749 24.1454 8.14303C19.6884 7.23192 15.2736 10.1937 14.4325 14.6555C13.9554 17.1867 14.6947 19.6634 16.2417 21.4868C14.8483 21.8377 13.5131 22.4333 12.2964 23.2641C9.67204 25.0525 7.874 27.727 7.20761 30.8194C7.19842 30.8622 7.1979 30.9064 7.20607 30.9495C7.21424 30.9925 7.23094 31.0334 7.25518 31.0699C7.27943 31.1064 7.31073 31.1376 7.34723 31.1618C7.38374 31.186 7.42472 31.2026 7.46775 31.2107L9.72891 31.6369C9.90222 31.6696 10.0732 31.5599 10.1099 31.3873C10.6271 29.0641 11.9868 27.054 13.9645 25.7072C15.3729 24.7456 16.9789 24.1968 18.6381 24.0964C18.8029 24.0857 18.9358 23.9564 18.946 23.7913Z" fill="#5BBC2E" />
      </g>
      <defs>
        <clipPath id="clip0_1557_32349">
          <rect width="42" height="42" fill="white" transform="translate(8.25342 0.472656) rotate(10.6751)" />
        </clipPath>
      </defs>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
      <g opacity="0.15" clipPath="url(#clip0_1518_35875)">
        <path d="M28.6455 38.9084L21.2022 35.9762L30.7319 11.7856L38.1752 14.7178L28.6455 38.9084ZM23.7961 34.8484L27.5177 36.3146L35.5813 15.8456L31.8597 14.3795L23.7961 34.8484ZM19.3414 35.2432L11.8982 32.3109L18.4956 15.5636L25.9389 18.4958L19.3414 35.2432ZM14.492 31.1832L18.2137 32.6493L23.345 19.6236L19.6234 18.1575L14.492 31.1832ZM10.0373 31.5779L2.59409 28.6457L6.99241 17.4808L14.4357 20.413L10.0373 31.5779ZM5.18796 27.5179L8.90959 28.984L11.8418 21.5408L8.12017 20.0747L5.18796 27.5179Z" fill="#5BBC2E" />
      </g>
      <defs>
        <clipPath id="clip0_1518_35875">
          <rect width="32" height="32" fill="white" transform="translate(11.729) rotate(21.5016)" />
        </clipPath>
      </defs>
    </svg>
  ]

  return (
    <>
      {/* header part  */}
      <Header pathName={pathName} />

      <PageCommonBanner bgTagImg={imgs} title="About Us" />
      <div className='custom-container'>
        <div className='flex flex-col lg:gap-24 gap-12 relative'>
          <div className='grid lg:grid-cols-2 grid-cols-1 items-center gap-24 relative'>
            <div>
              <h3 className='text-secondary-1 text-4xl font-bold mb-6 lg:text-left text-center'>Our Story</h3>
              <img src="/about/company_logo.webp" alt="" className='lg:hidden block mx-auto w-[105px] my-6' />
              <p className='text-secondary-1 text-base lg:text-left text-justify'>
                TechForing is a premier cybersecurity firm dedicated to safeguarding the digital assets of individuals and corporations. Since our establishment in 2014, we have been committed to delivering top-quality cybersecurity services. Continuously expanding our horizons, we are proud to introduce our latest innovation: TechForing Growth. This cutting-edge HR solution streamlines HR processes and prioritizes the utmost level of data protection, fostering a superior workplace environment.
              </p>
            </div>
            <div className='lg:flex items-center justify-center hidden'>
              <TechForingGradientDragon color1={'#182F59'} color2={'#182F59'} width={'206px'} />
            </div>
            <svg className='absolute lg:block hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10' xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
              <circle cx="8" cy="8.94531" r="7.75" fill="white" stroke="#5BBC2E" strokeWidth="0.5" />
              <circle cx="8" cy="8.94531" r="4" fill="#5BBC2E" />
            </svg>
          </div>


          <div className='grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-24 gap-4 relative'>
            <h3 className='text-secondary-1 lg:text-4xl text-3xl font-bold lg:mb-6 mb-2 lg:hidden block'>Mission</h3>
            <div className='block lg:flex items-center justify-center'>
              <img src='/mission.webp' alt='mission' className='w-[535px] h-[285px]' />
            </div>
            <div>
              <h3 className='text-secondary-1 text-4xl font-bold mb-6 lg:block hidden'>Mission</h3>
              <p className='text-secondary-1 text-base lg:text-left text-justify'>
                With a team of talented and exciting individuals, our mission is to protect digital assets for corporations and individuals and provide a safer cyberspace for everyone.
              </p>
            </div>
            <svg className='lg:block hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10' xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
              <circle cx="8" cy="8.94531" r="7.75" fill="white" stroke="#5BBC2E" strokeWidth="0.5" />
              <circle cx="8" cy="8.94531" r="4" fill="#5BBC2E" />
            </svg>
          </div>


          <div className='grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-24 gap-4 relative'>
            <div className='lg:order-1 order-2'>
              <h3 className='text-secondary-1 lg:text-4xl text-3xl font-bold mb-6 lg:block hidden'>Vision</h3>
              <p className='text-secondary-1 text-base lg:text-left text-justify'>
                We aim to be the no. 1 among cybersecurity companies in terms of high-quality IT security, customer service, and work ethics. Regardless of your size and affordability, we are working towards hack-proofing every business and individual throughout the world.
              </p>
            </div>

            <div className='block lg:flex items-center justify-center lg:order-2 order-1'>
              <h3 className='text-secondary-1 lg:text-4xl text-3xl font-bold lg:mb-6 mb-4 lg:hidden block'>Vision</h3>
              <img src='/vision.webp' alt='vision' className='w-[535px] h-[285px]' />
            </div>
            <svg className='lg:block hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10' xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
              <circle cx="8" cy="8.94531" r="7.75" fill="white" stroke="#5BBC2E" strokeWidth="0.5" />
              <circle cx="8" cy="8.94531" r="4" fill="#5BBC2E" />
            </svg>
          </div>

          {/* divider line start */}
          <div className='lg:block hidden'>
            <Divider style={{
              width: '2px',
              height: '100%',
              position: 'absolute',
              top: '0',
              left: '50%',
              background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(24,47,89,0.9) 30%, rgba(24,47,89,0.9) 100%)',
              transform: 'translateX(-50%)',
              margin: '0'
            }} />
          </div>
          <div className='lg:block hidden absolute -top-1 left-1/2 -translate-x-1/2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 31" fill="none">
              <ellipse cx="16" cy="15.2594" rx="16" ry="15.2594" fill="#182F59" />
              <ellipse cx="16" cy="15.6297" rx="8" ry="7.6297" fill="white" />
            </svg>
          </div>
          {/* divider line end */}
        </div>

        <div className='lg:mt-20 mt-16'>
          <h3 className='text-secondary-1 lg:text-4xl text-[28px] font-bold mb-8 text-center'>Our Clients See Value in us</h3>
          <div className='lg:flex hidden items-center justify-between'>
            <Image src='/bdArmy.svg' width={99} height={87} alt='bdArmy' />
            <Image src='/TCDD.svg' width={99} height={87} alt='TCDD' />
            <Image src='/US-Army.svg' width={87} height={87} alt='US-Army' />
            <Image src='/nclouds.svg' width={87} height={87} alt='nclouds' />
            <Image src='/MOEM.svg' width={206} height={87} alt='MOEM' />
            <Image src='/IBM.svg' width={156} height={87} alt='IBM' />
          </div>

          <div className='lg:hidden flex justify-between items-center mb-4'>
            <div className='w-[33.33%]'>
              <Image src='/bdArmy.svg' width={99} height={87} alt='bdArmy' className='mx-auto' />
            </div>
            <div className='w-[33.33%]'>
              <Image src='/TCDD.svg' width={99} height={87} alt='TCDD' className='mx-auto' />
            </div>
            <div className='w-[33.33%]'>
              <Image src='/US-Army.svg' width={87} height={87} alt='US-Army' className='mx-auto' />
            </div>
          </div>

          <div className='lg:hidden flex justify-between items-center mb-4'>
            <div className='w-[50%]'>
              <Image src='/nclouds.svg' width={87} height={87} alt='nclouds' className='mx-auto' />
            </div>
            <div className='w-[50%]'>
              <Image src='/MOEM.svg' width={206} height={87} alt='MOEM' className='mx-auto' />
            </div>
          </div>

          <div className='lg:hidden block w-full'>
            <Image src='/IBM.svg' width={156} height={87} alt='IBM' className='mx-auto' />
          </div>
        </div>
      </div>

      {/* CTA */}
      <section style={{ backgroundImage: 'url(/cta1BG.webp)', backgroundRepeat: "no-repeat", backgroundPosition: "center top", backgroundSize: "cover" }} className='lg:py-[100px] py-10 px-4 mt-20 lg:mb-0 mb-10'>
        <div className='main_container'>
          <h1 className='text-white lg:text-[36px] text-[22px] lg:w-[50%] w-full lg:mx-auto mx-0 text-center font-bold mb-4'>Ready to <span className='text-green'>Grab</span> Ultimate HR Solution</h1>
          <p className='text-center text-[14px] lg:text-[16px] text-white mb-10'>Want to Scale Your Business Rapidly</p>
          <div className='text-center'>
            <Button className={'action_btn2'} text={'Schedule A Demo'} onClick={() => setOpenScheduleForm(true)} />
          </div>
        </div>
      </section>

      <div className='lg:mb-24 mb-16'>
        <div className='custom-container'>
          <div className='lg:mt-24 mt-16'>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
              <div className='flex items-center flex-col'>
                <h3 className='text-secondary-1 lg:text-[36px] text-[30px] leading-[42px] font-bold lg:mb-8 mb-2 text-center'>Visionary Brilliance of Our Trailblazing
                  <span className='text-LG-2'> Founders</span></h3>
                <div className='lg:block hidden'>
                  <TechForingDragon width={'320px'} alt="" />
                </div>
                <div className=''>
                  <img src="/about/company_logo_gray.webp" alt="" className='mx-auto w-[200px] my-10 lg:hidden block' />
                </div>
              </div>
              <div className='iCard overflow-hidden'>
                <div className='relative w-full image_height'>
                  <img src='/RABIUL-ISLAM.webp' alt='RABIUL ISLAM' className='w-full h-full object-cover' />
                </div>
                <div className='p-6'>
                  <h4 className='text-secondary-1 font-rajdhani text-[26px] font-bold leading-[initial]'>RABIUL ISLAM</h4>
                  <p className='text-secondary-1 font-rajdhani text-lg font-normal leading-[initial]'>CEO & MD - TechForing Ltd, USA</p>
                  <p className='text-sm font-light text-dark-text-2 mt-4'>Cybersecurity is in our DNA. We want to have a high level of impact through our contribution to the world of cyberspace.</p>
                  <div className='flex gap-4 items-center mt-6'>
                    <Link href='#' target='_blank' rel='noopener noreferrer'><Mail /></Link>
                    <Link href='#' target='_blank' rel='noopener noreferrer'><Linkedin /></Link>
                    <Link href='#' target='_blank' rel='noopener noreferrer'><Twitter /></Link>
                  </div>
                </div>
              </div>
              <div className='iCard overflow-hidden'>
                <div className='relative w-full image_height'>
                  <img src='/PHILLIP-R-MORAN.webp' alt='PHILLIP R MORAN' className='w-full h-full object-cover' />
                </div>
                <div className='p-6'>
                  <h4 className='text-secondary-1 font-rajdhani text-[26px] font-bold leading-[initial]'>PHILLIP R MORAN</h4>
                  <p className='text-secondary-1 font-rajdhani text-lg font-normal leading-[initial]'>MANAGING PARTNER, TechForing Ltd, USA</p>
                  <p className='text-sm font-light text-dark-text-2 mt-4'>With our team efforts and help from all like-minded partners, TechForing wants to build a global ecosystem for cybersecurity intelligence.</p>
                  <div className='flex gap-4 items-center mt-6'>
                    <Link href='#' target='_blank' rel='noopener noreferrer'><Mail /></Link>
                    <Link href='#' target='_blank' rel='noopener noreferrer'><Linkedin /></Link>
                    <Link href='#' target='_blank' rel='noopener noreferrer'><Twitter /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page;