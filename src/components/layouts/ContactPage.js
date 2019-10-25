import React, { Component } from "react";

import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";
import TextInput from "../common/TextInput";
import Footer from "./Footer";

class ContactPage extends Component {
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
    const RegisterSchema = Yup.object().shape({
      name: Yup.string()
        .required("Name Field is required")
        .min(3, "Name must be at least 3 characters"),
      email: Yup.string()
        .required("Email field is required")
        .email("Invalid email"),
      subject: Yup.string().required("Subject field is required"),
      price: Yup.string().required("Price field is required")
    });

    const initialValues = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };

    return (
      <div>
        <div className="container col-10 m-5">
          <h1 className="text-center m-5">Welcome to our Contact Page</h1>
          <p className="contact__page-p text-center">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of minutes
            to help you.
          </p>

          <div className="container login__forms">
            <Formik
              validationSchema={RegisterSchema}
              initialValues={initialValues}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);

                console.log(values);
                this.props.createProduct(values);
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
                errors
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <TextInput
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.name && !errors.name ? true : false}
                    isInvalid={!!errors.name ? true : false}
                    renderErrorText={this.renderError(
                      errors.name,
                      touched.name
                    )}
                  />
                  <TextInput
                    type="email"
                    name="email"
                    placeholder="Your email "
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.email && !errors.email ? true : false}
                    isInvalid={!!errors.email ? true : false}
                    renderErrorText={this.renderError(
                      errors.email,
                      touched.email
                    )}
                  />
                  <TextInput
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.subject && !errors.subject ? true : false}
                    isInvalid={!!errors.subject ? true : false}
                    renderErrorText={this.renderError(
                      errors.subject,
                      touched.subject
                    )}
                  />
                  <textarea
                    class="form-control mb-3"
                    cols="60"
                    rows="8"
                    name="message"
                    placeholder="Message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.message && !errors.message ? true : false}
                    isInvalid={!!errors.message ? true : false}
                    renderErrorText={this.renderError(
                      errors.message,
                      touched.message
                    )}
                  ></textarea>

                  <Button className="login__forms-button mb-5" type="submit">
                    Send
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <hr />

        <div className="d-flex justify-content-between mt-5 mb-5">
          <p className="contact__page-p">
            <i className="fas fa-phone mr-3 text-secondary" />
            <span>0549 970 041</span>
          </p>
          <p className="contact__page-p">
            <i className="fas fa-map-marker-alt mr-3 text-secondary" />
            <span>Accra, Ghana</span>
          </p>
          <p className="contact__page-p">
            <i className="fas fa-envelope mr-3 text-secondary" />
            <span>contact@ishop.com</span>
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactPage;
