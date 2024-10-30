"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { ImArrowRight2 } from 'react-icons/im';

const bloggingCmsTabs = [
  {
    img: "/Home/Blogging_Cms/icons/globe.svg",
    img2: "/Home/Blogging_Cms/icons/globe-2.svg",
    content: "Site & Category Management",
    match: "site",
  },
  {
    img: "/Home/Blogging_Cms/icons/blog.svg",
    img2: "/Home/Blogging_Cms/icons/blog-2.svg",
    content: "Blog Post Manage",
    match: "blog"
  },
  {
    img: "/Home/Blogging_Cms/icons/social.svg",
    img2: "/Home/Blogging_Cms/icons/social-2.svg",
    content: "Social Accounts Handle",
    match: "social"
  },
  {
    img: "/Home/Blogging_Cms/icons/access.svg",
    img2: "/Home/Blogging_Cms/icons/access-2.svg",
    content: "Access & Security Control",
    match: "access"
  },
]

const BloggingCMS = () => {
  const [selectedBlog, setSelectedBlog] = useState("site");

  const handleOnboarding = (index) => {
    setSelectedBlog(index);
  }

  useEffect(() => {
    const array = [0, -25, -50, -75];

    const bloggingCmsTabs_contents = document.querySelector(".bloggingCmsTabs_contents");

    if (selectedBlog === "blog") {
      bloggingCmsTabs_contents.style.transform = `translateX(${array[1]}%)`;
    }
    else if (selectedBlog === "social") {
      bloggingCmsTabs_contents.style.transform = `translateX(${array[2]}%)`;
    }
    else if (selectedBlog === "access") {
      bloggingCmsTabs_contents.style.transform = `translateX(${array[3]}%)`;
    }
    else {
      bloggingCmsTabs_contents.style.transform = `translateX(${array[0]}%)`;
    }
  }, [selectedBlog])

  useEffect(() => {
    const Blogging_cms_data = document.querySelector(".Blogging_cms_data");
    let isDragging = false;
    let startX;

    const startDragging = (e) => {
      isDragging = true;
      startX = e.touches[0].clientX;
    };

    const stopDragging = () => {
      isDragging = false;
    };

    const dragging = (e) => {
      if (!isDragging) return;
      const touchX = e.touches[0].clientX;
      const movementX = touchX - startX;
      Blogging_cms_data.scrollLeft -= movementX;
      startX = touchX;
    };

    Blogging_cms_data.addEventListener("touchmove", dragging);
    Blogging_cms_data.addEventListener("touchstart", startDragging);
    Blogging_cms_data.addEventListener("touchend", stopDragging);

    return () => {
      Blogging_cms_data.removeEventListener("touchmove", dragging);
      Blogging_cms_data.removeEventListener("touchstart", startDragging);
      Blogging_cms_data.removeEventListener("touchend", stopDragging);
    }
  }, [])

  const portalData = bloggingCmsTabs_contents.filter(portal => portal.match === selectedBlog);

  return (
    <>
      <div className='mt-32 lg:block hidden'>
        <div className='main_container'>
          <h1 className="roboto text-[36px] leading-[48px] font-bold text_gradient_blogingcms text-center">Organize Your Blogging Like Never Before!</h1>

          <div className='mt-10'>
            <ul className='flex justify-between items-center gap-4 bloggingCmsTabs'>
              {bloggingCmsTabs.map((portal, index) => (
                <li key={index} className={`${selectedBlog === portal.match ? "activeTabs2" : ""}  flex items-center justify-center gap-2 py-3 px-4 shadow-shadow6.5x rounded-lg`} onClick={() => setSelectedBlog(portal.match)}>
                  {selectedBlog === portal.match ?
                    <img src={portal.img2} alt="" className='w-[25px] h-[20px] object-contain' /> :
                    <img src={portal.img} alt="" className='w-[25px] h-[20px] object-contain' />
                  }
                  <p className={`'roboto ml-2  ${selectedBlog === portal.match ? 'text-[#FFF]' : 'text-[#45969f]'}`}>{portal.content}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className='mt-32 flex flex-row justify-between items-center gap-16'>
            {portalData.map((contents, i) => (
              <div key={i} className='w-[60%]'>
                <h3 className='lg:w-[80%] w-full roboto text-[28px] font-medium text-[#333] mb-6'>{contents.headTitle}</h3>
                <p className='roboto text-[16px] leading-6 text-light-gray'>{contents.para}</p>

                <div className='flex justify-between items-center gap-2 mt-10'>
                  <div className='w-[85%]'>
                    <ul className='flex justify-between items-center home_list  home_list2'>
                      {contents.list.map((listElement, index) => (
                        <li key={index} className='text-center w-[33.3%]'>
                          <div className='px-2'>
                            <img src={listElement.icon} alt="" className='mx-auto mb-2' />
                            <h4 className='text-light-gray'>{listElement.icon_content}</h4>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className='w-[15%]'>
                    <Link href={`${contents.link}`} className='block bg-green px-[22px] py-[10px] rounded-lg'>
                      <HiArrowNarrowRight className="text-[#FAFAFA] mx-auto text-[26px]" />
                      <span className='text-[#FAFAFA] text-center block'>Explore More</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            <div className='w-[40%]'>
              <div className="relative">
                <img src="/Home/Blogging_Cms/blogging-cms.webp" className='relative z-20' alt="" />
                <img src="/Home/Blogging_Cms/icons/animation/frame-1.svg" alt="" className="blogcms_anim_01 shadow-iconShadow" />
                <img src="/Home/Blogging_Cms/icons/animation/frame-2.svg" alt="" className="blogcms_anim_02 shadow-iconShadow" />
                <img src="./Home/Blogging_Cms/icons/animation/frame-3.svg" alt="" className="blogcms_anim_03 shadow-iconShadow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* responsive */}
      <div className='lg:hidden block py-10 mx-4 overflow-x-hidden'>
        <h1 className="roboto text-[22px] leading-[32px] font-bold text_gradient_blogingcms text-center mb-6">Organize Your Blogging Like Never Before!</h1>
        <div className='Blogging_cms_div'>
          <ul className='Blogging_cms_data'>
            {bloggingCmsTabs.map((portal, index) => (
              <li key={index} className={`${selectedBlog === portal.match ? "bloggingcms_listing_tab active_onboard" : "onboarding_listing_tab"} shadow-shadow6.5x rounded-lg mr-4`} onClick={() => handleOnboarding(portal.match)}>
                <div className='flex items-center justify-center w-[225px]'>
                  {selectedBlog === portal.match ?
                    <img src={portal.img2} alt="" className='w-[25px] h-[20px] object-contain' /> :
                    <img src={portal.img} alt="" className='w-[25px] h-[20px] object-contain' />
                  }
                  <p className={`'roboto ml-2  ${selectedBlog === portal.match ? 'text-[#FFF]' : 'text-[#45969f]'}`}>{portal.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 relative z-10">
          <div className='bg-[#FFF] py-6 px-4 shadow-shadow6x rounded-lg'>
            <div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[90%] h-[105%] bg-[#D3D8E1] z-[-1] border-[2px] border-solid border-[#224642] rounded-[20px] shadow-shadow7x'></div>
            <div className="recruitment_main_contents">
              <div className="bloggingCmsTabs_contents">
                {bloggingCmsTabs_contents.map((portal, i) => (
                  <div key={i} className='w-full'>
                    <h3 className='roboto text-[#333] text-[14px] leading-5 font-medium mb-5 border-l-[3px] border-solid border-[#224642] pl-3'>{portal.headTitle}</h3>
                    <p className='text-[#494949] text-[14px] leading-6 font-light mb-5 text-justify'>{portal.para}</p>

                    <ul className='flex justify-between mb-8 gap-2'>
                      {portal.list.map((listItems, index) => (
                        <li key={index} className='w-full flex-1'>
                          <div className='text-center'>
                            <img src={listItems.icon} alt="" className='mx-auto' />
                            <span className='font-bold text-[10px] text-light-gray leading-4 block mt-2 opacity-80'>{listItems.icon_content}</span>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <a href={portal.link} className='text-[#FFF] bg-green rounded-[20px] w-[65%] mx-auto text-center flex items-center justify-center py-[6px]'>Explore More <ImArrowRight2 className="text-white ml-3" /></a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default BloggingCMS;

const bloggingCmsTabs_contents = [
  {
    match: "site",
    headTitle: "Tidy Up Your Blog Universe: Organize Your Content Management Like No Other!",
    para: "Having trouble with content management? Are your blog posts scattered across the web like lost puzzle pieces? Our site & Category Management is your personal librarian, neatly arranging everything so you can easily find what you need. Easily customize your blog categories and subcategories across multiple websites – from TechForing CMS’s centralized dashboard.",
    list: [
      {
        icon: "/Home/Blogging_Cms/icons/site/record.svg",
        icon_content: "Add & Manage Websites"
      },
      {
        icon: "/Home/Blogging_Cms/icons/site/training.svg",
        icon_content: "Optimize Categories & Sub-Categories"
      },
      {
        icon: "/Home/Blogging_Cms/icons/site/resignation.svg",
        icon_content: "Simplify Blog Creation"
      }
    ],
    link: "/techforing-cms#path_1"
  },
  {
    match: "blog",
    headTitle: "Blogging Simplified: Write, Publish, and Let Your Voice Be Heard With Ease!",
    para: "Ever wished blogging could be as easy as thinking? Make it a reality with our Blog Post Management Tools! Write, format, and publish your content directly to multiple platforms without breaking a sweat. Customize URLs, perform Search Engine Optimization (SEO), and take full control over comments. Focus on your words, not the tech headaches with TechForing CMS.",
    link:'/techforing-cms#path_1',
    list: [
      {
        icon: "/Home/Blogging_Cms/icons/blog/platform.svg",
        icon_content: "Choose Your Platform"
      },
      {
        icon: "/Home/Blogging_Cms/icons/blog/category.svg",
        icon_content: "Organize by Category"
      },
      {
        icon: "/Home/Blogging_Cms/icons/blog/url.svg",
        icon_content: "Customize Your URL"
      }
    ],
        link: "/techforing-cms#path_2"
  },
  {
    match: "social",
    headTitle: "Master Social Media Management: One Dashboard, Endless Possibilities",
    para: "Having trouble getting your content out in every social media? Let our Social Accounts Control feature take over!  Schedule posts, track performance, and manage multiple platforms from a single hub. More engagement, less stress – it’s the social media magic trick you’ve been waiting for!",
    list: [
      {
        icon: "/Home/Blogging_Cms/icons/social/solution.svg",
        icon_content: "Centralized Solution"
      },
      {
        icon: "/Home/Blogging_Cms/icons/social/solution.svg",
        icon_content: "Simplified Access"
      },
      {
        icon: "/Home/Blogging_Cms/icons/social/solution.svg",
        icon_content: "Efficient Scheduling"
      },
    ],
    link: "/techforing-cms#path_3"
  },
  {
    match: "access",
    headTitle: "Your Content, Your Rules: Protect Your Digital Assets With Ironclad Security",
    para: "Safeguard your content and eliminate confusion in your team with complete access and security controls. Easily manage user roles and permissions, ensuring that the right people have the right level of access at all times and that your team is collaborating efficiently.",
    list: [
      {
        icon: "/Home/Blogging_Cms/icons/access/admin.svg",
        icon_content: "Admin"
      },
      {
        icon: "/Home/Blogging_Cms/icons/access/creator.svg",
        icon_content: "Content Creator"
      },
      {
        icon: "/Home/Blogging_Cms/icons/access/editor.svg",
        icon_content: "Content Editor"
      }
    ],
        link: "/techforing-cms#path_4"
  }
]