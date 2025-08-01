import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import ArrowWhiteSvg from '../assets/Icons/Arrow.svg'; // Adjust path as necessary

const ContactFormSection = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Show loading alert
      Swal.fire({
        title: 'Sending...',
        text: 'Please wait while we send your message.',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      // Replace with your API endpoint
      const response = await axios.post('/api/contactApi', data);

      // Close loading alert
      Swal.close();

      // Show success message only for 201 status
      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: response.data.message || 'Thank you for your message! We will get back to you soon.',
          timer: 3000,
          showConfirmButton: false,
        });

        // Reset form after successful submission
        reset();
      } else {
        // Handle non-201 status as an error
        throw new Error('Unexpected response from server');
      }
    } catch (error) {
      // Show error message
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: error.response?.data?.message || 'Something went wrong. Please try again.',
        timer: 3000,
        showConfirmButton: false,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="flex justify-center items-center py-10 px-5 bg-[radial-gradient(circle,rgba(0,30,60,0.8)_10%,rgba(0,0,0,1)_60%)] bg-fixed">
      <div className="contact-container flex flex-col md:flex-row justify-center items-stretch w-11/12 max-w-[1000px] gap-5">
        {/* Left: Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form bg-[rgba(255,255,255,0.05)] p-5 rounded-lg border border-[rgba(0,102,255,0.6)] flex-1">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-blue-400 font-bold mb-5 leading-tight">Contact Us</h2>
          
          {/* Name Field */}
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 my-2 rounded-lg border-none bg-[#f9f6ee] text-black text-sm md:text-base outline-none"
              {...register('name', {
                required: 'Name is required',
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: 'Please enter a valid name (letters and spaces only)',
                },
              })}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Number Field */}
          <div className="mb-4">
            <input
              type="text"
              name="number"
              placeholder="Enter your number"
              className="w-full p-3 my-2 rounded-lg border-none bg-[#f9f6ee] text-black text-sm md:text-base outline-none"
              {...register('number', {
                required: 'Phone number is required',
                pattern: {
                  value: /^\d{10}$/,
                  message: 'Please enter a valid 10-digit phone number',
                },
              })}
            />
            {errors.number && (
              <p className="text-red-400 text-sm mt-1">{errors.number.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="w-full p-3 my-2 rounded-lg border-none bg-[#f9f6ee] text-black text-sm md:text-base outline-none"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Please enter a valid email address',
                },
              })}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Enter your message"
              className="w-full p-3 my-2 rounded-lg border-none bg-[#f9f6ee] text-black text-sm md:text-base outline-none h-20 resize-y"
              {...register('message')}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`send-btn bg-gradient-to-t text-lg font-medium from-[#004999] to-[#007AFF] text-white p-2.5 text-base border-none rounded-lg cursor-pointer flex items-center justify-center gap-1.5 hover:bg-gradient-to-t hover:from-[#023b7b] hover:to-[#2f92ff] hover:scale-105 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send For Contact'}
            <span className="arrow">
              <img src={ArrowWhiteSvg} alt="arrow-icon" className="w-6 h-6" />
            </span>
          </button>
        </form>

        {/* Right: Animated Effect */}
        <div className="section-preview flex-1 flex items-center">
          <div className="animation-container relative w-full h-[300px] md:h-[400px] hidden md:block">
            <div className="data-visualization absolute w-full h-full">
              <div className="circle-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[rgba(0,123,255,0.05)] shadow-[0_0_20px_rgba(0,123,255,0.1)] animate-[pulse-grow_3s_ease-in-out_infinite]"></div>
              <div className="circle-pulse before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[70%] before:h-[70%] before:bg-[rgba(0,123,255,0.1)] before:rounded-full before:animate-[pulse-grow_3s_ease-in-out_infinite_0.5s] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[40%] after:h-[40%] after:bg-[rgba(0,123,255,0.2)] after:rounded-full after:animate-[pulse-grow_3s_ease-in-out_infinite_1s]"></div>

              {/* Connection lines */}
              <div className="connection-line absolute bg-gradient-to-r from-transparent via-[rgba(0,123,255,0.5)] to-transparent h-[2px] animate-[line-pulse_3s_ease-in-out_infinite]" style={{ width: '40%', top: '30%', left: '5%', animationDelay: '0.3s' }}></div>
              <div className="connection-line absolute bg-gradient-to-r from-transparent via-[rgba(0,123,255,0.5)] to-transparent h-[2px] animate-[line-pulse_3s_ease-in-out_infinite]" style={{ width: '25%', top: '50%', left: '65%', animationDelay: '0.6s' }}></div>
              <div className="connection-line absolute bg-gradient-to-r from-transparent via-[rgba(0,123,255,0.5)] to-transparent h-[2px] animate-[line-pulse_3s_ease-in-out_infinite]" style={{ width: '30%', top: '70%', left: '15%', animationDelay: '0.9s' }}></div>
              <div className="connection-line absolute bg-gradient-to-r from-transparent via-[rgba(0,123,255,0.5)] to-transparent h-[2px] animate-[line-pulse_3s_ease-in-out_infinite]" style={{ width: '35%', top: '40%', left: '45%', animationDelay: '1.2s' }}></div>

              {/* Data nodes */}
              <div className="data-node absolute w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(0,123,255,0.8)] animate-[node-pulse_3s_ease-in-out_infinite]" style={{ top: '30%', left: '5%', animationDelay: '0.2s' }}></div>
              <div className="data-node absolute w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(0,123,255,0.8)] animate-[node-pulse_3s_ease-in-out_infinite]" style={{ top: '30%', left: '45%', animationDelay: '0.2s' }}></div>
              <div className="data-node absolute w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(0,123,255,0.8)] animate-[node-pulse_3s_ease-in-out_infinite]" style={{ top: '50%', left: '65%', animationDelay: '0.6s' }}></div>
              <div className="data-node absolute w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(0,123,255,0.8)] animate-[node-pulse_3s_ease-in-out_infinite]" style={{ top: '50%', left: '90%', animationDelay: '0.8s' }}></div>
              <div className="data-node absolute w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(0,123,255,0.8)] animate-[node-pulse_3s_ease-in-out_infinite]" style={{ top: '70%', left: '15%', animationDelay: '1s' }}></div>
              <div className="data-node absolute w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(0,123,255,0.8)] animate-[node-pulse_3s_ease-in-out_infinite]" style={{ top: '70%', left: '45%', animationDelay: '1.2s' }}></div>
              <div className="data-node absolute w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(0,123,255,0.8)] animate-[node-pulse_3s_ease-in-out_infinite]" style={{ top: '40%', left: '45%', animationDelay: '1.4s' }}></div>
              <div className="data-node absolute w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(0,123,255,0.8)] animate-[node-pulse_3s_ease-in-out_infinite]" style={{ top: '40%', left: '80%', animationDelay: '1.6s' }}></div>

              {/* Message bubbles */}
              <div className="message-bubble absolute p-2.5 px-4 bg-[rgba(255,255,255,0.9)] rounded-xl text-sm shadow-md animate-[message-float_5s_ease-in-out_infinite] text-gray-800 max-w-[150px] whitespace-normal" style={{ top: '20%', left: '10%', animationDelay: '0.5s' }}>How can I register my business?</div>
              <div className="message-bubble absolute p-2.5 px-4 bg-[rgba(255,255,255,0.9)] rounded-xl text-sm shadow-md animate-[message-float_5s_ease-in-out_infinite] text-gray-800 max-w-[150px] whitespace-normal" style={{ top: '75%', left: '60%', animationDelay: '1.5s' }}>I need help with funding!</div>
              <div className="message-bubble absolute p-2.5 px-4 bg-[rgba(255,255,255,0.9)] rounded-xl text-sm shadow-md animate-[message-float_5s_ease-in-out_infinite] text-gray-800 max-w-[150px] whitespace-normal" style={{ top: '40%', left: '70%', animationDelay: '2.5s' }}>GST registration services?</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;