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
  errors,
  touched,
  errorMessage
}) => {
  const renderError = (errors, touched) => {
    console.log(errors);
    // console.log(touched);
    if (errors.email || errors.password || errors.confirmPassword) {
      return (
        <Form.Control.Feedback type="invalid">
          {errors.email || errors.password || errors.confirmPassword}
          {/* {errors.email ? errors.email : errors.password === null}
          {errors.password ? errors.password : errors.email === null} */}
        </Form.Control.Feedback>
      );
    } else if (
      (touched.email && !errors.email) ||
      (touched.password && !errors.password) ||
      (touched.confirmPassword && !errors.confirmPassword)
    )
      return (
        <Form.Control.Feedback type="valid">Looks good!!</Form.Control.Feedback>
      );
  };

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

        {renderError(errors, touched)}
      </Form.Group>
    </div>
  );
};

export default TextInput;
