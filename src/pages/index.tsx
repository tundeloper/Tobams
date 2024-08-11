import Image from "next/image";
import { Inter } from "next/font/google";
import StyledNav from "../components/nav";
// import SwipeableTextMobileStepper from "../components/slider/slider";
import dynamic from 'next/dynamic';
import StyledCategories from "../components/categories";
import StyledMeals from "../components/meals";

const NoSSRComponent = dynamic(() => import('../components/slider/slider'), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      style={{margin: ".5rem 2rem .5rem 2rem"}}
    >
      <div style={{background: '#e7fafe',}}>
        <NoSSRComponent />
      </div>
      <StyledCategories />
      <div style={{display: "block", textAlign: 'center', marginTop: '5rem',}}>
        <h2 style={{fontWeight: '800',fontSize: '2.3rem'}}>Simple and tasty recipes</h2>
        <p style={{}}>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
      </div>
      <StyledMeals />
    </main>
  );
}
