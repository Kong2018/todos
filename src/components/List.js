import React, {Component} from "react";

class List extends Component {
    constructor(props) {
        super(props);
    }

/*
    changeCompleted(index) {
        // this.props.changeState(indedx)
        console.log(index)
    }
*/

    render() {
        return (<ul>
            {
                this.props.list.map((value, index) => {
                    return <li style={value.completed ? {textDecoration: "line-through"} : {}}
                               onClick={(e) => {
                                   // this.changeCompleted(value.index)
                                   this.props.changeState(value.index)

                               }} key={index}>{value.text}</li>
                })
            }
        </ul>)
    }

}

export default List