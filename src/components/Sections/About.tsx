import React from "react"
import AboutCardImage from "../Cards/AboutCardImage"
import AboutSelfInfo from "../Cards/AboutSelfInfo"
import Image from "next/image"
import SeparatorImage from "../../../public/Separator.png"

export default function About() {
  return (
    <main className="grid gap-y-[24px]">
      <div className="grid grid-cols-6 grid-rows- gap-[24px]">
        <div className="row-span-4 col-span-2">
          <AboutCardImage />
        </div>
        <div className="col-span-4 flex w-full justify-around items-center">
          {" "}
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={40}
            height={40}
            className="mx-2"
            loading="eager"
          />
          <span className="text-5xl font-semibold tracking-wider">SELF-SUMMARY</span>
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={40}
            height={40}
            className="mx-2"
            loading="eager"
          />
        </div>
        <div className="col-span-4 row-span-3">
          <AboutSelfInfo />
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-4 gap-[24px]"></div>{" "}
    </main>
  )
}
