import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import Star from "../../../../public/Star.svg"

type ProjectCardProps = {
  href: string
  image: string
  long: boolean
  description: string
  title: string
}

export default function ProjectCard({ href, image, long, description, title }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Link href={`/projects/${href}`}>
      <div
        className={`rounded-3xl bg-gradient-to-bl from-[#3f3f3f] to-[#141414] flex h-full px-5 ${
          isHovered ? "hovered" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col items-center w-full  py-5 h-full justify-between">
          <Image
            height={282}
            width={342}
            src={image}
            alt="Project Image"
            className={`rounded-3xl h-full ${long ? "" : "max-h-[282px]"}`}
          />

          <div className="relative flex w-full justify-start items-center mt-4">
            <div>
              <h2 className="mb-1.5 font-semibold">{description}</h2>
              <h1 className="mb-3 font-semibold text-xl">{title}</h1>{" "}
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
