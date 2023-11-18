import React from "react"
import AboutCardImage from "../Cards/AboutCardImage"
import AboutSelfInfo from "../Cards/AboutSelfInfo"
import Image from "next/image"
import SeparatorImage from "../../../public/Separator.png"
import AboutCVCard from "../Cards/AboutCVCard"
import { cvInfoExperience } from "../../../constants/Constants"

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
          <span className="text-7xl font-semibold tracking-wider">SELF-SUMMARY</span>
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
      <div className="grid grid-cols-4 grid-rows-4 gap-[24px]">
        <div className="row-span-4 col-span-2">
          <AboutCVCard
            info={cvInfoExperience}
            className="rounded-3xl bg-gradient-to-tr from-[#3f3f3f] to-[#141414]  h-full py-6 px-10"
          />
        </div>
        <div className="row-span-4 col-span-2">
          <AboutCVCard
            info={cvInfoExperience}
            className="rounded-3xl bg-gradient-to-tl from-[#3f3f3f] to-[#141414]  h-full py-6 px-10"
          />
        </div>
      </div>{" "}
    </main>
  )
}
