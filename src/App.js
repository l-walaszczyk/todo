import React, { useState } from "react";
import Table from "./components/Table";
import Form from "./components/Form";
import "./App.scss";

const initialTodos = [
  { taskName: "01", taskPriority: 1, taskDone: false },
  { taskName: "02", taskPriority: 1, taskDone: false },
  { taskName: "03", taskPriority: 1, taskDone: false },
  { taskName: "04", taskPriority: 1, taskDone: false },
  { taskName: "05", taskPriority: 1, taskDone: false },
  { taskName: "06", taskPriority: 1, taskDone: false },
  { taskName: "07", taskPriority: 1, taskDone: false },
  { taskName: "08", taskPriority: 1, taskDone: false },
  { taskName: "09", taskPriority: 1, taskDone: false },
  { taskName: "10", taskPriority: 1, taskDone: false },
  { taskName: "11", taskPriority: 1, taskDone: false },
  { taskName: "12", taskPriority: 1, taskDone: false },
  { taskName: "13", taskPriority: 1, taskDone: false },
  { taskName: "14", taskPriority: 1, taskDone: false },
  { taskName: "15", taskPriority: 1, taskDone: false },
  { taskName: "16", taskPriority: 1, taskDone: false },
  { taskName: "17", taskPriority: 1, taskDone: false },
  { taskName: "18", taskPriority: 1, taskDone: false },
  { taskName: "19", taskPriority: 1, taskDone: false },
  { taskName: "20", taskPriority: 1, taskDone: false },
];

// const initialTodos = [
//   { taskName: "Take out the trash", taskPriority: 1, taskDone: false },
//   { taskName: "Feed the dog", taskPriority: 2, taskDone: true },
//   { taskName: "Order lunch", taskPriority: 2, taskDone: false },
//   { taskName: "Send email to Peter", taskPriority: 0, taskDone: true },
//   { taskName: "Buy groceries", taskPriority: 1, taskDone: false },
// ];

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || initialTodos
  );

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <Form todos={todos} setTodos={setTodos} />
      <Table todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
