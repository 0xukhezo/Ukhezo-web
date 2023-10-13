// React
import React, { useEffect } from "react"
// Components
import Navbar from "@/components/Layout/Navbar"
import Footer from "@/components/Layout/Footer"
import Hero from "@/components/Sections/Hero"
import Projects from "@/components/Sections/Projects"

export default function Home() {
  // const setScrollPadding = () => {
  //   const navigation = document.querySelector(".primary-navigation") as any
  //   const navigationHeight = navigation.offsetHeight
  //   document.documentElement.style.setProperty("--scroll-padding", navigationHeight + "px")
  // }

  // const setScrollLeft = () => {
  //   const hiddenElementsLeft = document.querySelectorAll(".hiddenShowLeft") as any
  //   const hiddenElementsRight = document.querySelectorAll(".hiddenShowRight") as any
  //   const hiddenElementsRotate = document.querySelectorAll(".hiddenShowUp") as any

  //   const observer = getObserver("show")
  //   hiddenElementsLeft.forEach((el: any) => observer.observe(el))
  //   hiddenElementsRight.forEach((el: any) => observer.observe(el))
  //   const upObserver = getObserver("showUp")
  //   hiddenElementsRotate.forEach((el: any) => upObserver.observe(el))
  // }

  // useEffect(() => {
  //   setScrollPadding()
  //   setScrollLeft()
  // })

  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </main>
  )
}