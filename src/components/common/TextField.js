// import React from "react";
// import { Form } from "react-bootstrap";

// const customInputForm = ({ field, form: { touched, errors }, ...props }) => (
//   <div>
//     <Input
//       invalid={!!(touched[field.name] && errors[field.name])}
//       {...field}
//       {...props}
//     />
//     {touched[field.name] && errors[field.name] && (
//       <FormFeedback>{errors[field.name]}</FormFeedback>
//     )}
//   </div>
// );

// <Field name="email" type={"email"} component={customInputForm} />;

// const TextField = ({ type, placeholder, label, formGroup }) => {
//   return (
//     <div>
//       <Form.Group controlId={formGroup}>
//         <Form.Control type={type} placeholder={placeholder} />
//       </Form.Group>
//     </div>
//   );
// };

// export default TextField;
