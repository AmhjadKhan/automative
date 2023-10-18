
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Banner from './Apphelp/banner'
import Allcarsmaincard from './carsCard/Allcarsmaincard';

function App() {
   const allCars = useLoaderData();
  //  console.log(allCars)

  return (
    <>
      <Banner />
      <div className='mt-6'>
        <h1 className='text-4xl font-bold text-red-300'>All Cars:{allCars.length}</h1>
        <div className='grid md:grid-cols-3 h-11 gap-6'>
          {
            allCars.map(allCar =><Allcarsmaincard key={allCar._id} allCar={allCar} />)
          }
        </div>
      </div>
    </>
  )
}

export default App
