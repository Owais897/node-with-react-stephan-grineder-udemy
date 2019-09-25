// survey field contains logic to render a single
// lable and text input

import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
  // props.input
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};

// {...input} is equal to onblur={input.blur} onchange={input.change}
