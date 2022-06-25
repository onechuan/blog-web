import styled from "styled-components";

export const HotContainer = styled.div`
    padding-top:20px;
    width: 100%;
    .title{
        text-align: left;
        padding: 0 20px;
        font-size: 20px;
        width: 200px;
        color: orange;
        border-bottom: 1px dashed orange;
    }
    .hots{
        display: flex;
        justify-content: space-between;
        .hot-item{
            width: 32%;
            display: block;
            position: relative;
            height: 11rem;
            border-radius: 0.5rem;
            box-shadow: rgb(0 0 0 / 30%) 1px 1px 3px;
            overflow: hidden;
            transition: all 400ms linear 0s;
            cursor: pointer;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
`