
import React from "react";
import { ArticleContainer, ArticlesWrapper } from "./styles";


const Articles: React.FC = ()=>{
    return (
        <ArticleContainer>
            <h2 className='title'>The Latest!</h2>
            <ArticlesWrapper>
                {
                    [1,2,3].map((item:any)=>{
                        return (
                            <li key={item} className='article-item'>
                                <img className='cover' src="https://edge.yancey.app/beg/e4df44ff5e34d207aaa69806c88d70df-700.jpg" alt="" />
                                <div className="content">
                                    <p className="time">Released At May 2, 2022</p>
                                    <h2 className="content-title">[HTTP 系列] 第 5 篇 —— 网络安全</h2>
                                    <div className="tags"></div>
                                    <p className="desc">
                                    这里是《写给前端工程师的 HTTP 系列》, 记得有位大佬曾经说过: 大厂前端面试对 HTTP 的要求比 CSS 还要高, 由此可见 HTTP 的重要程度不可小视. 文章写作计划如下, 视情况可能有一定的删减, 本篇是该系
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