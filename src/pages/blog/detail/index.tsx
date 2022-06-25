
import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';
import { ArticleHeader, ArticleMain, ArticleWrapper } from "./styles";
import {EyeOutlined, LikeOutlined, MessageOutlined, ClockCircleOutlined} from "@ant-design/icons";

interface IArticle {
    title:string;
    time:number;
    likes:number;
    reads:number;
    reviews:number;
    content:string;
}

const Detail: React.FC = ()=>{
    const [article, setArticle] = useState<IArticle>({
        title:"新文章",
        time:20220518,
        likes:22,
        reads:22,
        reviews:22,
        content:"ok"
    })
    return (
        <ArticleWrapper>
            <ArticleHeader>
                <h1 className="title">题目: {article?.title}</h1>
                <ul className="info">
                    <li className="info-item">< ClockCircleOutlined /><span>{article?.time}</span></li>
                    <li className="info-item"><LikeOutlined/><span>{article?.likes}</span></li>
                    <li className="info-item"><EyeOutlined /><span>{article?.reads}</span></li>
                    <li className="info-item"><MessageOutlined /><span>{article?.reviews}</span></li>
                </ul>
            </ArticleHeader>
            <ArticleMain>
                <ReactMarkdown>{article.content as string}</ReactMarkdown>
            </ArticleMain>
            
        </ArticleWrapper>
    )
};

export default Detail;
