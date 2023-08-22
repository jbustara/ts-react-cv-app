import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialValues, validationForm } from "./skillFormUtil";
import { PLACEHOLDER_FORM_NAME, PLACEHOLDER_FORM_RANGE } from "../constants";
import { useAppDispatch } from "../app/hooks";
import { postSkills } from "../features/skills/skillsSlice";

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
        resetForm();
      }}
    >
      {({ dirty, errors }) => (
        <Form className="form">
          <div className="form-input">
            <label htmlFor="name">
              Skill name
              <Field
                type="text"
                name="name"
                id="name"
                placeholder={PLACEHOLDER_FORM_NAME}
              />
            </label>
            <ErrorMessage name="name" component="span" />
          </div>
          <div className="form-input">
            <label htmlFor="range">
              Skill range
              <Field
                type="number"
                name="range"
                id="range"
                placeholder={PLACEHOLDER_FORM_RANGE}
              />
            </label>
            <ErrorMessage name="range" component="span" />
          </div>
          <button type="submit" disabled={!dirty} className="form-btn">
            Add skill
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SkillsForm;
