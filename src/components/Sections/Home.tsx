import React from "react"
import HomeAboutCard from "../Cards/HomeAboutCard"
import HomeCardSquare from "../Cards/HomeCardSquare"
import HomeFeatureShowerCard from "../Cards/HomeFeatureShowerCard"
import Logo from "../../../public/Logo.png"
import HomeServicesCard from "../Cards/HomeServicesCard"
import HomeWorkTogetherCard from "../Cards/HomeWorkTogetherCard"
import HomeExperienceCard from "../Cards/HomeExperienceCard"

export default function Home() {
  return (
    <main className="grid gap-y-[24px]">
      <div className="grid grid-cols-4 grid-rows-4 w-[1170px] mx-auto gap-[24px]">
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
            classNameMain="rounded-xl bg-gradient-to-b from-[#3f3f3f] to-[#141414] flex"
          />
        </div>
        <div className="row-span-3">
          <HomeCardSquare
            image={Logo.src}
            h1={"Projects"}
            h2={"SHOWCASE"}
            href="/works"
            classNameMain="rounded-xl bg-gradient-to-b from-[#3f3f3f] to-[#141414] flex"
          />
        </div>
      </div>{" "}
      <div className="grid grid-cols-4 w-[1170px] mx-auto gap-[24px] min-h-[270px]">
        <HomeCardSquare
          image={Logo.src}
          h1={"Credentials"}
          h2={"MORE ABOUT ME"}
          href="/credentials"
          classNameMain="rounded-xl bg-gradient-to-r from-[#3f3f3f] to-[#141414] flex h-full justify-between"
        />

        <div className="col-span-2 ">
          <HomeServicesCard />
        </div>

        <HomeCardSquare
          h1={"Projects"}
          h2={"SHOWCASE"}
          href="/contact"
          classNameMain="rounded-xl bg-gradient-to-l from-[#3f3f3f] to-[#141414] flex h-full"
        />
      </div>{" "}
      <div className="grid grid-cols-4 grid-rows-3 w-[1170px] mx-auto gap-[24px]">
        <div className="col-span-2 row-span-3">
          <HomeExperienceCard />
        </div>
        <div className="col-span-2 row-span-3">
          <HomeWorkTogetherCard />
        </div>
      </div>
    </main>
  )
}
