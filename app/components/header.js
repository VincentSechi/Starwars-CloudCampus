import Image from "next/image"
import Link from "next/link"
import image from '../../public/index'

const navList=[
    {
        name:"Accueil",
        href:"/"
    },
    {
        name:"Prochaine Mission",
        href:"/"
    }
]

export default function Header() {
  return (
    <header className="flex items-center gap-5 w-full h-[50px] border-solid border-white border-2">
        <Link href={"/"} className="relative">
            <Image className="brightness-0 invert max-h-[50px] object-cover" src={image.SpaceX} alt={"globe-icon"} width={200} height={50}/>
        </Link>
        <nav>
            <ul className="flex gap-5">
                {navList && navList.map((item, index) => {
                    return(
                        <li key={index}>
                            <Link className="text-white uppercase font-bold hover:text-[#ffd530] transition-all duration-300" href={item.href}>{item.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </header>
  )
}
