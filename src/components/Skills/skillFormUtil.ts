import * as Yup from "yup";
import { FORM_VALUES } from "../../constants";

export const validationForm = Yup.object({
  name: Yup.string().required(FORM_VALUES.MessageErrorNameRequiered),
  range: Yup.number()
    .integer()
    .lessThan(FORM_VALUES.RangeLimitUp + 1, FORM_VALUES.MessageErrorLimitUp)
    .moreThan(FORM_VALUES.RangeLimitLow - 1, FORM_VALUES.MessageErrorLimitLow)
    .required(FORM_VALUES.MessageErrorRangeRequiered),
});

export const initialValues = {
  name: "",
  range: "",
};
