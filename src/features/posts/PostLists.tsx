import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

export default function Posts() {
	const posts = useSelector(selectAllPosts);
    console.log(posts)

	return (
		<div>
			<div>
				<p>Posts</p>
			</div>

			{posts.map((post: any) => (
				<div
					style={{
						border: "1px solid gray",
						borderRadius: "10px",
						width: "30%",
						padding: "10px",
					}}
				>
					<p
						style={{
							color: "green",
							fontWeight: "bold",
							fontSize: "20px",
						}}
					>
						{post.title}
					</p>
					<p>{post.content.substring(0, 20)}...</p>
				</div>
			))}
		</div>
	);
}
