import React from "react";
import FaqList from "./components/FaqList";
import FaqForm from "./components/FaqForm";
import "./index.css";

function App() {
  return (
    <div>
      <h1>FAQ Management</h1>
      <FaqForm />
      <FaqList lang="en" />
    </div>
  );
}

export default App;

