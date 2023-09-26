import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'userSlice',
  initialState: { users: [] },
  reducers: {
    fetchUser: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { fetchUser } = userSlice.actions;
export default userSlice.reducer;