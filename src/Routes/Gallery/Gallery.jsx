import React from "react";
import styles from "./Gallery.module.scss";
import Hero from "../Hero/Hero";
import Header from "../../Components/Header/Header";
import FrequentlyAskedQuestion from "../../Components/FrequentlyAskedQuestions/FrequentlyAskedQuestion";
import Footer from "../../Components/Footer/Footer";

const Gallery = () => {
	const farmPictures = [
		"https://scontent.fktm16-1.fna.fbcdn.net/v/t1.6435-9/202278409_10218838977105954_5318493969291852865_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3ba11c&_nc_ohc=JSW22IdoGZsAX_DbhTj&_nc_ht=scontent.fktm16-1.fna&oh=00_AfBZ-ZCe8hp70yuhVwGvxKy_L6fAV5s1dQvb0uYN2RAH6g&oe=65D45A91",
		"https://scontent.fktm16-1.fna.fbcdn.net/v/t1.6435-9/202278409_10218838977105954_5318493969291852865_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3ba11c&_nc_ohc=JSW22IdoGZsAX_DbhTj&_nc_ht=scontent.fktm16-1.fna&oh=00_AfBZ-ZCe8hp70yuhVwGvxKy_L6fAV5s1dQvb0uYN2RAH6g&oe=65D45A91",
		"https://scontent.fktm16-1.fna.fbcdn.net/v/t1.6435-9/202278409_10218838977105954_5318493969291852865_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3ba11c&_nc_ohc=JSW22IdoGZsAX_DbhTj&_nc_ht=scontent.fktm16-1.fna&oh=00_AfBZ-ZCe8hp70yuhVwGvxKy_L6fAV5s1dQvb0uYN2RAH6g&oe=65D45A91",
		"https://scontent.fktm16-1.fna.fbcdn.net/v/t1.6435-9/202278409_10218838977105954_5318493969291852865_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3ba11c&_nc_ohc=JSW22IdoGZsAX_DbhTj&_nc_ht=scontent.fktm16-1.fna&oh=00_AfBZ-ZCe8hp70yuhVwGvxKy_L6fAV5s1dQvb0uYN2RAH6g&oe=65D45A91",
		"https://scontent.fktm16-1.fna.fbcdn.net/v/t1.6435-9/202278409_10218838977105954_5318493969291852865_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3ba11c&_nc_ohc=JSW22IdoGZsAX_DbhTj&_nc_ht=scontent.fktm16-1.fna&oh=00_AfBZ-ZCe8hp70yuhVwGvxKy_L6fAV5s1dQvb0uYN2RAH6g&oe=65D45A91",
		"https://scontent.fktm16-1.fna.fbcdn.net/v/t1.6435-9/202278409_10218838977105954_5318493969291852865_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3ba11c&_nc_ohc=JSW22IdoGZsAX_DbhTj&_nc_ht=scontent.fktm16-1.fna&oh=00_AfBZ-ZCe8hp70yuhVwGvxKy_L6fAV5s1dQvb0uYN2RAH6g&oe=65D45A91",
		"https://scontent.fktm16-1.fna.fbcdn.net/v/t1.6435-9/202278409_10218838977105954_5318493969291852865_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3ba11c&_nc_ohc=JSW22IdoGZsAX_DbhTj&_nc_ht=scontent.fktm16-1.fna&oh=00_AfBZ-ZCe8hp70yuhVwGvxKy_L6fAV5s1dQvb0uYN2RAH6g&oe=65D45A91",
		"https://scontent.fktm16-1.fna.fbcdn.net/v/t1.6435-9/202278409_10218838977105954_5318493969291852865_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3ba11c&_nc_ohc=JSW22IdoGZsAX_DbhTj&_nc_ht=scontent.fktm16-1.fna&oh=00_AfBZ-ZCe8hp70yuhVwGvxKy_L6fAV5s1dQvb0uYN2RAH6g&oe=65D45A91",
		"https://scontent.fktm16-1.fna.fbcdn.net/v/t1.6435-9/202278409_10218838977105954_5318493969291852865_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3ba11c&_nc_ohc=JSW22IdoGZsAX_DbhTj&_nc_ht=scontent.fktm16-1.fna&oh=00_AfBZ-ZCe8hp70yuhVwGvxKy_L6fAV5s1dQvb0uYN2RAH6g&oe=65D45A91",
	];

	const nurseryPictures = [
		"https://scontent.fktm16-1.fna.fbcdn.net/v/t1.6435-9/200227970_10218838975585916_2180401304775619340_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3ba11c&_nc_ohc=J_nWTin2ayAAX8psovm&_nc_oc=AQljdj8lemgv1BZ554paT9Do5t8qObdoNn2WRxyBB02h2E4tWXKvTBA1LGCp04xUVzwp6759yP5cMeoj1AmZVpax&_nc_ht=scontent.fktm16-1.fna&oh=00_AfB2lN4u36rBsrZRLLm63tDhVxOd6kGg6Sgf7v0VIGbArg&oe=65D47C5B",
		"https://scontent.fktm16-1.fna.fbcdn.net/v/t1.6435-9/200227970_10218838975585916_2180401304775619340_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3ba11c&_nc_ohc=J_nWTin2ayAAX8psovm&_nc_oc=AQljdj8lemgv1BZ554paT9Do5t8qObdoNn2WRxyBB02h2E4tWXKvTBA1LGCp04xUVzwp6759yP5cMeoj1AmZVpax&_nc_ht=scontent.fktm16-1.fna&oh=00_AfB2lN4u36rBsrZRLLm63tDhVxOd6kGg6Sgf7v0VIGbArg&oe=65D47C5B",
		"https://scontent.fktm16-1.fna.fbcdn.net/v/t1.6435-9/200227970_10218838975585916_2180401304775619340_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3ba11c&_nc_ohc=J_nWTin2ayAAX8psovm&_nc_oc=AQljdj8lemgv1BZ554paT9Do5t8qObdoNn2WRxyBB02h2E4tWXKvTBA1LGCp04xUVzwp6759yP5cMeoj1AmZVpax&_nc_ht=scontent.fktm16-1.fna&oh=00_AfB2lN4u36rBsrZRLLm63tDhVxOd6kGg6Sgf7v0VIGbArg&oe=65D47C5B",
		"https://scontent.fktm16-1.fna.fbcdn.net/v/t1.6435-9/200227970_10218838975585916_2180401304775619340_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3ba11c&_nc_ohc=J_nWTin2ayAAX8psovm&_nc_oc=AQljdj8lemgv1BZ554paT9Do5t8qObdoNn2WRxyBB02h2E4tWXKvTBA1LGCp04xUVzwp6759yP5cMeoj1AmZVpax&_nc_ht=scontent.fktm16-1.fna&oh=00_AfB2lN4u36rBsrZRLLm63tDhVxOd6kGg6Sgf7v0VIGbArg&oe=65D47C5B",
		"https://scontent.fktm16-1.fna.fbcdn.net/v/t1.6435-9/200227970_10218838975585916_2180401304775619340_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3ba11c&_nc_ohc=J_nWTin2ayAAX8psovm&_nc_oc=AQljdj8lemgv1BZ554paT9Do5t8qObdoNn2WRxyBB02h2E4tWXKvTBA1LGCp04xUVzwp6759yP5cMeoj1AmZVpax&_nc_ht=scontent.fktm16-1.fna&oh=00_AfB2lN4u36rBsrZRLLm63tDhVxOd6kGg6Sgf7v0VIGbArg&oe=65D47C5B",
		"https://scontent.fktm16-1.fna.fbcdn.net/v/t1.6435-9/200227970_10218838975585916_2180401304775619340_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3ba11c&_nc_ohc=J_nWTin2ayAAX8psovm&_nc_oc=AQljdj8lemgv1BZ554paT9Do5t8qObdoNn2WRxyBB02h2E4tWXKvTBA1LGCp04xUVzwp6759yP5cMeoj1AmZVpax&_nc_ht=scontent.fktm16-1.fna&oh=00_AfB2lN4u36rBsrZRLLm63tDhVxOd6kGg6Sgf7v0VIGbArg&oe=65D47C5B",
		"https://scontent.fktm16-1.fna.fbcdn.net/v/t1.6435-9/200227970_10218838975585916_2180401304775619340_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3ba11c&_nc_ohc=J_nWTin2ayAAX8psovm&_nc_oc=AQljdj8lemgv1BZ554paT9Do5t8qObdoNn2WRxyBB02h2E4tWXKvTBA1LGCp04xUVzwp6759yP5cMeoj1AmZVpax&_nc_ht=scontent.fktm16-1.fna&oh=00_AfB2lN4u36rBsrZRLLm63tDhVxOd6kGg6Sgf7v0VIGbArg&oe=65D47C5B",
		"https://scontent.fktm16-1.fna.fbcdn.net/v/t1.6435-9/200227970_10218838975585916_2180401304775619340_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3ba11c&_nc_ohc=J_nWTin2ayAAX8psovm&_nc_oc=AQljdj8lemgv1BZ554paT9Do5t8qObdoNn2WRxyBB02h2E4tWXKvTBA1LGCp04xUVzwp6759yP5cMeoj1AmZVpax&_nc_ht=scontent.fktm16-1.fna&oh=00_AfB2lN4u36rBsrZRLLm63tDhVxOd6kGg6Sgf7v0VIGbArg&oe=65D47C5B",
	];

	return (
		<>
			<section className="componentSection">
				<Header></Header>
				<Hero
					heading="ग्यालेरी"
					description="यी हाम्रो फार्म र नर्सरीमा चन्दन र रातो चन्दनको बोटको चित्र हुन्। हामीसँग तपाईंको लागि बिरुवा छ, हामीलाई सम्पर्क गर्नुहोस्।"
				></Hero>
				<div className={`${styles.container} container`}>
					<div className={styles.imageSection}>
						<h2 className={styles.heading}>
							हामीले दस वर्ष पहिले सुरु गरेको हाम्रो फार्म
							चित्रहरू
						</h2>

						<div className={styles.images}>
							{farmPictures.map((item, index) => (
								<div className={styles.imgCard} key={index}>
									<div className={styles.imgWrapper}>
										<img src={`${item}`} alt="" />
									</div>
									<p className={styles.description}>
										Sandalwood plant
									</p>
								</div>
							))}
						</div>
					</div>

					<div className={styles.imageSection}>
						<h2 className={styles.heading}>
							हामीसँग चन्दन र रातो चन्दनको गुणस्तरीय बिरुवासहितको
							आधुनिक नर्सरी छ।
						</h2>

						<div className={styles.images}>
							{nurseryPictures.map((item, index) => (
								<div className={styles.imgCard} key={index}>
									<div className={styles.imgWrapper}>
										<img src={`${item}`} alt="" />
									</div>
									<p className={styles.description}>
										Sandalwood plant
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<Footer></Footer>
		</>
	);
};

export default Gallery;
