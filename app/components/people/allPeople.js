'use client'
import PeopleCard from "./peopleCard"
import { useState, useEffect } from "react"
import SinglePeople from "./singlePeople";

export default function AllPeople({peoples, films, planets}) {

useEffect(() => {
    window.addEventListener('keydown', e => {
    if(e.key === "Escape"){
        setOpenInfo(false)
    }
    })
}, [])

const [openInfo, setOpenInfo] = useState(false);
const [singleCardInfo, setSingleCardInfo] = useState([])

const handlePeople = (people,films, planets) => {
    let tmp = [];
    tmp.push(people, films, planets)
    setSingleCardInfo(tmp);
    setOpenInfo(!openInfo)
}

const handleOpen = () => {
    setOpenInfo(!openInfo)
}



  return (
    <div className="flex flex-col p-10 relative">
        <h1 className="w-fit mx-auto text-white uppercase text-5xl font-extrabold mt-5 mb-10">
            Personnages de l&rsquo;univers
        </h1>
        <div className="flex flex-wrap justify-center gap-5">
            {peoples.results && peoples.results.map((people, index) => {
                return(
                    <PeopleCard people={people} films={films} planets={planets} key={index} onClick={() => handlePeople(people, films, planets)}/>
                )
            })}
        </div>
        {openInfo && <SinglePeople info={singleCardInfo} onClick={() => handleOpen()}/>}
    </div>
  )
}
