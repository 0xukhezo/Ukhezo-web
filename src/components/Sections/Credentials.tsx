import React from "react"
import Image from "next/image"

import Alvaro from "../../../public/Alvaro.png"
import Github from "../../../public/Github.svg"
import Twitter from "../../../public/Twitter.svg"
import Lens from "../../../public/Lens.svg"
import Link from "next/link"
import {
  awards,
  cvInfoEducation,
  cvInfoExperience,
  skills,
  socialLinks,
} from "../../../constants/Constants"
import { cvType, skillType, socialType } from "@/types/Types"

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
              {socialLinks.map((social: socialType) => {
                return (
                  <a href={social.href} target="_blank" className="text-black rounded-full">
                    <Image height={48} width={48} src={social.image} alt="Alvaro Teran Image" />
                  </a>
                )
              })}
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
            Alvaro is a senior front-end developer with four years of experience in software
            development across various industries, with the two most recent years focused on React
            and TypeScript. He is well-respected among industry-leading companies as a skilled
            developer who truly understands the client infrastructure and pain points. Alvaro also
            has the hands-on technical aptitude needed to design and build solutions.
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
            {skills.map((skill: skillType) => {
              return (
                <div className={"pb-[60px] lg:mr-10"} key={skill.name}>
                  <h3 className="text-blue-500 font-bold text-2xl mb-1">{skill.name}</h3>
                  <p>{skill.description}</p>
                </div>
              )
            })}{" "}
          </div>
        </div>{" "}
      </div>
    </main>
  )
}
