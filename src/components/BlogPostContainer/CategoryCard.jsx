"use client"
import { getCategoryData } from "@/app/api/route";
import {
  ArticlesSVG,
  CaseStudiesSVG,
  CeoAsAuthorSVG,
  CompanyNewsSVG,
  EventsSVG,
  IndustryGuideSVG,
  PodCastsSVG,
  ReportsSVG,
} from "@/SvgIcons";
import { formatBlogString, formatUrlString } from "@/utils/helperFunctions";
import React, { useState } from "react";

const CategoryCard = ({
  category,
  activeCategory,
  setCategoryData,
  setActiveCategory,
  setActiveMostPopular,
  setActiveSubCategory,
  setSubCategoryPosts,
  setMostRecentPosts,
  setCeoAsAuthor,
  setCompanyNews
}) => {
  const [loading, setLoading] = useState(false);

  const fetchData = async (category) => {
    setLoading(true);
    const responseData = await getCategoryData(category);
    setCategoryData(responseData);
    setActiveCategory(category);
    setActiveMostPopular(responseData?.data?.[1]?.["Most Popular Post"]);
    setSubCategoryPosts(responseData?.data?.[1]?.["Most Popular Post"]);
    setActiveSubCategory(responseData?.data?.[2]?.["Subcategories Posts"]);
    setMostRecentPosts(responseData?.data?.[3]?.["Most Recent Post"]);
    setCeoAsAuthor(responseData?.data?.[4]?.["CEO As Author"]);
    setCompanyNews(responseData?.data?.[5]?.["Company News"]);
    setLoading(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    fetchData(category);
  };

  const lowercaseActiveCategory = activeCategory.toLowerCase();
  const lowercaseCategory = category.toLowerCase();

  const NOT__defaultCategory = !["articles", "case studies", "podcast", "events", "reports", "industry guides", "company news", "ceo as author"].includes(lowercaseCategory);

  return (
    <div className="cursor-pointer">
      <div
        className={`w-[110px] md:w-[140px] h-[120px] md:h-[140px] flex flex-col items-center justify-start gap-[11px] ${lowercaseActiveCategory === lowercaseCategory
          ? "bg-strongWhite border-b-4 border-[#5BBC2E] shadow-md"
          : "bg-cardBG"
          } rounded-md p-5 cursor-pointer`}
        onClick={handleClick}
      >
        <span className="w-[50px] h-[50px]">
          {/* Default case: Render ArticlesSVG if category doesn't match any predefined category */}
          {NOT__defaultCategory && <ArticlesSVG fillColor={lowercaseActiveCategory === lowercaseCategory ? "#5BBC2E" : ""} />}

          {/* Render different SVG icons based on category */}
          {lowercaseCategory === "articles" && <ArticlesSVG fillColor={lowercaseActiveCategory === lowercaseCategory ? "#5BBC2E" : ""} />}
          {lowercaseCategory === "case studies" && <CaseStudiesSVG fillColor={lowercaseActiveCategory === lowercaseCategory ? "#5BBC2E" : ""} />}
          {lowercaseCategory === "podcast" && <PodCastsSVG fillColor={lowercaseActiveCategory === lowercaseCategory ? "#5BBC2E" : ""} />}
          {lowercaseCategory === "events" && <EventsSVG fillColor={lowercaseActiveCategory === lowercaseCategory ? "#5BBC2E" : ""} />}
          {lowercaseCategory === "reports" && <ReportsSVG fillColor={lowercaseActiveCategory === lowercaseCategory ? "#5BBC2E" : ""} />}
          {lowercaseCategory === "industry guides" && <IndustryGuideSVG fillColor={lowercaseActiveCategory === lowercaseCategory ? "#5BBC2E" : ""} />}
          {lowercaseCategory === "company news" && <CompanyNewsSVG fillColor={lowercaseActiveCategory === lowercaseCategory ? "#5BBC2E" : ""} />}
          {lowercaseCategory === "ceo as author" && <CeoAsAuthorSVG fillColor={lowercaseActiveCategory === lowercaseCategory ? "#5BBC2E" : ""} />}
        </span>
        <h5 className={`text-[10px] md:text-[14px] text-center ${lowercaseActiveCategory === lowercaseCategory ? "text-[#5BBC2E]" : "text-black"}`}>{category.toUpperCase()}</h5>
      </div>
    </div>
  );
};

export default CategoryCard;