import styles from "@styles/MenuItem.module.css";
import Link from "next/link";

export default function MenuItem({ id, imgsrc, name, price }) {
	return (
		<div className={styles.container}>
			<div
				className={styles.img}
				style={{ backgroundImage: "url(" + imgsrc + ")" }}
			></div>
			<div className={styles.text}>
				<Link href="/menu/[slug]" as={"/menu/" + name}>
					<a>
						<p>{name}</p>
					</a>
				</Link>

				<p>{price}</p>
			</div>
		</div>
	);
}
