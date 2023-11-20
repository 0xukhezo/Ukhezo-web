import React from "react"
import Image from "next/image"

import Logo from "../../../public/Logo.png"
import Separator from "../../../public/Separator.png"
import Link from "next/link"
import { awards, cvInfoEducation, cvInfoExperience, skills } from "../../../constants/Constants"
import { cvType } from "@/types/Types"

export default function Credentials() {
  return (
    <main className="grid grid-cols-9">
      <div className="col-span-3 h-fit sticky top-[100px] ">
        <div className="rounded-3xl bg-gradient-to-b from-[#3f3f3f] to-[#141414] flex justify-center p-5 h-full flex-col text-center">
          <Image
            height={382}
            width={382}
            src={Logo.src}
            alt="Alvaro Teran Image"
            className="rounded-3xl"
          />{" "}
          <h1 className="mt-8 mb-2">Alvaro Teran</h1>
          <p>@ukhezo</p>{" "}
          <div className="flex mt-[28px] items-center gap-x-6 mx-4">
            <a
              href="https://github.com/0xukhezo"
              target="_blank"
              className="text-black rounded-full "
            >
              <div className="rounded-full bg-gradient-to-tl from-[#3f3f3f] to-[#141414] items-center p-4 hover:bg-gradient-to-tl hover:from-white hover:to-white ">
                <Image height={64} width={64} src={Separator.src} alt="Alvaro Teran Image" />
              </div>{" "}
            </a>
            <a
              href="https://github.com/0xukhezo"
              target="_blank"
              className="text-black rounded-full"
            >
              <div className="rounded-full bg-gradient-to-tl from-[#3f3f3f] to-[#141414] items-center p-4 hover:bg-gradient-to-tl hover:from-white hover:to-white">
                <Image height={64} width={64} src={Separator.src} alt="Alvaro Teran Image" />
              </div>{" "}
            </a>
            <a
              href="https://github.com/0xukhezo"
              target="_blank"
              className="text-black rounded-full"
            >
              <div className="rounded-full bg-gradient-to-tl from-[#3f3f3f] to-[#141414] items-center p-4 hover:bg-gradient-to-tl hover:from-white hover:to-white">
                <Image height={64} width={64} src={Separator.src} alt="Alvaro Teran Image" />
              </div>{" "}
            </a>{" "}
            <a
              href="https://github.com/0xukhezo"
              target="_blank"
              className="text-black rounded-full"
            >
              <div className="rounded-full bg-gradient-to-tl from-[#3f3f3f] to-[#141414] items-center p-4 hover:bg-gradient-to-tl hover:from-white hover:to-white">
                <Image height={64} width={64} src={Separator.src} alt="Alvaro Teran Image" />
              </div>{" "}
            </a>
          </div>
          <Link href="contact">
            <button className="block w-full bg-lightGray font-semibold rounded-2xl py-3 mt-7">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
      <div className="col-span-6 ml-[120px]" id="cards">
        <div className="mb-[80px]">
          <h2 className="mb-[40px]">ABOUT ME</h2>
          <p className="mb-[80px] rounded-3xl bg-gradient-to-b from-[#3f3f3f] to-[#141414] p-8">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
            cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una
            galería de textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno
            en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado
            en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de
            Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus
            PageMaker, el cual incluye versiones de Lorem Ipsum.
          </p>
        </div>
        <div className="mb-[80px]">
          <h2 className="mb-[40px]">EXPERIENCE</h2>
          {cvInfoExperience.map((info: cvType) => {
            return (
              <div className="mb-[60px] rounded-3xl bg-gradient-to-b from-[#3f3f3f] to-[#141414] p-8">
                <h3>{info.date}</h3>
                <h2 className="my-[12px] text-yellow-500 font-semibold">{info.title}</h2>
                <h3 className="mb-[6px]">{info.location}</h3>
                <p>{info.description}</p>
              </div>
            )
          })}
        </div>
        <div className="mb-[80px]">
          <h2 className="mb-[40px]">EDUCATION</h2>
          {cvInfoEducation.map((info: cvType) => {
            return (
              <div className="mb-[60px] rounded-3xl bg-gradient-to-b from-[#3f3f3f] to-[#141414] p-8">
                <h3>{info.date}</h3>
                <h2 className="my-[12px] text-yellow-500 font-semibold">{info.title}</h2>
                <h3 className="mb-[6px]">{info.location}</h3>
                <p>{info.description}</p>
              </div>
            )
          })}
        </div>{" "}
        <div className="mb-[80px]">
          <h2 className="mb-[40px]">SKILLS</h2>
          <div className="grid grid-cols-2">
            {skills.map((skill: string) => {
              return (
                <div className="mb-[60px] rounded-3xl bg-gradient-to-b from-[#3f3f3f] to-[#141414] p-8 mr-10">
                  <h3>{skill}</h3>
                  <p>Language for the client side</p>
                </div>
              )
            })}
          </div>
        </div>{" "}
        <div className="mb-[80px]">
          <h2 className="mb-[40px]">AWARDS</h2>
          {awards.map((award: any) => {
            return (
              <div className="mb-[60px] rounded-3xl bg-gradient-to-b from-[#3f3f3f] to-[#141414] p-8">
                <h3>{award.date}</h3>
                <h2 className="my-[12px]">{award.title}</h2> <h2>PRICES</h2>
                <div className="flex mt-[12px] items-center gap-x-6">
                  <div className="rounded-full bg-gradient-to-tl from-[#3f3f3f] to-[#141414] items-center p-4">
                    <Image height={24} width={24} src={Separator.src} alt="Alvaro Teran Image" />
                  </div>
                  <div className="rounded-full bg-gradient-to-tl from-[#3f3f3f] to-[#141414] items-center p-4">
                    <Image height={24} width={24} src={Separator.src} alt="Alvaro Teran Image" />
                  </div>
                  <div className="rounded-full bg-gradient-to-tl from-[#3f3f3f] to-[#141414] items-center p-4">
                    <Image height={24} width={24} src={Separator.src} alt="Alvaro Teran Image" />
                  </div>
                  <div className="rounded-full bg-gradient-to-tl from-[#3f3f3f] to-[#141414] items-center p-4">
                    <Image height={24} width={24} src={Separator.src} alt="Alvaro Teran Image" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>{" "}
      </div>
    </main>
  )
}
