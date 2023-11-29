// Next
import type { AppProps } from "next/app"
// import local from "next/font/local"
// Styles
import "@/styles/globals.css"

// const myFont = local({
//   src: "../../public/fonts/Kusanagi.otf",
//   display: "swap",
// })

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <main className={myFont.className}>
    <Component {...pageProps} />
    // </main>
  )
}
