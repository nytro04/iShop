import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form } from "react-bootstrap";

class LogIn extends Component {
  handleSubmit = () => {};

  renderError(errors, touched) {
    if (!!errors.email) {
      return (
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      );
    } else if (touched.email && !errors.email) {
      return (
        <Form.Control.Feedback type="valid">Looks good!!</Form.Control.Feedback>
      );
    }
  }

  render() {
    const LoginSchema = Yup.object().shape({
      email: Yup.string()
        .email("Invalid email")
        .required()
    });

    return (
      <div className="container login__forms">
        <h1>Login</h1>
        <Formik validationSchema={LoginSchema} initialValues={{ email: "" }}>
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            errors
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group controlId="formGroup">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email ? true : false}
                  isInvalid={!!errors.email ? true : false}
                />
                {this.renderError(errors, touched)}
              </Form.Group>

              <Form.Group controlId="formGroup">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email ? true : false}
                  isInvalid={!!errors.email ? true : false}
                />
                {this.renderError(errors, touched)}
              </Form.Group>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default LogIn;
