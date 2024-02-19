import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
const About = () => {
  return (
    <div>
      This is About
      <AddNote />
    </div>
  );
};

export default About;
