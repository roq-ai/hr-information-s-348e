import * as yup from 'yup';

export const documentValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  employee_id: yup.string().nullable().required(),
});
