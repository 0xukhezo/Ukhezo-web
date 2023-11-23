import { ReactElement, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import Star from "../../../../public/Star.svg"

type SquarePropsCard = {
  image?: string
  h2: string
  h1: string
  classNameMain: string
}

export default function SquareCard({ image, h2, h1, classNameMain }: SquarePropsCard) {
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
          <div className="flex flex-col gap-y-[12px] items-center w-full px-4 py-5 h-full justify-between">
            {haveImage ? (
              <Image
                height={82}
                width={82}
                src={image as string}
                alt="Alvaro Teran Image"
                className="rounded-xl"
              />
            ) : (
              <div className="rounded-3xl bg-gradient-to-b from-[#3f3f3f] to-[#141414] flex  w-full p-2.5 justify-around">
                <a
                  href="https://github.com/0xukhezo"
                  target="_blank"
                  className="hover:bg-white text-black rounded-full"
                  onMouseEnter={() => setIsHovered(false)}
                  onMouseLeave={() => setIsHovered(true)}
                >
                  <Image
                    height={68}
                    width={68}
                    src={Star.src}
                    alt="Alvaro Teran Image"
                    className="rounded-tl-3xl rounded-br-3xl"
                  />
                </a>
                <a
                  href="https://twitter.com/0xUkhezo"
                  target="_blank"
                  className="hover:bg-white text-black rounded-full"
                  onMouseEnter={() => setIsHovered(false)}
                  onMouseLeave={() => setIsHovered(true)}
                >
                  <Image
                    height={68}
                    width={68}
                    src={Star.src}
                    alt="Alvaro Teran Image"
                    className="rounded-tl-3xl rounded-br-3xl"
                  />
                </a>
              </div>
            )}
            <div className="relative flex w-full justify-center xs:justify-start items-center mt-4">
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
                className={`absolute right-0 ${
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
