'use client';
import '@/style/cms/cms-styles.css'
import Accordion_component from '@/components/Accordion_component/Accordion_component';
import AccessAndSecurityControl from '@/components/Cms/AccessAndSecurityControl';
import CmsBanner from '@/components/Cms/CmsBanner';
import CmsBlog from '@/components/Cms/CmsBlog';
import CmsWorkflow from '@/components/Cms/CmsWorkflow';
import PerfectBlogsSection from '@/components/Cms/PerfectBlogs';
import SaveTimeAndConsistancy from '@/components/Cms/SaveTimeAndConsistancy';
import SeamlessSocialPost from '@/components/Cms/SeamlessSocialPost';
import Hidden_Costs_Section from '@/components/Common/HiddenCosts_Section';
import Header from '@/components/Header';
import { AccessIcon, BlogIcon, GlobeIcon, SocialIcon } from '@/components/Icon';
import { Button } from '@/components/SharedComponents';
import { useGlobalContext } from '@/context/globalContext';
import { hiddenCostData_cms } from '@/dummyData';
import FooterCTA from '@/section/FooterCTA';
import ResDropNav from '@/section/ResDropNav';
import StyledCTA from '@/section/StyledCTA';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { MdArrowForwardIos } from 'react-icons/md';
import { useIntersectionObserver } from '@/utils/hooks';

