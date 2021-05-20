import styles from "@styles/Card.module.css";

export default function Card({ first }) {
	return (
		<div className={styles.card}>
			<p>{first}</p>{" "}
		</div>
	);
}
