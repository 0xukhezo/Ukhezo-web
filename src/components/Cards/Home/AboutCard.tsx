import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Logo from "../../../../public/Logo.png"
import Star from "../../../../public/Star.svg"

export default function AboutCard() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href="/about" className="card-about">
      <div
        className="rounded-3xl bg-gradient-to-tl from-[#3f3f3f] to-[#141414] flex justify-center w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative flex flex-col md:flex-row gap-x-[36px] items-center m-8 w-full">
          <article>
            <img src={Logo.src} alt="Alvaro Teran Image" />
            <img src={Logo.src} alt="Alvaro Teran Image" />
          </article>
          <div className=" w-fit mt-6 md:mt-0 ">
            <h2 className="mb-1.5 font-semibold text-xl opacity-transition-show show">
              {isHovered ? "Web3 Developer" : "Front End Developer"}
            </h2>
            <h1 className="mb-3 font-semibold text-4xl opacity-transition">
              {isHovered ? (
                <span>Ukhezo</span>
              ) : (
                <span>
                  Alvaro <br></br>Teran.
                </span>
              )}
            </h1>{" "}
            <p className="text-sm opacity-transition">
              {" "}
              {isHovered ? (
                <span>I am a Web3 Developer based in Mainnet.</span>
              ) : (
                <span>I am a Front End Developer based in Madrid.</span>
              )}
            </p>
          </div>
          <Image
            height={46}
            width={42}
            src={Star.src}
            id="star"
            alt="Alvaro Teran Image"
            className={`absolute right-0 bottom-0 md:bottom-1${
              isHovered ? "opacity-100" : "opacity-40 "
            } transition-opacity duration-300`}
          />
        </div>
      </div>
    </Link>
  )
}
