import Image from "next/image"
import images from '../../public/index'
export default function SearchBar({onChange}) {

  const handleChange = (e) => {
    onChange(e)
  }

  return (
    <div className="flex justify-between w-full bg-black border-2 border-white">
        <input 
        onChange={handleChange}
        className="text-white text-xs outline-none bg-transparent w-full h-full px-5 py-1" placeholder="Faites votre recherche..." />
        <Image src={images.Glass} alt="glass-icon" width={15} height={15} className="brighntess-0 invert mr-5" />
    </div>
  )
}
