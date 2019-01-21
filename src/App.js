import React, { Component } from 'react';
import './App.css';
import './components/BookList';
import './components/Book';
import './components/CartItem';
import './components/CartTotal';
import './components/Header';
import './components/Search';

state = {

}

class App extends Component {
      addItemToState = (quantity,productId)=> {

        let productToAdd = this.state.products.find(product => product.id == parseInt(productId))
        let newItem = {
          id: this.state.cartItemsList.length + 1,
          product: productToAdd,
          quantity: quantity
        }

        this.setState({cartItemsList:[...this.state.cartItemsList, newItem] })
      }
        render() {

          return (
            <div className="App">
              <Header />
              <CartItems cartItemsList={this.state.cartItemsList}/>
              <AddItem products={this.state.products} addItemToState={this.addItemToState}/>

            </div>
          );
        }
      }



export default App;
