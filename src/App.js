import React, { Component } from 'react';
import Header from './components/Header';
import Book from './components/Book';
import BookList from './components/BookList';
import Cart from './components/Cart';
import CartItem from './components/CartItem';


class App extends Component {

    state = {
      filterString: '',
      books:[],
      cart:[],
    }

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books')
    const json = await response.json()
    this.setState({
      ...this.state,
      books: json,
      cart: [],
    })

    const cartState = this.state.books.filter(book => book.inCart === true)
    this.setState(this.state.cart = cartState)
  }

  handleSearch = (e) => {
      let newState = {...this.state}
      newState.filterString = e.target.value.toLowerCase()

      this.setState({filterString: newState.filterString})
  }

      render() {

        const addToCart = (book)=> {
          this.setState(
          {
            ...this.state,
            cart: [...this.state.cart, book]
          })
        }

        const cartTotal = () => {
          return this.state.cart.reduce((accum, item) =>  {
            return accum += item.price
          },0)
        }

        const newState = this.state.books.filter(book => book.inCart === true)

          return (
              <div>
              <div>
                <Header
                handleSearch={this.handleSearch}
                />
              </div>
                  <div className="container bg-light">
                    <div className="row">
                      <div className="col-8">
                        <BookList
                          books={this.state.books}
                          addToCart={addToCart}
                        />
                      </div>
                      <div className="col-4">
                        <Cart
                          cart={this.state.cart}
                          cartTotal={cartTotal}
                        />
                      </div>
                  </div>
                </div>
            </div>
    );
  }
}

export default App;
