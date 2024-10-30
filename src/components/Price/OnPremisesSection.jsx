import { getPromises, useGetPromises } from '@/utils/price';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const OnPremisesSection = ({dynamicURL,tabId}) => {

    // const { data, error, isLoading } = useQuery({
    //     queryKey: ['Promises',dynamicURL,tabId],
    //     queryFn: getPromises(dynamicURL,tabId),
    //     staleTime: 360000,
    // });


    const {data} = useGetPromises(dynamicURL,tabId);


    
    // console.log("tab Id >>>>>>>" ,tabId);


    // console.log('object',data)
    return (
        <div className='main_container my-8 md:my-16 px-4 md:px-8'>
            <div className='flex flex-col justify-center items-center gap-4 md:gap-6'>
                <h2 className='text-2xl md:text-4xl font-bold text-[#182F59] text-center'>
                    Elevate Your Business with Premium
                    <span className='text-primary'> On-Premises Solutions</span>
                </h2>
                <p className='text-sm md:text-base font-light text-center text-dark-text-3 max-w-4xl'>
                    Experience unparalleled control, security, and customization with our On-Premise Edition software solutions. Perfect for businesses that require advanced DivBg protection and seamless integration with existing systems, our on-premise offerings ensure you have full authority over your software environment, updates, and maintenance.
                </p>
            </div>

            <div className={`relative ${data?.length < 3 ? 'pb-16' : ''}`}>
                <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-x-[68px] gap-y-[284px] py-11">
                    {data?.map((bg, index) => (
                        <div key={index} className="bg-[#EEF4FD] w-full sm:w-[550px] h-[300px]">
                            {/* You can add content inside this div */}
                        </div>
                    ))}
                </div>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 pl-4 justify-items-center md:absolute mt-4 md:top-[100px]'>
                    {
                        data?.map((item) => (
                            <div key={item.id} className='bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full sm:w-[530px] p-10 md:h-[369px]'>
                                <div className='flex gap-4'>
                                    <img className='w-16 h-16' src={item.image} alt="Special Image" />
                                    <h2 className='text-[#0F93B1] text-lg font-medium pt-10'>{item.title}</h2>
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: item.html_content }} className='pt-8'></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default OnPremisesSection;
