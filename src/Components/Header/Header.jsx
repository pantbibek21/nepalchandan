import React, { useState } from "react";
import styles from "./Header.module.scss";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Header = () => {
	const [isHeaderHidden, setIsHeaderHidden] = useState(true);

	function clickHandler() {
		setIsHeaderHidden(!isHeaderHidden);
	}

	return (
		<>
			<section className={styles.headerSection}>
				<div className={styles.mobileMenu} onClick={clickHandler}>
					<IoMenu
						style={{
							color: "black",
							fontSize: "50px",
							cursor: "pointer",
						}}
					/>{" "}
				</div>
				<header
					className={`${styles.header} ${
						isHeaderHidden ? styles.active : ""
					}`}
				>
					<div className={styles.container}>
						<nav>
							<ul>
								<div className={styles.leftListItems}>
									<li onClick={clickHandler}>
										<Link to="/nepalchandan">होम</Link>
									</li>
									<li onClick={clickHandler}>
										<Link to="/nursery">नर्सरी</Link>
									</li>
									<li onClick={clickHandler}>
										<Link to="/news">विशेष समाचार</Link>
									</li>
									<li onClick={clickHandler}>
										<Link to="/article">लेखहरू</Link>
									</li>
									<li onClick={clickHandler}>
										<Link to="/gallery">ग्यालेरी</Link>
									</li>
									<li onClick={clickHandler}>
										<Link to="/faq">
											बारम्बार सोधिने प्रश्नहरू
										</Link>
									</li>
									<li onClick={clickHandler}>
										<Link to="/contact">सम्पर्क </Link>
									</li>
								</div>

								<div className={styles.rightListItems}>
									<li onClick={clickHandler}>
										<Link to="/notice">सूचना</Link>
									</li>
									<li onClick={clickHandler}>
										<Link
											to="/buy"
											style={{
												backgroundColor: "yellow",
												color: "blue",
											}}
										>
											बिरुवा किन्नुहोस्
										</Link>
									</li>
								</div>
							</ul>
						</nav>
					</div>
				</header>

				<div className={styles.container}>
					<section className={styles.logoRow}>
						<div className={styles.logoWrapper}>
							<span>
								सुगन्धका सुरक्षित समृद्धि, हाम्रो लक्ष्य
							</span>
						</div>
						<div className={styles.headerContact}>
							<div className={styles.phoneNumberWrapper}>
								<FaPhone
									style={{ color: "green", fontSize: "20px" }}
								/>{" "}
								<a
									href="tel:9848724030"
									className={styles.phoneNumber}
								>
									9848724030
								</a>
							</div>
							<div className={styles.emailWrapper}>
								<MdEmail
									style={{ color: "green", fontSize: "20px" }}
								/>{" "}
								<a href="mailto:#" className={styles.email}>
									nepalchandan2014@gmail.com
								</a>
							</div>
						</div>
					</section>
				</div>
			</section>
		</>
	);
};

export default Header;
