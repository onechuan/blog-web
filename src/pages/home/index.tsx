import { fetchArticleList } from "@/api/article";
import React, { useEffect } from "react";
import Articles from "./articles";
import  Cover  from "./components/Cover";
import Slogan from "./components/Slogan";
import Hots from "./hots";
import Motto from "./motto-bar";
import { CoverWrapper, HomeContainer, HomeMain, MottoSocialMediaBar } from "./styled";

const cover = "https://edge.yancey.app/beg/abft7ifo-1645915912191.jpeg";

const HomePage: React.FC = ()=>{

    useEffect(()=>{
        fetchArticleList().then(res=>{
            console.log("res",res);
            
        })
    },[])
    
    return (
        <HomeContainer>
            <CoverWrapper>
                <Cover cover={cover} loading={false}/>
                <MottoSocialMediaBar>
                    <Slogan/>
                    <Motto mottos={[]} />
                </MottoSocialMediaBar>
            </CoverWrapper>
            <HomeMain>
                <Hots/>
                <Articles/>
            </HomeMain>
        </HomeContainer>

    )
}

export default HomePage;