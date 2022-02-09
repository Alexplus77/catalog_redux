import {
  HANDLE_SUBMIT,
  EXIT_MODAL_ERROR,
  REMOVE_ITEM,
  ON_EDIT_MODE,
  HANDLE_SAVE_EDIT_ITEM,
} from "actions/actionsType";
import { nanoid } from "nanoid";

const initialState = {
  products: [],
  errors: "",
  editProduct: null,
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
                priceDiscount: data.price - (data.price * data.discount) / 100,
              },
            ],
          };
    case EXIT_MODAL_ERROR:
      return { ...state, errors: "" };
    case REMOVE_ITEM:
      const idItem = action.payload;
      return {
        ...state,
        products: state.products.filter(({ id }) => idItem !== id),
      };
    case ON_EDIT_MODE:
      const idProduct = action.payload;
      const findItem = state.products.find(({ id }) => idProduct === id);
      return { ...state, editProduct: findItem };

    case HANDLE_SAVE_EDIT_ITEM:
      const dataEdit = action.payload;
      const updateState = state.products.map((product) => {
        if (product.id === state.editProduct.id) {
          return {
            ...product,
            ...dataEdit,
            priceDiscount:
              dataEdit.price - (dataEdit.price * dataEdit.discount) / 100,
          };
        }
        return product;
      });
      console.log(dataEdit);
      return { ...state, products: updateState, editProduct: null, errors: "" };
    default:
      return state;
  }
};

export { itemListReducer };
