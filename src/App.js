import React, {Component} from 'react';
import logo from './logo.svg';
import Addtodo from './components/Addtodo'
import Footer from './components/Footer'
import List from './components/List'
import './App.css';

let currentIndex = 1;
let currentState = "ALL";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],

        };
        this.state.showList = this.state.list
    }

    addTodo(text) {
        let newList = [{text, completed: false, index: currentIndex++}, ...this.state.list];
        this.setState({
            list: newList,
            showList: newList
        })
    }

    filter(type = "ALL") {
        switch (type) {
            case "ALL":
                this.setState({
                    showList: this.state.list
                });
                currentState = "ALL";
                break;
            case "WAITING":
                this.setState({
                    showList: this.state.list.filter(x => !x.completed)
                });
                currentState = "WAITING";
                break;
            case "FINISH":
                this.setState({
                    showList: this.state.list.filter(x => x.completed)
                });
                currentState = "FINISH";
                break;
        }

    }

    changeState(index) {
        console.log(index);

        let newList = this.state.list.map(x => {
            if (x.index && index && x.index === index) {
                return Object.assign(x, {completed: !x.completed})
            } else {
                return x
            }
        });

        console.log(newList)
        this.setState({
            list: newList
        })
        this.filter(currentState)
    }

    render() {
        return (
            <div className="App">
                {JSON.stringify(this.state.list)}
                <Addtodo addTodo={(text) => this.addTodo(text)}/>
                <List list={this.state.showList} changeState={(index) => this.changeState(index)}/>
                <Footer filter={(type) => this.filter(type)}/>
            </div>
        );
    }
}

export default App;
