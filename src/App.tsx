import "./App.css";
import PostForm from "./features/posts/PostForm";
import Posts from "./features/posts/PostLists";

function App() {
	return (
		<>
			<p>HELLO WELCOME TO THE BLOG</p>
            <Posts />
            <PostForm />
		</>
	);
}

export default App;
