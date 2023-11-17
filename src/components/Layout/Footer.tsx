// React
import React from "react"
// Next
import Image from "next/image"
import { useRouter } from "next/router"
// Images
import Logo from "../../../public/Logo.png"
// Types
import { FooterNavigationType, NavigationType } from "@/types/Types"
import { navigation } from "../../../constants/Constants"
import Link from "next/link"

export default function Footer() {
  const router = useRouter()

  return (
    <div className="text-white pt-[57px] xl:pt-[114px] px-[20px] sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[152px]">
      <div className="centered">
        <Image
          src={Logo.src}
          alt="Your Company"
          width={27}
          height={27}
          className="logo rounded-full mb-8 mx-auto"
        />
        <div className="flex justify-center flex-row ">
          <div className="flex flex-row space-x-4 ">
            {navigation.map((link: NavigationType) => {
              return (
                <Link href={link.href} key={link.href} className={"navLink"}>
                  {link.name.toUpperCase()}
                </Link>
              )
            })}
          </div>
        </div>
        <div className="pb-[100px] pt-[42px] text-white text-center">
          © All rights reserved by <span className="text-yellow-300">Alvaro Teran</span>
        </div>
      </div>
    </div>
  )
}
