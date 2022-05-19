import styled from "styled-components";

export const LineWrapper = styled.div`
    margin-top: 5rem;
    
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-bottom: 30px;
    .line-main{
        height: 100%;
        border: 1px solid hsla(210,8%,51%,.09);
        background: #f0f5ff;
        .music-box{
            width: 100%;
            height: 150px;
            transition: all 0.4s ease 0s;
            background: url(https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/music_back1.png) 50% center / cover no-repeat;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            h1{
                font-size: 30px;
                font-family: "Slidefu";
                font-weight: 800;
            }
        }
        .timeline-box{
            width: 100%;
            height: 100%;
            padding: 0 30px;
            padding-top: 30px;
            box-sizing: border-box;
            .time{
                color: rgb(44, 93, 242);
                border-bottom: 1px dashed rgb(44, 93, 242);
            }
            .content{
                img{
                    width: 100%;
                    object-fit: cover;
                }
            }
        }
    }
    /* 手机样式 */
    @media not screen and (min-width: 60em) {
        .line-main {
            width: 100%;
            margin-right: 0px;
        }
        .line-right {
            display: none;
        }
    }
`