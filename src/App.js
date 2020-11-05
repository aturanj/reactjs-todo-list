import { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {

  state = {
    todos: [{
      id: 1,
      title: 'Take out the trash',
      completed: false
    }, {
      id: 2,
      title: 'Dinner with wife',
      completed: true
    },
    {
      id: 3,
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

  render() {

    /* console.log(this.state.todos); */

    return (
      <div className="App">

        <Todos todoList={this.state.todos}
          markCompleted={this.markCompleted}
          deleteOurTodo={this.deleteOurTodo} />

      </div>
    );
  }
}

export default App;
