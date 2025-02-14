import React, { useState } from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    jobName: '',
    resume: null,
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === 'resume') {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => setStatus('Thank you for reaching out! We will get back to you soon.'), 1000);
  };

  const handleJobInquirySubmit = (e) => {
    e.preventDefault();
    setTimeout(() => setStatus('Thank you for your job inquiry! We will review your application.'), 1000);
  };

  // Contact Info Data
  const contactInfo = [
    { label: 'Phone', value: '+1 123 456 7890' },
    { label: 'Email', value: 'support@ourstore.com' },
    { label: 'Address', value: '123 Market Street, City, Country' },
  ];

  // Form Fields Data
  const formFields = [
    { name: 'name', placeholder: 'Your Name', type: 'text' },
    { name: 'email', placeholder: 'Your Email', type: 'email' },
  ];

  return (
    <div className="contact-page">
      {/* Title Section */}
      <div className="text-2xl text-center py-8 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Hero Section */}
      <div className="relative">
        <img
          src={assets.contact_img}
          alt="Contact Us"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold">
            We'd Love to Hear from You
          </h2>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="my-10 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg font-semibold text-gray-800">{info.label}</h3>
              <p className="text-gray-600">{info.value}</p>
            </div>
          ))}
        </div>
      </div>


      {/* Contact Form Section */}
      <div className="px-6 md:px-12 my-10">
        <h2 className="text-xl font-semibold text-center mb-6">
        <Title text1={'SEND US '} text2={'A MESSAGE'}/>
        </h2>
        <form
          className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formFields.map((field, index) => (
              <input
                key={index}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                required
                className="border px-4 py-2 rounded-md w-full"
              />
            ))}
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="border px-4 py-2 rounded-md w-full mt-6"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="border px-4 py-2 rounded-md w-full mt-6 h-32"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-700"
          >
            Submit
          </button>
          {status && <p className="text-green-600 mt-4">{status}</p>}
        </form>
      </div>


              {/* Map Section */}
      <div className="px-6 md:px-12 my-10">
        <h2 className="text-xl font-semibold text-center mb-6">
          <Title text1={'VIEW '} text2={'LOCATION'}/>
        </h2>
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093777!2d-122.41941608467897!3d37.77492927975924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809cba9b3f4b%3A0x9c9e812dbbbd6cba!2s123%20Market%20St%2C%20San%20Francisco%2C%20CA%2094103%2C%20USA!5e0!3m2!1sen!2sus!4v1616174017493!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Job Inquiry Section */}
      <div className="px-6 md:px-12 my-10">
        <h2 className="text-xl font-semibold text-center mb-6">
          <Title text1={'JOB'} text2={'INQUERY'}/>
        </h2>
        <form
          className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md"
          onSubmit={handleJobInquirySubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formFields.map((field, index) => (
              <input
                key={index}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                required
                className="border px-4 py-2 rounded-md w-full"
              />
            ))}
          </div>
          <input
            type="text"
            name="jobName"
            placeholder="Position Applied For"
            value={formData.jobName}
            onChange={handleChange}
            required
            className="border px-4 py-2 rounded-md w-full mt-6"
          />
          <div className="mt-6">
            <label className="block text-gray-600 mb-2">Upload Your Resume</label>
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              className="border px-4 py-2 rounded-md w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-700"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
