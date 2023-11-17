import React from "react"
import Navbar from "@/components/Layout/Navbar"
import About from "@/components/Sections/About"

export default function AboutPage() {
  return (
    <main>
      <Navbar page={<About />} />
    </main>
  )
}
