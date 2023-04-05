import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../common/Input";
import "../signup-login.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { loginUser } from "../../services/loginService";
import { useAuthActions, useAuth } from "../../Providers/AuthProvider";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";
  const setAuth = useAuthActions();
  const userData = useAuth();

  useEffect(() => {
    if (userData) {
      navigate(redirect);
    }
  }, [redirect, userData]);

  const onSubmit = async (values) => {
    //   console.log(values);
    try {
      const { data } = await loginUser(values);
      setAuth(data);
      setError(null);
      navigate(redirect);
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      }
    }
  };
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
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Link to={`/signup?redirect=${redirect}`}>
          <p className="formLink">Haven't signup yet?</p>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
