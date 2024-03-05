import Image from "next/image";
import images from '../../../public/index'

export default function SinglePlanet({planet}) {

    let planetInfo = [
        {
            name:"Diamètre",
            data: (planet.diameter + " km²"),
            image: images.Diameter
        },
        {
            name:"Surface d'eau",
            data: (planet.surface_water + " km³"),
            image: images.Droplet
        },
        {
            name:"Gravité",
            data: (planet.gravity + " Newton"),
            image: images.Gravity
        },
        {
            name:"Période de Rotation",
            data: (planet.rotation_period + " jours"),
            image: images.Rotate
        }
    ]
  return (
    <div className="w-full max-w-[800px] border-2 border-white p-5 h-min">
        {!planet && <h3 className="text-[#ffd530] italic">
            Séléctionner une planète à afficher
        </h3>}
        {planet && <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <h3 className="text-[#ffd530] font-bold uppercase">{planet.name}</h3>
                <span className="text-white">{planet.population} habitants</span>
            </div>
            <div className="flex flex-wrap justify-around my-10 gap-y-10 flex-1 items-center">
                {planetInfo && planetInfo.map((info, index) => {
                    return(
                        <div className="flex gap-4 min-w-[35%]" key={index}>
                            <Image src={info.image} alt={"icon"} width={50} height={50} className="brightness-0 invert" />
                            <div className="flex flex-col">
                                <span className="text-[#ffd530] font-bold">{info.name}</span>
                                <span className="text-white">{info.data}</span>
                            </div>
                        </div>
                    )
                })}
                

            </div>

        </div>}
    </div>
  )
}
