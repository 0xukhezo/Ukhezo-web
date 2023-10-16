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
      className={`flex flex-row my-10 mx-auto  ${index === 0 && "hiddenShowLeft"} ${
        index === 1 && "hiddenShowRight"
      } ${
        index === 2 && "lg:col-span-2 hiddenShowUp"
      } border-1 border-black items-center rounded-xl bg-gray-900 hover:shadow-pink hover:shadow-xl hover:border-pink`}
    >
      <a className="flex px-10 py-6" href={award.href} target="_blank">
        <Image
          src={award.image}
          alt={`Image 1`}
          height={144}
          width={144}
          className={`max-h-[144px] max-w-[144px] ${index % 2 !== 0 ? "hidden" : "block"}`}
        />
        <div className={`text-start ${index % 2 === 0 ? "ml-20" : "mr-20"}`}>
          <h2 className="mb-6 text-2xl font-anton tracking-widest">{award.title}</h2>
          <div>
            <h3 className="font-bitter text-2xl">Winner by:</h3>
            <div className="ml-8 mt-4">
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
          className={`max-h-[144px] max-w-[144px] ${index % 2 === 0 ? "hidden" : "block"}`}
        />
      </a>
    </div>
  )
}
