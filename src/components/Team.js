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
    <div className="">
        <div className="">
        <a href="/nurses" className="btn btn-primary mt-6">Explore</a>
        </div>
        
        <div className="">
            <a href="/doctorappointment" className="btn btn-primary mt-6">Explore</a>
        </div>
    </div>
  );
};

export default Team;



