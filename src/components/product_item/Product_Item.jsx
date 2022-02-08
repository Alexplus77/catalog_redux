import React from "react";

const Product_Item = ({ name, price, image }) => {
  return (
    <div className="productItem-container">
      <img
        className="image-product"
        //src="https://i.ibb.co/pxpVnst/ironing-403074-640.jpg"
        src={image}
        alt="..."
      />
      <i>{price} руб.</i>
      <i>{name}</i>
    </div>
  );
};
export { Product_Item };
