import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function AddProductModal({ onSave, onCancel }) {
  const [newProduct, setNewProduct] = useState({
    id: Math.floor(Math.random() * 1000),
    name: '',
    packsize: '',
    category: '',
    mrp: 0,
    status: 0,
    image: '',
  });

  const handleSave = () => {
    onSave(newProduct);
    onCancel();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <Modal show={true} onHide={handleCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="packsize">
            <Form.Label>Pack Size</Form.Label>
            <Form.Control
              type="text"
              value={newProduct.packsize}
              onChange={(e) => setNewProduct({ ...newProduct, packsize: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              value={newProduct.category}
              onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="mrp">
            <Form.Label>MRP</Form.Label>
            <Form.Control
              type="number"
              value={newProduct.mrp}
              onChange={(e) => setNewProduct({ ...newProduct, mrp: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              value={newProduct.status}
              onChange={(e) => setNewProduct({ ...newProduct, status: parseInt(e.target.value) })}
            >
              <option value={0}>Active</option>
              <option value={1}>Inactive</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className='edit-btn' onClick={handleCancel}>
          Cancel
        </Button>
        <Button className='edit-btn2' onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddProductModal;
