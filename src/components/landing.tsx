import Image from "next/image";
import React, { ReactNode } from "react";
import styled from "styled-components";
// import Link from `next/link`;

interface landingProps {
    className?: string,
    children?: ReactNode
}

const landing : React.FC<landingProps> = ({className, children}) => {
    return <div className={className}>
        <div className="text">
            <div className="first">
                <Image src='/slider.svg' width={20} height={20} alt="image" />  
                <p>Hot Recipes</p> 
            </div>
            <h1>Spicy delicious chicken wings</h1>
            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            <div style={{display: "flex", alignItems: 'center', gap: '2rem', marginTop: '2rem'}}>
                <div style={{display: 'flex', gap: '1rem'}}><Image src={'/Timer.svg'}  width={25}  height={25} alt="image" />30 Minutes</div>
                <div style={{display: 'flex', gap: '1rem'}}><Image src={'/ForkKnife.svg'}  width={25}  height={25} alt="image" />Chicken</div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '4.5rem'}}>
                <div style={{display: 'flex', gap: '1rem'}}>
                    <Image src='/john.svg' width={50} height={50} alt="john" />
                    <div>
                        <p style={{fontWeight: '600'}}>John Smith</p>
                        <p style={{fontWeight: '600'}}>15 March 2022</p>
                    </div>  

                </div>
                <button style={{fontWeight: '600', display: 'flex', gap: '.5rem', alignItems: 'center', background: 'black', color: 'white', padding: '.7rem 1rem', borderRadius: '1rem'}}>
                    View Recipe
                    <Image src='/PlayCircle.svg' alt='play' height={20} width={20} />
                </button>
            </div>
        </div>
        <div style={{width: '50%', overflow: 'hidden'}}>
            <Image src='/slider.svg' width={20} height={20} className="img" alt="image"/>
        </div>
    </div>
}

const StyledLanding = styled(landing)`
display: flex;
justify-content: space-between;
border-radius: 1rem;
margin-top: 3rem;

.first {
    display: flex;
    gap: 1rem;
    font-weight: 600;
    background-color: white;
    width: max-content;
    padding: 1rem;
    border-radius: 1rem;
}

.text {
    padding: 2.5rem 1rem;
    width: 40%;
}

h1 {
    font-weight: 800;
    font-size: 2.3rem ;
    margin-bottom: 2rem;
}

.img {
    object-fit: cover;
    height: 30rem;
    width: 100%;
}
`
export default StyledLanding