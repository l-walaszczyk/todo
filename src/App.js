import React, { useState } from "react";
import Table from "./components/Table";
import Form from "./components/Form";
import "./App.scss";

const initialTodos = [
  { taskName: "Take out the trash", taskPriority: 1, taskDone: false },
  { taskName: "Feed the dog", taskPriority: 2, taskDone: true },
  { taskName: "Order lunch", taskPriority: 2, taskDone: false },
  { taskName: "Send email to Peter", taskPriority: 0, taskDone: true },
  { taskName: "Buy groceries", taskPriority: 1, taskDone: false },
];

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
