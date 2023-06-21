import React, { useState } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  // Function to generate a unique ID for each todo item
  const generateUniqueID = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  // Function to add a new todo item
  const addTodo = () => {
    if (todo !== '') {
      setTodoList([...todoList, todo]); // Add the new todo to the existing todo list
      setTodo(''); // Reset the todo input value
    }
  };

  // Function to delete a todo item
  const deleteTodo = (text) => {
    const newTodos = todoList.filter((todo) => {
      return todo !== text; // Filter out the todo item to be deleted
    });
    setTodoList(newTodos); // Update the todo list with the filtered list
  };

  return (
    <>
      <div className="App">
        <h1>React Todo App</h1>
        <TodoInput
          todo={todo}
          setTodo={setTodo}
          addTodo={addTodo}
          key={generateUniqueID} // Assign a unique key to the TodoInput component
        />
        <TodoList
          list={todoList}
          todoList={todoList}
          deleteTodo={deleteTodo}
          setTodoList={setTodoList}
        />
      </div>
    </>
  );
}
