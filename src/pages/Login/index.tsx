import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { ToastHelper } from '../../helpers/toast.helper'
import { useAppDispatch } from '../../hooks/redux.hook'
import useHistory from '../../hooks/useHistory.hook'
import { LoginFormValues, loginSchema } from '../../schemas/login.schema'
import { login } from '../../store/reducers/auth.reducer'
import { User } from '../../types/user'
import LoginForm from './LoginForm'
import { Col, Row } from 'antd'
import LoginAds from './LoginAds'
import './_login.scss'

const mockUsers: User[] = [
  {
    username: 'admin',
    password: 'admin',
    email: '',
    name: 'Admin',
    roles: ['admin'],
  },
]

const Login = () => {
  const dispatch = useAppDispatch()
  const { goBack } = useHistory()
  const { control, handleSubmit } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: 'admin',
      password: 'admin',
      remember: false,
    },
  })

  const onSubmit = (data: LoginFormValues) => {
    const { username, password } = data
    const user = mockUsers.find((user) => user.username === username && user.password === password)
    if (!user) {
      ToastHelper.Error('Invalid username or password')
      return
    }

    ToastHelper.Success('Login success')
    dispatch(login(user))
    goBack()
  }

  return (
    <div className="login-page">
      <div className="container">
        <Row justify="center">
          <Col span={16}>
            <Row justify="center">
              <Col sm={24} md={12}>
                <LoginForm control={control} onSubmit={handleSubmit(onSubmit)} />
              </Col>
              <Col sm={0} md={12}>
                <LoginAds />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Login
