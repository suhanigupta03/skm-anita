import React from 'react';

const Header = () => {
  return (
    <div className="bg-green-900 text-white py-4 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-center md:items-center space-y-2 md:space-y-0 md:space-x-4">
          <span className="text-lg font-bold">Campus</span>
          <span className="hidden md:inline">|</span>
          <span className="text-lg">Documentation</span>
          <span className="hidden md:inline">|</span>
          <span className="text-lg">Login</span>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row items-center md:items-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
          <span className="text-sm">Phone: +1 212 946 2707</span>
          <span className="hidden md:inline">|</span>
          <span className="text-sm">Help Center</span>
          <span className="hidden md:inline">|</span>
          <span className="text-sm">Social Icons</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
