export default function Post({ post, width }) {
	return (
		<div
			style={{
				width: width,
				background: "white",
				padding: "10px",
				borderRadius: "10px",
				color: "black",
				marginTop: "20px",
			}}
		>
			<h1>{post.title}</h1>
			<p>{post.body}</p>
		</div>
	);
}
