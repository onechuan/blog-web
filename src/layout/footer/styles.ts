import styled from "styled-components"

export const FooterWrapper = styled.footer`
    .footer-content{
        border-top: 1px solid #eee;
        width: 100%;
        height: 60px;
        background-color: #fff;
        font-size: #757575;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
            margin: 0 10px;
        }
        .logo{
            font-size: 20px;
        }
        .desc{
            font-size: 16px;
        }
    }
    /* 手机样式 */
    @media not screen and (min-width: 50em) {
        .footer-content{
            display: none;
        }
    }
`
