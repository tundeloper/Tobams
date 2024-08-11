import Image from "next/image";
import React, { ReactNode } from "react";
import styled from "styled-components";
// import Link from `next/link`;

interface navProps {
    className?: string,
    children?: ReactNode
}

const categories_data: {name: string, image: string, color: string}[] = [
    {name: 'Breakfast', image: 'breakfast.svg', color: '#e7fafe'},
    {name: 'Vegan', image: 'vegan.svg',  color: '#f2faee'},
    {name: 'Meat', image: 'meat.svg',  color: '#fbeceb'},
    {name: 'Dessert', image: 'dessert.svg',  color: '#fef7e9'},
    {name: 'Lunch', image: 'lunch.svg',  color: '#f4f4f4'},
    {name: 'Chocolate', image: 'chocholate.svg',  color: '#f5f5f5'},
]

const category : React.FC<navProps> = ({className}) => {
    return <div className={className}>
      <div className="header">
        <h1>Categories</h1>
        <button>View All Categories</button>
      </div>
      <ul className="grid-container">
        {categories_data.map((data => {
            const gradientStyles = {
                background: `linear-gradient(transparent, ${data.color})`,
            } 
            return<li className="grid-item" key={data.name} style={gradientStyles}>
                <div><Image src={data.image} width={70} height={70} /></div>
                <div>{data.name}</div>
            </li>
        }))}
      </ul>
    </div>
}

const StyledCategories = styled(category)`
// width: 100%;
margin-top: 3rem;

.header {
    display: flex;
    justify-content: space-between;

    h1 {
        font-weight: 800;
        font-size: 2.3rem ;
    }

    button {
        background-color: #e7fafe;
        padding: 1rem;
        border-radius: .5rem;
        font-weight: 600;
        font-size: 1rem ;

    }
}

.grid-container {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr); /* 6 items in one row on large screens */
    gap: 16px; /* space between grid items */

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr); /* 2 items in one row */
    }
     @media (max-width: 750px) {
        grid-template-columns: 1fr; /* 1 item per row */
    }
  }
  
  .grid-item {
    // background-color: #f0f0f0;
    background: linear-gradient(
    to bottom,
    transparent,
    // transparent,
    #e7fafe
  );
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 1.2rem;
    gap: 1rem;
    text-align: center;
    // border: 1px solid #ccc;
  }
`
export default StyledCategories