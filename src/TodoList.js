import React, { useState } from 'react';
import LastSeen from './LastSeen';

export default function TodoList({ todoList, deleteTodo, setTodoList, date }) {
  const [editKey, setEditKey] = useState(null);
  const [editedTodo, setEditedTodo] = useState('');

  // Function to handle editing a todo item
  const handleEdit = (key, todo) => {
    setEditKey(key); // Set the edit key to the current key
    setEditedTodo(todo); // Set the edited todo to the current todo text
  };

  // Function to handle canceling the edit operation
  const handleCancelEdit = () => {
    setEditKey(null); // Reset the edit key to null
    setEditedTodo(''); // Reset the edited todo to an empty string
  };

  // Function to handle saving the edited todo item
  const handleSaveEdit = (key) => {
    if (editedTodo !== '') {
      const updatedTodoList = [...todoList]; // Create a copy of the todo list
      updatedTodoList[key] = editedTodo; // Update the todo at the specified key with the edited todo text
      setTodoList(updatedTodoList); // Update the todo list state with the modified list
      setEditKey(null); // Reset the edit key to null
      setEditedTodo(''); // Reset the edited todo to an empty string
    }
  };

  return (
    <>
      <h2>Current Todos</h2>
      <ul className="todo-list">
        {todoList.map((todo, key) => (
          <div className="todo" key={key}>
            {editKey === key ? (
              // Render the edit mode UI
              <>
                <input
                  type="text"
                  value={editedTodo}
                  onChange={(e) => setEditedTodo(e.target.value)}
                />
                <button
                  className="save-button"
                  onClick={() => handleSaveEdit(key)}
                >
                  Save
                </button>
                <button className="cancel-button" onClick={handleCancelEdit}>
                  Cancel
                </button>
              </>
            ) : (
              // Render the view mode UI
              <>
                <li key={key}>{todo}</li>
                <button
                  className="delete-button"
                  onClick={() => deleteTodo(todo)}
                >
                  Delete
                </button>
                <button
                  className="edit-button"
                  onClick={() => handleEdit(key, todo)}
                >
                  Edit
                </button>
                <span>
                  Days old: <LastSeen />
                </span>
              </>
            )}
          </div>
        ))}
      </ul>
    </>
  );
}
