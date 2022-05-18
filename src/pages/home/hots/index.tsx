
import React from "react";
import { HotContainer } from "./styles";

const Hots: React.FC = ()=>{
    return (
        <HotContainer>
            <h2 className='title'>HOT</h2>
            <ul className='hots'>
                <li className='hot-item'><img src="https://edge.yancey.app/beg/e4df44ff5e34d207aaa69806c88d70df-700.jpg" alt="" /></li>
                <li className='hot-item'><img src="https://edge.yancey.app/beg/e4df44ff5e34d207aaa69806c88d70df-700.jpg" alt="" /></li>
                <li className='hot-item'><img src="https://edge.yancey.app/beg/e4df44ff5e34d207aaa69806c88d70df-700.jpg" alt="" /></li>
            </ul>
        </HotContainer>
    )
}

export default Hots;