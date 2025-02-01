import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addFAQ } from "../api";

const FaqForm = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addFAQ(question, answer);
    setQuestion("");
    setAnswer("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Question" />
      <ReactQuill value={answer} onChange={setAnswer} />
      <button type="submit">Add FAQ</button>
    </form>
  );
};

export default FaqForm;
