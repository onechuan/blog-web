import React, { useEffect, useState} from "react";
import {Input,Divider, Pagination} from "antd";
import {ArticleWrapper,PaginationWrapper} from "./styles"
import ArticleList from "./article-list";
import { fetchArticleList } from "@/api/article";

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
    const [articles, setArticles] = useState<IArticle[]>([]);
    const [total, setTotal] = useState(0);
    const [current, setCurrent] = useState(1);

    useEffect(()=>{
        fetchArticleList().then(res=>{
            console.log("res",res);
            setArticles(res.articles)
            setTotal(res.total)
            setCurrent(res.current)
        })
    },[])

    
    

    function onChange(page:number, pageSize:number){
        console.log("page",page);
        
        setCurrent(page);
    }
    return (
        <ArticleWrapper>
            <Divider  orientation="left"><span style={{marginRight:"20px"}}>博客总计：{total}篇</span>  <Input.Search placeholder="搜索文章..."  size="middle" style={{ width: 160 }} /></Divider>
            <ArticleList articleList={articles}/>
            <PaginationWrapper>
                <Pagination current={current} size="small" total={total} showSizeChanger showQuickJumper onChange={(page, pageSize)=>onChange(page, pageSize)}/>
            </PaginationWrapper>
        </ArticleWrapper>
    )
};

export default ArticlePage;