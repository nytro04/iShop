import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";
import TextInput from "../common/TextInput";
import { loginUser } from "../../actions/authActions";
import { signInWithGoogle } from "../../firebase/Firebase.utils";

class LogIn extends Component {
  renderError = (errors, touched) => {
    if (!!errors) {
      return (
        <Form.Control.Feedback type="invalid">{errors}</Form.Control.Feedback>
      );
    } else if (touched && !errors) {
      return (
        <Form.Control.Feedback type="valid">Looks good!!</Form.Control.Feedback>
      );
    }
  };

  render() {
    const LoginSchema = Yup.object().shape({
      email: Yup.string()
        .required("Email field is required")
        .email("Invalid email"),
      password: Yup.string()
        .required("Password field is required")
        .min(8, "Password must be at least 8 characters")
        .test(
          "regex",
          "Password must contain (uppercase, lowercase, number and special character)  eg.  4q6xmt@94;CNewH! ",
          val => {
            let regExp = new RegExp(
              "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
            );
            // console.log(regExp.test(val), regExp, val);
            return regExp.test(val);
          }
        )
    });

    const initialValues = { email: "", password: "" };

    return (
      <div className="container login__forms">
        <h1>Login</h1>
        <Formik
          validationSchema={LoginSchema}
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);

            this.props.loginUser(values);
            resetForm();
            setSubmitting(false);
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            errors,
            isSubmitting
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <TextInput
                type="email"
                name="email"
                placeholder="Enter email address"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.email && !errors.email ? true : false}
                isInvalid={!!errors.email ? true : false}
                renderErrorText={this.renderError(errors.email, touched.email)}
              />
              <TextInput
                type="password"
                name="password"
                placeholder="Enter password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.password && !errors.password ? true : false}
                isInvalid={!!errors.password ? true : false}
                renderErrorText={this.renderError(
                  errors.password,
                  touched.password
                )}
              />
              <Button
                disabled={isSubmitting}
                className="login__forms-button"
                type="submit"
              >
                Login
              </Button>
              <small>
                <span
                  disabled={isSubmitting}
                  className="login__gmail"
                  onClick={signInWithGoogle}
                >
                  You can also login with your gmail account
                </span>
              </small>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default connect(
  null,
  { loginUser }
)(LogIn);
