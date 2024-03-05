import Image from 'next/image'
import images from '../../../public/index'

export default function SinglePeople({info, onClick}) {

    const people = info[0]
    const films = info[1]
    const planets = info[2]

    const handlePlanet = (planetHero) => {
        let planetHome;
        planets.map((planet) => {
            if(planet.url === planetHero){
                planetHome = planet.name
            }
        })
        return planetHome
    }

    const handleFilms = (filmsHero) => {
        let tmp = [];
        films.map((film, index) => {
            if(film.url === filmsHero[index])
            tmp.push(film.title);
        })
        return tmp
    }
    const planet = handlePlanet(people.homeworld)

    const charInfo = [
        {
            name: "Né(e) en ",
            data: people.birth_year,
            image: images.Cake
        },
        {
            name: "Né(e) sur ",
            data: planet,
            image: images.Home
        },
        {
            name: "Genre : ",
            data: people.gender,
            image: images.Gender
        },
        {
            name: "Taille : ",
            data: (people.height + " cm"),
            image: images.Ruler
        },
        {
            name: "Poids : ",
            data: (people.mass + " kg"),
            image: images.Weight
        },
        {
            name: "Couleur des yeux : ",
            data: people.eye_color,
            image: images.Eye
        },
    ]
    const filmsArray = handleFilms(people.films)
    

    const handleClick = () => {
        onClick()
    }

    return (
    <div className="absolute bg-[rgba(0,0,0,0.9)] border-2 border-white z-10 w-full max-w-[700px] mx-auto left-0 right-0 top-[118px] p-10 flex flex-col">
        <div className='flex justify-end p-4 gap-2 items-center cursor-pointer' onClick={() => handleClick()}>
            <span className='text-white font-bold uppercase'>fermer</span>
            <Image src={images.Close} alt={"icon"} width={20} height={20} className='brightness-0 invert'/>
        </div>
        <h2 className='text-[#ffd530] text-5xl uppercase text-center font-extrabold mt-10'>
            {people.name}
        </h2>
        <span className='text-white text-sm italic underline mt-10'>
            Caractéristiques :
        </span>
        <div className='flex flex-wrap justify-center my-10 gap-y-4'>
            {charInfo.map((info, index) => {
                return(
                    <div className='flex items-center min-w-[45%] gap-2' key={index}>
                        <Image src={info.image} alt={"icon"} width={40} height={40} className='brightness-0 invert' />
                        <div className='flex flex-col'>
                            <span className='text-[#ffd530] font-bold font-md'>{info.name}</span>
                            <span className='text-white capitalize'>{info.data}</span>
                        </div>
                    </div>
                )
            })}
        </div>
        <div>
            <h3 className='text-white text-sm italic underline mb-10'>
                A joué dans :
            </h3>
            <div className='flex flex-col gap-5'>
                {filmsArray.map((film, index) => {
                    return(
                        <div className='flex gap-2 items-center' key={index}>
                            <Image src={images.Film} alt={"icon"} width={30} height={30} className='brightness-0 invert' />
                            <p className='text-white text-lg font-bold'>{film}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
