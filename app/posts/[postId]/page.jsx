import TestSuspense from "@/app/components/TestSuspense";
import Post from "../../components/Post";
import { Suspense } from "react";

export default async function PostDetailsPage({ params }) {
	const postId = (await params).postId;

	// await new Promise((resolve, reject) => {
	// 	setTimeout(() => {
	// 		resolve();
	// 	}, 10000);
	// });

	let response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`
	);
	let post = await response.json();

	let loadingJSX = (
		<div>
			<h1>Loading... !!!</h1>
		</div>
	);

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<Post post={post} width="70%" />
			<Suspense fallback={loadingJSX}>
				<TestSuspense />
			</Suspense>
		</div>
	);
}
