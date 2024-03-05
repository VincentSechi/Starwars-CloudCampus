import AllPeople from "../components/people/allPeople";

async function getPeople(){
    const response = await fetch (`https://swapi.dev/api/people/`)
    const data = await response.json();

    if(!data) return "fail to fetch data"
    return data;
}

async function getFilms(){
    let tmp = [];
    const response = await fetch (`https://swapi.dev/api/films/`)
    const data = await response.json();

    for(let i = 1; i < data.count; i++){
        const response =  await fetch (`https://swapi.dev/api/films/${i}`)
        const data = await response.json()
        tmp.push(data)
    }

    if(!data) return "fail to fetch data"
    return tmp;
}

async function getPlanets(){
    let tmp = [];
    const response = await fetch (`https://swapi.dev/api/planets/`)
    const data = await response.json();

    for(let i = 1; i < data.count; i++){
        const response =  await fetch (`https://swapi.dev/api/planets/${i}`)
        const data = await response.json()
        tmp.push(data)
    }

    if(!data) return "fail to fetch data"
    return tmp;
}

async function Page() {
    const peoples = await getPeople();
    const films = await getFilms();
    const planets = await getPlanets();
    return (
        <AllPeople peoples={peoples} films={films} planets={planets}/>
    )
}
export default Page;