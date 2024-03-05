import Image from "next/image"
import Link from "next/link"

import image from '../../public/index'

const sidebarList = [
    {
        image: image.Globe,
        name: "planètes",
        href: "/planets"
    },
    {
        image: image.Rocket,
        name: "Véhicules",
        href: "/vehicles"
    },
    {
        image: image.Reddit,
        name: "personnes",
        href: "/people"
    },
]

export default function Sidebar() {
  return (
    <div className="w-full max-w-[150px] border-l-2 border-r-2 border-white min-h-[100vh]">
        <ul className="flex flex-col gap-5 mt-[20px]">
            {sidebarList && sidebarList.map((item, index) => {
                return(
                    <li key={index} className="flex flex-col max-w-[80px] mx-auto px-1">
                        <Link href={item.href} className="flex flex-col gap-2 items-center group">
                            <Image src={item.image} alt={`${item.name}-icon`} width={50} height={50} className="brightness-0 invert"/>
                            <span className="text-white uppercase text-bold group-hover:text-[#ffd530] transition-all duration-300">{item.name}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
