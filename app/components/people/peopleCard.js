export default function PeopleCard({people, films, planets, onClick}) {

    const handleFilms = (filmsHero) => {
        let tmp = [];
        films.map((film, index) => {
            if(film.url === filmsHero[index])
            tmp.push(film.title);
        })
        return tmp
    }

    const handlePlanet = (planetHero) => {
        let planetHome;
        planets.map((planet) => {
            if(planet.url === planetHero){
                planetHome = planet.name
            }
        })
        return planetHome
    }
    const handleClick = (people,films, planets) => {
        onClick(people,films, planets)
    }

    const planet = handlePlanet(people.homeworld)
    const filmsArray = handleFilms(people.films)

  return (
    <div className='flex flex-col min-w-[20%] text-white border-2 border-white p-5'>
        <h2 className='font-bold text-lg text-[#ffd530]'>
            {people.name}
        </h2>
        <span className='text-white ml-2 italic text-sm'>{planet}</span>
        <h3 className='underline mt-4'>
            Films :
        </h3>
        <div className='flex flex-col items-center mt-5 flex-1'>
            {filmsArray.map((film , index) =>{
                return(
                    <span key={index}>{film}</span>
                )
            })}
        </div>
        <div    
            onClick={() => handleClick(people,films, planets)}
            className="max-w-[150px] text-center my-5 mx-auto cursor-pointer px-5 py-2 bg-black w-fit border-2 font-bold border-white uppercase text-white hover:text-black hover:bg-white duration-300 transition-all">
            plus d&resquo;info
        </div>
    </div>
  )
}
