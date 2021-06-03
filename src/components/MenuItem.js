import styles from "@styles/MenuItem.module.css";
export default function MenuItem({ id, imgsrc, name, price }) {
	return (
		<div className={styles.container}>
			<div
				className={styles.img}
				style={{ backgroundImage: "url(" + imgsrc + ")" }}
			></div>
			<div className={styles.text}>
				<p>{name}</p>
				<p>{price}</p>
			</div>
		</div>
	);
}
