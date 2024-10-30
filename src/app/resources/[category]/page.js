"use client"
import { IoIosSearch } from "react-icons/io";
// import EbookSection from '@/components/dynamicSections/EbookSection/EbookSection';
// import bgEbook from '@/asset/common/ebook/bgEbook/green-ebook.webp';
// import { EbookData } from '@/utils/mock/EbookData/EbookData';
// import HeroImg from '@/components/BlogPostContainer/hero-img.webp'
import TabsContainer from "@/components/BlogPostContainer/AllPostsTab";
import HeroImgSliderArea from "@/components/BlogPostContainer/HeroImageSlide";
import { formatBlogString } from "@/utils/helperFunctions";
import Header from "@/components/Header";
import { useEffect } from "react";

const BlogCategoryPage =  ({ params }) => {

    useEffect(() => {
        // Scroll to TabsContainer section when category changes
        const tabsContainerSection = document.getElementById('tabs-container-section');
        if (tabsContainerSection) {
            tabsContainerSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, [params?.category]);

    return (
        <>
            <Header />
            <div className='md:mb-24 mb-10'>
                {/* Resources Hero Image Section */}
                <section className="mb-[90px] relative flex justify-start h-[250px] md:h-[400px] items-center" style={{
                    backgroundImage: `url('/resources/hero-img.webp')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backdropFilter: 'blur(6px)',
                    zIndex: 1
                }}>
                    <div className="w-full md:w-[720px] flex flex-col justify-center text-white  font-bold px-4 md:ms-[100px] lg:ms-[340px]">
                        <h1 className="text-[32px] sm:text-[40px] uppercase md:text-[55px]">Read our articles</h1>
                        <p className="text-[12px] sm:text-[14px] md:text-[18px] lg:text-[24px]">Stay ahead of the game with the latest insights, strategies, and real-life case studies from industry experts and thought leaders.</p>
                        <HeroImgSliderArea />
                    </div>
                </section>
                
                {/* All Posts Tab Section */}
                <section id="tabs-container-section" className="py-[95px]">
                    <TabsContainer category={formatBlogString(params?.category)} />
                </section>
            </div>
        </>
    );
};

export default BlogCategoryPage;
