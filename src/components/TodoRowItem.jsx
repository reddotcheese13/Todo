import React, { useState } from "react";
import EditTodoModal from "./EditTodoModal";

export default function TodoRowItem(props) {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleOpenEditModal = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  return (
    <tr>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.assignedTo}</td>
      <td>{props.deadline}</td>
      <td>{props.completeStatus ? "Complete" : "Incomplete"}</td>

      <td>
        <button
          className="btn btn-danger"
          onClick={() => props.deleteTodo(props.rowNumber)}
        >
          Delete
        </button>
        <button
          className="btn btn-primary"
          style={{ marginLeft: "8px" }}
          onClick={handleOpenEditModal}
        >
          Edit
        </button>
        <EditTodoModal
          show={showEditModal}
          onClose={handleCloseEditModal}
          onSave={props.editTodo}
          rowNumber={props.rowNumber}
          rowDescription={props.rowDescription}
          assignedTo={props.assignedTo}
          deadline={props.deadline}
          completeStatus={props.completeStatus}
        />
      </td>
    </tr>
  );
}
