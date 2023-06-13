import React, { Component } from 'react';
import './App.css';
import CourseForm from './app/component/CourseForm';
import CourseList from './app/component/CourseList';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <h1 style={{
          fontSize: "2.5rem",
          marginBottom: "2rem"
        }}>
          My Course List</h1>
        <CourseForm />
        <CourseList />
      </div>
    );
  }
}

export default App;
