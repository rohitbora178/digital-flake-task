import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function AddItemModal({ show, handleClose, handleAddNewItem }) {
  const [newItemData, setNewItemData] = useState({
    name: '',
    description: '',
    status: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItemData({
      ...newItemData,
      [name]: value,
    });
  };

  const handleSave = () => {
    handleAddNewItem(newItemData);
    setNewItemData({
      name: '',
      description: '',
      status: 0,
    });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={newItemData.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description:</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={newItemData.description}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="status">
            <Form.Label>Status:</Form.Label>
            <Form.Control
              as="select"
              name="status"
              value={newItemData.status}
              onChange={handleInputChange}
            >
              <option value={0}>Active</option>
              <option value={1}>Inactive</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} className='edit-btn'>
          Close
        </Button>
        <Button onClick={handleSave} className='edit-btn2'>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddItemModal;
