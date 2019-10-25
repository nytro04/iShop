import React, { Component } from "react";
import { connect } from "react-redux";

import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";
import TextInput from "../common/TextInput";
import { createProduct } from "../../actions/productActions";

class CreateProduct extends Component {
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
      type: Yup.string().required("Product type Field is required"),
      name: Yup.string()
        .required("Product name Field is required")
        .min(3, "Name must be at least 3 characters"),
      description: Yup.string()
        .required("Product description field is required")
        .min(20, "Name must be at least 20 characters"),
      imageUrl: Yup.string().required("Image Url field is required"),
      price: Yup.number().required("Price field is required")
    });

    const initialValues = {
      type: "",
      name: "",
      description: "",
      imageUrl: "",
      price: ""
    };

    return (
      <div className="container login__forms">
        <h1>Add New Product</h1>
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
              <select
                className="custom-select mb-3"
                name="type"
                placeholder="Product type"
                value={values.type}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.type && !errors.type ? true : false}
                isInvalid={!!errors.type ? true : false}
                renderErrorText={this.renderError(errors.name, touched.name)}
              >
                <option value="" label="Select product type" disabled />
                <option value="iPhone" label="iPhone" />
                <option value="iMac" label="iMac" />
                <option value="MacBook" label="MacBook" />
                <option value="iWatch" label="iWatch" />
              </select>
              <TextInput
                type="text"
                name="name"
                placeholder="Product Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.name && !errors.name ? true : false}
                isInvalid={!!errors.name ? true : false}
                renderErrorText={this.renderError(errors.name, touched.name)}
              />
              <TextInput
                type="text"
                name="description"
                placeholder="Product  description "
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={
                  touched.description && !errors.description ? true : false
                }
                isInvalid={!!errors.description ? true : false}
                renderErrorText={this.renderError(
                  errors.description,
                  touched.description
                )}
              />
              <TextInput
                type="text"
                name="imageUrl"
                placeholder="image Url"
                value={values.imageUrl}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.imageUrl && !errors.imageUrl ? true : false}
                isInvalid={!!errors.imageUrl ? true : false}
                renderErrorText={this.renderError(
                  errors.imageUrl,
                  touched.imageUrl
                )}
              />

              <TextInput
                type="text"
                name="price"
                placeholder="Price"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.price && !errors.price ? true : false}
                isInvalid={!!errors.price ? true : false}
                renderErrorText={this.renderError(errors.price, touched.price)}
              />
              <Button className="login__forms-button" type="submit">
                Add Product
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default connect(
  null,
  { createProduct }
)(CreateProduct);
