import React, {Component} from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <span>筛选</span>
                <a href="#" onClick={(e) => {
                    this.props.filter("ALL")
                }}>全部</a>
                <a href="#" onClick={(e) => {
                    this.props.filter("FINISH")
                }}>已完成</a>
                <a href="#" onClick={(e) => this.props.filter("WAITING")}>未完成</a>
            </div>
        )
    }
}

export default Footer