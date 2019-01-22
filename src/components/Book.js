import React from 'react';


const Book = (props) => {
  console.log(props.id)
  return (
    <div className="list-group-item" key={props.id}>
      <div className="row">
        <div className="col-md-10 font-weight-bold">{props.title}: {props.subtitle}</div>
          <div className="col-md-2">${props.price}</div>
        </div>
      <div className="row">
        <div className="col-md-12 font-italic">{props.author}</div>
      </div>
      <div className="row">
        <div className="col-md-10">{props.description}</div>
        <span className="span-2">
          <button
            className="btn btn-dark"
            type="button"
            onClick={(e) => props.addToCart(props.id)}
          >Add to Cart</button>
        </span>
      </div>
    </div>
  )
}

export default Book
