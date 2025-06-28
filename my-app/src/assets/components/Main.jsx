import React from 'react'
import Star from '../components/Illustation.svg'
import Header from './Header'


const Main = () => {
  return (
    <div className='gap-40 justify-center mt-10 flex bg-Neutral/Silver'>
        <div className='auto mt-20'>
          <p className='text-[51px] weight-[700]'>Lesson and insight <br/> <span className='text-green-600'>from 8 years</span></p>
          <p>Where to grow your business as a photographer: site or social media?</p>
          <button className='w-[93px] h-[48px] bg-green-600 mt-100px'>Register</button>
        </div>
        <div>
            <img className='w-[500px] h-[600px]' src={Star} alt=""/>,
        </div>
    </div>

  )
}

export default Main