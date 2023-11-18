import React from "react"
import Image from "next/image"

import Icon from "../../../public/Icon3.png"

export default function AboutSelfInfo() {
  return (
    <div className="rounded-3xl bg-gradient-to-tl from-[#3f3f3f] to-[#141414]  h-full px-8">
      <Image height={30} width={30} src={Icon.src} alt="Star" />
      <h1 className="mt-8">Alvaro Teran Rodriguez</h1>
      <p>
        I am a San francisco-based product designer with a focus on web design, illustration, a
        visual development. I have a diverse range of experience having worked across various
        fields and industries.
      </p>
    </div>
  )
}
