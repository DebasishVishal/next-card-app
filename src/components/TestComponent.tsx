"use client";

import { useState } from "react";

const TestComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-3 gap-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main component with conditional border highlighting */}
      <div
        className={`border ${
          isHovered ? "border-red-500 shadow-2xl" : ""
        } min-h-[500px] col-span-2 grid grid-cols-3`}
      >
        <div className="bg-orange-500 shadow-xl min-h-[500px] col-span-2" />
        <div className="bg-yellow-500 shadow-xl min-h-[500px]" />
      </div>

      {/* Hover div */}
      {isHovered && (
        <div
          className="bg-blue-300 border rounded-lg shadow-2xl max-w-[300px] border-red-600"
          onMouseEnter={() => setIsHovered(true)} // Keep hover active
        ></div>
      )}
    </div>
  );
};

export default TestComponent;
