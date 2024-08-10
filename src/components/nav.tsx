import Image from "next/image";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface navProps {
    className?: string,
    children?: ReactNode
}

const nav : React.FC<navProps> = ({className, children}) => {
    return <div className={className}>
      <a href="/">
        <Image src={'/Foodieland.svg'} alt="Foodieland" width={80} height={25} />
      </a>

      <div className={'navLinks'}>
        <a href="Home">Home</a>
        <a href="Recipes">Recipes</a>
        <a href="Recipes">Contact</a>
        <a href="Recipes">About Us</a>
      </div>

      <div className="socials">
        <a href="/"><Image src={'/facebook.svg'} alt="facebook" width={10} height={10}/></a>
        <a href="/"><Image src={'/twitter.svg'} alt="facebook" width={20} height={20}/></a>
        <a href="/"><Image src={'/instagram.svg'} alt="facebook" width={20} height={20}/></a>
      </div>
    </div>
}

const StyledNav = styled(nav)`
// height: 100vh;
// background-color: red;
display: flex;
justify-content: space-between;
align-items: center;    

.navLinks {
    display: flex;
    gap: 2rem;
    font-weight: 500
}

.socials {
    display: flex;
    gap: 1rem;
    align-items: center;
}
`
export default StyledNav