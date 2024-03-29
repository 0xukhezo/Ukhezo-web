import React from "react"
import Image from "next/image"

import Icon from "../../../../public/Icon3.png"

export default function SelfInfoCard() {
  return (
    <div className="rounded-3xl bg-gradient-to-bl from-[#3f3f3f] to-[#141414] h-full px-8 pb-8">
      <Image height={32} width={32} src={Icon.src} alt="Star" />
      <h1 className="mt-4 lg:mt-16 xl:mt-8 mb-[12px] text-4xl">Alvaro Teran Rodriguez</h1>
      <p className="">
        I am a San francisco-based product designer with a focus on web design, illustration, a
        visual development. I have a diverse range of experience having worked across various
        fields and industries.
      </p>
    </div>
  )
}
