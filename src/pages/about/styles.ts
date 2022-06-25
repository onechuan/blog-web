import styled from "styled-components";

export const AboutWrapper = styled.div`
    margin: 0 auto;
    margin-top: 5rem;
    max-width: 59rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    .content-container{
        width: 100%;
        border: 1px solid hsla(210,8%,51%,.09);
        background: #f0f5ff;
        padding: 20px;
        .info-box{
            height: 200px;
            display: flex;
            align-items: flex-end;
            justify-content: flex-start;
            padding: 20px;
            background: url(https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/person.png) center top no-repeat;
            .avatar{
                margin-right: 20px;
                img{
                    width: 64px;
                    height: 64px;
                    border-radius: 10px;
                }
            }
            .info{
                color: #fff;
                .desc{
                    margin: 0;
                    padding: 0;
                }
            }
        }
        .detail-box{
            width: 100%;
            margin-top: 20px;
            background: #fff;
            padding: 20px;
        }
    }
    .content-right{
        box-sizing: border-box;
        margin-left: 20px;
        height: 100%;
        min-width: 250px;
        width: 250px; 
    }
    /* 手机样式 */
    @media not screen and (min-width: 60em) {
      .content-container {
        width: 100%;
        margin-right: 0px;
      }
      .content-right {
        display: none;
      }
    }
`