import React, { useState } from "react";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  let submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or description cannnot be blank");
    }
    else{
      props.addTodo(title, desc);
      setDesc("");
      setTitle("");
    }

  };

  return (
    <div>
      <h2 className="text-center">Add To-do Items</h2>
      <form className="container my-3" onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo-title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Add todo
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};
