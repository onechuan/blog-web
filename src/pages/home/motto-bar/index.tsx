
import { useThemeMode } from "@/hooks";
import { darkTheme, lightTheme } from "@/styled/theme";
import { GithubOutlined, MailOutlined, WechatOutlined } from "@ant-design/icons";
import React from "react";
import { IMotto } from "../interface";


import { MottoBar, MottoContent, SocialMediaIconWrapper, UpTriangle } from "./styles";

interface IProps {
    mottos: IMotto[];
}
const Motto: React.FC<IProps> = ({mottos})=>{
    const {theme, toggleTheme} = useThemeMode();
    const themeMode = theme === "light" ? lightTheme : darkTheme;
    
    return (
        <MottoBar>
            <UpTriangle/>
            <MottoContent theme={themeMode}>死は生の対極としてではなく、その一部として存在している。</MottoContent>
            <SocialMediaIconWrapper theme={themeMode}>
                <li><WechatOutlined /></li>
                <li><GithubOutlined /></li>
                <li><MailOutlined /></li>
            </SocialMediaIconWrapper>
        </MottoBar>
    )
}

export default Motto;

