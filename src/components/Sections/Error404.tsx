import React from "react"

export default function Error404() {
  return (
    <div className="text-center">
      <h1 className="gradient-container404 font-bold text-[158px] lg:text-[208px]">404</h1>
      <h2 className="text-7xl text-greenDark font-semibold max-w-[760px] mx-auto">
        The page you are looking for doesn’t exist
      </h2>
      <p className="text-lg font-normal mt-[24px] text-neutral6">
        Try to use a correct url or go back to homepage to start again
      </p>
    </div>
  )
}
