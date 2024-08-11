import StyledNav from "../components/nav";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <StyledNav/>
  <Component {...pageProps} />
  </>;
}
