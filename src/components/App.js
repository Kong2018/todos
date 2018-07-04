import React, {Component} from "react";
import Footer from "./Footer"
import AddTodo from "../containers/AddTodo"
import VisibleTodoList from "../containers/VisibleTodoList"

/*class App extends Component {
    render() {
        return (<div>
            <div>to do list</div>
            <Footer/>
        </div>)
    }
}*/
const App = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);

export default App