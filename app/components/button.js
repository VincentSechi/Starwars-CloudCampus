import React from 'react'
import Link from 'next/link'

export default function Button({title, color, link, margin}) {
  return (
    <Link href={link} className={`px-5 py-2 bg-${color} w-fit border-2 font-bold border-white uppercase text-white hover:text-black hover:bg-white duration-300 transition-all ${margin ? margin : ""}`}>
        {title}
    </Link>
  )
}
