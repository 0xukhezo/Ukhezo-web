import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import Star from "../../../public/Star.svg"

type HomeCardSquareProps = {
  image: string
  h2: string
  h1: string
  href: string
  classNameMain: string
}

export default function HomeCardSquare({
  image,
  h2,
  h1,
  href,
  classNameMain,
}: HomeCardSquareProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={href}>
      <div
        className={classNameMain}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col gap-y-[12px] items-center w-full px-8 py-4 h-full">
          <Image
            height={82}
            width={82}
            src={image}
            alt="Alvaro Teran Image"
            className="rounded-tl-3xl rounded-br-3xl"
          />
          <div className="relative flex w-full justify-start items-center mt-4">
            <div>
              <h2 className="mb-1.5 font-semibold">{h2}</h2>
              <h1 className="mb-3 font-semibold text-xl">{h1}</h1>{" "}
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
