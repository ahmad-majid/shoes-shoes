import React, { useState } from 'react';
import './styles/FollowUs.css';

// Import local images from the assets folder
const images = [
  require('../assets/FollowUs/1.avif'), // Image 1
  require('../assets/FollowUs/2.jpg'), // Image 2
  require('../assets/FollowUs/3.jpg'), // Image 3
  require('../assets/FollowUs/4.avif'), // Image 4
  require('../assets/FollowUs/5.jpg'), // Image 5
  require('../assets/FollowUs/6.avif'), // Image 6
  require('../assets/FollowUs/7.avif'), // Image 7
  require('../assets/FollowUs/8.jpg'), // Image 8
  require('../assets/FollowUs/9.jpg'), // Image 9
  require('../assets/FollowUs/10.jpg'), // Image 10
  require('../assets/FollowUs/11.jpg'), // Image 11
  require('../assets/FollowUs/12.jpg'), // Image 12
];

const FollowUs = () => {
  const [displayCount, setDisplayCount] = useState(4); // Start with 4 images displayed

  const handleReadMore = () => {
    setDisplayCount((prevCount) => Math.min(prevCount + 4, images.length)); // Increment by 4 but not exceed total images
  };

  return (
    <div className="follow-us">
      <h2>Follow Us</h2>
      <div className="image-grid">
        {images.slice(0, displayCount).map((image, index) => (
          <div className="image-item" key={index}>
            <img src={image} alt={`Sneaker ${index + 1}`} />
          </div>
        ))}
      </div>
      {displayCount < images.length && (
        <button className="read-more-button" onClick={handleReadMore}>
          Read More
        </button>
      )}
    </div>
  );
};

export default FollowUs;