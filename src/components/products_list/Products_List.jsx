import React from "react";
import { Product_Item } from "components/product_item";
import { useSelector } from "react-redux";

const Products_List = () => {
  const { products } = useSelector((state) => state.itemsListReducer);
  console.log(products);
  return (
    <div className="container-productPage">
      <h1>Приглядитесь к этим товарам</h1>
      <div className="productList-container">
        {products.length ? (
          products.map(
            ({ name, price, id, image, discount, priceDiscount }) => (
              <Product_Item
                key={id}
                name={name}
                price={price}
                image={image}
                discount={discount}
                priceDiscount={priceDiscount}
              />
            )
          )
        ) : (
          <h3 className="text-noList">Пока нет товаров в списке</h3>
        )}
      </div>
    </div>
  );
};
export { Products_List };
