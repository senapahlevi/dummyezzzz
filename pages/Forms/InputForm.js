import React from "react";

const InputForm = ({ register, required, type, name, placeholder, className, error, onChange }) => {
  return (
    <>
      <input
        ref={register({
          required: `${placeholder} is required`,
        })}
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
      />
      {error && <p className="text-sm text-red-100">{error}</p>}
    </>
  );
};

export default InputForm;
