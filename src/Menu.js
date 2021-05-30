import React, { useState, useEffect } from "react";
import MenuItem from "@components/MenuItem";
export default function Menu() {
	const [menuitems, setMenuItems] = useState(null);
	async function getBase() {
		const response = await fetch("/api/sql");
		const obj = await response.json();
		setMenuItems(obj);
		// console.log(menuitems);
	}
	useEffect(() => {
		getBase();
	}, []);
	return (
		<div>
			{menuitems == null ? null : <p>{menuitems.name}</p>} <MenuItem></MenuItem>
		</div>
	);
}
