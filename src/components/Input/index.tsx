import styles from './index.module.scss'
import { UseFormRegisterReturn } from 'react-hook-form'

interface InputProps {
  className?: string
  children?: React.ReactNode
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  error?: string
  register?: UseFormRegisterReturn
  type: string
}

function Input(props: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      <input
        onChange={props.onChange}
        className={`${props.className} ${styles.input}`}
        placeholder={props.placeholder}
        type={props.type}
        {...props.register}
        style={{ width: '100%', border: '1px solid black' }}
      >
        {props.children}
      </input>
      {props.error && <div className={styles.error}>{props.error}</div>}
    </div>
  )
}

export default Input
