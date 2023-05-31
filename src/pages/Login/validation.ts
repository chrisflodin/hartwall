import * as yup from 'yup'

export type SignUpSchema = yup.SchemaOf<{ password: string }>

export const signUpSchema: SignUpSchema = yup.object().shape({
  password: yup.string().required('password is required').min(4),
})
