import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-white text-gray-800 py-16 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-12 sm:gap-16">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center sm:items-start">
          <img src={assets.logo} alt="Company Logo" className="w-32 mb-2" />
          <p className="text-sm text-gray-600">
            We are committed to providing the best shopping experience with top-quality products and excellent customer service.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Your satisfaction is our priority, and we are always striving to improve. Don't hesitate to reach out with any questions 
            or feedback – we are here to help!
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="font-semibold text-xl mb-4 text-gray-900">COMPANY</h3>
          <ul className="text-sm space-y-2">
            <li><a href="/" className="text-gray-600 hover:text-blue-600">Home</a></li>
            <li><a href="/about" className="text-gray-600 hover:text-blue-600">About Us</a></li>
            <li><a href="/delivery" className="text-gray-600 hover:text-blue-600">Delivery</a></li>
            <li><a href="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="font-semibold text-xl mb-4 text-gray-900">GET IN TOUCH</h3>
          <ul className="text-sm space-y-2">
            <li className="text-gray-600">Email: support@ecommerce.com</li>
            <li className="text-gray-600">Phone: +1 (123) 456-7890</li>
            <li className="text-gray-600">Address: 123 E-Commerce St, City, Country</li>
          </ul>
        </div>

        {/* Copyright Section */}
        <div className="flex justify-center sm:justify-start items-center sm:items-start text-sm text-gray-500 mt-1 sm:mt-0">
          <p>&copy; 2025 E-Commerce Inc. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
