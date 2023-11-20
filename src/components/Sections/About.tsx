import React from "react"
import ImageCard from "../Cards/About/ImageCard"
import SelfInfoCard from "../Cards/About/SelfInfoCard"
import Image from "next/image"
import SeparatorImage from "../../../public/Separator.png"
import CVCard from "../Cards/About/CVCard"
import { cvInfoExperience } from "../../../constants/Constants"
import SquareCard from "../Cards/Home/SquareCard"
import ServicesCard from "../Cards/Home/ServicesCard"
import Logo from "../../../public/Logo.png"
import WorkTogetherCard from "../Cards/Home/WorkTogetherCard"

export default function About() {
  return (
    <main className="grid gap-y-[24px]">
      <div className="grid grid-cols-6 grid-rows- gap-[24px]">
        <div className="row-span-4 col-span-2">
          <ImageCard />
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
          <SelfInfoCard />
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-4 gap-[24px]">
        <div className="row-span-4 col-span-2">
          <CVCard
            info={cvInfoExperience}
            className="rounded-3xl bg-gradient-to-tr from-[#3f3f3f] to-[#141414]  h-full py-6 px-10"
          />
        </div>
        <div className="row-span-4 col-span-2">
          <CVCard
            info={cvInfoExperience}
            className="rounded-3xl bg-gradient-to-tl from-[#3f3f3f] to-[#141414]  h-full py-6 px-10"
          />
        </div>
      </div>{" "}
      <div className="grid grid-cols-4 gap-[16px] min-h-[240px]">
        <div className=" col-span-2 lg:col-span-1">
          <SquareCard
            h1={"Projects"}
            h2={"SHOWCASE"}
            href="contact"
            classNameMain="rounded-3xl bg-gradient-to-r from-[#3f3f3f] to-[#141414] flex h-full"
          />{" "}
        </div>
        <div className="col-span-2 hidden lg:block">
          <WorkTogetherCard />
        </div>
        <div className=" col-span-2 lg:col-span-1">
          <SquareCard
            image={Logo.src}
            h1={"Credentials"}
            h2={"MORE ABOUT ME"}
            href="credentials"
            classNameMain="rounded-3xl bg-gradient-to-l from-[#3f3f3f] to-[#141414] flex h-full justify-between"
          />
        </div>{" "}
      </div>{" "}
    </main>
  )
}
