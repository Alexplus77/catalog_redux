import {
  ADD_INPUT_VALUE,
  HANDLE_SUBMIT,
  EXIT_MODAL_ERROR,
} from "./actionsType";

export const add_input_value = (name, value) => ({
  type: ADD_INPUT_VALUE,
  payload: { name, value },
});

export const handleSubmit = (data) => ({
  type: HANDLE_SUBMIT,
  payload: data,
});
export const handleExitError = () => ({
  type: EXIT_MODAL_ERROR,
});
