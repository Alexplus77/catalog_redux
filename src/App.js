import { Form_Input } from "components/form_input";
import { Products_List } from "components/products_list";
import { Errors } from "components/errors";
import { useSelector } from "react-redux";
import "App.css";

function App() {
  const { errors } = useSelector((state) => state.itemsListReducer);
  return (
    <div className="container">
      {errors && <Errors />}
      <Form_Input />
      <Products_List />
    </div>
  );
}

export default App;
