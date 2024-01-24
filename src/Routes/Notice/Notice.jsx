import React from "react";
import styles from "./Notice.module.scss";

import Hero from "../Hero/Hero";

import Header from "../../Components/Header/Header";
import FrequentlyAskedQuestion from "../../Components/FrequentlyAskedQuestions/FrequentlyAskedQuestion";
import Footer from "../../Components/Footer/Footer";
const Notice = () => {
	return (
		<>
			<section className="componentSection">
				<Header></Header>
				<Hero
					heading="सूचना"
					description="हामी चन्दन र रातो चन्दनको व्यावसायिक खेतीका लागि वृक्षारोपणदेखि लिएर कानुनी प्रक्रियासम्म सबै प्राविधिक ज्ञानको जानकारी प्रदान गर्दछौं।"
				></Hero>
				<div className="container">
					<h2 className={`${styles.sectionHeading} sectionHeading`}>
						हाल, कुनै सूचना उपलब्ध छैन
					</h2>
				</div>
				<FrequentlyAskedQuestion></FrequentlyAskedQuestion>
			</section>
			<Footer></Footer>
		</>
	);
};
export default Notice;
