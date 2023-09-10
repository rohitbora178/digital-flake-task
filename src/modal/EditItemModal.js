import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function EditItemModal({ show, handleClose, item, handleEditItem }) {
  const { name, description } = item;

  const [editedName, setEditedName] = useState(name);
  const [editedDescription, setEditedDescription] = useState(description);

  useEffect(() => {

    setEditedName(name);
    setEditedDescription(description);
  }, [show, name, description]);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setEditedName(newName);
  };

  const handleDescriptionChange = (e) => {
    const newDescription = e.target.value;
    setEditedDescription(newDescription);
  };

  const handleSave = () => {
    const editedItem = {
      ...item,
      name: editedName,
      description: editedDescription,
    };

    handleEditItem(editedItem);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              value={editedName}
              onChange={handleNameChange}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description:</Form.Label>
            <Form.Control
              type="text"
              value={editedDescription}
              onChange={handleDescriptionChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} className='edit-btn'>
          Cancel
        </Button>
        <Button onClick={handleSave} className='edit-btn2'>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditItemModal;
