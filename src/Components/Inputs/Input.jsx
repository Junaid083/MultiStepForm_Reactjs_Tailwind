import { useState } from "react";

export const Input = ({
  id,
  name,
  type,
  rules = {},
  width = "w-full",
  placeholder = "",
  value,
  getValue,
}) => {
  const [val, setValue] = useState(value);
  const onChange = (e) => {
    // console.log(e.target.value);
    // setValue(e.target.value);
    // getValue(e.target.value);
  };

  return (
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      id={id}
      value={val}
      onChange={onChange}
      className={`form-input block ${width} border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 flex-grow-1 focus:border-blue-500 focus:ring-0 sm:text-sm rounded-md`}
    />
  );
};