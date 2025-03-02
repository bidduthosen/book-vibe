import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Roots from './components/Roots/Roots.jsx'
import Home from './components/Home/Home.jsx'
import BLog from './components/Blog/BLog.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Roots></Roots>,
    errorElement: <p>Error page</p>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <BLog></BLog>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
