import React, { Component } from 'react';
import Header from './components/Header';
import Book from './components/Book';
import BookList from './components/BookList';
import Cart from './components/Cart';
import CartItem from './components/CartItem';


class App extends Component {

    state = {
    books:[],
    cart:[],
    }

// fetch data from an api
  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books')
    const json = await response.json()
    this.setState({
      ...this.state,
      books: json
      //add more key/value pairs here
    })
  }


      render() {
          return (
              <div>
                <Header />
                  <div className="container bg-light">
                    <div className="row">
                      <div className="col-8">
                        <BookList
                          books={this.state.books}
                          addToCart={this.addToCart}
                        />
                      </div>
                      <div className="col-4">
                        <Cart
                          cart={this.state.cart}
                          removeFromCart={this.removeFromCart}
                        />
                      </div>
                  </div>
                </div>
            </div>
    );
  }
}

export default App;
