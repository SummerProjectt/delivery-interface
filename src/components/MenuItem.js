import styles from "@styles/MenuItem.module.css";
export default function MenuItem({ id, imgsrc, name, price }) {
	return (
		<div className={styles.container}>
			<div className={styles.img}></div>
			<div className={styles.text}>
				<p>Chipotle nachos</p>
				<p>Price</p>
			</div>
		</div>
	);
}
