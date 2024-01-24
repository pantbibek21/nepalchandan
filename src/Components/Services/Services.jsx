import React from "react";
import styles from "./Services.module.scss";

const Services = () => {
	return (
		<>
			<section
				className={`${styles.serviceSection} componentSection`}
				id="serviceSectionId"
			>
				<div className={`${styles.container} container`}>
					<h2 className={`${styles.sectionHeading} sectionHeading`}>
						हाम्रा सेवाहरू
					</h2>
					<p
						className={`${styles.sectionSubHeading} sectionSubHeading`}
					>
						हामी चन्दन र रातो चन्दनको बिरुवा व्यवसायिक खेती,
						वृक्षारोपणको लागि प्राविधिक सहयोग, र नियमित मार्गदर्शन
						प्रदान गर्दछौं।
					</p>
					<div className={styles.servicesContainer}>
						<div className={styles.service}>
							<div className={styles.imgWrapper}>
								<img
									src="https://previews.123rf.com/images/torjrtrx/torjrtrx1701/torjrtrx170100124/70656955-arabica-coffee-tree-nursery-plantation.jpg"
									alt=""
								/>
							</div>
							<h3 className={styles.cardHeading}>
								चन्दनको बिरुवा
							</h3>
							<p className={styles.cardDescription}>
								हामी व्यावसायिक खेतीका लागि उच्च गुणस्तरको
								चन्दनका बिरुवाहरू प्रस्ताव गर्नमा विशेषज्ञ छौं।
								हाम्रो छनोटमा चन्दन र रातो चन्दनका दुवै
								प्रजातिहरू समावेश छन्, तपाईंको विशेष आवश्यकताहरू
								पूरा गर्न विविध दायरा सुनिश्चित गर्दै।
							</p>
						</div>
						<div className={styles.service}>
							<div className={styles.imgWrapper}>
								<img
									src="https://previews.123rf.com/images/torjrtrx/torjrtrx1701/torjrtrx170100124/70656955-arabica-coffee-tree-nursery-plantation.jpg"
									alt=""
								/>
							</div>
							<h3 className={styles.cardHeading}>
								प्राविधिक समर्थन
							</h3>
							<p className={styles.cardDescription}>
								हाम्रो प्रतिबद्धता बिरुवाहरू उपलब्ध गराउनु भन्दा
								बाहिर फैलिएको छ। हामी वृक्षारोपण आवश्यकताहरु
								अनुरूप व्यापक प्राविधिक समर्थन प्रदान गर्दछौं।
								चाहे तपाईं अनुभवी किसान होस् वा चन्दन खेतीमा
								नयाँ आगमन, हामी तपाईंलाई प्रक्रियाको प्रत्येक
								चरणमा मार्गदर्शन गर्न यहाँ छौं।
							</p>
						</div>
						<div className={styles.service}>
							<div className={styles.imgWrapper}>
								<img
									src="https://previews.123rf.com/images/torjrtrx/torjrtrx1701/torjrtrx170100124/70656955-arabica-coffee-tree-nursery-plantation.jpg"
									alt=""
								/>
							</div>
							<h3 className={styles.cardHeading}>
								नियमित मार्गदर्शन
							</h3>
							<p className={styles.cardDescription}>
								हाम्रो सेवाहरूको भागको रूपमा, हामी तपाईंको चन्दन
								वृक्षारोपणको सफलता सुनिश्चित गर्न निरन्तर सहयोग
								र नियमित मार्गदर्शन प्रदान गर्दछौं। हामी
								तपाईंलाई चुनौतिहरू नेभिगेट गर्न, वृद्धि
								अवस्थाहरू अनुकूलन गर्न र तपाईंको चन्दन बालीको
								उत्पादनलाई अधिकतम बनाउन मद्दत गर्न समर्पित छौं।
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;
