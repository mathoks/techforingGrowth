"use client"

import { resourcesHeroSliderOption } from "@/utils/sliderOptions";
import { BBCIcon, EconomicForumIcon, EntrepreneurIcon, NBCIcon } from "@/SvgIcons";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react';

const HeroImgSliderArea = () => {
    return (
        <Splide className="mt-4 md:mt-10" options={resourcesHeroSliderOption} >
            <SplideSlide>
                <BBCIcon className={'w-[65px] h-[25px] md:w-[105px] md:h-[30px]'} />
            </SplideSlide>
            <SplideSlide>
                <EconomicForumIcon className={'w-[75px] h-[45px] md:w-[105px] md:h-[60px]'} />
            </SplideSlide>
            <SplideSlide>
                <EntrepreneurIcon className={'w-[95px] h-[25px] md:w-[165px] md:h-[30px]'} />
            </SplideSlide>
            <SplideSlide>
                <NBCIcon className={'w-[75px] h-[25px] md:w-[134px] md:h-[32px]'} />
            </SplideSlide>
        </Splide>
    );
};

export default HeroImgSliderArea;

