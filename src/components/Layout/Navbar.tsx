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
import { ReactElement, useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

type NavbarProps = {
  page: ReactElement
}

export default function Navbar({ page }: NavbarProps) {
  const [openNavBar, setOpenNavBar] = useState<boolean>(false)

  const router = useRouter()

  return (
    <>
      <div className="line-animation"></div>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className=" mx-auto md:pt-6 lg:px-18 px-6 max-w-[1700px]">
              <div className="flex items-center md:justify-evenly justify-between">
                <div className="flex-shrink-0">
                  <Link href="/" className="flex items-center">
                    <Image
                      width={24}
                      height={24}
                      alt="Token Image"
                      src={Logo.src}
                      className="rounded-full mt-10 md:mt-0"
                    />
                  </Link>
                </div>

                <div className="flex items-center ml-28">
                  <div className="hidden md:ml-6 md:block">
                    <div className="flex text-center items-center  text-sm md:text-base gap-x-20">
                      {navigation.map((link: NavigationType, index: number) => {
                        return (
                          <>
                            <Link
                              href={link.href}
                              key={index}
                              className={
                                router.asPath !== `/${link.href}` ? "navLink" : "text-white"
                              }
                            >
                              {link.name}
                            </Link>
                          </>
                        )
                      })}
                    </div>{" "}
                  </div>
                </div>
                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-9 text-white items-center">
                    <Link
                      href="contact"
                      className="bg-lightGray rounded-2xl px-8 py-2.5 font-bold navButton"
                    >
                      Let's talk
                    </Link>
                  </div>
                </div>

                <div className="-mr-2 flex md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md  text-gray-400 hover:text-main outline-none  mt-10 md:mt-0">
                    {open ? (
                      <XMarkIcon
                        className="block h-6 w-6"
                        aria-hidden="true"
                        onClick={() => setOpenNavBar(false)}
                      />
                    ) : (
                      <Bars3Icon
                        className="block h-6 w-6"
                        aria-hidden="true"
                        onClick={() => setOpenNavBar(true)}
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden h-screen flex flex-col justify-between">
              <div className="space-y-1 pb-3 pt-2">
                {navigation.map((link: NavigationType, index: number) => {
                  return (
                    <Link href={link.href} key={index}>
                      <Disclosure.Button
                        className={
                          router.asPath !== "/"
                            ? router.asPath.slice(1) === link.href
                              ? "block w-full text-start px-6 py-5 border-l-4"
                              : "block px-6 py-5 w-full text-start"
                            : router.asPath === link.href
                            ? "block w-full text-start px-6 py-5 border-l-4"
                            : "block px-6 py-5 w-full text-start "
                        }
                        onClick={() => setOpenNavBar(false)}
                      >
                        {link.name}
                      </Disclosure.Button>
                    </Link>
                  )
                })}
              </div>
              {router.asPath.slice(1) !== "contact" && (
                <div className="mb-24 pt-2">
                  <Link href="/contact">
                    <Disclosure.Button
                      className="w-full text-start px-6 py-5"
                      onClick={() => setOpenNavBar(false)}
                    >
                      Let's talk
                    </Disclosure.Button>
                  </Link>
                </div>
              )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>{" "}
      {!openNavBar && (
        <>
          <main className="mt-[40px] lg:mt-[80px] mb-[40px] max-w-[1170px] mx-auto loading">
            {page}
          </main>{" "}
          <Footer />{" "}
        </>
      )}
    </>
  )
}
