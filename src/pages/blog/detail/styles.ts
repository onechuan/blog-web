import styled from "styled-components";

export const ArticleWrapper = styled.div`
    padding: 20px;
`;

export const ArticleHeader = styled.div`
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