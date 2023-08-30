import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialValues, validationForm } from "./skillFormUtil";
import { FormValues } from "../../constants";
import { useAppDispatch } from "../../app/hooks";
import { fetchSkills, postSkills } from "../../features/skills/skillsSlice";

const SkillsForm = () => {
  const dispatch = useAppDispatch();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationForm}
      onSubmit={(values, { resetForm }) => {
        dispatch(
          postSkills({
            name: values.name.toUpperCase(),
            range: parseInt(values.range),
          })
        );
        dispatch(fetchSkills());
        resetForm();
      }}
    >
      {({ dirty }) => (
        <Form className="form">
          <div className="form-input">
            <label htmlFor="name">
              {FormValues.NAME_LABEL}
              <Field
                type="text"
                name="name"
                id="name"
                placeholder={FormValues.NAME_PLACEHOLDER}
              />
            </label>
            <ErrorMessage name="name" component="span" />
          </div>
          <div className="form-input">
            <label htmlFor="range">
              {FormValues.RANGE_LABEL}
              <Field
                type="number"
                name="range"
                id="range"
                placeholder={FormValues.RANGE_PLACEHOLDER}
              />
            </label>
            <ErrorMessage name="range" component="span" />
          </div>
          <button type="submit" disabled={!dirty} className="form-btn">
            {FormValues.BUTTON_SUBMIT_FORM_NAME}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SkillsForm;
