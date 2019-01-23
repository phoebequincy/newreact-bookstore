import React from 'react';
import Book from './Book';


const BookList = ({books, filterString, id, key, title, subtitle, author, description, price, addToCart}) => {

const filterBooks = books.filter(book => book.title.toLowerCase().includes(filterString) || book.author.toLowerCase().includes(filterString))

  return (
    <ul className="list-group">
      <div>
      {filterBooks.map((book) =>
        <Book
        key={id}
        title={book.title}
        subtitle={book.subtitle}
        author={book.author}
        description={book.description}
        price={book.price}
        addToCart={addToCart}
        id={book.id}
      />)}
      </div>
    </ul>
  )
}

export default BookList
