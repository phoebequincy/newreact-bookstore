import React, {Component} from 'react'

export default class Book extends Component {


  addToCart = (e) => {
  e.preventDefault()

  {this.props.updateCart()}
  }

  render() {

    const {
      book,
      addToCart,
      book: {
        title,
        subtitle,
        author,
        description,
        price,

        }
    } = this.props

    return (
      <li className="list-group-item">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p>{subtitle}</p>
            <p className="card-text">By:{author}</p>
            <p className="card-text">{description}</p>
            <p className="card-text">${(price).toFixed(2)} </p>
            <button id="bookButton" value={title} onClick={(e)=>addToCart(e.target.value)} className="btn btn-info">Add to Cart</button>
          </div>
        </div>
      </li>
    )
  }
}
