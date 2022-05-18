import styled, { css } from "styled-components";

export const MottoBar = styled.section`
    position: relative;
    padding: 1.4rem 1.8rem;
    border-radius: 0.7rem;
`;

export const MottoContent = styled.p`
    margin-bottom: 1.4rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;


export const UpTriangle = styled.span`
    position: absolute;
    top: -2rem;
    left: 5rem;
    width: 0;
    height: 0;
    border: 1rem solid transparent;
`

export const SocialMediaIconWrapper = styled.ul`
    display: flex;
    justify-content: center;
    li{
        width: 2rem;
        height: 2rem;
        font-size: 2rem;
        margin: 0px 1rem;
        color: ${({ theme }) => theme.colors.white};
        cursor: pointer;
        text-align: center;
    }
    li:hover{
        transform: scale(2);
    }
`;




export default null;