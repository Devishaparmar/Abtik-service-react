import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import Arrow from "../assets/Icons/Arrow.svg";

const HeroSection = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      Swal.fire({
        title: 'Subscribing...',
        text: 'Please wait while we process your subscription.',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      const response = await axios.post('/api/emailApi', { email: data.email });
      Swal.close();
      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'You have successfully subscribed!',
          confirmButtonColor: '#3b82f6',
        });
        reset();
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response?.data?.message || 'Something went wrong! Please try again.',
        confirmButtonColor: '#ef4444',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes rotate {
            0% {
              transform: rotateX(0) rotateY(0);
            }
            100% {
              transform: rotateX(360deg) rotateY(360deg);
            }
          }
        `}
      </style>
      <section
        className="flex flex-col bg-[radial-gradient(circle,rgba(0,30,60,0.8)_10%,rgba(0,0,0,1)_60%)] lg:flex-row justify-between items-center px-5 py-[5vh] bg-gradient-radial from-[rgba(0,30,60,0.8)] to-[rgba(0,0,0,1)] bg-fixed min-h-[60vh]"
      >
        <div className="flex-1 text-left mb-8 lg:mb-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-blue-400 font-bold mb-5 leading-tight">
            Your One-Stop Solution <br />
            for all Business Needs
          </h2>
          <p className="text-base md:text-lg text-gray-400 mb-5">
            Empowering Businesses through Comprehensive Solutions: <br />
            From Fund Management to Legal Compliance, <br />
            We've Got You Covered at Abtik Startup Advisor Private Limited
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex items-center max-w-md">
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-1 px-4 py-2 rounded-l-md bg-gray-100 text-gray-800 focus:outline-none w-full ${errors.email ? 'border-red-500 border-2' : ''
                  }`}
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email address',
                  },
                })}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 absolute">{errors.email.message}</p>
              )}
            </div>
            <button
              type="submit"
              className={`flex items-center cursor-pointer group px-4 py-2 rounded-r-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Sign Up'}
              <span className="ml-2">
                <img
                  src={Arrow}
                  alt="arrow-icon"
                  className="w-6 h-6 group-hover:rotate-90 duration-300"
                />
              </span>
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center h-[60vh] w-full lg:w-1/2 overflow-hidden">
          <div className="w-48 h-48" style={{ perspective: '800px' }}>
            <div
              className="w-full h-full relative animate-[rotate_20s_infinite_linear]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {['Certification', 'Compliance', 'Funding', 'Registration', 'Loan Services', 'Business Growth'].map(
                (text, index) => (
                  <div
                    key={index}
                    className="absolute w-48 h-48 flex justify-center items-center bg-white/10 text-white font-bold text-lg border-2 border-white/30 shadow-[0_0_15px_rgba(0,102,255,0.6)] text-center"
                    style={{
                      transform:
                        index === 0 ? 'translateZ(100px)' :
                          index === 1 ? 'rotateY(180deg) translateZ(100px)' :
                            index === 2 ? 'rotateY(90deg) translateZ(100px)' :
                              index === 3 ? 'rotateY(-90deg) translateZ(100px)' :
                                index === 4 ? 'rotateX(90deg) translateZ(100px)' :
                                  'rotateX(-90deg) translateZ(100px)',
                    }}
                  >
                    {text}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;