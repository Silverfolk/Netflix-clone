import React from 'react';
import Login from './Login';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Landing from './Landing';
import PrivateRoutes from '../Utils/PrivateRoute'
const Main = () => {
    const approuter=createBrowserRouter([
        {
          path:'/auth',
          element:<Login/>
        },
        
        {
          element: <PrivateRoutes />,
      children: [
        { path: '/', element: <Landing /> },
       
      ]
        }
    ]);
  return (
    <div>
    <RouterProvider router={approuter}/>
   </div>
    
  )
}

export default Main
