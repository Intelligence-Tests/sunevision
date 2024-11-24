import React from "react";

const ScrollToTop = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="scroll-to-top" onClick={handleClick}>
      <span className="arrow-icon">↑</span>
    </div>
  );
};

export default ScrollToTop;
