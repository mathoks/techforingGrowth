import React from 'react';
import bg from '../../../../public/manwithlaptop.png';
import { useFooterCTA } from '@/utils/price'; // Ensure this points to where your hook is defined

const FooterCTA = ({dynamicURL, tabId }) => {
    const { data, error, isLoading } = useFooterCTA(dynamicURL,tabId);

    const renderStyledText = (text) => {
        const parts = text.split(/~(.+?)~/);

        return parts.map((part, index) => {
            if (index % 2 === 1) {
                return (
                    <span key={index} className="text-primary">
                        {part}
                    </span>
                );
            }
            return part;
        });
    };

    if (isLoading) {
        return <div className='text-center'>Loading...</div>;
    }

    if (error) {
        return <div className='text-center'>Error fetching data</div>;
    }

    return (
        <>
            {
                data?.map((item) => (
                    <div key={item?.id} className='h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px] flex flex-col justify-center items-center gap-6 px-4'
                        style={{ backgroundImage: `url(${item.image || bg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <h2 className='text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center'>
                            {renderStyledText(item?.title)}
                        </h2>
                        {
                            item.sub_title ? (
                                <div>
                                    <h2 className='text-white text-sm sm:text-md md:text-lg lg:text-xl font-thin text-center'>
                                        {item.sub_title}
                                    </h2>
                                    <p
                                        dangerouslySetInnerHTML={{ __html: item.html_content }}
                                        className='text-white text-sm sm:text-md md:text-lg lg:text-xl font-thin text-center'
                                    ></p>
                                </div>
                            ) : (
                                <div
                                    dangerouslySetInnerHTML={{ __html: item.html_content }}
                                    className='text-white text-sm sm:text-md md:text-lg lg:text-xl font-thin text-center'
                                ></div>
                            )
                        }
                        <button className='text-white text-[18px] sm:text-[20px] md:text-[22px] hover:bg-primary px-4 sm:px-6 py-2 sm:py-3 mt-5 border-2 hover:border-primary rounded-xl' aria-label='Scale as You Grow'>
                            {item?.button_text}
                        </button>
                    </div>
                ))
            }
        </>
    );
};

export default FooterCTA;
