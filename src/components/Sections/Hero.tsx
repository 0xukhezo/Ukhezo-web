// React
import React from "react"
// Components
import Poaps from "./Poaps"

export default function Hero() {
  // const [poaps, setPoaps] = useState<any>([])
  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     "x-api-key": `${process.env.NEXT_PUBLIC_POAP_API}`,
  //   },
  // }

  // const fetchPoaps = () => {
  //   fetch(`https://api.poap.tech/actions/scan/${process.env.NEXT_PUBLIC_ADDRESS}`, options)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       const filteredPoaps = response.filter((poap: any) => {
  //         return (
  //           poap.tokenId !== "6296636" &&
  //           poap.tokenId !== "6598905" &&
  //           poap.tokenId !== "6729137" &&
  //           poap.tokenId !== "6217086" &&
  //           poap.tokenId !== "6546244" &&
  //           poap.tokenId !== "6465718" &&
  //           poap.tokenId !== "6433423" &&
  //           poap.tokenId !== "6621122" &&
  //           poap.tokenId !== "6642725"
  //         )
  //       })
  //       setPoaps(filteredPoaps)
  //     })
  //     .catch((err) => console.error(err))
  // }

  // useEffect(() => {
  //   fetchPoaps()
  // }, [])

  return (
    <div className="text-center py-10 lg:mb-10" id="me">
      <h1 className="text-white font-semibold text-4xl py-4">About me</h1>
      <div className="max-w-[800px] mx-auto mt-[40px] px-10">
        I am a Front-End Developer focused on web3 and new technologies. My professional career
        started in 2020 as a Full-Stack Developer using React and NodeJS with Express and taking a
        more microservices and front-end oriented direction. After some time working and learning
        skills like data display, redux and connecting with various APIs, I decided to focus on
        web3.
      </div>
      <div className="max-w-[800px] mx-auto mt-[40px] px-10">
        After this decision, I have been a participant in several ETH Global hackathons, winning
        several of them in protocols like AAVE, Lens, Uniswap or The Graph. At the same time I
        worked at Cryptoplaza as Front-End and developed personal projects in which I expanded my
        skills.
      </div>
      <Poaps />
    </div>
  )
}
