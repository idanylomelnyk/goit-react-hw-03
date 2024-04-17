import { Formik, Form, Field } from "formik";
import { useId } from "react";
import css from "./SearchBox.module.css";



export default function SearchBox({ value, onFilter }) {

  const searchId = useId();

  return (
    <>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form className={css.form}>
          <label className={css.label} htmlFor={searchId}>Search</label>
          <Field
            className = {css.input}
            type="text"
            name="search"
            value={value}
            id = {searchId}
            onChange={(e) => {
              onFilter(e.target.value);
            }}
            
          ></Field>
        </Form>
      </Formik>
    </>
  );
}
