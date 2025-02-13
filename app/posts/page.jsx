import Post from "../components/Post";
import Link from "next/link";

export default async function PostsPage() {
	let response = await fetch("https://jsonplaceholder.typicode.com/posts");
	let posts = await response.json();

	return (
		<div>
			<h1>Posts Page</h1>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				{posts.map((post) => {
					return (
						<Link
							style={{ width: "70%" }}
							href={`/posts/${post.id}`}
							key={post.id}
						>
							<Post post={post} width="100%" />
						</Link>
					);
				})}
			</div>
		</div>
	);
}
