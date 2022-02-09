import {
  ADD_INPUT_VALUE,
  HANDLE_SUBMIT,
  ADD_EDIT_ITEM,
  HANDLE_SAVE_EDIT_ITEM,
  EXIT_EDIT_ITEM,
} from "actions/actionsType";

const initialState = {
  image: "",
  name: "",
  price: "",
  discount: "",
  priceDiscount: "",
};
const valueInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INPUT_VALUE:
      const { name, value } = action.payload;
      // name === "discount" &&
      //   value &&
      //   (state.priceDiscount = state.price - (state.price * value) / 100);
      return { ...state, [name]: value };

    case ADD_EDIT_ITEM:
      const data = action.payload;

      return {
        ...state,
        image: data.image,
        name: data.name,
        price: data.price,
        discount: data.discount,
      };
    case HANDLE_SUBMIT:
      return {
        ...state,
        image: "",
        discount: "",
        priceDiscount: "",
        price: "",
        name: "",
      };
    case HANDLE_SAVE_EDIT_ITEM:
      return {
        ...state,
        image: "",
        discount: "",
        priceDiscount: "",
        price: "",
        name: "",
      };
    case EXIT_EDIT_ITEM:
      return {
        ...state,
        image: "",
        discount: "",
        priceDiscount: "",
        price: "",
        name: "",
      };
    default:
      return state;
  }
};

export { valueInputReducer };
