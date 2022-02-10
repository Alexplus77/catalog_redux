import React, { useEffect, useRef } from "react";
import "./Errors.css";
import { useSelector, useDispatch } from "react-redux";
import { handleExitError } from "actions/createActions";

const Errors = () => {
  const { errors } = useSelector((state) => state.itemsListReducer);
  const dispatch = useDispatch();
  const errorText = useRef();

  const handleCancel = (e) => {
    if (e.target !== errorText.current) {
      dispatch(handleExitError());
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleCancel, false);
    return () => document.removeEventListener("click", handleCancel, false);
  }, []);

  return (
    <div className="errors-container">
      <div className="errors-text" ref={errorText}>
        {errors}
        <button onClick={handleCancel} className="btn btn-primary btn-error">
          Ok
        </button>
      </div>

      <div className="error-background" />
    </div>
  );
};
export { Errors };
