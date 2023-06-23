import React from 'react';

export default function Completed() {
  return (
    <>
      <div className="completed-container">
        <h2>Completed Todos</h2>
        <ul>
          <li>
            <h3>Todo Name</h3>
            <span>Completed: 4 Days ago</span>
          </li>
        </ul>
      </div>
    </>
  );
}
