import React from "react";

const TodoForm = () => {
  return (
    <div className="ui segment container">
      <div className="ui form">
        <div className="field">
          <label className="todo-label">Todo Task</label>
          <input type="text" name="todo" placeholder="Enter Todo Item" />
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
