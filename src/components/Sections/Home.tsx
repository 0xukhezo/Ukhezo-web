import React from "react"
import HomeAboutCard from "../Cards/HomeAboutCard"
import HomeCardSquare from "../Cards/HomeCardSquare"
import HomeFeatureShowerCard from "../Cards/HomeFeatureShowerCard"
import Logo from "../../../public/Logo.png"

export default function Home() {
  return (
    <main className="grid grid-cols-4 grid-rows-4 w-[1170px] mx-auto gap-[16px]">
      <div className="col-span-2 row-span-4 ">
        <HomeAboutCard />
      </div>
      <div className="col-span-2">
        <HomeFeatureShowerCard />
      </div>
      <div className="row-span-3">
        <HomeCardSquare
          image={Logo.src}
          h1={"Credentials"}
          h2={"MORE ABOUT ME"}
          href="/credentials"
        />
      </div>
      <div className="row-span-3">
        <HomeCardSquare image={Logo.src} h1={"Projects"} h2={"SHOWCASE"} href="/works" />
      </div>
    </main>
  )
}
