import { ADD_INPUT_VALUE, HANDLE_SUBMIT } from "actions/actionsType";

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
      name === "discount" &&
        value &&
        (state.priceDiscount = state.price - (state.price * value) / 100);

      return { ...state, [name]: value };
    case HANDLE_SUBMIT:
      return { ...state, image: "", name: "", price: "", discount: "" };
    default:
      return state;
  }
};

export { valueInputReducer };
