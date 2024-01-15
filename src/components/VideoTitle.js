import React from 'react'
import { IoMdPlay } from "react-icons/io";
import { FiInfo } from "react-icons/fi";

const VideoTitle = ({title, overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 text-sm w-1/4'>{overview.substring(0,100)+'...'}</p>
        <div className='flex'>
            <button className='bg-white text-black p-3 px-12 text-xl rounded-md hover:opacity-80 flex items-center justify-center'><IoMdPlay className='mr-1'/>Play</button>
            <button className='mx-2 bg-gray-500 text-black p-3 px-8 text-xl bg-opacity-80 rounded-md hover:opacity-80 flex items-center justify-center'><FiInfo className='mr-1'/>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle