
import { fetchArticleHots } from "@/api/article";
import { IArticle } from "@/interface/article";
import React, { useEffect, useState } from "react";
import { HotContainer } from "./styles";

const Hots: React.FC = ()=>{
    const [hots, setHots] = useState<IArticle[]>([])
    useEffect(()=>{
        fetchArticleHots().then(res=>{
            console.log("hots",res);
            setHots(res.hots)
        })
    },[])
    return (
        <HotContainer>
            <h2 className='title'>HOT</h2>
            <ul className='hots'>
                {
                    hots.map((hot:IArticle)=>{
                        return (
                            <li key={hot.id} className='hot-item'><img src={hot.cover} alt="" /></li>
                        )
                    })
                }
            </ul>
        </HotContainer>
    )
}

export default Hots;