import React from "react";
import Table from "./components/Table";
import Form from "./components/Form";
import "./App.scss";

const todos = [
  { name: "Take out the trash", priority: 1, done: false },
  { name: "Feed the dog", priority: 2, done: true },
  { name: "Order lunch", priority: 2, done: false },
  { name: "Send email to Peter", priority: 0, done: true },
  { name: "Buy groceries", priority: 1, done: false },
];

function App() {
  return (
    <div className="container">
      <Form />
      <Table todos={todos} />
    </div>
  );
}

export default App;
