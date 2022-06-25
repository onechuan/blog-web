import styled from "styled-components";

export const ArticleWrapper = styled.div`
    width: 994px;
    height: 100vh;
    padding: 20px;
    margin: 0 auto;
    margin-top: 90px;
    margin-bottom: 20px;
    background-color: #f0f5ff;
`;

export const ArticleHeader = styled.div`
    margin-top: 20px;
    .title{
        font-size: 30px;
        font-weight: bolder;
        line-height: 40px;
    }
    .info{
        display: flex;
        padding: 10px 0;
        .info-item{
            padding-right: 20px;
            span{
                margin-left: 10px;
            }
        }
        border-bottom: 1px solid #000;
    }
    .description{
        font-size: 16px;
    }
`;

export const ArticleMain = styled.div`
    padding-top: 20px;
`