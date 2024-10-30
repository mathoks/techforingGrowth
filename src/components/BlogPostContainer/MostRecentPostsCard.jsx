"use client"
import { PolygonIcon } from "@/utils/svg/SVGImg";
import { Button } from "@/components/common";
import Image from "next/image";


const MostRecentPostsCard = ({ item, onClick }) => {
  return (
    <div className="w-full md:w-[1070px] flex flex-col mx-auto mt-[40px]">
      <div className="flex items-center justify-center gap-[18px] w-[200px] ms-2 md:ms-0  px-[18px] py-[8px] border border-secondary rounded-[50px]">
        <div className="w-[12px] h-[12px] rounded-[50%] bg-[#61b13d3f]">
          <PolygonIcon className="-mt-[1px] fill-secondary" />
        </div>
        <h5 className="text-lightBGText text-[18px] font-medium">{item.update_date}</h5>
      </div>
      <div className="w-[10px] h-[40px] bg-secondary translate-x-[35px] md:translate-x-[95px]"></div>

      <div className="w-full flex flex-col md:flex-row items-baseline ps-2 md:items-center gap-[28px] md:justify-between ">
        <div className="translate-x-[1px] md:translate-x-[20px] bg-cardBG  h-[55px] md:h-[95px] rounded-s-[100px] md:rounded-s-[200px] rounded-e-lg flex items-center gap-[18px] w-[80%]">
          <div className="circle bg-strongWhite flex items-center justify-center  h-full w-[100px] md:w-[110px] rounded-full">
            <Image
              className="w-[45px] h-[45px]  md:w-[82px] md:h-[82px] ms-2 object-cover rounded-full"
              src={item.feature_image}
              alt="Recents Posts Feature Image"
              width={1000}
              height={1000}
              quality={100}
            />
          </div>
          <p className="md:text-[24px] truncate">{item.post_title}</p>
        </div>
        <Button onClick={onClick} variant="contained" size='medium' color='secondary' className="w-fit md:w-fit">
          Open Article
        </Button>
      </div>

    </div>
  );
};

export default MostRecentPostsCard;