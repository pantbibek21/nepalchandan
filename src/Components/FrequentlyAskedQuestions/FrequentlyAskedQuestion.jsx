import React, { useState } from "react";
import styles from "./FrequentlyAskedQuestion.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";

const FrequentlyAskedQuestion = () => {
	const [activePara, setActivePara] = useState(false);

	function clickHandler(e) {
		setActivePara(e);
	}

	return (
		<>
			<section className={`${styles.faqSection} componentSection`}>
				<div className={`${styles.container} container`}>
					<h2 className={`${styles.sectionHeading} sectionHeading`}>
						बारम्बार सोधिने प्रश्नहरू
					</h2>
					<p
						className={`${styles.sectionSubHeading} sectionSubHeading`}
					>
						यी जिज्ञासु मानिसहरू द्वारा प्रायः सोधिने प्रश्नहरू
						हुन्!
					</p>

					<div className={styles.faqWrapper}>
						<div
							className={styles.faq}
							onClick={() => {
								clickHandler("activePara-1");
							}}
						>
							<h3 className={styles.question}>
								1. चन्दन र रातो चन्दन बीचको मुख्य भिन्नता के हो?
							</h3>
							<p
								className={`${styles.answer} ${
									activePara == "activePara-1"
										? styles.active
										: ""
								}`}
							>
								उत्तर: चन्दन (सेतो) यसको सुगन्धित हार्टवुडका
								लागि चिनिन्छ, जसको अत्तरमा मूल्य हुन्छ, जबकि
								रातो चन्दन (Pterocarpus santalinus) को विशिष्ट
								रातो रंग हुन्छ र मुख्य रूपमा परम्परागत औषधि र
								वुडक्राफ्टमा प्रयोग गरिन्छ।
							</p>
							<div className={styles.icon}>
								<MdKeyboardArrowDown
									style={{ fontSize: "24px", color: "white" }}
								/>
							</div>
						</div>
						<div
							className={styles.faq}
							onClick={() => {
								clickHandler("activePara-2");
							}}
						>
							<h3 className={styles.question}>
								2. चन्दन र रातो चन्दनको बिरुवा परिपक्व हुन कति
								समय लाग्छ?
							</h3>
							<p
								className={`${styles.answer} ${
									activePara == "activePara-2"
										? styles.active
										: ""
								}`}
							>
								उत्तर: चन्दन सामान्यतया 15-20 वर्षमा परिपक्व
								हुन्छ, जबकि रातो चन्दनको तीव्र वृद्धि चक्र
								हुन्छ, लगभग 10-15 वर्षमा परिपक्वतामा पुग्छ।
							</p>
							<div className={styles.icon}>
								<MdKeyboardArrowDown
									style={{ fontSize: "24px", color: "white" }}
								/>
							</div>
						</div>
						<div
							className={styles.faq}
							onClick={() => {
								clickHandler("activePara-3");
							}}
						>
							<h3 className={styles.question}>
								3. चन्दन र रातो चन्दन नर्सरीहरूको लागि आदर्श
								बढ्दो अवस्थाहरू के हुन्?
							</h3>
							<p
								className={`${styles.answer} ${
									activePara == "activePara-3"
										? styles.active
										: ""
								}`}
							>
								उत्तर: दुबै प्रजातिहरू 6.0 देखि 7.5 सम्मको pH
								दायराको राम्रो निकास भएको, बलौटे-दोमट माटोमा
								फस्टाउँछन्, जसलाई न्यानो तापक्रम, पर्याप्त
								सूर्यको प्रकाश र प्रारम्भिक वर्षहरूमा चिसोबाट
								सुरक्षा चाहिन्छ।
							</p>
							<div className={styles.icon}>
								<MdKeyboardArrowDown
									style={{ fontSize: "24px", color: "white" }}
								/>
							</div>
						</div>
						<div
							className={styles.faq}
							onClick={() => {
								clickHandler("activePara-4");
							}}
						>
							<h3 className={styles.question}>
								4. के चन्दन र रातो चन्दन एउटै बिरुवामा सँगै
								उब्जाउन सकिन्छ?
							</h3>
							<p
								className={`${styles.answer} ${
									activePara == "activePara-4"
										? styles.active
										: ""
								}`}
							>
								उत्तर: सम्भव भए तापनि, राम्रो व्यवस्थापन र
								इष्टतम उपजको लागि अनुमति दिँदै, तिनीहरूको वृद्धि
								आवश्यकताहरू र फसल काट्ने समय फरक हुन सक्ने
								हुनाले तिनीहरूलाई अलग गर्न सल्लाह दिइन्छ।
							</p>
							<div className={styles.icon}>
								<MdKeyboardArrowDown
									style={{ fontSize: "24px", color: "white" }}
								/>
							</div>
						</div>
						<div
							className={styles.faq}
							onClick={() => {
								clickHandler("activePara-5");
							}}
						>
							<h3 className={styles.question}>
								5. चन्दन र रातो चन्दनको प्राथमिक उपयोग के हो?
							</h3>
							<p
								className={`${styles.answer} ${
									activePara == "activePara-5"
										? styles.active
										: ""
								}`}
							>
								उत्तर: चन्दन अत्तर, सौन्दर्य प्रसाधन र धार्मिक
								समारोहहरूमा प्रयोग हुने सुगन्धित तेलको लागि
								प्रख्यात छ, जबकि रातो चन्दनलाई परम्परागत औषधि,
								वुडक्राफ्ट र प्राकृतिक रङको रूपमा प्रयोग गरिन्छ।
							</p>
							<div className={styles.icon}>
								<MdKeyboardArrowDown
									style={{ fontSize: "24px", color: "white" }}
								/>
							</div>
						</div>
						<div
							className={styles.faq}
							onClick={() => {
								clickHandler("activePara-6");
							}}
						>
							<h3 className={styles.question}>
								6. चन्दन र रातो चन्दन बालीलाई असर गर्ने कुनै कीट
								वा रोगहरू छन्?
							</h3>
							<p
								className={`${styles.answer} ${
									activePara == "activePara-6"
										? styles.active
										: ""
								}`}
							>
								उत्तर: सामान्य कीराहरूमा स्केल कीराहरू र
								फङ्गाहरू समावेश छन्, तर उचित खेती गर्ने
								अभ्यासहरू, कीट नियन्त्रण उपायहरू, र नियमित
								अनुगमनले स्वस्थ वृक्षारोपणका लागि यी
								चुनौतीहरूलाई कम गर्न मद्दत गर्न सक्छ।
							</p>
							<div className={styles.icon}>
								<MdKeyboardArrowDown
									style={{ fontSize: "24px", color: "white" }}
								/>
							</div>
						</div>
						<div
							className={styles.faq}
							onClick={() => {
								clickHandler("activePara-7");
							}}
						>
							<h3 className={styles.question}>
								8. के त्यहाँ चन्दन र रातो चन्दन खेती गर्न कुनै
								सरकारी नियम वा अनुमति आवश्यक छ?
							</h3>
							<p
								className={`${styles.answer} ${
									activePara == "activePara-7"
										? styles.active
										: ""
								}`}
							>
								उत्तर: चन्दन खेती गर्न कुनै कानुनी प्रक्रियाको
								आवश्यकता पर्दैन भने रातो चन्दनको खेतीलाई पछि
								बिक्री गर्दा मद्दत गर्न जिल्ला वन डिभिजनमा दर्ता
								आवश्यक पर्दछ। हामी तपाईंलाई आवश्यक कुनै पनि
								कुराको लागि मार्गदर्शन प्रदान गर्दछौं। थपको लागि
								हामीलाई सम्पर्क गर्नुहोस्।
							</p>
							<div className={styles.icon}>
								<MdKeyboardArrowDown
									style={{ fontSize: "24px", color: "white" }}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default FrequentlyAskedQuestion;
