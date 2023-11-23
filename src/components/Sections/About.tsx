import React from "react"
import ImageCard from "../Cards/About/ImageCard"
import SelfInfoCard from "../Cards/About/SelfInfoCard"
import Image from "next/image"
import SeparatorImage from "../../../public/Separator.png"
import CVCard from "../Cards/About/CVCard"
import { cvInfoEducation, cvInfoExperience } from "../../../constants/Constants"
import SquareCard from "../Cards/Home/SquareCard"
import ServicesCard from "../Cards/Home/ServicesCard"
import Logo from "../../../public/Logo.png"
import WorkTogetherCard from "../Cards/Home/WorkTogetherCard"
import Link from "next/link"

export default function About() {
  return (
    <main className="grid gap-y-[24px] px-10 xl:px-0">
      <div className="grid grid-cols-6 grid-rows- gap-[24px]">
        {" "}
        <div className="col-span-4 flex w-full justify-center items-center md:hidden block col-span-6">
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={24}
            height={24}
            className="mx-2"
            loading="eager"
          />
          <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider">
            SELF-SUMMARY
          </span>
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={24}
            height={24}
            className="mx-2"
            loading="eager"
          />
        </div>
        <div className="md:row-span-4 lg:row-span-5 xl:row-span-4 col-span-6 md:col-span-2">
          <ImageCard />
        </div>
        <div className="col-span-4 w-full justify-around items-center hidden md:flex row-span-4 lg:row-span-1">
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={40}
            height={40}
            className="xl:mx-2"
            loading="eager"
          />
          <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl  font-semibold tracking-wider">
            SELF-SUMMARY
          </span>
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={40}
            height={40}
            className="xl:mx-2"
            loading="eager"
          />
        </div>
        <div className="col-span-6 lg:col-span-4 row-span-4 xl:row-span-3">
          <SelfInfoCard />
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-4 gap-[24px]">
        <div className="row-span-4 lg:col-span-2 col-span-4">
          <CVCard
            info={cvInfoExperience}
            className="rounded-3xl bg-gradient-to-tr from-[#3f3f3f] to-[#141414]  h-full py-6 px-10"
            title="EXPERIENCE"
          />
        </div>
        <div className="row-span-4 lg:col-span-2 col-span-4">
          <CVCard
            info={cvInfoEducation}
            className="rounded-3xl bg-gradient-to-tl from-[#3f3f3f] to-[#141414]  h-full py-6 px-10"
            title="EDUCATION"
          />
        </div>
      </div>{" "}
      <div className="grid grid-cols-6 lg:grid-cols-4 gap-[16px] min-h-[240px]">
        <div className="col-span-3 md:col-span-2  lg:col-span-1">
          <Link href="/works">
            <SquareCard
              h1={"Projects"}
              h2={"SHOWCASE"}
              classNameMain="rounded-3xl bg-gradient-to-tr from-[#3f3f3f] to-[#141414] flex h-full"
            />
          </Link>
        </div>
        <div className="col-span-2 hidden md:block">
          <WorkTogetherCard />
        </div>
        <div className="col-span-3 md:col-span-2  lg:col-span-1">
          {" "}
          <Link href="/credentials">
            <SquareCard
              image={Logo.src}
              h1={"Credentials"}
              h2={"MORE ABOUT ME"}
              classNameMain="rounded-3xl bg-gradient-to-tl from-[#3f3f3f] to-[#141414] flex h-full justify-between"
            />{" "}
          </Link>
        </div>
        <div className="col-span-6 md:hidden block">
          <WorkTogetherCard />
        </div>
      </div>{" "}
    </main>
  )
}
