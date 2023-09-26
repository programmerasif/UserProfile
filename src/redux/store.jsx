import { configureStore } from '@reduxjs/toolkit'
import userReduces from '../redux/features/user/userSlice'
export const store = configureStore({
    reducer: {
      user: userReduces,
      },
})

export default store