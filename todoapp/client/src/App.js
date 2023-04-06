import React from "react";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
import SearchForm from "./components/SearchForm";

const App = () => {
  return (
    <div className="app-container">
      <h1>Task Tracker</h1>
      <TodoForm />
      <SearchForm />
      <Todos />
    </div>
  );
};

export default App;
