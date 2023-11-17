import React from "react"
import Image from "next/image"
import SeparatorImage from "../../../public/Separator.png"

export default function HomeFeatureShowerCard() {
  return (
    <div className="logos-container rounded-full h-full bg-lightGray items-center flex">
      <div className="logos-slider">
        <div className="shower-text flex items-center">
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={10}
            height={10}
            className="mx-2"
            loading="eager"
          />{" "}
          LATEST WORK AND <span className="text-gray-500 ml-1"> FEATURED</span>
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={10}
            height={10}
            className="mx-2"
            loading="eager"
          />{" "}
          LATEST WORK AND <span className="text-gray-500 ml-1"> FEATURED</span>
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={10}
            height={10}
            className="mx-2"
            loading="eager"
          />{" "}
          LATEST WORK AND <span className="text-gray-500 ml-1"> FEATURED</span>
        </div>
        <div className="shower-text flex items-center">
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={10}
            height={10}
            className="mx-2"
            loading="eager"
          />{" "}
          LATEST WORK AND <span className="text-gray-500 ml-1"> FEATURED</span>
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={10}
            height={10}
            className="mx-2"
            loading="eager"
          />{" "}
          LATEST WORK AND <span className="text-gray-500 ml-1"> FEATURED</span>
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={10}
            height={10}
            className="mx-2"
            loading="eager"
          />{" "}
          LATEST WORK AND <span className="text-gray-500 ml-1"> FEATURED</span>
        </div>
      </div>
    </div>
  )
}
