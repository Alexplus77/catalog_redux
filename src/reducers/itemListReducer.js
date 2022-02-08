import { HANDLE_SUBMIT } from "actions/actionsType";
import { nanoid } from "nanoid";

const initialState = {
  products: [],
};
const itemListReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_SUBMIT:
      const data = action.payload;
      return {
        ...state,
        products: [
          ...state.products,
          {
            id: nanoid(),
            ...data,
          },
        ],
      };
    default:
      return state;
  }
};

export { itemListReducer };
