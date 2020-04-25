import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Components/TodoList';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div id="air"></div>
      <TodoList />
    </>
  );
}

export default App;
