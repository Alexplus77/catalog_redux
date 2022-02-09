import { Form_Input } from "components/form_input";
import { Products_List } from "components/products_list";
import { Errors } from "components/errors";
import { Edit_Form } from "./components/edit_form";
import { useSelector } from "react-redux";
import "App.css";

function App() {
  const { errors, editProduct } = useSelector(
    (state) => state.itemsListReducer
  );
  return (
    <div className="container">
      {errors && <Errors />}
      {editProduct && <Edit_Form />}
      <Form_Input />
      <Products_List />
    </div>
  );
}

export default App;
