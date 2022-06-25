import React from "react";
import styled from "styled-components";
import { noUserSelectMixin } from 'src/styled/mixins'
import { glitchLoop1, glitchLoop2 } from 'src/styled/animations'
import { useThemeMode } from "@/hooks";
import { darkTheme, lightTheme } from "@/styled/theme";

const SloganWrapper = styled("h2")`
     margin-bottom: 2.4rem;
  font-size: 5.4rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  ${noUserSelectMixin()}

  &::before,
  &::after {
    position: absolute;
    content: attr(data-slogan);
    top: 0;
    width: 100%;
    clip: rect(0, 0, 0, 0);
  }

  &::before {
    left: -1px;
    text-shadow: ${({ theme }) => `1px 0 ${theme.colors.sloganRed}`};
  }

  &::after {
    left: 1px;
    text-shadow: ${({ theme }) => `-1px 0 ${theme.colors.sloganBlue}`};
  }

  &:hover::before {
    text-shadow: ${({ theme }) => `4px 0 ${theme.colors.sloganRed}`};
    animation: ${glitchLoop1} 0.8s infinite ease-in-out alternate-reverse;
  }

  &:hover::after {
    text-shadow: ${({ theme }) => `-5px 0 ${theme.colors.sloganBlue}`};
    animation: ${glitchLoop2} 0.8s infinite ease-in-out alternate-reverse;
  }

`



const Slogan: React.FC = ()=>{
  const {theme, toggleTheme} = useThemeMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return <SloganWrapper theme={themeMode} data-slogan="HI, ONECHUAN !">HI, ONECHUAN !</SloganWrapper>
}

export default Slogan;