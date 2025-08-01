import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import Logo from "../assets/Logo/Abtik white.png";
import { SendHorizonal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Show loading alert
      Swal.fire({
        title: 'Subscribing...',
        text: 'Please wait while we process your subscription.',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      // Replace with your API endpoint
      const response = await axios.post('/api/emailApi', data);

      // Close loading alert
      Swal.close();

      // Show success message only for 201 status
      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: response.data.message || `Thank you for subscribing with ${data.email}!`,
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
    <footer className="bg-black text-white py-8 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Footer Left Section: Logo and Email Subscription */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src={Logo} className='w-20 h-20' alt="Abtik Logo"/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex bg-white rounded-lg shadow-lg">
              <input
                type="email"
                placeholder="email@AbtikServices"
                className="flex-1 border-none p-2.5 text-sm outline-none text-gray-800 rounded-l-md"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Please enter a valid email address',
                  },
                })}
              />
              <button 
                type="submit" 
                className={`px-2 py-2 h-full bg-gradient-to-t from-blue-700 to-blue-500 text-white border-none rounded-r-md cursor-pointer hover:from-blue-800 hover:to-blue-600 transition-all duration-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : <SendHorizonal />}
              </button>
            </form>
            {errors.email && (
              <p className="text-red-400 text-sm mt-2">{errors.email.message}</p>
            )}
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Visit Us</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  313, Patel Ave., S.G Highway,<br />
                  Thaltej, Ahmedabad,<br />
                  Gujarat 380054
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">For Call</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Monday-Saturday: 10am-7pm<br />
                  <a href="tel:+918928138434" className="text-blue-400 hover:text-blue-300 transition-colors">
                    +91 89281 38434
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Any Query?</h3>
                <p className="text-gray-300 text-sm">
                  <a href="tel:+919898802140" className="text-blue-400 hover:text-blue-300 transition-colors">
                    +91 98988 02140
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-3">
              <Link 
                to="/service/certification" 
                className="block text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200"
              >
                Certification
              </Link>
              <Link
                to="/service/loan" 
                className="block text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200"
              >
                Loan Services
              </Link>
              <Link 
                to="/service/funding" 
                className="block text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200"
              >
                Funding
              </Link>
            </div>
          </div>

          {/* Company & Legal Combined */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Company Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <div className="space-y-3">
                  <Link 
                    to="/" 
                    className="block text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about-us" 
                    className="block text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    About
                  </Link>
                  <Link 
                    to="/contact" 
                    className="block text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    Contact
                  </Link>
                  <Link 
                    to="/career" 
                    className="block text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    Career
                  </Link>
                  <Link
                    to="/service" 
                    className="block text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    Service
                  </Link>
                </div>
              </div>

              {/* Legal Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <div className="space-y-3">
                  <Link 
                    to="/privacy-policy" 
                    className="block text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    to="/cancellation-refunded-policy" 
                    className="block text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    Cancellation & Refund Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 py-8 border-t border-gray-700">
          <a 
            href="#" 
            aria-label="Facebook"
            className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0,0,256,256">
              <g fill="currentColor" fillRule="nonzero">
                <g transform="scale(8.53333,8.53333)">
                  <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.016 4.432,10.984 10.206,11.852v-8.672h-2.969v-3.154h2.969v-2.099c0,-3.475 1.693,-5 4.581,-5c1.383,0 2.115,0.103 2.461,0.149v2.753h-1.97c-1.226,0 -1.654,1.163 -1.654,2.473v1.724h3.593l-0.487,3.154h-3.106v8.697c5.857,-0.794 10.376,-5.802 10.376,-11.877c0,-6.627 -5.373,-12 -12,-12z"></path>
                </g>
              </g>
            </svg>
          </a>
          <a 
            href="#" 
            aria-label="Instagram"
            className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0,0,256,256">
              <g fill="currentColor" fillRule="nonzero">
                <g transform="scale(8.53333,8.53333)">
                  <path d="M15,2c-7.168,0 -13,5.832 -13,13c0,7.168 5.832,13 13,13c7.168,0 13,-5.832 13,-13c0,-7 derogated-168 -5.832,-13 -13,-13zM11.66602,6h6.66602c3.125,0 5.66797,2.54202 5.66797,5.66602v6.66602c0,3.125 -2.54202,5.66797 -5.66602,5.66797h-6.66602c-3.125,0 -5.66797,-2.54202 -5.66797,-5.66602v-6.66602c0,-3.125 2.54202,-5.66797 5.66602,-5.66797zM11.66602,8c-2.021,0 -3.66602,1.64597 -3.66602,3.66797v6.66602c0,2.021 1.64597,3.66602 3.66797,3.66602h6.66602c2.021,0 3.66602,-1.64597 3.66602,-3.66797v-6.66601c0,-2.021 -1.64597,-3.66602 -3.66797,-3.66602zM19.66797,9.66602c0.368,0 0.66602,0.29802 0.66602,0.66602c0,0.368 -0.29801,0.66797 -0.66602,0.66797c-0.368,0 -0.66797,-0.29997 -0.66797,-0.66797c0,-0.368 0.29997,-0.66602 0.66797,-0.66602zM15,10c2.757,0 5,2.243 5,5c0,2.757 -2.243,5 -5,5c-2.757,0 -5,-2.243 -5,-5c0,-2.757 2.243,-5 5,-5zM15,12c-1.65685,0 -3,1.34315 -3,3c0,1.65685 1.34315,3 3,3c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3z"></path>
                </g>
              </g>
            </svg>
          </a>
          <a 
            href="#" 
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0,0,256,256">
              <g fill="currentColor" fillRule="nonzero">
                <g transform="scale(5.12,5.12)">
                  <path d="M25,2c-12.682,0 -23,10.317 -23,23c0,12.683 10.318,23 23,23c12.682,0 23,-10.317 23,-23c0,-12.683 -10.318,-23 -23,-23zM18,35h-4v-15h4zM16,17c-1.105,0 -2,-0.895 -2,-2c0,-1.105 0.895,-2 2,-2c1.105,0 2,0.895 2,2c0,1.105 -0.895,2 -2,2zM37,35h-4v-5v-2.5c0,-1.925 -1.575,-3.5 -3.5,-3.5c-1.925,0 -3.5,1.575 -3.5,3.5v7.5h-4v-15h4v1.816c1.168,-1.122 2.752,-1.816 4.5,-1.816c3.59,0 6.5,2.91 6.5,6.5z"></path>
                </g>
              </g>
            </svg>
          </a>
        </div>

        {/* Footer Bottom Section: Copyright and Made by */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p className="text-center md:text-left">
              Made by Abtik Digital. 
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors ml-1">
                @Abtikdigital
              </a>
            </p>
            <p className="text-center md:text-right">
              © 2024 AbtikServices. All Rights Reserved. 
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors ml-1">
                @AbtikServices
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;