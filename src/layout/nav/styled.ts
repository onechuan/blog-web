import styled from "styled-components";
import { flexMixin } from "@/styled/mixins";
import breakpoints from "@/styled/breakpoints";

export const NavBar = styled.nav`
  @media only screen and ${breakpoints.device.laptop} {
    box-sizing: border-box;
    ${flexMixin('space-between')}
    position: fixed;
    left: 50%;
    right: 50%;
    transform: translate3d(-50%, -50%, 0);
    bottom: 1rem;
    padding: 0 1rem;
    width: 45%;
    height: 3.6rem;
    border-radius: 3rem;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(16px);
  }
`;

export const SVG = styled.svg`
  width: 2rem;
  height: 2rem;
`
