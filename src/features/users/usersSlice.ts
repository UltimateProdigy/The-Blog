import { createSlice } from "@reduxjs/toolkit";

interface Users {
	users: {
		id: number;
		name: string;
		userType: string;
	}[];
}

const initialState = [
	{ id: 1, name: "Akinola Ayobami", userType: "Admin" },
	{ id: 2, name: "Ifeloluwa", userType: "Customer" },
];

export const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
});

export const selectAllUsers = (state: Users) => state.users;

export default userSlice.reducer;
