import React from "react";
import styles from "./Hero.module.scss";

const Hero = ({ heading, description }) => {
	return (
		<>
			<section className={`${styles.heroSection} componentSection`}>
				<div className={`${styles.heroContainer} container`}>
					<div className={styles.content}>
						<h2> {`${heading}`}</h2>
						<p> {`${description}`}</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
