import React from "react";
import styles from "./Map.module.scss";

const Map = () => {
	return (
		<>
			<section className={styles.mapSection}>
				<div className={styles.container}>
					<h2 className={styles.sectionHeading}>हामी यहाँ छौं</h2>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13962.916880680179!2d80.2019054!3d28.9657549!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1ab18f480267f%3A0x777ecece0e49a5e6!2sSrikhanda%20Chandan%20Nursery%20(Nepal%20Chandan%20Pvt%20Ltd)!5e0!3m2!1sne!2snp!4v1705670224740!5m2!1sne!2snp"
						width="1140"
						height="300"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</section>
		</>
	);
};

export default Map;
