import React, { Component } from 'react';
import Book from './Book';

export default class BookList extends Component {

    render() {

      const {books, addToCart} = this.props

        return (
            <div className="book-list">
              <h1>Book Store</h1>
                <ul className="list-group">
                {books.map(book => {
                  return (
                    <Book
                      book = {book}
                      key = {book.id}
                      addToCart = {addToCart}
                    />
                  )
                })}
              </ul>
          </div>
        )
    }
}
