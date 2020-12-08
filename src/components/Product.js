import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";

const Product = ({ id, title, product_image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: product_image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <span role="img" aria-label="rating">
                  🌟
                </span>
              </p>
            ))}
        </div>
      </div>
      <img src={product_image} alt="product-pic" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
