import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { UploadOutlined } from '@ant-design/icons';
import { Upload } from 'antd';

function EditProductModal({ product, onSave, onCancel }) {
  // Create local state to track the edited product and the selected image file
  const [editedProduct, setEditedProduct] = useState(product);

  // Function to handle saving changes
  const handleSave = () => {
    onSave(editedProduct); // Pass the edited product to the parent component
    onCancel(); // Close the modal
  };

  // Function to handle canceling edits
  const handleCancel = () => {
    setEditedProduct(product); // Reset the edited product to the original
    onCancel(); // Close the modal
  };

  // Function to handle image upload
  const handleImageChange = (info) => {
    if (info.file.status === 'done') {
      // The file has been successfully uploaded
      const imageUrl = info.file.response.url; // Assuming the server provides the image URL
      setEditedProduct({
        ...editedProduct,
        image: imageUrl,
      });
    }
  };

  return (
    <Modal show={true} onHide={handleCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={editedProduct.name}
              onChange={(e) =>
                setEditedProduct({
                  ...editedProduct,
                  name: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="packsize">
            <Form.Label>Pack Size</Form.Label>
            <Form.Control
              type="text"
              value={editedProduct.packsize}
              onChange={(e) =>
                setEditedProduct({
                  ...editedProduct,
                  packsize: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              value={editedProduct.category}
              onChange={(e) =>
                setEditedProduct({
                  ...editedProduct,
                  category: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="mrp">
            <Form.Label>MRP</Form.Label>
            <Form.Control
              type="number"
              value={editedProduct.mrp}
              onChange={(e) =>
                setEditedProduct({
                  ...editedProduct,
                  mrp: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              value={editedProduct.status}
              onChange={(e) =>
                setEditedProduct({
                  ...editedProduct,
                  status: parseInt(e.target.value),
                })
              }
            >
              <option value={0}>Active</option>
              <option value={1}>Inactive</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label>Image : </Form.Label> &nbsp; &nbsp;
            <Upload
              name="image"
              action="/your-upload-endpoint"
              listType="picture"
              showUploadList={false}
              onChange={handleImageChange}
            >
              <Button icon={<UploadOutlined />} className='edit-upload-btn'>Click to Upload Image</Button>
            </Upload>
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

export default EditProductModal;

