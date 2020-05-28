import React, { Fragment } from "react";

const Form4 = ({ setCurrentform, currentform }) => {
  return (
    <Fragment>
      <h2>Formulaire 4</h2>
      <button onClick={(e) => setCurrentform(currentform - 1)}>
        precedent
      </button>
      {/* <button onClick={(e) => setCurrentform(currentform + 1)}>suivant</button> */}
    </Fragment>
  );
};

export default Form4;
