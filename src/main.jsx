import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Exchange from './components/Exchange.jsx'
import Testimonials from './components/Testimonials.jsx'
import Affiliate from './components/Affiliate.jsx'
import Contact from './components/contact.jsx'
const router = createBrowserRouter(
  [
   {
    path: '/',
    element: <MainLayout/>,
    children:[
      {
        path: '/',
        element: <Exchange/>,
       },
       {
        path: '/testimonials',
        element: <Testimonials/>,
        loader: () => fetch('/testimonials.json')
       },
       {
        path: '/affiliate',
        element: <Affiliate/>,
       },
       {
        path: '/contact',
        element: <Contact/>,
       },
    ]
   },
   
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
