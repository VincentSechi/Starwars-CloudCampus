import PlanetsFilter from "../components/planets/planetsFilter";

async function getPlanets(){
    let tmp = [];
    const response = await fetch(`https://swapi.dev/api/planets/`);
    const data = await response.json()

    for(let i = 1; i <= data.count; i++){
        const planetPage = await fetch(`https://swapi.dev/api/planets/${i}`);
        const dataPage = await planetPage.json()
        tmp.push(dataPage)
    }
    if(!data){
      return "fail to fetch data"
    }
    return tmp
  }

async function Page() {

    const planets = await getPlanets()

  return (
    <div className="flex gap-20 p-10 w-full">
        <PlanetsFilter data={planets}/>
    </div>
  )
}
export default Page;