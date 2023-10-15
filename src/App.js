import "./App.css";
import { useState } from "react";
import TodoTable from "./components/TodoTable";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      rowNumber: 1,
      rowDescription: "Practice coding",
      assignedTo: "Don",
      deadline: "2023-10-31",
      completeStatus: false,
    },
    {
      rowNumber: 2,
      rowDescription: "Go for a walk",
      assignedTo: "Hur Utme",
      deadline: "2023-11-05",
      completeStatus: true,
    },
  ]);

  const addTodo = (description, assigned, deadline, completeStatus) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }

    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      assignedTo: assigned,
      deadline: deadline,
      completeStatus: completeStatus,
    };

    setTodos((todos) => [...todos, newTodo]);
  };

  const deleteTodo = (deleteRowNumber) => {
    const filtered = todos.filter((todo) => todo.rowNumber !== deleteRowNumber);
    setTodos(filtered);
  };

  const editTodo = (
    rowNumber,
    editedDescription,
    editedAssigned,
    editedDeadline,
    editedCompleteStatus
  ) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.rowNumber === rowNumber) {
        return {
          ...todo,
          rowDescription: editedDescription,
          assignedTo: editedAssigned,
          deadline: editedDeadline,
          completeStatus: editedCompleteStatus,
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header"> Your Todo List </div>
        <div className="card-body">
          <TodoTable todo={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
