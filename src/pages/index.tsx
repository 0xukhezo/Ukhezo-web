// React
import React, { useEffect } from "react"
// Components
import Navbar from "@/components/Layout/Navbar"
import Footer from "@/components/Layout/Footer"
import Hero from "@/components/Sections/Hero"
import Projects from "@/components/Sections/Projects"
import Stack from "@/components/Sections/Stack"
import Awards from "@/components/Sections/Awards"
// Utils
import { getObserver } from "@/utils/GetObserver"

export default function Home() {
  const setScrollPadding = () => {
    const navigation = document.querySelector(".primary-navigation") as any
    const navigationHeight = navigation.offsetHeight
    document.documentElement.style.setProperty("--scroll-padding", navigationHeight + "px")
  }

  const setScrollLeft = () => {
    const hiddenElementsLeft = document.querySelectorAll(".hiddenShowLeft") as any
    const hiddenElementsRight = document.querySelectorAll(".hiddenShowRight") as any
    const hiddenElementsRotate = document.querySelectorAll(".hiddenShowUp") as any

    const observer = getObserver("show")
    hiddenElementsLeft.forEach((el: any) => observer.observe(el))
    hiddenElementsRight.forEach((el: any) => observer.observe(el))
    const upObserver = getObserver("showUp")
    hiddenElementsRotate.forEach((el: any) => upObserver.observe(el))
  }

  useEffect(() => {
    setScrollPadding()
    setScrollLeft()
  })

  return (
    <main>
      <Navbar />
      <Hero />
      <Stack />
      <Awards />
      <Projects />
      <Footer />
    </main>
  )
}
