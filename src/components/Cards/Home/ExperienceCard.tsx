import React from "react"
import CountUp from "react-countup"

export default function ExperienceCard() {
  const clientsInfo = [
    {
      text: (
        <>
          YEARS<br></br> EXPERIENCE
        </>
      ),
      value: 3,
      prefix: "",
    },
    {
      text: (
        <>
          CLIENTS<br></br> WORLDWIRE
        </>
      ),
      value: 3,
      prefix: "+ ",
    },
    {
      text: (
        <>
          TOTAL<br></br> PROJECTS
        </>
      ),
      value: 6,
      prefix: "+ ",
    },
  ]

  return (
    <div className="rounded-3xl bg-gradient-to-l from-[#1f1f1f] to-[#141414] flex p-4 h-full gap-x-[16px]">
      {clientsInfo.map((entrance: any, index: number) => {
        return (
          <div
            className="rounded-3xl bg-gradient-to-b from-[#3f3f3f] to-[#141414] flex flex-col text-center p-2.5 justify-around w-1/3"
            key={index}
          >
            <h1 className="font-semibold text-4xl">
              <CountUp
                start={0}
                end={entrance.value}
                duration={2.8}
                delay={0.6}
                separator=" "
                prefix={entrance.prefix}
              />
            </h1>
            <h2 className="font-semibold text-sm text-gray-400">{entrance.text}</h2>
          </div>
        )
      })}
    </div>
  )
}
