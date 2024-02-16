import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
  section: '',
  isEditing: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;

      state.loading = false;
      state.error = false;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateUser: (state, action) => {
     
      state.currentUser.userResponse = {
       ...state.currentUser,
        ...action.payload,
      };
      console.log("in redux after", state.currentUser);
    },
    setEditing: (state, action) => {
      console.log(action);
      state.isEditing = action.payload;
    },
    setSection(state, action) {
      state.section = action.payload;
      console.log(state.isEditing);
    },
  },
});

export const { signInStart, signInSuccess, signInFailure , updateUser ,setSection , setEditing} = userSlice.actions;
export default userSlice.reducer;
