import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

function Form() {
  return (
    <div className="form-wrapper">
      <form id="add-task">
        <input type="text" name="task-name" placeholder="Enter new task" />
        <div className="select-wrapper">
          <select defaultValue="">
            <option value="" disabled hidden>
              Set priority
            </option>
            <option value="0">Low</option>
            <option value="1">Medium</option>
            <option value="2">High</option>
          </select>
        </div>
        <button form="add-task" type="submit">
          <FontAwesomeIcon icon={faPlusSquare} />
        </button>
      </form>
    </div>
  );
}

export default Form;
