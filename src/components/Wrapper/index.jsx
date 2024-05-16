import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex rounded-lg overflow-hidden z-50 bg-gray-300">
        <div className="w-full bg-gray-100 min-w-80 sm:min-w-96 flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
