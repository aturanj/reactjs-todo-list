import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {

    getStyle = () => {

        return {

            backgroundColor: '#f4f4f4',

            padding: '10px',

            borderBottom: '1px #ccc dotted',

            textDecoration: this.props.ourTodo.completed ? 'line-through' : 'none'
        }
    }

    render() {

        const { id, title } = this.props.ourTodo;

        return (

            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markCompleted.bind(this, id)} />
                    {' '}
                    {title}
                    <button style={buttonStyle} onClick={this.props.deleteOurTodo.bind(this, id)}> X </button>
                </p>
            </div>
        )
    }
}

//Prop Types
TodoItem.propTypes = {
    ourTodo: PropTypes.object.isRequired,  //an object
    markCompleted: PropTypes.func.isRequired,
    deleteOurTodo: PropTypes.func.isRequired
}

const buttonStyle = {
    backgroundColor: 'red',
    color: 'white',
    padding: '5px',
    borderRadius: '22%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
