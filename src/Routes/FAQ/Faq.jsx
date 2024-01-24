import React from "react";
import styles from "./Faq.module.scss";

import Hero from "../Hero/Hero";

import Header from "../../Components/Header/Header";
import FrequentlyAskedQuestion from "../../Components/FrequentlyAskedQuestions/FrequentlyAskedQuestion";
import Footer from "../../Components/Footer/Footer";
const Faq = () => {
	return (
		<>
			<Header></Header>
			<Hero
				heading="बारम्बार सोधिने प्रश्नहरू"
				description="यी किसानहरू द्वारा प्रायः सोधिने प्रश्नहरू हुन्। यदि तपाईंले आफ्नो प्रश्न फेला पार्नुभएन भने, कृपया हामीलाई सम्पर्क गर्नुहोस्।"
			></Hero>
			<FrequentlyAskedQuestion></FrequentlyAskedQuestion>
			<Footer></Footer>
		</>
	);
};

export default Faq;
