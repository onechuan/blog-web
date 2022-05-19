import React from "react";
import { AboutWrapper } from "./styles";
import ReactMarkdown from "react-markdown";

const markdown = `# 关于我
> 这是我
## 写在前面
异步组件，其实和异步请求数据一样，只不过是通过异步加载的方式去加载和渲染组件。异步组件有什么作用，它可以用于代码分割和服务端下发组件等场景。函数式组件其实允许普通函数定义组件，将函数返回值作为组件渲染的内容。函数式组件最大的特点就是无状态。
## 异步组件要解决的问题
同步渲染：
上面代码中，通过动态导入的方式实现加载组件，会返回一个Promise实例，组件加载成功后会调用createApp函数完成挂载，从而实现异步渲染。
问题很多的小明就会问：上面代码中不是实现的是异步渲染整个页面吧，只需要渲染部分页面那么应该如何处理呢？
# 一些话
遇到了许多挫折，但也在不断的努力，只有自己够优秀，才不用去看别人眼色，才能去做一些自己想做的事情，才不会被别人决定你的去向，努力活成自己想要的样子
# 在路上
>就此告别，却也期待，那蓝天下再一次疯狂的冒险。
`;

const About: React.FC = ()=>{
    return (
        <AboutWrapper>
            
            <div className="content-container">
                <div className="info-box">
                    <div className="avatar">
                        <img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/avat.jpg" alt="" />
                    </div>
                    <div className="info">
                        <div className="name"></div>
                        <div>江西吉安 | 男</div>
                        <p className="desc">
                        Hi，我是一川，欢迎来到我的小站！
                        </p>
                    </div>
                </div>
                <div className="detail-box">
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                    </div>
            </div>
        </AboutWrapper>
    )
}

export default About;