import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import {
  Button,
  Container,
  Nav,
  Navbar,
}
  from 'react-bootstrap';
import Logo from './rare.jpeg';

function AppNavBar({ token, setToken }) {
  const router = useRouter();
  const catManager = () => {
    router.push('/categoryManager');
  };
  const tagManager = () => {
    router.push('/tagManager');
  };

  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>
            <Image src={Logo} height="3rem" alt="Rare Logo" /> <h1 className="title is-4">Rare Publishing</h1>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {token ? (
              <div className="btn-nav-row">
                <Button className="nav-button">All Posts</Button>
                <Button className="nav-button">My Posts</Button>
                <Link passHref href="/profilePage">
                  <Button className="nav-button">My Profile</Button>
                </Link>
                <Button className="nav-button" onClick={catManager}>
                  Category Manager
                </Button>
                <Button className="nav-button" onClick={tagManager}>Tag Manager</Button>
              </div>
            ) : (
              ''
            )}

            {token ? (
              <div className="btn-nav-row">
                <Button
                  type="button"
                  className="nav-button"
                  style={{ marginLeft: '10px' }}
                  onClick={() => {
                    setToken('');
                    router.push('/login');
                  }}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Link passHref href="/register">
                  <Nav.Link>Register</Nav.Link>
                </Link>
                <Link passHref href="/login">
                  <Nav.Link>Login</Nav.Link>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

AppNavBar.propTypes = {
  token: PropTypes.string.isRequired,
  setToken: PropTypes.func.isRequired,
};
export default AppNavBar;
