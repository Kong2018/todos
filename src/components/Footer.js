import React from 'react';

//更改无状态组件的构建方式。使用箭头函数绑定this，是由结构赋值
const Footer = ({filter, currentState}) => (
    <div>
        <span>筛选</span>
        <a href="#" onClick={(e) => {
            filter("ALL")
        }}>全部</a>
        <a href="#" onClick={(e) => {
            filter("FINISH")
        }}>已完成</a>
        <a href="#" onClick={(e) => filter("WAITING")}>未完成</a>
        当前选中：{currentState}
    </div>
);

export default Footer