import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import useForm from "../hooks/useForm.js";

const Form = ({ setTodos }) => {
  const stateSchema = {
    taskName: { value: "", error: "" },
    taskPriority: { value: "", error: "" },
  };

  const stateValidatorSchema = {
    taskName: {
      required: true,
      validator: {
        func: (value) => value.length <= 40,
        error: "Task name too long",
      },
    },
    taskPriority: {
      required: false,
    },
  };

  function onSubmitForm(todo) {
    const newTodo = { ...todo, taskDone: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  const {
    values: { taskName, taskPriority },
    errors,
    dirty,
    handleOnChange,
    handleOnSubmit,
    disable,
  } = useForm(stateSchema, stateValidatorSchema, onSubmitForm);

  return (
    <div className="form-wrapper">
      <form id="add-task" onSubmit={handleOnSubmit}>
        <div className="input-container">
          <input
            type="text"
            name="taskName"
            placeholder="Enter new task"
            required
            value={taskName}
            onChange={handleOnChange}
          />
          {errors.taskName && dirty.taskName && (
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
          {errors.taskPriority && dirty.taskPriority && (
            <p className="error">{errors.taskPriority}</p>
          )}
        </div>
        <button form="add-task" type="submit" disabled={disable}>
          <FontAwesomeIcon icon={faPlusSquare} />
        </button>
      </form>
    </div>
  );
};

export default Form;
