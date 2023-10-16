// React
import React, { useEffect, useRef } from "react"
// Next
import Image from "next/image"
// Constants
import { poaps } from "../../../constants/Constants"

function Poaps() {
  const logosSlideRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (logosSlideRef.current) {
      const logosSlideCopy = logosSlideRef.current.cloneNode(true)
      const logosContainer = document.querySelector(".logos")
      if (logosContainer) {
        logosContainer.appendChild(logosSlideCopy)
      }
    }
  }, [logosSlideRef])

  return (
    <>
      <div className="logos w-screen ">
        <div className="logos-slide" ref={logosSlideRef}>
          {poaps.map((poap: any, index: number) => (
            <div key={index}>
              <Image
                src={poap}
                alt={`Image ${index}`}
                height={96}
                width={96}
                className="max-h-[96px] max-w-[96px]"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Poaps
