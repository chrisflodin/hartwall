import * as yup from 'yup'
import { signUpSchema } from './validation'

export type FormType = 'login' | 'signup'

export type FormConfig = {
  formType: FormType
  title: string
  name: string
  validationSchema: yup.SchemaOf<{ password: string }> | null
}

export const LoginConfig: FormConfig = {
  formType: 'login',
  title: 'Login',
  name: 'login',
  validationSchema: signUpSchema,
}
