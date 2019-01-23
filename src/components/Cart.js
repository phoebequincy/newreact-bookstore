import React from 'react'
import CartItems from './CartItem'

const Cart = ({cart, total, removeBook}) => {

    return (
      <div>
        <h5>My Cart</h5>
        <ul className="list-group">
          {cart.map(({id, quantity, title, author, price}) =>
          <CartItems
            key={id}
            title={title}
            author={author}
            price={price}
            qty={quantity}
            bookId={id}
            removeBook={removeBook}
          />)}
        </ul>
        <div>
          <div className="row">
            <div className="col-md-8">Total: ${total()}</div>
          </div>
        </div>
      </div>
    )
}

export default Cart
