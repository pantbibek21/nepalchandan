import React from "react";
import styles from "./Buy.module.scss";

import Hero from "../Hero/Hero";
import Contact from "../../Components/Contact/Contact";
import Header from "../../Components/Header/Header";
import FrequentlyAskedQuestion from "../../Components/FrequentlyAskedQuestions/FrequentlyAskedQuestion";
import Footer from "../../Components/Footer/Footer";

import Plant from "../../Components/Plant/Plant";

const Buy = () => {
	return (
		<>
			<section className="componentSection">
				<Header></Header>
				<Hero
					heading="बिरुवा किन्नुहोस्"
					description="हामीसँग गुणस्तरीय चन्दन र रातो चन्दनको बिरुवासहितको आधुनिक नर्सरी छ।"
				></Hero>
				<Plant></Plant>
				<Contact></Contact>
				<FrequentlyAskedQuestion></FrequentlyAskedQuestion>
			</section>
			<Footer></Footer>
		</>
	);
};

export default Buy;
