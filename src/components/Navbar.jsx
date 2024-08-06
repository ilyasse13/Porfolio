import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
          <nav class="flex space-x-7">
          <a className="text-neutral-300 text-lg hover:text-white hover:text-xl transition-all duration-300" href="#About">About</a>
  <a className="text-neutral-300 text-lg hover:text-white hover:text-xl transition-all duration-300" href="#Projects">Projects</a>
  <a className="text-neutral-300 text-lg hover:text-white hover:text-xl transition-all duration-300" href="#Contact">Contact</a>
          </nav>

      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin className='hover:cursor-not-allowed' />
        <a href="https://github.com/ilyasse13" target='_blank'><FaGithub /></a>
        <FaInstagram className='hover:cursor-not-allowed'/>
        <FaSquareXTwitter className='hover:cursor-not-allowed' />
      </div>
    </nav>
  )
}

export default Navbar