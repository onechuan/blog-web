import { Divider, Timeline } from "antd";
import { LineWrapper } from "./styles";
import React from "react";
const TimelinePage: React.FC = ()=>{
    return (
        <LineWrapper>
            <div className="line-main">
                <div className="music-box">
                    <h1>一码平川的时间线</h1>
                </div>
                <div className="timeline-box">
                    <Timeline mode="alternate">
                        {
                            [1,2,3,4,5,6].map((item,index)=>{
                                return <Timeline.Item key={index}>
                                    <div className="time">2020-02-02 02:02:02</div>
                                    <div className="content">
                                        <h3>亲啊盾安 </h3>
                                        <p>加了许多动画和一些元素，改变了一些样式，加了热门文章，热门评论，滚动真做不来。评论可以点赞啦，今天上线啦！还有个页面没完成，哈哈！</p>
                                        <img src="https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1605624275716.png" alt="ss" />
                                    </div>
                                </Timeline.Item>
                            })
                        }
                        <Timeline.Item>
                            一直在前进的路上...
                        </Timeline.Item>
                    </Timeline>
                </div>
            </div>
            <div className="line-right">
            </div>
        </LineWrapper>
    )
    
};

export default TimelinePage;