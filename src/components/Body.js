import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>,
        },
        {
            path:"/browse",
            element:<Browse/>,
        }
    ])

   
  return (
    <div className='overflow-x-scroll no-scrollbar w-screen'>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body