import React from "react";

const SelectListGroup = ({ name, value, onChange, options }) => {
  const selectOptions = options.map(option => (
    <option value={option.label} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <div>
      <select name={name} value={value} onChange={onChange}>
        {selectOptions}
      </select>
    </div>
  );
};

export default SelectListGroup;
