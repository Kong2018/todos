import React from "react";

//更改无状态组件的构建方式。使用箭头函数绑定this，是由结构赋值
const List = ({list, changeState}) => (<ul>
    {
        list.map((value, index) => {
            return <li style={value.completed ? {textDecoration: "line-through"} : {}}
                       onClick={(e) => {
                           changeState(value.index)
                       }} key={index}>{value.text}</li>
        })
    }
</ul>);

export default List