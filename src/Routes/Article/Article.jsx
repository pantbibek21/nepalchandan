import React from "react";
import styles from "./Article.module.scss";

import Hero from "../Hero/Hero";

import Header from "../../Components/Header/Header";
import FrequentlyAskedQuestion from "../../Components/FrequentlyAskedQuestions/FrequentlyAskedQuestion";
import Footer from "../../Components/Footer/Footer";

const Article = () => {
	return (
		<>
			<section className="componentSection">
				<Header></Header>
				<Hero
					heading="लेख"
					description="यस खण्डमा, तपाईंले चन्दन र रातो चन्दनको बारेमा सबै जानकारी पाउनुहुनेछ, वृक्षारोपणदेखि कानुनी नीतिहरू सम्म। हामी यी अत्यधिक औषधीय बिरुवाहरूको व्यावसायिक खेतीका लागि तपाईंले जान्नुपर्ने सबै कुरा स्पष्ट पार्ने आशा गर्दछौं।"
				></Hero>

				<div className={`${styles.container} container`}>
					<div className={styles.articleWrapper}>
						<div className={styles.toc}>
							<h3>Articles</h3>
							<ul>
								<li>
									<a href="#article-one">
										चन्दन र रातो चन्दनको व्यावसायिक खेती 1
									</a>
								</li>
								<li>
									<a href="#article-two">
										चन्दन र रातो चन्दनको व्यावसायिक खेती 2
									</a>
								</li>
								<li>
									<a href="#article-three">
										चन्दन र रातो चन्दनको व्यावसायिक खेती 3
									</a>
								</li>
								<li>
									<a href="#article-four">
										चन्दन र रातो चन्दनको व्यावसायिक खेती 4
									</a>
								</li>
								<li>
									<a href="#article-five">
										चन्दन र रातो चन्दनको व्यावसायिक खेती 5
									</a>
								</li>
								<li>
									<a href="#article-six">
										चन्दन र रातो चन्दनको व्यावसायिक खेती 6
									</a>
								</li>
							</ul>
						</div>
						<div className={styles.article} id="article-one">
							<h3 className={styles.articleHeading}>
								चन्दन र रातो चन्दनको व्यावसायिक खेती 1
							</h3>
							<div className={styles.articleDescription}>
								<div className={styles.imgWrapper}>
									<img
										src="https://scontent.fktm16-1.fna.fbcdn.net/v/t39.30808-6/227676447_10219042135944798_9056157733268653138_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f25831&_nc_ohc=0_8-kHd-v9IAX8zCSZf&_nc_ht=scontent.fktm16-1.fna&oh=00_AfDvH_sSQJG2PpV1io-vZvT4Zecjhjfjsc40xSGLiI5cig&oe=65B29E7C
"
										alt=""
									/>
								</div>
								<p>
									नेपालमा नै उत्पादित उच्च गुणस्तरीय श्रीखण्ड
									चन्दन र रक्तचन्दनको बिरुवाहरु रोपि ब्यवसायिक
									खेती गरौ, थोरै जमीनबाट पनि धेरै आम्दानी गरौं
									।
								</p>
								<p>
									प्रती कट्टा ३६ बिरुवा ( 3x3 मि को दुरिमा
									लगाएर) र १ बिघा मा ७२० बिरुवा उत्पादन गर्न
									सकिने हुन्छ । श्रीखण्ड ५ डिग्री देखी ४५
									डिग्री को तापक्रम सम्म मा हुने भएकोले नेपाल
									मा तराई देखी पहाड सम्म जहाँ पनि हुनेछ । तर
									यो अर्ध परजीवी वनस्पति भएकोले यसको १/२ मि
									भित्र पर्ने गरि अर्को कुनै सहयोगी बिरुवा
									लगाउनु पर्छ । यसका लागी कागती, आमला, सानो
									जात को आप, लिची, अम्बा लगायत का फलफूलको र
									अन्य नाइट्रोजन फिक्सिङ प्लान्ट जे लगाएपनी
									हुन्छ। लगाउने बितिक्कै अरहरको दाल को २/४
									दाना वा लज्जावती फूलको बोट यसको नजिकै लगाउदा
									अझै राम्रो हुन्छ ।
								</p>
								<p>
									श्रीखण्ड १५ बर्षमा तयार हुने र प्रती रुख बाट
									भित्रि गुदि काठ १५ किलो र जराहरु पनि १०/१५
									किलो गरि २५/३० किलो उत्पादन हुन्छ । अहिलेको
									भारतिय सरकारी बजार मुल्य प्रती किलो काठको
									क्वालिटी हेरि ३४००/- देखी ६४००/- भारु रहेको
									छ भने खुला बजारमा किलोको १०/१२ हजार मुल्य छ
									। नेपाल मा धेरैजसो ब्यापरिले प्रती किलो
									भन्दा पनि रुखको नै ठेक्का हान्ने चलन छ ।
									यद्यपि वन नियमावली मा प्रती किलो ८००/- त
									सरकारी रोयल्टी मात्रै तोकिएको छ ।
								</p>
								<p>
									भारतिय चन्दन कम्पनिहरुले प्रती किलो २ लाख ५०
									हजार भारु सम्ममा प्रती लिटर चन्दनको तेल
									बिक्रीवितरण गरिरहेका छन । चन्दन तेल
									श्रीखण्ड्को भित्री गुदि काठ र जरा बाट
									डिस्टिलेसन गरि निकालिन्छ । बढिमा काठको तौलको
									६% सम्म तेल पर्ने हुन्छ । जतिपनी विश्वभरी जे
									सुकैका पनि खुस्बुदार तेल सेन्ट बन्छन तिनीहरु
									को आयु र गुण बढाउने कामका श्रीखण्ड्को तेल
									अनिवार्य रूपमा मिसाउनु पर्ने हुन्छ, जसका
									कारण यसको बजार बिश्वब्यापी भएको हो ।
								</p>

								<p>
									यस्तो महत्वोपुर्ण आम्दानीको श्रोत भएको
									श्रीखण्ड को एउटै रुखबाट पनि १ देखी डेढ लाख
									आम्दानी गर्न सकिन्छ । तर यता तिर न सरकारले न
									हामी जनताले ध्यान दिइरहेका छौ जस्तो लाग्छ ।
									मेरो ५/६ बर्ष को यो क्षेत्रमा काम गरेको
									अनुभवबाट र नर्सरी देखी प्लान्टेसनको अवस्था र
									गुणस्तर हेर्दा म अत्यन्त सकारात्मक र
									उत्साहित छु । यदि थोरै जमिनबाट धेरै आम्दानी
									लिनेहो भने एकदिन हामीले यि वनस्पति high
									value medicinal plants ( sandalwood and red
									sanders) को ब्यावसायिक खेतीमा अबश्य जानै
									पर्ने देखिन्छ ।
								</p>

								<p>
									कुनै इच्छुक ब्यक्ती/ सस्थाले श्रीखण्ड र
									रक्तचन्दनको ब्याबसायिक खेती गर्न चाहे
									प्राबिधिक सहयोग र गुणस्तरीय बिरुवाहरु उपलब्ध
									गराउन सकिन्छ ।
								</p>
							</div>
						</div>
						<div className={styles.article} id="article-two">
							<h3 className={styles.articleHeading}>
								चन्दन र रातो चन्दनको व्यावसायिक खेती 2
							</h3>
							<div className={styles.articleDescription}>
								<div className={styles.imgWrapper}>
									<img
										src="https://scontent.fktm16-1.fna.fbcdn.net/v/t39.30808-6/227676447_10219042135944798_9056157733268653138_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f25831&_nc_ohc=0_8-kHd-v9IAX8zCSZf&_nc_ht=scontent.fktm16-1.fna&oh=00_AfDvH_sSQJG2PpV1io-vZvT4Zecjhjfjsc40xSGLiI5cig&oe=65B29E7C
"
										alt=""
									/>
								</div>
								<p>
									नेपालमा नै उत्पादित उच्च गुणस्तरीय श्रीखण्ड
									चन्दन र रक्तचन्दनको बिरुवाहरु रोपि ब्यवसायिक
									खेती गरौ, थोरै जमीनबाट पनि धेरै आम्दानी गरौं
									।
								</p>
								<p>
									प्रती कट्टा ३६ बिरुवा ( 3x3 मि को दुरिमा
									लगाएर) र १ बिघा मा ७२० बिरुवा उत्पादन गर्न
									सकिने हुन्छ । श्रीखण्ड ५ डिग्री देखी ४५
									डिग्री को तापक्रम सम्म मा हुने भएकोले नेपाल
									मा तराई देखी पहाड सम्म जहाँ पनि हुनेछ । तर
									यो अर्ध परजीवी वनस्पति भएकोले यसको १/२ मि
									भित्र पर्ने गरि अर्को कुनै सहयोगी बिरुवा
									लगाउनु पर्छ । यसका लागी कागती, आमला, सानो
									जात को आप, लिची, अम्बा लगायत का फलफूलको र
									अन्य नाइट्रोजन फिक्सिङ प्लान्ट जे लगाएपनी
									हुन्छ। लगाउने बितिक्कै अरहरको दाल को २/४
									दाना वा लज्जावती फूलको बोट यसको नजिकै लगाउदा
									अझै राम्रो हुन्छ ।
								</p>
								<p>
									श्रीखण्ड १५ बर्षमा तयार हुने र प्रती रुख बाट
									भित्रि गुदि काठ १५ किलो र जराहरु पनि १०/१५
									किलो गरि २५/३० किलो उत्पादन हुन्छ । अहिलेको
									भारतिय सरकारी बजार मुल्य प्रती किलो काठको
									क्वालिटी हेरि ३४००/- देखी ६४००/- भारु रहेको
									छ भने खुला बजारमा किलोको १०/१२ हजार मुल्य छ
									। नेपाल मा धेरैजसो ब्यापरिले प्रती किलो
									भन्दा पनि रुखको नै ठेक्का हान्ने चलन छ ।
									यद्यपि वन नियमावली मा प्रती किलो ८००/- त
									सरकारी रोयल्टी मात्रै तोकिएको छ ।
								</p>
								<p>
									भारतिय चन्दन कम्पनिहरुले प्रती किलो २ लाख ५०
									हजार भारु सम्ममा प्रती लिटर चन्दनको तेल
									बिक्रीवितरण गरिरहेका छन । चन्दन तेल
									श्रीखण्ड्को भित्री गुदि काठ र जरा बाट
									डिस्टिलेसन गरि निकालिन्छ । बढिमा काठको तौलको
									६% सम्म तेल पर्ने हुन्छ । जतिपनी विश्वभरी जे
									सुकैका पनि खुस्बुदार तेल सेन्ट बन्छन तिनीहरु
									को आयु र गुण बढाउने कामका श्रीखण्ड्को तेल
									अनिवार्य रूपमा मिसाउनु पर्ने हुन्छ, जसका
									कारण यसको बजार बिश्वब्यापी भएको हो ।
								</p>

								<p>
									यस्तो महत्वोपुर्ण आम्दानीको श्रोत भएको
									श्रीखण्ड को एउटै रुखबाट पनि १ देखी डेढ लाख
									आम्दानी गर्न सकिन्छ । तर यता तिर न सरकारले न
									हामी जनताले ध्यान दिइरहेका छौ जस्तो लाग्छ ।
									मेरो ५/६ बर्ष को यो क्षेत्रमा काम गरेको
									अनुभवबाट र नर्सरी देखी प्लान्टेसनको अवस्था र
									गुणस्तर हेर्दा म अत्यन्त सकारात्मक र
									उत्साहित छु । यदि थोरै जमिनबाट धेरै आम्दानी
									लिनेहो भने एकदिन हामीले यि वनस्पति high
									value medicinal plants ( sandalwood and red
									sanders) को ब्यावसायिक खेतीमा अबश्य जानै
									पर्ने देखिन्छ ।
								</p>

								<p>
									कुनै इच्छुक ब्यक्ती/ सस्थाले श्रीखण्ड र
									रक्तचन्दनको ब्याबसायिक खेती गर्न चाहे
									प्राबिधिक सहयोग र गुणस्तरीय बिरुवाहरु उपलब्ध
									गराउन सकिन्छ ।
								</p>
							</div>
						</div>
						<div className={styles.article} id="article-three">
							<h3 className={styles.articleHeading}>
								चन्दन र रातो चन्दनको व्यावसायिक खेती 3
							</h3>
							<div className={styles.articleDescription}>
								<div className={styles.imgWrapper}>
									<img
										src="https://scontent.fktm16-1.fna.fbcdn.net/v/t39.30808-6/227676447_10219042135944798_9056157733268653138_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f25831&_nc_ohc=0_8-kHd-v9IAX8zCSZf&_nc_ht=scontent.fktm16-1.fna&oh=00_AfDvH_sSQJG2PpV1io-vZvT4Zecjhjfjsc40xSGLiI5cig&oe=65B29E7C
"
										alt=""
									/>
								</div>
								<p>
									नेपालमा नै उत्पादित उच्च गुणस्तरीय श्रीखण्ड
									चन्दन र रक्तचन्दनको बिरुवाहरु रोपि ब्यवसायिक
									खेती गरौ, थोरै जमीनबाट पनि धेरै आम्दानी गरौं
									।
								</p>
								<p>
									प्रती कट्टा ३६ बिरुवा ( 3x3 मि को दुरिमा
									लगाएर) र १ बिघा मा ७२० बिरुवा उत्पादन गर्न
									सकिने हुन्छ । श्रीखण्ड ५ डिग्री देखी ४५
									डिग्री को तापक्रम सम्म मा हुने भएकोले नेपाल
									मा तराई देखी पहाड सम्म जहाँ पनि हुनेछ । तर
									यो अर्ध परजीवी वनस्पति भएकोले यसको १/२ मि
									भित्र पर्ने गरि अर्को कुनै सहयोगी बिरुवा
									लगाउनु पर्छ । यसका लागी कागती, आमला, सानो
									जात को आप, लिची, अम्बा लगायत का फलफूलको र
									अन्य नाइट्रोजन फिक्सिङ प्लान्ट जे लगाएपनी
									हुन्छ। लगाउने बितिक्कै अरहरको दाल को २/४
									दाना वा लज्जावती फूलको बोट यसको नजिकै लगाउदा
									अझै राम्रो हुन्छ ।
								</p>
								<p>
									श्रीखण्ड १५ बर्षमा तयार हुने र प्रती रुख बाट
									भित्रि गुदि काठ १५ किलो र जराहरु पनि १०/१५
									किलो गरि २५/३० किलो उत्पादन हुन्छ । अहिलेको
									भारतिय सरकारी बजार मुल्य प्रती किलो काठको
									क्वालिटी हेरि ३४००/- देखी ६४००/- भारु रहेको
									छ भने खुला बजारमा किलोको १०/१२ हजार मुल्य छ
									। नेपाल मा धेरैजसो ब्यापरिले प्रती किलो
									भन्दा पनि रुखको नै ठेक्का हान्ने चलन छ ।
									यद्यपि वन नियमावली मा प्रती किलो ८००/- त
									सरकारी रोयल्टी मात्रै तोकिएको छ ।
								</p>
								<p>
									भारतिय चन्दन कम्पनिहरुले प्रती किलो २ लाख ५०
									हजार भारु सम्ममा प्रती लिटर चन्दनको तेल
									बिक्रीवितरण गरिरहेका छन । चन्दन तेल
									श्रीखण्ड्को भित्री गुदि काठ र जरा बाट
									डिस्टिलेसन गरि निकालिन्छ । बढिमा काठको तौलको
									६% सम्म तेल पर्ने हुन्छ । जतिपनी विश्वभरी जे
									सुकैका पनि खुस्बुदार तेल सेन्ट बन्छन तिनीहरु
									को आयु र गुण बढाउने कामका श्रीखण्ड्को तेल
									अनिवार्य रूपमा मिसाउनु पर्ने हुन्छ, जसका
									कारण यसको बजार बिश्वब्यापी भएको हो ।
								</p>

								<p>
									यस्तो महत्वोपुर्ण आम्दानीको श्रोत भएको
									श्रीखण्ड को एउटै रुखबाट पनि १ देखी डेढ लाख
									आम्दानी गर्न सकिन्छ । तर यता तिर न सरकारले न
									हामी जनताले ध्यान दिइरहेका छौ जस्तो लाग्छ ।
									मेरो ५/६ बर्ष को यो क्षेत्रमा काम गरेको
									अनुभवबाट र नर्सरी देखी प्लान्टेसनको अवस्था र
									गुणस्तर हेर्दा म अत्यन्त सकारात्मक र
									उत्साहित छु । यदि थोरै जमिनबाट धेरै आम्दानी
									लिनेहो भने एकदिन हामीले यि वनस्पति high
									value medicinal plants ( sandalwood and red
									sanders) को ब्यावसायिक खेतीमा अबश्य जानै
									पर्ने देखिन्छ ।
								</p>

								<p>
									कुनै इच्छुक ब्यक्ती/ सस्थाले श्रीखण्ड र
									रक्तचन्दनको ब्याबसायिक खेती गर्न चाहे
									प्राबिधिक सहयोग र गुणस्तरीय बिरुवाहरु उपलब्ध
									गराउन सकिन्छ ।
								</p>
							</div>
						</div>
						<div className={styles.article} id="article-four">
							<h3 className={styles.articleHeading}>
								चन्दन र रातो चन्दनको व्यावसायिक खेती 4
							</h3>
							<div className={styles.articleDescription}>
								<div className={styles.imgWrapper}>
									<img
										src="https://scontent.fktm16-1.fna.fbcdn.net/v/t39.30808-6/227676447_10219042135944798_9056157733268653138_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f25831&_nc_ohc=0_8-kHd-v9IAX8zCSZf&_nc_ht=scontent.fktm16-1.fna&oh=00_AfDvH_sSQJG2PpV1io-vZvT4Zecjhjfjsc40xSGLiI5cig&oe=65B29E7C
"
										alt=""
									/>
								</div>
								<p>
									नेपालमा नै उत्पादित उच्च गुणस्तरीय श्रीखण्ड
									चन्दन र रक्तचन्दनको बिरुवाहरु रोपि ब्यवसायिक
									खेती गरौ, थोरै जमीनबाट पनि धेरै आम्दानी गरौं
									।
								</p>
								<p>
									प्रती कट्टा ३६ बिरुवा ( 3x3 मि को दुरिमा
									लगाएर) र १ बिघा मा ७२० बिरुवा उत्पादन गर्न
									सकिने हुन्छ । श्रीखण्ड ५ डिग्री देखी ४५
									डिग्री को तापक्रम सम्म मा हुने भएकोले नेपाल
									मा तराई देखी पहाड सम्म जहाँ पनि हुनेछ । तर
									यो अर्ध परजीवी वनस्पति भएकोले यसको १/२ मि
									भित्र पर्ने गरि अर्को कुनै सहयोगी बिरुवा
									लगाउनु पर्छ । यसका लागी कागती, आमला, सानो
									जात को आप, लिची, अम्बा लगायत का फलफूलको र
									अन्य नाइट्रोजन फिक्सिङ प्लान्ट जे लगाएपनी
									हुन्छ। लगाउने बितिक्कै अरहरको दाल को २/४
									दाना वा लज्जावती फूलको बोट यसको नजिकै लगाउदा
									अझै राम्रो हुन्छ ।
								</p>
								<p>
									श्रीखण्ड १५ बर्षमा तयार हुने र प्रती रुख बाट
									भित्रि गुदि काठ १५ किलो र जराहरु पनि १०/१५
									किलो गरि २५/३० किलो उत्पादन हुन्छ । अहिलेको
									भारतिय सरकारी बजार मुल्य प्रती किलो काठको
									क्वालिटी हेरि ३४००/- देखी ६४००/- भारु रहेको
									छ भने खुला बजारमा किलोको १०/१२ हजार मुल्य छ
									। नेपाल मा धेरैजसो ब्यापरिले प्रती किलो
									भन्दा पनि रुखको नै ठेक्का हान्ने चलन छ ।
									यद्यपि वन नियमावली मा प्रती किलो ८००/- त
									सरकारी रोयल्टी मात्रै तोकिएको छ ।
								</p>
								<p>
									भारतिय चन्दन कम्पनिहरुले प्रती किलो २ लाख ५०
									हजार भारु सम्ममा प्रती लिटर चन्दनको तेल
									बिक्रीवितरण गरिरहेका छन । चन्दन तेल
									श्रीखण्ड्को भित्री गुदि काठ र जरा बाट
									डिस्टिलेसन गरि निकालिन्छ । बढिमा काठको तौलको
									६% सम्म तेल पर्ने हुन्छ । जतिपनी विश्वभरी जे
									सुकैका पनि खुस्बुदार तेल सेन्ट बन्छन तिनीहरु
									को आयु र गुण बढाउने कामका श्रीखण्ड्को तेल
									अनिवार्य रूपमा मिसाउनु पर्ने हुन्छ, जसका
									कारण यसको बजार बिश्वब्यापी भएको हो ।
								</p>

								<p>
									यस्तो महत्वोपुर्ण आम्दानीको श्रोत भएको
									श्रीखण्ड को एउटै रुखबाट पनि १ देखी डेढ लाख
									आम्दानी गर्न सकिन्छ । तर यता तिर न सरकारले न
									हामी जनताले ध्यान दिइरहेका छौ जस्तो लाग्छ ।
									मेरो ५/६ बर्ष को यो क्षेत्रमा काम गरेको
									अनुभवबाट र नर्सरी देखी प्लान्टेसनको अवस्था र
									गुणस्तर हेर्दा म अत्यन्त सकारात्मक र
									उत्साहित छु । यदि थोरै जमिनबाट धेरै आम्दानी
									लिनेहो भने एकदिन हामीले यि वनस्पति high
									value medicinal plants ( sandalwood and red
									sanders) को ब्यावसायिक खेतीमा अबश्य जानै
									पर्ने देखिन्छ ।
								</p>

								<p>
									कुनै इच्छुक ब्यक्ती/ सस्थाले श्रीखण्ड र
									रक्तचन्दनको ब्याबसायिक खेती गर्न चाहे
									प्राबिधिक सहयोग र गुणस्तरीय बिरुवाहरु उपलब्ध
									गराउन सकिन्छ ।
								</p>
							</div>
						</div>
						<div className={styles.article} id="article-five">
							<h3 className={styles.articleHeading}>
								चन्दन र रातो चन्दनको व्यावसायिक खेती 5
							</h3>
							<div className={styles.articleDescription}>
								<div className={styles.imgWrapper}>
									<img
										src="https://scontent.fktm16-1.fna.fbcdn.net/v/t39.30808-6/227676447_10219042135944798_9056157733268653138_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f25831&_nc_ohc=0_8-kHd-v9IAX8zCSZf&_nc_ht=scontent.fktm16-1.fna&oh=00_AfDvH_sSQJG2PpV1io-vZvT4Zecjhjfjsc40xSGLiI5cig&oe=65B29E7C
"
										alt=""
									/>
								</div>
								<p>
									नेपालमा नै उत्पादित उच्च गुणस्तरीय श्रीखण्ड
									चन्दन र रक्तचन्दनको बिरुवाहरु रोपि ब्यवसायिक
									खेती गरौ, थोरै जमीनबाट पनि धेरै आम्दानी गरौं
									।
								</p>
								<p>
									प्रती कट्टा ३६ बिरुवा ( 3x3 मि को दुरिमा
									लगाएर) र १ बिघा मा ७२० बिरुवा उत्पादन गर्न
									सकिने हुन्छ । श्रीखण्ड ५ डिग्री देखी ४५
									डिग्री को तापक्रम सम्म मा हुने भएकोले नेपाल
									मा तराई देखी पहाड सम्म जहाँ पनि हुनेछ । तर
									यो अर्ध परजीवी वनस्पति भएकोले यसको १/२ मि
									भित्र पर्ने गरि अर्को कुनै सहयोगी बिरुवा
									लगाउनु पर्छ । यसका लागी कागती, आमला, सानो
									जात को आप, लिची, अम्बा लगायत का फलफूलको र
									अन्य नाइट्रोजन फिक्सिङ प्लान्ट जे लगाएपनी
									हुन्छ। लगाउने बितिक्कै अरहरको दाल को २/४
									दाना वा लज्जावती फूलको बोट यसको नजिकै लगाउदा
									अझै राम्रो हुन्छ ।
								</p>
								<p>
									श्रीखण्ड १५ बर्षमा तयार हुने र प्रती रुख बाट
									भित्रि गुदि काठ १५ किलो र जराहरु पनि १०/१५
									किलो गरि २५/३० किलो उत्पादन हुन्छ । अहिलेको
									भारतिय सरकारी बजार मुल्य प्रती किलो काठको
									क्वालिटी हेरि ३४००/- देखी ६४००/- भारु रहेको
									छ भने खुला बजारमा किलोको १०/१२ हजार मुल्य छ
									। नेपाल मा धेरैजसो ब्यापरिले प्रती किलो
									भन्दा पनि रुखको नै ठेक्का हान्ने चलन छ ।
									यद्यपि वन नियमावली मा प्रती किलो ८००/- त
									सरकारी रोयल्टी मात्रै तोकिएको छ ।
								</p>
								<p>
									भारतिय चन्दन कम्पनिहरुले प्रती किलो २ लाख ५०
									हजार भारु सम्ममा प्रती लिटर चन्दनको तेल
									बिक्रीवितरण गरिरहेका छन । चन्दन तेल
									श्रीखण्ड्को भित्री गुदि काठ र जरा बाट
									डिस्टिलेसन गरि निकालिन्छ । बढिमा काठको तौलको
									६% सम्म तेल पर्ने हुन्छ । जतिपनी विश्वभरी जे
									सुकैका पनि खुस्बुदार तेल सेन्ट बन्छन तिनीहरु
									को आयु र गुण बढाउने कामका श्रीखण्ड्को तेल
									अनिवार्य रूपमा मिसाउनु पर्ने हुन्छ, जसका
									कारण यसको बजार बिश्वब्यापी भएको हो ।
								</p>

								<p>
									यस्तो महत्वोपुर्ण आम्दानीको श्रोत भएको
									श्रीखण्ड को एउटै रुखबाट पनि १ देखी डेढ लाख
									आम्दानी गर्न सकिन्छ । तर यता तिर न सरकारले न
									हामी जनताले ध्यान दिइरहेका छौ जस्तो लाग्छ ।
									मेरो ५/६ बर्ष को यो क्षेत्रमा काम गरेको
									अनुभवबाट र नर्सरी देखी प्लान्टेसनको अवस्था र
									गुणस्तर हेर्दा म अत्यन्त सकारात्मक र
									उत्साहित छु । यदि थोरै जमिनबाट धेरै आम्दानी
									लिनेहो भने एकदिन हामीले यि वनस्पति high
									value medicinal plants ( sandalwood and red
									sanders) को ब्यावसायिक खेतीमा अबश्य जानै
									पर्ने देखिन्छ ।
								</p>

								<p>
									कुनै इच्छुक ब्यक्ती/ सस्थाले श्रीखण्ड र
									रक्तचन्दनको ब्याबसायिक खेती गर्न चाहे
									प्राबिधिक सहयोग र गुणस्तरीय बिरुवाहरु उपलब्ध
									गराउन सकिन्छ ।
								</p>
							</div>
						</div>
						<div className={styles.article} id="article-six">
							<h3 className={styles.articleHeading}>
								चन्दन र रातो चन्दनको व्यावसायिक खेती 6
							</h3>
							<div className={styles.articleDescription}>
								<div className={styles.imgWrapper}>
									<img
										src="https://scontent.fktm16-1.fna.fbcdn.net/v/t39.30808-6/227676447_10219042135944798_9056157733268653138_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f25831&_nc_ohc=0_8-kHd-v9IAX8zCSZf&_nc_ht=scontent.fktm16-1.fna&oh=00_AfDvH_sSQJG2PpV1io-vZvT4Zecjhjfjsc40xSGLiI5cig&oe=65B29E7C
"
										alt=""
									/>
								</div>
								<p>
									नेपालमा नै उत्पादित उच्च गुणस्तरीय श्रीखण्ड
									चन्दन र रक्तचन्दनको बिरुवाहरु रोपि ब्यवसायिक
									खेती गरौ, थोरै जमीनबाट पनि धेरै आम्दानी गरौं
									।
								</p>
								<p>
									प्रती कट्टा ३६ बिरुवा ( 3x3 मि को दुरिमा
									लगाएर) र १ बिघा मा ७२० बिरुवा उत्पादन गर्न
									सकिने हुन्छ । श्रीखण्ड ५ डिग्री देखी ४५
									डिग्री को तापक्रम सम्म मा हुने भएकोले नेपाल
									मा तराई देखी पहाड सम्म जहाँ पनि हुनेछ । तर
									यो अर्ध परजीवी वनस्पति भएकोले यसको १/२ मि
									भित्र पर्ने गरि अर्को कुनै सहयोगी बिरुवा
									लगाउनु पर्छ । यसका लागी कागती, आमला, सानो
									जात को आप, लिची, अम्बा लगायत का फलफूलको र
									अन्य नाइट्रोजन फिक्सिङ प्लान्ट जे लगाएपनी
									हुन्छ। लगाउने बितिक्कै अरहरको दाल को २/४
									दाना वा लज्जावती फूलको बोट यसको नजिकै लगाउदा
									अझै राम्रो हुन्छ ।
								</p>
								<p>
									श्रीखण्ड १५ बर्षमा तयार हुने र प्रती रुख बाट
									भित्रि गुदि काठ १५ किलो र जराहरु पनि १०/१५
									किलो गरि २५/३० किलो उत्पादन हुन्छ । अहिलेको
									भारतिय सरकारी बजार मुल्य प्रती किलो काठको
									क्वालिटी हेरि ३४००/- देखी ६४००/- भारु रहेको
									छ भने खुला बजारमा किलोको १०/१२ हजार मुल्य छ
									। नेपाल मा धेरैजसो ब्यापरिले प्रती किलो
									भन्दा पनि रुखको नै ठेक्का हान्ने चलन छ ।
									यद्यपि वन नियमावली मा प्रती किलो ८००/- त
									सरकारी रोयल्टी मात्रै तोकिएको छ ।
								</p>
								<p>
									भारतिय चन्दन कम्पनिहरुले प्रती किलो २ लाख ५०
									हजार भारु सम्ममा प्रती लिटर चन्दनको तेल
									बिक्रीवितरण गरिरहेका छन । चन्दन तेल
									श्रीखण्ड्को भित्री गुदि काठ र जरा बाट
									डिस्टिलेसन गरि निकालिन्छ । बढिमा काठको तौलको
									६% सम्म तेल पर्ने हुन्छ । जतिपनी विश्वभरी जे
									सुकैका पनि खुस्बुदार तेल सेन्ट बन्छन तिनीहरु
									को आयु र गुण बढाउने कामका श्रीखण्ड्को तेल
									अनिवार्य रूपमा मिसाउनु पर्ने हुन्छ, जसका
									कारण यसको बजार बिश्वब्यापी भएको हो ।
								</p>

								<p>
									यस्तो महत्वोपुर्ण आम्दानीको श्रोत भएको
									श्रीखण्ड को एउटै रुखबाट पनि १ देखी डेढ लाख
									आम्दानी गर्न सकिन्छ । तर यता तिर न सरकारले न
									हामी जनताले ध्यान दिइरहेका छौ जस्तो लाग्छ ।
									मेरो ५/६ बर्ष को यो क्षेत्रमा काम गरेको
									अनुभवबाट र नर्सरी देखी प्लान्टेसनको अवस्था र
									गुणस्तर हेर्दा म अत्यन्त सकारात्मक र
									उत्साहित छु । यदि थोरै जमिनबाट धेरै आम्दानी
									लिनेहो भने एकदिन हामीले यि वनस्पति high
									value medicinal plants ( sandalwood and red
									sanders) को ब्यावसायिक खेतीमा अबश्य जानै
									पर्ने देखिन्छ ।
								</p>

								<p>
									कुनै इच्छुक ब्यक्ती/ सस्थाले श्रीखण्ड र
									रक्तचन्दनको ब्याबसायिक खेती गर्न चाहे
									प्राबिधिक सहयोग र गुणस्तरीय बिरुवाहरु उपलब्ध
									गराउन सकिन्छ ।
								</p>
							</div>
						</div>
					</div>
				</div>

				<FrequentlyAskedQuestion></FrequentlyAskedQuestion>
			</section>

			<Footer></Footer>
		</>
	);
};

export default Article;