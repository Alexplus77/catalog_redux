import { HANDLE_SUBMIT, EXIT_MODAL_ERROR } from "actions/actionsType";
import { nanoid } from "nanoid";

const initialState = {
  products: [],
  errors: "",
};
const itemListReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_SUBMIT:
      const data = action.payload;
      const findProduct = state.products.find(({ name }) => name === data.name);
      return findProduct
        ? { ...state, errors: "Такой товар уже существует" }
        : {
            ...state,
            products: [
              ...state.products,
              {
                id: nanoid(),
                ...data,
              },
            ],
          };
    case EXIT_MODAL_ERROR:
      return { ...state, errors: "" };
    default:
      return state;
  }
};

export { itemListReducer };
