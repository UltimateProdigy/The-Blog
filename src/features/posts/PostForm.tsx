import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./postsSlice";

export default function PostForm() {
	const dispatch = useDispatch();
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const onSubmit = () => {
		if (title && content) {
			dispatch(addPost(title, content));
			setTitle("");
			setContent("");
		}
	};

	return (
		<section>
			<form>
				<label>Title</label>
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>Content</label>
				<textarea
					name=""
					id=""
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
				<button onSubmit={onSubmit}>
					Submit
				</button>
			</form>
		</section>
	);
}
