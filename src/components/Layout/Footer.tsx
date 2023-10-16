// React
import React from "react"
// Next
import Image from "next/image"
import { useRouter } from "next/router"
import { footerNavigation } from "../../../constants/Constants"
import { FooterNavigationType } from "@/types/Types"

export default function Footer() {
  const router = useRouter()

  return (
    <div className="bg-black text-white pt-[57px] xl:pt-[114px] px-[20px] sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[152px]">
      <div className="centered">
        <div className="flex justify-start px-10 flex-row">
          <div>
            <h1 className="md:mb-[25px] mb-[12px] font-semibold">Contact</h1>
            <button
              onClick={() =>
                router.push("mailto:ukhezo.web3@gmail.com?subject=Contact%20ukhezo%20")
              }
              className={`text-start ${router.route !== "/" ? "footer-links-pc" : "footer-links"}`}
            >
              Contact Me
            </button>
          </div>
          <div className="ml-10">
            <h1 className="md:mb-[25px] mb-[12px] font-semibold">Follow Me</h1>
            <div className="flex flex-row space-x-4">
              {footerNavigation.map((link: FooterNavigationType) => {
                return (
                  <a href={link.href} target="_blank">
                    <Image width={24} height={24} alt="Token Image" src={link.src} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-around sm:justify-start md:justify-end mt-[40px] border-b-1 border-white mb-40"></div>
        {/* <div className="pb-[100px] pt-[42px] text-white text-center">
          Copyright © 2023 Ukhezo. All Rights Reserved
        </div> */}
      </div>
    </div>
  )
}
