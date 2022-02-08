import React from "react";

const Product_Item = ({ name, price, image, discount, priceDiscount }) => {
  console.log(priceDiscount);
  return (
    <div className="productItem-container">
      <i className={discount ? "discount" : "hide-text"}>{discount}%</i>
      <img
        className="image-product"
        //src="https://i.ibb.co/pxpVnst/ironing-403074-640.jpg"
        src={image}
        alt="..."
      />
      <div className="price-block">
        <i className="price">{discount ? priceDiscount : price} руб.</i>
        <i className={discount ? "price-discount" : "hide-text"}>
          {discount && price} руб.
        </i>
      </div>

      <i>{name}</i>
    </div>
  );
};
export { Product_Item };
