"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState, } from "react";
import '@/style/blog.css';
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import HeroSection from "@/components/BlogPostContainer/PostsHeroSection";
import TableOfContents from "@/components/BlogPostContainer/TableOfContents";
import PostContents from "@/components/BlogPostContainer/PostBodyContents";
import Header from "../Header";

const SinglePostView = ({ viewBlogPost }) => {
  const baseURL = "https://cmsadmin.techforing.com/api/v1";
  const contentRef = useRef(null);
  const tocRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const countPostViews = async () => {
    const url = `${baseURL}/blog/post/add/viewer/${viewBlogPost?.post_url}`;
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log("Response >>> Counter ", response);
      return await response.json();
    } catch (error) {
      console.log('Error:', error); // Log any errors
    }
  };

  useEffect(() => {
    countPostViews();
  }, []);

  const handleContentClick = (title, index) => {
    const flatHeaders = viewBlogPost?.post_content_with_media?.flatMap((post, postIndex) =>
      post.header_content?.map((content, contentIndex) => ({
        title: content.header,
        id: `header-${postIndex}-${contentIndex}`
      }))
    );
    const matchedHeader = flatHeaders?.find(header =>
      header.title.toLowerCase().trim() === title.toLowerCase().trim()
    );
    if (matchedHeader) {
      const headerElement = document.getElementById(matchedHeader.id);
      if (headerElement) {
        const offsetTop = headerElement.offsetTop - 138; // 138px offset
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      } else {
        console.log("Header element not found");
      }
    } else {
      console.log("No matching header found in the post content");
    }
  };

  const handleScroll = () => {
    const flatHeaders = viewBlogPost?.post_content_with_media?.flatMap((post, postIndex) =>
      post.header_content?.map((content, contentIndex) => ({
        title: content.header,
        id: `header-${postIndex}-${contentIndex}`
      }))
    );

    const scrollPosition = window.scrollY + 138; // Add offset
    const lastCrossed = flatHeaders.reduce((acc, header, index) => {
      const headerElement = document.getElementById(header.id);
      if (headerElement && headerElement.offsetTop <= scrollPosition) {
        return index;
      }
      return acc;
    }, -1);

    setActiveIndex(lastCrossed);

    // Scroll the table of contents
    if (tocRef.current && lastCrossed !== -1) {
      const activeItem = tocRef.current.querySelector(`li:nth-child(${lastCrossed + 1})`);
      if (activeItem) {
        const tocContainer = tocRef.current;
        const itemTop = activeItem.offsetTop;
        const itemHeight = activeItem.offsetHeight;
        const containerHeight = tocContainer.offsetHeight;
        const scrollTop = tocContainer.scrollTop;

        if (itemTop < scrollTop || itemTop + itemHeight > scrollTop + containerHeight) {
          tocContainer.scrollTo({
            top: itemTop - containerHeight / 2 + itemHeight / 2,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewBlogPost]);

  return (
    <>
      <Header />
      <ProgressBar />
      {/* Feature Image Section */}
      <HeroSection viewBlogPost={viewBlogPost} />
      <section className="flex flex-col md:flex-row max-w-[1080px] mx-auto items-start md:mb-24 mb-10 md:pt-8 relative md:static">
        {/* Table of contents */}
        <TableOfContents
          className={"md:pt-4"}
          tableOfContents={viewBlogPost?.table_of_contents}
          handleContentClick={handleContentClick}
          tocRef={tocRef}
          viewBlogPost={viewBlogPost}
        />
        {/* Post Body contents */}
        <PostContents
          className={'pt-10'}
          viewBlogPost={viewBlogPost}
          contentRef={contentRef}
        />
      </section>
    </>
  );
};

export default SinglePostView;
