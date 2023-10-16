// React
import React, { useEffect } from "react"
// Images
import Logo from "../../../public/Logo.png"
// Next
import Image from "next/image"
// Utils
import { getObserver } from "@/utils/GetObserver"
// Types
import { ProjectType } from "@/types/Types"

interface ProjectCardProps {
  index: number
  project: ProjectType
}

export default function ProjectCard({ index, project }: ProjectCardProps) {
  const enterImage = () => {
    const hiddenProjectsImages = document.querySelectorAll(".projectImageStart") as any
    const projectImagesObserver = getObserver("projectImageFinish")
    hiddenProjectsImages.forEach((el: any) => projectImagesObserver.observe(el))
    const hiddenProjectsText = document.querySelectorAll(".projectTextStart") as any
    const projectTextObserver = getObserver("projectTextFinish")
    hiddenProjectsText.forEach((el: any) => projectTextObserver.observe(el))
    const hiddenProjectsCard = document.querySelectorAll(".cardProjectStart") as any
    const projectCardObserver = getObserver("cardProjectFinish")
    hiddenProjectsCard.forEach((el: any) => projectCardObserver.observe(el))
  }

  useEffect(() => {
    window.addEventListener("scroll", enterImage)
    enterImage()
  }, [])

  return (
    <a target="_blank" href={project.url}>
      <section
        className={`flex text-center rounded-xl ${
          index % 2 !== 1 ? "lg:pr-10" : "lg:pl-10"
        } lg:my-20 py-5 lg:max-h-[500px] flex lg:flex-row flex-col cardProjectStart hover:shadow-pink hover:shadow-xl hover:border-pink`}
      >
        <Image
          src={Logo.src}
          alt="Your Company"
          width={400}
          height={400}
          className={
            index % 2 !== 1
              ? "projectImageStart xl:max-w-[400px] xl:max-h-[400px] lg:max-w-[300px] lg:max-h-[300px] rounded-lg hidden lg:block"
              : "hidden"
          }
        />
        <Image
          src={Logo.src}
          alt="Your Company"
          width={400}
          height={400}
          className={
            "projectImageStart xl:max-w-[400px] xl:max-h-[400px] max-w-[250px] max-h-[250px] rounded-lg lg:hidden block "
          }
        />
        <div className="text-white lg:text-start my-auto projectTextStart lg:max-h-[400px] mt-4 ">
          <h1 className="font-semibold text-4xl mb-4 font-anton tracking-wider">
            {project.title}
          </h1>
          <span className="font-bitter text-xl">{project.description}</span>
        </div>
        <Image
          src={Logo.src}
          alt="Your Company"
          width={400}
          height={400}
          className={
            index % 2 === 1
              ? "projectImageStart xl:max-w-[400px] xl:max-h-[400px] lg:max-w-[300px] lg:max-h-[300px] max-w-[200px] max-h-[200px] rounded-lg hidden lg:block"
              : "hidden"
          }
        />
      </section>
    </a>
  )
}
