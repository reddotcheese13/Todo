import "./App.css";
import { useState } from "react";
import TodoTable from "./components/TodoTable";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Practice coding", assignedTo: "Lohit" },
    { rowNumber: 2, rowDescription: "Go for a walk", assignedTo: "Lohit B" },
  ]);
  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: description,
        assignedTo: assigned,
      };
      setTodos((todos) => [...todos, newTodo]);
    }
  };
  const deleteTodo = (deleteRowNumber) => {
    const filtered = todos.filter((todo) => todo.rowNumber !== deleteRowNumber);
    setTodos(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header"> Your Todo List </div>
        <div className="card-body">
          <TodoTable todo={todos} deleteTodo={deleteTodo} />
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
