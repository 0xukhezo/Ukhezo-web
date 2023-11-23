import React, { useState } from "react"
import Image from "next/image"

import Icon from "../../../../public/Icon3.png"
import Star from "../../../../public/Star.svg"

export default function HomeWorkTogetherCard() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="rounded-3xl bg-gradient-to-br from-[#3f3f3f] to-[#141414]  xs:h-full card-work-together"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col justify-between gap-y-[12px]  w-full px-8 pb-4 h-full">
        <Image height={30} width={30} src={Icon.src} alt="Star" />

        <div className="relative flex w-full justify-start items-center ">
          <h1 className="mb-3 font-semibold text-5xl mt-4">
            Let's<br></br> work <span className="text-blue-500">together</span>
          </h1>
          <Image
            height={46}
            width={42}
            src={Star.src}
            id="star"
            alt="Alvaro Teran Image"
            className={`absolute right-0 ${
              isHovered ? "opacity-100" : "opacity-40"
            } transition-opacity duration-300`}
          />
        </div>
      </div>
    </div>
  )
}
