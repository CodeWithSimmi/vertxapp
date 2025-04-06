"use client";

import { Formik, Field, Form, ErrorMessage } from "formik";
import style from "./signup.module.scss";
import { validateSignup } from "../../utils/validation";
import Link from "next/link";

const Signup = () => {
  const handleSignup = (values: { name: string; email: string; password: string }) => {
    console.log("form data", values);
  };

  return (
    <div className={style["signup-container"]}>
      <div className={style["container"]}>
        <div className={style["form-container"]}>
          <span className={style["form-title"]}>Sign up</span>

          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validate={validateSignup}
            onSubmit={handleSignup}
          >
            {({ errors, touched }:any) => (
              <Form className={style["form-data"]}>
                <Field
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className={style["input-field"]}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={style["error-message"]}
                />

                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={style["input-field"]}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={style["error-message"]}
                />

                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={style["input-field"]}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={style["error-message"]}
                />
                
                <p className="p-4">
                  Already have an account? {" "}
                  <span className={style["signin-page"]}>
                    <Link href="/Signin">Sign in!</Link>
                  </span>
                </p>
                
                <button type="submit" className={style["btn"]}>
                  Signup
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Signup;
