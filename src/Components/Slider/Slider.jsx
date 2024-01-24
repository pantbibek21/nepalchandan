import React, { useState, useEffect, useRef } from "react";
import styles from "./Slider.module.scss";

const Slider = () => {
	const [counter, setCounter] = useState(0);
	const intervalRef = useRef(null);

	const slides = [
		"https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticle_images%2F2018%2F10%2F14%2Ffile72b5sgyp39uz9yuu8h4-1539457492.jpg",
		"https://images.deccanherald.com/deccanherald/import/sites/dh/files/articleimages/2022/02/15/file7imxpjtcj4keujqxcu0-1081618-1644899144.jpg",
		"https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticle_images%2F2018%2F10%2F14%2Ffile72b5sgyp39uz9yuu8h4-1539457492.jpg",
		"https://images.deccanherald.com/deccanherald/import/sites/dh/files/articleimages/2022/02/15/file7imxpjtcj4keujqxcu0-1081618-1644899144.jpg",
	];

	const imageHeadings = [
		"हामी नेपालभर चन्दन र रातो चन्दनको बिरुवा र बिरुवा उपलब्ध गराउँदैछौं।",
		"महेन्द्रनगर, नेपाल मा गुणस्तरीय नर्सरी बिरुवाहरु।",
		"हामी नेपालभर चन्दन र रातो चन्दनको बिरुवा र बिरुवा उपलब्ध गराउँदैछौं।",
		"महेन्द्रनगर, नेपाल मा गुणस्तरीय नर्सरी बिरुवाहरु।",
	];

	const imageDescriptions = [
		"चन्दनको बोट धेरै औषधीय मूल्यहरु संग प्रकृति को खजाना हो! ",
		"यो लोपोन्मुख प्रजातिलाई नेपालमा ठूलो संख्यामा रोपेर बचाउनुहोस्!",
		"चन्दनको बोट धेरै औषधीय मूल्यहरु संग प्रकृति को खजाना हो!",
		"यो लोपोन्मुख प्रजातिलाई नेपालमा ठूलो संख्यामा रोपेर बचाउनुहोस्!",
	];

	const startSlideShow = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
		// intervalRef.current = setInterval(() => {
		// 	setCounter((current) => (current + 1) % slides.length);
		// }, 3000);
	};

	const handlePrevClick = () => {
		setCounter((prevCounter) =>
			prevCounter === 0 ? slides.length - 1 : prevCounter - 1
		);
		startSlideShow();
	};

	const handleNextClick = () => {
		setCounter((prevCounter) => (prevCounter + 1) % slides.length);
		startSlideShow();
	};

	useEffect(() => {
		startSlideShow();
		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, []);

	return (
		<>
			<section className={styles.carousal}>
				<ul className={styles.carousalList}>
					{slides.map((src, index) => (
						<li
							key={index}
							style={{ left: `${(index - counter) * 100}%` }}
						>
							<img src={src} alt={`slide ${counter}`} />
							<div
								className={`${styles.imgDescription} ${
									styles[`imgDescription-${index + 1}`]
								}`}
							>
								<h3>{imageHeadings[index]}</h3>
								<p>{imageDescriptions[index]}</p>
								<button id={styles.ctaButton} type="button">
									<a href="#serviceSectionId">
										हाम्रा सेवाहरू
									</a>
								</button>
							</div>
						</li>
					))}
				</ul>

				<button
					type="button"
					id={styles.prevBtn}
					onClick={handlePrevClick}
				>
					&#8656;
				</button>

				<button
					type="button"
					id={styles.nextBtn}
					onClick={handleNextClick}
				>
					&#8658;
				</button>
			</section>
		</>
	);
};

export default Slider;
