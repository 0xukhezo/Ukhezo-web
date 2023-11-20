import Navbar from "@/components/Layout/Navbar"
import ProjectDetails from "@/components/Sections/ProjectDetails"
import { useRouter } from "next/router"
import React from "react"

export default function ProjectDetailsPage() {
  const router = useRouter()

  return (
    <main>
      <Navbar page={<ProjectDetails project={router.query.name as string} />} />
    </main>
  )
}
