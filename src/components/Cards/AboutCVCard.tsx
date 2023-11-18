import { cvType } from "@/types/Types"
import React, { useState } from "react"

type AboutCVCardProps = {
  info: cvType[]
  className: string
}

export default function AboutCVCard({ info, className }: AboutCVCardProps) {
  const [prevIndex, setPrevIndex] = useState<number>(0)

  const handleClickNextIndex = () => {
    console.log((prevIndex + 1) * 3 > info.length)
    if (prevIndex + 3 <= info.length) {
      setPrevIndex(prevIndex + 3)
    }
  }

  const handleClickPreviousIndex = () => {
    if (prevIndex === 0) {
      setPrevIndex(0)
    } else {
      setPrevIndex(prevIndex - 3)
    }
  }

  return (
    <div className={className}>
      <div className="flex items-center mb-[20px] justify-between">
        <h1>EXPERIENCE</h1>
        <div>
          <button onClick={() => handleClickPreviousIndex()} className="mx-4">
            -
          </button>
          <button onClick={() => handleClickNextIndex()}>+</button>
        </div>
      </div>
      {info.slice(prevIndex, prevIndex + 3).map((infoData: cvType) => {
        return (
          <div className="mt-4">
            <h3 className="text-sm">{infoData.date}</h3>
            <h2 className="my-1 text-lg">{infoData.title}</h2>
            <p className="text-sm">{infoData.location}</p>
          </div>
        )
      })}{" "}
    </div>
  )
}
