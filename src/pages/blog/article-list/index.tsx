import React, { memo, useCallback, useEffect, useState } from "react"
import { ListWrapper } from "./styles";
import {Link} from "react-router-dom";

interface IArticle {
    id:number;
    title:string;
    time:number;
    likes:number;
    reads:number;
    reviews:number;
    content:string;
    description:string;
    cover:string;
}

interface IProps{
    articleList: IArticle[];
}

const ArticleList: React.FC<IProps> = ({articleList}) =>{

    return <ListWrapper className="content-items">
        {
            articleList && articleList.map(
                (article: IArticle)=>
                (<Link key={article.id} to={`/article/detail/${article.id}`}>
                    
                    <li  className={`content-item flex-pc flex-m `}>

                        <div className="content-item-left cover-container ">
                            <img className="cover" src={article.cover} alt="" />
                        </div>
                        <div className="content-item-right content-container ">
                            <h1 className="title ">题目：{article.title}</h1>
                            <p className="info ">
                                <span>{article.time}</span> 
                                <span>评论：{article.reviews} 点赞：{article.likes} 阅读：{article.reads}</span>
                            </p>
                            <p className="desc ">{
                                article.description
                            }</p>
                        </div>
                    </li>
                </Link>)
            )
        }
    </ListWrapper>
}

export default memo(ArticleList)