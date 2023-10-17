import { ReactElement } from "react"

export type ProjectType = {
  title: string
  description: string
  image: string
  url: string
}

export type NavigationType = {
  name: string
  href: string
}

export type FooterNavigationType = {
  src: string
  href: string
}
export type AwardType = {
  title: string
  href: string
  winners: string[]
  image: string
}
