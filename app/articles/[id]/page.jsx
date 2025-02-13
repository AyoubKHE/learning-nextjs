export default async function ShowArticlePage({ params }) {
	let paramsObj = await params;

	return (
		<div>
			<h1>Show Article Page</h1>
			<h2>{paramsObj.id}</h2>
		</div>
	);
}

export async function generateMetadata({ params }) {
	let paramsObj = await params;
	
	return {
		title: `Article ${paramsObj.id}`,
	};
}