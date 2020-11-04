
import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

    render() {

        return this.props.todoList.map((item) => (

            <TodoItem ourTodo={item} key={item.id}  markCompleted={this.props.markCompleted} />
        ));
    }
}

//Prop Types
Todos.propTypes = {
    todoList: PropTypes.array.isRequired  //an array
}

export default Todos;
