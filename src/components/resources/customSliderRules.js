import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
const customEBookSliderOption = {
    type: 'slide',
    height: '100%',
    width: '100%',
    pagination: false,
    arrows: false,
    gap: 0,
    autoplay: true,
    rewind: true,
    interval: 3000,
    pauseOnHover: true,
    resetProgress: true,
    lazyLoad: 'sequential',
    speed: 500,
    perPage: 1,
    classes: {
        next: 'splide__slide--next',
        prev: 'splide__slide--prev'
    },
    breakpoints: {
        768: {
            height: '100%',
            width: '100%',
            pagination: false,
            arrows: false,
            gap: 0,
            autoplay: true,
            rewind: true,
            resetProgress: true,
        }
    }
};

const customClientSaysSliderOption = {
    type: 'slide',
    height: '100%',
    width: '100%',
    pagination: true,
    arrows: false,
    gap: 0,
    autoplay: true,
    rewind: true,
    interval: 3000,
    pauseOnHover: true,
    resetProgress: true,
    lazyLoad: 'sequential',
    speed: 500,
    perPage: 1,
    classes: {
        next: 'splide__slide--next',
        prev: 'splide__slide--prev'
    },
    breakpoints: {
        768: {
            height: '100%',
            width: '100%',
            pagination: true,
            arrows: false,
            gap: 0,
            autoplay: true,
            rewind: true,
            resetProgress: true,
        }
    }
};

const paginationStyle = {
    '.splide__pagination .splide__pagination__page.is-active': {
        background: 'var(--secondary)',
        opacity: '1'
    },
    '.splide__pagination .splide__pagination__page': {
        background: 'var(--secondary)',
        opacity: '0.4'
    },
    '.splide__pagination': {
        bottom: '-0.6em',
    }
};

const resourcesHeroSliderOption = {
    type: 'loop',
    drag: 'free',
    arrows: false,
    pagination: false,
    focus: 'center',
    perPage: 3,
    pauseOnHover: true,
    pauseOnFocus: true,
    autoplay: true,
    autoScroll: {
        speed: 1,
        pause: 0,
    },
    extensions: [AutoScroll],
    breakpoints: {
        768: {
            height: '100%',
            width: '100%',
            pagination: false,
            arrows: false,
            perPage: 3,
            gap: 2,
        },
        580: {
            height: '100%',
            width: '500px',
            pagination: false,
            arrows: false,
            perPage: 3,
            gap: 0,
        },
        420: {
            height: '100%',
            width: '380px',
            pagination: false,
            arrows: false,
            perPage: 3,
            gap: 0,
        },
    }
}

const organizationSliderOption = {
    type: 'loop',
    drag: 'free',
    arrows: false,
    pagination: false,
    focus: 'left',
    perPage: 6,
    pauseOnHover: true,
    pauseOnFocus: true,
    autoplay: true,
    autoScroll: {
        speed: 1,
        pause: 0,
    },
    extensions: [AutoScroll],
    breakpoints: {
        768: {
            height: '100%',
            width: '100%',
            pagination: false,
            arrows: false,
            perPage: 3,
            gap: 2,
        },
        500: {
            height: '100%',
            width: '400px',
            pagination: false,
            arrows: false,
            perPage: 2,
            gap: 0,
        },
    }
}

const featuredSliderOption = {
    type: 'loop',
    drag: 'free',
    arrows: false,
    pagination: false,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    focus: 'center',
    perPage: 4,
    pauseOnHover: true,
    pauseOnFocus: true,
    autoplay: true,
    autoScroll: {
        speed: 1,
        pause: 0,
    },
    extensions: [AutoScroll],
    breakpoints: {
        768: {
            height: '100%',
            width: '100%',
            pagination: false,
            arrows: false,
            perPage: 3,
            gap: 2,
        },
        500: {
            height: '100%',
            width: '400px',
            pagination: false,
            arrows: false,
            perPage: 2,
            gap: 0,
        },
    }
}

export { customEBookSliderOption, customClientSaysSliderOption, paginationStyle, resourcesHeroSliderOption, organizationSliderOption, featuredSliderOption };