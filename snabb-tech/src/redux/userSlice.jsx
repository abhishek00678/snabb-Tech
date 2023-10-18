import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("user")) || [];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("user", JSON.stringify(state));
    },
    searchUsers: (state, action) => {
      const { searchTerm, gender } = action.payload;
      // Filter users by name and gender
      if (searchTerm || gender) {
        return state.filter(
          (user) =>
            (!searchTerm ||
              user.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (!gender || user.gender.toLowerCase() === gender.toLowerCase())
        );
      }
      // If both search term and gender are empty, return the original state
      return JSON.parse(localStorage.getItem("user")) || [];
    },
  },
});

export const { addUser, searchUsers } = userSlice.actions;

export const selectUsers = (state) => state.user;

export default userSlice.reducer;
