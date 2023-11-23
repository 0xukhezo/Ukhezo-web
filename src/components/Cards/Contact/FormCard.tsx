import React from "react"
import Image from "next/image"

import Icon from "../../../../public/Icon3.png"
import ContactForm from "@/components/Form/ContactForm"

export default function FormCard() {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-[#262626] to-[#141414] h-full px-8 pb-4">
      <div className="flex w-full ">
        <div className="relative flex w-full justify-start items-center ">
          <h1 className="mb-3 font-semibold text-5xl mt-10">
            Let's work <span className="text-blue-500">together</span>
          </h1>{" "}
        </div>
        <Image
          height={30}
          width={30}
          src={Icon.src}
          alt="Star"
          className="mr-14 max-h-[80px] hidden md:block"
        />
      </div>
      <ContactForm />
    </div>
  )
}
