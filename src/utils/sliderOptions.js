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


export const paginationStyle2 = {
    '.splide__pagination .splide__pagination__page.isActive': {
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

export const priceHeroSliderOption = {
  autoplay: true,
  type: "loop",
  gap: "1rem",
  drag: "free",

  pauseOnHover: false,
  resetProgress: true,
  perPage: 1,
  interval: 3000,
  pagination: false,
  speed: 0,
  arrows: false,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  cover: true,
  autoScroll: {
    speed: 1,
    pause: 0,
  },
  extensions: [AutoScroll],
  breakpoints: {
    768: {
      height: "100%",
      width: "500px",
      pagination: false,
      arrows: false,
      perPage: 1,
      gap: 2,
    },
    580: {
      height: "100%",
      width: "500px",
      pagination: false,
      arrows: false,
      perPage: 1,
      gap: 0,
    },
    420: {
      height: "100%",
      width: "380px",
      pagination: false,
      arrows: false,
      perPage: 1,
      gap: 0,
    },
  },
};

export const paginationSliderOption = {
    type: 'slide',
    rewind: false,
    autoWidth: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    breakpoints: {


        1440: {
            gap: '2rem',
            rewind: false,
            resetProgress: false,
            perPage: 4,
            perMove: 1,
            focus: 'center',
            pagination: false,
            snap:true,
            autoWidth: true,
        
            
        },

        1024: {
            gap: '2rem',
            rewind: false,
            resetProgress: false,
            perPage: 3,
            perMove: 1,
            focus: 'center',
            pagination: true,
            autoWidth: true,
            
        },
        768: {
            gap: '1rem',
            rewind: false,
            resetProgress: false,
            perPage: 2,
            perMove: 1,
            focus: 'center',
            pagination: 'true',
            height: '40rem',
            width: "100%"
            
        },
        580: {
            height: '100%',
            pagination: true,
            arrows: false,
            perPage: 1,
            perMove: 1,
            gap: '6rem',
            focus: 'center',
        },
        420: {
            gap: '1rem',
            rewind: false,
            resetProgress: false,
            perPage: 1,
            perMove: 1,
            focus: 'center',
            pagination: 'true',
            // height: '40rem',
             width: '90%',
             
             
        },

        375: {
            gap: '4rem',
            rewind: false,
            resetProgress: false,
            perPage: 1,
            perMove: 1,
            focus: 'center',
            pagination: 'true',
            
            

            

        },

        320: {
            gap: '4rem',
            rewind: false,
            resetProgress: false,
            perPage: 1,
            perMove: 1,
            focus: 'center',
            pagination: 'true',
            
            

            

        },
    }

    
}

