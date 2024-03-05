import Header from './components/header'
import Sidebar from './components/sidebar';
import About from './components/home/about';
import Stats from './components/home/stats';

async function getData(param){
  const response = await fetch(`https://swapi.dev/api/${param}/`);
  const data = await response.json()
  if(!data){
    return "fail to fetch data"
  }
  return data
}

export default async function Page() {
  const planetsData = await getData("planets")
  const vehiclesData = await getData("vehicles")
  const peopleData = await getData("people")
  return (
    <main className='flex flex-col w-full'>
      <div className='w-full flex flex-col gap-20 p-[40px]'>
          <About />
          <Stats planets={planetsData} vehicles={vehiclesData} people={peopleData} />
      </div>
    </main>
  )
}
