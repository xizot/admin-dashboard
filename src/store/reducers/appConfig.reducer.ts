import { createSlice } from '@reduxjs/toolkit'

type AppState = {
  openSideBar: boolean
}

const initialState: AppState = {
  openSideBar: true,
}

const appConfigSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleSideBar(state) {
      state.openSideBar = !state.openSideBar
    },
  },
})

export const { toggleSideBar } = appConfigSlice.actions
export default appConfigSlice.reducer
