import {
  ADD_INPUT_VALUE,
  HANDLE_SUBMIT,
  EXIT_MODAL_ERROR,
  REMOVE_ITEM,
  HANDLE_SAVE_EDIT_ITEM,
  ON_EDIT_MODE,
  ADD_EDIT_ITEM,
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
export const handleRemoveItem = (id) => ({
  type: REMOVE_ITEM,
  payload: id,
});
export const handleSaveItem = (data) => ({
  type: HANDLE_SAVE_EDIT_ITEM,
  payload: data,
});
export const onEditMode = (id) => ({
  type: ON_EDIT_MODE,
  payload: id,
});
export const addEditItem = (data) => ({
  type: ADD_EDIT_ITEM,
  payload: data,
});
