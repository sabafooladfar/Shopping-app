const Input = ({ label, name, type = "text", formik }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} {...formik.getFieldProps(name)} name={name} />
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
