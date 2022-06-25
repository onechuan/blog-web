import React from "react";
import {  FooterWrapper } from "./styles";

const Footer: React.FC = ()=>{
    return (
        <FooterWrapper>
            <div className="footer-content">
                <span className="logo">ONECHUAN  TIME</span>
                <span className="desc">赣22000000000备案 onechuan.cn © 2022. All rights reserved.</span>
            </div>
        </FooterWrapper>
    )
}

export default Footer