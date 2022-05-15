import React from "react";
import { Link } from "react-router-dom";
import { NavBar,SVG } from "./styled";
import { SVG_SPRITE } from "@/config/constants";

const Nav: React.FC = ()=>{
  return (
    <NavBar>
      <Link to="/">
        <SVG>
          <use xlinkHref={SVG_SPRITE.home2}/>
        </SVG>
      </Link>
      <Link to="/music">
        <SVG>
          <use xlinkHref={SVG_SPRITE.music2} />
        </SVG>
      </Link>
    </NavBar>
  )
}

export default Nav;