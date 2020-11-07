import { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'react-uuid';
import './App.css';

class App extends Component {

  state = {
    todos: [{
      id: uuid(),
      title: 'Take out the trash',
      completed: false
    }, {
      id: uuid(),
      title: 'Dinner with wife',
      completed: true
    },
    {
      id: uuid(),
      title: 'Meeting with boss',
      completed: false
    }]
  }

  markCompleted = (id) => {

    this.setState({

      todos: this.state.todos.map(item => {

        if (item.id === id) {
          item.completed = !item.completed;
        }

        return item;
      })

    });
  }

  deleteOurTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(item => item.id !== id)] })
  }

  addOurTodo = (title) => {

    //console.log(title);

    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    }

    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {

    /* console.log(this.state.todos); */

    return (
      <div className="App">

        <div className="container">

          <Header />

          <AddTodo addOurTodo={this.addOurTodo} />

          <Todos todoList={this.state.todos}
            markCompleted={this.markCompleted}
            deleteOurTodo={this.deleteOurTodo} />

        </div>
      </div>
    );
  }
}

export default App;
