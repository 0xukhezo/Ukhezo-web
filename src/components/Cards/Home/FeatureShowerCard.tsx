import React from "react"
import Image from "next/image"
import SeparatorImage from "../../../../public/Separator.png"

export default function FeatureShowerCard() {
  return (
    <div className="logos-container rounded-full h-full bg-gradient-to-bl from-[#3f3f3f] to-[#141414] items-center flex py-6 lg:py-0">
      <div className="logos-slider text-gray-400 text-sm">
        <div className="shower-text flex items-center">
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={12}
            height={12}
            className="mx-2"
            loading="eager"
          />{" "}
          LATEST WORK AND <span className="text-white ml-1"> FEATURED</span>
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={12}
            height={12}
            className="mx-2"
            loading="eager"
          />{" "}
          LATEST WORK AND <span className="text-white ml-1"> FEATURED</span>
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={12}
            height={12}
            className="mx-2"
            loading="eager"
          />{" "}
          LATEST WORK AND <span className="text-white ml-1"> FEATURED</span>
        </div>
        <div className="shower-text flex items-center">
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={12}
            height={12}
            className="mx-2"
            loading="eager"
          />{" "}
          LATEST WORK AND <span className="text-white ml-1"> FEATURED</span>
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={12}
            height={12}
            className="mx-2"
            loading="eager"
          />{" "}
          LATEST WORK AND <span className="text-white ml-1"> FEATURED</span>
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={12}
            height={12}
            className="mx-2"
            loading="eager"
          />{" "}
          LATEST WORK AND <span className="text-white ml-1"> FEATURED</span>
        </div>
        <div className="shower-text flex items-center lg:hidden">
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={12}
            height={12}
            className="mx-2"
            loading="eager"
          />{" "}
          LATEST WORK AND <span className="text-white ml-1"> FEATURED</span>
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={12}
            height={12}
            className="mx-2"
            loading="eager"
          />{" "}
          LATEST WORK AND <span className="text-white ml-1"> FEATURED</span>
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={12}
            height={12}
            className="mx-2"
            loading="eager"
          />{" "}
          LATEST WORK AND <span className="text-white ml-1"> FEATURED</span>
        </div>
      </div>
    </div>
  )
}
