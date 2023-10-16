// React
import React from "react"
// Next
import Image from "next/image"
// Constants
import { awards } from "../../../constants/Constants"
// Types
import { AwardType } from "@/types/Types"

export default function Awards() {
  return (
    <div className="text-center my-20" id="awards">
      <h1 className="font-semibold text-5xl py-4 font-anton tracking-widest">Awards</h1>
      <div className="grid lg:grid-cols-2">
        {awards.map((award: AwardType, index: number) => {
          return (
            <div
              key={index}
              className={`flex flex-row my-10 mx-auto ${
                index === 2 && "lg:col-span-2"
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
        })}
      </div>
    </div>
  )
}
