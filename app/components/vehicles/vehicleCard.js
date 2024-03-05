import Image from "next/image";
import images from '../../../public/index'
export default function VehicleCard({data, onClick}) {
    
    const handleVehicle = (vehicle) => {
        onClick(vehicle)
    }

    const statsArray = [
        {
            image: images.Gauge,
            name: "Vitesse",
            data: data.max_atmosphering_speed ? (data.max_atmosphering_speed + " km/h") : "Non renseigné"
        },
        {
            image: images.Cubes,
            name: "Capacité de Stockage",
            data: data.cargo_capacity ? (data.cargo_capacity !== "none" ? (data.cargo_capacity + " m³") : data.cargo_capacity) : "Non renseigné"
        },
        {
            image: images.Ruler,
            name: "Taille",
            data: data.length ? (data.length + " mètres") : "Non renseigné"
        },
        {
            image: images.Price,
            name: "Prix",
            data: data.cost_in_credits ? (data.cost_in_credits === "unknown" ? data.cost_in_credits : data.cost_in_credits + " crédits républicains") : "Non renseigné"
        },
    ]
  return (
    <div className='flex flex-col justify-center min-h-[400px] min-w-[35%] max-w-[300px] border-2 border-white py-2 px-4'>
        <h2 className='text-white text-lg font-bold text-center'>
            {data.name}
        </h2>
        <span className='text-white italic text-sm text-center'>
            Modèle : {data.model}
        </span>
        <div className="flex flex-col mt-4 text-white">
            <span className="italic underline">Caractéristiques :</span>
            <div className="flex flex-wrap mt-6 gap-x-1 gap-y-4 flex-1">
                {statsArray && statsArray.map((stat, index) => {
                    return(
                        <div className="flex gap-2 min-w-[40%] items-center flex-1" key={index}>
                            <Image src={stat.image} alt="icon" width={30} height={"auto"} className="brightness-0 invert"/>
                            <div className="flex flex-col">
                                <h3 className="text-[#ffd530] font-bold">
                                    {stat.name}
                                </h3>
                                <span>
                                    {stat.data}
                                </span>
                            </div>
                        </div>
                    )
                })}
                
                <div
                    onClick={() => handleVehicle(data)}
                    className="flex-1 max-w-[150px] text-center my-5 mx-auto cursor-pointer px-5 py-2 bg-black w-fit border-2 font-bold border-white uppercase text-white hover:text-black hover:bg-white duration-300 transition-all">
                    voir plus
                </div>
            </div>
        </div>
    </div>
  )
}
