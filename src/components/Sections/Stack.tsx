// React
import React from "react"

export default function Stack() {
  return (
    <div className="text-center mb-10" id="stack">
      <h1 className="font-semibold text-5xl py-4 font-anton tracking-widest">Stack</h1>
      <div className="grid lg:grid-cols-3">
        <div className="max-w-[800px] mx-auto mt-[40px] px-10 hiddenShowLeft">
          <h2 className="font-semibold text-2xl py-4 font-anton tracking-wider">Daily drivers</h2>
          <div className="flex flex-col font-bitter text-xl gap-y-1">
            <span>NextJS</span>
            <span>React</span>
            <span>Redux</span>
            <span>TypeScript</span>
            <span>JavaScript</span>
          </div>
        </div>
        <div className="max-w-[800px] mx-auto mt-[40px] px-10 flex flex-col hiddenShowUp">
          <h2 className="font-semibold text-2xl py-4 font-anton tracking-wider">Growing On</h2>{" "}
          <div className="flex flex-col font-bitter text-xl gap-y-1">
            <span>Solidity</span>
            <span>Rust</span>{" "}
          </div>
        </div>
        <div className="max-w-[800px] mx-auto mt-[40px] px-10 flex flex-col hiddenShowRight">
          <h2 className="font-semibold text-2xl py-4 font-anton tracking-wider">
            Style and Animations
          </h2>
          <div className="flex flex-col font-bitter text-xl gap-y-1">
            <span>Tailwind</span>
            <span>Material MUI</span>
            <span>CSS</span>{" "}
          </div>
        </div>
      </div>
    </div>
  )
}
