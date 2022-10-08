import * as yup from 'yup';
const validateSchema = yup.object().shape({
          name: yup.string().required(),
          age: yup.number().required().min(3).max(18),
          email: yup.string().email(),
          isBoolean: yup.boolean()
});
export default validateSchema;