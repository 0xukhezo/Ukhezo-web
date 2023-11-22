import React from "react"
import Image from "next/image"
import SeparatorImage from "../../../../public/Separator.png"

export default function FeatureShowerCard() {
  return (
    <div className="logos-container rounded-full h-full bg-lightGray items-center flex py-6 lg:py-0">
      <div className="logos-slider">
        <div className="shower-text flex items-center">
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={12}
            height={12}
            className="mx-2"
            loading="eager"
          />{" "}
          LATEST WORK AND <span className="text-blue-500 ml-1"> FEATURED</span>
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={12}
            height={12}
            className="mx-2"
            loading="eager"
          />{" "}
          LATEST WORK AND <span className="text-blue-500 ml-1"> FEATURED</span>
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={12}
            height={12}
            className="mx-2"
            loading="eager"
          />{" "}
          LATEST WORK AND <span className="text-blue-500 ml-1"> FEATURED</span>
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
          LATEST WORK AND <span className="text-blue-500 ml-1"> FEATURED</span>
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={12}
            height={12}
            className="mx-2"
            loading="eager"
          />{" "}
          LATEST WORK AND <span className="text-blue-500 ml-1"> FEATURED</span>
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={12}
            height={12}
            className="mx-2"
            loading="eager"
          />{" "}
          LATEST WORK AND <span className="text-blue-500 ml-1"> FEATURED</span>
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
          LATEST WORK AND <span className="text-blue-500 ml-1"> FEATURED</span>
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={12}
            height={12}
            className="mx-2"
            loading="eager"
          />{" "}
          LATEST WORK AND <span className="text-blue-500 ml-1"> FEATURED</span>
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={12}
            height={12}
            className="mx-2"
            loading="eager"
          />{" "}
          LATEST WORK AND <span className="text-blue-500 ml-1"> FEATURED</span>
        </div>
      </div>
    </div>
  )
}
