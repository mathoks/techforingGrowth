import React from 'react';
import SubsribeBG from '@/assets/resources/subscribe-bg.webp';
import { PiCursorClick } from "react-icons/pi";
import { Button } from "@/components/common";
const SubscribeBlogSection = () => {
    return (
        <section className="flex flex-col w-full md:w-[1200px]  min-h-[420px] bg-center bg-cover bg-no-repeat mx-auto items-center justify-center mt-[30px] md:mt-[96px] text-center" style={{
            backgroundImage: `url(${SubsribeBG.src})`,
            zIndex: 1
        }}>
            <div>
                <h3 className="text-[18px] md:text-[36px] font-bold text-lightBGText pb-[16px]">GET OUR BEST IDEAS AND LATEST UPDATES TO YOUR INBOX</h3>
                <p className=" text-[10px] md:text-[14px]">We&apos;ll send our best articles, videos, and exclusive content right to your inbox. <span className="text-secondary">It&apos;s free.</span> </p>
            </div>
            <form className="w-4/5 md:w-1/2 mt-10 flex flex-col gap-5">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="focus:outline-none w-full bg-cardBG p-3 text-sm md:text-base"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="focus:outline-none w-full bg-cardBG p-3 text-sm md:text-base"
                />
                <Button
                    variant="contained"
                    color="secondary"
                    className="w-full"
                    startIcon={<PiCursorClick className="text-xl" />}
                >
                    Subscribe
                </Button>
            </form>
        </section>
    );
};

export default SubscribeBlogSection;