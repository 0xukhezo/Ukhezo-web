import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Logo from "../../../../public/Logo.png"
import Star from "../../../../public/Star.svg"

export default function AboutCard() {
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const card = document.getElementById("cardAbout")
    if (isHovered) {
      card?.classList.add("card-about-hovered")
    } else {
      card?.classList.remove("card-about-hovered")
    }
  }, [isHovered])

  return (
    <Link href="/about" id="cardAbout">
      <div
        className="rounded-3xl bg-gradient-to-tl from-[#3f3f3f] to-[#141414] flex "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col md:flex-row justify-between gap-x-[36px] items-center m-8 w-full">
          <Image
            height={224}
            width={224}
            src={isHovered ? Logo.src : Logo.src}
            alt="Alvaro Teran Image"
            className="md:rounded-tl-3xl md:rounded-br-3xl "
          />
          <div className="relative w-full mt-6 md:mt-0 ">
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
            <Image
              height={46}
              width={42}
              src={Star.src}
              id="star"
              alt="Alvaro Teran Image"
              className={`absolute right-0 bottom-0 md:-bottom-7 ${
                isHovered ? "opacity-100" : "opacity-40"
              } transition-opacity duration-300`}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
