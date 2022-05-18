import React from 'react';

interface IProps{
    src: string;
}

const LazyLoadImage: React.FC<IProps> = ({src})=>{
    return (
        <img className='cover' style={{width:"100%",height:"100%"}}  src={src}/>
    )
}

export default LazyLoadImage;
