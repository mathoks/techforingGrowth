import React from 'react'
import PointerGreen from '../../../public/icons/PointerGreen'
import SheduleMeet from '../../../public/icons/SheduleMeet'
import AnimatePointer from '../../../public/icons/AnimatePointer'
import MapIcon from '../../../public/icons/MapIcon'

const MidCTA = ({availiableProduct}) => {
  return (
    <div>MID CTA HERE</div>
    // <div className='custom-container'>
    //     <section className='flex flex-col md:gap-24 gap-10 md:mb-24 mb-10'>
    //     <div className='w-full lg:max-w-[1200px] mx-auto flex flex-col gap-24'>
    //         <div className='w-full mx-auto flex flex-col md:flex-row gap-10 bg-lightWhite p-3 rounded-md'>
    //             <div className='w-full lg:py-1'>
    //                 <div className='flex md:flex-row flex-col items-center justify-evenly gap-5 px-6 md:px-24 py-2'>
    //                     <select name='country' className='w-full py-2 px-2 text-lg rounded-md bg-white text-lightBGText border animate-blinkShadowSlowly'>
    //                         <option></option>
    //                     </select>
    //                     <select className='w-full py-2 px-2 text-lg rounded-md bg-white text-lightBGText border  animate-blinkShadow'>
    //                         <option disabled value selected>Select Product Name</option>
    //                         {availiableProduct.map(({name})=> <option>{name}</option>)}
    //                     </select>
    //                 </div>
    //                 <div className='w-full hidden md:grid grid-cols-2 my-4 px-1 gap-4 lg:gap-4'>
    //                     <div className='left w-full shadow-md rounded-md'>
    //                         <div className='flex items-center justify-center flex-col gap-2 text-center py-4'>
    //                             <div className='py-1'>
    //                                 <h2 className='font-bold text-[30px]'></h2>
    //                                 <p>Share your queries in the form below, and your request will be directed to the right person.</p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className='right w-full shadow-md rounded-md'>
    //                         <div className='flex items-center justify-center flex-col gap-2 text-center py-4'>
    //                             <div className='p-y'>
    //                                 <h2 className='font-bold text-[30px]'>Interested in a Meeting?</h2>
    //                                 <p className='px-1'>We are here to help. Pick a date, schedule a meeting. Let's connect and discuss how we can assist you.</p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className='block md:hidden'>
    //                     <div className=' flex justify-center my-2 pt-3 border-b'>
    //                         <div className=' w-1/2  py-2 flex items-center justify-center gap-2  rounded-se-[28px] cursor-pointer 
    //               bg-[#182F59]/10 text-primary
    //                 cursor-pointer translate-transform duration-700 ease-in-out'>
    //                     <PointerGreen/>
    //                     <h6 className='text-sm md:text-base'>Request A Call Back </h6>
    //                 </div>
    //                 <div className=' w-1/2 py-2 flex  items-center justify-center gap-2 rounded-ss-[28px] cursor-pointer  
    //                  bg-cardBg text-lightBlack 
    //                  cursor-pointer translate-transform duration-700 ease-in-out'>
    //                 <SheduleMeet/>
    //                 <h6 className='text-sm md:text-base'>Schedule A Meeting</h6>
    //                 </div>
    //                     </div>
    //                     <div className='Schedule A Meeting'>
    //                         <div className='flex items-center justify-center flex-col gap-2 text-center pb-4'>
    //                             <div className='py-1'>
    //                                 <h2 className='font-bold text-[30px]'>Want To Get In Touch?</h2>
    //                                 <p>Share your queries in the form below, and your request will be directed to the right person.</p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <p className='border flex mx-auto text-primary md:w-1/2 w-full flex-col text-center p-2 border-primary border-dashed mt-2 rounded-md'>
    //                     <AnimatePointer/>
    //                     Select your country and choose a service to receive the appropriate service form and a link to schedule a meeting with us via Calendly!
    //                 </p>
    //             </div>
    //         </div>
    //     </div>
    //     </section>
    //     <div className='lg:mt-24 mt-20 lg:mb-32 mb-16'>
    //         <h3 className='text-secondary-1 font-bold lg:text-3xl text-2xl text-center mb-8'>Worldwide Offices</h3>
    //         <div className='flex lg:flex-row flex-col justify-between'>
    //             <div className='lg:w-6/12 w-full rounded-md shadow-md overflow-hidden'>
    //                 <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23425.814784432114!2d-86.111313!3d42.783554!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8819f2b92bbfffff%3A0x16aff07fc6a6ad22!2s96%20W%2015th%20St%20Suite%20205%2C%20Holland%2C%20MI%2049423%2C%20USA!5e0!3m2!1sen!2sbd!4v1691491758595!5m2!1sen!2sbd' width={600} height={450} referrerPolicy='no-referrer-when-downgrade' style={{border: "0px"}} loading='lazy'></iframe>
    //             </div>
    //         </div>
    //         <div className='sharedComponents_divider__TeqMq' style={{width: "1px" ,background: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0) 50%, rgba(255, 255, 255, 0) 100%)", height: "100%", opacity: "0.2"}}></div>
    //         <div className='lg:w-5/12 w-full bg-[#FAFAFA] rounded-lg p-[6px] flex flex-col gap-14'>
    //             <div className='flex flex-col items-center gap-4 mt-4'>
    //                 <MapIcon/>
    //                 <p className='text-center text-secondary-1'></p>
    //                 <span>96 west 15th, Suite 205, <br></br></span>
    //                 <span>Holland, Michigan, 49423, USA</span>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  )
}

export default MidCTA