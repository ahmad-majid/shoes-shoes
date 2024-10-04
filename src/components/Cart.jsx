import React from "react";
// import "../styles/Cart.css";

const Cart = ({ cart, closeCart }) => {
  return (
    <div className="cart-dropdown">
      <button onClick={closeCart} className="close-cart">
        Close
      </button>
      {cart.length === 0 ? (
        <div className="cart-empty">Your cart is empty.</div>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
