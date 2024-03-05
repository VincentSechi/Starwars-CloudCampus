'use client'
import Image from "next/image";
import images from '../../../public/index'

export default function SingleVehicle({vehicle, onClick}) {
    const allInfos = [
        {   
            image: images.Industry,
            title: "Manufacturer :",
            data: vehicle.manufacturer
        },
        {   
            image: images.Price,
            title: "Prix :",
            data: vehicle.cost_in_credits ? (vehicle.cost_in_credits !== "unknown" ? (vehicle.cost_in_credits + " crédits républicains") : vehicle.cost_in_credits) : ""
        },
        {   
            image: images.Ruler,
            title: "Taille :",
            data: vehicle.length ? (vehicle.length + " mètres") : ""
        },
        {   
            image: images.Gauge,
            title: "Vitesse max :",
            data: vehicle.max_atmosphering_speed ? (vehicle.max_atmosphering_speed + " km/h") : "Inconnu"
        },
        {   
            image: images.Group,
            title: "Passagers max :",
            data: vehicle.passengers ? vehicle.passengers : ""
        },
        {   
            image: images.Cubes,
            title: "Stockage max :",
            data: vehicle.cargo_capacity ? (vehicle.cargo_capacity !== "none" ? (vehicle.cargo_capacity + " m³") : vehicle.cargo_capacity) : ""
        },
        // {   
        //     image: images.Pilot,
        //     title: "Pilots :",
        //     data: vehicle.pilots ? (vehicle.pilots) : ""
        // },
    ]

    const handleDisplay = (e) => {
        onClick(e)
    }


  return (
    <div className="absolute z-10 w-full h-full bg-[rgba(0,0,0,0.9)] top-0">
        <div className="max-w-[800px] mx-auto w-full flex flex-col border-2 border-white">
            <div
                className="ml-auto w-fit px-8 py-4 text-white flex gap-2 items-center cursor-pointer"
                onClick={handleDisplay} 
            >
                <span className="uppercase font-md font-bold">
                    fermer
                </span>
                <Image src={images.Close} alt={"icon"} width={20} height={20} className="brightness-0 invert" />
            </div>
            <div className="text-white w-fit mx-auto leading-[14px]">
                <div className="flex flex-col text-center">
                    <h3 className="text-lg font-extrabold">
                        {vehicle.name}
                    </h3>
                    <span className="italic text-sm">
                        {vehicle.model}
                    </span>
                </div>
            </div>
            <div className="flex flex-col text-white mt-10">
                <span className="uppercase text-center text-xl font-bold mb-10">informations</span>
                <div className="flex flex-wrap px-4 justify-center gap-y-[20px] mb-20">
                    {allInfos && allInfos.map((info, index) => {
                        return(
                            <div className="flex gap-2 min-w-[35%]" key={index}>
                                <Image src={info.image} alt={"icon"} width={40} height={40} className="brightness-0 invert" />
                                <div className="flex flex-col">
                                    <span className="font-bold text-[#ffd530]">{info.title}</span>
                                    <span>{info.data}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    </div>
  )
}
