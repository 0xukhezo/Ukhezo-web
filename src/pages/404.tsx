// React
import React from "react"
// Components
import Footer from "@/components/Layout/Footer"
import Navbar from "@/components/Layout/Navbar"

export default function Error() {
  return (
    <main className="xl:py-[88px] px-[20px] sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[152px]">
      <Navbar />
      <div className="text-center mt-[42px] lg:mt-[132px]">
        <h1 className="gradient-container404 font-bold text-[158px] lg:text-[258px]">404</h1>
        <h2 className="text-7xl text-greenDark font-semibold max-w-[760px] mx-auto">
          The page you are looking for doesn’t exist
        </h2>
        <p className="text-lg font-normal mt-[24px] text-neutral6">
          Try to use a correct url or go back to homepage to start again
        </p>
      </div>

      <Footer />
    </main>
  )
}
