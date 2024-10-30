"use client"
import { getCategoryData } from "@/app/api/route";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { GoArrowRight } from "react-icons/go";
import CategoryCard from "./CategoryCard";
import { SpinnerSVG } from "./SpinnerSVG";
import CeoAsAuthorSection from "./CeoAsAuthorSection";
import CompanyNewsSection from "./CompanyNewsSection";
import { extractDomain, reverseFormatString } from "@/utils/helperFunctions";
import { paginationStyle } from "@/utils/sliderOptions";
import { IoIosSearch } from "react-icons/io";

const options = {
  type: 'slide',
  perPage: 4,
  gap: '24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  autoplay: true,
  interval: 6000,
  arrows: true,
  classes: {
    prev: 'splide__arrow--prev resources_blog-prev !hidden',
    next: 'splide__arrow--next resources_blog-next !hidden',
  },
  breakpoints: {
    412: {
      perPage: 1,
    }
  }
};

const TabsContainer = ({ category = "Articles" }) => {
  const router = useRouter();
  const [categoryData, setCategoryData] = useState([]);
  const [activeCategory, setActiveCategory] = useState(category);
  const [activeMostPopular, setActiveMostPopular] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [subCategoryPosts, setSubCategoryPosts] = useState(null);
  const [mostRecentPosts, setMostRecentPosts] = useState(null);
  const [ceoAsAuthor, setCeoAsAuthor] = useState(null);
  const [companyNews, setCompanyNews] = useState(null);
  const [siteInfo, setSiteInfo] = useState([]);
  const baseURL = "https://cmsadmin.techforing.com/api/v1";
  const domainName = "https://growth.techforing.com/";
  const [matchedSite, setMatchedSite] = useState(null);
  const [searchQuery, setSearchQuery] = useState('')
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const [loading, setLoading] = useState(false)



  function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
  
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
  
    return debouncedValue;
  }

  const fetchSiteName = async () => {
    const response = await fetch(`${baseURL}/blog/site/name/list/?page_size=10&page=1`);
    const data = await response.json();
    setSiteInfo(data?.data?.results);
  };

  const fetchCategories = async (activeCategory, matchedSite, searchQuery) => {
    setLoading(true);
    const res = await getCategoryData(activeCategory, matchedSite, searchQuery);
    setCategoryData(res);
    setActiveMostPopular(res?.data?.[1]?.["Most Popular Post"]);
    setSubCategoryPosts(res?.data?.[1]?.["Most Popular Post"]);
    setActiveSubCategory(res?.data?.[2]?.["Subcategories Posts"]);
    setMostRecentPosts(res?.data?.[3]?.["Most Recent Post"]);
    setCeoAsAuthor(res?.data?.[4]?.["CEO As Author"] || []);
    setCompanyNews(res?.data?.[5]?.["Company News"] || []);
    setLoading(false);
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

  // console.log({matchedSite})

  useEffect(() => {
    if (matchedSite) {
      fetchCategories(activeCategory, matchedSite, debouncedSearchQuery);
    }
  }, [activeCategory, matchedSite, debouncedSearchQuery]);

  useEffect(() => {
    if (matchedSite) {
      fetchCategories(activeCategory, matchedSite);
    }
  }, [activeCategory, matchedSite]);

  useEffect(() => {
    if (activeCategory !== category) {
      const formattedCategory = reverseFormatString(activeCategory);
      router.push(`/resources/${formattedCategory}`);
    }
  }, [activeCategory, router, category]);

  const handleCategoryChange = (newCategory) => {
    setActiveCategory(newCategory);
  };

  const handleSubCategoryClick = (clickedSubcategory) => {
    const subcategory = activeSubCategory.find((item) => item.subcategory === clickedSubcategory);
    setSubCategoryPosts(subcategory?.posts);
  };


  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  }

  return (
    <main>

     {/* Learn About Search Area */}
     <section className="w-[360px] lg:w-[1200px] flex flex-col lg:flex-row items-center justify-center gap-[16px] md:gap-[50px] px-10 mx-auto md:mb-24 mb-10" >
        <div className='w-[360px]'>
          <h3 className="text-2xl md:text-4xl font-bold text-center text-lightBGText">What Would You Like To Learn About?</h3>
        </div>
        <div className="relative w-full px-4 md:px-1 md:w-[60%]">
          <input type="text"
            onChange={handleSearch}
            value={searchQuery}
            placeholder="search here" className="bg-[#F2F2F2] px-5 py-4 rounded-[16px] border-none w-full" />
          <button className="absolute right-[30px] md:right-[20px] top-[30%]"> <IoIosSearch className="text-2xl" /> </button>
        </div>
      </section>

      <section className="flex items-center md:justify-center justify-start gap-3 max-w-[360px] sm:max-w-full overflow-x-scroll md:max-w-[1280px] md:flex-wrap sm:overflow-hidden mx-auto" id="blogCategories">
        {categoryData?.data?.[0]?.["All Categories"]?.map((category, index) => (
          <CategoryCard
            key={index}
            setCategoryData={setCategoryData}
            setActiveCategory={handleCategoryChange}
            setActiveMostPopular={setActiveMostPopular}
            setActiveSubCategory={setActiveSubCategory}
            setSubCategoryPosts={setSubCategoryPosts}
            setMostRecentPosts={setMostRecentPosts}
            setCeoAsAuthor={setCeoAsAuthor}
            setCompanyNews={setCompanyNews}
            category={category}
            activeCategory={activeCategory}
          />
        ))}
      </section>

      {/* All The Subcategories and Posts  */}
      <section className="bg-cardBG p-4 md:p-10 rounded-md mx-auto mt-6 md:mt-10 max-w-full md:max-w-[1100px] h-auto md:min-h-[400px]">

        {/* ceo as author */}
        {
          activeCategory.toLowerCase() === "ceo as author" && (
            <CeoAsAuthorSection ceoAsAuthor={ceoAsAuthor} />
          )
        }
        {/* company news */}
        {
          activeCategory.toLowerCase() === "company news" && (
            <CompanyNewsSection companyNews={companyNews} />
          )
        }
        {/* most popular posts and other subcategories posts*/}
        {
          activeCategory.toLowerCase() !== "ceo as author" &&
          activeCategory.toLowerCase() !== "company news" && (
            <div className="w-full md:w-[1000px]">
              <div className="flex items-center justify-center md:justify-start flex-wrap gap-4 text-sm md:text-base">
                <button
                  onClick={() => setSubCategoryPosts(activeMostPopular)}
                  className={`cursor-pointer px-4 md:px-10 py-2 md:py-2.5 bg-white ${subCategoryPosts === activeMostPopular
                    ? "border-x-4 border-primary text-primary font-bold"
                    : "border-x-4 border-white"
                    }`}
                >
                  Most Popular
                </button>
                {activeSubCategory?.map((item, index) => (
                  <button
                    onClick={() => handleSubCategoryClick(item?.subcategory)}
                    key={index}
                    className={`cursor-pointer px-4 md:px-10 py-2 md:py-2.5 bg-white ${subCategoryPosts === item?.posts
                      ? "border-x-4 border-primary text-primary font-bold"
                      : "border-x-4 border-white"
                      }`}
                  >
                    {item?.subcategory}
                  </button>
                ))}
              </div>
              {/* sub categories posts */}
              <div>
                {loading ? (
                  <div className="flex items-center flex-col justify-center gap-2 h-[300px]">
                    <SpinnerSVG className="!animate-spin border-primary w-10 h-10" />
                    <p className="text-gray-500 text-lg animate-pulse ml-3">loading...</p>
                  </div>
                ) : subCategoryPosts && subCategoryPosts.length > 0 ? (
                  <div className="posts-card max-h-[180px] max-sm:overflow-y-scroll sm:max-h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 items-center mt-6 md:mt-10">
                    {subCategoryPosts.map((item, index) => (
                      <Link href={`/resources/${reverseFormatString(activeCategory)}/${item?.post_url}`}
                        key={index}
                        className="w-full h-20 flex items-center justify-between gap-4 md:gap-5 flex-shrink-0 rounded-md bg-white hover:border-r-4 border-primary cursor-pointer">
                        <div className="w-[180px] h-full rounded-l-md">
                          <Image
                            src={item?.post_image}
                            alt={item?.post_title}
                            width={80}
                            height={180}
                            className="w-full h-full rounded-l-md shadow-lg"
                          />
                        </div>
                        <div className="w-full h-full py-2 pr-2 flex items-center justify-start">
                          <h6 className="text-sm md:text-sm font-medium ">
                            {item.post_title.length > 35 ? item.post_title.slice(0, 56) + "..." : item.post_title}
                          </h6>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center flex-col justify-center gap-2 h-[300px]">
                    <p className="text-gray-500 text-lg">No posts found!</p>
                  </div>
                )}
              </div>
            </div>
          )
        }
      </section>

      {/* most recent posts section  */}
      {
        mostRecentPosts?.length > 0 && (
          <section className="mt-[30px] md:mt-[96px]">
            <div className="flex items-center justify-center pb-8">
              <h3 className="text-lightBGText text-[18px] md:text-[36px] text-center font-bold">Most Recent Articles</h3>
            </div>
            <div className='container mt-12 mx-auto md:px-0 px-2.5'>
              <style jsx global>{`
                        ${Object.entries(paginationStyle).map(([selector, style]) => (
                `${selector} {
                            ${Object.entries(style).map(([property, value]) => (
                  `${property}: ${value};`
                )).join('\n')}
                        }`
              )).join('\n')}
                        `}</style>
              <Splide options={options} className="" aria-label="Our Resources">
                {mostRecentPosts?.map((item, index) => (
                  <SplideSlide SplideSlide key={index} >
                    <div className='p-3 shadow-lg rounded-lg mb-5'>
                      <div className='blogImg'>
                        <Image src={item.feature_image} alt={item?.post_title} height={157} width={300} className='w-full rounded-lg' />
                      </div>
                      <div className='blogContent py-4 flex flex-col gap-2.5'>
                        <h5 className='text-sm uppercase w-fit px-2 rounded-full border border-lineColor text-lightBlack'>{activeCategory}</h5>
                        <h4 className='text-xl font-bold leading-snug max-h-[90px]'>{item?.post_title?.length > 30 ? item?.post_title?.slice(0, 30) + '...' : item?.post_title}</h4>
                      </div>
                      <div className='flex justify-between items-center pb-1'>
                        <p className='text-lightBlack text-sm'>
                          {item?.update_date ? item?.update_date : ""}</p>
                        <Link className='flex items-center gap-2 text-primary cursor-pointer' href={`/resources/${reverseFormatString(activeCategory)}/${item?.post_url}`} target='_blank'>
                          <h5 className='text-md'>Read more </h5>
                          <GoArrowRight />
                        </Link>
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </section>
        )
      }
    </main >
  );
};

export default TabsContainer;