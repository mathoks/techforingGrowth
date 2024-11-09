"use client";
import { getPriceSlider } from "@/utils/price";
import { priceHeroSliderOption } from "@/utils/sliderOptions";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";

const HeroSlider = ({ dynamicURL, tabId }) => {
  const [data, setData] = useState([]); // Initialize with null instead of {}
  const [error, setError] = useState(null); // Track errors
  const [loading, setLoading] = useState(false); // Track loading state

  const [currentIndex, setCurrentIndexx] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getPriceSlider(dynamicURL, tabId);
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dynamicURL, tabId]);

  return (
    <div
      className="relative w-full h-[400px] md:h-[400px] overflow-hidden items-center justify-center"
      style={{
        background: `linear-gradient(0deg, rgb(0, 129, 158) 0%, rgb(0, 129, 158) 100%), url(${data[currentIndex]?.image}) 50% center / cover no-repeat lightgray`,
        backgroundBlendMode: "multiply, luminosity",
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-full px-4 md:px-8 lg:px-16">
        <Splide
          aria-labelledby="autoplay-hero-heading"
          options={{
             autoplay: true,    
             ...priceHeroSliderOption,
          }}
          className="py-4"
          onMoved={(newIndex) => setCurrentIndexx(newIndex)}
        >
          {data.length > 0 &&
            !loading &&
            data.map(({ title, sub_title, button_text }, id) => (
              <SplideSlide
                key={id}
                className=" flex flex-col items-center justify-center -z-50"
              >
                <div
                  key={id}
                  className="relative w-full  h-20 md:h-[70px] mb-4 md:mb-0 "
                >
                  <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white transition-all duration-1000 absolute inset-0 flex items-center justify-center -translate-x-full ">
                    {title.split("~")[0]}
                    <span className="text-primary px-[5px]">
                      {title.split("~")[1]}
                    </span>
                  </h1>
                </div>
                <div className="relative w-full max-w-[90%] md:max-w-[60%] lg:max-w-[50%] h-16 md:h-40 mb-4 md:mb-1">
                  <h2 className="text-white text-sm sm:text-md md:text-lg lg:text-xl font-thin mb-2 md:mb-3 text-center">
                    {sub_title}
                  </h2>
                  <div className="text-white text-sm sm:text-md md:text-lg lg:text-xl font-thin text-center"></div>
                </div>
                <div className="relative w-full h-12 md:h-14">
                  <button
                    className="inline-flex items-center justify-center rounded-lg px-6 md:px-8 py-2 md:py-3 text-sm md:text-base lg:text-lg font-bold text-white bg-primary hover:bg-transparent hover:border-primary hover:border-2 transition-all duration-300 absolute left-1/2 transform -translate-x-1/2
              active:bg-transparent active:border-primary active:border-2
              translate-y-0 opacity-100"
                  >
                    {button_text}
                  </button>
                </div>
              </SplideSlide>
            ))}
        </Splide>
      </div>
    </div>
  );
};

export default HeroSlider;
