import { Button, Checkbox, Form } from 'antd'
import { Control, Controller } from 'react-hook-form'
import TextInput from '../../../components/TextInput'
import './_loginForm.scss'

type LoginFormProps = {
  control: Control<any>,
  onSubmit: (data: any) => void
}

const LoginForm = ({ control, onSubmit }: LoginFormProps) => {
  return (
    <Form
      name="login"
      onFinish={onSubmit}
      className='login-form card'>
      <TextInput control={control} name='username' />
      <TextInput control={control} name='password' />
      <Form.Item name="remember" valuePropName="checked">
        <Controller
          name="remember"
          control={control}
          render={({ field: { value, ...fieldProps } }) => (
            <Checkbox {...fieldProps} checked={value}>
              Remember me
            </Checkbox>
          )}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm