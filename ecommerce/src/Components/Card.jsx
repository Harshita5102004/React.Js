
import React from 'react';
import './Card.css'; 

function Card({ product }) {
  return (
    <div className="main" >
    <div className="card">
      <img
        src={product.image_url}
        alt={product.name}
        className="product-image"
      />
      <div className="card-content" 
      >
        <h3 className="product-title" style={{ textAlign: "center"}}>{product.name}</h3>
        <p className="product-description" style={{ textAlign: "center"}}>{product.description}</p>
        <div className="product-details" style={{ textAlign: "center"}}>
          <p><strong>Price:</strong> ${product.price}</p>
        
          <p><strong>Rating:</strong> {product.rating} ⭐</p>
         <p>
            <strong>Status:</strong>{' '}
            <span className={`status-badge ${product.availability === 'In Stock' ? 'in-stock' : 'out-of-stock'}`}>
              {product.availability}
            </span>
          </p>
          <button style={{ backgroundColor: "red", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px" }}>
            Add Card
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Card;
