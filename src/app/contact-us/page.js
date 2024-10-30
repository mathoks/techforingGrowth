'use client'
import Header from '@/components/Header'
import { Bangladesh, Canada, Clock, UK, USA } from '@/components/Icon'
import PageCommonBanner from '@/components/PageCommonBanner'
import { Divider } from '@/components/SharedComponents'
import { usePathname } from 'next/navigation'
import React from 'react'
import '../../style/contrCodeInput.css'
import DynamicForms from '@/components/ContactForms/DynamicForms'
const page = () => {
  const pathName = usePathname();
  const [active, setActive] = React.useState('USA')
  return (
    <>
      {/* header part  */}
      <Header pathName={pathName} />
      <PageCommonBanner bgTagImg={imgs} title="Contact Us" />
      <div className="custom-container">
        {/* 1st section start */}
        <DynamicForms />
        {/* 2nd section start */}
        <div className='lg:mt-24 mt-20 lg:mb-32 mb-16' id="world_map">
          <h3 className='text-secondary-1 font-bold lg:text-3xl text-2xl text-center mb-8'>Worldwide Offices</h3>
          <div className='flex lg:flex-row flex-col justify-between'>
            <div className='lg:w-6/12 w-full rounded-md shadow-md overflow-hidden'>
              {findUs[active].location}
            </div>

            <Divider style={{
              width: '1px',
              background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,0) 100%)',
              height: '100%',
              opacity: '0.2',
            }} />

            <div className='lg:w-5/12 w-full bg-[#FAFAFA] rounded-lg p-[6px] flex flex-col gap-14'>
              <div className='flex flex-col items-center gap-4 mt-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="100" viewBox="0 0 70 100" fill="none">
                  <path opacity="0.1" d="M35 47.5C31.7011 47.5 28.5374 46.183 26.2047 43.8388C23.8721 41.4946 22.5616 38.3152 22.5616 35C22.5616 31.6848 23.8721 28.5054 26.2047 26.1612C28.5374 23.817 31.7011 22.5 35 22.5C38.2989 22.5 41.4626 23.817 43.7953 26.1612C46.128 28.5054 47.4384 31.6848 47.4384 35C47.4384 36.6415 47.1167 38.267 46.4916 39.7835C45.8665 41.3001 44.9503 42.6781 43.7953 43.8388C42.6403 44.9996 41.2691 45.9203 39.76 46.5485C38.2509 47.1767 36.6334 47.5 35 47.5ZM35 0C25.7632 0 16.9046 3.68749 10.3732 10.2513C3.84175 16.815 0.172424 25.7174 0.172424 35C0.172424 61.25 35 100 35 100C35 100 69.8276 61.25 69.8276 35C69.8276 25.7174 66.1583 16.815 59.6268 10.2513C53.0954 3.68749 44.2369 0 35 0Z" fill="#182F59" />
                </svg>
                <p className='text-center text-secondary-1'>
                  {findUs[active].address.split('\n').map((item, index) => (
                    <span key={index}>{item}<br /></span>
                  ))}
                </p>
              </div>

              <div className='grid lg:grid-cols-3 grid-cols-2 gap-2 text-black p-2'>
                <div className={`${active === 'USA' ? 'bg-primary bg-opacity-50 transition-all' : 'bg-white'}  rounded-md flex items-center p-4 shadow-md cursor-pointer`}
                  onClick={() => setActive('USA')}>
                  <USA /> <p className='lg:text-[16px] text-[13px] ml-2'>USA</p>
                </div>
                <div className={`${active === 'UK' ? 'bg-primary bg-opacity-50 transition-all' : 'bg-white'}  rounded-md flex items-center p-4 shadow-md cursor-pointer`}
                  onClick={() => setActive('UK')}>
                  <UK /> <p className='lg:text-[16px] text-[13px] ml-2'>UK</p>
                </div>
                <div className={`${active === 'CANADA' ? 'bg-primary bg-opacity-50 transition-all' : 'bg-white'}  rounded-md flex items-center p-4 shadow-md cursor-pointer`}
                  onClick={() => setActive('CANADA')}>
                  <Canada /> <p className='lg:text-[16px] text-[13px] ml-2'>CANADA</p>
                </div>
                <div className={`${active === 'TURKEY' ? 'bg-primary bg-opacity-50 transition-all' : 'bg-white'}  rounded-md flex items-center p-4 shadow-md cursor-pointer`}
                  onClick={() => setActive('TURKEY')}>
                  <img src='/turkey.webp' className='w-6 h-6' alt='turkey' />
                  <p className='lg:text-[16px] text-[13px] ml-2'>TURKEY</p>
                </div>
                {/* <div className={`${active === 'IND' ? 'bg-primary bg-opacity-50 transition-all' : 'bg-white'}  rounded-md flex items-center p-4 shadow-md cursor-pointer`}
                  onClick={() => setActive('IND')}>
                  <img src='/india.webp' className='w-6 h-6' alt='india' />
                  <p className='lg:text-[16px] text-[13px] ml-2'>INDIA</p>
                </div> */}
                <div className={`${active === 'BD' ? 'bg-primary bg-opacity-50 transition-all' : 'bg-white'}  rounded-md flex items-center py-4 ps-4 shadow-md cursor-pointer`}
                  onClick={() => setActive('BD')}>
                  <Bangladesh /> <p className='lg:text-[16px] text-[13px] ml-2'>BANGLADESH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd section end */}
      </div>
    </>
  )
}

