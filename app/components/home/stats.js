import images from '../../../public/index'
import Image from 'next/image';
import Button from '../button';

export default function Stats({planets, vehicles, people}) {

    const date = "02 Mars 2023";
    const data = [
        {
            image: images.Users,
            title: "Nombre d'êtres vivants recensés",
            number: people.count
        },
        {
            image: images.Ship,
            title: "Nombre de véhicules recensés",
            number: vehicles.count
        },
        {
            image: images.Globe,
            title: "Nombre de planètes recensées",
            number: planets.count
        },
        {
            image: images.Clock,
            title: "Prochaine Mission",
            number: date
        }
    ]
  return (
    <div className="flex flex-col gap-10 p-10 border-2 border-white">
        <h2 className="uppercase text-[#ffd530] font-bold">
            les chiffres
        </h2>
        <p className="text-white">Nous nous efforçons à archiver toutes nos trouvailles pour vous les partager</p>
        <ul className='w-full flex gap-10'>
            {data && data.map((item, index) => {
                return(
                    <li key={index} className='flex gap-2'>
                        <Image src={item.image} alt="icon" width={50} height={50} className='brightness-0 invert'/>
                        <div className='flex flex-col'>
                            <h3 className='text-[#ffd530] font-bold'>
                                {item.title}
                            </h3>
                            <span className='text-white italic'>
                                {item.number}
                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
        <Button margin={"ml-auto"} title={"Prochaine mission"} color="black" link={"/"} />
    </div>
  )
}
