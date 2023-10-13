// React
import React from "react"
// Next
import Image from "next/image"
import { useRouter } from "next/router"
// Images
import TwitterDark from "../../../public/TwitterDark.svg"
import TelegramDark from "../../../public/TelegramDark.svg"
import LensDark from "../../../public/LensDark.svg"
import GithubDark from "../../../public/GithubDark.svg"

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
              className={`${router.route !== "/" ? "footer-links-pc" : "footer-links"}`}
            >
              Contact Me
            </button>
          </div>
          <div className="ml-10">
            <h1 className="md:mb-[25px] mb-[12px] font-semibold">Follow Me</h1>
            <div className="flex flex-row space-x-4">
              {" "}
              <a href="https://twitter.com/0xUkhezo" target="_blank">
                <Image width={24} height={24} alt="Token Image" src={TwitterDark.src} />
              </a>
              <a href="https://hey.xyz/u/ukhezo" target="_blank">
                <Image width={24} height={24} alt="Token Image" src={LensDark.src} />
              </a>
              <a href="https://t.me/Ukhezo" target="_blank">
                <Image width={24} height={24} alt="Token Image" src={TelegramDark.src} />
              </a>{" "}
              <a href="https://github.com/0xukhezo" target="_blank">
                <Image width={24} height={24} alt="Token Image" src={GithubDark.src} />
              </a>
            </div>
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
