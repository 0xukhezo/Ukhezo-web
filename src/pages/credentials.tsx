import Navbar from "@/components/Layout/Navbar"
import Credentials from "@/components/Sections/Credentials"
import React from "react"

export default function CredentialsPage() {
  return (
    <main>
      <Navbar page={<Credentials />} />
    </main>
  )
}
