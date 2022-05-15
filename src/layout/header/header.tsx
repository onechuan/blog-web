import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../nav/styled";
import { Logo, NavBarItem } from "./styled";
import { INavItem, navMap } from "./config"

const Header: React.FC = ()=>{
    return (
        <NavBar>
            <Link to="/">
                <Logo />
            </Link>
            <NavBarItem>
                {
                    navMap.map(( navItem: INavItem)=>{
                        return <li key={navItem.to}>
                            <a  href={navItem.to}>
                                <svg>
                                    <use xlinkHref={navItem.link} />
                                </svg>
                                {navItem.title}
                            </a>
                        </li>
                    })
                }
            </NavBarItem>
        </NavBar>
    )
}

export default Header;