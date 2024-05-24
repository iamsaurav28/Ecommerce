import React from "react";
import "./Home.css";
import { products } from '../../Context/productsData'; // Import products data
import image1 from "../image/vicky.jpg"; // Import image assets
import image2 from "../image/virat.jpg";
import { Link } from "react-router-dom";

// import other image assets...

const Home = () => {
     
     const topProducts = products.slice(0, 5);

  return (
    <div className="home">
      <div className="home-container">
        <img
          alt="vicky kaushal with earbuds"
          className="vicky-image"
          src={image1}
        />

<img
          alt="vicky kaushal with earbuds"
          className="vicky-image"
          src={image2}
        />
        <h1 className="headphone caption">
          FEEL THE MUSIC WITH <br /> AN MAGIC OF<br /> WIRELESS HEADPHONES{" "}
        </h1>
        <Link to="/singleproducts">click here</Link>
      </div>

      <div className="top-products">
        <h2>Top Products</h2>
        <div className="product-list">
          {topProducts.map(product => (
            <div className="product-card" key={product._id}>
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                {/* Add more details if needed */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-container">
        <div className="carousel">
          {products.map(product => (
            <div className="card" key={product._id}>
              <img src={product.image} alt={product.name} />
              <div className="card-content">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-description">Price: ${product.price}</p>
                {/* Add more details if needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
