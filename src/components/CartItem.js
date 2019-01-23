import React from 'react';


const CartItems = ({title, bookId, author, price, removeBook}) => {

    return (
      <div>
        <li className="list-group-item">
          <div className="row">
            <div className="col-md-8">{title}</div>
            <div className="col-md-4">
              <button
                className="btn btn-danger"
                type="button"
                onClick={(e) => removeBook(bookId)}>Delete</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">{author}</div>
            <div className="col-md-2">${price}
            </div>
          </div>
        </li>
      </div>
    )
}

export default CartItems
