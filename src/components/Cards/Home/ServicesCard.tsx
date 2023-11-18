import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import Star from "../../../../public/Star.svg"

export default function ServicesCard() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href="/services">
      <div
        className="rounded-3xl bg-[#212121] flex justify-around h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col justify-between gap-y-[12px] items-center w-full px-8 py-4 h-full">
          <div className="grid grid-cols-4 w-full px-6 mt-10 ">
            <Image
              height={80}
              width={80}
              src={Star.src}
              alt="Alvaro Teran Image"
              className="mx-auto"
            />
            <Image
              height={80}
              width={80}
              src={Star.src}
              alt="Alvaro Teran Image"
              className="mx-auto"
            />
            <Image
              height={80}
              width={80}
              src={Star.src}
              alt="Alvaro Teran Image"
              className="mx-auto"
            />
            <Image
              height={80}
              width={80}
              src={Star.src}
              alt="Alvaro Teran Image"
              className="mx-auto"
            />
          </div>

          <div className="relative flex w-full justify-start items-center ">
            <div>
              <h2 className="mb-1.5 font-semibold">SPECIALIZATION</h2>
              <h1 className="mb-3 font-semibold text-xl">Services Offering</h1>{" "}
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
