import React from "react"
import Image from "next/image"

import Alvaro from "../../../public/Alvaro.png"
import Github from "../../../public/Github.svg"
import Twitter from "../../../public/Twitter.svg"
import Lens from "../../../public/Lens.svg"
import Link from "next/link"
import { awards, cvInfoEducation, cvInfoExperience, skills } from "../../../constants/Constants"
import { cvType } from "@/types/Types"

export default function Credentials() {
  return (
    <main className="grid grid-cols-9 px-10 xl:px-0">
      <div className="col-span-9 md:col-span-3 h-fit md:sticky top-[100px] mb-20 md:mb-0">
        <div className="rounded-3xl bg-gradient-to-b from-[#3f3f3f] to-[#141414] flex md:justify-center p-5 h-full md:flex-col sm:flex-row flex-col text-center w-full justify-around">
          <Image
            height={382}
            width={382}
            src={Alvaro.src}
            alt="Alvaro Teran Image"
            className="rounded-3xl block sm:hidden md:block mx-auto"
          />{" "}
          <Image
            height={280}
            width={280}
            src={Alvaro.src}
            alt="Alvaro Teran Image"
            className="rounded-3xl md:hidden sm:block hidden"
          />
          <div className="sm:ml-4 md:ml-0 sm:text-start text-center md:text-center">
            <h1 className="mt-8 mb-2 text-4xl ">Alvaro Teran</h1>
            <p className="text-2xl">@0xUkhezo</p>{" "}
            <div className="flex mt-[28px] items-center gap-x-6 justify-around">
              <a
                href="https://github.com/0xukhezo"
                target="_blank"
                className="text-black rounded-full "
              >
                <Image height={48} width={48} src={Github.src} alt="Alvaro Teran Image" />
              </a>
              <a
                href="https://twitter.com/0xUkhezo"
                target="_blank"
                className="text-black rounded-full"
              >
                <Image height={48} width={48} src={Twitter.src} alt="Alvaro Teran Image" />
              </a>
              <a
                href="https://hey.xyz/u/ukhezo"
                target="_blank"
                className="text-black rounded-full"
              >
                <Image height={48} width={48} src={Lens.src} alt="Alvaro Teran Image" />{" "}
              </a>{" "}
              {/* <a
                href="https://github.com/0xukhezo"
                target="_blank"
                className="text-black rounded-full"
              >
                <div className="rounded-full bg-gradient-to-tl from-[#3f3f3f] to-[#141414] items-center p-2 lg:p-4 hover:bg-gradient-to-tl hover:from-white hover:to-white max-w-[64px] min-w-[32px]">
                  <Image height={64} width={64} src={Separator.src} alt="Alvaro Teran Image" />
                </div>{" "}
              </a> */}
            </div>
            <Link href="contact">
              <button className="block w-full bg-lightGray font-semibold rounded-2xl py-3 mt-7">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-9 md:col-span-6 md:ml-[120px] text-justify" id="cards">
        <div className="mb-[80px]">
          <h2 className="mb-[40px] text-4xl text-white">ABOUT ME</h2>
          <p className="mb-[80px]">
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
          <h2 className="mb-[40px] text-4xl text-white">EXPERIENCE</h2>
          {cvInfoExperience.map((info: cvType) => {
            return (
              <div className="mb-[60px] " key={info.title}>
                <h3 className="text-sm">{info.date}</h3>
                <h2 className="my-[12px] text-blue-500 font-semibold text-2xl">{info.title}</h2>
                <h3 className="mb-[6px] text-xl">{info.location}</h3>
                <p>{info.description}</p>
              </div>
            )
          })}{" "}
        </div>
        <div className="mb-[80px]">
          <h2 className="mb-[40px] text-4xl text-white">EDUCATION</h2>{" "}
          {cvInfoEducation.map((info: cvType) => {
            return (
              <div className="mb-[60px] " key={info.title}>
                {" "}
                <h3 className="text-sm">{info.date}</h3>
                <h2 className="my-[12px] text-blue-500 font-semibold text-2xl">{info.title}</h2>
                <h3 className="mb-[6px] text-xl">{info.location}</h3>
                <p>{info.description}</p>
              </div>
            )
          })}{" "}
        </div>{" "}
        <div className="mb-[80px]">
          <h2 className="mb-[40px] text-4xl text-white">AWARDS</h2>{" "}
          {awards.map((award: any) => {
            return (
              <div className="mb-[60px] " key={award.title}>
                {" "}
                <h3 className="text-sm">{award.date}</h3>
                <h2 className="my-[12px] text-blue-500 font-semibold text-2xl">
                  {award.title}
                </h2>{" "}
                <h2 className="text-sm">Prizes Obtained</h2>
                <div className="flex mt-[24px] items-center gap-x-8">
                  <Image height={48} width={48} src={award.prices[0]} alt="Protocol Image" />
                  <Image height={48} width={48} src={award.prices[1]} alt="Protocol Image" />
                  <Image height={48} width={48} src={award.prices[2]} alt="Protocol Image" />
                  <Image height={48} width={48} src={award.prices[3]} alt="Protocol Image" />
                </div>
              </div>
            )
          })}{" "}
        </div>{" "}
        <div className="mb-[80px]">
          <h2 className="mb-[40px] text-4xl text-white">SKILLS</h2>
          <div className="grid lg:grid-cols-2 ">
            {skills.map((skill: string) => {
              return (
                <div className={"pb-[60px] lg:mr-10"} key={skill}>
                  <h3 className="text-blue-500 font-bold text-2xl mb-1">{skill}</h3>
                  <p>Language for the client side.</p>
                </div>
              )
            })}{" "}
          </div>
        </div>{" "}
      </div>
    </main>
  )
}
