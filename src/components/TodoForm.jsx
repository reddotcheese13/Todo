import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function TodoForm(props) {
  const [description, setDescription] = useState("");
  const [assigned, setAssigned] = useState("");
  const [deadline, setDeadline] = useState("");
  const [completeStatus, setCompleteStatus] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(description, assigned, deadline, completeStatus);
    setDescription("");
    setAssigned("");
    setDeadline("");
    setCompleteStatus(false);
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add New Todo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Description:</label>
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Assigned To:</label>
              <input
                type="text"
                className="form-control"
                value={assigned}
                onChange={(e) => setAssigned(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Deadline:</label>
              <input
                type="date"
                className="form-control"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Complete Status:</label>
              <select
                className="form-control"
                value={completeStatus}
                onChange={(e) => setCompleteStatus(e.target.value)}
              >
                <option value={false}>Incomplete</option>
                <option value={true}>Complete</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Add Todo
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
