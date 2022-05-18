import React, { useState} from "react";
import {Input,Divider, Pagination} from "antd";
import {ArticleWrapper,PaginationWrapper} from "./styles"
import ArticleList from "./article-list";

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


const ArticlePage: React.FC = ()=>{
    const [articleList, setArticleList] = useState< IArticle[]>([]);
    const [total, setTotal] = useState(0);
    const [current, setCurrent] = useState(1);

    function onChange(page:number, pageSize:number){
        console.log("page",page);
        
        setCurrent(page);
    }
    return (
        <ArticleWrapper>
            <Divider  orientation="left"><span style={{marginRight:"20px"}}>博客总计：20篇</span>  <Input.Search placeholder="搜索文章..."  size="middle" style={{ width: 160 }} /></Divider>
            <ArticleList articleList={articleList}/>
            <PaginationWrapper>
                <Pagination current={current} size="small" total={total} showSizeChanger showQuickJumper onChange={(page, pageSize)=>onChange(page, pageSize)}/>
            </PaginationWrapper>
        </ArticleWrapper>
    )
};

export default ArticlePage;