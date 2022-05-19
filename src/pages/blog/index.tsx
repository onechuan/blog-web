import React, { useEffect, useState} from "react";
import {Input,Divider, Pagination} from "antd";
import {ArticleWrapper,PaginationWrapper} from "./styles"
import ArticleList from "./article-list";
import { useTypedDispatch } from "@/store/hooks";
import { getArticles } from "@/store/article";
import { useSelector } from "react-redux";
import { RootState } from "@/store";


const ArticlePage: React.FC = ()=>{
    const [current, setCurrent] = useState(1);

    const articleData = useSelector((state: RootState)=>state.article.data);
    const dispatch = useTypedDispatch();

    useEffect(()=>{
        dispatch(getArticles({}))
        
        
    },[])
    console.log("articles",articleData);

    
    function onChange(page:number, pageSize:number){
        console.log("page",page);
        
        setCurrent(page);
    }
    return (
        <ArticleWrapper>
            <Divider  orientation="left"><span style={{marginRight:"20px"}}>博客总计：{articleData.total}篇</span>  <Input.Search placeholder="搜索文章..."  size="middle" style={{ width: 160 }} /></Divider>
            <ArticleList articleList={articleData.articles}/>
            <PaginationWrapper>
                <Pagination current={current} size="small" total={articleData.total} showSizeChanger showQuickJumper onChange={(page, pageSize)=>onChange(page, pageSize)}/>
            </PaginationWrapper>
        </ArticleWrapper>
    )
};

export default ArticlePage;