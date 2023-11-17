// React
import React, { useEffect } from "react"
// Components
import Navbar from "@/components/Layout/Navbar"
import Footer from "@/components/Layout/Footer"
import Home from "@/components/Sections/Home"
// Utils
import { getObserver } from "@/utils/GetObserver"

export default function HomePage() {
  return (
    <main>
      <Navbar page={<Home />} />
    </main>
  )
}
