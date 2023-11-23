import React from "react"
import ProjectCard from "../Cards/Work/ProjectCard"

import Image from "next/image"
import SeparatorImage from "../../../public/Separator.png"
import Logo from "../../../public/Logo.png"

export default function Work() {
  return (
    <main className="px-10 xl:px-0">
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-6 lg:grid-rows-5 lg:gap-x-[24px] gap-y-[24px] sm:gap-[24px]">
        <div className="col-span-6 flex w-full justify-center items-center flex lg:hidden">
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={24}
            height={24}
            className="mx-4"
            loading="eager"
          />
          <span className="text-[26px] xs:text-3xl sm:text-5xl  font-semibold tracking-wider">
            ALL PROJECTS
          </span>
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={24}
            height={24}
            className="mx-4"
            loading="eager"
          />
        </div>
        <div className="col-span-4 sm:col-span-3 lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-3 hidden lg:flex">
          <ProjectCard
            href={"fungi"}
            image={Logo.src}
            long={false}
            description={"Pepe"}
            title={"Fungi"}
          />
        </div>{" "}
        <div className="col-span-4 sm:col-span-3 lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-3 lg:hidden block">
          <ProjectCard
            href={"fungi"}
            image={Logo.src}
            long={true}
            description={"Pepe"}
            title={"Fungi"}
          />
        </div>{" "}
        <div className="col-span-4 sm:col-span-3 lg:row-start-3 lg:row-end-6 lg:col-span-2 lg:mt-4 lg:mb-16">
          <ProjectCard
            href={"fluidsense"}
            image={Logo.src}
            long={true}
            description={"Pepe"}
            title={"Fluid sense"}
          />
        </div>{" "}
        <div className="col-span-4 sm:col-span-3 lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-7 flex w-full justify-around items-center lg:-mt-20 lg:flex hidden">
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={40}
            height={40}
            className="mx-2"
            loading="eager"
          />
          <span className="text-5xl xl:text-7xl  font-semibold tracking-wider">ALL PROJECTS</span>
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={40}
            height={40}
            className="mx-2"
            loading="eager"
          />
        </div>
        <div className="col-span-4 sm:col-span-3 lg:row-start-2 lg:row-end-4 lg:-mt-20 lg:mb-20 lg:col-span-2">
          <ProjectCard
            href={"upper"}
            image={Logo.src}
            long={false}
            description={"Pepe"}
            title={"Upper Social"}
          />
        </div>
        <div className="col-span-4 sm:col-span-3 lg:row-start-4 lg:row-end-6 lg:-mt-16 lg:mb-16 lg:col-span-2">
          <ProjectCard
            href={"olivetree"}
            image={Logo.src}
            long={false}
            description={"Pepe"}
            title={"Olivetree"}
          />
        </div>
        <div className="col-span-4 sm:col-span-3 lg:row-start-2 lg:row-end-4 lg:-mt-20 lg:mb-20 ">
          <ProjectCard
            href={"hackers&painters"}
            image={Logo.src}
            long={false}
            description={"Pepe"}
            title={"Hackers and Painters"}
          />
        </div>
        <div className="col-span-4 sm:col-span-3 lg:row-start-4 lg:row-end-6 lg:-mt-16 lg:mb-16 ">
          <ProjectCard
            href={"test"}
            image={Logo.src}
            long={false}
            description={"Pepe"}
            title={"Dragon Stake"}
          />
        </div>
      </div>
    </main>
  )
}
