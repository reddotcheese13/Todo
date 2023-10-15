import React, { useState } from "react";

export default function EditTodoModal(props) {
  const [editedDescription, setEditedDescription] = useState(
    props.rowDescription
  );
  const [editedAssigned, setEditedAssigned] = useState(props.assignedTo);
  const [editedDeadline, setEditedDeadline] = useState(props.deadline);
  const [editedCompleteStatus, setEditedCompleteStatus] = useState(
    props.completeStatus
  );

  const handleSave = () => {
    props.onSave(
      props.rowNumber,
      editedDescription,
      editedAssigned,
      editedDeadline,
      editedCompleteStatus
    );
    props.onClose();
  };

  return (
    <div className={`modal ${props.show ? "d-block" : ""}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Todo</h5>
            <button type="button" className="close" onClick={props.onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Description:</label>
              <input
                type="text"
                className="form-control"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Assigned To:</label>
              <input
                type="text"
                className="form-control"
                value={editedAssigned}
                onChange={(e) => setEditedAssigned(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Deadline:</label>
              <input
                type="date"
                className="form-control"
                value={editedDeadline}
                onChange={(e) => setEditedDeadline(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Complete Status:</label>
              <select
                className="form-control"
                value={editedCompleteStatus}
                onChange={(e) => setEditedCompleteStatus(e.target.value)}
              >
                <option value={true}>Complete</option>
                <option value={false}>Incomplete</option>
              </select>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={props.onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
