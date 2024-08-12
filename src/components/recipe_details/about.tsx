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
        <div><h1 style={{textAlign: 'center', fontWeight: '700', fontSize: '1.5rem'}}>Health Japanese Fried Rice</h1></div>
        <div className="cheff">
        <div>image</div>
        <div>text</div>
        </div>
       </div>
       <div className="print">
        <div>
            <div  style={{background: '#e7fafe',padding: '1rem', borderRadius: '100%', cursor: 'pointer'}}>
                <Image src={'/video_.svg'} alt='print' height={30} width={30} style={{borderRadius: '100%'}} />
                </div>
            <p style={{textAlign: 'center'}}>PRINT</p>
        </div>

        <div>
            <div  style={{background: '#e7fafe',padding: '1rem', borderRadius: '100%', cursor: 'pointer'}}>
                <Image src={'/video_.svg'} alt='print' height={30} width={30} style={{borderRadius: '100%'}} />
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
`

export default StyledAbout