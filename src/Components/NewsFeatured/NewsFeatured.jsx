import React from "react";
import styles from "./NewsFeatured.module.scss";
import { Link } from "react-router-dom";

const NewsFeatured = () => {
	return (
		<>
			<section className={`${styles.newsSection} componentSection`}>
				<div className={`${styles.container} container`}>
					<h2 className={`${styles.sectionHeading} sectionHeading`}>
						राष्ट्रिय र स्थानीय पत्रपत्रिकाहरू द्वारा चित्रित
					</h2>
					<p
						className={`${styles.sectionSubHeading} sectionSubHeading`}
					>
						नेपालमा पहिलो पटक चन्दनका काठको व्यावसायिक खेती सुरु
						गरेकोमा हामीले राष्ट्रिय र स्थानीय पत्रपत्रिकाले कभर
						गरेका छन्।
					</p>

					<div className={styles.newsWrapper}>
						<div className={styles.news}>
							<div className={styles.imgWrapper}>
								<img
									src="https://www.nepalkhoj.com/wp-content/uploads/2023/05/Untitled-1-Recovered.jpg"
									alt=""
								/>
							</div>
							<div className={styles.description}>
								<h3 className={styles.newsHeading}>
									कञ्चनपुरमा रक्तचन्दन र श्रीखण्डको व्यावसायिक
									खेती
								</h3>
								<p className={styles.newsDescription}>
									महेन्द्रनगर । कञ्चनपुरको भीमदत्त नगरपालिका–२
									भासीका विजयराज पन्त आठ वर्षदेखि श्रीखण्ड र
									रक्त चन्दनको व्यावसायिक खेती गर्दै आएका छन्
									। उनी श्रीखण्ड र रक्त चन्दनको व्यावसायिक
									खेती गर्ने सुदूरपश्चिमकै पहिलो व्यक्ति हुन्
									। वि.सं २०५० यता झन्डै दुई दशकसम्म विभिन्न
									गैरसरकारी संस्थामा काम गरेका पन्त अहिले सबै
									काम छाडेर श्रीखण्ड, रक्त चन्दन र अगरउडको
									बिरुवा उत्पादनमा सक्रिय छन् । […]
								</p>
								<div className={styles.newsFooter}>
									<div className={styles.newspaper}>
										<div className={styles.logoWrapper}>
											<img
												src="https://www.nepalkhoj.com/wp-content/themes/nplkhoj/images/logo.png"
												alt=""
											/>
										</div>
										<div className={styles.newpaperName}>
											Nepal Khoj
										</div>
										<div className={styles.date}>
											२०८० वैशाख २८ गते
										</div>
									</div>
									<div className="buttonWrapper">
										<a
											href="https://www.nepalkhoj.com/2022/09/23/213278/"
											target="_blank"
										>
											थप पढ्नुहोस्
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className={styles.news}>
							<div className={styles.imgWrapper}>
								<img
									src="https://rajdhanidaily.com/wp-content/uploads/2022/09/Raktachandan.jpg"
									alt=""
								/>
							</div>
							<div className={styles.description}>
								<h3 className={styles.newsHeading}>
									बहुमूल्य वनस्पति : रक्तचन्दन र श्रीखण्डको
									व्यावसायिक खेती
								</h3>
								<p className={styles.newsDescription}>
									कञ्चनपुरको भीमदत्त नगरपालिका–२ का विजयराज
									पन्त गैरसहकारी संस्थाको जागिर छाडेर
									व्यावसायिकरुपमा रक्तचन्दन र श्रीखण्डको
									खेतीमा लागेका छन् । लामो समय विभिन्न
									गैरसहकारी संस्थामा काम गरेका उनले छ वर्षअघि
									जागिर छाडेर वन विभाग र वनस्पति विभागबाट
									अनुमति लिएर रक्तचन्दन र श्रीखण्डको खेती सुरु
									गरेका हुन् । जीवनभरि काम मात्रै कति गर्ने
									भनेर उनले न्यून लगानीमा बढी प्रतिफल […]
								</p>
								<div className={styles.newsFooter}>
									<div className={styles.newspaper}>
										<div
											className={styles.logoWrapper}
											id={styles.bgRed}
										>
											<img
												src="https://www.ratopati.com/build/img/logo.png"
												alt=""
											/>
										</div>
										<div className={styles.newpaperName}>
											RatoPati
										</div>
										<div className={styles.date}>
											भाद्र २०७९
										</div>
									</div>
									<div className="buttonWrapper">
										<a
											href="https://www.ratopati.com/story/362146"
											target="_blank"
										>
											थप पढ्नुहोस्
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className={styles.news}>
							<div className={styles.imgWrapper}>
								<img
									src="https://rajdhanidaily.com/wp-content/uploads/2022/09/Raktachandan.jpg"
									alt=""
								/>
							</div>
							<div className={styles.description}>
								<h3 className={styles.newsHeading}>
									कञ्चनपुरमा रक्तचन्दन र श्रीखण्डको व्यावसायिक
									खेती
								</h3>
								<p className={styles.newsDescription}>
									महेन्द्रनगर। कञ्चनपुरको भीमदत्त नगरपालिका–२
									भासीका विजयराज पन्त आठ वर्षदेखि श्रीखण्ड र
									रक्तचन्दनको व्यावसायिक खेती गर्दै आउनुभएको छ
									। उहाँ श्रीखण्ड र रक्तचन्दनको व्यावसायिक
									खेती गर्ने सुदूरपश्चिमकै पहिलो व्यक्ति
									हुनुहुन्छ । विसं २०५० यता झण्डै दुई दशकसम्म
									विभिन्न गैरसरकारी संस्थामा काम गर्नुभएका
									पन्त अहिले सबै काम छाडेर श्रीखण्ड, रक्तचन्दन
									र अगरउडको बिरुवा उत्पादनमा […]
								</p>
								<div className={styles.newsFooter}>
									<div className={styles.newspaper}>
										<div className={styles.logoWrapper}>
											<img
												src="https://onlineradionepal.gov.np/wp-content/uploads/2022/08/logo.png"
												alt=""
											/>
										</div>
										<div className={styles.newpaperName}>
											Radio Nepal
										</div>
										<div className={styles.date}>
											२८ बैशाख, २०८०
										</div>
									</div>
									<div className="buttonWrapper">
										<a
											href="https://onlineradionepal.gov.np/2023/05/11/392513.html"
											target="_blank"
										>
											थप पढ्नुहोस्
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.news}>
							<div className={styles.imgWrapper}>
								<img
									src="https://www.hamroartha.com/wp-content/uploads/2023/05/raktachandan.jpg"
									alt=""
								/>
							</div>
							<div className={styles.description}>
								<h3 className={styles.newsHeading}>
									रक्तचन्दन र श्रीखण्डको व्यावसायिक खेती
								</h3>
								<p className={styles.newsDescription}>
									काठमाडौं । कञ्चनपुरको भीमदत्त नगरपालिकामा
									रक्तचन्दन र श्रीखण्डको व्यावसायिक खेती
									गरिएको छ । भीमदत्त नगरपालिका–२ भासीका
									विजयराज पन्त आठ वर्षदेखि श्रीखण्ड र
									रक्तचन्दनको व्यावसायिक खेती गर्दै आएका छन् ।
									उनी श्रीखण्ड र रक्तचन्दनको व्यावसायिक खेती
									गर्ने सुदूरपश्चिमकै पहिलो व्यक्ति हुन् । हाल
									उनले झण्डै डेढ बिघा जग्गामा श्रीखण्ड,
									रक्तचन्दन र अगरउडको खेती […]
								</p>
								<div className={styles.newsFooter}>
									<div className={styles.newspaper}>
										<div className={styles.logoWrapper}>
											<img
												src="https://hamroartha.com/wp-content/uploads/2021/08/Final-logo-hamroartha.png"
												alt=""
											/>
										</div>
										<div className={styles.newpaperName}>
											HamroArtha
										</div>

										<div className={styles.date}>
											२०८० ०१ २८
										</div>
									</div>
									<div className="buttonWrapper">
										<a
											href="https://www.hamroartha.com/agreeculture/56781/"
											target="_blank"
										>
											थप पढ्नुहोस्
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className={styles.news}>
							<div className={styles.imgWrapper}>
								<img
									src="https://www.singhadarbar.com/wp-content/uploads/2022/09/IMG_1550-2048x1365.jpg"
									alt=""
								/>
							</div>
							<div className={styles.description}>
								<h3 className={styles.newsHeading}>
									आयस्तर वृद्धिसँगै विदेशसँगको व्यापारघाटा कम
									गर्न रक्तचन्दन र श्रीखण्डको व्यावसायिक खेती
								</h3>
								<p className={styles.newsDescription}>
									काठमाडौं । लामो समय विभिन्न गैरसहकारी
									संस्थामा काम गरेका उनले ६ वर्षअघि जागिर
									छाडेर वन विभाग र वनस्पति विभागबाट अनुमति
									लिएर रक्तचन्दन र श्रीखण्डको खेती सुरु गरेका
									हुन् । जीवनभरि काम मात्रै कति गर्ने भनेर
									उनले न्यून लगानीमा बढी प्रतिफल आउने कृषि
									क्षेत्रको खोजी गरेको जानकारी दिए । “करिब ६
									महिना जति मैले अध्ययन गरे कुन[…]
								</p>
								<div className={styles.newsFooter}>
									<div className={styles.newspaper}>
										<div className={styles.logoWrapper}>
											<img
												src="https://www.singhadarbar.com/wp-content/uploads/2021/02/singhdarbar-menu-icon.png"
												alt=""
											/>
										</div>
										<div className={styles.newpaperName}>
											Singhdarbar
										</div>

										<div className={styles.date}>
											२०७९ आश्विन ७
										</div>
									</div>
									<div className="buttonWrapper">
										<a href="#" target="_blank">
											थप पढ्नुहोस्
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className={styles.news}>
							<div className={styles.imgWrapper}>
								<img
									src="https://www.hamroartha.com/wp-content/uploads/2023/05/raktachandan.jpg"
									alt=""
								/>
							</div>
							<div className={styles.description}>
								<h3 className={styles.newsHeading}>
									जागिर छाडेर रक्तचन्दन र श्रीखण्डको
									व्यावसायिक खेती
								</h3>
								<p className={styles.newsDescription}>
									कञ्चनपुर । कञ्चनपुरको भीमदत्त नगरपालिका-२ का
									विजयराज पन्त गैरसहकारी संस्थाको जागिर छाडेर
									व्यावसायिकरुपमा रक्तचन्दन र श्रीखण्डको
									खेतीमा लागेका छन् । लामो समय विभिन्न
									गैरसहकारी संस्थामा काम गरेका उनले छ वर्षअघि
									जागिर छाडेर वन विभाग र वनस्पति विभागबाट
									अनुमति लिएर रक्तचन्दन र श्रीखण्डको खेती सुरु
									गरेका हुन् । जीवनभरि काम मात्रै कति गर्ने
									भनेर उनले ’
								</p>
								<div className={styles.newsFooter}>
									<div className={styles.newspaper}>
										<div className={styles.logoWrapper}>
											<img
												src="https://i0.wp.com/www.khabarhub.com/wp-content/uploads/2019/01/logo.png?resize=150%2C150&ssl=1"
												alt=""
											/>
										</div>
										<div className={styles.newpaperName}>
											Khabarhub
										</div>

										<div className={styles.date}>
											७ आश्विन २०७९
										</div>
									</div>
									<div className="buttonWrapper">
										<a
											href="https://khabarhub.com/2022/23/435929/"
											target="_blank"
										>
											थप पढ्नुहोस्
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<h2 className={styles.heading}>
						पाँच वर्ष पहिले र पाँच वर्ष पछि
					</h2>

					<div className={styles.newsBanner}>
						<div className={styles.newsBannerCard}>
							<div className={styles.imgWrapper}>
								<img
									src="https://assets-cdn-api.kantipurdaily.com/thumb.php?src=https://assets-cdn.kantipurdaily.com/uploads/source/news/kantipur/2017/money-finance/farming-18082017081126-1000x0.jpg&w=1000&h=0"
									alt=""
								/>
							</div>
							<h3>श्रीखण्ड र रक्तचन्दनको व्यावसायिक खेती</h3>
							<p className={styles.newsDescription}>
								महेन्द्रनगर — कञ्चनपुरका एक व्यवसायीले श्रीखण्ड
								र रक्तचन्दनको व्यावसायिक खेती सुरु गरेका छन् ।
								उनले औषधिजन्य बिरुवाको माग र बजारको सम्भावनालाई
								देखेर गत वर्षदेखि श्रीखण्ड र रक्तचन्दनको खेती
								थालेका हुन् ।
								<br />
								<br />
								गत वर्ष भदौदेखि श्रीखण्डका १ सय र रक्तचन्दनका ४
								सय बिरुवा रोपेर भीमदत्त नगरपालिका भासीका विजयराज
								पन्तले व्यावसायिक खेती सुरु गरेका हुन् । नेपालमै
								पहिलो व्यावसायिक खेती भएको उनको दाबी छ । पन्तले
								भारत बैंगलोरबाट तालिम लिएर श्रीखण्ड तथा
								रक्तचन्दनको पहिलो चरणमा ५ सय बिरुवा रोपेका हुन्
								।
								<button type="button">
									<Link to="/news">थप पढ्नुहोस्</Link>{" "}
								</button>
							</p>
							<div className={styles.cardFooter}>
								<div className={styles.logoWrapper}>
									<img
										src="https://ekantipur.com/logo.png"
										alt=""
									/>{" "}
								</div>
								<p className={styles.date}>
									<b>प्रकाशित मिति:</b> भाद्र २, २०७४ --
									चित्रांग थापा
								</p>
							</div>
						</div>
						<div className={styles.newsBannerCard}>
							<div className={styles.imgWrapper}>
								<img
									src="https://assets-cdn-api.kantipurdaily.com/thumb.php?src=https://assets-cdn.kantipurdaily.com/uploads/source/news/kantipur/2022/miscellaneous/raktachandankanchanpurphoto32408195ka-2582022040722-1000x0.jpg&w=1000&h=0"
									alt=""
								/>
							</div>
							<h3>हुर्किंदै रक्तचन्दन र श्रीखण्ड</h3>
							<p className={styles.newsDescription}>
								कञ्चनपुर — वरिपरि धान खेत । बीचमा सानो नर्सरी ।
								यही नर्सरीमा हुर्किरहेका छन् रक्तचन्दन र
								श्रीखण्डका बिरुवा । ६ वर्षअघि रोपिएका ती
								बिरुवाहरू अब निकै ठूला भइसकेका छन् । ती
								बिरुवाहरू हेर्न स्थानीयसँगै बटुवा पनि आकर्षित
								छन् ।
								<br />
								<br />
								कञ्चनपुरको भीमदत्त नगरपालिका २ भासीमा स्थानीय
								विजयराज पन्तले ६ वर्षअघि ४/४ सय बिरुवा रक्त
								चन्दन र श्रीखण्ड खेती सुरु गरेका हुन् । दक्षिण
								भारतमा तालिमसँगै त्यहींबाट बीउ ल्याएर आफैंले
								नर्सरी बनाई रक्तचन्दनको खेती थालेका हुन् ।
								<button type="button">
									<Link to="/news">थप पढ्नुहोस्</Link>{" "}
								</button>
							</p>

							<div className={styles.cardFooter}>
								<div className={styles.logoWrapper}>
									<img
										src="https://ekantipur.com/logo.png"
										alt=""
									/>{" "}
								</div>
								<p className={styles.date}>
									<b>प्रकाशित मिति:</b> भाद्र ९, २०७९ -- भवानी
									भट्ट
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default NewsFeatured;
