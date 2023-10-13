import React from "react"
import { projects } from "../../../constants/Constants"
import ProjectCard from "../Cards/ProjectCard"
import { ProjectType } from "@/types/Types"

export default function Projects() {
  return (
    <div className="text-white text-center px-10" id="porfolio">
      <h1 className="text-white font-semibold text-4xl mb-4">Porfolio</h1>
      <div className="max-w-[800px] mx-auto mt-[40px] lg:mb-40">
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem
        Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un
        impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de
        textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo
        sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos
        electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la
        creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
        recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual
        incluye versiones de Lorem Ipsum.
      </div>

      {projects.map((project: ProjectType, index: number) => {
        return <ProjectCard index={index + 1} key={project.title} project={project} />
      })}
    </div>
  )
}
