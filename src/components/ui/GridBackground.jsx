import React from "react";

const GridBackground = ({ children }) => {
  return (
    <div className="w-full h-screen bg-white  text-black bg-grid-small-black/[0.5] relative">
      <div className="absolute pointer pointer-events-none inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]">
        {children}
      </div>
    </div>
  );
};

export default GridBackground;
