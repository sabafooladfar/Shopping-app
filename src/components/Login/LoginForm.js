import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../common/Input";
import "../signup-login.css";
import { Link } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = (values) => {
  //   console.log(values);
  // axios
  //   .post("http://localhost:3001/users", values)
  //   .then((res) => console.log(res.data))
  //   .catch((err) => console.log(err));
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
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
        <Input label="Email" name="email" formik={formik} type="email" />
        <Input
          label="Password"
          name="password"
          formik={formik}
          type="password"
        />
        <button type="submit" disabled={!formik.isValid}>
          Log In
        </button>
        <Link to="/signup">
          <p className="formLink">Haven't signup yet?</p>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
