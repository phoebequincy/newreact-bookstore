import React, { Component } from 'react';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

export default class Cart extends Component {

  render(props){

    return (
      <div>
          <h1>Cart</h1>
          <div className="list-group">
            <div className="list-group-item">
              <h5>
                <div className="row">
                  <div className="col-md-8">Item</div>
                  <div className="col-md-2">Price</div>
                </div>
              </h5>
            </div>
          </div>
        </div>
    )
  }
}
