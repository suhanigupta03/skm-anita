// src/components/Footer.js
import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
// import logo from '../assets/logo.png'; // Adjust the path to your logo

const Footer = () => {
  // Simulating visitors count fetch
  const [visitorsCount, setVisitorsCount] = useState(0);

  useEffect(() => {
    // Simulate an API call to fetch visitors count
    const fetchVisitorsCount = async () => {
      const count = 12345; // Replace this with actual API call
      setVisitorsCount(count);
    };

    fetchVisitorsCount();
  }, []);

  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/5 mb-6">
            {/* <img src={logo} alt="Logo" className="h-16 mb-4" /> */}
            <h4 className="font-bold mb-4">APPLY ADMISSIONS</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Fee Structure</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Admission Form</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Education</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Academics</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Facilities</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-6">
            <h4 className="font-bold mb-4">HYPERLINK</h4>
            <ul>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">NCISM</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Ministry of AYUSH</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">VBSP University</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Scholarship</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Webmail</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-6">
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Contact/Directories</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Admissions</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Emergency Information</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Questions & Feedback</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Media Relations</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-6">
            <h4 className="font-bold mb-4">MAIL US</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Careers</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Contact</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
            </ul>
            {/* <div className="mt-4">
              <a href="#" className="text-gray-400 hover:text-gray-300 mx-2 transition duration-300 ease-in-out transform hover:scale-110"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-gray-300 mx-2 transition duration-300 ease-in-out transform hover:scale-110"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-gray-300 mx-2 transition duration-300 ease-in-out transform hover:scale-110"><FaLinkedinIn /></a>
              <a href="#" className="text-gray-400 hover:text-gray-300 mx-2 transition duration-300 ease-in-out transform hover:scale-110"><FaInstagram /></a>
            </div> */} 
          </div>
          <div className="w-full md:w-1/5 mb-6">
            <h4 className="font-bold mb-4">Visitors Count</h4>
            <div className="text-3xl font-bold text-green-400 animate-pulse">{visitorsCount}</div>
            <p className="mt-2 text-gray-400">Thank you for visiting us!</p>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-500 border-t border-gray-700 pt-6">
          &copy; {new Date().getFullYear()} SK Mishra Anita Ayurvedic Medical College. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
