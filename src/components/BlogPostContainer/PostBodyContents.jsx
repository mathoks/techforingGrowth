import React from 'react';
import Image from 'next/image';

const PostContents = ({ viewBlogPost, contentRef, className }) => {
  return (
    <div className={`w-full flex-grow md:w-[calc(100%-330px)] pt-2 pb-5 min-h-fit ${className}`}>
      {viewBlogPost?.post_content_with_media?.map((post, postIndex) => (
        <div id={`post-content-${postIndex}`} className="px-4 post-container" key={postIndex}>
          {post.header_content?.map((content, contentIndex) => (
            <div className='' key={contentIndex}>
              <h2 id={`header-${postIndex}-${contentIndex}`}>{content?.header}</h2>
              <div
                className={`${post?.tracking === 'below_header' ? 'mt-4' : ''}`}
                ref={contentRef}
                dangerouslySetInnerHTML={{ __html: content?.content }}
              />
              {post?.tracking === 'below_header' && contentIndex === 0 && post?.image && (
                <div className="mb-4 flex justify-center items-center">
                  <Image
                    className="h-[200px] md:h-[310px]"
                    src={post?.image}
                    height={1000}
                    width={1000}
                    alt={`${content.header} image`}
                  />
                </div>
              )}
            </div>
          ))}
          {(post?.tracking === "" || post.tracking === "below_content" || post?.tracking === 'above_content') && post?.image && (
            <div className="mb-4 flex justify-center items-center">
              <Image
                className="h-[200px] md:h-[310px]"
                src={post?.image}
                height={1000}
                width={1000}
                alt={`${post.header_content?.[0]?.header} image`}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostContents;
