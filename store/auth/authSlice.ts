import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./auth";

const initialState: InitialState = {
   id: 1,
   name: "",
   surname: "",
   email: "",
   phone_number: 0,
   verified: false,
   avatar: "",
   brith_date: new Date(),
   gender: false,
   authority: "USER",
   created_at: "",
   updated_at: "",
};

export const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      login: (state, action) => {},
   },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
