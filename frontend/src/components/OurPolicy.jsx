import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Our Policies</h2>
        <p className="text-gray-500 text-sm sm:text-base mt-2">
          Delivering the best experience with transparency and trust.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-8 px-6">
        {/* Easy Exchange */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition ease-in-out duration-300">
          <img
            src={assets.exchange_icon}
            className="w-16 h-16 m-auto mb-5"
            alt="Exchange Policy Icon"
          />
          <h3 className="font-semibold text-lg text-gray-800">Easy Exchange Policy</h3>
          <p className="text-gray-500 mt-2">
            We offer a hassle-free exchange policy to ensure your satisfaction with every purchase.
          </p>
        </div>

        {/* High Quality */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition ease-in-out duration-300">
          <img
            src={assets.quality_icon}
            className="w-16 h-16 m-auto mb-5"
            alt="High Quality Icon"
          />
          <h3 className="font-semibold text-lg text-gray-800">Premium Quality Products</h3>
          <p className="text-gray-500 mt-2">
            Every product is crafted with care to meet the highest quality standards.
          </p>
        </div>

        {/* 24/7 Support */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition ease-in-out duration-300">
          <img
            src={assets.support_img}
            className="w-16 h-16 m-auto mb-5"
            alt="Customer Support Icon"
          />
          <h3 className="font-semibold text-lg text-gray-800">24/7 Customer Support</h3>
          <p className="text-gray-500 mt-2">
            Our support team is available 24/7 to assist you with any inquiries or concerns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
