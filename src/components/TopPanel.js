import React from 'react'
import { Navbar, Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { openLogoutModal, closeLogoutModal } from "../redux/actions/modalActions";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo-bg.png';

const TopPanel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showLogoutModal = useSelector((state) => state.modal.showLogoutModal);


  const handleLogout = () => {

    // Redirect back to the login page
    dispatch(closeLogoutModal());
    navigate("/");
  };
  return (
    <div>
      <Navbar expand="lg" className='toppanel'>
        <img src={logo} alt='logo' className='panel-logo' />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
        <Button variant="primary" className='panel-btn' onClick={() => dispatch(openLogoutModal())}>Log Out</Button>
      </Navbar>
      <Modal show={showLogoutModal} onHide={() => dispatch(closeLogoutModal())}>
        <Modal.Header closeButton>
          <Modal.Title className='panel-title'>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body className='panel-body1'>Are you sure you want to log out?</Modal.Body>
        <Modal.Footer className='panel-modal'>
          <Button className='panel-btn1' onClick={() => dispatch(closeLogoutModal())}>
            Cancel
          </Button>
          <Button className='panel-btn2' onClick={handleLogout}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default TopPanel











