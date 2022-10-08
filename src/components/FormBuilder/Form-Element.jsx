import { Field } from "formik";
function getStyles(errors, touches) {
    if (errors && touches) {
      return {
        border: "1px solid red",
      };
    }
  }
export function TextFeild(props) {
    // console.log(props, '===>>');
  const { name, type,error,touch, label, placeholder, ...rest } = props;
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <br/>
      <Field
        className="form-controle"
        style={getStyles(error, touch)}
        as={type}
        id={name}
        name={name}
        placeholder={placeholder || ""}
        {...rest}
      ></Field>
    </>
  );
}

export function SelectField(props) {
  const { name, type, error, touch, label, placeholder, options, ...rest } = props;
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <br/>
      <Field
        as={type}
        className="form-controle"
        style={getStyles(error, touch)}
        id={name}
        name={name}
        placeholder={placeholder || ""}
        {...rest}
      >
        <option value="">Choose...</option>
        {options &&
          options.map((op, index) => (
            <option key={index} value={op.value} label={op.value || op.label} />
          ))}
      </Field>
    </>
  );
}
