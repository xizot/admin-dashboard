import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/auth.reducer'
import themeReducer from './reducers/theme.reducer'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch