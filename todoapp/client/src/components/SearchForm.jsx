import React from "react";

const SearchForm = () => {
  return (
    <div className="search-container">
      <div className="ui segment container search">
        <div className="ui form">
          <div className="field">
            <label className="todo-label">Search Todo</label>
            <input type="text" name="search" placeholder="Search for a Task" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
