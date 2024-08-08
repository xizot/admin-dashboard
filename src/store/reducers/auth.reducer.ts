import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LocalStorageKeys } from '../../constants/localStorageKeys'
import { User } from '../../types/user'


type AuthState = {
  user: null | User
  isAuthenticated: boolean
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
}

const localStorageLoginSuccess = (user: AuthState['user']) => {
  localStorage.setItem(LocalStorageKeys.User, JSON.stringify(user))
  localStorage.setItem(LocalStorageKeys.IsAuthenticated, 'true')
}

const localStorageLogoutSuccess = () => {
  localStorage.removeItem(LocalStorageKeys.User)
  localStorage.removeItem(LocalStorageKeys.IsAuthenticated)
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<AuthState['user']>) {
      state.isAuthenticated = true
      state.user = action.payload
      localStorageLoginSuccess(action.payload)
    },

    logout(state) {
      state.isAuthenticated = false
      state.user = null
      localStorageLogoutSuccess()
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer