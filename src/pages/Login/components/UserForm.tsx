import { yupResolver } from '@hookform/resolvers/yup'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { FormConfig } from '../config'
import { signUpSchema } from '../validation'
import { FormError } from './FormError'
import style from './UserForm.module.scss'
import Input from '../../../components/Input'
import { Button } from '../../../components/Button'
import HeroContext from '../../../context/HeroContext'
import { IHeroContext } from '../../../types/HeroContext'

const { formStyle, buttonStyle } = style

type UserFormProps = {
  config: FormConfig
}

export const UserForm = ({ config }: UserFormProps) => {
  const { name, validationSchema, title, formType } = config
  const validation = validationSchema ? { resolver: yupResolver(signUpSchema) } : undefined
  const { handleLogin }: IHeroContext = useContext(HeroContext)

  const {
    handleSubmit,
    register,
    formState: { errors: formErrors },
    reset: resetForm,
    getValues,
  } = useForm<{ password: string }>(validation)

  const location = useLocation()

  const submitHandler = async () => {
    handleLogin(getValues('password'))
  }

  useEffect(() => {
    resetForm()
  }, [location])

  return (
    <form className={formStyle} name={title} onSubmit={handleSubmit(() => submitHandler())}>
      <Input register={register('password')} placeholder="password" error={formErrors.password?.message} type="text" />
      <Button type="submit">Login</Button>
      <FormError error={formErrors.password?.message}></FormError>
    </form>
  )
}
