import React from "react";
import { Product_Item } from "components/product_item";
import { useSelector } from "react-redux";

const Products_List = () => {
  const { products } = useSelector((state) => state.itemsListReducer);
  console.log(products);
  return (
    <div className="productList-container">
      {products.map(({ name, price, id, image }) => (
        <Product_Item key={id} name={name} price={price} image={image} />
      ))}
    </div>
  );
};
export { Products_List };
