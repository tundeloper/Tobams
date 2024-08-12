import Image from "next/image";
import React, { ReactNode } from "react";
import styled from "styled-components";

interface videoProps {
    className?: string,
    children?: ReactNode
}

const video : React.FC<videoProps> = ({className}) => {
    return <div className={className} >
        <div className="video">
            <Image src={'/video_.svg'} alt='video' width={20} height={20} className="img" />
        </div>
        <div className="info">
            <div>
            <h1 style={{fontWeight: '600', fontSize: '1.2rem',}}>Nutrition Information</h1>
            <div className="nut_info">
                <p>Calories</p>
                <p className="nut_quan">219.9 kcal</p>
            </div>
            <div className="nut_info">
                <p>Total Fat</p>
                <p className="nut_quan">10.7g</p>
            </div>
            <div className="nut_info">
                <p>Protein</p>
                <p className="nut_quan">7.9g</p>
            </div>
            <div className="nut_info">
                <p>Carbohydrate</p>
                <p className="nut_quan">22.3 g</p>
            </div>
            <div className="nut_info">
                <p>Cholesterol</p>
                <p className="nut_quan">37.4 mg</p>
            </div>
            </div>
            <div>
                <p style={{textAlign: 'center'}}>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
        </div>
    </div>
}

const StyledVideo = styled(video)`
display: flex;
justify-content: space-between;
gap: 2rem;
overfolow: hidden;
margin-top: 3rem;
.video {
    width: 100%;
    height: 25rem;
    overflow: hidden;
    background-color: #e7fafe;
    border-radius: 1rem;

}
.img {
    width: 100%;
    height: 100%;
    object-fit: cover;

}
.info {
    background-color: #e7fafe;
    width: 45%;
    padding: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 1rem;
}

.nut_info {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    border-bottom: 1px solid #e0dada;

}

.nut_quan {
    font-weight: 600;
}
`

export default StyledVideo