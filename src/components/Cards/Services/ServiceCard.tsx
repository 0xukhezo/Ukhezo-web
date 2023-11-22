import React from "react"
import { Bars3Icon } from "@heroicons/react/24/outline"

export default function ServiceCard() {
  return (
    <main className="rounded-3xl bg-gradient-to-br from-[#3f3f3f] to-[#141414] flex justify-center h-full w-full flex flex-col gap-y-[100px]">
      <div className="flex items-center ml-20">
        <Bars3Icon className="h-9 w-9 mr-6" aria-hidden="true" />
        <h2 className="text-xl">CUSTOM WEBSITES</h2>
      </div>
      <div className="flex items-center ml-20">
        <Bars3Icon className="h-9 w-9 mr-6" aria-hidden="true" />
        <h2 className="text-xl">E-COMMERCE</h2>
      </div>{" "}
      <div className="flex items-center ml-20">
        <Bars3Icon className="h-9 w-9 mr-6" aria-hidden="true" />
        <h2 className="text-xl">WEB3 WEBSITES</h2>
      </div>{" "}
      <div className="flex items-center ml-20">
        <Bars3Icon className="h-9 w-9 mr-6" aria-hidden="true" />
        <h2 className="text-xl">SMART CONTRACTS</h2>
      </div>{" "}
    </main>
  )
}
