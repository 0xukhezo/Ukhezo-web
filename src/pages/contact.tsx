import Navbar from "@/components/Layout/Navbar"
import Contact from "@/components/Sections/Contact"
import React from "react"

export default function ContactPage() {
  return (
    <main>
      <Navbar page={<Contact />} />
    </main>
  )
}
