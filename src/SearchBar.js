import styles from "@styles/SearchBar.module.css";

export default function SearchBar() {
	return (
		<div className={styles.container}>
			<input className={styles.input} placeholder="Search..."></input>
		</div>
	);
}
