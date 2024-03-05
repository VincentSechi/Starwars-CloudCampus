'use client'

import SingleVehicle from './singleVehicle'
import VehicleCard from './vehicleCard'

import { useState, useEffect } from 'react'
export default function AllVehicles({vehicles}) {

  let tmp = [];
  let tmpObject = [];
  
  useEffect(() => {
    window.addEventListener('keydown', e => {
      if(e.key === "Escape"){
        setDisplayVehicle(false)
      }
    })
  }, [])
  

    const [showVehicle, setShowVehicle] = useState("")
    const [displayVehicle, setDisplayVehicle] = useState(false)

    const [pagination, setPagination] = useState(0)

    const handleShowVehicle = (vehicle) => {
      setShowVehicle(vehicle)
      setDisplayVehicle(!displayVehicle)
    }

    const handleDisplayVehicle = () => {
      setDisplayVehicle(!displayVehicle)
    }

    vehicles && vehicles.map((vehicle) => {
      tmpObject.push(vehicle)
      if(tmpObject.length >= 6){
        tmp.push(tmpObject);
        tmpObject = [];
      } 
  })


  return (
    <div className='relative h-full w-full'>
        <div className='flex flex-wrap gap-x-20 gap-y-10 justify-center'>
            
            {tmp[pagination] && tmp[pagination].map((item, index) => {
              return(
                  <VehicleCard data={item} key={index} onClick={(item) => handleShowVehicle(item)}/>
              )
            })}

        </div>
        {displayVehicle && <SingleVehicle vehicle={showVehicle} onClick={handleDisplayVehicle}/>}
        <div className='mx-auto mt-5 w-fit text-white flex gap-2 items-center'>
          <span 
            className={`${pagination == 0 ? "bg-white text-black" : ""} border-2 border-white px-2 py-1 hover:text-black hover:bg-white transition-all duration-300 cursor-pointer`}
            onClick={(e) => setPagination(e.target.innerText)}
            >0</span>
            
          {tmp && tmp.map((value, index) => {
            if(index == 2) return
            return(
              <span 
                  key={index}
                  className={`${pagination == index+1 ? "bg-white text-black" : ""} border-2 border-white px-2 py-1 hover:text-black hover:bg-white transition-all duration-300 cursor-pointer`}
                  onClick={(e) => setPagination(e.target.innerText)}
              >{index+1}</span>
            )
          })}
        </div>
    </div>
  )
}
