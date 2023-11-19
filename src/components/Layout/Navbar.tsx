// Next
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"
// Icons
import { Disclosure } from "@headlessui/react"
// Images
import Logo from "../../../public/Logo.png"
// Types
import { NavigationType } from "@/types/Types"
// Constants
import { navigation } from "../../../constants/Constants"
import Footer from "./Footer"
import { ReactElement } from "react"

type NavbarProps = {
  page: ReactElement
}

export default function Navbar({ page }: NavbarProps) {
  const router = useRouter()

  return (
    <>
      <Disclosure as="nav" id="navbar" className="primary-navigation">
        <>
          <div className="mx-auto pt-7 bg-mainBackground hidden sm:block">
            <div className="flex items-center justify-evenly">
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image
                    src={Logo.src}
                    alt="Your Company"
                    width={27}
                    height={27}
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
                          key={link.href}
                          className={router.asPath !== link.href ? "navLink" : "text-white"}
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
                    className="bg-lightGray rounded-2xl px-8 py-2.5 font-bold navButton"
                  >
                    Let's talk
                  </button>
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
                    key={link.href}
                    className={router.asPath !== link.href ? "navLink" : "text-white"}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </>
      </Disclosure>
      <main className="mt-[80px] mb-[40px] w-[1170px] mx-auto">{page}</main>
      <Footer />
    </>
  )
}
