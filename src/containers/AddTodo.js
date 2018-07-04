import React from "react";
import {connect} from "react-redux"


const AddTodo = ({dispatch,addTodo}) => {
    let input;
    return (<div>
        <form onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
                return
            }
            addTodo(input.value)
            input.value = ""
        }}>
            <input type="text" ref={node => input = node}/>
            <button type="submit">Add To do</button>
        </form>
    </div>)
};

export default AddTodo