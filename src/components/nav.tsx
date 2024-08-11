import Image from "next/image";
import React, { ReactNode } from "react";
import styled from "styled-components";
// import Link from `next/link`;

interface navProps {
    className?: string,
    children?: ReactNode
}

const nav : React.FC<navProps> = ({className, children}) => {
    return <div className={className}>
      <p>
        <Image src={'/Foodielpnd.svg'} alt="Foodieland" width={80} height={25} />
      </p>

      <div className={'navLinks'}>
        <p>Home</p>
        <p >Recipes</p>
        <p>Contact</p>
        <p>About Us</p>
      </div>

      <div className="socials">
        <p><Image  src={'/facebook.svg'} alt="facebook" width={10} height={10}/></p>
        <p><Image src={'/twitter.svg'} alt="facebook" width={20} height={20}/></p>
        <p><Image src={'/instagram.svg'} alt="facebook" width={20} height={20}/></p>
      </div>
    </div>
}

const StyledNav = styled(nav)`
// height: 100vh;
// background-color: red;
display: flex;
justify-content: space-between;
align-items: center;    
margin-bottom: '2rem';
padding: 2.5rem 2rem 2.5rem 2rem;
border-bottom: 1px solid #e0dada;

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