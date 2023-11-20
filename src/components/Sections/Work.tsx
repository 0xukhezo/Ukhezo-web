import React from "react"
import ProjectCard from "../Cards/Work/ProjectCard"

import Image from "next/image"
import SeparatorImage from "../../../public/Separator.png"
import Logo from "../../../public/Logo.png"

export default function Work() {
  return (
    <main className="">
      <div className="grid grid-cols-6 grid-rows-5 gap-x-[24px]">
        <div className="row-start-1 row-end-3 col-start-1 col-end-3">
          <ProjectCard
            href={"fungi"}
            image={Logo.src}
            long={false}
            description={"Pepe"}
            title={"Fungi"}
          />
        </div>{" "}
        <div className="row-start-3 row-end-6 col-span-2 mt-4 mb-16">
          <ProjectCard
            href={"fluidsense"}
            image={Logo.src}
            long={true}
            description={"Pepe"}
            title={"Fluid sense"}
          />
        </div>{" "}
        <div className="row-start-1 row-end-2 col-start-3 col-end-7 flex w-full justify-around items-center -mt-20">
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={40}
            height={40}
            className="mx-2"
            loading="eager"
          />
          <span className="text-7xl font-semibold tracking-wider">ALL PROJECTS</span>
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={40}
            height={40}
            className="mx-2"
            loading="eager"
          />
        </div>
        <div className="col-span-2 row-start-2 row-end-4 -mt-20 mb-20">
          <ProjectCard
            href={"upper"}
            image={Logo.src}
            long={false}
            description={"Pepe"}
            title={"Upper Social"}
          />
        </div>
        <div className="col-span-2 row-start-4 row-end-6 -mt-16 mb-16">
          <ProjectCard
            href={"olivetree"}
            image={Logo.src}
            long={false}
            description={"Pepe"}
            title={"Olivetree"}
          />
        </div>
        <div className="col-span-2 row-start-2 row-end-4 -mt-20 mb-20">
          <ProjectCard
            href={"hackers&painters"}
            image={Logo.src}
            long={false}
            description={"Pepe"}
            title={"Hackers and Painters"}
          />
        </div>
        <div className="col-span-2 row-start-4 row-end-6 -mt-16 mb-16">
          <ProjectCard
            href={"test"}
            image={Logo.src}
            long={false}
            description={"Pepe"}
            title={"Test"}
          />
        </div>
      </div>
    </main>
  )
}
