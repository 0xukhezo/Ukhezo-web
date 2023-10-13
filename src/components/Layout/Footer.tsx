// React
import React from "react"
// Next
import Image from "next/image"
import { useRouter } from "next/router"

export default function Footer() {
  const router = useRouter()

  return (
    <div className="bg-black text-white pt-[57px] xl:pt-[114px] px-[20px] sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[152px]">
      <div className="centered">
        <div className="flex justify-start px-10 flex-col md:flex-row">
          <div>
            <h1 className="md:mb-[25px] mb-[12px] font-semibold">Contact</h1>
            <button
              onClick={() =>
                router.push("mailto:ukhezo.web3@gmail.com?subject=Contact%20ukhezo%20")
              }
              className={`${router.route !== "/" ? "footer-links-pc" : "footer-links"}`}
            >
              Contact Us
            </button>
          </div>
          <div className="mt-10 md:mt-0 ml-10">
            <h1 className="md:mb-[25px] mb-[12px] font-semibold">Follow Me</h1>
            <a
              href="https://twitter.com/0xUkhezo"
              target="_blank"
              className={`${router.route !== "/" ? "footer-links-pc" : "footer-links"}`}
            >
              X
            </a>
          </div>
        </div>
        <div className="flex justify-around sm:justify-start md:justify-end mt-[40px] border-b-1 border-[#d1d1d1] pb-[17px]"></div>
        <div className="pb-[100px] pt-[42px] text-white text-center">
          Copyright © 2023 Ukhezo. All Rights Reserved
        </div>
      </div>
    </div>
  )
}
