'use client'
import { useState } from 'react'
import AllPlanets from './allPlanets'
import SinglePlanet from './singlePlanet'
export default function PlanetsFilter({data}) {

const [showPlanet, setShowPlanet] = useState("")

const handleDisplayPlanet = (planet) => {
    setShowPlanet(planet)
}

  return (
    <div className='w-full flex gap-10'>
        <AllPlanets data={data} onClick={(planet) => handleDisplayPlanet(planet)}/>
        <SinglePlanet planet={showPlanet}/>
    </div>
  )
}
