import React, { useEffect, useState} from "react";
import { ArticleWrapper, PaginationWrapper } from "./styles"
import { useTypedDispatch } from "@/store/hooks";
import { getArticles } from "@/store/article";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Divider, Input, Pagination } from "antd";
import ArticleList from "./article-list";


const Blog: React.FC = ()=>{
    const [current, setCurrent] = useState(1);

    const articleData = useSelector((state: RootState)=>state.article.data);
    const { articles } = articleData;
    const dispatch = useTypedDispatch();

    useEffect(()=>{
        dispatch(getArticles({}))
    }, [] )
    
    function onChange(page:number, pageSize:number){
        setCurrent(page);
    }
    return (
        <ArticleWrapper>
            <Divider  orientation="left">
                <span style={{marginRight:"20px"}}>博客总计：{articleData.total}篇</span>  
                <Input.Search placeholder="搜索文章..."  size="middle" style={{ width: 160 }} />
            </Divider>
            <ArticleList articleList={articleData.articles}/>
            <PaginationWrapper>
                <Pagination current={current} size="small" total={articleData.total} showSizeChanger showQuickJumper onChange={(page, pageSize)=>onChange(page, pageSize)}/>
            </PaginationWrapper>
        </ArticleWrapper>
    )
};

export default Blog;