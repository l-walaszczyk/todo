import React, { useState } from "react";
import Table from "./components/Table";
import Form from "./components/Form";
import "./App.scss";

// initial 'todos' for testing pagination
// const initialTodos = [
//   { taskName: "01", taskPriority: "", taskDone: false },
//   { taskName: "02", taskPriority: "", taskDone: false },
//   { taskName: "03", taskPriority: "", taskDone: false },
//   { taskName: "04", taskPriority: "", taskDone: false },
//   { taskName: "05", taskPriority: "", taskDone: false },
//   { taskName: "06", taskPriority: "", taskDone: false },
//   { taskName: "07", taskPriority: "", taskDone: false },
//   { taskName: "08", taskPriority: "", taskDone: false },
//   { taskName: "09", taskPriority: "", taskDone: false },
//   { taskName: "10", taskPriority: "", taskDone: false },
//   { taskName: "11", taskPriority: "", taskDone: false },
//   { taskName: "12", taskPriority: "", taskDone: false },
//   { taskName: "13", taskPriority: "", taskDone: false },
//   { taskName: "14", taskPriority: "", taskDone: false },
//   { taskName: "15", taskPriority: "", taskDone: false },
//   { taskName: "16", taskPriority: "", taskDone: false },
// ];

// initial 'todos' taken from the assignment
const initialTodos = [
  { taskName: "Take out the trash", taskPriority: "1", taskDone: false },
  { taskName: "Feed the dog", taskPriority: "2", taskDone: true },
  { taskName: "Order lunch", taskPriority: "2", taskDone: false },
  { taskName: "Send email to Peter", taskPriority: "0", taskDone: true },
  { taskName: "Buy groceries", taskPriority: "1", taskDone: false },
];

// empty initial 'todos'
// const initialTodos = [];

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