export default page
const findUs = {
  USA: {
    address: '96 west 15th, Suite 205,\nHolland, Michigan, 49423, USA',
    location: <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23425.814784432114!2d-86.111313!3d42.783554!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8819f2b92bbfffff%3A0x16aff07fc6a6ad22!2s96%20W%2015th%20St%20Suite%20205%2C%20Holland%2C%20MI%2049423%2C%20USA!5e0!3m2!1sen!2sbd!4v1691491758595!5m2!1sen!2sbd" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  },
  UK: {
    address: '71–75 Shelton Street, Covent Garden,\nLondon, WC2H 9JQ, United Kingdom',
    location: <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21465.692383576486!2d12.508828!3d47.73855!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca66e312795%3A0x7ffd0edc82aa7573!2sCS24!5e0!3m2!1sen!2sbd!4v1691491801378!5m2!1sen!2sbd" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  },
  CANADA: {
    address: 'University Avenue, Suite 2200,\nToronto, Ontario, Canada, M5H 3M7',
    location: <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23095.58908103613!2d-79.385359!3d43.649237!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d2063fffff%3A0x6ade89c37141d35d!2s181%20University%20Ave%20%232200%2C%20Toronto%2C%20ON%20M5H%203M7%2C%20Canada!5e0!3m2!1sen!2sbd!4v1691492229793!5m2!1sen!2sbd" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  },
  TURKEY: {
    address: 'Kampyolu Caddesi, Kartal,\nIstanbul, Turkey',
    location: <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24123.69051686111!2d29.159671000000003!3d40.90563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac366f23bf157%3A0x8e4dea29bace64e5!2sTechForing%20Ltd.!5e0!3m2!1sen!2sbd!4v1691491932902!5m2!1sen!2sbd" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  },
  IND: {
    address: 'DLF Two Horizon Centre, 5th Floor, DLF Phase V , Sector 43,\nGolf course Road, Gurgaon, Haryana 122009, India',
    location: <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112254.38789502511!2d77.096281!3d28.450935000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18b58a137a1b%3A0x769c85e8414cd673!2sCorporatedge%20Two%20Horizon%20Centre!5e0!3m2!1sen!2sbd!4v1691492264219!5m2!1sen!2sbd" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  },
  BD: {
    address: 'Lane 1, Building 149, Suite 04,\nBaridhara DOHS, Dhaka',
    location: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.097265171372!2d90.41050707413875!3d23.815140086290118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c164817819b3%3A0x6056fe3699c5fd4e!2sTechForing%20Limited!5e0!3m2!1sen!2sbd!4v1691489212336!5m2!1sen!2sbd" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  },
}

const imgs = [
  <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
    <g opacity="0.15">
      <path d="M43.8563 33.3233C41.0375 33.3233 38.3104 32.89 35.7667 32.11C35.3682 31.9823 34.9397 31.9633 34.5303 32.0553C34.1209 32.1473 33.7472 32.3465 33.4521 32.63L29.8542 36.8983C23.3687 33.9733 17.2958 28.4483 14.0646 22.1L18.5333 18.5033C19.1521 17.8967 19.3354 17.0517 19.0833 16.2933C18.2354 13.8883 17.8 11.31 17.8 8.645C17.8 7.475 16.7688 6.5 15.5313 6.5H7.60208C6.36458 6.5 4.875 7.02 4.875 8.645C4.875 28.7733 22.5896 45.5 43.8563 45.5C45.4833 45.5 46.125 44.135 46.125 42.9433V35.4683C46.125 34.2983 45.0938 33.3233 43.8563 33.3233Z" fill="#5BBC2E" />
    </g>
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
    <g opacity="0.15" clipPath="url(#clip0_1518_35885)">
      <path d="M40.6404 27.3585L33.5977 31.1532L21.2649 8.26425L28.3077 4.46956L40.6404 27.3585ZM34.4097 28.4438L37.931 26.5465L27.4956 7.17892L23.9743 9.07627L34.4097 28.4438ZM31.837 32.1019L24.7942 35.8966L16.2562 20.0504L23.2989 16.2557L31.837 32.1019ZM25.6062 33.1872L29.1276 31.2898L22.4869 18.965L18.9655 20.8624L25.6062 33.1872ZM23.0335 36.8452L15.9908 40.6399L10.2987 30.0758L17.3415 26.2811L23.0335 36.8452ZM16.8028 37.9306L20.3242 36.0332L16.5295 28.9905L13.0081 30.8878L16.8028 37.9306Z" fill="#5BBC2E" />
    </g>
    <defs>
      <clipPath id="clip0_1518_35885">
        <rect width="32" height="32" fill="white" transform="translate(0 15.1787) rotate(-28.3161)" />
      </clipPath>
    </defs>
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
    <g opacity="0.15" clipPath="url(#clip0_1557_32659)">
      <path d="M19.6822 36.9451C20.594 37.6276 21.3857 38.4082 22.0572 39.2867C22.7287 40.1652 23.2763 41.1172 23.7 42.1428C24.1238 43.1685 24.3906 44.2301 24.5004 45.3278C24.6102 46.4256 24.5734 47.5453 24.39 48.687L21.4347 48.1713C21.6469 46.9553 21.6161 45.7683 21.3423 44.6102C21.0686 43.4522 20.6014 42.4031 19.9406 41.463C19.2799 40.523 18.4447 39.719 17.4351 39.0511C16.4255 38.3832 15.3191 37.9522 14.1158 37.7581C12.8844 37.5433 11.6974 37.574 10.5547 37.8505C9.41207 38.1269 8.36301 38.5941 7.40754 39.2522C6.45207 39.9102 5.64809 40.7454 4.99562 41.7577C4.34314 42.77 3.91215 43.8764 3.70264 45.077L0.747296 44.5613C0.943374 43.4377 1.28666 42.3794 1.77716 41.3864C2.26765 40.3934 2.87824 39.4849 3.60892 38.6607C4.3396 37.8365 5.1696 37.1249 6.09894 36.5257C7.02827 35.9266 8.04655 35.4539 9.15377 35.1079C8.16246 34.0625 7.46005 32.8614 7.04652 31.5045C6.633 30.1476 6.54979 28.7611 6.79691 27.345C7.0091 26.129 7.44009 25.0225 8.08988 24.0256C8.73968 23.0288 9.53461 22.1999 10.4747 21.5392C11.4148 20.8785 12.4652 20.4035 13.6259 20.1144C14.7866 19.8252 15.9814 19.7958 17.2101 20.0261C18.6262 20.2732 19.9025 20.8211 21.0392 21.6697C22.1759 22.5184 23.0681 23.5861 23.7159 24.8729C24.5023 23.8205 25.4288 22.9195 26.4954 22.1698C27.562 21.4201 28.7236 20.8536 29.9801 20.4701C28.9888 19.4247 28.2864 18.2236 27.8728 16.8667C27.4593 15.5098 27.3761 14.1233 27.6232 12.7072C27.8354 11.4912 28.2664 10.3848 28.9162 9.38786C29.566 8.39097 30.3609 7.56216 31.301 6.90143C32.2411 6.2407 33.2915 5.76576 34.4522 5.47661C35.613 5.18747 36.8077 5.15803 38.0364 5.3883C39.2524 5.6005 40.3588 6.03149 41.3557 6.68128C42.3526 7.33107 43.1814 8.12601 43.8421 9.06609C44.5029 10.0062 44.9765 11.0643 45.2629 12.2404C45.5494 13.4165 45.5802 14.6035 45.3553 15.8015C45.1082 17.2176 44.5603 18.4939 43.7116 19.6306C42.863 20.7673 41.7953 21.6595 40.5085 22.3073C41.4204 22.9899 42.212 23.7704 42.8835 24.6489C43.555 25.5274 44.1026 26.4795 44.5263 27.5051C44.9501 28.5307 45.2169 29.5923 45.3267 30.6901C45.4365 31.7878 45.3997 32.9075 45.2163 34.0492L42.261 33.5335C42.4732 32.3175 42.4424 31.1305 42.1687 29.9724C41.8949 28.8144 41.4277 27.7653 40.7669 26.8253C40.1062 25.8852 39.271 25.0812 38.2614 24.4133C37.2518 23.7455 36.1454 23.3145 34.9421 23.1204C33.7107 22.9055 32.5237 22.9363 31.381 23.2127C30.2384 23.4891 29.1893 23.9564 28.2339 24.6144C27.2784 25.2725 26.4744 26.1076 25.8219 27.1199C25.1695 28.1322 24.7385 29.2386 24.529 30.4392C24.2818 31.8553 23.734 33.1317 22.8853 34.2684C22.0367 35.405 20.9689 36.2973 19.6822 36.9451ZM30.5786 13.2229C30.4362 14.0387 30.4572 14.8275 30.6415 15.5893C30.8258 16.351 31.1389 17.056 31.581 17.7041C32.023 18.3523 32.5725 18.8843 33.2295 19.3003C33.8866 19.7164 34.6293 20.0046 35.4578 20.165C36.2736 20.3074 37.0624 20.2864 37.8242 20.1021C38.5859 19.9178 39.2909 19.6047 39.939 19.1626C40.5872 18.7206 41.1192 18.171 41.5353 17.514C41.9513 16.857 42.2395 16.1143 42.3999 15.2858C42.5423 14.47 42.5213 13.6812 42.337 12.9194C42.1527 12.1576 41.8396 11.4527 41.3975 10.8045C40.9555 10.1564 40.406 9.62433 39.7489 9.20832C39.0919 8.79231 38.3492 8.50408 37.5207 8.34365C36.7049 8.20129 35.9161 8.22225 35.1543 8.40655C34.3925 8.59084 33.6876 8.904 33.0395 9.34604C32.3913 9.78808 31.8592 10.3376 31.4432 10.9946C31.0272 11.6516 30.739 12.3944 30.5786 13.2229ZM9.75225 27.8607C9.60989 28.6765 9.63086 29.4653 9.81515 30.227C9.99944 30.9888 10.3126 31.6938 10.7546 32.3419C11.1967 32.99 11.7462 33.5221 12.4032 33.9381C13.0602 34.3541 13.803 34.6424 14.6315 34.8028C15.4473 34.9451 16.2361 34.9242 16.9979 34.7399C17.7596 34.5556 18.4646 34.2424 19.1127 33.8004C19.7609 33.3584 20.2929 32.8088 20.7089 32.1518C21.125 31.4948 21.4132 30.752 21.5736 29.9235C21.716 29.1077 21.695 28.3189 21.5107 27.5572C21.3264 26.7954 21.0133 26.0905 20.5712 25.4423C20.1292 24.7942 19.5796 24.2621 18.9226 23.8461C18.2656 23.4301 17.5229 23.1419 16.6944 22.9814C15.8786 22.8391 15.0898 22.86 14.328 23.0443C13.5662 23.2286 12.8613 23.5418 12.2131 23.9838C11.565 24.4259 11.0329 24.9754 10.6169 25.6324C10.2009 26.2894 9.91268 27.0322 9.75225 27.8607ZM32.3636 37.8971L50.0956 40.9913L49.5799 43.9467L31.8478 40.8524L32.3636 37.8971ZM30.8164 46.7631L31.3321 43.8077L49.0642 46.902L48.5485 49.8573L30.8164 46.7631ZM29.785 52.6738L30.3007 49.7184L48.0328 52.8127L47.517 55.768L29.785 52.6738Z" fill="#5BBC2E" />
    </g>
    <defs>
      <clipPath id="clip0_1557_32659">
        <rect width="48" height="48" fill="white" transform="translate(8.48297 0.231445) rotate(9.89853)" />
      </clipPath>
    </defs>
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
    <g opacity="0.15" clipPath="url(#clip0_1557_32663)">
      <path d="M32.3066 27.1286L14.3726 32.307L9.19423 14.373L27.1282 9.19463M26.3885 6.63263L8.45446 11.811C7.77497 12.0072 7.20126 12.4653 6.85952 13.0845C6.51779 13.7037 6.43603 14.4333 6.63222 15.1128L11.8106 33.0468C12.0068 33.7263 12.4649 34.3 13.0841 34.6417C13.7033 34.9835 14.4329 35.0652 15.1124 34.869L33.0464 29.6906C33.7259 29.4944 34.2996 29.0364 34.6413 28.4172C34.9831 27.798 35.0648 27.0684 34.8686 26.3889L29.6902 8.45486C29.494 7.77538 29.036 7.20166 28.4168 6.85993C27.7976 6.51819 27.068 6.43643 26.3885 6.63263ZM28.0869 24.5306C27.5321 22.6091 23.4117 22.758 21.4902 23.3128C19.5687 23.8677 16.0031 25.9381 16.5579 27.8596L16.8353 28.8203L28.3644 25.4914M20.8429 21.0711C21.6073 20.8504 22.2527 20.335 22.6372 19.6384C23.0216 18.9418 23.1136 18.121 22.8929 17.3566C22.6722 16.5922 22.1568 15.9467 21.4602 15.5623C20.7636 15.1778 19.9428 15.0859 19.1784 15.3066C18.414 15.5273 17.7686 16.0426 17.3841 16.7393C16.9997 17.4359 16.9077 18.2566 17.1284 19.0211C17.3491 19.7855 17.8645 20.4309 18.5611 20.8154C19.2577 21.1998 20.0785 21.2918 20.8429 21.0711Z" fill="#5BBC2E" />
    </g>
    <defs>
      <clipPath id="clip0_1557_32663">
        <rect width="32" height="32" fill="white" transform="translate(0.939819 9.81738) rotate(-16.1059)" />
      </clipPath>
    </defs>
  </svg>
]