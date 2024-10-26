import { createSlice } from "@reduxjs/toolkit";

interface Users {
	users: {
		id: number;
		name: string;
		userType: string;
	}[];
}

const initialState: Users = {
	users: [
		{ id: 1, name: "Akinola Ayobami", userType: "Admin" },
		{ id: 2, name: "Ifeloluwa", userType: "Customer" },
	],
};

export const userSlice = createSlice({
	name: "User",
	initialState,
	reducers: {},
});

export const selectAllUsers = (state: { users: Users }) => state.users;

export default userSlice.reducer;
