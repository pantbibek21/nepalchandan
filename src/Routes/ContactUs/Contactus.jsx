import React from "react";
import styles from "./Contactus.module.scss";

import Hero from "../Hero/Hero";

import Header from "../../Components/Header/Header";
import Contact from "../../Components/Contact/Contact";
import FrequentlyAskedQuestion from "../../Components/FrequentlyAskedQuestions/FrequentlyAskedQuestion";
import Footer from "../../Components/Footer/Footer";

import { IoLogoFacebook } from "react-icons/io";

const Contactus = () => {
	return (
		<>
			<section className="componentSection">
				<Header></Header>
				<Hero
					heading="सम्पर्क गर्नुहोस"
					description="तपाईको घरको बगैंचामा केही चन्दनका बिरुवा रोप्ने वा ठूलो मात्रामा व्यावसायिक खेती गर्ने सम्बन्धमा कुनै जिज्ञासा छ भने, कृपया उच्च गुणस्तरको चन्दन र रातो चन्दनको बिरुवा खरिद गर्नका साथै प्राविधिक सल्लाहको लागि हामीलाई सम्पर्क गर्नुहोस्।"
				></Hero>
				<div className={`${styles.container} container`}>
					<div className={styles.card}>
						<div className={styles.detail}>
							<div className={styles.row}>
								<span className={styles.key}>नाम</span>{" "}
								<span className={styles.value}>
									श्री विजयराज पन्त (संस्थापक, नेपाल चन्दन
									प्रालि)
								</span>
							</div>
							<div className={styles.row}>
								<span className={styles.key}>फोन</span>{" "}
								<span className={styles.value}>
									9848724030 (९८४८७२४०३०)
								</span>
							</div>
							<div className={styles.row}>
								<span className={styles.key}>इमेल</span>{" "}
								<span className={styles.value}>
									nepalchandan2014@gmail.com
								</span>
							</div>
							<div className={styles.row}>
								<span className={styles.key}>
									फेसबुक / Facebook
								</span>{" "}
								<span className={styles.value}>
									<a
										target="_blank"
										href="https://www.facebook.com/bijay.pant1"
									>
										<IoLogoFacebook
											style={{
												fontSize: "32px",
												marginBottom: "-8px",
											}}
										/>{" "}
										Bijay Raj Pant
									</a>
								</span>
							</div>
							<div className={styles.row}>
								<span className={styles.key}>ठेगाना</span>{" "}
								<span className={styles.value}>
									भासी - ०२, भीमदत्त नगरपालिका (महेन्द्रनगर),
									कञ्चनपुर, सुदूरपश्चिम प्रदेश
								</span>
							</div>
						</div>
						<div className={styles.imgWrapper}>
							<img
								src="https://assets-cdn-api.kantipurdaily.com/thumb.php?src=https://assets-cdn.kantipurdaily.com/uploads/source/news/kantipur/2017/money-finance/farming-18082017081126-1000x0.jpg&w=1000&h=0"
								alt=""
							/>
						</div>
					</div>
				</div>
				<Contact></Contact>
				<FrequentlyAskedQuestion></FrequentlyAskedQuestion>
			</section>
			<Footer></Footer>
		</>
	);
};
export default Contactus;
