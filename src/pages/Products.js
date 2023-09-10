import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, updateProduct, addProduct } from '../redux/actions/productsAction';
import edit from '../assets/edit.jpg';
import delete1 from '../assets/delete.jpg';
import { SearchOutlined } from '@ant-design/icons';
import products from '../assets/products.jpg';
import EditProductModal from '../modal/EditProductModal';
import AddProductModal from '../modal/AddProductModal';



function Products() {
  const productsData = useSelector((state) => state.products.productsData);
  const dispatch = useDispatch();

  const [editProductId, setEditProductId] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleEdit = (productId) => {
    setEditProductId(productId);
  };

  const handleUpdateProduct = (updatedProduct) => {
    dispatch(updateProduct(updatedProduct));
    setEditProductId(null);
  };

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const handleAddProduct = (newProduct) => {
    dispatch(addProduct(newProduct)); // Dispatch the addProduct action with the new product
    setShowAddModal(false); // Close the Add Product modal
  };


  return (
    <div style={{ margin: '10px' }}>
      <img src={products} alt="Logo" className='pro-img' />
      <p className='pro-title'>Product List</p>

      <div className='pro-div'>
        <input type="text" placeholder="Search..." className='pro-img2' /> &nbsp;
        <SearchOutlined />
      </div>
      
      <Button className='pro-btn' onClick={() => setShowAddModal(true)}>
        Add New Data
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Pack Size</th>
            <th>Category</th>
            <th>MRP</th>
            <th>Status</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.packsize}</td>
              <td>{product.category}</td>
              <td>{product.mrp}</td>
              <td>
                <span
                  style={{
                    color: product.status === 0 ? 'green' : 'red', fontWeight: 'bolder'
                  }}
                >
                  {product.status === 0 ? 'Active' : 'Inactive'}
                </span>
              </td>
              <td>
                <img src={product.image} alt={product.name} className='pro-data-img' />
              </td>
              <td>
                <img src={edit} alt="Edit" className='cate-img' onClick={() => handleEdit(product.id)} />
                &nbsp; &nbsp;
                <img src={delete1} alt="Delete" className='cate-img' onClick={() => handleDelete(product.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {editProductId !== null && (
        <EditProductModal
          product={productsData.find((product) => product.id === editProductId)}
          onSave={handleUpdateProduct}
          onCancel={() => setEditProductId(null)}
        />
      )}

      {showAddModal && (
        <AddProductModal onSave={handleAddProduct} onCancel={() => setShowAddModal(false)} />
      )}
    </div>
  );
}

export default Products;
