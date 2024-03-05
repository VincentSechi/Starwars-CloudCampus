import AllVehicles from "../components/vehicles/allVehicles";

async function getVehicles(){
  let tmp=[]

  const response = await fetch(`https://swapi.dev/api/vehicles/`);
  const data = await response.json()

  for(let i = 1; i < data.count; i++){
    const res = await fetch(`https://swapi.dev/api/vehicles/${i}`);
    const data = await res.json();
    if(data.length > 1) tmp.push(data)
  }

  if(!data){
    return "fail to fetch data"
  }
  return tmp
}


async function Page() {

  const vehicles = await getVehicles();

  return (
    <div className='w-full h-full p-10'>
        <div className='h-full w-full flex flex-col gap-5'>
            <h1 className='w-fit mx-auto text-white uppercase text-5xl font-extrabold mt-5 mb-10'>
                vaisseaux
            </h1>
            <AllVehicles vehicles={vehicles}/>
        </div>
    </div>
  )
}

export default Page
