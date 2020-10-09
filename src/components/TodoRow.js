import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function TodoRow({
  index,
  todo: { name, priority, done },
  activeRow,
  setActiveRow,
}) {
  return (
    <tr
      className={index === activeRow ? "active" : "inactive"}
      onFocus={() => setActiveRow(index)}
      onMouseEnter={() => setActiveRow(index)}
      onTouchStart={() => setActiveRow(index)}
      onMouseLeave={() => setActiveRow(null)}
    >
      <td>{name}</td>
      <td>{["Low", "Medium", "High"][priority]}</td>
      <td>
        <label className="checkbox-container">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </td>
      <td>
        <button
          type="button"
          onClick={() => {
            console.log("delete");
            setActiveRow(null);
          }}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </td>
    </tr>
  );
}

export default TodoRow;
