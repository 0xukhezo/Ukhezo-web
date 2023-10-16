// React
import React from "react"
// Next
import Image from "next/image"
// Types
import { AwardType } from "@/types/Types"

interface AwardCardProps {
  award: AwardType
  index: number
}

export default function AwardCard({ award, index }: AwardCardProps) {
  return (
    <div
      className={`my-10 mx-auto min-w-[300px] md:min-w-[500px] ${
        index === 0 && "hiddenShowLeft"
      } ${index === 1 && "hiddenShowRight"} ${
        index === 2 && "lg:col-span-2 hiddenShowUp"
      } border-1 border-black items-center rounded-xl bg-gray-900 hover:shadow-pink hover:shadow-xl hover:border-pink`}
    >
      <a
        className="flex md:flex-row flex-col items-center px-10 py-6"
        href={award.href}
        target="_blank"
      >
        <Image
          src={award.image}
          alt={`Image 1`}
          height={144}
          width={144}
          className={`max-h-[144px] max-w-[144px] ${index % 2 !== 0 ? "lg:hidden" : "block"}`}
        />
        <div className={`text-start ${index % 2 === 0 ? "md:ml-20" : "md:mr-20"}`}>
          <h2 className="mb-6 text-2xl font-anton tracking-widest mt-8 lg:mt-0">{award.title}</h2>
          <div className="text-center md:text-start">
            <h3 className="font-bitter text-2xl">Winner in:</h3>
            <div className="md:ml-8 mt-4">
              {award.winners.map((winner: any) => {
                return <div className="my-2 font-bitter text-xl">{winner}</div>
              })}
            </div>
          </div>
        </div>
        <Image
          src={award.image}
          alt={`Image 1`}
          height={144}
          width={144}
          className={`max-h-[144px] max-w-[144px] ${
            index % 2 === 0 ? "hidden" : "lg:block hidden"
          }`}
        />
      </a>
    </div>
  )
}
