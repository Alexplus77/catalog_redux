import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleRemoveItem,
  onEditMode,
  addEditItem,
} from "actions/createActions";
import { Edit_Form } from "components/edit_form";

const Product_Item = ({ name, price, image, discount, priceDiscount, id }) => {
  const dispatch = useDispatch();

  const handleRemoveProduct = (id) => dispatch(handleRemoveItem(id));
  const handleOnEditMode = (id) => {
    dispatch(onEditMode(id));
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
      <i className="name-product">{name}</i>
      <div className="icons-container">
        <i
          onClick={() => handleRemoveProduct(id)}
          className="fa fa-times"
          aria-hidden="true"
        />
        <i
          onClick={() => handleOnEditMode(id)}
          className="fa fa-pencil"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
export { Product_Item };
