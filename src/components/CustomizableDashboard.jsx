'use client'
import { useEffect } from 'react';
import c from '../style/customizableDashboard.module.css';
import Image from 'next/legacy/image';
import Slider from 'react-slick';
const CustomizableDashboard = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    infinite: true,
    autoplaySpeed: 6000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          autoplaySpeed: 6000,
          autoplay: true,
        }
      }
    ]
  };


  // useEffect(() => {
  //   const handleScroll = () => {
  //     var StackCards = function (element) {
  //       this.element = element;
  //       this.items = this.element.getElementsByClassName("stack_card_item");
  //       this.scrollingListener = false;
  //       this.scrolling = false;
  //       initStackCardsEffect(this);
  //     };

  //     function initStackCardsEffect(element) {
  //       // use Intersection Observer to trigger animation
  //       var observer = new IntersectionObserver(stackCardsCallback.bind(element));
  //       observer.observe(element.element);
  //     }

  //     function stackCardsCallback(entries) {
  //       // Intersection Observer callback
  //       if (entries[0].isIntersecting) {
  //         // cards inside viewport - add scroll listener
  //         if (this.scrollingListener) return; // listener for scroll event already added
  //         stackCardsInitEvent(this);
  //       } else {
  //         // cards not inside viewport - remove scroll listener
  //         if (!this.scrollingListener) return; // listener for scroll event already removed
  //         window.removeEventListener("scroll", this.scrollingListener);
  //         this.scrollingListener = false;
  //       }
  //     }

  //     function stackCardsInitEvent(element) {
  //       element.scrollingListener = stackCardsScrolling.bind(element);
  //       window.addEventListener("scroll", element.scrollingListener);
  //     }

  //     function stackCardsScrolling() {
  //       if (this.scrolling) return;
  //       this.scrolling = true;
  //       window.requestAnimationFrame(animateStackCards.bind(this));
  //     }

  //     function animateStackCards() {
  //       var top = this.element.getBoundingClientRect().top;
  //       var offsetTop = 100,
  //         cardHeight = 300,
  //         marginY = 10;
  //       for (var i = 0; i < this.items.length; i++) {
  //         // cardTop/cardHeight/marginY are the css values for the card top position/height/Y offset
  //         var scrolling = offsetTop - top - i * (cardHeight + marginY);
  //         // debugger;
  //         if (scrolling > 0) {
  //           // card is fixed - we can scale it down
  //           this.items[i].setAttribute(
  //             "style",
  //             "transform: translateY(" +
  //             marginY * i +
  //             "px) scale(" +
  //             (cardHeight - scrolling * 0.05) / cardHeight +
  //             ");"
  //           );
  //         }
  //       }

  //       this.scrolling = false;
  //     }

  //     var stackCards = document.getElementsByClassName("card-deck-js");
  //     var intersectionObserverSupported =
  //       "IntersectionObserver" in window && "IntersectionObserverEntry" in window;

  //     if (stackCards.length > 0 && intersectionObserverSupported) {
  //       for (var i = 0; i < stackCards.length; i++) {
  //         new StackCards(stackCards[i]);
  //       }
  //     }
  //   }
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <>
      {/* <div className='custom-container'>
      <div className={`${c.title}`}>Customizable Personal <span>Take Control of Your Work Life</span></div>
      <div className='mt-12'>
        <div className={`card-deck-js`}>
          {
            cards.map((card, i) => (
              <div key={i} className={`${c.stack_card} stack_card_item`} style={{ transform: `${i === 0 && "translateY(0px)"}` }}>
                <img src={card.img_stack} alt="" className='lg:hidden block w-full px-4 mt-4' />
                <div className='flex flex-col lg:gap-6 gap-4 pt-5 px-6 pb-6'>
                  <h3 className={c.cardTitle}>
                    {card.title}
                  </h3>
                  <p className='font-light text-[#333] text-justify lg:text-left lg:text-[16px] text-[14px] lg:leading-7 leading-5'>{card.description}</p>
                  <ul className='list-disc lg:pl-6 pl-0 lg:w-full w-[60%] lg:mx-0 mx-auto'>
                    {
                      card.lists.map((list, i) => (
                        <li key={i} className='text-[#333] lg:text-[16px] text-[14px]'>{list}</li>
                      ))
                    }
                  </ul>
                </div>
                <div className={c.cardImg}>
                  <Image src={card.img} fill alt={
                    card.img.split('/').pop().split('.')[0]
                  } />
                </div>
              </div>
            ))
          }
        </div>
      </div>
     </div> */}

      <div className="lg:pt-20 lg:pb-20 pt-10 pb-28">
        <div className='main_container'>
          <h2 className="roboto lg:text-[36px] text-[22px] font-bold text-[#333] lg:leading-[48px] leading-[28px] text-center lg:mb-12 mb-8 lg:px-0 px-4">Customizable Personal <span className="text_gradient_personal">Take Control of Your Work Life</span></h2>

          <Slider {...settings}>
            {
              cards.map((card, index) => (
                <div key={index} className='p-5'>
                  <div className="flex lg:flex-row flex-col-reverse justify-between bg-[#F7F9FD] shadow-shadow8x rounded-[12px] lg:h-[400px] h-full" >
                    <div className="lg:w-[70%] w-full px-6 py-9">
                      <h3 className='text_gradient_personal roboto font-medium lg:text-[28px] text-[16px]'>{card.title}</h3>
                      <p className='roboto lg:text-[16px] text-[14px] lg:leading-6 leading-5 font-light text-[#333] text-justify lg:my-6 my-4'>{card.description}</p>

                      <ul className="dash_list">
                        {
                          (card.lists).map((list_data, i) => (
                            <li key={i}>{list_data}</li>
                          ))
                        }
                      </ul>

                    </div>

                    <div className="lg:w-[30%] w-full">
                      <img src={card.stack_card} alt="" className='w-full h-full rounded-tr-[12px] rounded-br-[12px] lg:!block !hidden object-cover' />
                      <img src={card.img_stack} alt="" className='w-full h-full rounded-tr-[12px] rounded-br-[12px] lg:!hidden !block lg:px-0 px-5 lg:mt-0 mt-5 object-cover' />
                    </div>
                  </div>
                </div>
              ))
            }

          </Slider>

        </div>
      </div>
    </>
  );
};

export default CustomizableDashboard;

const cards = [
  {
    title: 'Easy Attendance Tracking & Leave Management',
    description: 'Monitor your personal attendance, generate insightful reports, and streamline leave requests with the intuitive and user-friendly Attendance module. Stay organized, save time, and keep accurate records of your attendance, leaves, and holidays from one place.',
    img: '/attendance.svg',
    img_stack: "/Home/stack_card_01.webp",
    stack_card: "/Home/stack_cards/practical_01.webp",
    lists: [
      'View Attendance Reports',
      'Track Leave History',
      'Manage Leave Requests',
      'Track Upcoming Holidays'
    ]
  },
  {
    title: 'Stay on Top of Your Personal Finances',
    description: 'Easily track your earnings, manage expenses, and send commission requests from one place. Access comprehensive reports, request claims, track expenses, and monitor commission earnings on the user-friendly Personal Finances Module.',
    img: '/Finances.svg',
    img_stack: "/Home/stack_card_02.webp",
    stack_card: "/Home/stack_cards/practical_02.webp",
    lists: [
      'Salary Insights',
      'Payroll Management',
      'Expense Tracking',
      'Commission Management'
    ]
  },
  {
    title: 'Effortlessly Manage Personal Documents',
    description: 'Say goodbye to the hassle of manual document management – the Personal Documents Management module offers every employee a seamless solution to organize and access their personal documents in just a few clicks.',
    img: '/ManagePersonalDocuments.svg',
    img_stack: "/Home/stack_card_03.webp",
    stack_card: "/Home/stack_cards/practical_03.webp",
    lists: [
      'Centralized Document Storage',
      'Easy Access and Retrieval',
      'Enhanced Organization',
      'Streamlined Workflow',
      'Document Security'
    ]
  },
  {
    title: 'Easy KPI Tracking',
    description: 'Track and monitor your performance with ease with the KPI Score module. Get valuable insights into your Key Performance Indicators (KPIs). Access your weekly and monthly scores and get a clear view of your progress and performance trends so you can make informed decisions, set personal goals, and strive for continuous improvement.',
    img: '/tracking.svg',
    img_stack: "/Home/stack_card_04.webp",
    stack_card: "/Home/stack_cards/practical_04.webp",
    lists: [
      'Track Personal Performance',
      'Analyze Performance Trends',
      'Set Personal Goals',
      'Make Data-Driven Decisions'
    ]
  },
  {
    title: 'Voice Your Opinions',
    description: 'Make your voice heard and contribute to the growth and improvement of your organization through the monthly survey feature! Take in-depth surveys and provide your valuable feedback by answering carefully crafted questions, fostering a culture of collaboration and continuous improvement.',
    img: '/Voice Your Opinions.svg',
    img_stack: "/Home/stack_card_05.webp",
    stack_card: "/Home/stack_cards/practical_05.webp",
    lists: [
      'Active Participation',
      'Provide Insights',
      'Enhance Communication',
      'Improve Workplace'
    ]
  },
  {
    title: 'Enhanced Official Communication',
    description: 'Stay informed, connected, and engaged within your organization with the Official Information module. Stay up-to-date with the latest information, voice your concerns, and participate in crucial discussions from one central hub.',
    img: '/Enhanced Official Communication.svg',
    img_stack: "/Home/stack_card_06.webp",
    stack_card: "/Home/stack_cards/practical_06.webp",
    lists: [
      'Timely Updates',
      'Transparent Communication',
      'Smooth Resignation Process',
      'Seamless Meeting Management',
      'Enhanced Collaboration'
    ]
  },
  {
    title: 'Accelerate Your Growth',
    description: 'Enhance your skills, expand your knowledge, and stay updated with the latest industry trends with the Training module. Actively engage in professional development, unlock your full potential, and stay ahead in your field with a wide range of training courses to fuel your personal growth.',
    img: '/Accelerate Your Growth.svg',
    img_stack: "/Home/stack_card_07.webp",
    stack_card: "/Home/stack_cards/practical_07.webp",
    lists: [
      'Diverse Course Catalog',
      'Flexible Learning Experience',
      'Personal Progress Tracking',
      'Professional Development'
    ]
  }
]