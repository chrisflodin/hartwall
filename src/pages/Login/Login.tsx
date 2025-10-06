import { UserForm } from './components/UserForm'
import { FormConfig } from './config'
import styles from './Login.module.scss'

type LoginProps = {
  config: FormConfig
}

const { container, pageStyle } = styles

const Login = ({ config }: LoginProps) => {
  const { title } = config

  return (
    <div className={pageStyle}>
      <div className={container}>
        <h1>Hartwall</h1>
        <h3>{title}</h3>
        <UserForm config={config}></UserForm>
      </div>
    </div>
  )
}

export default Login
