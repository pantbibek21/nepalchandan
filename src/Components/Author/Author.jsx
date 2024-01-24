import React from "react";
import styles from "./Author.module.scss";

const Author = () => {
	return (
		<>
			<section className={`${styles.authorSection} componentSection`}>
				<div className={`${styles.container} container`}>
					<h2 className={`${styles.sectionHeading} sectionHeading`}>
						संस्थापक को बारेमा
					</h2>
					<p
						className={`${styles.sectionSubHeading} sectionSubHeading`}
					>
						नेपालमा पहिलो पटक चन्दन र रातो चन्दनको व्यावसायिक खेतीमा
						यो क्रान्तिको थालनी गर्नुको पछाडिको कथा पढ्नुहोस्। यो
						प्रयास गर्नको लागि उनको पृष्ठभूमि र प्रेरणा बारे
						अन्तर्दृष्टि प्राप्त गर्नुहोस्।
					</p>

					<div className={styles.authorContainer}>
						<div className={styles.authorDescriptionContainer}>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Sint laboriosam veritatis
								aspernatur tempora, et ea asperiores
								exercitationem minus quaerat saepe vero quis
								commodi aliquid perspiciatis repellat aliquam
								dolores dicta iure ipsam sed reiciendis quas
								accusamus minima. Dolore repellendus magnam quas
								officiis, commodi, possimus obcaecati nostrum a
								minus dolorum voluptatum quae amet accusamus
								molestiae velit distinctio deleniti labore
								quibusdam reiciendis optio reprehenderit! Culpa
								numquam doloribus nisi, quidem itaque eos velit
								inventore. Eos, aut repellendus! Deleniti
								repudiandae, omnis debitis, ducimus excepturi
								dolorem voluptatum odit doloremque vero
								molestias explicabo beatae? Corporis minus odio,
								nisi corrupti blanditiis dolorum voluptas rerum,
								sed ex expedita labore?
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Sint laboriosam veritatis
								aspernatur tempora, et ea asperiores
								exercitationem minus quaerat saepe vero quis
								commodi aliquid perspiciatis repellat aliquam
								dolores dicta iure ipsam sed reiciendis quas
								accusamus minima. Dolore repellendus magnam quas
								officiis, commodi, possimus obcaecati nostrum a
								minus dolorum voluptatum quae amet accusamus
								molestiae velit distinctio deleniti labore
								quibusdam reiciendis optio reprehenderit! Culpa
								numquam doloribus nisi, quidem itaque eos velit
								inventore. Eos, aut repellendus! Deleniti
								repudiandae, omnis debitis, ducimus excepturi
								dolorem voluptatum odit doloremque vero
								molestias explicabo beatae? Corporis minus odio,
								nisi corrupti blanditiis dolorum voluptas rerum,
								sed ex expedita labore?
							</p>
						</div>

						<div className={styles.authorDetails}>
							<div className={styles.imgWrapper}>
								<img
									src="https://assets-cdn-api.kantipurdaily.com/thumb.php?src=https://assets-cdn.kantipurdaily.com/uploads/source/news/kantipur/2017/money-finance/farming-18082017081126-1000x0.jpg&w=1000&h=0"
									alt=""
								/>
							</div>
							<p className={styles.authorName}>
								Mr. Bijay Raj Pant
							</p>
							<p className={styles.authorDesignation}>
								Founder, Nepal Chandan Pvt. Ltd.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Author;
