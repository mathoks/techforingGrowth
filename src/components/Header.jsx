"use client"
import React, { useEffect, useState } from 'react';
import headerStyles from '../style/header.module.css';
import { Arrow } from './Icon';
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { BiMenu } from 'react-icons/bi';
import { IoCloseSharp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { companySubList, headerList, legalSubList, moreList, techForingCentSubList, techForingCmsSubList, techForingHumanSubList, techForingTalentSubList } from '../config';
import { Button } from '@/components/SharedComponents';
import { useGlobalContext } from '@/context/globalContext';
import { GoArrowRight } from "react-icons/go";
import Image from 'next/image';
import { extractDomain } from '@/utils/helperFunctions';

const Header = () => {
  const {  setOpenScheduleForm } = useGlobalContext();
  const path = usePathname();
  const split = path.split("/")[1];
  const [subOpen, setSubOpen] = useState("");
  const [open, setOpen] = useState(false);
  const handle_sub_menu = (data) => {
    if (data === subOpen) {
      setSubOpen("");
      return;
    }
    setSubOpen(data);
  }

  const linkRedirect = (index) => {
    if (index) {
      setOpen(false);
    }
  }

  const Dropdown = ({ subList }) => {
    const [activeSubItem, setActiveSubItem] = useState(
      {
        name: subList[0]?.title,
        list: subList[0]?.subSubList,
        cta: subList[0]?.cta
      }
    );
    return (
      <div className={headerStyles.dropdown}>
        <div className='flex gap-10 '>
          <div className='w-3/12 flex flex-col gap-1 border-r-2 border-stone-200'>
            {
              subList.map((subItem, index) => (
                <div key={index} className={`${headerStyles.subList}`}>
                  <h2
                    className={`${activeSubItem?.name === subItem?.title ? headerStyles.active : ''} w-fit`}
                    onMouseEnter={() => setActiveSubItem({
                      name: subItem?.title,
                      list: subItem?.subSubList,
                      cta: subItem?.cta
                    })}
                  >
                    <Link href={subItem?.link} className='text-lg flex items-center gap-2'>
                      {
                        subItem?.iconPath &&
                        <img className='w-6 h-6' src={subItem?.iconPath} alt="" />
                      }
                      <span className='text-nowrap'>{subItem.title}</span>
                      {/* <Arrow /> */}
                    </Link>
                  </h2>
                </div>
              ))
            }
          </div>
          <div className='w-9/12 grid grid-cols-3 gap-10'>
            <div className={`${headerStyles.subSubList} relative subSubList grid grid-cols-subgrid ${activeSubItem.name !== 'TechForing Talent' && activeSubItem.name !== 'TechForing Customer' && activeSubItem.name !== 'TechForing CMS' && activeSubItem.name !== 'Company' && activeSubItem.name !== 'Legal' && 'col-span-2'}`}>
              <ul className='grid grid-rows-5 grid-flow-col gap-x-2 gap-y-3 w-full'>
                {activeSubItem?.list?.map((subSubItem, i2) => {
                  return (
                    <Link
                      href={subSubItem?.link} key={i2}
                      className={`flex items-center gap-3 transition-all cursor-pointer text-xs hover:text-secondary-1`}>
                      {/* {subSubItem.icon} */}
                      <span className='text-sm'>{subSubItem.name}</span>
                    </Link>
                  )
                })}
              </ul>
              {
                !(activeSubItem.name === 'TechForing Talent' || activeSubItem.name === 'Company' || activeSubItem.name === 'Legal' || activeSubItem.name === "TechForing Customer" || activeSubItem.name === 'TechForing CMS') &&
                <div className='absolute bg-stone-200 w-[2px] h-full top-0 left-[45%] '></div>
              }
            </div>
            {/* nav CTA */}
            <div className={`${(activeSubItem.name === 'TechForing Talent' || activeSubItem.name === 'Company' || activeSubItem.name === 'Legal' || activeSubItem.name === 'TechForing Customer' || activeSubItem.name === 'TechForing CMS') && 'col-span-2 flex items-center justify-center'} `}>
              {
                activeSubItem?.cta &&
                <div className='rounded-md bg-stone-100 flex flex-col items-center p-4 gap-2'>
                  <p className='opacity-50 text-center text-sm'>{activeSubItem?.cta?.subTitle}</p>
                  <h2 className='text-center text-primary'>{activeSubItem?.cta?.title}</h2>
                  <Link href={activeSubItem?.cta?.redirect ||""} target='_blank'>
                  <Button className={'action_btn small'} text={activeSubItem?.cta?.button} onClick={() => setOpenScheduleForm(true)} />
                  </Link>
                
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }

  useEffect(() => {
    const nav_link = document.querySelectorAll(".nav_link");
    nav_link.forEach((link, index) => {
      link.addEventListener("click", () => {

        nav_link.forEach((link2, i) => {
          if (index === i) {
            nav_link[i].classList.add("link_active");
          }
          else {
            nav_link[i].classList.remove("link_active");
          }
        })
      })
    })
  }, [])

  const ResourcesDropdown = ({ categories }) => {
    return (
      <div className={headerStyles.dropdown}>
        <div className='p-5 w-full flex items-start justify-center'>
          <div className='w-7/12 grid grid-cols-2 gap-2'>
            {categories?.map((item, index) => (
              <div className='py-1 px-2 hover:bg-light-white2' key={index}>
                <Link href={`/resources/${item.toLowerCase().replace(/ /g, '-')}`} className='text-lightBlack'>
                  <span className='inline-block hover:translate-x-5 transition-transform'>{item}</span>
                </Link>
              </div>
            ))}
          </div>
          {/* Resources SVG Image Section */}
          <div className='w-5/12 bg-lightWhite rounded-lg p-3 ml-3'>
            <div className='bg-white rounded-lg p-1 shadow-lg flex items-center justify-center gap-5'>
              <Image style={{ height: "110px", width: "110px" }} src="/resources/read-more.svg" alt={"Resources"} height={40} width={200} className='rounded-lg' />
              <div className='w-[244px] h-fit '>
                <h4 className=''>Read Our Latest Blog, Articles, Case Studies, Podcasts and More...</h4>
                <div className='flex items-center justify-between pt-1'>
                  <Link className='flex items-center gap-3 text-lg text-primary' href={`/resources`} target='_blank'>
                    <span>Explore</span>
                    <GoArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div>
    );
  };


  const baseURL = "https://cmsadmin.techforing.com/api/v1";
  const [applicationsOpen, setApplicationsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [siteInfo, setSiteInfo] = useState([]);
  const domainName = "https://growth.techforing.com/";
  const [matchedSite, setMatchedSite] = useState(null);

  const fetchSiteName = async () => {
    const response = await fetch(`${baseURL}/blog/site/name/list/?page_size=10&page=1`);
    const data = await response.json();
    setSiteInfo(data?.data?.results);
  };


  const fetchCategories = async () => {
    if (matchedSite) {
      const response = await fetch(`${baseURL}/blog/post/for/all/landingPage/?site=${matchedSite}`);
      const data = await response.json();
      setCategories(data?.all_categories);
    }
  };

  useEffect(() => {
    fetchSiteName();
  }, []);

  useEffect(() => {
    if (siteInfo.length > 0) {
      const domainToMatch = extractDomain(domainName);
      const matched = siteInfo.find(site => extractDomain(site.site_url) === domainToMatch);
      if (matched) {
        setMatchedSite(matched.posted_site);
      }
    }
  }, [domainName, siteInfo]);

  useEffect(() => {
    fetchCategories();
  }, [matchedSite]);

  return (
    <>
      <nav className='px-4 lg:block hidden header_nav sticky top-0 bg-white z-50 h-[75px]'>
        <div className='main_container flex justify-between items-center relative h-full'>
          <div className='w-[12%]'>
            <Link href="/">
              <img src="/footer/TechForing Growth.svg" alt="TechForing Growth" className='w-full' />
            </Link>
          </div>
          <div className='w-[80%] h-full flex justify-end'>
            <ul className='flex items-center'>
              {
                headerList.map((list, index) =>
                  <li key={index} className='nav_list group h-full flex'>
                    {
                      list?.subList ?
                        <span className={`nav_link roboto flex items-center gap-2 cursor-pointer`} >
                          <span>{list?.title}</span>{list?.subList && <Arrow />}
                        </span>
                        :
                        <Link href={list.link} scroll={false} className={`${list.match === split ? "nav_link link_active" : "nav_link"} roboto flex items-center gap-2`} >
                          <span>{list?.title}</span>
                        </Link>
                    }
                    {
                      list?.subList &&
                      <div className='hidden group-hover:block transition-all'>
                        <Dropdown subList={list?.subList} />
                      </div>
                    }
                  </li>
                )
              }
              <li className='nav_list group h-full flex'>
                <Link href={'/resources'} className={`${'resources' === split ? "nav_link link_active" : "nav_link"} roboto flex items-center gap-2`}>
                  <span>Resources</span>{categories && <Arrow />}
                </Link>
                <div className='hidden group-hover:block transition-all'>
                  <ResourcesDropdown categories={categories} />
                </div>
              </li>
              {
                moreList.map((list, index) =>
                  <li key={index} className='nav_list group h-full flex'>
                    {
                      list?.subList ?
                        <span className={`nav_link roboto flex items-center gap-2 cursor-pointer`} >
                          <span>{list?.title}</span>{list?.subList && <Arrow />}
                        </span>
                        :
                        <Link href={list.link} className={`${list.match === split ? "nav_link link_active" : "nav_link"} roboto flex items-center gap-2`} >
                          <span>{list?.title}</span>
                        </Link>
                    }
                    {
                      list?.subList &&
                      <div className='hidden group-hover:block transition-all'>
                        <Dropdown subList={list?.subList} />
                      </div>
                    }
                  </li>
                )
              }
              <li className='nav_list group h-full flex'>
                <Link href={'/contact-us'} className={`${'contact-us' === split ? "nav_link link_active" : "nav_link"} roboto flex items-center gap-2`} >
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
      {/* responsive header section */}
      <div className='lg:hidden block bg-white sticky top-0 px-4 py-1 z-40 res_nav'>
        <div className='flex justify-between items-center'>
          <div className='w-[25%]'>
            <img src="/footer/TechForing Growth.svg" alt="" className='w-[80px]' />
          </div>
          <div className='w-[15%] flex justify-end'>
            <BiMenu className='text-[35px] opacity-90' onClick={() => setOpen(true)} />
          </div>
        </div>
      </div>

      <div className={`${open ? "all_res_nav_list active_nav" : "all_res_nav_list"} flex flex-col `}>
        <img src="/footer/TechForing Growth.svg" alt="" className='w-[70%] logo ml-5 mt-[50px] mb-[10px]' />
        <hr className='border-none w-[50%] h-[2px] bg-[#000] ml-5 mb-[15px] opacity-60' />
        <ul className='text-left mx-5'>
          <li className='res_nav_list'>
            <Link href="/" className="res_nav_link roboto" onClick={() => linkRedirect(true)}>Home</Link>
          </li>
          

          <li className='res_nav_list'>
            <div className="res_nav_link roboto" onClick={() => setApplicationsOpen(!applicationsOpen)}>
              <div className="sub_menu_head">
                <div className='flex justify-between items-center'>
                  <p>Applications</p>
                  <MdKeyboardArrowDown
                    className={`transform transition-transform duration-300 ease-in-out text-[24px] ${applicationsOpen ? "rotate-180 transition-all" : "rotate-0"
                      }`}
                  />
                </div>
              </div>
            </div>
            {applicationsOpen && (
              <ul className="applications_dropdown">

                {/* TechForing Talent */}
                <li className='res_nav_list'>
                  <div className="res_nav_link roboto" >
                    <div className={`${subOpen === "hrms" ? "sub_menu sub_active" : "sub_menu"}`} onClick={() => handle_sub_menu("hrms")}>
                      <div className="sub_menu_head" >
                        <span>TechForing Talent</span>
                        <MdKeyboardArrowDown className={`${subOpen === "hrms" ? "icon_UD sub_active" : "icon_UD"} `} />
                      </div>
                      <div className={`${subOpen === "hrms" ? "dropDown sub_active" : "dropDown"}`}>
                        <ul>
                          {
                            techForingTalentSubList.map((subItem, index) => (
                              <li key={index}>
                                <Link href={subItem?.link} onClick={() => linkRedirect(true)}>{subItem?.name}</Link>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                {/* TechForing Human */}
                <li className='res_nav_list'>
                  <div className="res_nav_link roboto" >
                    <div className={`${subOpen === "Recruitment" ? "sub_menu sub_active" : "sub_menu"}`} onClick={() => handle_sub_menu("Recruitment")}>
                      <div className="sub_menu_head" >
                        <span>TechForing Human</span>
                        <MdKeyboardArrowDown className={`${subOpen === "finance" ? "icon_UD sub_active" : "icon_UD"} `} />
                      </div>
                      <div className={`${subOpen === "finance" ? "dropDown sub_active" : "dropDown"}`}>
                        <ul>
                          {
                            techForingHumanSubList.map((subItem, index) => (
                              <li key={index}>
                                <Link href={subItem?.link} onClick={() => linkRedirect(true)}>{subItem?.name}</Link>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                {/* TechForing Cent */}
                <li className='res_nav_list'>
                  <div className="res_nav_link roboto" >
                    <div className={`${subOpen === "finance" ? "sub_menu sub_active" : "sub_menu"}`} onClick={() => handle_sub_menu("finance")}>
                      <div className="sub_menu_head" >
                        <span>TechForing Cent</span>
                        <MdKeyboardArrowDown className={`${subOpen === "finance" ? "icon_UD sub_active" : "icon_UD"} `} />
                      </div>
                      <div className={`${subOpen === "finance" ? "dropDown sub_active" : "dropDown"}`}>
                        <ul>
                          {
                            techForingCentSubList.map((subItem, index) => (
                              <li key={index}>
                                <Link href={subItem?.link} onClick={() => linkRedirect(true)}>{subItem?.name}</Link>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>


                 {/* TechForing CMS */}
                 <li className='res_nav_list'>
                  <div className="res_nav_link roboto" >
                    <div className={`${subOpen === "cms" ? "sub_menu sub_active" : "sub_menu"}`} onClick={() => handle_sub_menu("cms")}>
                      <div className="sub_menu_head" >
                        <span>TechForing CMS</span>
                        <MdKeyboardArrowDown className={`${subOpen === "cms" ? "icon_UD sub_active" : "icon_UD"} `} />
                      </div>
                      <div className={`${subOpen === "cms" ? "dropDown sub_active" : "dropDown"}`}>
                        <ul>
                          {
                            techForingCmsSubList.map((subItem, index) => (
                              <li key={index}>
                                <Link href={subItem?.link} onClick={() => linkRedirect(true)}>{subItem?.name}</Link>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

              </ul>
            )}
          </li>

          {/* Employee */}
          <li className='res_nav_list'>
            <Link href="/employee" className="res_nav_link roboto" onClick={() => linkRedirect(true)}>Employee (Add-on)</Link>
          </li>
          <li className='res_nav_list'>
            <Link href="/price" className="res_nav_link roboto" onClick={() => linkRedirect(true)}>Price</Link>
          </li>
          {/* Resources */}
          <li className='res_nav_list'>
            <div className="res_nav_link roboto" >
              <div className={`${subOpen === "resources" ? "sub_menu sub_active" : "sub_menu"}`} onClick={() => handle_sub_menu("resources")}>
                <div className="sub_menu_head" >
                  <span>Resources</span>
                  <MdKeyboardArrowDown className={`${subOpen === "resources" ? "icon_UD sub_active" : "icon_UD"} `} />
                </div>
                <div className={`${subOpen === "resources" ? "dropDown sub_active" : "dropDown"}`}>
                  <ul>
                    {
                      categories.map((item, index) => (
                        <li key={index}>
                          <Link href={`/resources/${item.toLowerCase().replace(/ /g, '_')}`}>{item}</Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </li>
          {/* Company */}
          <li className='res_nav_list'>
            <div className="res_nav_link roboto" >
              <div className={`${subOpen === "company" ? "sub_menu sub_active" : "sub_menu"}`} onClick={() => handle_sub_menu("company")}>
                <div className="sub_menu_head" >
                  <span>Company</span>
                  <MdKeyboardArrowDown className={`${subOpen === "company" ? "icon_UD sub_active" : "icon_UD"} `} />
                </div>
                <div className={`${subOpen === "company" ? "dropDown sub_active" : "dropDown"}`}>
                  <ul>
                    {
                      companySubList.map((subItem, index) => (
                        <li key={index}>
                          <Link href={subItem?.link} onClick={() => linkRedirect(true)}>{subItem?.name}</Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </li>
          {/* Legal */}
          <li className='res_nav_list'>
            <div className="res_nav_link roboto" >
              <div className={`${subOpen === "legal" ? "sub_menu sub_active" : "sub_menu"}`} onClick={() => handle_sub_menu("legal")}>
                <div className="sub_menu_head" >
                  <span>Legal</span>
                  <MdKeyboardArrowDown className={`${subOpen === "legal" ? "icon_UD sub_active" : "icon_UD"} `} />
                </div>
                <div className={`${subOpen === "legal" ? "dropDown sub_active" : "dropDown"}`}>
                  <ul>
                    {
                      legalSubList.map((subItem, index) => (
                        <li key={index}>
                          <Link href={subItem?.link} onClick={() => linkRedirect(true)}>{subItem?.name}</Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <IoCloseSharp className='absolute top-[40px] right-[12px] text-[40px] text-[#182F59] opacity-90' onClick={() => setOpen(false)} />
      </div>
    </>
  )
}

export default Header;
