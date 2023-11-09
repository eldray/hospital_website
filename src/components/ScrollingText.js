import React, { useRef, useEffect } from 'react';

const ScrollingText = () => {
  const textRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      if (textRef.current) {
        textRef.current.scrollBy(1, 0); // Scroll by 1 pixel horizontally
      }
    }, 25); // Adjust speed as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="scrolling-text-container">
      <div className="scrolling-text" ref={textRef}>
        WELCOME TO THE GENERAL HOSPITAL, WE OFFER 24/7 HEALTHCARE AND SPECIALISE IN ALL TYPES HEALTH SERVICES  -
      </div>
    </div>
  );
};

export default ScrollingText;
