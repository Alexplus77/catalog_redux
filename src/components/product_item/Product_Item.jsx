import React from "react";
import "./Product_Item.css";
import { useDispatch } from "react-redux";
import {
  handleRemoveItem,
  onEditMode,
  addEditItem,
} from "actions/createActions";

const Product_Item = ({ name, price, image, discount, priceDiscount, id }) => {
  const dispatch = useDispatch();

  const defaultImage = "https://i.ibb.co/h18xKCX/tv-2872705-640.png";
  const additionalTopSpace = 50;

  const handleRemoveProduct = (id) => dispatch(handleRemoveItem(id));

  const handleOnEditMode = (id, e) => {
    const positionItem = e.pageY - e.clientY + additionalTopSpace;

    dispatch(onEditMode(id, positionItem));
    dispatch(
      addEditItem({
        name: name,
        price: price,
        image: image,
        discount: discount,
        priceDiscount: priceDiscount,
      })
    );
  };

  return (
    <div className="productItem-container">
      <i className={discount ? "discount" : "hide-text"}>{discount}%</i>
      <img
        className="image-product"
        src={image ? image : defaultImage}
        alt="..."
      />
      <div className="price-block">
        <i className="price">{discount ? priceDiscount : price} руб.</i>
        <i className={discount ? "price-discount" : "hide-text"}>
          {discount && price} руб.
        </i>
      </div>
      <i className="name-product">{name}</i>
      <div className="icons-container">
        <i
          onClick={() => handleRemoveProduct(id)}
          className="fa fa-times"
          aria-hidden="true"
        />
        <i
          onClick={(e) => handleOnEditMode(id, e)}
          className="fa fa-pencil"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
export { Product_Item };
