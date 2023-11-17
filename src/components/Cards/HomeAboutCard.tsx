import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Logo from "../../../public/Logo.png"
import Star from "../../../public/Star.svg"

export default function HomeAboutCard() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href="/about">
      <div
        className="rounded-xl bg-gradient-to-br from-[#3f3f3f] to-[#141414] flex"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex justify-between gap-x-[36px] items-center m-8">
          <Image
            height={224}
            width={224}
            src={Logo.src}
            alt="Alvaro Teran Image"
            className="rounded-tl-3xl rounded-br-3xl"
          />
          <div className="relative">
            <h2 className="mb-1.5 font-semibold text-xl">Front End Developer</h2>
            <h1 className="mb-3 font-semibold text-4xl">
              Alvaro <br></br>Teran.
            </h1>{" "}
            <p className="text-sm">I am a Front End Developer based in Madrid.</p>
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
