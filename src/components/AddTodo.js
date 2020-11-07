import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onOurInputChange = (e) => {
        this.setState({ [e.target.name]: [e.target.value] });
    }

    onOurFormSubmit = (e) => {

        e.preventDefault();

        this.props.addOurTodo(this.state.title);

        this.setState({
            title: ''
        })
    }

    render() {
        return (
            <div style={{ padding: '10px' }}>

                <form onSubmit={this.onOurFormSubmit}>

                    <input type="text" name="title" placeholder="Add ToDo ..."
                        style={{ flex: '10', padding: '5px' }}
                        value={this.state.title}
                        onChange={this.onOurInputChange} />

                    {'  '}

                    <input type="submit" value="Submit" className="addButton"
                        style={{ flex: '1' }} />

                </form>
            </div>
        )
    }
}

export default AddTodo
