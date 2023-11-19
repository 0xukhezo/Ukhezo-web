import React from "react"
import AboutCard from "../Cards/Home/AboutCard"
import SquareCard from "../Cards/Home/SquareCard"
import FeatureShowerCard from "../Cards/Home/FeatureShowerCard"
import Logo from "../../../public/Logo.png"
import ServicesCard from "../Cards/Home/ServicesCard"
import WorkTogetherCard from "../Cards/Home/WorkTogetherCard"
import ExperienceCard from "../Cards/Home/ExperienceCard"

export default function Home() {
  return (
    <main className="grid gap-y-[16px] px-10 lg:px-0 w-screen lg:w-fit">
      <div className="grid grid-cols-4 grid-rows-4 gap-[16px] ">
        <div className="lg:col-span-2 col-span-4 row-span-4 ">
          <AboutCard />
        </div>
        <div className="lg:col-span-2 col-span-4">
          <FeatureShowerCard />
        </div>
        <div className="row-span-3 col-span-2 lg:col-span-1">
          <SquareCard
            image={Logo.src}
            h1={"Credentials"}
            h2={"MORE ABOUT ME"}
            href="/credentials"
            classNameMain="rounded-3xl bg-gradient-to-t from-[#3f3f3f] to-[#141414] flex"
          />
        </div>
        <div className="row-span-3 col-span-2 lg:col-span-1">
          <SquareCard
            image={Logo.src}
            h1={"Projects"}
            h2={"SHOWCASE"}
            href="/works"
            classNameMain="rounded-3xl bg-gradient-to-t from-[#3f3f3f] to-[#141414] flex"
          />
        </div>
      </div>{" "}
      <div className="grid grid-cols-4 gap-[16px] min-h-[240px]">
        <div className=" col-span-2 lg:col-span-1">
          <SquareCard
            image={Logo.src}
            h1={"Credentials"}
            h2={"MORE ABOUT ME"}
            href="/credentials"
            classNameMain="rounded-3xl bg-gradient-to-l from-[#3f3f3f] to-[#141414] flex h-full justify-between"
          />
        </div>
        <div className="col-span-2 hidden lg:block">
          <ServicesCard />
        </div>
        <div className=" col-span-2 lg:col-span-1">
          <SquareCard
            h1={"Projects"}
            h2={"SHOWCASE"}
            href="/contact"
            classNameMain="rounded-3xl bg-gradient-to-r from-[#3f3f3f] to-[#141414] flex h-full"
          />{" "}
        </div>{" "}
        <div className="col-span-4 lg:hidden block">
          <ServicesCard />
        </div>
      </div>{" "}
      <div className="grid grid-cols-4 lg:grid-rows-3 grid-rows-6 gap-[16px]">
        <div className="lg:col-span-2 col-span-4 row-span-3 ">
          <ExperienceCard />
        </div>
        <div className="lg:col-span-2 col-span-4 row-span-3">
          <WorkTogetherCard />
        </div>
      </div>
    </main>
  )
}
