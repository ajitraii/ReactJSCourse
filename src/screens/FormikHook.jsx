import React, { useState } from "react";
import { Formik } from "formik";
import "../screens/css/FormikHook.css";
import * as Yup from "yup";
const FormikHook = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "name length should be greater than 2")
      .required("name is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("vales", values);
      }}
    >
      {({ values, handleReset, errors, handleChange }) => {
        return (
          <section className="section-form">
            <form action="">
              <div>
                <label htmlFor="name"></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter name here"
                  value={values.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email"></label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter email here"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password"></label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  placeholder="Enter password here"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="confirm password"></label>
                <input
                  type="text"
                  id="confirm password"
                  name="confirm password"
                  placeholder="Enter confirm password here"
                  value={formData.confirm_password}
                  onChange={handleChange}
                />
              </div>
            </form>
            <button type="submit">Submit</button>
          </section>
        );
      }}
    </Formik>
  );
};

export default FormikHook;
