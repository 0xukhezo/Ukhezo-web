// React
import React from "react"
// Next
import { awards } from "../../../constants/Constants"
// Types
import { AwardType } from "@/types/Types"
// Components
import AwardCard from "../Cards/AwardCard"

export default function Awards() {
  return (
    <div className="text-center my-20" id="awards">
      <h1 className="font-semibold text-5xl py-4 font-anton tracking-widest">Awards</h1>
      <div className="grid lg:grid-cols-2">
        {awards.map((award: AwardType, index: number) => {
          return <AwardCard key={index} award={award} index={index} />
        })}
      </div>
    </div>
  )
}
