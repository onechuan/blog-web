import styled from "styled-components";

export const ListWrapper =  styled.ul`
    width: 100%;
    height: 100%;
    padding: 10px;
    
    .content-item{
        width: 100%;
        height: 200px;
        border-radius: 5px;
        padding: 20px;
        display: flex;
        margin-bottom: 20px;
        background-color: rgba(255, 255, 255, 0.5);
        border: 1px solid #ccc;
        cursor: pointer;
        color: #333;
        /* background: rgb(240, 245, 255); */
        
        &:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 10px #ccc;
            
            background: rgb(240, 245, 255);
        }
        .content-item-left{
            width: 240px;
            height: 160px;
            border-radius: 10px;
            background-color: blue;
            overflow: hidden;
            .cover{
                width: 100%;
                height: 100%;
                object-fit: cover;
                &:hover{
                    transform: scale(2);
                }
            }
        }
        .content-item-right{
            flex: 1;
            .title{
                font-size: 20px;
            }
            .info{
                border-bottom: 1px solid rgb(44,93,242);
                display: flex;
                justify-content: space-between;
                ul{
                    margin-left: 20px;
                    
                }
            }
        }
        
    }
    .content-item:nth-child(n){
        animation: cssnice .7s ease-out forwards;
        .content-item-left{
            margin: 0;
        }
        .content-item-right{
            margin-left: 20px;
        }
    }
    .content-item:nth-child(2n){
        display: flex;
        flex-direction: row-reverse;
        animation: cssgood .7s ease-out forwards;
        .content-item-left{
            margin: 0;
        }
        .content-item-right{
            margin-right: 20px;
        }
    }
    
    @keyframes cssnice {
        0% {
        opacity: 0;
        transform: translate3d(-40%, 0, 0);
        }
        50% {
        opacity: 1;
        transform: translate3d(3%, 0, 0);
        }
        65% {
        opacity: 1;
        transform: translate3d(-2.5%, 0, 0);
        }
        80% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        }
        90% {
        opacity: 1;
        transform: translate3d(-1%, 0, 0);
        }
        100% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        }
    }
    @keyframes cssgood {
        0% {
        opacity: 0;
        transform: translate3d(40%, 0, 0);
        }
        50% {
        opacity: 1;
        transform: translate3d(3%, 0, 0);
        }
        65% {
        opacity: 1;
        transform: translate3d(2.5%, 0, 0);
        }
        80% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        }
        90% {
        opacity: 1;
        transform: translate3d(1%, 0, 0);
        }
        100% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        }
    }
    
    /* 手机样式 */
    @media  screen and ( min-width: 395px ) and (max-width: 65em) {
        .flex-pc{
            display: none;
        }
        .flex-m{
            width: 100%;
            height: 300px;
            display: block;
            position: relative;
            .cover-container{
                width: 100%;
                height: 100%;
                overflow: hidden;
                .cover{
                    width: 100%;
                    height: 100%;
                }
            }
            .content-container{
                display: flex;
                flex-direction: column;
                margin: 0 auto;
                padding: 5px 10px;
                width: calc(100% - 40px);
                position: absolute;
                z-index: 2;
                bottom: 20px;
                height: 30%;
                background-color: rgba(0,0,0,0.4);
                border-radius: 0 0 10px 10px;
                color: #fff;
                .title{
                    color: #fff;
                }
                .info{
                    border-bottom: none;
                    margin-bottom: 0;
                    display: flex;
                    justify-content: flex-start;
                }
                .desc{
                    display: none;
                }
            }
        }
    }
    @media not screen and (min-width: 395px){
        .flex-pc{
            display: none;
        }
        .flex-m{
            width: 100%;
            height: 250px;
            display: block;
            position: relative;
            .cover-container{
                width: 100%;
                height: 100%;
                overflow: hidden;
                .cover{
                    width: 100%;
                    height: 100%;
                }
            }
            .content-container{
                display: flex;
                flex-direction: column;
                margin: 0 auto;
                padding: 5px 10px;
                width: calc(100% - 40px);
                position: absolute;
                z-index: 2;
                bottom: 20px;
                height: 40%;
                background-color: rgba(0,0,0,0.4);
                border-radius: 0 0 10px 10px;
                color: #fff;
                .title{
                    color: #fff;
                }
                .info{
                    border-bottom: none;
                    margin-bottom: 0;
                    display: flex;
                    flex-direction: column;
                    ul{
                        margin-left: 0;
                    }
                }
                .desc{
                    display: none;
                }
            }
        }
    }
`