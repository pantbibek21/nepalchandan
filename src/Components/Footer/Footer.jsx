import React from "react";
import styles from "./Footer.module.scss";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

//importing components

const Footer = () => {
	return (
		<>
			<section className={`${styles.footerSection}`}>
				<div className={`${styles.container} container`}>
					<footer className={styles.footerWrapper}>
						<div
							className={`${styles.col} ${styles["company-col"]}`}
						>
							<div className={styles.imgWrapper}>
								<img
									src="https://ekantipur.com/logo.png"
									alt=""
								/>
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Laborum, accusamus. Sed
								deleniti aperiam, voluptatibus accusamus
								recusandae maiores blanditiis quia pariatur iste
								reiciendis corporis similique. Fuga tempora
								minima neque placeat! Consectetur?
							</p>
						</div>
						<div className={`${styles.col} ${styles["quick-col"]}`}>
							<h2 className={styles.footerHeading}>
								सामग्री खोज
							</h2>
							<ul>
								<li>
									<Link to="/">होम</Link>
								</li>
								<li>
									<Link to="/nursery">नर्सरी</Link>
								</li>
								<li>
									<Link to="/news">विशेष समाचार</Link>
								</li>
								<li>
									<Link to="/article">लेखहरू</Link>
								</li>
								<li>
									<Link to="/gallery">ग्यालेरी</Link>
								</li>
								<li>
									<Link to="/faq">
										बारम्बार सोधिने प्रश्नहरू
									</Link>
								</li>
								<li>
									<Link to="/contact">सम्पर्क गर्नुहोस्</Link>
								</li>
								<li>
									<Link to="/notice">सूचना</Link>
								</li>
								<li>
									<Link to="/buy">बिरुवा किन्नुहोस्</Link>
								</li>
							</ul>
						</div>
						<div
							className={`${styles.col} ${styles["services-col"]}`}
						>
							<h2 className={styles.footerHeading}>
								हाम्रा सेवाहरू
							</h2>
							<ul>
								<li>
									<Link to="/buy">श्रीखंड चन्दन बिरुवा</Link>
								</li>
								<li>
									<Link to="/buy">रक्त चन्दन बिरुवा</Link>
								</li>
								<li>
									<Link to="/buy">अग्रवुड बिरुवाहरू</Link>
								</li>
								<li>
									<Link to="/buy">वृक्षारोपण सल्लाह</Link>
								</li>
								<li>
									<Link to="/buy">प्राविधिक समर्थन</Link>
								</li>
								<li>
									<Link to="/buy">तालिमहरू</Link>
								</li>
							</ul>
						</div>
						<div
							className={`${styles.col} ${styles["contact-col"]}`}
						>
							<h2 className={styles.footerHeading}>स्थान</h2>
							<p className={styles.location}>
								<FaLocationDot
									style={{
										color: "rgba(255, 255, 0, 0.623)",
										marginRight: "6px",
									}}
								>
									{" "}
								</FaLocationDot>
								भासी - ०२, भीमदत्त नगरपालिका (महेन्द्रनगर),
								कञ्चनपुर, सुदूरपश्चिम प्रदेश
							</p>
							<p>
								<FaPhone
									style={{
										color: "rgba(255, 255, 0, 0.623)",
										"margin-right": "6px",
									}}
								></FaPhone>{" "}
								9848724030
							</p>
							<p>
								<MdEmail
									style={{
										color: "rgba(255, 255, 0, 0.623)",
										"margin-right": "6px",
									}}
								></MdEmail>
								nepalchandan2014@gmail.com
							</p>
						</div>
					</footer>
					<p className={styles.footerNote}>
						All rights reserved &copy; Nepal Chandan Pvt. Ltd
					</p>
				</div>
			</section>
		</>
	);
};

export default Footer;
