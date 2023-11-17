import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import Icon from "../../../public/Icon3.png"
import Star from "../../../public/Star.svg"

export default function HomeWorkTogetherCard() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href="/services">
      <div
        className="rounded-xl bg-lightGray  h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col justify-between gap-y-[12px]  w-full px-8 pb-4 h-full">
          <Image height={30} width={30} src={Icon.src} alt="Star" />

          <div className="relative flex w-full justify-start items-center ">
            <div>
              <h1 className="mb-3 font-semibold text-5xl">
                Let's<br></br> work <span className="text-yellow-500">together</span>
              </h1>{" "}
            </div>

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
    </Link>
  )
}
