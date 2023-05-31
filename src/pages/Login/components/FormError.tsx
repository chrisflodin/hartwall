import { ServerError as Error } from '../../../types/errors'
import style from './FormError.module.scss'

const { errorStyle } = style

type FormFieldProps = {
  error: string | undefined
}

export const FormError = ({ error }: FormFieldProps) => {
  if (error)
    return (
      <p id="FormError" className={errorStyle}>
        {error}
      </p>
    )

  return <></>
}
