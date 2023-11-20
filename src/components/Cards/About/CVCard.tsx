import { cvType } from "@/types/Types"
import React, { useState } from "react"

type CVCardProps = {
  info: cvType[]
  className: string
}

export default function CVCard({ info, className }: CVCardProps) {
  return (
    <div className={className}>
      <div className="flex items-center mb-[20px] justify-between">
        <h1>EXPERIENCE</h1>
      </div>
      {info.map((infoData: cvType) => {
        return (
          <div className="mt-4" key={infoData.title}>
            <h3 className="text-sm">{infoData.date}</h3>
            <h2 className="my-1 text-lg">{infoData.title}</h2>
            <p className="text-sm">{infoData.location}</p>
          </div>
        )
      })}{" "}
    </div>
  )
}
