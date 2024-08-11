import React, { ReactNode } from "react";
import styled from "styled-components";
// import Link from `next/link`;

interface formprrops {
    className?: string,
    children?: ReactNode
}

const form : React.FC<formprrops> = ({className, children}) => {
    return <div className={className}>
        <h1>Deliciousness to your inbox</h1>
        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        <div>
            <input placeholder="Your email address..."></input>
            <button>Subscribe</button>
        </div>
        
    </div>
}

const StyledForm = styled(form)`
margin-top: 4rem;
display : flex;
align-items: center;
justify-content: center;
gap: 2rem;
flex-direction: column;
background-color: #e7fafe;
padding: 5rem;
position: relative;
overflox: hidden;


h1 {
    font-size: 2.5rem;
    font-weight: 700;
}

p {
    max-width: 35rem;
    text-align: center;
}

input {
    padding: 1.5rem;
    border-radius: .7rem;
    width: 20rem;
}

div {
    position: relative;
}

button {
    position: absolute;
    bottom: 0;
    right: 0;
    color: white;
    background-color: black;
    padding: 1.5rem;
    border-radius: .7rem;
    color: white;
}
`
export default StyledForm