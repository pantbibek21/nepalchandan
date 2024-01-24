import React from "react";
import styles from "./Plant.module.scss";
import { Link } from "react-router-dom";

const Plant = () => {
	return (
		<>
			<section className="componentSection">
				<div className={`${styles.container} container`}>
					<div className={styles.card}>
						<div className={styles.detail}>
							<div className={styles.row}>
								<span className={styles.key}>बिरुवाको नाम</span>{" "}
								<span className={styles.value}>
									श्रीखंड चन्दन (Santalum album)
								</span>
							</div>
							<div className={styles.row}>
								<span className={styles.key}>विवरण</span>{" "}
								<p className={styles.value}>
									सन्तालम एल्बम, जसलाई सामान्यतया श्रीखंड
									चन्दन भनिन्छ, यसको सुगन्धित मुटुको काठको
									लागि प्रख्यात एक उच्च मूल्यवान बोट हो।
									उष्णकटिबंधीय मौसममा फस्टाउँदै, यो सदाबहार
									रूखलाई न्यानो तापक्रम र राम्रोसँग निकास भएको
									माटो चाहिन्छ, सामान्यतया 20 देखि 30 डिग्री
									सेल्सियसको बीचको तापक्रम भएका क्षेत्रहरूमा
									पाइन्छ। बलौटे दोमट वा रातो लेटरिटिक माटो
									यसको विकासको लागि उपयुक्त हुन्छ। प्रयोगको
									समृद्ध इतिहासको साथ, चन्दनलाई हिन्दू
									संस्कृतिमा यसको धार्मिक र अनुष्ठान महत्त्वको
									लागि सम्मान गरिन्छ, प्रायः समारोह, मन्दिर र
									ध्यानमा प्रयोग गरिन्छ। हार्टवुड बहुमूल्य
									चन्दनको तेलको स्रोत हो, जुन परम्परागत
									चिकित्सा र अरोमाथेरापीमा चिकित्सीय गुणहरूको
									लागि परिचित छ। यसबाहेक, काठलाई जटिल नक्काशी,
									मोती र धूपमा बनाइएको छ। दुई दशकको
									सावधानीपूर्वक खेती गरेपछि, प्रति किलोग्राम
									चन्दनको मूल्य बढ्न सक्छ, यसको सुस्त वृद्धि
									दर र यसको मूल्यवान हृदय काठको बढ्दो मागलाई
									ध्यानमा राख्दै, रूख परिपक्व हुन पर्खने
									किसानहरू लागि यो आकर्षक लगानी हो।
								</p>
							</div>
							<div className={styles.row}>
								<span className={styles.key}>
									उपलब्ध बिरुवा संख्या
								</span>{" "}
								<p className={styles.value}>
									50,000 (पचास हजार)
								</p>
							</div>
							<div className={styles.row}>
								<span className={styles.key}>मूल्य</span>{" "}
								<p className={styles.value}>
									रु. 200 प्रति बिरुवा
								</p>
							</div>
							<div className={styles.row}>
								<Link className={styles.button} to="/contact">
									सम्पर्क गर्नुहोस
								</Link>
							</div>
						</div>

						<div className={styles.plantDescription}>
							<div className={styles.imgWrapper}>
								<img
									src="https://img2.exportersindia.com/product_images/bc-full/2020/1/4538795/white-sandalwood-big-plant-1579339170_p_2765213_932116.jpeg"
									alt=""
								/>
							</div>
							<div className={styles.plantName}>
								श्रीखंड चन्दन (Santalum album)
							</div>
						</div>
					</div>

					<div className={styles.card}>
						<div className={styles.detail}>
							<div className={styles.row}>
								<span className={styles.key}>बिरुवाको नाम</span>{" "}
								<span className={styles.value}>
									रातो चन्दन (Pterocarpus santalinus)
								</span>
							</div>
							<div className={styles.row}>
								<span className={styles.key}>विवरण</span>{" "}
								<p className={styles.value}>
									रातो चन्दन (Pterocarpus santalinus) एक
									उष्णकटिबंधीय र उपोष्णकटिबंधीय बिरुवा हो जुन
									20°C देखि 28°C बीचको तापक्रममा फल्छ, जसलाई
									थोरै अम्लीय देखि तटस्थ pH (6.0 देखि 7.5)
									सम्मको राम्रो निकास भएको बलौटे-दोमट माटो
									चाहिन्छ। यसको मुटुको काठ र औषधीय उद्देश्यका
									लागि प्रयोग गरिएको अर्कको साथ, यसले
									स्वास्थ्य समस्याहरूको दायरालाई सम्बोधन
									गर्दछ। यो बहुमुखी बिरुवाले हर्बल
									फॉर्म्युलेसनमा एक महत्वपूर्ण घटकको रूपमा काम
									गर्दछ, हिन्दू अनुष्ठान र समारोहहरूमा
									महत्त्वपूर्ण भूमिका खेल्छ, पवित्रता र
									शुभताको प्रतीक हो, र सौन्दर्य प्रसाधन, अत्तर
									र धूपमा एक बहुमूल्य सामग्री हो। यसको
									सांस्कृतिक र अनुष्ठानको महत्त्वभन्दा बाहिर,
									रातो चन्दनको हार्टवुडले मूल्यवान रातो तेल
									दिन्छ, यसको अनुपम र दीर्घकालीन सुगन्धको लागि
									सुगन्ध उद्योगमा अत्यधिक खोजी गरिन्छ। 20
									वर्षको बिरुवा लगाए पछि, परिपक्व रूखहरूले
									पर्याप्त आम्दानी गर्न सक्छ, हृदयको काठको
									मूल्य लगभग $ 200 देखि $ 300 प्रति
									किलोग्रामको साथमा, यसले उच्च गुणस्तरको खेती
									गर्ने अभ्यासहरू पालन गर्ने र बजार प्रवृतिहरू
									बारे जानकार रहने किसानहरूको लागि आकर्षक
									लगानी बनाउँछ।
								</p>
							</div>
							<div className={styles.row}>
								<span className={styles.key}>
									उपलब्ध बिरुवा संख्या
								</span>{" "}
								<p className={styles.value}>
									50,000 (पचास हजार)
								</p>
							</div>
							<div className={styles.row}>
								<span className={styles.key}>मूल्य</span>{" "}
								<p className={styles.value}>
									रु. 200 प्रति बिरुवा
								</p>
							</div>

							<div className={styles.row}>
								<Link className={styles.button} to="/contact">
									सम्पर्क गर्नुहोस
								</Link>
							</div>
						</div>

						<div className={styles.plantDescription}>
							<div className={styles.imgWrapper}>
								<img
									src="https://img1.exportersindia.com/product_images/bc-full/2022/7/10249210/red-sandalwood-plants-1657949411-6448476.jpeg"
									alt=""
								/>
							</div>
							<div className={styles.plantName}>
								रातो चन्दन (Pterocarpus santalinus)
							</div>
						</div>
					</div>

					<div className={styles.card}>
						<div className={styles.detail}>
							<div className={styles.row}>
								<span className={styles.key}>बिरुवाको नाम</span>{" "}
								<span className={styles.value}>
									Agarwood रूख
								</span>
							</div>
							<div className={styles.row}>
								<span className={styles.key}>विवरण</span>{" "}
								<p className={styles.value}>
									Agarwood रूख (Aquilaria spp.), "औड" भनेर
									चिनिने सुगन्धित रालको लागि मनाइन्छ, उच्च
									आर्द्रता र 25 देखि 35 डिग्री सेल्सियसको
									बीचको तापक्रम भएको उष्णकटिबंधीय मौसममा फल्छ,
									बलौटे दोमट वा लेटराइट जस्ता राम्रोसँग निकास
									हुने माटोलाई मनपर्छ। दक्षिणपूर्व एशियामा
									व्यापक रूपमा पाइने, अग्रवुड अत्तर, धूप र
									परम्परागत औषधिहरूमा यसको प्रयोगको लागि
									बहुमूल्य छ। लगभग 20 वर्षको खेती पछि, यी
									रूखहरू परिपक्व हुन्छन्, खोजी-राल, "औड तेल"
									को विकास गर्दै। अग्रवुड खेतीको आर्थिक
									सम्भाव्यता यसको रालको लागि आकर्षक बजारमा छ,
									प्रति किलोग्राम मूल्यहरू गुणस्तर,
									विश्वव्यापी माग, र बजार प्रवृतिहरूमा आधारित
									भिन्न हुन्छन्। दिगो कृषि वन अभ्यासहरूको लागि
									आकर्षक विकल्पको रूपमा, अग्रवुडले सफल रोपण
									परिणामहरूको लागि उचित हेरचाह र व्यवस्थापनको
									महत्त्वलाई जोड दिँदै सुगन्धित सुन्दरता र
									दीर्घकालीन आर्थिक व्यवहार्यता प्रदान गर्दछ।
								</p>
							</div>
							<div className={styles.row}>
								<span className={styles.key}>
									उपलब्ध बिरुवा संख्या
								</span>{" "}
								<p className={styles.value}>
									50,000 (पचास हजार)
								</p>
							</div>
							<div className={styles.row}>
								<span className={styles.key}>मूल्य</span>{" "}
								<p className={styles.value}>
									रु. 200 प्रति बिरुवा
								</p>
							</div>
							<div className={styles.row}>
								<Link className={styles.button} to="/contact">
									सम्पर्क गर्नुहोस
								</Link>
							</div>
						</div>

						<div className={styles.plantDescription}>
							<div className={styles.imgWrapper}>
								<img
									src="https://exoticflora.in/cdn/shop/products/WhatsAppImage2020-10-30at2.42.30PM_1024x1024.jpg?v=1604560045"
									alt=""
								/>
							</div>
							<div className={styles.plantName}>Agarwood रूख</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Plant;
