import React from 'react';
import './Product.css'

const Product = (props) => {
  //console.log(props.courses);
  const {title, instructor, img, price, level} = props.courses;
  const handleCart = props.handleCart;
  return (
  <div className="card">
  <img className="card-img-top" src={img} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{instructor}</p>
    <p><small>{level}</small></p>
    <h5 className="bold">${price}</h5>
    <a href="#" className="btn btn-primary enrollBtn" onClick={() => handleCart(props.courses)}>Enroll Now</a>
  </div>
</div>
  );
};

export default Product;