import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListGroup, ListGroupItem } from 'reactstrap';

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
      (<div>{foo}</div>)
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
              <p>{item.value} quantity</p>
            </ListGroupItem>
          )
        })
      }
    </ListGroup>
  )
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*         <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> }


      </header>
    </div>
  );
} */

export default App;
