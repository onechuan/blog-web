import React from "react";
import { Link } from "react-router-dom";
import { INavItem, navMap } from "./config";
import {Logo, NavBar, NavBarItem, NavBarWrapper, Interactions, SocialMediaIconWrapper} from "./styled";
import { useThemeMode } from "@/hooks";
import {lightTheme,darkTheme} from "@/styled/theme";

import { GithubOutlined, MailOutlined, WechatOutlined } from "@ant-design/icons";

const Header: React.FC = ()=>{
    const {theme, toggleTheme} = useThemeMode();
    const themeMode = theme === "light" ? lightTheme : darkTheme;
    return (
        <NavBar theme={themeMode}>
            <Logo href="/"/>
            <NavBarWrapper>
                <NavBarItem theme={themeMode}>
                    {
                        navMap.map((navItem:INavItem)=>{
                            return<a className="item" key={navItem.to} href={navItem.to}>{navItem.title}</a>
                        })
                    }
                </NavBarItem>
                <Interactions>
                    <SocialMediaIconWrapper theme={themeMode}>
                        <li><WechatOutlined /></li>
                        <li><GithubOutlined /></li>
                        <li><MailOutlined /></li>
                    </SocialMediaIconWrapper>
                </Interactions>
            </NavBarWrapper>
        </NavBar>
    )
}

export default Header;