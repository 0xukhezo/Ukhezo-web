import React from "react"

export default function ExperienceCard() {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-[#1f1f1f] to-[#141414] flex p-4 h-full gap-x-[16px]">
      <div className="rounded-3xl bg-gradient-to-b from-[#3f3f3f] to-[#141414] flex flex-col text-center p-2.5 justify-around w-1/3">
        <h1 className="font-semibold text-3xl">03</h1>
        <h2 className="font-semibold">
          YEARS<br></br> EXPERIENCE
        </h2>{" "}
      </div>{" "}
      <div className="rounded-3xl bg-gradient-to-b from-[#3f3f3f] to-[#141414] flex flex-col text-center p-2.5 justify-around w-1/3">
        <h1 className=" font-semibold text-3xl">03</h1>
        <h2 className="font-semibold ">
          CLIENTS<br></br> WORLDWIRE
        </h2>{" "}
      </div>{" "}
      <div className="rounded-3xl bg-gradient-to-b from-[#3f3f3f] to-[#141414] flex flex-col text-center p-2.5 justify-around w-1/3">
        <h1 className=" font-semibold text-3xl">03</h1>
        <h2 className="font-semibold">
          TOTAL<br></br> PROJECTS
        </h2>{" "}
      </div>{" "}
    </div>
  )
}
