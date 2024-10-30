import React, { useState } from 'react';
import TabCard from './TabCard';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
import ChevronUpOutline from '../../../../public/ChevronUpOutline.svg'
import ChevronUpOutlinBlue from '../../../../public/ChevronUpOutlinBlue.svg'
import Image from 'next/image';


const TestCards = () => {

    const cardData = [

        {
            id: 1,
            is_most_popular: false,
            custom_colour: "#E99E48",
        },
        {
            id: 2,
            is_most_popular: false,
            custom_colour: null,
        },

        {
            id: 3,
            is_most_popular: true,
            custom_colour: null,
        },
        {
            id: 4,
            is_most_popular: false,
            custom_colour: null,
        }
        ,
        {
            id: 5,
            is_most_popular: false,
            custom_colour: null,
        }
    ];



    const [startIndex, setStartIndex] = useState(0);
    const visibleCardData = cardData.slice(startIndex, startIndex + 4);

    const handlePrevious = () => {
        setStartIndex(Math.max(0, startIndex - 1));
    };

    const handleNext = () => {
        setStartIndex(Math.min(cardData.length - 4, startIndex + 1));
    };
    return (
        <div className='main_container mx-auto'>
            <div className='relative'>
                <div className="flex overflow-x-auto justify-center items-center gap-4 py-4 scrollbar-hide ">
                    {visibleCardData.map((item, index) => (
                        <TabCard item={item} key={item.id} />
                    ))}
                </div>

                {cardData.length > 4 && (
                    <>
                        <div
                            className='flex items-center justify-center w-[200px] -rotate-90 absolute -left-[132px] top-[350px] gap-[10px] transform -translate-y-1/2 disabled:opacity-50'
                            style={{
                                borderRadius: ' 12px  12px  0px 0px  ',
                                background: '#FFF9E3',
                                padding: '8px',
                            }}
                            onClick={handlePrevious}
                            disabled={startIndex === 0}
                        >
                            <Image src={ChevronUpOutline} width={16} />
                            <button className='text-[#DB811A] text-sm font-medium'
                            >
                                $1 For 90 Days
                            </button>
                            <Image src={ChevronUpOutline} width={16} />
                        </div>
                        <div
                            className='flex items-center justify-center transform w-[200px] rotate-90 absolute -right-[130px] top-[350px] gap-[10px] -translate-y-1/2 disabled:opacity-50'
                            style={{
                                borderRadius: ' 12px  12px  0px 0px  ',
                                background: '#E4EDFC',
                                padding: '8px',
                            }}
                            onClick={handleNext}
                            disabled={startIndex >= cardData.length - 4}
                        >
                            <Image src={ChevronUpOutlinBlue} width={16} />
                            <button className='text-[#0F93B1] text-sm font-medium'
                            >
                                Custom Plan
                            </button>
                            <Image src={ChevronUpOutlinBlue} width={16} />
                        </div>
                    </>

                )}
            </div>
        </div>
    );
};

export default TestCards;



{/* <button
                            onClick={handlePrevious}
                            disabled={startIndex === 0}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md disabled:opacity-50"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-600" />

                        </button>

                        <button
                            onClick={handleNext}
                            disabled={startIndex >= cardData.length - 4}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md disabled:opacity-50"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-600" />
                        </button> */}
