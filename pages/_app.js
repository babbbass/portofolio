import { Header } from "../components/Header"
import { Footer } from "@/components/Footer/footer"
import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
