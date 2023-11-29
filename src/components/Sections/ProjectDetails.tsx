import React from "react"
import Image from "next/image"
import SeparatorImage from "../../../public/Separator.png"
import Logo from "../../../public/Logo.svg"
import Icon from "../../../public/Icon3.png"
import Link from "next/link"

type ProjectDetailsProps = {
  project: string
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <main className="px-10 xl:px-0">
      {/* <h2 className="mb-[24px] tracking-widest hidden md:block">{project.toUpperCase()}</h2> */}
      <h2 className="mb-[24px] tracking-widest hidden md:block">PEPE</h2>
      <div className="pb-[484px] xs:pb-[544px] sm:pb-[560px] lg:pb-[574px]">
        <div className="flex w-full justify-star mb-[30px] items-center justify-center md:justify-start">
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={48}
            height={48}
            className="mr-2"
            loading="eager"
          />
          <span className="text-xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider">
            SELF-SUMMARY
          </span>
          <Image
            src={SeparatorImage}
            alt="Separator"
            width={48}
            height={48}
            className="ml-2"
            loading="eager"
          />
        </div>
        {/* <h2 className="mb-[24px] tracking-widest md:hidden flex justify-center">
          {project.toUpperCase()}
        </h2> */}
        <h2 className="mb-[24px] tracking-widest md:hidden flex justify-center">PEPE</h2>
        <img
          src={Logo.src}
          alt="Separator"
          className="max-h-[550px] mx-none "
          loading="eager"
          id="details-img"
        />
      </div>{" "}
      <div className="rounded-3xl lg:bg-gradient-to-b from-[#3f3f3f] to-[#141414] flex justify-center pb-14 lg:px-14 h-full grid grid-cols-8 lg:grid-cols-9 gap-7">
        <div className="relative rounded-3xl bg-gradient-to-tr from-[#3f3f3f] to-[#141414] h-full col-span-9 lg:col-span-4 mt-7">
          <Image
            height={30}
            width={30}
            src={Icon.src}
            alt="Star"
            className="absolute right-14 lg:hidden"
          />
          <h2 className="pt-7 px-7">pepe</h2>
          <p className="my-8 px-7">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
            cuando un impresor (N. del T. persona que se dedica a la imprenta)
          </p>{" "}
          <p className="px-7 pb-7">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
            cuando un impresor (N. del T. persona que se dedica a la imprenta)
          </p>
        </div>
        <Image
          height={30}
          width={30}
          src={Icon.src}
          alt="Star"
          className="lg:flex mx-auto hidden"
        />
        <div className="relative rounded-3xl bg-gradient-to-br from-[#3f3f3f] to-[#141414] h-full col-span-9 lg:col-span-4 mt-7">
          <Image
            height={30}
            width={30}
            src={Icon.src}
            alt="Star"
            className="absolute right-14 lg:hidden"
          />
          <h2 className="pt-7 px-7">pepe</h2>
          <p className="my-8 px-7">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
            cuando un impresor (N. del T. persona que se dedica a la imprenta)
          </p>{" "}
          <p className="px-7 pb-7">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
            cuando un impresor (N. del T. persona que se dedica a la imprenta)
          </p>
        </div>
      </div>
      <Image
        src={Logo.src}
        alt="Separator"
        height={200}
        width={200}
        className="rounded-3xl w-full max-h-[400px] my-[30px]"
        loading="eager"
      />
      <div className="grid grid-cols-2 gap-[24px]">
        <Image
          src={Logo.src}
          alt="Separator"
          height={100}
          width={100}
          className="rounded-3xl w-full col-span-2 sm:col-span-1 max-h-[300px] sm:max-h-none"
          loading="eager"
        />{" "}
        <Image
          src={Logo.src}
          alt="Separator"
          height={100}
          width={100}
          className="rounded-3xl w-full col-span-2 sm:col-span-1 max-h-[300px] sm:max-h-none"
          loading="eager"
        />{" "}
        <Image
          src={Logo.src}
          alt="Separator"
          height={100}
          width={100}
          className="rounded-3xl w-full col-span-2 sm:col-span-1 max-h-[300px] sm:max-h-none"
          loading="eager"
        />{" "}
        <Image
          src={Logo.src}
          alt="Separator"
          height={100}
          width={100}
          className="rounded-3xl w-full col-span-2 sm:col-span-1 max-h-[300px] sm:max-h-none"
          loading="eager"
        />
      </div>
      <div className="pb-[480px] xs:pb-[560px] sm:pb-[540px] lg:pb-[574px]">
        <div className="rounded-3xl bg-gradient-to-b from-[#3f3f3f] to-[#141414] flex justify-center pb-14 px-7 h-full grid grid-cols-4 gap-7 mt-[24px] ">
          <div className="relative rounded-3xl bg-gradient-to-tr from-[#3f3f3f] to-[#141414] h-full col-span-4 lg:col-span-1 mt-7">
            <Image height={30} width={30} src={Icon.src} alt="Star" className="absolute right-7" />
            <div className="py-12 px-7 flex flex-col justify-between h-full">
              <h2>Year</h2>
              <h3>2023</h3>
              <h2>Client</h2>
              <h3>2023</h3>
              <h2>Services</h2>
              <h3>2023</h3>
              <h2>Project</h2>
              <h3>2023</h3>
            </div>
          </div>
          <div className="relative rounded-3xl lg:bg-gradient-to-tr from-[#3f3f3f] to-[#141414] h-full col-span-4 lg:col-span-3 mt-7 lg:px-7 py-7">
            <h2>Description</h2>
            <p className="my-8">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
              Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
              cuando un impresor (N. del T. persona que se dedica a la imprenta)
            </p>{" "}
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
              Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
              cuando un impresor (N. del T. persona que se dedica a la imprenta)
            </p>
          </div>
        </div>
        <img
          src={Logo.src}
          alt="Separator"
          className="max-h-[550px] mx-none mt-[24px]"
          loading="eager"
          id="details-img"
        />
      </div>
      <div className="flex justify-center mt-[48px] sm:mt-16 md:mt-[48px]">
        <button className="bg-lightGray rounded-xl px-8 py-4 font-bold navButton">
          <Link href={"/pepe"}>See {"pepe"} Project </Link>
        </button>
      </div>
    </main>
  )
}
