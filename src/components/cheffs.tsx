import Image from "next/image";
import React, { ReactNode } from "react";
import styled from "styled-components";
// import Link from `next/link`;

interface chefProps {
    className?: string,
    children?: ReactNode
}

const cheff : React.FC<chefProps> = ({className, children}) => {
    return <div className={className}>
        <div>
            <h2>Everyone can be a chef in their own kitchen</h2>
            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            <button>Learn more</button>
        </div>
        <Image src={'/cheff.svg'} height={20} width={20} className="cheff_img" alt="image" />
    </div>
}

const StyledCheff = styled(cheff)`
margin-top: 4rem;
// background-color: red;
display: flex;
justify-content: space-between;
align-items: center;    
margin-bottom: '2rem';
padding: 2.5rem 2rem 2.5rem 2rem;
// border-bottom: 1px solid grey;

div  {
    width: 45%;

    h2 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 2rem;

    }

    p {
        // font-size: rem;
        font-weight: 600; 
        margin-bottom: 4rem;

    }

    button {
        background-color: black;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 1rem
    }
}

.cheff_img {
    height: 30rem;
    width: auto
}
`
export default StyledCheff