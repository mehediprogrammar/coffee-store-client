import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Add_Coffee from './Components/Add_Coffee/Add_Coffee'
import Update_Coffee from './Components/Update_Coffee/Update_Coffee'
import './index.css'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path:'/addCoffee',
    element:<Add_Coffee></Add_Coffee>
  },
  {
    path:'/updateCoffee/:id',
    element:<Update_Coffee></Update_Coffee>,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`) 

  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
