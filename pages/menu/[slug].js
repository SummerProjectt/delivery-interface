export default function Item({ data }) {
	console.log(data);
	return (
		<div>
			<p>{data.item.id}</p>
			<p> {data.item.name}</p>
			<p> {data.item.price}</p>
			<img src={data.item.image}></img>
		</div>
	);
}

export async function getStaticPaths() {
	// const response = await fetch("http://localhost:3000/api/sql");
	// const obj = await response.json();
	// let paths = [];
	// obj.map((ob, index) => (paths[index] = ob.name));
	const paths = [
		{ params: { slug: "Hotdog" } },
		{ params: { slug: "Chipotle nachos" } },
	];
	return {
		paths,
		fallback: true,
	};
}

export async function getStaticProps({ params }) {
	const { slug } = params;
	const response = await fetch("http://localhost:3000/api/sql");
	const obj = await response.json();
	let item;
	obj.map((ob) => {
		if (ob.name === slug) {
			item = ob;
		}
	});

	return { props: { data: { item } } };
}
