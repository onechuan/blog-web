import React from "react";
import  Cover  from "./components/Cover";
import { CoverWrapper, HomeContainer, HomeMain, MottoSocialMediaBar } from "./styled";

const cover = "https://edge.yancey.app/beg/abft7ifo-1645915912191.jpeg";

const HomePage: React.FC = ()=>{
    
    return (
        <HomeContainer>
            <CoverWrapper>
                <Cover cover={cover} loading={false}/>
            </CoverWrapper>
            <HomeMain>
                <div className="main" style={{height:"1000px"}}></div>
            </HomeMain>
        </HomeContainer>
      
    )
}

export default HomePage;