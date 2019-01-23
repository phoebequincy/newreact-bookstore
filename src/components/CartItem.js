import React from 'react';


const CartItem = ({item}) => {

  return (
    <div className="row">
      <div className="col-md-8">
      {item.title}
      </div>
      <div className="col-md-2">
      ${item.price}.00
      </div>
    </div>
  )
}

export default CartItem;
