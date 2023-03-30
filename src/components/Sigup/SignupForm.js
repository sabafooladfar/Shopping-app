import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Input from "../../common/Input";
import "../signup-login.css";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirm: "",
};

const onSubmit = (values) => {
  //   console.log(values);
  // axios
  //   .post("http://localhost:3001/users", values)
  //   .then((res) => console.log(res.data))
  //   .catch((err) => console.log(err));
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(6, "Must be at least 6 characters"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .required("Phone Number is Required")
    .matches(/^[0-9]{11}$/, "Must be only digits"),
  password: Yup.string().required("Password is required"),
  passwordConfirm: Yup.string()
    .required("Password Confirmation is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const SignupForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });
  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <div className="formContainer">
        <Input label="Name" name="name" formik={formik} />
        <Input label="Email" name="email" formik={formik} type="email" />
        <Input
          label="Phone Number"
          name="phoneNumber"
          formik={formik}
          type="tel"
        />
        <Input
          label="Password"
          name="password"
          formik={formik}
          type="password"
        />
        <Input
          label="Password confirmation"
          name="passwordConfirm"
          formik={formik}
          type="password"
        />
        <button type="submit" disabled={!formik.isValid}>
          Sign Up
        </button>
        <Link to="/login">
          <p className="formLink">Already signup ?</p>
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;
