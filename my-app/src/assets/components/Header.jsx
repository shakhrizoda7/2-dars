import React from 'react'
import Logo from '../assets/Logo.svg'


const Header = () => {
  return (
    <div className='flex justify-around items-center mr-10 ml-10'></div>,
    <img className='w-[100px] h-[80px] left-[50px]' src={Logo} alt="" />,
    <ul className='flex gap-10'>
     <li><a href="#">Home</a></li>
     <li><a href="#">Features</a></li>
     <li><a href="#">Community</a></li>
     <li><a href="#">Blog</a></li>
     <li><a href="#">Pricing</a></li>
     <li><a href="#">Register Now</a></li>
    </ul>
  )
}

export default Header