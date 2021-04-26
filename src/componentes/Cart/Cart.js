import React from 'react';
import './Cart.css'

const Cart = (props) => {
 const cart = props.cart;
 console.log(cart)
 let totalPrice = 0;
 for (let i = 0; i < cart.length; i++) {
   const course = cart[i];
   totalPrice = totalPrice + course.price;
 }
  return (
    <div>
      <h3 className="text-center bg-light p-2 text-dark">Course Ordered:{cart.length}</h3>
      {
        cart.map(cart => <div className="bg-white text-dark mb-4 mt-2 cart-show"><span>{cart.title}</span> :  <span>${cart.price}</span></div>)
      }
      <button className="btn btn-primary btn-block p-2 checkout">Checkout <span className="badge badge-light">${totalPrice}</span></button>
    </div>
  );
};

export default Cart;