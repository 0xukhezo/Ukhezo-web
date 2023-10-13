// React
import React, { useEffect } from "react"
// Images
import Logo from "../../../public/Logo.png"
// Next
import Image from "next/image"
// Utils
import { getObserver } from "@/utils/GetObserver"
import { ProjectType } from "@/types/Types"

interface ProjectCardProps {
  index: number
  project: ProjectType
}

export default function ProjectCard({ index, project }: ProjectCardProps) {
  //   const enterImage = () => {
  //     const hiddenProjectsImages = document.querySelectorAll(".projectImageStart") as any
  //     const projectImagesObserver = getObserver("projectImageFinish")
  //     hiddenProjectsImages.forEach((el: any) => projectImagesObserver.observe(el))
  //     const hiddenProjectsText = document.querySelectorAll(".projectTextStart") as any
  //     const projectTextObserver = getObserver("projectTextFinish")
  //     hiddenProjectsText.forEach((el: any) => projectTextObserver.observe(el))
  //   }

  //   useEffect(() => {
  //     window.addEventListener("scroll", enterImage)
  //     enterImage()
  //   }, [])

  return (
    <section className="flex text-center bg-gray-900 rounded-xl mx-10 p-4 my-10 min-h-[500px]">
      <Image
        src={Logo.src}
        alt="Your Company"
        width={400}
        height={400}
        className={index % 2 !== 1 ? "max-w-[400px] max-h-[400px] rounded-lg mx-10" : "hidden"}
        // className="projectImageStart max-w-[400px] max-h-[400px] rounded-lg"
      />
      <div
        className="text-pink text-start my-auto"
        //   className="projectTextStart my-auto text-pink"
      >
        <h1 className="text-white font-semibold text-4xl mb-4">{project.title}</h1>
        <span className="text-lg">{project.description}</span>
      </div>
      <Image
        src={Logo.src}
        alt="Your Company"
        width={400}
        height={400}
        className={index % 2 === 1 ? "max-w-[400px] max-h-[400px] rounded-lg mx-10" : "hidden"}
        // className="projectImageStart max-w-[400px] max-h-[400px] rounded-lg"
      />
    </section>
  )
}
