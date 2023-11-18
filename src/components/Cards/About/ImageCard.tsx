import React from "react"
import Image from "next/image"

import Logo from "../../../public/Logo.png"

export default function ImageCard() {
  return (
    <div className="rounded-3xl bg-gradient-to-b from-[#3f3f3f] to-[#141414] flex justify-center p-7 h-full">
      <Image
        height={382}
        width={382}
        src={Logo.src}
        alt="Alvaro Teran Image"
        className="rounded-3xl"
      />
    </div>
  )
}
