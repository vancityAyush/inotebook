import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const context = useContext(noteContext);
  const { addNote } = context;
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);

    setNote({ title: "", description: "", tag: "" });
  };
  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
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
            value={note.title}
            minLength={5}
            required
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
            value={note.description}
            onChange={onChange}
            minLength={5}
            required
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
            value={note.tag}
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
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleClick}
          disabled={note.title < 5 || note.description < 5}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNote;
