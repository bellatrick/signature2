import { createSlice } from "@reduxjs/toolkit";

export const initialState= {
 loginInput:{

 }
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    CHANGE_LOGIN_DETAILS: (state, action) => {
      state.loginInput = action.payload;
    },

  },
});
export default authSlice;
export const { CHANGE_LOGIN_DETAILS } = authSlice.actions;
export const { reducer } = authSlice;
