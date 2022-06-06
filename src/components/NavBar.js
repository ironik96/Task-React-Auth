import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import SigninModal from "./SigninModal";
import SignupModal from "./SignupModal";
import SignoutButton from "./SignoutButton";
import authStore from "../stores/authStore";

function NavBar() {
  const userInfo = authStore.user ? (
    <SignoutButton />
  ) : (
    <Nav>
      <SignupModal />
      <SigninModal />
    </Nav>
  );

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/products">
          <Navbar.Brand>Chicken Shop</Navbar.Brand>
        </Link>
        {userInfo}
      </Container>
    </Navbar>
  );
}

export default observer(NavBar);
