import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userInfo",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      console.log("addUser called with payload : ", action.payload);
      return action.payload;
    },
    removeUser: (state,action) => {
      return null;
    }
  }
});


export const {addUser, removeUser} = userSlice.actions;
export const userSliceReducer = userSlice.reducer;