import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

    render() {

        return this.props.todoList.map((item) => (

            <TodoItem ourTodo={item} key={item.id}
                markCompleted={this.props.markCompleted}
                deleteOurTodo={this.props.deleteOurTodo}
            />
        ));
    }
}

//Prop Types
Todos.propTypes = {
    todoList: PropTypes.array.isRequired,  //an array
    markCompleted: PropTypes.func.isRequired, //a function
    deleteOurTodo: PropTypes.func.isRequired  //a function
}

export default Todos;
