import React, { useState, useEffect } from "react";
import MenuItem from "@components/MenuItem";
export default function Menu() {
	const [menuitems, setMenuItems] = useState([]);
	async function getBase() {
		const response = await fetch("/api/sql");
		const obj = await response.json();
		console.log(obj);
		setMenuItems(obj);
	}
	useEffect(() => {
		getBase();
		if (menuitems == []) {
			getBase();
		}
	}, []);

	return (
		<div>
			{/* 			
			{menuitems == null
				? null
				: menuitems.map((item) => <p key={item.id}>{item.name}</p>)} */}

			{/* { id, imgsrc, name, price } */}
			{menuitems == null
				? null
				: menuitems.map((item) => (
						<div key={item.id}>
							<MenuItem
								name={item.name}
								imgsrc={item.image}
								price={item.price}
							></MenuItem>
						</div>
				  ))}

			{/* <button onClick={Call}>Click</button> */}
		</div>
	);
}
