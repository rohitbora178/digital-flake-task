import React from "react";
import { Container, } from "react-bootstrap";
import logo from '../assets/logo.jpg'

const Home = () => {
  return (
    <>
      <div className="home-body">
        <Container className="mt-5">
          <img src={logo} alt='logo' style={{ width: '341px', height: '180px' }} />
          <h4 >Welcome to the Ditial Flake Admin!</h4>
        </Container>
      </div>

    </>
  );
};

export default Home;




