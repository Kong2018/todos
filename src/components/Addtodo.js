import React, {Component} from "react"

class Addtodo extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    add(...arg) {
        // console.log(this.state.value)
        this.props.addTodo(this.state.value)
    };

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (<div>
            <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
            <button onClick={this.add.bind(this, 1)}>增加</button>
        </div>)
    }
}

export default Addtodo