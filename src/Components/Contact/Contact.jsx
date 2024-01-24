import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
	return (
		<>
			<section className={`${styles.contactSection} componentSection`}>
				<div className={`${styles.container} container`}>
					<h2 className={`${styles.sectionHeading} sectionHeading`}>
						सम्पर्क गर्नुहोस्
					</h2>
					<p
						className={`${styles.sectionSubHeading} sectionSubHeading`}
					>
						हामी तपाईंलाई थाहा हुनु पर्ने सबै कुरा प्रदान गर्न
						उत्सुक छौं!
					</p>

					<form>
						<div className={styles.left}>
							<div className={styles.formField}>
								<label htmlFor="name">नाम</label>
								<input
									id="name"
									type="text"
									autoComplete="off"
								/>
							</div>
							<div className={styles.formField}>
								<label htmlFor="address">ठेगाना</label>
								<input
									id="address"
									type="text"
									autoComplete="off"
								/>
							</div>
							<div className={styles.formField}>
								<label htmlFor="phone">सम्पर्क नम्बर</label>
								<input
									id="phone"
									type="text"
									autoComplete="off"
								/>
							</div>
						</div>
						<div className={styles.right}>
							<div className={styles.formField}>
								<label htmlFor="query">जिज्ञासा</label>
								<textarea id="query" rows={9}></textarea>
							</div>
							<button>पेश गर्नुहोस्</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default Contact;
