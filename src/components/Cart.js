import React, { Component } from 'react';
import CartItem from './CartItem';



export default class Cart extends Component {

  render(props){

    const {cart, cartTotal} = this.props


    return (
      <div>
          <h1>Cart</h1>
          <div className="list-group">
            <div className="list-group-item">
              <h5>
                <div className="row">
                  <div className="col-md-8">
                    Item
                  </div>
                  <div className="col-md-2">
                    Price
                  </div>
                </div>
                 {cart.map(item => {
                  return (
                    <CartItem
                      item = {item}
                      key = {item.id}
                    />
                  )
                })}
                <div className="Total mt-2">
                    <h4>Total: $ {cartTotal()}  </h4>
                </div>
              </h5>
            </div>
          </div>
        </div>
    )
  }
}
