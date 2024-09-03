import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaLink } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
          

          {/* Navigation Links */}
          <div className={`lg:flex space-x-5 `}>
            <a className='text-neutral-300 text-lg hover:text-white hover:text-xl transition-all duration-300' href='#About'>
              About
            </a>
            <a className='text-neutral-300 text-lg hover:text-white hover:text-xl transition-all duration-300' href='#Projects'>
              Projects
            </a>
            <a className='text-neutral-300 text-lg hover:text-white hover:text-xl transition-all duration-300' href='#Contact'>
              Contact
            </a>
          </div>
        </div>

        {/* Social Icons / Links Icon */}
        <div className='m-8 flex items-center justify-center gap-4 text-2xl lg:flex'>
          {/* On large screens, show social icons */}
          <div className='hidden lg:flex gap-4'>
            <FaLinkedin className='hover:cursor-not-allowed' />
            <a href='https://github.com/ilyasse13' target='_blank' rel='noopener noreferrer'>
              <FaGithub />
            </a>
            <FaInstagram className='hover:cursor-not-allowed' />
            <FaSquareXTwitter className='hover:cursor-not-allowed' />
          </div>

          {/* On small screens, show the Links icon */}
          <button onClick={toggleModal} className='lg:hidden text-neutral-300'>
            <FaLink />
          </button>
        </div>
      </nav>

      {/* Modal for Social Links */}
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h2 className='text-xl font-semibold mb-4'>Social Links</h2>
            <div className='flex flex-col gap-4'>
              <span  className='text-blue-600'>
                LinkedIn
              </span>
              <a href='https://github.com/ilyasse13' target='_blank' rel='noopener noreferrer' className='text-gray-800'>
                GitHub
              </a>
              <span  className='text-pink-600'>
                Instagram
              </span>
              <span  className='text-blue-500'>
                Twitter
              </span>
            </div>
            <button onClick={toggleModal} className='mt-4 bg-gray-800 text-white px-4 py-2 rounded'>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
