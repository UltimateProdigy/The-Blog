import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

interface Post {
	id: string;
	title: string;
	content: string;
}

const initialState: Post[] = [
	{
		id: "1",
		title: "The Message of The Cross",
		content: "Receive Christ as your lord and personal Savior",
	},
	{
		id: "2",
		title: "Go to the Gym",
		content: "Do not be lazy, it's time for the gym",
	},
];

const postSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		addPost: {
			reducer(state, action: PayloadAction<Post>) {
				state.push(action.payload);
			},
			prepare(title: string, content: string) {
				return {
					payload: {
						id: nanoid(),
						title,
						content,
					},
				};
			},
		},
	},
});

export const { addPost } = postSlice.actions;
export const selectAllPosts = (state: { posts: Post[] }) => state.posts;
export default postSlice.reducer;