const CmsPage = () => {

    const pathName = usePathname();
    const [drop, setDrop] = useState(false)
    const { setOpenScheduleForm } = useGlobalContext();
    const [activePath, setActivePath] = useState('');
    const [mounted, setMounted] = useState(false);

    const [inViewSections, observeSection] = useIntersectionObserver({ threshold: 0.5 });

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        const handleHashChange = () => {
            if (typeof window !== "undefined" && window.location.hash) {
                const hash = window.location.hash.slice(1);
                const element = document.getElementById(hash);
    
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    element.style.scrollMarginTop = '160PX';
                } else {
                    // If the element is not yet available, try again after a short delay
                    setTimeout(() => {
                        const delayedElement = document.getElementById(hash);
                        if (delayedElement) {
                            delayedElement.scrollIntoView({ behavior: 'smooth' });
                            delayedElement.style.scrollMarginTop = '160PX';
                        }
                    }, 100); // Adjust the delay time if necessary
                }
            }
        };
    
        // Run when the component mounts
        handleHashChange();
    
        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);
    
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);    


    useEffect(() => {
        if (inViewSections.path_1) {
            setActivePath('path_1');
        } else if (inViewSections.path_2) {
            setActivePath('path_2');
        } else if (inViewSections.path_3) {
            setActivePath('path_3');
        } else if (inViewSections.path_4) {
            setActivePath('path_4');
        } else {
            setActivePath('')
        }
    }, [inViewSections]);

    if (!mounted) return null


    return (
        <div className='overflow-hidden md:overflow-visible'>
            <Header pathName={pathName} />
            {/* routes navbar section >> Mobile Version */}
            <div className='lg:hidden block sticky_cms z-20'>
                <div className='flex items-center'>
                    <div className='w-[30%]'>
                        <div className='w-full cms_gradient relative py-[15px] px-3' onClick={() => setDrop(!drop)}>
                            <span className='text-[#FFF] font-medium'>CMS</span>
                            <MdArrowForwardIos className='absolute top-[50%] translate-y-[-50%] right-1 text-[#FFF] text-[12px]' />
                            <div className={`${drop ? "dropdown activeDrop" : "dropdown"} absolute bottom-[-132px] left-0 w-full`}>
                                <ResDropNav active={'/techforing-cms/'} />
                            </div>
                        </div>
                    </div>

                    <div className='w-[70%]'>
                        <ul className='tab_box bg-[#FFF]'>
                            {
                                route_pages.map((route, index) => (
                                    <li key={index} className='px-2 py-1 min-w-[150px]'>
                                        <a href={`#${route.link}`} className="tab_items" >
                                            <div className="w-[24px]">
                                                {route.svg}
                                            </div>
                                            <span className="tab_content ml-2 text-[7px]">{route.content}</span>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <CmsBanner />
            {/* routes navbar section >> Desktop Version */}
            <nav className='lg:block hidden sticky top-[75px] z-30 mb-24 mt-20'>
                <div className='max-w-[1200px] mx-auto'>
                    <ul className="bg-light-white2 text-center grid grid-cols-4 shadow-shadow4.5x rounded-lg overflow-hidden">
                        {
                            route_pages.map(({ svg, content, link }, index) => (
                                <li key={index} className={`cms_route_elements transition-all ${activePath == link ? 'active' : ''}`}>
                                    <a href={`#${link}`} className='py-4 transition-all flex flex-col gap-1 justify-center items-center'>
                                        <div className="w-[24px] mySvg">
                                            {svg}
                                        </div>
                                        <span className='cms_nav_title_content'>{content}</span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
            <CmsWorkflow />
            <Hidden_Costs_Section textColor={"#0c7a88"} data={hiddenCostData_cms} />
            {/* Clients in the loop >> CTA Section */}
            <StyledCTA
                imgSrc={'/CMS/client-in-loop.webp'}
                content={
                    <div className='flex flex-col md:gap-[18px] gap-1 p-4 md:p-0'>
                        <b className='md:text-[37px] text-sm  leading-normal text-primary md:-mb-5'>Don’t<span className='text-[#085459] text-xs pl-2'>Have Your Content in Scattered Everywhere!</span></b>
                        <p className='text-[#085459] text-[10px] md:text-[22px] font-light lg:max-w-[420px]'>
                            Centralize Your Content with Our <span className='text-[#075157] font-bold'>Intuitive CMS</span> Today & Streamline Your <span className='text-primary'>
                                Content Management
                            </span>
                        </p>
                        <Button className={'action_btn py-1'} text={'See It In Action'} onClick={() => setOpenScheduleForm(true)} />
                    </div>
                }
            />

            <div className='scroll-mt-28' ref={el => observeSection(el)} id='path_1'>
                <CmsBlog />
            </div>
            <div ref={el => observeSection(el)} id='path_2' className='scroll-mt-16'>
                <PerfectBlogsSection />
            </div>

            {/*save time section */}
            <section className='next_level  relative'>

                <div className='main_container flex flex-row gap-2 justify-between items-center max-sm:py-0 pl-4 py-2'>
                    <div className="w-[50%]">
                        <h2 className='inter text-lg md:text-3xl font-bold  lg:leading-[48px] leading-[22px] text-[#08747f]'>Save More <span className='text-[#5BBC2E] lg:text-4xl'>Time</span> on Publication!</h2>
                        <p className='text-xs lg:text-xl mt-2 md:mt-4 font-light max-w-[420px] md:text-xl text-[#08747f]'>Publish your content in multiple channels from one single platform with our unified CMS today!</p>
                        <div className="lg:mt-8 mt-2 text-left">
                            <Button className={'action_btn'} text={'Learn How it Works'} onClick={() => setOpenScheduleForm(true)} />
                        </div>
                    </div>

                    <div className="w-[60%] lg:w-[50%]">
                        <Image src="/CMS/save-time.webp" alt="same time" width={1000} height={1000} className='w-[1820px] mx-auto lg:block hidden h-full' />
                        <Image src="/CMS/save-time.webp" width={1000} height={1000} alt="" className='lg:hidden block h-[180px] object-cover bg-center' />
                    </div>
                </div>
            </section>

            <div id='path_3' ref={el => observeSection(el)} className='scroll-mt-16'>
                <SeamlessSocialPost />
            </div>
            <div id='path_4' ref={el => observeSection(el)} className='scroll-mt-16'>
                <AccessAndSecurityControl />
            </div>
            <SaveTimeAndConsistancy />

            {/* Frequently Ask Questions */}
            <Accordion_component accordion_list={accordion_list} titleColor={'#2c5ea5'} subtitle={"Quick answers to questions you may have. Can’t find what you are looking for check you query here."} />

            <FooterCTA
                imgSrc='/CMS/footer-cta.webp'
                title={
                    <span className='flex flex-col'>
                        <span className='lg:text-[36px]'>
                            Take <span className="text-green font-semibold">Control</span> of Your Content Management!
                        </span>
                        <span className="lg:text-[18px] text-[12px] inter text-light-white2 lg:mb-2 mb-2">Take central command of all your content management, and grow your website faster than ever!</span>
                    </span>
                }
                button={<Button className={'action_btn2'} text={'Start Today'} onClick={() => setOpenScheduleForm(true)} />}
            />
        </div>
    )
}

export default CmsPage

const route_pages = [
    {
        svg: <GlobeIcon />,
        content: 'Site & Category Management',
        link: 'path_1'
    },
    {
        svg: <BlogIcon />,
        content: 'Blog Post Manage',
        link: 'path_2'
    },
    {
        svg: <SocialIcon />,
        content: 'Social Accounts Handle',
        link: 'path_3'
    },
    {
        svg: <AccessIcon />,
        content: 'Access & Security Control',
        link: 'path_4'
    },
]

const accordion_list = [
    {
        headContent: "What is TechForing CMS?",
        paraContent: "TechForing CMS (TCMS) is a comprehensive content management system designed to streamline content creation, organization, distribution, and collaboration. It provides a centralized platform for managing websites, blogs, social media, and other digital assets."
    },
    {
        headContent: "What are the key benefits of using TCMS?",
        paraContent: "TCMS saves time and resources by automating repetitive tasks, improves organization and collaboration, enhances content visibility and reach, and strengthens security with robust access controls. It empowers businesses to create, manage, and distribute high-quality content efficiently."
    },
    {
        headContent: "Who can benefit from using TCMS?",
        paraContent: "TCMS is ideal for businesses of all sizes, content creators, marketers, bloggers, and anyone who needs to manage digital content across multiple channels. It's particularly beneficial for teams that require collaboration and streamlined workflows."
    },
    {
        headContent: "What types of content can I manage with TCMS?",
        paraContent: "TCMS can handle various types of content, including blog posts, articles, website pages, social media posts, images, videos, and other digital assets."
    },
    {
        headContent: "Can I schedule content for future publishing?",
        paraContent: "Yes, TCMS offers a powerful scheduling feature that allows you to plan and automate content publishing across different platforms and channels."
    },
    {
        headContent: "Does TCMS have built-in SEO tools?",
        paraContent: "Yes, TCMS includes SEO features such as keyword optimization, meta tag management, and content analysis to help you improve your content's visibility in search engine results."
    },
    {
        headContent: "Does TCMS have built-in SEO tools?",
        paraContent: "Yes, TCMS includes SEO features such as keyword optimization, meta tag management, and content analysis to help you improve your content's visibility in search engine results."
    },
    {
        headContent: "Can I integrate TCMS with my existing tools?",
        paraContent: "TCMS offers integrations with popular third-party tools and platforms like Google Analytics, social media channels, email marketing services, and more."
    },
    {
        headContent: "How secure is my content in TCMS?",
        paraContent: "TCMS prioritizes security with features like role-based access control, two-factor authentication, data encryption, and regular backups. Your content is protected with industry-standard security measures."
    },
    {
        headContent: "Does TCMS comply with data protection regulations?",
        paraContent: "Yes, TCMS is designed to comply with major data protection regulations like GDPR and CCPA. We take data privacy seriously and ensure our platform meets the highest security standards."
    },
    {
        headContent: "What are the pricing options for TCMS?",
        paraContent: "We offer flexible pricing plans based on your specific needs and usage. Please visit our pricing page or contact our sales team for detailed information and a personalized quote."
    },
    {
        headContent: "What kind of customer support do you offer?",
        paraContent: "We provide comprehensive onboarding assistance, ongoing technical support, and a knowledge base with resources and tutorials. Our dedicated support team is available to help you get the most out of TCMS."
    },
]
