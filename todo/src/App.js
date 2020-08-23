import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// For now we dont need that (assume logo.svg is deleted)
//import logo from './logo.svg';

// import Todos.js
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
// import uuid from "react-uuid";
import axios from "axios";

import './App.css';
import About from './components/pages/about';

class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data}))
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  // Delete Todo
  delTodo = (id) => {
    axios.delete("https://jsonplaceholder.typicode.com/todos/${id}")
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }

  // Add Todo
  addTodo = (title) => {
    axios.post("https://jsonplaceholder.typicode.com/todos", {
    title,
    completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data]})) ;
  }

  render() {
    return (
      <Router>
        <div className="App">
          {/*
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React from Emrah 
            </a>
          </header>
          */}
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
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
