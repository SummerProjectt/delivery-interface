import React, { useState, useEffect } from "react";
import MenuItem from "@components/MenuItem";
export default function Menu() {
	const [menuitems, setMenuItems] = useState([
		// { id: "1", name: "Jon" },
		// { id: "2", name: "Jon" },
	]);
	async function getBase() {
		const response = await fetch("/api/sql");
		setMenuItems(await response.json());
		console.log(menuitems);
	}
	useEffect(() => {
		getBase();
	}, []);

	// function Call() {
	// 	getBase();
	// }
	return (
		<div>
			{menuitems == null || menuitems.length < 1
				? null
				: menuitems.map((item) => <p key={item.id}>{item.name}</p>)}
			<MenuItem></MenuItem>
			{/* <button onClick={Call}>Click</button> */}
		</div>
	);
}
