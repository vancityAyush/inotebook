import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "65d24cc805f4296abbc66a51",
      user: "65d24c6b05f4296abbc66a4d",
      title: "My Title",
      description: "My Description",
      tag: "General",
      date: "2024-02-18T18:30:32.652Z",
      __v: 0,
    },
    {
      _id: "65d24d0a05f4296abbc66a54",
      user: "65d24c6b05f4296abbc66a4d",
      title: "My Title",
      description: "My Description",
      tag: "General",
      date: "2024-02-18T18:31:38.890Z",
      __v: 0,
    },
    {
      _id: "65d24d0a05f4296abbc66a54",
      user: "65d24c6b05f4296abbc66a4d",
      title: "My Title",
      description: "My Description",
      tag: "General",
      date: "2024-02-18T18:31:38.890Z",
      __v: 0,
    },
    {
      _id: "65d24d0a05f4296abbc66a54",
      user: "65d24c6b05f4296abbc66a4d",
      title: "My Title",
      description: "My Description",
      tag: "General",
      date: "2024-02-18T18:31:38.890Z",
      __v: 0,
    },
    {
      _id: "65d24d0a05f4296abbc66a54",
      user: "65d24c6b05f4296abbc66a4d",
      title: "My Title",
      description: "My Description",
      tag: "General",
      date: "2024-02-18T18:31:38.890Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  //Add a note
  const addNote = (title, description, tag) => {
    //TODO add api call
    let note = {
      _id: "65d24cc805f4296abdsg",
      user: "65d24c6b05f4296abbc66a4d",
      title: title,
      description: description,
      tag: tag,
      date: "2024-02-18T18:30:32.652Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  //Delete a note
  const deleteNote = (id) => {
    console.log("deleting note with id", id);
    //TODO add api call
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a note
  const editNote = () => {};
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
