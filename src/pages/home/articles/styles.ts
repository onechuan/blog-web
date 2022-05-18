import styled from "styled-components";


export const ArticleContainer = styled.div`
    padding-top:40px;
    .title{
        text-align: left;
        padding: 0 20px;
        font-size: 20px;
        width: 200px;
        color: orange;
        border-bottom: 1px dashed orange;
    }
`

export const ArticlesWrapper = styled.ul`
    .article-item{
        display: flex;
        margin-bottom: 3rem;
        height: 22rem;
        text-align: right;
        color: rgb(150, 150, 150);
        background: rgb(255, 255, 255);
        /* border-radius: 0.5rem; */
        box-shadow: rgb(0 0 0 / 50%) 0px 1px 20px -8px;
        text-shadow: rgb(0 0 0 / 10%) 0px 0px 1px;
        overflow: hidden;
        .cover{
            display: block;
            position: relative;
            width: 33rem;
            overflow: hidden;
            cursor: pointer;
        }
        .content{
            box-sizing: border-box;
            padding: 1.8rem 2.4rem;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            .time{
                width: 100%;
                font-size: 0.9rem;
            }
            .content-title{
                width: 100%;
                margin: 1.4rem 0px;
                font-size: 1.3rem;
                font-weight: 700;
                color: rgb(80, 78, 78);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                cursor: pointer;
            }
            .desc{
                margin: 1.4rem 0px 1rem;
                min-height: 8rem;
                font-size: 1.1rem;
                line-height: 1.5;
                color: rgb(80, 78, 78);
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 5;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
        .dots{
            display: flex;
            justify-content: flex-end;
            width: 36px;
            cursor: pointer;
            li{
                margin-left: 3px;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: #666;
                
            }
            &:hover{
                li{
                    background-color: orange;
                }
            }
            
        }

        
    }
    .article-item:nth-child(2n){
        display: flex;
        flex-direction: column;
        flex-direction: row-reverse;
        
        .content{
          text-align: left;
          align-items: flex-start;
        
        }
    }
`