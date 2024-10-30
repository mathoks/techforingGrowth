
import TabsContainer from "@/components/BlogPostContainer/AllPostsTab";
import HeroImgSliderArea from "@/components/BlogPostContainer/HeroImageSlide";
import Header from "@/components/Header";
import { EbookData } from "@/components/resources/bgBook";
import EbookSection from "@/components/resources/EbookSection";

const page = () => {
    return (
        <div className='flex flex-col md:gap-24 gap-10 md:mb-24 mb-10'>
            <Header />
            {/* Resources Hero Image Section */}
            <section className="relative flex justify-start h-[250px] md:h-[400px] items-center -mt-24" style={{
                backgroundImage: `url(/resources/hero-img.webp)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backdropFilter: 'blur(6px)',
                zIndex: 1
            }}>
                <div className="w-full md:w-[720px] flex flex-col justify-center text-white  font-bold px-4 md:ms-[100px] lg:ms-[340px]">
                    <h1 className="text-[32px] sm:text-[40px] uppercase md:text-[55px]">Read our articles</h1>
                    <p className="text-[12px] sm:text-[14px] md:text-[18px]">Stay ahead of the game with the latest insights, strategies, and real-life case studies from industry experts and thought leaders.</p>
                    <HeroImgSliderArea />
                </div>
            </section>
            
            

            {/* All Posts Tab Section */}
            <section className="">
                <TabsContainer />
            </section>
        </div>
    );
};

export default page;