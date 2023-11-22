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
import ServiceCard from "../Cards/Services/ServiceCard"
import DescriptionServices from "../Cards/Services/DescriptionServices"

export default function Services() {
  return (
    <main className="grid gap-y-[24px] px-10 xl:px-0">
      <div className="grid grid-cols-6 gap-[24px]">
        <div className="col-span-4 flex w-full justify-center items-center xl:hidden block col-span-6">
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={24}
            height={24}
            className="mx-2"
            loading="eager"
          />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider">
            MY OFFERINGS
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
        <div className="lg:row-span-4 xl:col-span-2 col-span-6">
          <ServiceCard />
        </div>
        <div className="col-span-4 w-full justify-around items-center hidden xl:flex">
          {" "}
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={40}
            height={40}
            className="mx-2"
            loading="eager"
          />
          <span className="text-7xl font-semibold tracking-wider">MY OFFERINGS</span>
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={40}
            height={40}
            className="mx-2"
            loading="eager"
          />
        </div>
        <div className="xl:col-span-4 col-span-6 row-span-3">
          <DescriptionServices />
        </div>
      </div>
      <div className="grid grid-cols-6 lg:grid-cols-4 gap-[16px] min-h-[240px]">
        <div className="col-span-3 md:col-span-2  lg:col-span-1">
          <SquareCard
            h1={"Projects"}
            h2={"SHOWCASE"}
            href="contact"
            classNameMain="rounded-3xl bg-gradient-to-tr from-[#3f3f3f] to-[#141414] flex h-full"
          />{" "}
        </div>
        <div className="col-span-2 hidden md:block">
          <WorkTogetherCard />
        </div>
        <div className="col-span-3 md:col-span-2  lg:col-span-1">
          <SquareCard
            image={Logo.src}
            h1={"Credentials"}
            h2={"MORE ABOUT ME"}
            href="credentials"
            classNameMain="rounded-3xl bg-gradient-to-tl from-[#3f3f3f] to-[#141414] flex h-full justify-between"
          />
        </div>
        <div className="col-span-6 md:hidden block">
          <WorkTogetherCard />
        </div>
      </div>{" "}
    </main>
  )
}
