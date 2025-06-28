import React from 'react'
import Clients from '../assets/Clients.svg'
import Frame from '../assets/Frame 4.svg'
import Unlock from '..assets/Unlock.svg'


const Image = () => {
  return (
    <div>
        <img className='w-[1300px] ml-[100px] mt-[50px]' src={Clients} alt="img"/>
        <div className='text-[30px] font-medium justify-center flex text-center mt-[40px]'>Manage your entire community <br/> in a single system</div>
        <img className='w-[1480px] mt-[25px] ml-[50px]' src={Frame} alt="img" />
        <img className='w-[1600px] mt-[80px] ml-[50px]' src={Unlock} alt="img" />className
    </div>
  )
}

export default Image