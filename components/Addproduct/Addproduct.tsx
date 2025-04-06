import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { useDispatch } from "react-redux";
// import { addProductToArray, pushProductsToAPI } from "../../Redux/action";
import "./Addproduct.css";
// import { useSelector } from "react-redux";
// import { productselector } from "../../Redux/selector";

const Addproduct = () => {
  // const selector = useSelector(productselector);
  // const dispatch = useDispatch();
  // console.log(selector);

  return (
    <Formik
      initialValues={{
        name: "",
        price: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("Name is required")
          .min(3, "Name must be at least 3 characters"),
        price: Yup.number()
          .required("Price is required")
          .positive("Price must be positive"),
      })}
      
      onSubmit={(values:any, { setSubmitting, resetForm }:any) => {
        // Push data to local array
        console.log(values);
        // dispatch(addProductToArray({ title: values.name, price: values.price }));

        // Optionally, push data to API
        // dispatch(pushProductsToAPI());

        resetForm();
        setSubmitting(false);
      }}
    >
      {(formik:any) => (
        <Form>
          <div>
            <label htmlFor="name">Product Name</label>
            <Field id="name" name="name" type="text" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <Field id="price" name="price" type="number" />
            <ErrorMessage name="price" component="div" className="error" />
          </div>
          <button type="submit" disabled={formik.isSubmitting} >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Addproduct;
