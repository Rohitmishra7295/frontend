import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  const coreValues = [
    { title: 'Integrity', description: 'We maintain transparency and honesty in every interaction.' },
    { title: 'Innovation', description: 'We embrace new ideas to improve your shopping experience.' },
    { title: 'Customer First', description: 'Your needs and satisfaction drive every decision we make.' },
    { title: 'Sustainability', description: 'We’re committed to eco-friendly practices.' },
  ];

 

  return (
    <div className='about-section'>
      {/* Title Section */}
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* About Us Section */}
      <div className='my-10 flex flex-col md:flex-row gap-16 items-center px-6 md:px-12'>
        <img
          className='w-full md:max-w-[450px] rounded-lg shadow-md transition-transform transform hover:scale-105'
          src={assets.about_img}
          alt="About Our Store"
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p className='text-lg leading-relaxed'>
            Welcome to <span className='font-semibold text-gray-800'>Our Store</span>, where we are committed to providing the best shopping experience.
          </p>
          <p className='text-lg leading-relaxed'>
            Our mission is to empower customers with the convenience of online shopping while ensuring product quality, transparency, and exceptional service.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='text-xl py-6 text-center'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 gap-8 px-6 md:px-12'>
        <div className='border px-10 md:px-16 py-8 sm:py-12 flex flex-col gap-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow'>
          <b className='text-gray-800 text-lg'>Quality Assurance</b>
          <p className='text-gray-600'>
            We carefully select our products to ensure they meet the highest standards of quality. Your satisfaction is our priority.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-12 flex flex-col gap-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow'>
          <b className='text-gray-800 text-lg'>Convenience</b>
          <p className='text-gray-600'>
            Shop from the comfort of your home and enjoy fast, reliable shipping. Our platform is designed for a smooth and hassle-free experience.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-12 flex flex-col gap-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow'>
          <b className='text-gray-800 text-lg'>Exceptional Customer Service</b>
          <p className='text-gray-600'>
            Our team is here to assist you every step of the way. From inquiries to after-sales support, we value your trust in us.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className='text-xl py-6 text-center'>
        <Title text1={'OUR'} text2={'CORE VALUES'} />
      </div>
      <div className='flex flex-wrap justify-center gap-8 px-6 md:px-12 mb-20'>
        {coreValues.map((value, index) => (
          <div
            key={index}
            className='border px-6 py-4 rounded-lg shadow-md hover:shadow-lg text-center w-full sm:w-[200px] md:w-[220px] lg:w-[250px] transition-all'
          >
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>{value.title}</h3>
            <p className='text-gray-600'>{value.description}</p>
          </div>
        ))}
      </div>

     

      {/* Newsletter Section */}
      <NewsletterBox />
    </div>
  );
};

export default About;
