import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview.substring(0,100)+'...'}</p>
        <div className=''>
            <button className='bg-white text-black p-4 px-12 text-xl rounded-md hover:opacity-80'>▶ Play</button>
            <button className='mx-2 bg-gray-500 text-black p-4 px-12 text-xl bg-opacity-50 rounded-md'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle