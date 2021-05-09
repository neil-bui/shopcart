import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Navbar,
  NavbarBrand,
  Nav,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingitems: [
        { name: 'cologne', image: './products/cologne.jpg', desc: 'Unisex Cologne', value: 0 },
        { name: 'iwatch', image: './products/iwatch.jpg', desc: 'Apple iWatch', value: 0 },
        { name: 'mug', image: './products/mug.jpg', desc: 'Unique Mug', value: 0 },
        { name: 'wallet', image: './products/wallet.jpg', desc: 'Mens Wallet', value: 0 }
      ]
    };
  }
  render() {
    let foo = <DisplayProducts ShoppingItems={this.state.shoppingitems} />
    return (
      {},
      (
        <div>
          <Navbar color="primary" light expand="md">
            <NavbarBrand>Shop to React</NavbarBrand>
            <Nav>
            </Nav>
            <FontAwesomeIcon icon={faShoppingCart} /> 0 items
          </Navbar>
          {foo}
        </div>
      )
    );
  }
}

function DisplayProducts(props) {
  return (
    {},
    <ListGroup>
      {
        props.ShoppingItems.map(item => {
          return (
            <ListGroupItem>
              <p>{item.desc}</p>
              <img align="block" width="100px" alt="" src={item.image}></img>
              <p style={{float:'right'}}>{item.value} quantity</p>
            </ListGroupItem>
          )
        })
      }
    </ListGroup>
  )
}

export default App;
