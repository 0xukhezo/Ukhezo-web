import Image from "next/image"
import React from "react"
import SeparatorImage from "../../../public/Separator.png"
import FormCard from "../Cards/Contact/FormCard"

export default function Contact() {
  return (
    <main className="grid grid-cols-6 ">
      <div className="col-span-2">
        <h1>CONTACT INFO</h1>
        <div className="flex mt-[28px] items-center">
          <div className="rounded-xl bg-gradient-to-tl from-[#3f3f3f] to-[#141414] items-center p-4 mr-8 min-w-[72px]">
            <Image src={SeparatorImage} alt="Separator" width={40} height={40} />
          </div>
          <div>
            <h2>MAIL ME</h2>
            <p>alvaro.teran97@gmail.com</p>
          </div>{" "}
        </div>
        <div className="flex mt-[64px] items-center">
          <div className="rounded-xl bg-gradient-to-tl from-[#3f3f3f] to-[#141414] items-center p-4 mr-8 min-w-[72px]">
            <Image
              src={SeparatorImage}
              alt="Separator"
              width={40}
              height={40}
              className="rounded-xl"
            />{" "}
          </div>
          <div>
            <h2>CONTACT US</h2>
            <p>+34 660 689 258</p>
          </div>{" "}
        </div>
        <div className="flex mt-[64px] items-center">
          <div className="rounded-xl bg-gradient-to-tl from-[#3f3f3f] to-[#141414] items-center p-4 mr-8 min-w-[72px]">
            <Image
              src={SeparatorImage}
              alt="Separator"
              width={40}
              height={40}
              className="rounded-xl"
            />{" "}
          </div>
          <div>
            <h2>LOCATION</h2>
            <p>
              Madrid 28045,<br></br> Spain
            </p>
          </div>
        </div>
        <div className="mt-[64px]">
          <h1>SOCIAL INFO</h1>
          <div className="flex mt-[28px] items-center">
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
              className="text-black rounded-full"
            >
              <div className="rounded-full bg-gradient-to-tl from-[#3f3f3f] to-[#141414] items-center p-4 mr-8  hover:bg-gradient-to-tl hover:from-white hover:to-white">
                <Image height={40} width={40} src={SeparatorImage.src} alt="Alvaro Teran Image" />
              </div>{" "}
            </a>
          </div>
        </div>
      </div>{" "}
      <div className="col-span-4">
        <FormCard />
      </div>
    </main>
  )
}
