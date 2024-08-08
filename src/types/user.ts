export type UserBase = {
  name: string
  email: string
  roles: string[]
}

export type User = UserBase & {
  username?: string
  password?: string
}


