import React from "react";
import { Link } from "react-router-dom";
import { INavItem, navMap } from "./config";
import {Logo, NavBar, NavBarItem} from "./styled";
import { useThemeMode } from "@/hooks";
import {lightTheme,darkTheme} from "@/styled/theme";

const Header: React.FC = ()=>{
    const {theme, toggleTheme} = useThemeMode();
    const themeMode = theme === "light" ? lightTheme : darkTheme;
    return (
        <NavBar theme={themeMode}>
            <Logo href="/"/>
            <NavBarItem theme={themeMode}>
                {
                    navMap.map((navItem:INavItem)=>{
                        return<a className="item" key={navItem.to} href={navItem.to}>{navItem.title}</a>
                    })
                }
            </NavBarItem>
        </NavBar>
    )
}

export default Header;