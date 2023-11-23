import React from "react"
import AboutCard from "../Cards/Home/AboutCard"
import SquareCard from "../Cards/Home/SquareCard"
import FeatureShowerCard from "../Cards/Home/FeatureShowerCard"
import Logo from "../../../public/Logo.png"
import ServicesCard from "../Cards/Home/ServicesCard"
import WorkTogetherCard from "../Cards/Home/WorkTogetherCard"
import ExperienceCard from "../Cards/Home/ExperienceCard"
import Link from "next/link"

export default function Home() {
  return (
    <main className="grid gap-y-[16px] px-10 xl:px-0 w-screen lg:w-fit overflow-auto ">
      <div className="grid grid-cols-4 grid-rows-4 gap-[16px] ">
        <div className={`animated-element lg:col-span-2 col-span-4 row-span-4 `}>
          <Link href="/about">
            <AboutCard />
          </Link>
        </div>
        <div className="lg:col-span-2 col-span-4">
          <FeatureShowerCard />
        </div>
        <div className="row-span-3 col-span-2 lg:col-span-1">
          <Link href="/credentials">
            <SquareCard
              image={Logo.src}
              h1={"Credentials"}
              h2={"MORE ABOUT ME"}
              classNameMain="rounded-3xl bg-gradient-to-t from-[#3f3f3f] to-[#141414] flex"
            />
          </Link>
        </div>
        <div className="row-span-3 col-span-2 lg:col-span-1">
          <Link href="/works">
            <SquareCard
              image={Logo.src}
              h1={"Projects"}
              h2={"SHOWCASE"}
              classNameMain="rounded-3xl bg-gradient-to-t from-[#3f3f3f] to-[#141414] flex"
            />{" "}
          </Link>
        </div>
      </div>{" "}
      <div className="grid grid-cols-4 gap-[16px] min-h-[240px]">
        <div className=" col-span-2 lg:col-span-1">
          <Link href="/projects/fungi">
            <SquareCard
              image={Logo.src}
              h1={"Last work"}
              h2={"FUNGI"}
              classNameMain="rounded-3xl bg-gradient-to-l from-[#3f3f3f] to-[#141414] flex h-full justify-between"
            />
          </Link>
        </div>
        <div className="col-span-2 hidden lg:block">
          <Link href="/services">
            <ServicesCard />{" "}
          </Link>
        </div>
        <div className=" col-span-2 lg:col-span-1">
          <Link href="/contact">
            <SquareCard
              h1={"Profiles"}
              h2={"STAY WITH ME"}
              classNameMain="rounded-3xl bg-gradient-to-r from-[#3f3f3f] to-[#141414] flex h-full"
            />{" "}
          </Link>
        </div>{" "}
        <div className="col-span-4 lg:hidden block">
          <Link href="/services">
            <ServicesCard />
          </Link>
        </div>
      </div>{" "}
      <div className="grid grid-cols-4 gap-[16px]">
        <div className="lg:col-span-2 col-span-4  ">
          <ExperienceCard />
        </div>
        <div className="lg:col-span-2 col-span-4 ">
          {" "}
          <Link href="/contact">
            <WorkTogetherCard />{" "}
          </Link>
        </div>
      </div>
    </main>
  )
}
