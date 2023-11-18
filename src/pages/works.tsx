import Navbar from "@/components/Layout/Navbar"
import Work from "@/components/Sections/Work"
import React from "react"

export default function WorksPage() {
  return (
    <main>
      <Navbar page={<Work />} />
    </main>
  )
}
