import React, {Component} from "react";
import Footer from "./Footer"
import {VisibilityFilters} from "../actions";
import AddTodo from "../containers/AddTodo"
import TodoList from "../components/TodoList";
import {connect} from "react-redux"
import {toggleTodo} from "../actions";
import {setVisibilityFilter} from "../actions";
import {addTodo as add} from '../actions'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            throw new Error('Unknow filter:' + filter)
    }
};

const mapStateToProps = state => (
    {
        todos: getVisibleTodos(state.todos, state.visibilityFilter),
        filter: state.visibilityFilter
    }
);

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    setFilter: filter => dispatch(setVisibilityFilter(filter)),
    addTodo: value => dispatch(add(value)),
});

const App = ({dispatch, todos, toggleTodo, filter, setFilter, addTodo}) => (
    <div>
        <AddTodo addTodo={addTodo}/>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
        <Footer filter={filter} setFilter={setFilter}/>
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(App)