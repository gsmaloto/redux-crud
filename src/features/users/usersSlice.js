import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    username: "johndoe",
    password: "johndoe123",
    email: "johndoe@email.com",
  },
  {
    id: 2,
    username: "johnnybravo",
    password: "johnnybravo123",
    email: "johnnybravo@email.com",
  },
  {
    id: 3,
    username: "cocomartin",
    password: "martin_coco",
    email: "coco@email.com",
  },
  {
    id: 4,
    username: "johnnybravo",
    password: "johnnybravo123",
    email: "johnnybravo@email.com",
  },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      state.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username;
          user.password = action.payload.password;
          user.email = action.payload.email;
        }
      });
    },
  },
});

export const { addUser, updateUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
