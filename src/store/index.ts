import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/auth.reducer'
import themeReducer from './reducers/theme.reducer'
import appConfigReducer from './reducers/appConfig.reducer'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    appConfig: appConfigReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
