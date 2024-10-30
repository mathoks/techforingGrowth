import { Automation, DirectCommunication, EmailTemplate, Mike, ProjectStatus, Report } from '@/SvgIcons';
import Image from 'next/image';
import React, { useState } from 'react';

const CommunicationManagement = () => {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const MIN_SWIPE_DISTANCE = 50;

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > MIN_SWIPE_DISTANCE) {
      nextSlide();
    } else if (touchEndX - touchStartX > MIN_SWIPE_DISTANCE) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < Math.ceil(data.length / 3) - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section className="container py-[60px] overflow-hidden">
      <h2 className="text-center font-bold text-xl lg:text-4xl text-[#3369b4] leading-[52px] mb-[42px]">
        Communication Management
      </h2>

      <div className="flex items-center flex-col lg:flex-row gap-10">
        <div>
          <Image
            src={'/TCP/communication/communication.webp'}
            alt=""
            width={1000}
            height={1000}
            className="min-w-[324px] w-full h-full flex-shrink-0"
          />
        </div>

        <div className="w-full">
          {/* Desktop view */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {data.map((item) => (
              <div key={item.title} className="p-3">
                <div className="flex items-center gap-2">
                  <div>{item.icon}</div>
                  <h2 className="font-bold text-lg text-[#3369b4] font-roboto">{item.title}</h2>
                </div>
                <p className="text-[#494949] font-light mt-1">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Mobile view */}
          <div className="lg:hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                width: `${Math.ceil(data.length / 3) * 100}%`,
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {[...Array(Math.ceil(data.length / 3))].map((_, index) => (
                <div key={index} className="w-full grid grid-cols-1 gap-2 flex-shrink-0">
                  {data.slice(index * 3, index * 3 + 3).map((item) => (
                    <div key={item.title} className="p-3">
                      <div className="flex items-center gap-2">
                        <div>{item.icon}</div>
                        <h2 className="font-bold text-sm text-[#3369b4] font-roboto">{item.title}</h2>
                      </div>
                      <p className="text-[#494949] text-sm font-light mt-1 break-words max-w-[350px]">{item.content}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              {[...Array(Math.ceil(data.length / 3))].map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1 ${
                    currentSlide === index ? 'bg-[#3369b4]' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunicationManagement;

const data = [
  {
    icon: <EmailTemplate />,
    title: 'Create Email/SMS Templates',
    content: 'Design and save customizable templates for efficient communication.',
  },
  {
    icon: <Automation />,
    title: 'Set Automation Rules',
    content: 'Establish rules to automate your communication processes.',
  },
  {
    icon: <DirectCommunication />,
    title: 'Direct Client Communication',
    content: 'Send emails and SMS directly to clients using predefined templates and automation rules.',
  },
  {
    icon: <ProjectStatus />,
    title: 'Project Status Updates',
    content: 'Automatically update clients on project status at key milestones.',
  },
  {
    icon: <Report />,
    title: 'Report Distribution',
    content: 'Send detailed project reports to clients via email or SMS.',
  },
  {
    icon: <Mike />,
    title: 'Automated Notifications',
    content: 'Keep clients informed with automated alerts and awareness messages.',
  },
];
