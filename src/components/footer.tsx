import { red } from "@mui/material/colors";
import Image from "next/image";
import React, { ReactNode } from "react";
import styled from "styled-components";
// import Link from `next/link`;

interface footerProps {
    className?: string,
    children?: ReactNode
}

const footer : React.FC<footerProps> = ({className, children}) => {
    return <footer className={className}>
      <div>
        <div className="logo">
            <div><Image src={'/Foodieland.svg'} alt="Foodieland" width={80} height={25} /></div>
            <div><p>Lorem ipsum dolor sit amet, consectetuipisicing elit,</p></div>
        </div>
        <div className="nav_link">
            <p>Recipes</p>
            <p>Blog</p>
            <p>Contact</p>
            <p>About us</p>
        </div>
      </div>

      <div>
        <div></div>
        <div>© 2020 Flowbase. Powered by<span style={{color: 'red'}}> Webflow</span></div>
        <div className="socials">
        <p><Image  src={'/facebook.svg'} alt="facebook" width={10} height={10}/></p>
        <p><Image src={'/twitter.svg'} alt="facebook" width={20} height={20}/></p>
        <p><Image src={'/instagram.svg'} alt="facebook" width={20} height={20}/></p>
      </div>
      </div>
    </footer>
}

const StyledFooter = styled(footer)`
// height: 100vh;
// background-color: red;
margin-top: 5rem;

div {
    display: flex;
    justify-content: space-between;
    // padding-bottom: 3rem;
}

.logo {
    display: flex;
    flex-direction: column;
    gap: 1rem
}

.nav_link {
    display: flex;
    gap: 2rem;
    font-weight: 600;
}

.socials {
    display: flex;
    gap: 1rem;
    align-items: center;
}
`
export default StyledFooter