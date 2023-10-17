// React
import React from "react"
// Constants
import { projects } from "../../../constants/Constants"
// Components
import ProjectCard from "../Cards/ProjectCard"
// Types
import { ProjectType } from "@/types/Types"

export default function Projects() {
  return (
    <div className="text-white text-center px-10 mt-40" id="porfolio">
      <h1 className="font-semibold text-5xl py-4 font-anton tracking-widest">Porfolio</h1>
      <div className="max-w-[800px] mx-auto mt-[40px] lg:mb-40 font-bitter text-xl">
        I'm a passionate front-end developer with a keen interest in Web3 technologies. Over the
        past two years, I've dedicated myself to mastering the art of crafting immersive and
        decentralized web experiences. My portfolio showcases a range of projects that demonstrate
        my expertise in creating user-friendly interfaces for blockchain applications and
        decentralized platforms. With a strong foundation in React, Tailwind, Typescript and Web3
        tools, I've contributed to the growth of this exciting industry. My career is defined by a
        commitment to innovation, a love for open-source collaboration, and a vision for a more
        decentralized and user-centric web. I'm excited to continue my journey, pushing the
        boundaries of Web3 development and making a lasting impact on the industry.
      </div>
      <div className="lg:mx-32">
        {projects.map((project: ProjectType, index: number) => {
          return <ProjectCard index={index + 1} key={project.title} project={project} />
        })}
      </div>
    </div>
  )
}
