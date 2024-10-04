import React from "react";
import { Link } from "react-router-dom";
import "../styles/SneakerCard.css";

const SneakerCard = ({ sneaker, handleAddToCart }) => {
  const addToCart = () => {
    handleAddToCart(sneaker); // Invoke handleAddToCart with sneaker as argument
  };

  return (
    <div className="sneaker-card">
      <Link to={`/sneaker/${sneaker._id}`}>
        <img src={sneaker.image} alt={sneaker.name} className="sneaker-image" />
      </Link>
      <h3 className="sneaker-title">
        {sneaker.name.length > 20
          ? sneaker.name.substring(0, 20) + "..."
          : sneaker.name}
      </h3>
      <p className="sneaker-brand">Brand: {sneaker.brand}</p>
      <p className="sneaker-price">Price: ${sneaker.price}</p>
      <button onClick={addToCart} className="add-to-cart-button">
        Add to Cart
      </button>
    </div>
  );
};

export default SneakerCard;
