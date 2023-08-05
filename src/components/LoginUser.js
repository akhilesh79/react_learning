import React from "react";
import { useFormik } from "formik";
import signUpSchema from "../utils/signUpSchema";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const LoginUser = () => {
  const { values, touched, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: (values, action) => {
      // console.log(values);
      action.resetForm();
    },
  });

  return (
    <div className="form-container">
      <div className="login-form">
        <div className="login-title">
          <h3>Welcome!</h3>
          <h3>Please enter your credentials</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label className="input-label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              placeholder="please enter your name"
              autoComplete="off"
              type="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name && <p>{errors.name}</p>}
          </div>
          <div className="input-block">
            <label className="input-label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              placeholder="please enter your email"
              autoComplete="off"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && <p>{errors.email}</p>}
          </div>
          <div className="input-block">
            <label className="input-label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              placeholder="please enter your password"
              autoComplete="off"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && <p>{errors.password}</p>}
          </div>
          <div className="input-block">
            <label className="input-label" htmlFor="confirm_password">
              Confirm Password
            </label>
            <input
              id="confirm_password"
              name="confirm_password"
              placeholder="confirm password"
              autoComplete="off"
              type="password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirm_password && touched.confirm_password && <p>{errors.confirm_password}</p>}
          </div>
          <div className="modal-buttons">
            <button className="input-button" type="submit">
              Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
