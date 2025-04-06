"use client"; // Ensure this is a Client Component

import { Formik, Field, Form, ErrorMessage } from "formik";
import style from "./signin.module.scss";
import { validateSignin } from "../../utils/validation";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useRouter();

  const handleSignin = (values: { email: string; password: string }) => {
    console.log("form data", values);
    dispatch({ type: "LOGOUT_SAGA", payload: true });
    navigate.push("/dashboard");
  };

  return (
    <div className={style["signin-container"]}>
      <div className={style["container"]}>
        <div className={style["form-container"]}>
          <span className={style["form-tittle"]}>Sign in</span>

          <Formik
            initialValues={{ email: "", password: "" }}
            validate={validateSignin}
            onSubmit={handleSignin}
          >
            {({ errors, touched }: any) => (
              <Form className={style["form-data"]}>
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
                  Don’t have an account?{" "}
                  <span className={style["signup-page"]}>
                    <Link href="/Signup">Sign up!</Link>
                  </span>
                </p>
                <button type="submit" className={style["btn"]}>
                  Signin
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Signin;
