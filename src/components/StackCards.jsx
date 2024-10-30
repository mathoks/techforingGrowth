'use client'
import React, { useEffect, useState } from 'react';

const StackCards = ({ children }) => {
  const [items, setItems] = useState([]);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(stackCardsCallback);
    observer.observe(itemsContainerRef.current);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', stackCardsScrolling);
    };
  }, []);

  const itemsContainerRef = React.createRef();
  let cardTop = 0;

  const stackCardsCallback = (entries) => {
    if (entries[0].isIntersecting) {
      if (!scrolling) {
        stackCardsInitEvent();
      }
    } else {
      if (scrolling) {
        window.removeEventListener('scroll', stackCardsScrolling);
        setScrolling(false);
      }
    }
  };

  const stackCardsInitEvent = () => {
    setScrolling(true);
    window.addEventListener('scroll', stackCardsScrolling);
  };

  const stackCardsScrolling = () => {
    if (!scrolling) return;
    setScrolling(false);
    window.requestAnimationFrame(animateStackCards);
  };

  const animateStackCards = () => {
    const top = itemsContainerRef.current.getBoundingClientRect().top;
    const cardHeight = 200; // Adjust this based on your card height
    const marginY = 20; // Adjust this based on your card margin

    for (let i = 0; i < items.length; i++) {
      const scrollingAmount = cardTop - top - i * (cardHeight + marginY);

      if (scrollingAmount > 0) {
        items[i].style.transform = `translateY(${marginY * i}px) scale(${(cardHeight - scrollingAmount * 0.05) / cardHeight})`;
      }
    }
  };

  if (itemsContainerRef.current) {
    cardTop = itemsContainerRef.current.getBoundingClientRect().top;
  }

  return (
    <div className="stack-cards">
      <style>
        {`
        .stack-cards {
          position: relative;
        }
        
        .stack-cards__item {
          position: sticky;
          top: var(--space-sm); /* Adjust this value as needed */
          transform-origin: center top;
          transition: transform 0.3s ease; /* Smooth transition for scaling */
        }
        
        .stack-cards__item.active {
          z-index: 1; /* Place active card on top of others */
        }
        
        .js-stack-cards__item {
          padding: 20px;
          background-color: white;
          border: 1px solid #ccc;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .stack-cards__item.active {
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
        }`}
      </style>
      <ul className="js-stack-cards" ref={itemsContainerRef}>
        {React.Children.map(children, (child, index) => (
          <li
            key={index}
            className={`stack-cards__item js-stack-cards__item ${index === 0 ? 'active' : ''
              }`}
            ref={(el) => {
              if (el && !items.includes(el)) {
                setItems((prevItems) => [...prevItems, el]);
              }
            }}
          >
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StackCards;
