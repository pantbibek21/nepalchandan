import React from "react";
import styles from "./Nursery.module.scss";
import Hero from "../Hero/Hero";
import Plant from "../../Components/Plant/Plant";

import Header from "../../Components/Header/Header";
import FrequentlyAskedQuestion from "../../Components/FrequentlyAskedQuestions/FrequentlyAskedQuestion";
import Footer from "../../Components/Footer/Footer";

const Nursery = () => {
	return (
		<>
			<section className="componentSection">
				<Header></Header>
				<Hero
					heading="हाम्रो नर्सरी"
					description="हामीसँग गुणस्तरीय चन्दन र रातो चन्दनको बिरुवासहितको आधुनिक नर्सरी छ।"
				></Hero>
				<div className={`${styles.container} container`}>
					<div className={styles.imgWrapper}>
						<img
							src="https://scontent.fktm16-1.fna.fbcdn.net/v/t1.6435-9/202278409_10218838977105954_5318493969291852865_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3ba11c&_nc_ohc=JSW22IdoGZsAX_DbhTj&_nc_ht=scontent.fktm16-1.fna&oh=00_AfBZ-ZCe8hp70yuhVwGvxKy_L6fAV5s1dQvb0uYN2RAH6g&oe=65D45A91"
							alt=""
						/>
					</div>
					<p>
						स्थान: भासी - ०२, भीमदत्त नगरपालिका (महेन्द्रनगर),
						कञ्चनपुर, सुदूरपश्चिम प्रदेश
					</p>

					<p>
						श्रीखण्ड र रक्तचन्दनको व्यावसायिक खेति, कानूनी व्यवस्था
						र बजार अबस्था समेतमा निशुल्क समग्र जानकारी चाहिएमा र यी
						चन्दनमा आधारित नयाँ कृषि उद्यमी बन्न दृढ इच्छुक व्यक्ति
						भएमा फोन सम्पर्क गर्न अनुरोध गरिन्छ /<br /> सम्पर्क फोन.
						९८४८७२४०३० महेन्द्रनगर, कंचनपुर /
					</p>

					<p>हाम्रो नर्सरीमा निम्न बिरुवाहरू छन्।</p>
				</div>
				<Plant></Plant>
				<FrequentlyAskedQuestion></FrequentlyAskedQuestion>
			</section>
			<Footer></Footer>
		</>
	);
};

export default Nursery;
