import Image from "next/image";
import { Inter } from "next/font/google";
import StyledNav from "../components/nav";
// import SwipeableTextMobileStepper from "../components/slider/slider";
import dynamic from 'next/dynamic';
import StyledCategories from "../components/categories";
import StyledMeals from "../components/meals";
import StyledCheff from "../components/cheffs";
import StyledForm from "../components/form/form";
import StyledFooter from "../components/footer";
import StyledLanding from "../components/landing";

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
        {/* <NoSSRComponent /> */}
        <StyledLanding />
      </div>
      <StyledCategories />
      <div style={{display: "block", textAlign: 'center', marginTop: '5rem',}}>
        <h2 style={{fontWeight: '800',fontSize: '2.3rem'}}>Simple and tasty recipes</h2>
        <p style={{}}>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
      </div>
      <StyledMeals />
      <StyledCheff />
      <div style={{display: "block", textAlign: 'center', marginTop: '5rem',}}>
        <h2 style={{fontWeight: '800',fontSize: '2.3rem'}}>Check out @foodieland on Instagram</h2>
        <p style={{}}>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', gap: '2rem', marginTop: '5rem'}}>
        <h2 style={{fontSize: '2.5rem', fontWeight: 700, width: '40%'}}>Try this delicious recipe to make your day</h2>
        <p style={{width: '40%'}}>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
      </div>
      <StyledMeals />
      <StyledForm />
      <StyledFooter />
    </main>
  );
}
