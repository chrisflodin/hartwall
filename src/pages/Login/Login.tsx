import { FormConfig } from './config'
import { UserForm } from './components/UserForm'
import styles from './Login.module.scss'
import { FuturiceLogo } from '../../components/SVGs/Logos'

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
        <div className={styles.logo_wrapper}>
          <FuturiceLogo />
        </div>
      </div>
    </div>
  )
}

export default Login
