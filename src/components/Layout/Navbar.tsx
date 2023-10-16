// Next
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"
// Icons
import { Disclosure } from "@headlessui/react"
// Images
import Logo from "../../../public/Logo.png"
import { NavigationType } from "@/types/Types"
import { navigation } from "../../../constants/Constants"

export default function Navbar() {
  const router = useRouter()

  return (
    // sticky top-0 z-50
    <Disclosure as="nav" id="navbar" className="primary-navigation">
      <>
        <div className="mx-auto pt-5 bg-black hidden sm:block">
          <div className="flex h-24 items-center mx-10 justify-evenly">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src={Logo.src}
                  alt="Your Company"
                  width={86}
                  height={86}
                  className="logo rounded-full hidden sm:block"
                />
              </Link>
            </div>
            <div className="flex items-center ml-28">
              <div className="hidden sm:ml-6 md:block">
                <div className="flex space-x-10 text-white ">
                  {navigation.map((link: NavigationType) => {
                    return (
                      <Link
                        href={router.route !== "/" ? `/${link.href}` : `${link.href}`}
                        className="underline-hover hover:text-pink"
                      >
                        {link.name}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-9 text-white items-center">
                <button
                  onClick={() =>
                    router.push("mailto:ukhezo.web3@gmail.com?subject=Contact%20ukhezo%20")
                  }
                  className="underline-hover hover:text-pink"
                >
                  Contact Me
                </button>
                <a href="https://twitter.com/0xUkhezo" target="_blank">
                  <button className="underline-hover hover:text-pink">Join my X</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden fixed inset-x-0 bottom-0 w-full z-50 ">
          <div className="mx-5 flex items-center justify-between mb-[25px] bg-black text-white p-5 rounded-lg border-white border-1">
            {navigation.map((link: NavigationType) => {
              return (
                <Link
                  href={router.route !== "/" ? `/${link.href}` : `${link.href}`}
                  className="underline-hover hover:text-pink"
                >
                  {link.name}
                </Link>
              )
            })}
          </div>
        </div>
      </>
    </Disclosure>
  )
}
