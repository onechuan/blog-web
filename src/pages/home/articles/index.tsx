
import { fetchArticleList } from "@/api/article";
import { IArticle } from "@/interface/article";
import React, { useEffect, useState } from "react";
import { ArticleContainer, ArticlesWrapper } from "./styles";


const Articles: React.FC = ()=>{

    const [articles, setArticles] = useState<IArticle[]>([])

    useEffect(()=>{
        fetchArticleList().then(res=>{
            console.log("res",res);
            setArticles(res.articles)
        })
    },[])
    return (
        <ArticleContainer>
            <h2 className='title'>The Latest!</h2>
            <ArticlesWrapper>
                {
                    articles.map((article:IArticle)=>{
                        return (
                            <li key={article.id} className='article-item'>
                                <img className='cover' src={article.cover} alt="" />
                                <div className="content">
                                    <p className="time">Released At {article.time}</p>
                                    <h2 className="content-title">{article.title}</h2>
                                    <div className="tags"></div>
                                    <p className="desc">
                                        {article.description}
                                    </p>
                                    <ul className='dots'>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                
                            </li>
                        )
                    })
                }
            </ArticlesWrapper>
        </ArticleContainer>
        
    )
}

export default Articles;
