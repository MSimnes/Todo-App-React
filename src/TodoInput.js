import React from 'react';

export default function TodoInput({ todo, setTodo, addTodo, key }) {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        name="todo"
        placeholder=" Create a new todo"
        value={todo}
        onChange={(event) => {
          setTodo(event.target.value);
        }}
        key={key}
      />
      <button className="add-button" onClick={addTodo}>
        Add
      </button>
    </div>
  );
}
