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
    flickerPower: 800,
  autoplay: true,
  type: "loop",
  gap: 0,
  drag: "free",
  pauseOnHover: false,
  resetProgress: true,
  perPage: 1,
  perMove: 1,
  interval: 2000,
  pagination: false,
    // height: '100%',
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
            gap: '1rem',
            rewind: false,
            resetProgress: false,
            perPage: 4,
            perMove: 1,
            focus: 'center',
            pagination: false,
            margin: '20px',
            width: '45%',
            arrows: false,
        
            
        },

        1024: {
            gap: '2rem',
            rewind: false,
            resetProgress: false,
            perPage: 3,
            perMove: 1,
            arrows: false, 
            focus: 'center',
            pagination: true,
            width: '60%'
            
            
        },
        768: {
            gap: '6rem',
            rewind: false,
            resetProgress: false,
            perPage: 1,
            perMove: 1,
            focus: 'center',
            pagination: true,
            height: '40rem',
             width: "280px"
           

            
        },
        580: {
            height: '100%',
            pagination: true,
            arrows: false,
            perPage: 1,
            perMove: 1,
            gap: '6rem',
            focus: 'center',
             width: "260px"
        },
        425: {
            gap: '2rem',
            rewind: false,
            resetProgress: false,
            perPage: 1,
            perMove: 1,
            focus: 'center',
            pagination: 'true',
            // height: '40rem',
            
              width: "260px"
             
             
        },

        375: {
            gap: '4rem',
            rewind: false,
            resetProgress: false,
            perPage: 1,
            perMove: 1,
            focus: 'center',
            pagination: 'true',
             width: "380px"
            
            

            

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

