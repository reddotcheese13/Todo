import React from "react";
import TodoRowItem from "./TodoRowItem";

export default function TodoTable(props) {
  const items = props.todo;

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Assigned</th>
          <th scope="col">Deadline</th>
          <th scope="col">Complete Status</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <TodoRowItem
            key={item.rowNumber}
            rowNumber={item.rowNumber}
            rowDescription={item.rowDescription}
            assignedTo={item.assignedTo}
            deadline={item.deadline}
            completeStatus={item.completeStatus}
            deleteTodo={props.deleteTodo}
            editTodo={props.editTodo}
          />
        ))}
      </tbody>
    </table>
  );
}
