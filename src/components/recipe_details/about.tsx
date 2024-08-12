import Image from "next/image";
import React, { ReactNode } from "react";
import styled from "styled-components";

interface aboutProps {
    className?: string,
    children?: ReactNode
}

const about : React.FC<aboutProps> = ({className}) => {
    return <div className={className} >
       <div className="content">
        <div><h1 style={{fontWeight: '700', fontSize: '1.5rem'}}>Health Japanese Fried Rice</h1></div>
        <div style={{display: 'flex', gap: '1rem'}}>

        <div style={{display: 'flex', gap: '1rem', paddingRight: '1rem', borderRight: '1px solid green',}}>
            <Image src='/john.svg' width={50} height={50} alt="john" />
        <div>
            <p style={{fontWeight: '600'}}>John Smith</p>
            <p style={{fontWeight: '600'}}>15 March 2022</p>
        </div>  
        </div>
        <div style={{display: 'flex', gap: '1rem', paddingRight: '1rem', borderRight: '1px solid green',}}>
            <Image src='/Timer.svg' width={30} height={30} alt="john" />
        <div>
            <p style={{fontWeight: '600'}}>PREP TIME</p>
            <p style={{fontWeight: '600'}}>15 Minutes</p>
        </div>  
        </div>
        <div style={{display: 'flex', gap: '1rem', paddingRight: '1rem', borderRight: '1px solid green',}}>
            <Image src='/ForkKnife.svg' width={30} height={30} alt="john" />
        <div>
            <p style={{fontWeight: '600'}}>COOK TIME</p>
            <p style={{fontWeight: '600'}}>15 Minutes</p>
        </div>  
        </div>
        
        
        </div>
       </div>
       <div className="print">
        <div>
            <div  style={{background: '#e7fafe',padding: '1.5rem', borderRadius: '100%', cursor: 'pointer'}}>
                <Image src={'/printer.svg'} alt='print' height={25} width={25} style={{borderRadius: '100%'}} />
                </div>
            <p style={{textAlign: 'center'}}>PRINT</p>
        </div>

        <div>
            <div  style={{background: '#e7fafe',padding: '1.5rem', borderRadius: '100%', cursor: 'pointer'}}>
                <Image src={'/share.svg'} alt='print' height={25} width={25} style={{borderRadius: '100%'}} />
                </div>
            <p style={{textAlign: 'center'}}>SHARE</p>
        </div>
        
       </div>
    </div>
}

const StyledAbout = styled(about)`
margin-top: 5rem;
display: flex;
justify-content: space-between;
align-items: center;

.content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.print {
    display: flex;
    gap: 2rem;
}

.cheff {
    display: 'flex';
    flex-direction: 'column;
}
`

export default StyledAbout