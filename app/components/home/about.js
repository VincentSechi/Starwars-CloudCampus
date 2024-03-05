import Button from "../button"
import image from "../../../public/index"
export default function About() {
  return (
    <div className={`flex flex-col gap-10 p-10 border-2 border-white`}>
        <h1 className="uppercase text-[#ffd530] font-bold">
            about the universe
        </h1>
        <p className="text-white">Bienvenue sur <span className="text-[#ffd530] uppercase">about the universe</span> pour explorer nos dernières découvertes !</p>
        <Button title={"découvrir"} color={"black"} link={"/"} />
    </div>
  )
}
