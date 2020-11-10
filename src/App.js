import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
//import uuid from 'react-uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    /*
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
    */

    todos: []
  }

  componentDidMount() {

    console.log("fetch up-to-date data");

    Axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(response => this.setState({ todos: response.data }));
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

    Axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`);  
      //.then(this.componentDidMount()); //get up-to-date data

    // only for visual 
    this.setState({ todos: [...this.state.todos.filter(item => item.id !== id)] })
  }

  addOurTodo = (title) => {

    /*
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    }
    */

    Axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title: title,
        completed: false
      })
      .then(response => this.setState({ todos: [...this.state.todos, response.data] }));

    //this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {

    /* console.log(this.state.todos); */

    return (
      <Router>
        <div className="App">
          <div className="container">

            <Header />

            <Route exact path="/" render={props => (

              <React.Fragment>

                <AddTodo addOurTodo={this.addOurTodo} />

                <Todos todoList={this.state.todos}
                  markCompleted={this.markCompleted}
                  deleteOurTodo={this.deleteOurTodo} />

              </React.Fragment>

            )} />

            <Route path="/about" component={About} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
