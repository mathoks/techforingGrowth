import React, { useEffect, useState } from "react";
import { useHeroSlider } from "@/utils/price";

function HeroSlider({ tabId, dynamicURL }) {
  const { data } = useHeroSlider(dynamicURL, tabId);
  const backgroundImages = data?.map((item) => item.image) || [];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % (data?.length || 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [data?.length]);

  const renderStyledText = (text) => {
    const parts = text.split(/~(.+?)~/);
    
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <span key={index} className="text-primary px-[5px]">{part}</span>;
      }
      return part;
    });
  };

  return (
    <div
      style={{
        background: `linear-gradient(0deg, #00819E 0%, #00819E 100%), url(${backgroundImages[activeIndex]}) lightgray 50% / cover no-repeat`,
        backgroundPosition: "center",
        backgroundBlendMode: 'multiply, luminosity',
      }}
      className="relative w-full h-[400px] md:h-[400px] overflow-hidden"
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center w-full h-full px-4 md:px-8 lg:px-16">
        {/* Heading Animation */}
        <div className="relative w-full h-20 md:h-[70px] mb-4 md:mb-0"> {/* Updated margin for md screens */}
          {data?.map((item, index) => (
            <h1
              key={index}
              className={`text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white transition-all duration-1000 absolute inset-0 flex items-center justify-center
              ${index === activeIndex
                ? "translate-x-0 opacity-100"
                : index < activeIndex || (index === data.length - 1 && activeIndex === 0)
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
              }`}
            >
              {renderStyledText(item?.title)}
            </h1>
          ))}
        </div>

        {/* Paragraph Animation */}
        <div className="relative w-full max-w-[90%] md:max-w-[60%] lg:max-w-[50%] h-16 md:h-40 mb-4 md:mb-1"> {/* Updated margin for md screens */}
          {data?.map((item, index) => (
            <div
              key={index}
              className={`text-sm md:text-base lg:text-lg text-white transition-all duration-1000 absolute inset-0 flex flex-col items-center justify-center
              ${index === activeIndex
                ? "translate-x-0 opacity-100"
                : index < activeIndex || (index === data.length - 1 && activeIndex === 0)
                  ? "translate-x-full opacity-0"
                  : "-translate-x-full opacity-0"
              }`}
            >
              {item.sub_title && (
                <h2 className="text-white text-sm sm:text-md md:text-lg lg:text-xl font-thin mb-2 md:mb-3 text-center"> {/* Increased margin for md screens */}
                  {item.sub_title}
                </h2>
              )}
              <div
                dangerouslySetInnerHTML={{ __html: item.html_content }}
                className="text-white text-sm sm:text-md md:text-lg lg:text-xl font-thin text-center"
              />
            </div>
          ))}
        </div>

        {/* Button Animation */}
        <div className="relative w-full h-12 md:h-14">
          {data?.map((item, index) => (
            <button
              key={index}
              className={`inline-flex items-center justify-center rounded-lg px-6 md:px-8 py-2 md:py-3 text-sm md:text-base lg:text-lg font-bold text-white bg-primary hover:bg-transparent hover:border-primary hover:border-2 transition-all duration-300 absolute left-1/2 transform -translate-x-1/2
              active:bg-transparent active:border-primary active:border-2
              ${index === activeIndex
                ? "translate-y-0 opacity-100"
                : index < activeIndex || (index === data.length - 1 && activeIndex === 0)
                  ? "-translate-y-full opacity-0"
                  : "translate-y-full opacity-0"
              }`}
            >
              {item.button_text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSlider;
