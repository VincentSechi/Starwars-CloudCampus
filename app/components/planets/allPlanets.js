'use client'
import Image from "next/image"
import images from '../../../public/index'

import SearchBar from "../searchBar"

import { useState } from "react"

export default function AllPlanets({data, onClick}) {

    const [filterOpen, setFilterOpen] = useState(false)
    const [populationFilter, setPopulationFilter] = useState("")
    const [filterTitle, setFilterTitle] = useState("Par population")
    const [filterActive, setFilterActive] = useState(false)
    const [searchField, setSearchField] = useState("")
    const [planetCount, setPlanetCount] = useState(60)
    const [activeSearch, setActiveSearch] = useState(false)

    const handlePlanet = (planet) => {
        onClick(planet)
    }

    const handleFilter = (filter, e, data) => {
        setPopulationFilter(filter);
        setFilterTitle(e.target.innerText)
        setFilterActive(!filterActive)
        
        let population;
        if(filter == 1){
            population = data.filter((pop) => pop.population < 100000)
        }else if(filter == 2){
            population = data.filter((pop) => pop.population > 100000 && pop.population < 1000000)
        }else if(filter == 3){
            population = data.filter((pop) => pop.population > 1000000)
        }else{
            setFilterActive(!filterActive)
            population = data
        }
        setPlanetCount(population.length)
    }

    const handleSearch = (e) => {
        let tmp = [];
        
        data.map((planet) => {
                if(planet.name.includes(e.target.value)){
                    tmp.push(planet)
                }
        })
        if(e.target.value.length > 0){
            setActiveSearch(true)
            setSearchField(tmp)
        }else{
            setActiveSearch(false)
        }
            setPlanetCount(tmp.length)
    }

  return (
    <div className="flex flex-col p-5 border-2 border-white  max-w-[500px] w-full">
        <h1 className="text-white uppercase font-extrabold">
            planètes
        </h1>
        <div 
            onClick={() => setFilterOpen(!filterOpen)}
            className={`px-5 py-2 ${filterOpen ? "bg-white text-black" : "bg-black text-white" } flex flex-col border-2 border-white mt-5 pb-2 mb-5 w-fit cursor-pointer relative`}
        >
            <div className="flex justify-between w-[203px] items-center">
                <span className="font-extrabold uppercase">
                    {filterTitle}
                </span>
                <Image src={images.Chevron} alt={"chevron-icon"} width={10} height={10} className={`transition-all duration-300 brightness-0 ${filterOpen ? "rotate-0" : "rotate-180 invert"}`} />
            </div>
            <div className={`${filterOpen ? "max-h-[200px]" : "max-h-0"} absolute bg-white transition-all duration-300 w-[247px] flex flex-col left-[-2px] overflow-hidden border-t-2 border-black top-[42px]`}>
                <span onClick={(e) => handleFilter(0, e, data)} className="hover:bg-gray-500 transition-all duration-300 px-5 py-1 font-bold">Toutes les planètes</span>
                <span onClick={(e) => handleFilter(1, e, data)} className="hover:bg-gray-500 transition-all duration-300 px-5 py-1 font-bold">0 à 100.000</span>
                <span onClick={(e) => handleFilter(2, e, data)} className="hover:bg-gray-500 transition-all duration-300 px-5 py-1 font-bold">100.000 à 1.000.000</span>
                <span onClick={(e) => handleFilter(3, e, data)} className="hover:bg-gray-500 transition-all duration-300 px-5 py-1 font-bold">+ de 1.000.000</span>
            </div>
        </div>
        <SearchBar onChange={handleSearch}/>
        <div className="flex flex-col max-h-[400px] overflow-y-auto mt-5">
            <ul className="flex flex-col">
                <li className="flex justify-between bg-[#ffd530] text-white px-2">
                    <span className="font-extrabold">
                        Nom
                    </span>
                    <span className="font-extrabold">
                        Terrain
                    </span>
                </li>
                {!activeSearch && data && data.map((planet, index) => {
                    if(populationFilter === 1){
                        if(planet.population < 100000){
                            return(
                                <li
                                    className="flex justify-between hover:bg-[#ffd530] py-5 text-white px-2 transition-all duration-300 border-t-2 border-white cursor-pointer"
                                    onClick={() => handlePlanet(planet)}
                                    key={index}
                                >
                                    <span>
                                        {planet.name}
                                    </span>
                                    <span>
                                        {planet.terrain}
                                    </span>
                                </li>
                            )
                        }
                    }else if(populationFilter === 2){
                        if(planet.population >= 100000 && planet.population < 1000000){
                            return(
                                <li
                                    className="flex justify-between hover:bg-[#ffd530] py-5 text-white px-2 transition-all duration-300 border-t-2 border-white cursor-pointer"
                                    onClick={() => handlePlanet(planet)}
                                    key={index}
                                >
                                    <span>
                                        {planet.name}
                                    </span>
                                    <span>
                                        {planet.terrain}
                                    </span>
                                </li>
                            )
                        }
                    }else if(populationFilter === 3){
                        if(planet.population >= 1000000){
                            return(
                                <li
                                    className="flex justify-between hover:bg-[#ffd530] py-5 text-white px-2 transition-all duration-300 border-t-2 border-white cursor-pointer"
                                    onClick={() => handlePlanet(planet)}
                                    key={index}
                                >
                                    <span>
                                        {planet.name}
                                    </span>
                                    <span>
                                        {planet.terrain}
                                    </span>
                                </li>
                            )
                        }
                    }else{
                        return(
                            <li
                                className="flex justify-between hover:bg-[#ffd530] py-5 text-white px-2 transition-all duration-300 border-t-2 border-white cursor-pointer"
                                onClick={() => handlePlanet(planet)}
                                key={index}
                            >
                                <span>
                                    {planet.name}
                                </span>
                                <span>
                                    {planet.terrain}
                                </span>
                            </li>
                        )
                    }
                })}
                {activeSearch && searchField && searchField.map((planet, index) => {
                    return(
                        <li
                            className="flex justify-between hover:bg-[#ffd530] py-5 text-white px-2 transition-all duration-300 border-t-2 border-white cursor-pointer"
                            onClick={() => handlePlanet(planet)}
                            key={index}
                        >
                            <span>
                                {planet.name}
                            </span>
                            <span>
                                {planet.terrain}
                            </span>
                        </li>
                    )
                })}
            </ul>
        </div>
            <span className="text-white mt-5 flex gap-2">
                <Image src={images.Globe} alt={"icon"} width={20} height={20} className="brightness-0 invert" />
                {planetCount} planètes trouvées
            </span>
    </div>
  )
}
