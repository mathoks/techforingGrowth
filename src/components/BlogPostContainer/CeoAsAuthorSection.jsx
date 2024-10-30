import React from 'react';
import Image from 'next/image';
import { dateTypeToString } from '@/utils/helperFunctions';
const CeoAsAuthorSection = ({ ceoAsAuthor }) => {


  return (
    <div className='w-full md:w-[1000px]'>
    <section className="mt-[30px]">
      <div className="posts-card grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-10 items-center mt-6 md:mt-10">
        {ceoAsAuthor?.map((item, index) => (
          <div
            onClick={() => window.open(item.post_url, '_blank')}
            key={index}
            className="flex items-center justify-between flex-shrink-0 rounded-md bg-white hover:border-r-4 transition-all border-primary cursor-pointer"
          >
            <Image
              className="h-20 w-20 md:h-20 overflow-hidden rounded-l-md"
              src={item.post_logo}
              alt="image"
              width={1000}
              height={1000}
              quality={100}
            />
            <div className='ms-4 sm:ms-0'> 
              <h6 className="text-sm font-medium text-black w-[200px]">
                {item.post_title.length > 35 ? item.post_title.slice(0, 45) + "..." : item.post_title}
              </h6>
              <p className='text-[12px]'>{dateTypeToString(item?.uploaded_date)}</p>
            </div>

            <div className="h-20 w-[100px] sm:w-[125px] " style={{ clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 22% 100%)" }} >
              <Image
                className="overflow-hidden w-full h-full border-l-[10px] border-primary "
                src={item.post_image}
                alt="image"
                width={1000}
                height={1000}
                quality={100}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
  );
};

export default CeoAsAuthorSection;