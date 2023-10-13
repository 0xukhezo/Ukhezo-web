import React from "react"
import { projects } from "../../../constants/Constants"
import ProjectCard from "../Cards/ProjectCard"
import { ProjectType } from "@/types/Types"

export default function Projects() {
  return (
    <div className="text-white">
      {projects.map((project: ProjectType, index: number) => {
        return <ProjectCard index={index + 1} key={project.title} project={project} />
      })}
    </div>
  )
}
