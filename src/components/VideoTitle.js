import React from 'react'
import { IoMdPlay } from "react-icons/io";
import { FiInfo } from "react-icons/fi";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] p-6 md:px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-xl md:text-4xl font-bold mt-10'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-md w-1/4'>{overview.substring(0,100)+'...'}</p>
        <div className='flex'>
            <button className='bg-white text-black p-2 px-4 md:p-3 md:px-12 text-md md:text-xl rounded-md hover:opacity-80 flex items-center justify-center'><IoMdPlay className='mr-1'/>Play</button>
            <button className='hidden mx-2 bg-gray-500 text-black p-2 md:p-3 md:px-8 text-md md:text-xl bg-opacity-80 rounded-md hover:opacity-80 md:flex items-center justify-center'><FiInfo className='mr-1'/>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle