import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_input_value, handleSubmit } from "actions/createActions";

const Form_Input = () => {
  const dispatch = useDispatch();
  const valueProduct = useSelector((state) => state.valueInputReducer);
  const form = useRef();

  const handleChangeInput = ({ target }) => {
    dispatch(add_input_value(target.name, target.value));
  };
  const handleSubmitData = (e) => {
    e.preventDefault();
    dispatch(handleSubmit(valueProduct));
    form.current.reset();
  };

  return (
    <form className="form-container" onSubmit={handleSubmitData} ref={form}>
      <h3>Форма добавления товара</h3>
      <div className="form-group">
        <label htmlFor="name">Название товара</label>
        <input
          onChange={handleChangeInput}
          type="text"
          className="form-control"
          id="name"
          name="name"
          defaultValue=""
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
          defaultValue=""
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
          defaultValue=""
          placeholder="Введите скидку на товар (не обязательное поле)"
        />

        <label htmlFor="image">Изображение товара</label>
        <input
          onChange={handleChangeInput}
          type="text"
          className="form-control"
          id="image"
          name="image"
          defaultValue=""
          placeholder="Введите ссылку на изображение товара"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export { Form_Input };
