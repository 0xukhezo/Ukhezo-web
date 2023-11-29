import { ReactElement, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import Star from "../../../../public/Star.svg"
import Github from "../../../../public/Github.svg"
import Twitter from "../../../../public/Twitter.svg"

type SquarePropsCard = {
  image?: string
  h2: string
  h1: string
  classNameMain: string
  classNameContainer: string
  imageWidth: number
  imageHeight: number
}

export default function SquareCard({
  image,
  h2,
  h1,
  classNameMain,
  classNameContainer,
  imageHeight,
  imageWidth,
}: SquarePropsCard) {
  const [isHovered, setIsHovered] = useState(false)
  const [haveImage, setHaveImage] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (image) {
      setHaveImage(true)
    }
    setLoading(true)
  }, [])

  return (
    <>
      {loading && (
        <div
          className={classNameMain}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={classNameContainer}>
            {haveImage ? (
              <Image
                height={imageHeight}
                width={imageWidth}
                src={image as string}
                alt="Alvaro Teran Image"
                className="rounded-xl h-full lg:max-w-[282px]"
              />
            ) : (
              <div className="rounded-3xl bg-gradient-to-br from-[#3f3f3f] to-[#141414] flex h-2/4 w-full p-2.5 justify-around items-center z-50">
                {/* <a
                  href="https://github.com/0xukhezo"
                  target="_blank"
                  className=" text-black rounded-full z-50"
                  onMouseEnter={() => setIsHovered(false)}
                  onMouseLeave={() => setIsHovered(true)}
                > */}
                <Image
                  height={48}
                  width={48}
                  src={Github.src}
                  alt="Alvaro Teran Image"
                  className=" rounded-full"
                />
                {/* </a> */}
                {/* <a
                  href="https://twitter.com/0xUkhezo"
                  target="_blank"
                  className="rounded-full"
                  onMouseEnter={() => setIsHovered(false)}
                  onMouseLeave={() => setIsHovered(true)}
                > */}
                <Image
                  height={48}
                  width={48}
                  src={Twitter.src}
                  alt="Alvaro Teran Image"
                  className=" rounded-full min-w-[48px] min-h-[48px]"
                />
                {/* </a> */}
              </div>
            )}
            <div className="relative flex w-full justify-center xs:justify-start items-center h-1/4">
              <div className="mb-0.5">
                <h2 className="mb-1.5 text-gray-400 text-xs ">{h2}</h2>
                <h1 className="mb-3 font-semibold text-xl">{h1}</h1>{" "}
              </div>

              <Image
                height={46}
                width={42}
                src={Star.src}
                id="star"
                alt="Alvaro Teran Image"
                className={`absolute right-0 bottom-4 ${
                  isHovered ? "opacity-100" : "opacity-40"
                } transition-opacity duration-300 hidden xs:block`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
