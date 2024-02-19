import React from "react";

const Alert = ({ message }) => {
  return (
    <div>
      <div class="alert alert-primary" role="alert">
        {message}
      </div>
    </div>
  );
};

export default Alert;
