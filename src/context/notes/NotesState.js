import NoteContext from "./noteContext";
import { useState } from "react";
const host = "http://localhost:5000";
const NoteState = (props) => {
  const [notes, setNotes] = useState([]);

  //Get al note
  const getAllNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkMjRjNmIwNWY0Mjk2YWJiYzY2YTRkIn0sImlhdCI6MTcwODI4MDkzOX0.b2ReLuvFi5SFABdJIBGp3Uz2-DwPWJ6K0j5M_Y04SOM",
      },
    });
    const notes = await response.json();
    setNotes(notes);
  };

  //Add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkMjRjNmIwNWY0Mjk2YWJiYzY2YTRkIn0sImlhdCI6MTcwODI4MDkzOX0.b2ReLuvFi5SFABdJIBGp3Uz2-DwPWJ6K0j5M_Y04SOM",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    console.log(note);
    setNotes(notes.concat(note));
  };
  //Delete a note
  const deleteNote = async (id) => {
    console.log("deleting note with id", id);

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkMjRjNmIwNWY0Mjk2YWJiYzY2YTRkIn0sImlhdCI6MTcwODI4MDkzOX0.b2ReLuvFi5SFABdJIBGp3Uz2-DwPWJ6K0j5M_Y04SOM",
      },
    });

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkMjRjNmIwNWY0Mjk2YWJiYzY2YTRkIn0sImlhdCI6MTcwODI4MDkzOX0.b2ReLuvFi5SFABdJIBGp3Uz2-DwPWJ6K0j5M_Y04SOM",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    let newNotes = JSON.parse(JSON.stringify(notes));
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getAllNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
