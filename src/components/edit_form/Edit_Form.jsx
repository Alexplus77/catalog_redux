import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  add_input_value,
  handleSaveItem,
  handleExitEditMode,
} from "actions/createActions";

const Edit_Form = () => {
  const dispatch = useDispatch();
  const valueProduct = useSelector((state) => state.valueInputReducer);
  const { editProduct } = useSelector((state) => state.itemsListReducer);
  const handleChangeInput = ({ target }) => {
    dispatch(add_input_value(target.name, target.value));
  };
  const handleSubmitData = (e) => {
    e.preventDefault();
    dispatch(handleSaveItem(valueProduct));
  };
  const handleExitModeEdit = () => {
    dispatch(handleExitEditMode());
  };
  return (
    <div className="edit-container">
      <div className="form-edit-background" />
      <form className="form-edit-container" onSubmit={handleSubmitData}>
        <div className="form-group">
          <label htmlFor="name">Название товара</label>
          <input
            onChange={handleChangeInput}
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={valueProduct.name}
            placeholder="Введите название товара"
            required={true}
          />
          <label htmlFor="price">Цена товара</label>
          <input
            onChange={handleChangeInput}
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={valueProduct.price}
            placeholder="Введите стоимость товара"
            required={true}
          />
          <label htmlFor="discount">Скидка на товар (%)</label>
          <input
            onChange={handleChangeInput}
            type="number"
            className="form-control"
            id="discount"
            name="discount"
            value={valueProduct.discount}
            placeholder="Введите скидку на товар"
            required={valueProduct.discount}
          />

          <label htmlFor="image">Изображение товара</label>
          <input
            onChange={handleChangeInput}
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={valueProduct.image}
            placeholder="Введите ссылку на изображение товара"
            required={true}
          />
        </div>
        <div className="btn-group-edit">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <button
            onClick={handleExitModeEdit}
            type="button"
            className="btn btn-primary"
          >
            Exit
          </button>
        </div>
      </form>
    </div>
  );
};
export { Edit_Form };
