import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  const context = useContext(noteContext);
  const { addNote } = context;
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };
  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
    console.log(note);
  };
  return (
    <div className="container">
      <h1>Add a Notes Here</h1>
      <form>
        <div className="mb-3">
          <label for="title" className="form-label text-start">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="titleHelp"
            name="title"
            onChange={onChange}
          />
          <div id="titleHelp" className="form-text">
            Add your title here
          </div>
        </div>
        <div className="mb-3">
          <label for="description" className="form-label text-start">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            name="description"
            id="description"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label for="tag" className="form-label text-start">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            name="tag"
            id="tag"
            onChange={onChange}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNote;
