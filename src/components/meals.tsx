import Image from "next/image";
import React, { ReactNode } from "react";
import styled from "styled-components";
// import Link from `next/link`;

interface mealsProps {
    className?: string,
    children?: ReactNode
}

const meals_data: {name: string, image: string, time: string, meal: string}[] = [
    {name: 'Big and Juicy Wagyu Beef Cheeseburger', image: '/meals/1.svg', time: '30 Minutes', meal: 'Snack'},
    {name: 'Fresh Lime Roasted Salmon with Ginger Sauce', image: '/meals/2.svg',  time: '30 Minutes', meal: 'Fish'},
    {name: 'Strawberry Oatmeal Pancake with Honey Syrup', image: '/meals/3.svg',  time: '30 Minutes', meal: 'Breakfast'},
    {name: 'Fresh and Healthy Mixed Mayonnaise Salad', image: '/meals/4.svg',  time: '30 Minutes',meal: 'Healthy'},
    {name: 'Chicken Meatballs with Cream Cheese', image: '/meals/5.svg',  time: '30 Minutes', meal: 'Meat'},
    {name: 'Fruity Pancake with Orange & Blueberry', image: '/meals/6.svg',  time: '30 Minutes', meal: 'Sweet'},
]

const meals : React.FC<mealsProps> = ({className, children}) => {
    return <div className={className}>
      <ul className="grid-container">
        {meals_data.map(data => {
            return<li className="grid-item" key={data.name}>
                <div><Image src={data.image} height={4000} width={70} className="meal_img" /></div>
                <div className="meals_description">
                    <h2>{data.name}</h2>
                    <div>
                        <div><Image src={'/Timer.svg'}  width={10}  height={10} className="img" />{data.time}</div>
                        <div><Image src={'/ForkKnife.svg'}  width={5}  height={5} className="img" />{data.meal}</div>
                    </div>
                </div>
            </li>
        })}
      </ul>
    </div>
}

const StyledMeals = styled(meals)`
.grid-container {
    margin-top: 4.5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 2rem; 

    // @media (max-width: 1024px) {
    //     grid-template-columns: repeat(2, 1fr); 
    // }
     @media (max-width: 750px) {
        grid-template-columns: 1fr;
    }
  }
  
  .grid-item {
    background-color: #f0f0f0;
    background: linear-gradient(
    to bottom,
    transparent,
    // transparent,
    #e7fafe
  );
    padding: 10px;
    // display: flex;
    // align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 1.2rem;
    // gap: 2rem;
    // text-align: center;
    // border: 1px solid #ccc;

    .meals_description{
        h2 {
            font-size: 1.5rem;
            font-weight: 700;
        }

        div {
            display: flex;
            gap: 1rem;
            margin-top: .5rem
        }
    }
  }

  .meal_img{ 
    width: 100%;
    height: 15rem;
    object-fit: cover;
    border-radius: 1.5rem;

}

  .img {
    height: 1.5rem;
    width: 1.5rem;
  }
`
export default StyledMeals