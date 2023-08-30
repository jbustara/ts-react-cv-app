import * as Yup from "yup";
import { FormValues } from "../../constants";

export const validationForm = Yup.object({
  name: Yup.string().required(FormValues.MESSAGE_ERROR_NAME_REQUIRED),
  range: Yup.number()
    .integer()
    .lessThan(FormValues.RANGE_LIMIT_UP + 1, FormValues.MESSAGE_ERROR_LIMIT_UP)
    .moreThan(
      FormValues.RANGE_LIMIT_LOW - 1,
      FormValues.MESSAGE_ERROR_LIMIT_LOW
    )
    .required(FormValues.MESSAGE_ERROR_RANGE_REQUIRED),
});

export const initialValues = {
  name: "",
  range: "",
};
