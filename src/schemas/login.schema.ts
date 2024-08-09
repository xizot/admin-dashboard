import { z } from 'zod'

export const loginSchema = z.object({
  username: z
    .string({ required_error: 'Username is required' })
    .min(3, { message: 'Username must be at least 3 characters long' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(5, { message: 'Password must be at least 5 characters long' }),
  remember: z.boolean().optional(),
})

export type LoginFormValues = z.infer<typeof loginSchema>
