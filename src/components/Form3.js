import React, { Fragment } from "react";

const Form3 = ({ setCurrentform, currentform }) => {
  return (
    <Fragment>
      <h2>Formulaire 3</h2>
      <button onClick={(e) => setCurrentform(currentform - 1)}>
        precedent
      </button>
      <button onClick={(e) => setCurrentform(currentform + 1)}>suivant</button>
    </Fragment>
  );
};

export default Form3;
