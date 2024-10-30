"use client"
import React, { useState } from 'react'
import "../app/globals.css";
import f from '../style/footer.module.css'
import { SocialLinks, Button } from './SharedComponents';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Link from 'next/link';

const Footer = () => {
  const [footer01, setFooter01] = useState(false);
  const [footer02, setFooter02] = useState(false);
  const [footer03, setFooter03] = useState(false);

  const footerList = [
    {
      title: 'Company',
      list: [
        {
          name: 'About Us',
          link: '/about-us'
        },
        {
          name: 'Price',
          link: '/price'
        },
        {
          name: 'FAQ\'s',
          link: '/faq'
        },
        {
          name: 'Contact Us',
          link: '/contact-us'
        }
      ]
    },
    {
      title: 'Applications',
      list: [
        {
          name: 'TechForing Human',
          link: '/techforing-human'
        },
        {
          name: 'TechForing Talent',
          link: '/techforing-talent'
        },
        {
          name: 'TechForing Cent',
          link: '/techforing-cent'
        },
        {
          name: 'Employee (Add-on)',
          link: '/employee'
        }
      ]
    },
    {
      title: 'Locations',
      list: [
        {
          name: 'USA',
          link: '/contact-us#world_map'
        },
        {
          name: 'Canada',
          link: '/contact-us#world_map'
        },
        {
          name: 'UK',
          link: '/contact-us#world_map'
        },
        {
          name: 'Turkey',
          link: '/contact-us#world_map'
        },
        // {
        //   name: 'India',
        //   link: '/contact-us#world_map'
        // },
        {
          name: 'Bangladesh',
          link: '/contact-us#world_map'
        }
      ]
    },
  ]
  const policy = [
    {
      name: 'Privacy Policy',
      link: '/more/privacy_policy'
    },
    {
      name: 'Terms & Conditions',
      link: '/more/terms_condition'
    }
  ]

  const companyDetails = {
    title: 'Company Details',
    list: ['Business Name:  TechForing LLC.', 'Company No:  802448332', 'License Provided by:  Michigan Department of Licensing and regulatory Affairs',]
  }
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className={`${f.footer} bg-[#FAFAFA] lg:block hidden`}>
        <div className="custom-container flex gap-12">
          <div className={`${f.right} bg-white`}>
            <div>
              <img src="/footer/TechForing Growth.svg" alt="" className='w-[180px] h-[90px] mx-auto mb-8' />
            </div>
            <div className='w-fit'>
              <p className='mb-4 text-dark-text-3 text-center'>Follow Us</p>
              <SocialLinks style={{ fill: "var(--primary)" }} />
            </div>

            <div className="copyright w-full mt-6">
              <p className='text-dark-text-2 font-normal text-sm text-center'>
                Copyright © {currentYear} Techforing Ltd.
              </p>
            </div>
          </div>

          <div className={`${f.left} py-6 relative`}>
            <div className="bottomLinearDivider relative">
              <p className='text-dark-text-2 font-light text-center mb-4'>Subscribe to stay tuned for the latest updates. Let's do it! </p>
              <div className="flex gap-4" suppressHydrationWarning={true}>
                <iframe
                  title="YourIframe"
                  srcDoc={`
        <html lang="en">
          <head>
          </head>
          <body>
            <div>
              <style>
                  body{
                    background-color: #FAFAFA !important;
                  }
                  .kartra_optin_tpl_0{
                    max-width: 100% !important;
                  }
                  .kartra_optin_wrapper{
                    border: none !important;
                  }
                  .kartra_optin_content_wrapper_inner{
                    padding: 10px !important;
                    display: flex !important;
                    justify-content: center !important;
                    height:65px !important;
                    gap: 10px !important;
                  }
                  .kartra_optin_controls ,
                  .kartra_optin_cg.kartra_optin_field{
                    height: 100% !important;
                  }
                  [class^=kartra_optin_tpl_].kartra_optin_force_breaking_point_xlarge.kartra_optin_icon i.kartra_optin_i{
                    top: 16px !important;
                    right: 12px !important;
                    font-size: 16px !important;
                  }
                  [class^=kartra_optin_tpl_].kartra_optin_force_breaking_point_xlarge .kartra_optin_asterisk {
                    font-size: 20px !important;
                    bottom: 20px !important;
                  }
                  .kartra_optin_controls input{
                    height: 100% !important;
                    font-size: 14px !important;
                  }
                  #kartra_optin_form_fields_container {
                    display: flex !important;
                    gap: 10px !important;
                    align-items: center !important;
                  }
                  .kartra_optin_cg.kartra_optin_field{
                    margin-bottom: 0 !important;
                  }
                  .kartra_optin_content_wrapper_inner button{
                    margin-top: 0 !important;
                    padding-top: 0 !important;
                    padding-bottom: 0 !important;
                    padding-left: 30px !important;
                    padding-right: 30px !important;
                    width: fit-content !important;
                    white-space: nowrap !important;
                    font-size: 16px !important;
                  }
              </style>
              <div class="kartra_optin_container9f61408e3afb633e50cdf1b20de6f466">
              </div>
            </div>
          <script src="https://app.kartra.com/optin/98dlF1hiOkXc"></script>
          </body>
        </html>
      `}
                  className='w-full h-[85px]'
                ></iframe>
              </div>
            </div>
            <div className="bottom flex items-start gap-8">
              {
                footerList.map((item, index) => (
                  <div key={index} style={{ width: `${100 / footerList.length}%`, minWidth: 'fit-content' }}>
                    <p className='mb-8 font-semibold text-lg'>{item.title}</p>
                    {
                      item.title === 'Locations' ?
                        <ul className='grid grid-cols-2 gap-4'>
                          {
                            item.list.map((listItem, i2) => (
                              <li key={i2} className='text-dark-text-2 font-light text-base'><Link href={listItem.link}>{listItem.name}</Link></li>
                            ))
                          }
                        </ul>
                        :
                        <ul className='flex flex-col gap-4'>
                          {
                            item.list.map((listItem, i2) => (
                              <li key={i2} className='text-dark-text-2 font-light text-base'><Link href={listItem.link}>{listItem.name}</Link></li>
                            ))
                          }
                        </ul>
                    }
                  </div>
                )
                )
              }
            </div>
            <div>
              <ul className='flex gap-4'>
                {
                  policy.map((item, index) => (
                    <li key={index} className='text-dark-text-2 font-light text-xs'><Link href={item.link}>{item.name}</Link></li>
                  ))
                }
              </ul>
            </div>
            <a className="absolute top-[40px] right-0 " href="#">
              <img src="/footer/up.webp" alt="" className="w-[25px]" />
            </a>
          </div>
        </div>
      </div>

      {/* Responsive footer */}
      <footer className='py-10 px-4 lg:hidden block'>
        <div>
          <img src="/footer/TechForing Growth.svg" alt="" className='w-[200px] mx-auto mb-8' />
          <p className='roboto text-[14px] font-light leading-5 text-[#333] text-center'>Subscribe to stay tuned for the latest updates. Let's do it! </p>
        </div>
        <div className="flex gap-4" suppressHydrationWarning={true}>
          <iframe
            title="YourIframe"
            srcDoc={`
        <html lang="en">
          <head>
          </head>
          <body>
            <div>
              <div class="kartra_optin_container9f61408e3afb633e50cdf1b20de6f466">
              </div>
            </div>
          <script src="https://app.kartra.com/optin/98dlF1hiOkXc"></script>
          </body>
        </html>
      `}
            className='w-fit m-auto lg:h-[120px] h-[250px]'
          ></iframe>
        </div>

        <div className='py-5'>
          <div className={`${footer01 ? "f_accordion_main_div f_Active" : "f_accordion_main_div"} mb-5`} onClick={() => setFooter01(!footer01)}>
            <div className='f_accordion_head'>
              <span className='roboto text-[14px] font-medium leading-5 text-[#333] '>Company</span>
              <MdKeyboardArrowDown className='arrow_toggle' />
            </div>
            <div className={`${footer01 ? "f_accordion_body f_Active" : "f_accordion_body"}`}>
              <ul className='unOrderList'>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/price">Price</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ's</Link>
                </li>
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={`${footer02 ? "f_accordion_main_div f_Active" : "f_accordion_main_div"} mb-5`} onClick={() => setFooter02(!footer02)}>
            <div className='f_accordion_head'>
              <span className='roboto text-[14px] font-medium leading-5 text-[#333] '>Feature</span>
              <MdKeyboardArrowDown className='arrow_toggle' />
            </div>
            <div className={`${footer02 ? "f_accordion_body f_Active" : "f_accordion_body"}`}>
              <ul className='unOrderList'>
                <li>
                  <Link href="/hrms">HRMS</Link>
                </li>
                <li>
                  <Link href="/recruitment">Recruitment</Link>
                </li>
                <li>
                  <Link href="/finance">Finance</Link>
                </li>
                <li>
                  <Link href="/personal">Personal</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={`${footer03 ? "f_accordion_main_div f_Active" : "f_accordion_main_div"} mb-5`} onClick={() => setFooter03(!footer03)}>
            <div className='f_accordion_head'>
              <span className='roboto text-[14px] font-medium leading-5 text-[#333] '>Locations</span>
              <MdKeyboardArrowDown className='arrow_toggle' />
            </div>
            <div className={`${footer03 ? "f_accordion_body f_Active" : "f_accordion_body"}`}>
              <ul className='unOrderList'>
                <li>
                  <Link href="/contact-us#world_map">USA</Link>
                </li>
                <li>
                  <Link href="/contact-us#world_map">Canada</Link>
                </li>
                <li>
                  <Link href="/contact-us#world_map">UK</Link>
                </li>
                <li>
                  <Link href="/contact-us#world_map">Turkey</Link>
                </li>
                <li>
                  <Link href="/contact-us#world_map">India</Link>
                </li>
                <li>
                  <Link href="/contact-us#world_map">Bangladesh</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='flex justify-between items-center py-7 social_media'>
          <p className='roboto text-[16px] font-medium text-light-gray'>Follow us</p>
          <SocialLinks style={{ fill: 'var(--primary)', gap: 'gap-3' }} />
        </div>

        <div className='copyRIght pt-5 relative'>
          <p className='roboto leading-6 text-[12px] text-light-gray text-center'>Copyright © {new Date().getFullYear()} Techforing Ltd.</p>
          <Link href="#" className='absolute bottom-0 right-0 '>
            <img src="/footer/up.webp" alt="" className='w-[25px]' />
          </Link>
        </div>
      </footer>
    </>
  )
}

export default Footer;


