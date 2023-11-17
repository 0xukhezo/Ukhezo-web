import Navbar from "@/components/Layout/Navbar"
import Services from "@/components/Sections/Services"
import React from "react"

export default function ServicesPage() {
  return (
    <main>
      <Navbar page={<Services />} />
    </main>
  )
}
