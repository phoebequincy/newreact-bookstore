import React, { Component } from 'react';
import Header from './components/Header';
import Book from'./components/Book';
import BookList from'./components/BookList';
import Cart from'./components/Cart';
import CartItem from'./components/CartItem.js';
import CartTotal from './components/CartTotal';
import Search from'./components/Search';

class App extends Component {

    state = {
    title: "",
    book:[],
    cart:[],
    }

// fetch data from an api
  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books')
    const json = await response.json()
    this.setState({book: json} )
  }


  renderBooks() {
      return this.book.map((book, i) => {
        return <Book {...book} key={i} addToCart={this.addToCart} />
      })
    }
      //   addItemToState = (quantity,productId)=> {
      //
      //   let productToAdd = this.state.products.find(product => product.id == parseInt(productId))
      //   let newItem = {
      //     id: this.state.cartItemsList.length + 1,
      //     product: productToAdd,
      //     quantity: quantity
      //   }
      //
      //   this.setState({cartItemsList:[...this.state.cartItemsList, newItem] })
      // }
      render() {
          return (
              <div>
                <Header title={this.state.title}/>
                  <div className="container bg-info">
                    <div className="row">
                      <div className="col-8">
                <BookList title="Book List" books={this.state.books} addToCart={this.addToCart} renderBooks={this.renderBooks}/>
                </div>
                  <div className="col-4">
                    <Cart cart={this.state.cart} removeFromCart={this.removeFromCart}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
