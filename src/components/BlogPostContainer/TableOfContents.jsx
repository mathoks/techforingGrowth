"use client"
import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TableOfContents = ({ tableOfContents, handleContentClick, className, tocRef, viewBlogPost }) => {
  const [scrolled, setScrolled] = useState(false);
  const [matchedHeaders, setMatchedHeaders] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Calculate matched headers
      const flatHeaders = viewBlogPost?.post_content_with_media?.flatMap((post, postIndex) =>
        post.header_content?.map((content, contentIndex) => ({
          title: content.header,
          id: `header-${postIndex}-${contentIndex}`
        }))
      );

      const scrollPosition = window.scrollY + 138; // Add offset
      const matched = flatHeaders.filter(header => {
        const headerElement = document.getElementById(header.id);
        return headerElement && headerElement.offsetTop <= scrollPosition;
      });
      setMatchedHeaders(matched);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewBlogPost]);

  const isHeaderMatched = (title) => {
    return matchedHeaders.some(header => header.title.toLowerCase().trim() === title.toLowerCase().trim());
  };

  return (
    <div className={`bg-white shadow-sm sticky top-1 md:top-[90px] w-full md:w-[330px] h-[33dvh] md:h-[calc(100dvh-138px)] flex flex-col ${className}`}>
      <p className={`px-4 py-3 rounded-[5px] bg-[#e3e6ea] font-semibold m-2 shadow-sm transition-all duration-300 ${scrolled ? 'mt-12' : 'mt-2'} md:mt-0`}>
        TABLE OF CONTENT :
      </p>
      <div ref={tocRef} className="overflow-y-auto custom-scrollbar-style flex-grow">
        <ol>
          {tableOfContents?.map((data, index) => (
            <li
              className={`p-2 flex items-center justify-start gap-4 ${isHeaderMatched(data.title) ? 'text-primary' : 'text-black font-semibold'}`}
              key={index}
            >
              <div className="w-[10%]">
                <div style={{ width: 40, height: 40 }}>
                  <CircularProgressbar
                    value={isHeaderMatched(data.title) ? 100 : 0}
                    text={index + 1}
                    styles={buildStyles({
                      textColor: isHeaderMatched(data.title) ? '#5BBC2E' : '#000',
                      textSize: '36px',
                      pathColor: '#5BBC2E',
                      trailColor: '#d6d6d6',
                    })}
                  />
                </div>
              </div>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  handleContentClick(data?.title, index);
                }}
              >
                <p>{data?.title}</p>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TableOfContents;