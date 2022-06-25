import RouterContainer from "@/router";
import { Spin } from "antd";
import React,{Suspense} from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header/header";
import { LayoutWrapper, MainWrapper } from "./styled";

interface IProps {
    title?: string;
    children?:any;
  }

const Layout: React.FC<IProps> = ({title, children})=>{
    return (
        <LayoutWrapper>
            <Header/>
            <MainWrapper>
                <Suspense fallback={<Spin />}>
                    <RouterContainer/>
                </Suspense>
            </MainWrapper>
            <Footer/>
        </LayoutWrapper>
    )
}


export default Layout;