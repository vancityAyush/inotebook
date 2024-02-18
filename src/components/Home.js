import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Home = () => {
  // const a = useContext(noteContext);
  return (
    <div>
      This is Home
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          console.log("clicked");
          // a.name = "Elias";
        }}
      >
        Primary
      </button>
    </div>
  );
};

export default Home;
