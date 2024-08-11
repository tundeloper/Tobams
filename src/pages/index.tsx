import Image from "next/image";
import { Inter } from "next/font/google";
import StyledNav from "../components/nav";
// import SwipeableTextMobileStepper from "../components/slider/slider";
import dynamic from 'next/dynamic';

const NoSSRComponent = dynamic(() => import('../components/slider/slider'), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <StyledNav />
      <div style={{background: '#e7fafe',}}>
        {/* <NoSSRComponent /> */}
      </div>
    </main>
  );
}
