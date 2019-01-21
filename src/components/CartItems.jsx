import React from 'react'
import CartItem from  "./CartItem"
import CartTotal from  "./CartTotal"


const CartItems = (props) => {

  return (
    <div className="CartItems">
    <div className="container mt-4">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>

        {props.cartItemsList.map(item => <div className="list-group-item"><CartItem product={item}/></div>)}
        <CartTotal cartItemsList={props.cartItemsList}/>
      </div>
    </div>
  </div>
  )
}

export default CartItems;
