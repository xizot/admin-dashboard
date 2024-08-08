import { z } from 'zod'

export const loginSchema = z.object({
  username: z.string().min(3, { message: 'Username is required' }),
  password: z.string().min(5, { message: 'Password must be at least 6 characters long' }),
  remember: z.boolean().optional(),
})

export type LoginFormValues = z.infer<typeof loginSchema>
