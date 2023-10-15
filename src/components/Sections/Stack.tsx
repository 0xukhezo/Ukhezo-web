import React from "react"

export default function Stack() {
  return (
    <div className="text-center mb-10" id="stack">
      <h1 className="font-semibold text-4xl py-4">Stack</h1>
      <div className="grid lg:grid-cols-3">
        <div className="max-w-[800px] mx-auto mt-[40px] px-10 flex flex-col">
          <h2 className="font-semibold text-2xl py-4">Daily drivers</h2>
          <span>NextJS</span>
          <span>React</span>
          <span>Redux</span>
          <span>TypeScript</span>
          <span>JavaScript</span>
        </div>
        <div className="max-w-[800px] mx-auto mt-[40px] px-10 flex flex-col">
          <h2 className="font-semibold text-2xl py-4">Growing On</h2>
          <span>Solidity</span>
          <span>Rust</span>
        </div>
        <div className="max-w-[800px] mx-auto mt-[40px] px-10 flex flex-col">
          <h2 className="font-semibold text-2xl py-4">Style and Animations</h2>
          <span>Tailwind</span>
          <span>Material MUI</span>
          <span>CSS</span>
        </div>
      </div>
    </div>
  )
}
