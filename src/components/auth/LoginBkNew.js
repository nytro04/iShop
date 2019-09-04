import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";
import TextInput from "../common/TextInput";

class LogIn extends Component {
  handleSubmit = () => {};

  // renderError = (errors, touched) => {
  //   if (!!errors.value) {
  //     return (
  //       <Form.Control.Feedback type="invalid">
  //         {errors.value}
  //       </Form.Control.Feedback>
  //     );
  //   } else if (touched.value && !errors.value) {
  //     return (
  //       <Form.Control.Feedback type="valid">Looks good!!</Form.Control.Feedback>
  //     );
  //   }
  // };

  render() {
    const LoginSchema = Yup.object().shape({
      email: Yup.string()
        .required()
        .email("Invalid email"),
      password: Yup.string()
        .required("Password field is required")
        .min(8, "Password must be at least 8 characters")
        .test(
          "regex",
          "Password must contain (special character, uppercase, lowercase and number)  eg.  4q6xmt@94;CNewH! ",
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
        <Formik validationSchema={LoginSchema} initialValues={initialValues}>
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            errors
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
                errors={errors}
                touched={touched}
                errorMessage="Email field is required"
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
                errors={errors}
                touched={touched}
                errorMessage="Password field is required"
              />
              <Button className="login__forms-button" type="submit">
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default LogIn;
