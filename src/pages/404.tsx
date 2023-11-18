// React
import React from "react"
// Components
import Navbar from "@/components/Layout/Navbar"
import Error404 from "@/components/Sections/Error404"

export default function Error() {
  return (
    <main>
      <Navbar page={<Error404 />} />
    </main>
  )
}
