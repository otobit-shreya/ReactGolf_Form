import * as yup from "yup";

const passwordRules = /^(?=.\d)(?=.*[a-z])(?=.*[A-Z]).{10,}$/;
const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

export const validations = yup.object().shape({
  userName: yup.string().required("Required*"),
  email: yup.string().email("Please enter a valid email").required("Required*"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required*"),
  mobileNo: yup
    .string()
    .min(10, "Please enter a valid number")
    .max(10, "Please enter a valid number")
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required*"),
  role: yup.string().required("Required*"),
});
