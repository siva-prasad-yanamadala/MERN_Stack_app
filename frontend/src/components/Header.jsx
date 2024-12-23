
import { Badge,Nav, Navbar, Container} from 'react-bootstrap';
import { FaShoppingCart,FaUser } from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap';
import {useSelector} from 'react-redux';
import logo from '../assets/image.png'
const Header = () => {
  const {cartItems}=useSelector((state)=>state.cart);
  return (
    <header>
        <Navbar bg="dark" variant='dark' expand='lg' collapseOnSelect>
              <Container>
                <LinkContainer to="/">
                <Navbar.Brand href="/">
                <img src={logo} width="40" height="auto" style={{marginRight:5}} alt='pora'></img>
                 
                konandi
                </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                      <LinkContainer to="/cart">
                        <Nav.Link >
                          <FaShoppingCart/>Cart
                            {
                              cartItems.length>0 && (
                               <Badge pill bg='success' style={{marginLeft:'5px'}}>
                            {cartItems.reduce((a,c)=>a+c.qty,0)}
                          </Badge>
                        )}
                        </Nav.Link>
                      </LinkContainer>
                      <LinkContainer to='login'>
                        <Nav.Link href='/login'><FaUser/>Sign In</Nav.Link>
                      </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
              </Container>
        </Navbar> 
    </header>
  )
}

export default Header