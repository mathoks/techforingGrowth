import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import { useQuery } from '@tanstack/react-query';
import { getMidCTA } from '@/utils/price';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MidCTA = ({dynamicURL,tabId}) => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['MidCTA',dynamicURL,tabId], // Use the tabId prop here
        queryFn: () => getMidCTA(dynamicURL,tabId), // Pass tabId to the query function
        staleTime: 36000, 
    });


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    };

    const renderStyledText = (text) => {
        const parts = text?.split(/~(.+?)~/); 
        return parts?.map((part, index) => {
            if (index % 2 === 1) {
                return (
                    <span key={index} className=" text-primary">
                        {part}
                    </span>
                );
            }
            return part;
        });
    };

    // if (isLoading) return <div className='text-center'>Loading...</div>;
    // if (error) return <div>''</div>;
    return (
        <div className='w-full'>
            <Slider {...settings} key={JSON.stringify(data)}>
                {data?.map((slide) => (
                    <div key={slide.id} className="bg-[#1F3121] py-8 md:py-12">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-3 px-4 w-full">
                            <div className="flex flex-col w-full md:w-2/4 justify-center items-center md:items-end md:border-r-2 gap-4 md:gap-2 px-4 md:px-10 border-r-primary">
                                <Image className='w-full max-w-[250px] md:max-w-[300px] md:mr-10' src={slide.image} alt="" width={300} height={200} />
                                <h2 className="text-white text-center mt-3 w-full md:w-[60%] text-xl md:text-[28px] font-medium md:font-medium">
                                    {renderStyledText(slide.title)}
                                </h2>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: slide.html_content }} className='pt-6 md:pt-8 px-4 md:px-0 md:pl-8 w-full md:w-2/4'></div>
                        </div>
                        <div className="text-center mt-8 md:mt-9">
                            <button className="text-base md:text-lg bg-primary px-6 md:px-8 py-2.5 md:py-3 hover:bg-transparent hover:border-primary hover:border-2 rounded-lg text-white font-bold">
                                {slide.button_text}
                            </button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MidCTA;
