import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editItem, deleteItem, addNewItem, setSearchQuery } from '../redux/actions/categoryAction';
import { Table, Button } from 'react-bootstrap';
import EditItemModal from '../modal/EditItemModal';
import AddItemModal from '../modal/AddItemModal';
import edit from '../assets/edit.jpg';
import delete1 from '../assets/delete.jpg';
import category from '../assets/category.jpg'
import { SearchOutlined } from '@ant-design/icons';

function Category() {
  const items = useSelector((state) => state.category.items);
  const searchQuery = useSelector((state) => state.category.searchQuery);
  const dispatch = useDispatch();

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editItemData, setEditItemData] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);

  const [newItemData, setNewItemData] = useState({
    name: '',
    description: '',
    status: 0,
  });

  const openEditModal = (item) => {
    setEditItemData(item);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  const handleEditItem = (editedItem) => {
    dispatch(editItem(editedItem));
    closeEditModal();
  };

  const handleDeleteItem = (itemId) => {
    dispatch(deleteItem(itemId));
  };

  const handleAddNewItem = (newItem) => {
    const highestId = Math.max(...items.map((item) => item.id), 0);
    const newItemWithId = {
      id: highestId + 1,
      ...newItem,
    };

    dispatch(addNewItem(newItemWithId));
    setNewItemData({
      name: '',
      description: '',
      status: 0,
    });
    closeAddModal();
  };

  const openAddModal = () => {
    setShowAddModal(true);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
  };

  const handleSearch = () => {
    dispatch(setSearchQuery(searchQuery));
  };

  return (
    <div style={{ margin: '10px' }}>
      <img src={category} alt='logo' className='cate-logo' />
      <p className='cate-title'>Category</p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          className='cate-input'
        />
        &nbsp;
        <SearchOutlined onClick={handleSearch} />
      </div>

      <Button onClick={openAddModal} className='cate-btn'>
        Add New Data
      </Button>


      <Table striped bordered hover >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items
            .filter((item) =>
              item.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td className={item.status === 0 ? 'active-status' : 'inactive-status'}>
                  {item.status === 0 ? 'Active' : 'Inactive'}
                </td>
                <td>
                  <img src={edit} alt="react logo" onClick={() => openEditModal(item)} className='cate-img' /> &nbsp; &nbsp;
                  <img src={delete1} alt="react logo" onClick={() => handleDeleteItem(item.id)} className='cate-img' />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      <EditItemModal
        show={editModalOpen}
        handleClose={closeEditModal}
        item={editItemData}
        handleEditItem={handleEditItem}
      />

      <AddItemModal
        show={showAddModal}
        handleClose={closeAddModal}
        handleAddNewItem={handleAddNewItem}
      />
    </div>
  );
}

export default Category;
