import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export const paginationStyle = {
    '.splide__pagination .splide__pagination__page.is-active': {
        background: '#5BBC2E',
        opacity: '1'
    },
    '.splide__pagination .splide__pagination__page': {
        background: '#5BBC2E',
        opacity: '0.4'
    },
    '.splide__pagination': {
        bottom: '-0.6em',
    }
};


export const resourcesHeroSliderOption = {
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