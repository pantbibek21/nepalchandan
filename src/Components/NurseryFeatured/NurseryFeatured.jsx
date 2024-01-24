import React from "react";
import styles from "./NurseryFeatured.module.scss";

const NurseryFeatured = () => {
	return (
		<>
			<section className={`${styles.nurserySection} componentSection`}>
				<div className={`${styles.container} container`}>
					<h2 className={`${styles.sectionHeading} sectionHeading`}>
						नेपालमा पहिलो पटक चन्दन र रातो चन्दनको नर्सरी
					</h2>
					<p
						className={`${styles.sectionSubHeading} sectionSubHeading`}
					>
						हामीले विगत आठ वर्षदेखि यी अतिऔषधिका बिरुवा उपलब्ध
						गराउँदै आएका छौँ ।
					</p>

					<div className={styles.row}>
						<div className={styles.imageWrapper}>
							<img
								src="https://previews.123rf.com/images/torjrtrx/torjrtrx1701/torjrtrx170100124/70656955-arabica-coffee-tree-nursery-plantation.jpg"
								alt="Nursery Picture"
							/>
						</div>
						<div className={styles.nurseryStats}>
							<h3>उपलब्ध बिरुवा र संख्या</h3>
							<p>चन्दन: 50000</p>
							<p>रातो चन्दन: 3000</p>
							<p>अग्रवुड: 2000</p>

							<button type="button">बिरुवाहरू किन्नुहोस्</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default NurseryFeatured;
