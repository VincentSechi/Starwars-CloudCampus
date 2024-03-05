import React from 'react'

export default function PlanetResume({planet, onClick}) {
  return (
    <li
    className="flex justify-between hover:bg-[#ffd530] py-5 text-white px-2 transition-all duration-300 border-t-2 border-white cursor-pointer"
    onClick={() => onClick}
>        <span>
            {planet.name}
        </span>
        <span>
            {planet.terrain}
        </span>
</li>
  )
}
