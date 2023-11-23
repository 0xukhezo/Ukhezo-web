import Image from "next/image"
import React from "react"
import SeparatorImage from "../../../public/Separator.png"
import FormCard from "../Cards/Contact/FormCard"
import { EnvelopeIcon, PhoneIcon, HomeIcon } from "@heroicons/react/24/outline"

export default function Contact() {
  return (
    <main className="grid grid-cols-6 px-10 xl:px-0">
      <div className="md:col-span-2 col-span-6 grid grid-cols-6 md:flex md:flex-col gap-[24px] md:gap-[0px]">
        <h1 className="col-span-6 xs:text-center md:text-start text-xl text-white">
          CONTACT INFO
        </h1>

        <div className="flex md:mt-[28px] items-center col-span-6 xs:col-span-3 xs:justify-center md:justify-start">
          <div className="rounded-xl bg-gradient-to-tl from-[#3f3f3f] to-[#141414] items-center md:p-4 p-4 md:mr-8 mr-4 md:min-w-[72px] md:min-h-[72px] items-center flex justify-center">
            <EnvelopeIcon
              className="md:h-[30px] md:w-[30px] h-[24px] w-[24px]"
              aria-hidden="true"
            />
          </div>
          <div>
            <h2 className="md:text-lg text-white">MAIL ME</h2>
            <p className="text-sm md:text-base">alvaro.teran97@gmail.com</p>
          </div>{" "}
        </div>
        <div className="flex md:mt-[50px] items-center col-span-6 xs:col-span-3 xs:justify-center md:justify-start">
          <div className="rounded-xl bg-gradient-to-tl from-[#3f3f3f] to-[#141414] items-center md:p-4 p-4 md:mr-8 mr-4 md:min-w-[72px] md:min-h-[72px] items-center flex justify-center">
            <PhoneIcon className="md:h-[30px] md:w-[30px] h-[24px] w-[24px]" aria-hidden="true" />
          </div>
          <div>
            <h2 className="md:text-lg text-white">CONTACT US</h2>
            <p className="text-sm md:text-base">+34 660 689 258</p>
          </div>{" "}
        </div>
        <div className="flex md:mt-[50px] items-center col-span-6 xs:justify-center md:justify-start">
          <div className="rounded-xl bg-gradient-to-tl from-[#3f3f3f] to-[#141414] items-center md:p-4 p-4 md:mr-8 mr-4 md:min-w-[72px] md:min-h-[72px] items-center flex justify-center">
            <HomeIcon className="md:h-[30px] md:w-[30px] h-[24px] w-[24px]" aria-hidden="true" />
          </div>
          <div>
            <h2 className="md:text-lg text-white">LOCATION</h2>
            <p className="text-sm md:text-base">
              Madrid 28045,<br></br> Spain
            </p>
          </div>
        </div>

        <div className="mb-[64px] md:mt-[64px] col-span-6 ">
          <h1 className="text-xl text-white xs:text-center md:text-start">SOCIAL INFO</h1>
          <div className="flex mt-[28px] items-center justify-evenly">
            <a
              href="https://github.com/0xukhezo"
              target="_blank"
              className="text-black rounded-full"
            >
              <div className="rounded-full bg-gradient-to-tl from-[#3f3f3f] to-[#141414] items-center p-4 mr-8  hover:bg-gradient-to-tl hover:from-white hover:to-white">
                <Image height={40} width={40} src={SeparatorImage.src} alt="Alvaro Teran Image" />
              </div>{" "}
            </a>
            <a
              href="https://github.com/0xukhezo"
              target="_blank"
              className="text-black rounded-full"
            >
              <div className="rounded-full bg-gradient-to-tl from-[#3f3f3f] to-[#141414] items-center p-4 mr-8  hover:bg-gradient-to-tl hover:from-white hover:to-white">
                <Image height={40} width={40} src={SeparatorImage.src} alt="Alvaro Teran Image" />
              </div>{" "}
            </a>
            <a
              href="https://github.com/0xukhezo"
              target="_blank"
              className="text-black rounded-full "
            >
              <div className="rounded-full bg-gradient-to-tl from-[#3f3f3f] to-[#141414] items-center p-4 mr-8  hover:bg-gradient-to-tl hover:from-white hover:to-white">
                <Image height={40} width={40} src={SeparatorImage.src} alt="Alvaro Teran Image" />
              </div>{" "}
            </a>
          </div>
        </div>
      </div>{" "}
      <div className="col-span-6 md:col-span-4 sm:ml-12 lg:ml-0">
        <FormCard />
      </div>
    </main>
  )
}
