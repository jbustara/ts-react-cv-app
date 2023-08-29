import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialValues, validationForm } from "./skillFormUtil";
import { FORM_VALUES } from "../../constants";
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
              {FORM_VALUES.NameLabel}
              <Field
                type="text"
                name="name"
                id="name"
                placeholder={FORM_VALUES.NamePlaceholder}
              />
            </label>
            <ErrorMessage name="name" component="span" />
          </div>
          <div className="form-input">
            <label htmlFor="range">
              {FORM_VALUES.RangeLabel}
              <Field
                type="number"
                name="range"
                id="range"
                placeholder={FORM_VALUES.RangePlaceholder}
              />
            </label>
            <ErrorMessage name="range" component="span" />
          </div>
          <button type="submit" disabled={!dirty} className="form-btn">
            {FORM_VALUES.ButtonSubmitFormName}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SkillsForm;
