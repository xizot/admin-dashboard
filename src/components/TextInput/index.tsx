import { Form, Input } from 'antd'
import { Control, Controller, useController } from 'react-hook-form'
import './_textInput.scss'

type TextInputProps = {
  control: Control<any>,
  name: string,
  label?: string,
}

const TextInput = ({ control, name, label, ...inputProps }: TextInputProps) => {
  const { formState: { errors } } = useController({ name, control })
  return (
    <Form.Item
      label={label}
      validateStatus={errors[name] ? 'error' : undefined}
      help={errors[name]?.message?.toString()}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input {...field} {...inputProps} />}
      />
    </Form.Item>
  )
}

export default TextInput