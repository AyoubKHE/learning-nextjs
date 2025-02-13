export default async function TestSuspense() {
	await new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 5000);
	});

	return (
		<div>
			<h1 style={{ background: "green" }}>Suspense</h1>
		</div>
	);
}
