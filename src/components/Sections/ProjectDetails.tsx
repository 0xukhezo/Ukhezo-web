import React from "react"

type ProjectDetailsProps = {
  project: string
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return <div>{project}</div>
}
