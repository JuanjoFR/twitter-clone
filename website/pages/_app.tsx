// import "../styles/globals.css"
import type { AppProps } from "next/app"
import "pattern-library/dist/build.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
