
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Coffee from './Components/Coffee/Coffee'

function App() {

  const loaderCoffees = useLoaderData()
  const [coffees, setCoffee] = useState(loaderCoffees)

  return (
    <div className='bg-[#F4F3F0] '>
     <h1 className='text-center text-6xl text-yellow-600' >coffee store {coffees.length} </h1>
     <div className=' p-24 max-w[1200px] mx-w-auto grid  md:grid-cols-1 lg:grid-cols-2  gap-6 ' >
      {
        coffees.map(coffee => <Coffee
           key={coffee._id} 
          coffee={coffee}
          coffees={coffees}
          setCoffee={setCoffee}
          ></Coffee>)
      }
     </div>
    </div>
  )
}

export default App
