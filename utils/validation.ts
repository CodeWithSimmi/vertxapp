export const validateSignin = (values: any) => {
    const errors: { email?: string; password?: string } = {};
  
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
  
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = "Must be at least 6 characters";
    }
  
    return errors;
};

export const validateSignup = (values: any) => {
    const errors: { name?: string; email?: string; password?: string; confirmPassword?: string } = {};
  
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length < 2) {
      errors.name = "Must be at least 2 characters";
    }
  
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
  
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = "Must be at least 6 characters";
    }
  
    if (!values.confirmPassword) {
      errors.confirmPassword = "Required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords must match";
    }
  
    return errors;
};
