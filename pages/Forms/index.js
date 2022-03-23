import React from "react";
import Forms from "../../Form.json";
const FormsHome = () => {
  return (
    <div>
      {Forms.map((item) => (
        // <div key={key.id}></div>
        <div key={key.id}></div>
      ))}
      <h1>wkwkwk</h1>
    </div>
  );
};
export default FormsHome;
