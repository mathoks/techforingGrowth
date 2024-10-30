// HeroSection.js
import React from 'react';

const HeroSection = ({ viewBlogPost }) => {
  return (
    <section
      id="top"
      style={{ backgroundImage: `url(${viewBlogPost?.feature_image})` }}
      className={`md:min-h-[550px] min-h-[300px] sm:min-h-[350px] flex justify-center items-end bg-no-repeat bg-cover bg-center`}
    >
      <div className="text-white p-4 rounded backdrop-filter backdrop-blur-lg md:mb-[140px] mb-5 w-full md:w-[1080px]">
        <p className="py-2">Category: {viewBlogPost?.category}</p>
        <h1 className="md:text-3xl text-2xl font-bold">{viewBlogPost?.post_title}</h1>
      </div>
    </section>
  );
};

export default HeroSection;
