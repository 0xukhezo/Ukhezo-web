import React from "react"
import { Bars3Icon } from "@heroicons/react/24/outline"

export default function ServiceCard() {
  return (
    <main className="rounded-3xl bg-gradient-to-br from-[#3f3f3f] to-[#141414] flex justify-center h-full w-full flex flex-col grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 xl:grid-rows-4 xl:grid-cols-1 py-10 xl:py-8 gap-[40px] xl:gap-[0px]">
      <div className="flex items-center mx-auto xl:ml-12">
        <Bars3Icon className="h-9 w-9 xl:mr-6 mr-4 " aria-hidden="true" />
        <h2 className="text-xl">CUSTOM WEBSITES</h2>
      </div>
      <div className="flex items-center mx-auto xl:ml-12">
        <Bars3Icon className="h-9 w-9 xl:mr-6 mr-4" aria-hidden="true" />
        <h2 className="text-xl">E-COMMERCE</h2>
      </div>{" "}
      <div className="flex items-center mx-auto xl:ml-12">
        <Bars3Icon className="h-9 w-9 xl:mr-6 mr-4" aria-hidden="true" />
        <h2 className="text-xl">WEB3 WEBSITES</h2>
      </div>{" "}
      <div className="flex items-center mx-auto xl:ml-12">
        <Bars3Icon className="h-9 w-9 xl:mr-6 mr-4" aria-hidden="true" />
        <h2 className="text-xl">SMART CONTRACTS</h2>
      </div>{" "}
    </main>
  )
}
