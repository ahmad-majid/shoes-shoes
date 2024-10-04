import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CartIcon } from "../assets/images/icon-cart.svg";
import { ReactComponent as CloseIcon } from "../assets/images/icon-close.svg"; // Assuming you have an exit/close icon
import "./styles/Navbar.css";

const Navbar = ({
  cart,
  isCartOpen,
  handleCart,
  closeCart,
  removeFromCart,
}) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  // Effect to update cart items and count
  useEffect(() => {
    const uniqueItems = {};
    cart.forEach((item) => {
      if (uniqueItems[item._id]) {
        uniqueItems[item._id].quantity++;
      } else {
        uniqueItems[item._id] = { ...item, quantity: 1 };
      }
    });
    const uniqueCartItems = Object.values(uniqueItems);
    setCartItems(uniqueCartItems);

    // Calculate total unique items count
    const totalCount = uniqueCartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    setCartItemCount(totalCount);
  }, [cart]);

  // Function to handle adding to cart
  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000); // Reset addedToCart after 2 seconds
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MK Studio</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/collection">Collections</Link>
        </li>
        <li>
          <Link to="/men">Men</Link>
        </li>
        <li>
          <Link to="/women">Women</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact" className="contact-button">Contact</Link>
        </li>
      </ul>
      <div className="cart-container">
        <div className="cart-icon-container" onClick={handleCart}>
          <CartIcon
            className={`cart-icon ${addedToCart ? "added-to-cart" : ""}`}
          />
          {cartItemCount > 0 && (
            <span className="cart-count">{cartItemCount}</span>
          )}
        </div>
        {isCartOpen && (
          <div className="cart-dropdown">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <CloseIcon onClick={closeCart} className="close-icon" />
                <p>Your cart is empty.</p>
              </div>
            ) : (
              <div>
                {cartItems.map((item) => (
                  <div key={item._id} className="cart-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                    <div>
                      <p className="cart-item-name">{item.name}</p>
                      <p className="cart-item-price">${item.price}</p>
                      <p className="cart-item-count">
                        Quantity: {item.quantity}
                      </p>
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="remove-cart-item"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <button onClick={closeCart} className="close-cart-button">
                  Close Cart
                </button>
                <Link to="/cart" className="view-cart-link">
                  View Cart
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
