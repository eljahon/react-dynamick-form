import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { TextFeild, SelectField } from "./Form-Element";
import * as Yup from "yup";


const FormBuilder = (props) => {
  const { feilds, title, onSubmit } = props;
  const Element = (type, props, err,touch) => {
    // console.log(type, "===>>");
    let componentList = {
      select: SelectField,
      input: TextFeild,
      email: TextFeild,
      password: TextFeild,
      file: TextFeild,
      chexbox: TextFeild,
      "": TextFeild,
    };
    let _itemComponent = componentList[type];
    return <_itemComponent error={err} touch={touch} {...props} />;
  };
  const [validateSchema, setvalidateSchema] = useState({});
  const [initialValues, setinitialValues] = useState({});
  const [elmProps, setelmProps] = useState([]);
  useEffect(() => {
    feilds.forEach((el, index, arr) => {
      setvalidateSchema((old) => ({
        ...old,
        [el.name]: Yup[arr[index].validationsType]().required(el.name),
      }));
      setinitialValues((old) => ({
        ...old,
        [el.name]: arr[index].value ?? "",
      }));
    });
    let elProps = feilds.map((el) => {
      return {
        name: el.name,
        type: el.type,
        label: el.label,
        placeholder: el.placeholder,
        options: el.options ?? undefined,
      };
    });
    setelmProps([...elProps]);
  }, [feilds]);
  if (elmProps.length > 0) {
    return (
      <div>
        <h1>{title}</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape(validateSchema ?? {})}
          onSubmit={(values) => {
            console.log(values);
              onSubmit(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              {elmProps.map((el, key) => (
                <div key={key}>
                  <div>{Element(el.type, el, errors[el.name], touched[el.name])}</div>
                  {errors[el.name] && touched[el.name] ? (
                    <div style={{color: 'red'}}>{errors[el.name]}</div>
                  ) : null}
                  <br/>
                </div>
              ))}
              {props.children}
            </Form>
          )}
        </Formik>
      </div>
    );
  } else {
    return <></>;
  }
};
export default FormBuilder;
