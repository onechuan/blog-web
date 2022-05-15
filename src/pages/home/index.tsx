import React from "react";
import { CoverWrapper, HomeContainer, HomeMain, MottoSocialMediaBar } from "./styled";


const HomePage: React.FC = ()=>{
    return (
        <HomeContainer>
            <CoverWrapper>
                <MottoSocialMediaBar>
                </MottoSocialMediaBar>
            </CoverWrapper>
            <HomeMain>
                home
            </HomeMain>
        </HomeContainer>
    )
}

export default HomePage;