import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/auth.reducer'
import appConfigReducer from './reducers/appConfig.reducer'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    appConfig: appConfigReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
