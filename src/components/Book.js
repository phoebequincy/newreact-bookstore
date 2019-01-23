import React, {Component} from 'react'

export default class Book extends Component {


  render() {

    const {addToCart, id, price, title, subtitle, author, description} = this.props

    return (
      <div className="list-group-item" key={id}>
        <div className="row">
          <div className="col-md-10 font-weight-bold">
          {title}: {subtitle}
          </div>

        <div className="col-md-2">${price}</div>
        </div>

      <div className="row">
        <div className="col-md-12 font-italic">
        {author}
        </div>
      </div>

      <div className="row">
        <div className="col-md-10">
        {description}
        </div>

        <span className="span-2">
          <button
            className="btn btn-info"
            type="button"
            onClick={(e) => addToCart(id)}
          >Add</button>
        </span>
      </div>
    </div>
    )
  }
}
