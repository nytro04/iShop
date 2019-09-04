import React from "react";
import { Form } from "react-bootstrap";

const TextInput = ({
  type,
  name,
  placeholder,
  value,
  onBlur,
  onChange,
  isValid,
  isInvalid,
  renderErrorText
}) => {
  return (
    <div>
      <Form.Group controlId="formGroup">
        <Form.Control
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          isValid={isValid}
          isInvalid={isInvalid}
        />
        {renderErrorText}
      </Form.Group>
    </div>
  );
};

export default TextInput;
