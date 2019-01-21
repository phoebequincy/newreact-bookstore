import React from 'react'

const CartItem = (props) => {
    const item = props.product
    const price = (item.product.priceInCents/100).toFixed(2)

    return(
        <div className="CartItem">
        <div className="container">
            <div className="collection-item">
                <div className="row" key={item.id}>
                    <div className="col-md-8">{item.product.name}</div>
                    <div className="col-md-2">{`$${price}`}</div>
                    <div className="col-md-2">{item.quantity}</div>
                </div>
            </div>
        </div>
      </div>
    )
}

export default CartItem;
