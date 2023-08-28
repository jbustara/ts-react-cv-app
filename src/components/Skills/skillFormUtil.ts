import * as Yup from "yup";

export const validationForm = Yup.object({
  name: Yup.string().required("Skill name is a required field"),
  range: Yup.number()
    .integer()
    .lessThan(101, "Skill range must be less than or equal to 100")
    .moreThan(9, "Skill range must be greater than or equal to 10")
    .required("Skill range is a required field"),
});

export const initialValues = {
  name: "",
  range: "",
};
