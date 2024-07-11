import React, { useState } from 'react';
import logo from '../assets/skm-logo.png'

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleButtonClick = (menuName) => {
    if (activeMenu === menuName) {
      setActiveMenu(null);
      setDropdownOpen(false);
    } else {
      setActiveMenu(menuName);
      setDropdownOpen(true);
    }
   
  
  };
  const handleMouseEnter = (menuName) => {
    setActiveMenu(menuName);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
    setDropdownOpen(false);
  };
  return (
    <div className="flex justify-between items-center p-6 px-8 bg-opacity-50 bg-transparent text-black z-20">
      <img src={logo} alt="SKM Logo" className="h-14" /> 
      <nav className="space-x-8">
      <div
          className="relative inline-block text-left"
          onMouseEnter={() => handleMouseEnter('home')}
          onMouseLeave={handleMouseLeave}
        >
          <button onClick={() => handleButtonClick('home')} className="hover:underline">Home</button>
          {dropdownOpen && activeMenu === 'home' && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <div className="py-1" role="none">
                <a href="#" className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Dashboard</a>
                <a href="#" className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</a>
                <a href="#" className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
              </div>
            </div>
          )}
        </div>
      <div
          className="relative inline-block text-left"
          onMouseEnter={() => handleMouseEnter('pages')}
          onMouseLeave={handleMouseLeave}
        >
          <button onClick={() => handleButtonClick('pages')} className="hover:underline">About Us</button>
          {dropdownOpen && activeMenu === 'pages' && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <div className="py-1" role="none">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Dashboard</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
              </div>
            </div>
          )}
        </div>

      <div
          className="relative inline-block text-left"
          onMouseEnter={() => handleMouseEnter('Academics')}
          onMouseLeave={handleMouseLeave}
        >
          <button onClick={() => handleButtonClick('Academics')} className="hover:underline">Faculty</button>
          {dropdownOpen && activeMenu === 'Academics' && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <div className="py-1" role="none">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Dashboard</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
              </div>
            </div>
          )}
        </div>
        <div
          className="relative inline-block text-left"
          onMouseEnter={() => handleMouseEnter('Admissions')}
          onMouseLeave={handleMouseLeave}
        >
          <button onClick={() => handleButtonClick('Admissions')} className="hover:underline">College & Hostel</button>
          {dropdownOpen && activeMenu === 'Admissions' && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <div className="py-1" role="none">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Dashboard</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
              </div>
            </div>
          )}
        </div>

        <div
          className="relative inline-block text-left"
          onMouseEnter={() => handleMouseEnter('courses')}
          onMouseLeave={handleMouseLeave}
        >
          <button onClick={() => handleButtonClick('courses')} className="hover:underline">Hospital</button>
          {dropdownOpen && activeMenu === 'courses' && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <div className="py-1" role="none">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Dashboard</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
              </div>
            </div>
          )}
        </div>

        <div
          className="relative inline-block text-left"
          onMouseEnter={() => handleMouseEnter('athletics')}
          onMouseLeave={handleMouseLeave}
        >
          <button onClick={() => handleButtonClick('athletics')} className="hover:underline">Courses</button>
          {dropdownOpen && activeMenu === 'athletics' && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <div className="py-1" role="none">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Dashboard</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
              </div>
            </div>
          )}
        </div>

        <div
          className="relative inline-block text-left"
          onMouseEnter={() => handleMouseEnter('university-life')}
          onMouseLeave={handleMouseLeave}
        >
          <button onClick={() => handleButtonClick('university-life')} className="hover:underline">Online</button>
          {dropdownOpen && activeMenu === 'university-life' && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <div className="py-1" role="none">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Dashboard</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
              </div>
            </div>
          )}
        </div>

        <div
          className="relative inline-block text-left"
          onMouseEnter={() => handleMouseEnter('blog')}
          onMouseLeave={handleMouseLeave}
        >
          <button onClick={() => handleButtonClick('blog')} className="hover:underline">Contact Us</button>
          {dropdownOpen && activeMenu === 'blog' && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <div className="py-1" role="none">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Dashboard</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
