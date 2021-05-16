import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import DisplayProducts from './displayProducts'
import NavBar from './navbar'
import { products } from './products'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products
    };
  }

  increaseQuantity = () => {
    this.setState({value: 2});
  }

  render() {
    let products = <DisplayProducts products={this.state.products} />
    return (
      {},
      (
        <div>
          <NavBar />
          {products}
        </div>
      )
    );
  }
}



export default App;
