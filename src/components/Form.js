import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import useForm from "../hooks/useForm.js";

const Form = ({ setTodos }) => {
  function onSubmitForm(todo) {
    const newTodo = { ...todo, taskDone: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  const formStateSchema = {
    taskName: {
      getErrorMsg: (value) => {
        if (value.length === 0) {
          return "Task name is required";
        } else if (value.length > 40) {
          return "Task name too long";
        } else {
          return "";
        }
      },
    },
    taskPriority: {
      getErrorMsg: () => "",
      // getErrorMsg: (value) => (value !== "0" ? "" : "Task priority must be low"), // example
    },
  };

  const {
    values: { taskName, taskPriority },
    errors,
    dirty,
    isReady,
    handleOnChange,
    handleOnSubmit,
  } = useForm(formStateSchema, onSubmitForm);

  return (
    <div className="form-wrapper">
      <form id="add-task" onSubmit={handleOnSubmit}>
        <div className="input-container">
          <input
            type="text"
            name="taskName"
            placeholder="Enter new task"
            value={taskName}
            onChange={handleOnChange}
          />
          {errors.taskName && dirty && (
            <p className="error">{errors.taskName}</p>
          )}
        </div>
        <div className="select-container">
          <select
            name="taskPriority"
            value={taskPriority}
            onChange={handleOnChange}
          >
            <option value="" disabled hidden>
              Set priority
            </option>
            <option value="0">Low</option>
            <option value="1">Medium</option>
            <option value="2">High</option>
          </select>
          {errors.taskPriority && dirty && (
            <p className="error">{errors.taskPriority}</p>
          )}
        </div>
        <button
          form="add-task"
          type="submit"
          className={isReady ? "active" : "inactive"}
        >
          <FontAwesomeIcon icon={faPlusSquare} />
        </button>
      </form>
    </div>
  );
};

export default Form;
